import { resolve } from 'node:path';

import { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

const isDevelopment = process.env.NODE_ENV !== 'production';

export default <UserConfig> {
    plugins: [
        vue(),
        VitePWA({
            injectRegister: 'auto',
            manifest: {
                name: 'Recipea',
                short_name: 'Recipea',
                start_url: '/',
                icons: [
                    {
                        src: '/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: '/android-chrome-512x512-maskable.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                ],
                theme_color: '#ffffff',
                background_color: '#ffffff',
                orientation: 'portrait',
                display: 'standalone',
            },
            devOptions: {
                enabled: isDevelopment,
            },
        }),
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
