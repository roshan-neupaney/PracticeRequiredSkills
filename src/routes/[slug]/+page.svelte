<script lang="ts">
  import FilterBox from '$lib/filterBox.svelte';
  import Pagination from '$lib/pagination.svelte';
  import ProductCard from '$lib/productCard.svelte';

    export let data;
    $: ({
      title,
      shoes,
      totalData,
      pageSize,
      page,
      colors,
      brands,
      searchParams,
    } = data);
  </script>

  <svelte:head>
    <title>
        {title} | Shoe List
    </title>
  </svelte:head>
  
  <div class="p-4 m-auto max-w-7xl">
    <!-- TITLE + FILTER -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <h1 class="font-bold uppercase text-2xl md:text-3xl xl:text-5xl tracking-wider" style="font-family: var(--font-adineue)">
        {title}
        <span class="text-sm text-gray-600 ml-2">({totalData})</span>
      </h1>
      <FilterBox
        {colors}
        {brands}
        currentFilters={searchParams}
      />
    </div>
  
    <!-- SHOE GRID -->
    {#if shoes.length > 0}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {#each shoes as shoe}
          <ProductCard
            title={shoe.title}
            image={shoe.colorVariation[0]?.image_url}
            category={shoe.category.title}
            price={shoe.price}
            showFav={false}
          />
        {/each}
      </div>
    {:else}
      <p class="text-center py-10 text-gray-500">No shoes found.</p>
    {/if}
  
    <!-- PAGINATION -->
    <Pagination
      totalData={totalData}
      pageSize={pageSize || 20}
      currentPage={page}
      baseUrl={`/shoes/${data.title === 'All Shoes' ? 'search' : data.title.toLowerCase()}`}
    />
  </div>