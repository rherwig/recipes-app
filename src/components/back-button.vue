<template>
    <Button @click="handleClick">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 mr-1"
        >
            <path
                fill-rule="evenodd"
                d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                clip-rule="evenodd"
            />
        </svg>

        <span>Back</span>
    </Button>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

import Button from '~/ui/buttons/button.vue';

const router = useRouter();

const handleClick = () => {
    router.push('/');
};
</script>
