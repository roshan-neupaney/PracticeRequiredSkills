<script lang="ts">
    import { goto } from '$app/navigation';
    import SearchIcon from '$lib/assets/icons/search.svg';
  
    let search = '';
  
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === 'Enter' && search.trim()) {
        goto(`/search?search=${encodeURIComponent(search.trim())}`);
      }
    }
  </script>
  
  <div class="relative">
    <input
      type="text"
      bind:value={search}
      on:keypress={handleKeyPress}
      placeholder="Search"
      class="w-full border-b border-black px-2 py-1 pr-8 text-sm outline-none focus:border-primary"
    />
    <button
      class="absolute right-0 top-1/2 -translate-y-1/2 p-2"
      on:click={() => search.trim() && goto(`/search?search=${encodeURIComponent(search.trim())}`)}
      aria-label="Search"
    >
      <img src={SearchIcon} width="16" height="16" alt="" />
    </button>
  </div>