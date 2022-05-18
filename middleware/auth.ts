// auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
    const client = useSupabase();
    if (!client.auth.user()) {
      return "/login";
    }
  })