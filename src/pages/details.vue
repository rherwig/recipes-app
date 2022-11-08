<template>
    <section>
        <BackButton class="mb-8" />

        <div v-if="recipe">
            <div class="flex items-center justify-between mb-4">
                <h1 class="text-2xl font-bold text-emerald-900">
                    {{ recipe.title }}
                </h1>

                <FavoriteButton
                    :favorite="recipe.favorite"
                />
            </div>

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
                class="text-gray-500"
            >
                {{ recipe.description }}
            </p>

            <div
                v-if="recipe.createdAt"
                class="text-gray-500"
            >
                {{ recipe.createdAt }}
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
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import BackButton from '~/components/back-button.vue';
import FavoriteButton from '~/components/favorite-button.vue';
import { Recipe, useRecipesStore } from '~/stores/recipes';
import TheDeleteButton from '~/components/the-delete-button.vue';
import TheEditButton from '~/components/the-edit-button.vue';

const recipes = useRecipesStore();
const router = useRouter();

const id = parseInt(router.currentRoute.value.params.id as string, 10);

const recipe = ref<Recipe>(null);

onMounted(() => {
    recipe.value = recipes.all.find((element) => element.id === id);
});
</script>
