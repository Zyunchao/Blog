import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: '张云超的博客',
    description: 'A VitePress Site',
    srcDir: 'src',

    themeConfig: {
        // 主题级选项
    },

    rewrites(id) {
        return id.replace('docs/', '')
    }
})
