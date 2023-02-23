<template>
    <div>
        <h1>게시글 전체 보기</h1>
        <div>
            <div v-for="post in data" :key="post.id">
                <h2>{{ post.title }}</h2>
                <p>{{ post.description }}</p>
                <p>{{ post.createdAt }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data, pending, error } = await useAsyncData(
  'mountains',
  () => $fetch('http://localhost:3000/api/post')
)
</script>