<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import RightIcon from '$lib/assets/icons/right-arrow-black.svg';
  
    export let totalData: number = 0;
    export let pageSize: number = 20;
    export let currentPage: number = 1;
    export let baseUrl: string = ''; // e.g. "/shoes/Men's" or "/shoes/search"
  
    $: totalPages = Math.ceil(totalData / pageSize);
    $: hasPrev = currentPage > 1;
    $: hasNext = currentPage < totalPages;
  
    function goToPage(_page: number) {
      const url = new URL($page.url);
      url.pathname = baseUrl;
      url.searchParams.set('page', _page.toString());
      goto(url.toString());
    }
  </script>
  
  <div class="flex items-center justify-center gap-4 mt-10">
    <!-- PREV -->
    <button
      on:click={() => goToPage(currentPage - 1)}
      disabled={!hasPrev}
      class="p-3 rounded-full transition {hasPrev ? 'hover:bg-gray-100' : 'opacity-50 cursor-not-allowed'}"
      aria-label="Previous page"
    >
      <img src={RightIcon} width="30" height="30" class="rotate-180" alt="" />
    </button>
  
    <!-- CURRENT PAGE -->
    <div class="px-6 py-3 bg-black text-white font-bold rounded">
      {currentPage}
    </div>
  
    <!-- NEXT -->
    <button
      on:click={() => goToPage(currentPage + 1)}
      disabled={!hasNext}
      class="p-3 rounded-full transition {hasNext ? 'hover:bg-gray-100' : 'opacity-50 cursor-not-allowed'}"
      aria-label="Next page"
    >
      <img src={RightIcon} width="30" height="30" alt="" />
    </button>
  </div>