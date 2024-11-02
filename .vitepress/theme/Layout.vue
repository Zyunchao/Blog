<template>
    <div v-if="frontmatter.home">
        <h1>{{ site.title }}</h1>
        <p>{{ site.description }}</p>
        测试的 测试的 测试的 测试的 测试的
        <ul></ul>
    </div>
    <div v-else>
        <a href="/">Home</a>
        <Content />
    </div>
</template>

<script lang="ts" setup>
import { watch, ref, computed, reactive, onMounted, onUnmounted, nextTick } from 'vue'
import { useData } from 'vitepress'

defineOptions({
    name: ''
})

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<style lang="scss" scoped></style>
