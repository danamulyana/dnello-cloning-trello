<template>
    <h1>sign out</h1>
</template>

<script>
export default {
    asyncData() {
        $nuxt.$fire.auth.signOut()
    },
}
</script>