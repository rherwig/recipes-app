import { resolve } from 'node:path';

import { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default <UserConfig> {
    plugins: [
        vue(),
    ],

    resolve: {
        alias: {
            '~': resolve(__dirname, 'src'),
        },
    },

    server: {
        port: 3000,
    },
};
