<template>
    <div>
        <TheHeader class="mb-8" />

        <main class="container">
            <router-view />
        </main>
    </div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head';

import TheHeader from '~/layout/the-header.vue';

useHead({
    title: 'Recipea',
    meta: [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
        },
        {
            name: 'theme-color',
            content: '#ffffff',
        },
        {
            name: 'msapplication-TileColor',
            content: '#ffffff',
        },
        {
            name: 'description',
            content: 'Simply store simple recipes. Lightning fast - on desktop and mobile.',
        },
    ],
    link: [
        {
            rel: 'manifest',
            href: '/site.webmanifest',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicon-16x16.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32x32.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
        },
        {
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
        },
    ],
});
</script>
