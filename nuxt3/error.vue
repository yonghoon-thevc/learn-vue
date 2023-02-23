<template>
    <NuxtLayout>
        <div v-if="error.statusCode === '404'">
            <h1>404</h1>
            <p>못찾았음 경로 다시보셈</p>
        </div>
        <div v-else>
            <h1>Dang</h1>
            <p>에러에러에러에러</p>
            <p>다시시도해 다시시도해</p>
        </div>
        <div>
            <p>{{ error.message }}</p>
            <p>
                Go to the
                <a @click="handleError">
                    first lesson
                </a>
            </p>
        </div>
    </NuxtLayout>
</template>

<script setup>
const error = useError()
const handleError = () => {
    clearError({
        redirect: `/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-Vue.js-3`
    })
}
</script>