import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

/**
 * Create a pinia instance and register the persistence plugin.
 * This is used to serialize the pinia state into local storage.
 */
export default () => {
    const pinia = createPinia();

    pinia.use(piniaPluginPersistedstate);

    return pinia;
};
