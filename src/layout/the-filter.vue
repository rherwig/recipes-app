<template>
    <div class="flex items-center gap-2">
        <div class="text-sm">
            Show
        </div>
        <div class="flex items-center gap-1">
            <button
                class="badge"
                :class="activeClassAll"
                @click="() => handleFilterClick('all')"
            >
                All
            </button>

            <button
                class="badge"
                :class="activeClassFavorites"
                @click="() => handleFilterClick('favorites')"
            >
                Only Favorites
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { useRecipesStore } from '~/stores/recipes';

type Filter = 'all' | 'favorites';

const recipes = useRecipesStore();

const activeClassAll = computed(() => (!recipes.showOnlyFavorites ? 'bg-emerald-500 text-white' : ''));
const activeClassFavorites = computed(() => (recipes.showOnlyFavorites ? 'bg-emerald-500 text-white' : ''));

const handleFilterClick = (filterName: Filter) => {
    recipes.showOnlyFavorites = filterName === 'favorites';
};
</script>

<style scoped>
.badge {
    @apply border rounded-xl px-2 py-1 text-center text-xs transition-all;
}
</style>
