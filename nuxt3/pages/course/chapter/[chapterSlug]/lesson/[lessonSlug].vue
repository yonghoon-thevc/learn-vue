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
        :model-value="isLessonComplete"
        @update:model-value="toggleComplete"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
const course = useCourse();
const route = useRoute();

definePageMeta({
  middleware: [
    function ({ params }, from) {
      const course = useCourse();

      const chapter = computed(() => {
        return course.chapters.find(
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

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});
const lesson = computed(() => {
  return chapter.value.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});

const title = computed(() => {
  return `${lesson.value.title} - ${course.title}`;
});
useHead({
  title,
});

const progress = useLocalStorage("progress", []);

const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) {
    return false;
  }
  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
    return false;
  }
  return progress.value[chapter.value.number - 1][lesson.value.number - 1];
});

const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = [];
  }

  progress.value[chapter.value.number - 1][lesson.value.number - 1] =
    !isLessonComplete.value;
};
</script>
