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
}

export const useRecipes = defineStore('recipes', {
    state: (): RecipesState => ({
        all: [],
    }),

    actions: {
        add(recipe: Recipe) {
            this.all.push(recipe);
        },

        remove(id: number) {
            this.all = this.all.filter((recipe) => recipe.id !== id);
        },
    },
});
