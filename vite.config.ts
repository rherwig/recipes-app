import { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default <UserConfig> {
    plugins: [
        vue(),
    ],

    server: {
        port: 3000,
    },
};
