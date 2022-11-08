<template>
    <header>
        <div class="container flex justify-between">
            <router-link
                to="/"
                class="flex justify-between items-center h-16"
            >
                <img
                    src="/images/pea.png"
                    width="32"
                    height="32"
                    alt=""
                    class="mr-1"
                />

                <div class="text-emerald-900 font-bold text-xl font-title">
                    Recipea
                </div>
            </router-link>

            <div class="flex items-center">
                <TheAddButton />
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import TheAddButton from '~/components/the-add-button.vue';
</script>

<style scoped>
.navigation-link {
    @apply px-4;
}
</style>
