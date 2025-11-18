<script lang="ts">
    export let title: string = '';
    export let image: string = '';
    export let description: string = '';
    export let className: string = '';
    export let id: string = '';
  
    const imageExtensions = [
      'jpeg', 'jpg', 'png', 'gif', 'bmp', 'tiff', 'tif',
      'webp', 'svg', 'ico', 'heic', 'heif', 'avif'
    ];
  console.log(className)
    $: imgExt = image.split('.').pop()?.toLowerCase() || '';
    $: isImage = imageExtensions.includes(imgExt);
  </script>
  
  <div
    class={`flex flex-col gap-3 w-96 bg-white ${className} cursor-pointer`}
    {id}
  >
    {#if isImage}
      <img
        src={image}
        alt={title}
        width="600"
        height="0"
        loading="lazy"
      />
    {:else}
      <video
        loop
        autoplay
        muted
        playsinline
        width="600"
        height="0"
      >
        <source src={image} />
      </video>
    {/if}
  
    <!-- Content -->
    {#if title || description}
      <div class="flex flex-col px-2 gap-[5px] h-32">
        {#if title}
          <span class="font-bold leading-[22px]">{title}</span>
        {/if}
        {#if description}
          <span class="text-sm">{description}</span>
        {/if}
        <div class="flex text-sm font-bold tracking-[2px] underline leading-5 h-8 flex-1 items-end">
          SHOP NOW
        </div>
      </div>
    {/if}
  </div>