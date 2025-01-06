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
        tabindex="0"
        :href="props.href"
        :target="props.external ? '_blank' : '_self'"
        :rel="props.external ? 'noopener noreferrer' : ''"
        :class="[
            'rounded-md px-2 py-1 flex items-center gap-2',
            'text-neutral-4 hover:text-neutral-2',
            'ring-inset focus-visible:ring-1 ring-neutral-7 focus-visible:bg-neutral-8 focus-visible:outline-none',
            'transition duration-100 delay-0 ease-in-out',
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
