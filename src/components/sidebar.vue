<script setup lang="ts">
import Link from './link.vue';
import {
    PopoverArrow,
    PopoverClose,
    PopoverContent,
    PopoverPortal,
    PopoverRoot,
    PopoverTrigger,
} from 'radix-vue';

const props = defineProps<{
    contents: {
        label: string;
        href: string;
        contents: {
            label?: string;
            contents: {
                label: string;
                href: string;
                external: boolean;
            }[];
        }[];
    }[];
}>();
</script>

<template>
    <div flex gap-10>
        <div hidden md:flex="~ col" w-56 pt-12 pb-8 gap-5 flex-shrink-0>
            <div v-for="heading in props.contents" w-full gap-4 flex="~ col">
                <Link bold :href="heading.href" :label="heading.label" />

                <div w-full gap-6 flex="~ col">
                    <div
                        v-for="section in heading.contents"
                        w-full
                        gap-3
                        flex="~ col"
                    >
                        <p v-if="section.label" font-bold text-sm>
                            {{ section.label }}
                        </p>
                        <div flex>
                            <div h-auto w-px ml-2 mr-4 bg-neutral-800 />
                            <div w-full gap-2 flex="~ col">
                                <Link
                                    v-for="item in section.contents"
                                    :href="item.href"
                                    :label="item.label"
                                    :external="item.external"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div hidden md:block h-auto w-px mt-6 bg-neutral-800></div>

        <PopoverRoot>
            <PopoverTrigger
                aria-label="Update dimensions"
                md:hidden
                w-full
                p-3
                mt-4
                rounded-lg
                inline-flex
                items-center
                justify-center
                outline="~ 1 neutral-6"
            >
                <span i-lucide-menu></span>
            </PopoverTrigger>
            <PopoverPortal>
                <PopoverContent
                    side="bottom"
                    :align="'center'"
                    :side-offset="5"
                    md:hidden
                    rounded-lg
                    p="x-5 y-8"
                    mx-3
                    bg-neutral-9
                >
                    <div w="[80vw]" flex="~ col" gap-5 flex-shrink-0>
                        <div
                            v-for="heading in props.contents"
                            w-full
                            gap-4
                            flex="~ col"
                        >
                            <Link
                                bold
                                :href="heading.href"
                                :label="heading.label"
                            />

                            <div w-full gap-6 flex="~ col">
                                <div
                                    v-for="section in heading.contents"
                                    w-full
                                    gap-4
                                    flex="~ col"
                                >
                                    <p v-if="section.label" font-bold text-sm>
                                        {{ section.label }}
                                    </p>
                                    <div flex>
                                        <div
                                            h-auto
                                            w-px
                                            ml-2
                                            mr-4
                                            bg-neutral-800
                                        />
                                        <div w-full gap-4 flex="~ col">
                                            <Link
                                                v-for="item in section.contents"
                                                :href="item.href"
                                                :label="item.label"
                                                :external="item.external"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PopoverArrow fill-neutral-9 />
                </PopoverContent>
            </PopoverPortal>
        </PopoverRoot>
    </div>
</template>
