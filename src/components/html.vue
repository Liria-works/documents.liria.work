<script setup lang="ts">
const props = defineProps<{
    html: string
    class?: string
}>()

const code = 'px-1.5 py-0.5 rounded-md bg-neutral-8 text-red-4 leading-none'
const content = props.html.replace(/<code>/g, `<code class="${code}">`)
</script>

<template>
    <div v-html="content" :class="'text-base prose'">
    </div>
</template>
