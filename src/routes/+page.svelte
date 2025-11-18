<script>
  import Button from "$lib/button.svelte";
  import ProductSlider from "$lib/productSlider.svelte";
  import NextIconBlack from "../lib/assets/icons/right-arrow-black.svg";
  import { featuredData } from "../lib/db.js";
  import VideoImageCard from "$lib/videoImageCard.svelte";
  import ProductCard from "$lib/productCard.svelte";

  export let data;
  let shoes = data.shoes;
</script>

<svelte:head>
  <title>Abibas</title>
</svelte:head>

<div class="w-full">
  <div class="flex relative">
    <div
      class="w-full relative aspect-375/482 md:aspect-square lg:aspect-1920/853"
    >
      <picture>
        <source
          srcSet="/assets/images/banner-min-1024.avif"
          media="(min-width:1024px)"
        />
        <source
          srcSet="/assets/images/banner-min-768.avif"
          media="(min-width:768px)"
        />
        <source
          srcSet="/assets/images/banner-max-767.avif"
          media="(max-width:767px)"
        />
        <img src="/images/banner-min-1024.avif" class="object-contain" alt="" />
      </picture>
    </div>
    <div
      class="flex flex-col absolute bottom-4 md:bottom-16 w-full text-primary font-adihaus max-w-[550px] lg:max-w-[750px] gap-4 media-390:px-8 px-4 md:px-16 lg:px-28"
    >
      <div class="flex-col flex gap-1">
        <span class="bg-white text-xl uppercase font-bold p-1 w-fit">
          up to 50% off
        </span>
        <p>
          <span class="bg-white font-normal text-sm p-1 leading-5">
            Score special discounts on premium styles through 10/2. Only for
            adiClub members.
          </span>
        </p>
      </div>
      <div class="flex flex-wrap gap-2">
        <a
          href={"/Men's"}
          aria-label="link to shoe listing page of men's category"
        >
          <Button
            title="Shop men"
            className="px-3 bg-white uppercase"
            style={{ backgroundColor: "#ffffff" }}
            sideIcon={NextIconBlack}
          />
        </a>
        <a
          href={"/Women's"}
          aria-label="link to shoe listing page of women's category"
        >
          <Button
            title="shop women"
            className="px-3 bg-white uppercase"
            style={{ backgroundColor: "#ffffff" }}
            sideIcon={NextIconBlack}
          />
        </a>
        <a
          href={"/Kid's"}
          aria-label="link to shoe listing page of kid's category"
        >
          <Button
            title="shop kids"
            className="px-3 bg-white uppercase"
            style={{ backgroundColor: "#ffffff" }}
            sideIcon={NextIconBlack}
          />
        </a>
      </div>
    </div>
  </div>
  {#if shoes?.length > 0}
    <div class="flex flex-col mt-10 mx-1 gap-2">
      <span class="font-bold text-3xl ml-2 font-adineue">
        Still Interested?
      </span>
      <ProductSlider className="gap-4">
        {#each shoes as shoe}
          <div>
            <ProductCard
              title={shoe?.title}
              price={shoe?.price}
              showFav={false}
              category={shoe?.category.title}
              image={shoe?.colorVariation[0]?.image_url}
              className="md:w-[316px] xl:w-[380px]"
            />
          </div>
        {/each}
      </ProductSlider>
    </div>
  {/if}
  <div
    class="flex mt-20 pl-4 media-390:pl-8 md:pl-16 media-960:px-16 media-1440:px-28"
  >
    <ProductSlider className="gap-[10px] flex lg:justify-center justify-start">
      {#each featuredData as shoe}
        <VideoImageCard
          title={shoe.title}
          image={shoe.image}
          description={shoe.description}
          className="min-w-72"
        />
      {/each}
    </ProductSlider>
  </div>
</div>
