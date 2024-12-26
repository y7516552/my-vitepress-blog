<script setup lang="ts">
    import { useData } from 'vitepress';

    const { frontmatter } = useData();
</script>

<template>
    <OrgaSectionBlock title="Contact">
        <ul class="contact-box">
            <li v-for="contact in frontmatter.contact" :key="`contact-${contact.text}`" class="contact">
                <ElSvgIcon :name="contact.icon" />
                <a :href="contact.href" target="_blank" rel="noopener noreferrer">{{ contact.text }}</a>
            </li>
        </ul>
    </OrgaSectionBlock>
</template>