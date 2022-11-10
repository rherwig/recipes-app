<template>
    <div @click.prevent="toggleFavorite">
        <!-- TODO: Animate the heart -->
        <div v-if="props.favorite">
            <HeartFilled />
        </div>
        <div v-else>
            <Heart />
        </div>
    </div>
</template>

<script lang="ts" setup>
import HeartFilled from '~/ui/icons/heart-filled.vue';
import Heart from '~/ui/icons/heart.vue';
import { useRecipesStore } from '~/stores/recipes';

interface Props {
    id: number;
    favorite?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    favorite: false,
});

const recipes = useRecipesStore();

const toggleFavorite = () => {
    recipes.toggleFavorite(props.id);
};
</script>
