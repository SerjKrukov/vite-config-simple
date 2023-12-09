// vite.config.js
import {resolve} from 'path'
import {defineConfig} from 'vite'
import handlebars from 'vite-plugin-handlebars';

const pageData = {
    '/index.html': {
        title: 'Main Page',
    },
    '/det/index.html': {
        title: 'Sub Page',
    },
};

export default defineConfig({
    plugins: [
        handlebars({
            context(pagePath) {
                return pageData[pagePath];
            },
            partialDirectory: resolve(__dirname, 'partials'),
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                det: resolve(__dirname, 'det/index.html'),
            },
        },
    },
})