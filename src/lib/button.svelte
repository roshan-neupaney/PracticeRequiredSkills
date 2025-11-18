<script lang="ts">
    import type { ComponentType } from 'svelte';
  
    export let title: string = '';
    export let variant: 'default' | 'shadow' = 'default';
    export let sideIcon: ComponentType | string | null = null;
    export let iconWidth: number = 20;
    export let iconHeight: number = 20;
    export let onClick: (() => void) | null = null;
    export let disabled: boolean = false;
    export let loading: boolean = false;
    export let className: string = '';
    export const style: object = {};
  
    $: baseClasses = `
      flex border border-black w-fit cursor-pointer
      disabled:cursor-not-allowed transition-all
    `;
  
    $: shadowClasses = `
      bg-black text-white uppercase translate-x-[-3px] translate-y-[-3px]
      h-12 px-4 items-center
    `;
  
    $: classes = `
      ${baseClasses}
      ${variant === 'shadow' ? shadowClasses : ''}
      ${className}
    `.trim();
  </script>
  
  <button
    class={classes}
    on:click={onClick}
    disabled={disabled || loading}
    type="button"
    aria-label={title || 'button'}
  >
    {#if !loading}
      <div class="flex flex-1 justify-between items-center h-8 gap-2">
        {#if title}
          <span class="font-bold leading-6">{title}</span>
        {/if}
        {#if sideIcon}
          <span>
            {#if typeof sideIcon === 'string'}
              <img src={sideIcon} width={iconWidth} height={iconHeight} alt="" />
            {:else}
              <svelte:component this={sideIcon} width={iconWidth} height={iconHeight} />
            {/if}
          </span>
        {/if}
      </div>
    {:else}
      <div class="h-full flex flex-1 justify-center items-center">
        <div class="border-2 border-b-transparent border-white h-1/2 aspect-square rounded-full animate-spin"></div>
      </div>
    {/if}
  </button>
  
  <style>
    button.my-button {
      @apply shadow-[3px_3px_0_0_#000];
    }
  </style>