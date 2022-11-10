<template>
    <TransitionGroup
        tag="div"
        name="list"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
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
    </TransitionGroup>
</template>

<script lang="ts" setup>
import RecipeCard from '~/components/recipe-card.vue';
import { useRecipesStore } from '~/stores/recipes';

const recipes = useRecipesStore();
</script>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
    @apply transition-opacity transition-transform;
}

.list-enter-from,
.list-leave-to {
    @apply opacity-0;
    @apply translate-x-[30px]
}

.list-leave-active {
    @apply absolute;
}
</style>
