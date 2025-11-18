<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import Footer from "$lib/footer.svelte";
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
  import "../app.css";
  import { browser } from "$app/environment";
  import Navbar from "$lib/navbar.svelte";

  let { children } = $props();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<QueryClientProvider client={queryClient}>
  {@render children()}
</QueryClientProvider>

<Footer />
