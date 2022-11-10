<template>
    <section>
        <h1 class="text-2xl font-bold text-emerald-900 mb-4">
            My Recipes
        </h1>

        <TheFilter class="mb-4" />

        <RecipesList />
    </section>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head';

import RecipesList from '~/components/recipes-list.vue';
import TheFilter from '~/layout/the-filter.vue';

useHead({
    title: 'Home | Recipea',
});
</script>
