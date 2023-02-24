<template>
  <div>
    <h2>Lesson {{ chapter.number }} - {{ lesson.number }}</h2>
    {{ lesson.title }}
    <div>
      <NuxtLink v-if="lesson.sourceUrl" :to="lesson.sourceUrl">
        {{ lesson.sourceUrl }}
      </NuxtLink>
      <NuxtLink v-if="lesson.downloadUrl" :to="lesson.downloadUrl">
        {{ lesson.downloadUrl }}
      </NuxtLink>
    </div>
    <VideoPlayer v-if="lesson.videoId" :video-id="lesson.videoId"></VideoPlayer>
    {{ lesson.text }}
    <ClientOnly>
      <LessonCompleteButton
        v-if="user"
        :model-value="isCompleted"
        @update:model-value="toggleComplete"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import { courseProgress } from "~/stores/courseProgress.ts";
import { useCourseProgress } from "~~/stores/courseProgress";
const course = await useCourse();
const route = useRoute();
const { chapterSlug, lessonSlug } = route.params;
const lesson = await useLesson(chapterSlug, lessonSlug);
const store = useCourseProgress();
const { initialize, toggleComplete } = store;

initialize();

definePageMeta({
  middleware: [
    async function ({ params }, from) {
      const course = await useCourse();

      const chapter = computed(() => {
        return course.value.chapters.find(
          (chapter) => chapter.slug === params.chapterSlug
        );
      });

      if (!chapter.value) {
        throw abortNavigation(
          createError({
            statusCode: 404,
            message: "Chapter not found",
          })
        );
      }

      const lesson = computed(() => {
        return chapter.value.lessons.find(
          (lesson) => lesson.slug === params.lessonSlug
        );
      });

      if (!lesson.value) {
        throw abortNavigation(
          createError({
            statusCode: 404,
            message: "Lesson not found",
          })
        );
      }
    },
    "auth",
  ],
});

const isCompleted = computed(() => {
  return store.progress?.[chapterSlug]?.[lessonSlug] || 0;
});

const chapter = computed(() => {
  return course.value.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const title = computed(() => {
  return `${lesson.value.title} - ${course.value.title}`;
});

useHead({
  title,
});
</script>
