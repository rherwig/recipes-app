import { defineStore } from 'pinia';

export interface Recipe {
    id: number;
    title: string;
    ingredient1?: string;
    ingredient2?: string;
    ingredient3?: string;
    description?: string;
    favorite?: boolean;
    createdAt?: Date;
}

export interface RecipesState {
    all: Recipe[];
    counter: number;
    showOnlyFavorites: boolean;
}

export const useRecipesStore = defineStore('recipes', {
    state: (): RecipesState => ({
        all: [],
        counter: 0,
        showOnlyFavorites: false,
    }),

    persist: true,

    getters: {
        byId: (state: RecipesState) => (id: number) => state.all.find((recipe) => recipe.id === id),
        favorites: (state: RecipesState): Recipe[] => state.all.filter((recipe) => recipe.favorite),
        filtered(state: RecipesState): Recipe[] {
            return state.showOnlyFavorites ? this.favorites : state.all;
        },
    },

    actions: {
        upsert(recipe: Partial<Recipe>) {
            if (typeof recipe.id === 'undefined' || recipe.id === null) {
                recipe.id = this.counter;
                this.all.push(recipe);
                this.counter++;
                return;
            }

            const index = this.all.findIndex((element) => element.id === recipe.id);
            this.all[index] = recipe;
        },

        toggleFavorite(id: number) {
            const index = this.all.findIndex((element) => element.id === id);
            this.all[index].favorite = !this.all[index].favorite;
        },

        remove(id: number) {
            this.all = this.all.filter((recipe) => recipe.id !== id);
        },
    },
});
