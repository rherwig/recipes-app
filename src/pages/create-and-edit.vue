<template>
    <div>
        <h1 class="text-2xl font-bold text-emerald-900 mb-4">
            <template v-if="recipe.id === -1">
                New Recipe
            </template>
            <template v-else>
                {{ recipe.title }}
            </template>
        </h1>

        <div class="flex flex-col max-w-sm gap-2 mb-4">
            <input
                v-model="recipe.title"
                class="form-input"
                placeholder="Title"
            >
            <input
                v-model="recipe.ingredient1"
                class="form-input"
                placeholder="Ingredient 1"
            >
            <input
                v-model="recipe.ingredient2"
                class="form-input"
                placeholder="Ingredient 2"
            >
            <input
                v-model="recipe.ingredient3"
                class="form-input"
                placeholder="Ingredient 3"
            >
            <input
                v-model="recipe.description"
                class="form-input"
                placeholder="Description"
            >
        </div>

        <div class="flex gap-4">
            <BackButton />
            <TheSaveButton @click="handleSave" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import BackButton from '~/components/back-button.vue';
import TheSaveButton from '~/components/the-save-button.vue';
import { Recipe, useRecipesStore } from '~/stores/recipes';

const router = useRouter();
const recipes = useRecipesStore();

const { id } = router.currentRoute.value.params;

const recipe = id === undefined ? ref<Recipe>({
    id: -1,
    title: '',
    ingredient1: '',
    ingredient2: '',
    ingredient3: '',
    description: '',
    favorite: false,
    createdAt: new Date(),
})
    : ref<Recipe>(recipes.all.find((element) => id === element.id.toString()));

const handleSave = () => {
    recipes.add(recipe.value);

    router.push('/');
};
</script>
