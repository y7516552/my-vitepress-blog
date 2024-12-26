<template>
    <div style="margin-top: 24px">
        <Giscus
            id="comments"
            repo="y7516552/my-vitepress-blog"
            repoid="R_kgDOM7XDGw"
            category="Q&A"
            categoryid="DIC_kwDOM7XDG84ClhfR"
            mapping="pathname"
            term="Welcome to giscus!"
            reactionsenabled="1"
            emitmetadata="0"
            inputposition="top"
            loading="lazy"
            :theme="isDark ? 'dark' : 'light'"
            :key="route.path"
        ></Giscus>
    </div>
</template>

<script setup>
import Giscus from '@giscus/vue';
import { useRoute, useData } from 'vitepress';

const route = useRoute();
const { isDark } = useData();
</script>