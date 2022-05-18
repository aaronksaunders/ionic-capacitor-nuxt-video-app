import { createClient } from "@supabase/supabase-js";

export default defineNuxtPlugin((nuxtApp) => {

    const config = useRuntimeConfig();

    const supabase = createClient(config.public.SUPABASE_URL, config.public.SUPABASE_ANON_KEY);

    // allow us to inject, see composables
    // nuxtApp.vueApp.provide('supabase', supabase);
    nuxtApp.provide('supabase', supabase);
});