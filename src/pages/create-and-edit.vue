<template>
    <form
        name="create-edit-form"
        @submit.prevent="handleSubmit"
    >
        <h1 class="text-2xl font-bold text-emerald-900 mb-4">
            <template v-if="recipe.id">
                New Recipe
            </template>
            <template v-else>
                {{ recipe.title }}
            </template>
        </h1>

        <div class="flex flex-col max-w-sm gap-4 mb-4">
            <input
                v-model="recipe.title"
                class="form-input"
                placeholder="Title"
                tabindex="1"
            />

            <div
                class="text-sm text-red-500 -mt-3"
                :class="validationClass"
            >
                Please give your recipe a title.
            </div>

            <input
                v-model="recipe.ingredient1"
                class="form-input"
                placeholder="Ingredient 1"
                tabindex="2"
            />

            <input
                v-model="recipe.ingredient2"
                class="form-input"
                placeholder="Ingredient 2"
                tabindex="3"
            />

            <input
                v-model="recipe.ingredient3"
                class="form-input"
                placeholder="Ingredient 3"
                tabindex="4"
            />

            <textarea
                v-model="recipe.description"
                class="form-input"
                placeholder="Description"
                tabindex="5"
            />
        </div>

        <div class="flex gap-4">
            <BackButton tabindex="99" />
            <TheSaveButton
                type="submit"
                tabindex="6"
            />
        </div>
    </form>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useHead } from '@vueuse/head';

import BackButton from '~/components/buttons/back-button.vue';
import TheSaveButton from '~/components/buttons/the-save-button.vue';
import { Recipe, useRecipesStore } from '~/stores/recipes';

const router = useRouter();
const recipes = useRecipesStore();

type RecipeDto = Partial<Recipe>;

const validationClass = ref('hidden');

const recipeDto = ref<RecipeDto>({
    title: '',
    favorite: false,
    createdAt: new Date(),
});

const withDto = (dto: { [key: string]: any }, obj: { [key: string]: any }, prop: string) => {
    return dto[prop] || (obj && obj[prop]) || null;
};

const recipe = computed<RecipeDto>({
    get() {
        const _recipe = recipes.byId(parseInt(router.currentRoute.value.params.id as string, 10));

        return {
            id: withDto(recipeDto.value, _recipe, 'id'),
            title: withDto(recipeDto.value, _recipe, 'title'),
            description: withDto(recipeDto.value, _recipe, 'description'),
            ingredient1: withDto(recipeDto.value, _recipe, 'ingredient1'),
            ingredient2: withDto(recipeDto.value, _recipe, 'ingredient2'),
            ingredient3: withDto(recipeDto.value, _recipe, 'ingredient3'),
            favorite: withDto(recipeDto.value, _recipe, 'favorite'),
            createdAt: withDto(recipeDto.value, _recipe, 'createdAt'),
        };
    },

    set(value) {
        recipeDto.value = value;
    },
});

const validate = (recipe: Partial<Recipe>): boolean => {
    let isValid = true;

    if (!recipe.title) {
        isValid = false;
    }

    validationClass.value = isValid ? 'hidden' : 'block';

    return isValid;
};

const handleSubmit = () => {
    if (!validate(recipe.value)) {
        return;
    }

    recipes.upsert(recipe.value);
    router.push('/');
};

useHead({
    title: `${recipe.value.id ? recipe.value.title : 'New Recipe'} | Recipea`,
});
</script>
