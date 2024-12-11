<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        label: string;
        href: string;
        external?: boolean;
        icon?: string;
        iconSize?: string;
        bold?: boolean;
    }>(),
    {
        external: false,
        iconSize: 'size-4',
        bold: false,
    }
);
</script>

<template>
    <a
        :href="props.href"
        :target="props.external ? '_blank' : '_self'"
        :rel="props.external ? 'noopener noreferrer' : ''"
        :class="[
            'flex items-center gap-2 text-neutral-400 hover:text-neutral-200',
            props.external && 'justify-between',
        ]"
    >
        <span v-if="props.icon" :class="[props.icon, props.iconSize]" />
        <p
            :class="
                props.bold
                    ? 'text-md font-bold text-neutral-100'
                    : 'text-sm font-normal'
            "
        >
            {{ props.label }}
        </p>

        <span v-if="external" class="i-lucide-move-up-right size-4" />
    </a>
</template>
