import { defineStore } from 'pinia';

export interface Recipe {
    id: number;
    title: string;
    ingredient1: string;
    ingredient2?: string;
    ingredient3?: string;
    description?: string;
    favorite?: boolean;
    createdAt: Date;
}

export interface RecipesState {
    all: Recipe[];
    counter: number;
}

export const useRecipesStore = defineStore('recipes', {
    state: (): RecipesState => ({
        all: [],
        counter: 0,
    }),

    persist: true,

    getters: {
        favorites: (state: RecipesState): Recipe[] => state.all.filter((recipe) => recipe.favorite),
    },

    actions: {
        add(recipe: Recipe) {
            if (recipe.id === -1) {
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
