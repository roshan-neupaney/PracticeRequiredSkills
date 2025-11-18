<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import BurgerIcon from '$lib/assets/icons/burger-menu.svg';
  import FavoriteIcon from '$lib/assets/icons/favorite.svg';
  import AdidasIcon from '$lib/assets/icons/adidas.png';
  import ProfileIcon from '$lib/assets/icons/profile.svg';
  import SearchIcon from '$lib/assets/icons/search.svg';
  import ShoppingBag from '$lib/assets/icons/shopping-bag.svg';
  import FlagNepal from '$lib/assets/icons/flag-nepal.svg';
  import Search from './search.svelte';

  let mobileMenuOpen = false;
</script>

<div class="navbar-wrapper bg-white sticky top-0 w-full z-50">
  <div class="notification-banner flex p-2 justify-center bg-black font-adihaus text-[11px] items-center h-11 font-bold">
    <span class="uppercase text-secondary">
      adiclub days: 9/25 - 10/2
    </span>
  </div>

  <div class="navbar-banner grid grid-cols-5 px-2 py-2 lg:hidden">
    <div class="flex col-span-2 p-2 gap-5 items-center">
      <button on:click={() => mobileMenuOpen = !mobileMenuOpen}>
        <img src={BurgerIcon} width="27" height="20" alt="Menu" />
      </button>
      <a href="/favorites">
        <img src={FavoriteIcon} width="20" height="20" alt="Favorites" />
      </a>
    </div>
    <div class="col-span-1 flex justify-center items-center">
      <a href="/" aria-label="Home">
        <img class="rotate-180" src={AdidasIcon} width="50" height="50" alt="Abibas" />
      </a>
    </div>
    <div class="col-span-2 flex gap-5 p-2 justify-end items-center">
      <a href="/profile">
        <img src={ProfileIcon} width="20" height="20" alt="Profile" />
      </a>
      <a href="/search">
        <img src={SearchIcon} width="20" height="20" alt="Search" />
      </a>
      <a href="/cart">
        <img src={ShoppingBag} width="20" height="20" alt="Cart" />
      </a>
    </div>
  </div>

  <div class="hidden lg:block">
    <div class="flex gap-5 justify-end font-adihaus font-normal px-4 text-xs leading-6">
      <span>help</span>
      <a href="/orders">orders and returns</a>
      <span>join adiClub</span>
      <img src={FlagNepal} width="20" height="20" alt="Nepal" />
    </div>

    <div class="grid grid-cols-9 px-4 pb-3 xl:px-10">
      <div class="flex col-span-2 justify-start">
        <a href="/" aria-label="Home">
          <img class="rotate-180 object-contain" src={AdidasIcon} height="48" width="70" alt="Abibas" />
        </a>
      </div>

      <div class="flex col-span-4 gap-5 items-end uppercase text-xs xl:text-sm xl:justify-center">
        <div class="font-adihaus flex font-bold gap-5">
          <a href="/Men's">Men</a>
          <a href="/Women's">Women</a>
          <a href="/Kid's">Kids</a>
        </div>
        <div class="flex gap-5">
          <a href="/search?sortBy=top_sellers">Sale</a>
          <a href="/search?sortBy=newest">New & Trending</a>
        </div>
      </div>

      <div class="flex col-span-3 gap-3 lg:gap-5 justify-end items-end">
        <Search />
        <a href="/" class="min-w-5">
          <img src={ProfileIcon} width="20" height="20" alt="Profile" />
        </a>
        <a href="/" class="min-w-5">
          <img src={FavoriteIcon} width="20" height="20" alt="Favorites" />
        </a>
        <a href="/" class="min-w-5">
          <img src={ShoppingBag} width="23" height="20" alt="Cart" />
        </a>
      </div>
    </div>
  </div>
</div>

<!-- MOBILE MENU (OPTIONAL) -->
<!-- {#if mobileMenuOpen}
  <div class="fixed inset-0 bg-black bg-opacity-50 z-40" on:click={() => mobileMenuOpen = false}>
    <div class="bg-white w-64 h-full p-6" on:click|stopPropagation>
      <button class="mb-6" on:click={() => mobileMenuOpen = false}>✕</button>
      <nav class="flex flex-col gap-4 font-bold">
        <a href="/Men's">Men</a>
        <a href="/Women's">Women</a>
        <a href="/Kid's">Kids</a>
        <a href="/search?sortBy=top_sellers">Sale</a>
        <a href="/search?sortBy=newest">New & Trending</a>
      </nav>
    </div>
  </div>
{/if} -->