<template>
    <section>
        <h1 class="text-2xl font-bold text-emerald-900 mb-8">
            My Recipes
        </h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <RecipeCard
                v-for="recipe in recipes.all"
                :id="recipe.id"
                :key="recipe.id"
                :title="recipe.title"
                :description="recipe.description"
                :favorite="recipe.favorite"
                :ingredient-1="recipe.ingredient1"
                :ingredient-2="recipe.ingredient2"
                :ingredient-3="recipe.ingredient3"
                :created-at="recipe.createdAt"
            />
        </div>
    </section>
</template>

<script lang="ts" setup>
import RecipeCard from '~/components/recipe-card.vue';
import { useRecipesStore } from '~/stores/recipes';

const recipes = useRecipesStore();
</script>
