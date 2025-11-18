<script lang="ts">
  import { goto, invalidate } from "$app/navigation";
  import { page } from "$app/stores";
  import FilterIcon from "$lib/assets/icons/filter-icon.svg";
  import CrossIcon from "$lib/assets/icons/cross.svg";
  import Arrow from "$lib/assets/icons/arrow-down.svg";
  import CheckIcon from "$lib/assets/icons/check.svg";

  export let colors: Array<{ title: string; color_code: string }> = [];
  export let brands: Array<{ title: string }> = [];
  export let currentFilters: Record<string, string> = {};

  let open = false;
  let sections = {
    sortBy: true,
    category: false,
    color: false,
    brand: false,
  };

  // Parse current URL filters
  $: filters = {
    categories: currentFilters.categories?.split("|") || [],
    colors: currentFilters.colors?.split(",") || [],
    brands: currentFilters.brands?.split(",") || [],
    sortBy: currentFilters.sortBy || "",
  };

  // Build query string & navigate
  function applyFilters() {
    const params = new URLSearchParams();

    if (filters.colors.length) params.set("colors", filters.colors.join(","));
    if (filters.brands.length) params.set("brands", filters.brands.join(","));
    if (filters.sortBy) params.set("sortBy", filters.sortBy);

    const path = $page.url.pathname;
    const base = path.includes("/search") ? "/shoes/search" : path;
    goto(`${base}?${params.toString()}`, { invalidateAll: true });
  }

  // Toggle filter item
  function toggleFilter(
    type: "colors" | "brands" | "categories",
    value: string
  ) {
    const arr = filters[type];
    if (arr.includes(value)) {
      filters[type] = arr.filter((x) => x !== value);
    } else {
      filters[type] = [...arr, value];
    }
    filters = filters; // trigger reactivity
    applyFilters();
  }

  function setSort(sort: string) {
    filters.sortBy = sort;
    filters = filters;
    applyFilters();
  }

  function clearAll() {
    filters = { categories: [], colors: [], brands: [], sortBy: "" };
    applyFilters();
  }

  $: allActiveFilters = [
    ...filters.colors,
    ...filters.brands,
    filters.sortBy,
  ].filter(Boolean);
</script>

<div class="relative">
  <!-- FILTER BUTTON -->
  <button
    on:click={() => (open = !open)}
    class="flex items-center gap-3 border border-black px-4 py-2 min-h-10 uppercase text-sm font-bold tracking-wider"
  >
    <span class="hidden lg:block">Filter & Sort</span>
    <img src={FilterIcon} width="25" height="25" alt="Filter" />
  </button>

  <!-- FILTER DRAWER -->
  {#if open}
    <div
      class="fixed inset-0 bg-black/20 z-50"
      tabindex="0"
      role="button"
      aria-label="Close filters"
      on:click={() => (open = false)}
      on:keydown={(event) => {
        if (event.key === "Enter" || event.key === " ") open = false;
      }}
    >
      <div
        class="absolute right-0 top-0 h-full w-full bg-white lg:w-96 overflow-y-auto"
        role="button"
        tabindex="0"
        on:click|stopPropagation
        on:keydown={(event) => {
          if (event.key === "Enter" || event.key === " ")
            event.stopPropagation();
        }}
      >
        <!-- HEADER -->
        <div class="flex justify-between items-center p-5 border-b">
          <h3 class="text-lg font-bold">Filter & Sort</h3>
          <div class="flex items-center gap-4">
            <button on:click={clearAll} class="text-sm underline text-gray-600">
              Clear All
            </button>
            <button on:click={() => (open = false)}>
              <img src={CrossIcon} width="35" height="35" alt="Close" />
            </button>
          </div>
        </div>

        <!-- ACTIVE FILTERS -->
        {#if allActiveFilters.length > 0}
          <div class="p-5 border-b">
            <p class="text-sm font-bold uppercase mb-3">Applied Filters</p>
            <div class="flex flex-wrap gap-2">
              {#each allActiveFilters as filter}
                <div
                  class="flex items-center gap-2 px-3 py-1.5 bg-gray-200 rounded-full text-sm"
                  role="button"
                  tabindex="0"
                  on:click={() => {
                    if (filters.colors.includes(filter))
                      toggleFilter("colors", filter);
                    if (filters.brands.includes(filter))
                      toggleFilter("brands", filter);
                    if (filters.sortBy === filter) setSort("");
                  }}
                  on:keydown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      if (filters.colors.includes(filter))
                        toggleFilter("colors", filter);
                      if (filters.brands.includes(filter))
                        toggleFilter("brands", filter);
                      if (filters.sortBy === filter) setSort("");
                    }
                  }}
                >
                  <img src={CrossIcon} width="16" height="16" alt="" />
                  <span>{filter}</span>
                </div>
              {/each}
            </div>
          </div>
        {/if}

        <!-- SORT BY -->
        <div
          class="flex justify-between items-center p-4 font-bold text-sm uppercase border-b cursor-pointer"
          role="button"
          tabindex="0"
          on:click={() => (sections.sortBy = !sections.sortBy)}
          on:keydown={(event) => {
            if (event.key === "Enter" || event.key === " ")
              sections.sortBy = !sections.sortBy;
          }}
        >
          <span>Sort By</span>
          <img
            src={Arrow}
            width="25"
            height="25"
            class:rotate-180={sections.sortBy}
            alt=""
          />
        </div>
        {#if sections.sortBy}
          {#each [{ value: "price_low_to_high", label: "Price (Low - High)" }, { value: "price_high_to_low", label: "Price (High - Low)" }, { value: "newest", label: "Newest" }, { value: "top_sellers", label: "Top Sellers" }] as option}
            <div
              class="p-4 border-b cursor-pointer uppercase text-sm"
              class:border-l-4={filters.sortBy === option.value}
              class:border-l-black={filters.sortBy === option.value}
              role="button"
              tabindex="0"
              on:click={() => setSort(option.value)}
              on:keydown={(event) => {
                if (event.key === "Enter" || event.key === " ")
                  setSort(option.value);
              }}
            >
              {option.label}
            </div>
          {/each}
        {/if}

        <!-- COLOR -->
        <div
          class="flex justify-between items-center p-4 font-bold text-sm uppercase border-b cursor-pointer"
          role="button"
          tabindex="0"
          on:click={() => (sections.color = !sections.color)}
          on:keydown={(event) => {
            if (event.key === "Enter" || event.key === " ")
              sections.color = !sections.color;
          }}
        >
          <span>Color</span>
          <img
            src={Arrow}
            width="25"
            height="25"
            class:rotate-180={sections.color}
            alt=""
          />
        </div>
        {#if sections.color}
          <div class="grid grid-cols-8 gap-4 p-6">
            {#each colors as color}
              <button
                class="relative w-10 h-10 border-2 rounded-full transition-all"
                class:border-black={filters.colors.includes(color.title)}
                style="background-color: {color.color_code}"
                on:click={() => toggleFilter("colors", color.title)}
              >
                {#if filters.colors.includes(color.title)}
                  <img
                    src={CheckIcon}
                    width="20"
                    height="20"
                    class="absolute inset-0 m-auto"
                    alt="Selected"
                  />
                {/if}
              </button>
            {/each}
          </div>
        {/if}

        <!-- BRAND -->
        <div
          class="flex justify-between items-center p-4 font-bold text-sm uppercase border-b cursor-pointer"
          role="button"
          tabindex="0"
          on:click={() => (sections.brand = !sections.brand)}
          on:keydown={(event) => {
            if (event.key === "Enter" || event.key === " ")
              sections.brand = !sections.brand;
          }}
        >
          <span>Brand</span>
          <img
            src={Arrow}
            width="25"
            height="25"
            class:rotate-180={sections.brand}
            alt=""
          />
        </div>
        {#if sections.brand}
          <div class="p-4 space-y-3">
            {#each brands as brand}
              <label class="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand.title)}
                  on:change={() => toggleFilter("brands", brand.title)}
                  class="w-5 h-5 accent-black"
                />
                <span class="uppercase text-sm">{brand.title}</span>
              </label>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>
