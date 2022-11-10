<template>
    <router-link
        :to="`/details/${props.id}`"
        class="block shadow-md border border-gray-50 rounded p-4 transition-all hover:scale-105"
    >
        <div class="flex justify-between pb-2 mb-2 border-b">
            <h2 class="text-xl text-emerald-900">
                {{ props.title }}
            </h2>

            <FavoriteButton
                :id="props.id"
                :favorite="props.favorite"
            />
        </div>

        <div class="text-gray-500">
            {{ props.description }}
        </div>
    </router-link>
</template>

<script lang="ts" setup>
import FavoriteButton from '~/components/buttons/favorite-button.vue';

interface Props {
    id: number;
    title: string;
    favorite?: boolean;
    description?: string;
}

const props = withDefaults(defineProps<Props>(), {
    description: '',
    favorite: false,
});
</script>
