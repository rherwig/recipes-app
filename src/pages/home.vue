<template>
    <section>
        <h1 class="text-2xl font-bold text-emerald-900 mb-8">
            My Recipes
        </h1>

        <RecipesList />
    </section>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head';

import RecipesList from '~/components/recipes-list.vue';

useHead({
    title: 'Home | Recipea',
});
</script>
