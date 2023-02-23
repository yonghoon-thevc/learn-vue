<template>
  <div>
    <div>
      <h1>
        <span>
          <span>{{ title }}</span>
        </span>
      </h1>
    </div>

    <div class="chapter">
      <div class="chapter-list">
        <h3>Chapters</h3>
        <!-- All the lessons for the course listed here -->
        <div v-for="chapter in chapters" :key="chapter.slug">
          <h4>{{ chapter.title }}</h4>
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
const { chapters, title } = useCourse();

const resetError = async (error) => {
  await navigateTo(
    `/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-Vue.js-3`
  );
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
