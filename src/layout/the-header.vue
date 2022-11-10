<template>
    <header>
        <div class="container flex justify-between">
            <TheLogo />

            <div class="flex items-center">
                <TheAddButton />
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import TheAddButton from '~/components/buttons/the-add-button.vue';
import TheLogo from '~/layout/the-logo.vue';
</script>
