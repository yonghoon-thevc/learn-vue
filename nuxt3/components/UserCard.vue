<template>
  <div v-if="user">
    <img :src="profile" alt="test" />
    <div>
      <div>{{ name }}</div>
      <button @click="logout">Log out</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const { auth } = useSupabaseClient();

const logout = async function () {
  const { error } = await auth.signOut();

  if (error) {
    console.log(error);
    return;
  }

  try {
    await $fetch("/api/_supabase/session", {
      method: "POST",
      body: { event: "SIGNED_OUT", session: null },
    });
    user.value = null;
  } catch (e) {
    console.error(error);
  }

  await navigateTo("/login");
};

const name = computed(() => user.value?.user_metadata.full_name);
const profile = computed(() => user.value?.user_metadata.avatar_url);
</script>
