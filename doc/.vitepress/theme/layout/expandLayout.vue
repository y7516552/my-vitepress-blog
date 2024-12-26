<script setup lang="ts">
import GiscusComment from '../compoents/GiscusComment.vue'
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';

const { Layout } = DefaultTheme;

const { frontmatter, page } = useData();

const lastUpdated = computed(() => {
    // 把 page.value.lastUpdated 從時間戳轉換成 西元年月日
    const timestamp = page.value.lastUpdated as number;
    return `${timestamp > 0 ? new Date(timestamp).toLocaleDateString() : ''}`;
});

</script>

<template>
    <Layout :class="[frontmatter.class]">
        <template #doc-before>
            ......
        </template>

        <template #doc-after>
            // [!code ++]
            <GiscusComment /> // [!code ++]
        </template> // [!code ++]

        <template #aside-ads-before>
            ......
        </template>
    </Layout>
</template>