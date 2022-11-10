<template>
    <section>
        <!-- TODO: Create back button arrow -->
        <BackButton class="mb-8" />

        <div v-if="recipe">
            <div class="flex items-center gap-8 mb-4">
                <h1 class="text-2xl font-bold text-emerald-900">
                    {{ recipe.title }}
                </h1>

                <FavoriteButton
                    :id="recipe.id"
                    :favorite="recipe.favorite"
                    class="mt-1"
                />
            </div>

            <h2 class="text-lg font-bold mb-1 text-emerald-900">
                Ingredients
            </h2>
            <ol class="list-decimal mx-4 mb-4">
                <li v-if="recipe.ingredient1">
                    {{ recipe.ingredient1 }}
                </li>

                <li v-if="recipe.ingredient2">
                    {{ recipe.ingredient2 }}
                </li>

                <li v-if="recipe.ingredient3">
                    {{ recipe.ingredient3 }}
                </li>
            </ol>

            <p
                v-if="recipe.description"
                class="text-gray-500 mb-4"
            >
                {{ recipe.description }}
            </p>

            <div
                v-if="createdAtYear"
                class="text-gray-500 text-sm"
            >
                {{ createdAtYear }}
            </div>

            <div class="flex gap-4 mt-8">
                <TheDeleteButton />

                <TheEditButton />
            </div>
        </div>
        <div v-else>
            Rezept nicht gefunden :(
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useHead } from '@vueuse/head';

import BackButton from '~/components/buttons/back-button.vue';
import FavoriteButton from '~/components/buttons/favorite-button.vue';
import { useRecipesStore } from '~/stores/recipes';
import TheDeleteButton from '~/components/buttons/the-delete-button.vue';
import TheEditButton from '~/components/buttons/the-edit-button.vue';

const recipes = useRecipesStore();
const router = useRouter();

const id = parseInt(router.currentRoute.value.params.id as string, 10);

const recipe = computed(() => recipes.byId(id));

const createdAtYear = computed(() => (recipe.value?.createdAt ? new Date(recipe.value?.createdAt as any).toLocaleDateString() : ''));

useHead({
    title: `${recipe.value.title} | Recipea`,
});
</script>
