<script lang="ts">
  // Accept any children + optional class
  export let className: string = "";
</script>

<div class="flex w-full slider-container overflow-x-auto {className}">
  <slot />
</div>
