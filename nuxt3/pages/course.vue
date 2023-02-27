<template>
  <div>
    <div>
      <h1>
        <span>
          <span>{{ course.title }}</span>
        </span>
      </h1>
      <UserCard />
    </div>

    <div class="chapter">
      <div class="chapter-list">
        <h3>Chapters</h3>
        <!-- All the lessons for the course listed here -->
        <div v-for="(chapter, index) in course.chapters" :key="chapter.slug">
          <h4
            class="display: flex; justify-content: space-between; items-align: center;"
          >
            {{ chapter.title }}
            <span v-if="percentageCompleted && user">
              {{ percentageCompleted.chapters[index] }}
            </span>
          </h4>
          <a
            class="ch-lesson"
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            :href="`/course/chapter/${chapter.slug}/lesson/${lesson.slug}`"
          >
            <span>{{ index + 1 }}</span>
            <span style="margin-left: 4px">{{ lesson.title }}</span>
          </a>
        </div>
        <div v-if="percentageCompleted">
          Course completion
          <span> {{ Number(percentageCompleted.course).toFixed(0) }}% </span>
        </div>
      </div>

      <div class="lesson">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{ error }">
            <p>
              Oh no, something broke!
              <code>{{ error }}</code>
            </p>
            <p>
              <button @click="resetError(error)">Reset</button>
            </p>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCourseProgress } from "~/stores/courseProgress";
import { storeToRefs } from "pinia";
const user = useSupabaseUser();
const course = await useCourse();
const firstLesson = await useFirstLesson();

const { percentageCompleted } = storeToRefs(useCourseProgress());

const resetError = async (error) => {
  await navigateTo(firstLesson.path);
  error.value = null;
};

// definePageMeta({
//     layout: 'custom',
// })
</script>

<style>
.chapter {
  display: flex;
  flex-direction: row;
  flex-grow: inherit;
}

.lesson {
  background-color: pink;
}

.ch-lesson {
  display: flex;
  flex-direction: row;
  font: normal;
}
</style>
