<template>
    <component
        :is="component"
        :to="props.to"
        class="inline-flex justify-center items-center bg-emerald-500 text-emerald-50 px-5 py-2 rounded-sm text-sm shadow-md transition-all hover:bg-emerald-600"
        :class="className"
    >
        <slot />
    </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
    isLink?: boolean;
    to?: string;
    kind?: 'primary' | 'danger';
}

const props = withDefaults(defineProps<Props>(), {
    isLink: false,
    to: '',
    kind: 'primary',
});

const component = computed(() => (props.isLink ? 'router-link' : 'button'));
const className = computed(() => ({
    'bg-emerald-500': props.kind === 'primary',
    'hover:bg-emerald-600': props.kind === 'primary',
    'bg-red-500': props.kind === 'danger',
    'hover:bg-red-600': props.kind === 'danger',
}));
</script>
