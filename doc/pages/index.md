---
# layout: expandLayout
layout: home
outline: deep

hero:
  name: "Steven's blog"
  text: "Steven's life blog"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: 開發雜記與分享
      link: /article/code
    - theme: alt
      text: 生活
      link: /article/life

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

# 首頁 

### 歡迎來到 菜比八前端工程師 Steven 的小天地
這裡主要分享一些前端開發遇到的小問題和生活的分享



<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter} = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

