<template>
  <div>
    <h1>Log in to {{ course.title }}</h1>
    <button @click="login">Log in with github</button>
  </div>
</template>

<script setup lang="ts">
const course = await useCourse();
const { query } = useRoute();
const { auth } = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    });
  }
});

const login = async function () {
  const redirectTo = `${window.location.origin}${query.redirectTo}`;
  const { data, error } = await auth.signInWithOAuth({
    provider: "github",
    options: { redirectTo },
  });
  console.log(data);
  if (error) {
    console.log(error);
  }
};
</script>
