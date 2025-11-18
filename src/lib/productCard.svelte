<script lang="ts">
  import HollowFavIcon from "$lib/assets/icons/favorite.svg";
  import FilledFavIcon from "$lib/assets/icons/favorite-filled.svg";
  import { image_url } from "./config/app";

  export let title: string = "";
  export let image: string = "";
  export let category: string = "";
  export let className: string = "";
  export let slug_url: string = "";
  export let routing_url: string = "#";
  export let price: string = "";
  export let isFav: boolean = false;
  export let showFav: boolean = true;
</script>

<div class="relative w-fit">
  <a
    href={`${routing_url}${slug_url}`}
    class="block product-card"
    aria-label="View product details"
  >
    <div
      class={`flex flex-col gap-3 max-w-72 bg-white ${className} border border-transparent hover:border-black transition-all`}
    >
      <div class="relative">
        <img
          src={image_url + image}
          alt={title}
          class="w-full h-auto object-cover aspect-square"
          loading="lazy"
        />
        <span
          class="absolute bottom-2 left-2 bg-white text-sm px-2 py-1 font-bold"
        >
          Rs. {price}
        </span>
      </div>

      <div class="flex flex-col px-2 gap-1 pb-3">
        {#if title}
          <span class="text-sm leading-4 font-medium">{title}</span>
        {/if}
        {#if category}
          <span class="text-sm text-[#767677]">{category}</span>
        {/if}
      </div>
    </div>
  </a>

  {#if showFav}
    <button
      class="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
      aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
    >
      <img
        src={isFav ? FilledFavIcon : HollowFavIcon}
        width="20"
        height="20"
        alt=""
      />
    </button>
  {/if}
</div>
