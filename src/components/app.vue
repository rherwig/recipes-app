<template>
    <div>
        <TheHeader class="mb-8" />

        <main class="container">
            <router-view />
        </main>
    </div>
</template>

<script lang="ts" setup>
import TheHeader from '~/layout/the-header.vue';
</script>
