<script>
  import NepalFlag from "./assets/icons/flag-nepal.svg";
  import abibasLogo from "./assets/icons/adidas.png";
  import facebookLogo from "./assets/icons/facebook.svg";
  import InstagramLogo from "./assets/icons/instagram.svg";
  import twitterLogo from "./assets/icons/twitter.svg";
  import pinterestLogo from "./assets/icons/pinterest.svg";
  import youtubeLogo from "./assets/icons/youtube.svg";
  import tiktokLogo from "./assets/icons/tiktok.svg";
</script>

<footer class="footer">
  <div class="mt-20 bg-black">
    <section class="flex py-20 media-1920:w-[1600px] m-auto justify-center">
      <div
        class="flex flex-col mx-4 media-390:mx-8 md:mx-16 media-1366:w-1/2 media-1366:ml-[25%] text-white"
      >
        <h1
          class="text-3xl font-bold leading-8 tracking-[3px] text-center text-white uppercase mb-4" 
        >
          A leader in athletic performance since 1949
        </h1>
        <p class="text-justify leading-[22px]">
          We&apos;re inspired by athletes. From the very first track spikes Adi
          Dassler made in his workshop, creating the best gear for the athlete
          is what drives us to pursue technological breakthroughs and design
          innovations. Our sneakers and apparel are worn by world-record holders
          and medal winners, but it&apos;s just as important that road runners,
          weekend hikers, recreational soccer players, and fitness enthusiasts.
          From adidas Boost, the game-changing cushioning technology, to the
          world-beating design of Adizero Adios Pro running shoes to Terrex
          outdoor gear to soccer cleats with unbeatable touch, we&apos;re always
          iterating, innovating and improving with athletes in mind.
          <br />
          <br />
          The 3-Stripes have appeared on medal stands all around the world, but they&apos;ve
          also had an influence that extends far beyond the field of play. adidas
          sneakers have been worn by hip-hop performers, skaters, artists and all
          the other change-makers who move the culture forward with their vision
          and uncompromising style. We&apos;ve made our mark with legendary lifestyle
          shoes like the adidas Superstar, the Stan Smith and the Samba, shoes that
          began as athletic footwear before hitting the streets and leaving an indelible
          impression on the culture.
          <br />
          <br />
          adidas Originals apparel is a stylish complement to our lifestyle shoes.
          Our streetwear collections pull from the archives to put a modern spin
          on classics like the Firebird tracksuit and the Tiro pant. Luxe materials,
          sophisticated silhouettes and unexpected details elevate our streetwear
          and transcend sport while at the same time never losing sight of our heritage.
          Because our mantra is, and has always been, that through sport we have
          the power to change lives.
        </p>
        <div class="flex justify-center mt-10">
          <span class="rotate-180 invert">
            <img src={abibasLogo} width={40} height={20} alt="abibas logo" />
          </span>
        </div>
      </div>
    </section>
  </div>
  <div class="media-960:flex hidden media-960:max-w-[1010px] pt-5 m-auto">
    <div class="pt-5 px-4 pb-8">
      <h5
        class="font-bold text-lg uppercase tracking-[1px] leading-6 mb-[10px]"
      >
        Products
      </h5>
      <ul class="text-sm">
        <li>Shoe</li>
        <li>Clothing</li>
        <li>Accessories</li>
        <li>Gift Cards</li>
        <li></li>
        <li>New Arrivals</li>
        <li>Best Seller</li>
        <li>Release Dates</li>
        <li>Sale</li>
      </ul>
    </div>
    <div class="pt-5 px-4 pb-8">
      <h5
        class="font-bold text-lg uppercase tracking-[1px] leading-6 mb-[10px]"
      >
        Sports
      </h5>
      <ul class="text-sm">
        <li>Soccer</li>
        <li>Running</li>
        <li>Basketball</li>
        <li>Football</li>
        <li>Outdoor</li>
        <li>Golf</li>
        <li>Baseball</li>
        <li>Tennis</li>
        <li>Skateboarding</li>
        <li>Traning</li>
      </ul>
    </div>
    <div class="pt-5 px-4 pb-8">
      <h5
        class="font-bold text-lg uppercase tracking-[1px] leading-6 mb-[10px]"
      >
        Collections
      </h5>
      <ul class="text-sm">
        <li>Adicolor</li>
        <li>Ultraboost</li>
        <li>NMD</li>
        <li>Forum</li>
        <li>Superstart</li>
        <li>Running Shoes</li>
        <li>Adilette</li>
        <li>Stan Smith</li>
        <li>adizero</li>
        <li>Trio</li>
        <li>Cloudfoam Pure</li>
        <li>Black Friday Deals</li>
      </ul>
    </div>
    <div class="pt-5 px-4 pb-8">
      <h5
        class="font-bold text-lg uppercase tracking-[1px] leading-6 mb-[10px]"
      >
        Support
      </h5>
      <ul class="text-sm">
        <li>Help</li>
        <li>Return & Exchanges</li>
        <li>Shipping</li>
        <li>Order Tracker</li>
        <li>Store Locator</li>
        <li>Size Charts</li>
        <li>Gift Card Balance</li>
        <li>Sale</li>
      </ul>
    </div>
    <div class="pt-5 px-4 pb-8">
      <h5
        class="font-bold text-lg uppercase tracking-[1px] leading-6 mb-[10px]"
      >
        Company Info
      </h5>
      <ul class="text-sm">
        <li>About Us</li>
        <li>Student Discount</li>
        <li>Military and Healthcare Discount</li>
        <li>abibas Stories</li>
        <li>abibas Apps</li>
        <li>Impact</li>
        <li>People</li>
        <li>Planet</li>
        <li>abiClub</li>
        <li>Affiliates</li>
        <li>Press</li>
        <li>Careers</li>
        <li>California Transparency in Supply Chains Act</li>
        <li>Responsible Disclosure</li>
        <li>Transparency in Coverage</li>
      </ul>
    </div>
    <div class="pt-5 px-4 pb-8">
      <h5
        class="font-bold text-lg uppercase tracking-[1px] leading-6 mb-[10px]"
      >
        Follow Us
      </h5>
      <ul class="text-sm flex flex-col gap-4">
        <li class="leading-6">
          <span>
            <img src={facebookLogo} width={30} height={30} alt="facebook" />
          </span>
        </li>
        <li class="leading-6">
          <span>
            <img src={InstagramLogo} width={25} height={25} alt="Instagram" />
          </span>
        </li>
        <li class="leading-6">
          <span>
            <img src={twitterLogo} width={25} height={25} alt="twitter" />
          </span>
        </li>
        <li class="leading-6">
          <span>
            <img src={pinterestLogo} width={25} height={25} alt="pinterest" />
          </span>
        </li>
        <li class="leading-6">
          <span>
            <img src={tiktokLogo} width={25} height={25} alt="tiktok" />
          </span>
        </li>
        <li class="leading-6">
          <span>
            <img src={youtubeLogo} width={25} height={25} alt="youtube" />
          </span>
        </li>
      </ul>
    </div>
  </div>
  <ul
    class="w-full bg-black py-4 text-white md:hidden grid grid-cols-2 text-center border-t border-[#767677]"
  >
    <li class="col-span-1 py-[10px] px-[15px] text-xs">Help</li>
    <li class="col-span-1 py-[10px] px-[15px] text-xs">adiClub</li>
    <li class="col-span-1 py-[10px] px-[15px] text-xs">Returns & Exchange</li>
    <li class="col-span-1 py-[10px] px-[15px] text-xs">Store Finder</li>
    <li class="col-span-1 py-[10px] px-[15px] text-xs">Order Tracker</li>
    <li class="col-span-1 py-[10px] px-[15px] text-xs">Gift Cards</li>
    <li class="col-span-1 py-[10px] px-[15px] text-xs">Shipping</li>
    <li class="col-span-1 py-[10px] px-[15px] text-xs">abibas Apps</li>
    <li class="col-span-1 py-[10px] px-[15px] text-xs">Promotions</li>
    <li class="col-span-1 py-[10px] px-[15px] text-xs">Size Charts</li>
    <li class="col-span-1 py-[10px] px-[15px] text-xs">Sitemap</li>
    <li class="col-span-1 py-[10px] px-[15px] text-xs">Black Friday Deals</li>
  </ul>
  <div class="w-full border-t border-[#767677] bg-[#282c31]">
    <ul
      class=" grid grid-cols-2 media-960:grid-cols-3 text-center text-[#d3d7da] text-xs media-960:w-[440px] m-auto"
    >
      <li class="col-span-2 my-4 flex gap-2.5 justify-center media-960:hidden">
        <span>
          <img src={NepalFlag} width={15} height={0} alt="flag" />
        </span>
        <span class=" text-xs">Nepal</span>
      </li>
      <li class="col-span-1 my-4">Your Privacy Choices</li>
      <li class="col-span-1 media-960:col-span-1 my-4 media-960:border-x">
        Privacy Policy
      </li>
      <li class="col-span-2 media-960:col-span-1 my-4">Terms and Condition</li>
      <li class="col-span-2 media-960:col-span-3 my-4">
        &copy; 2024 abibas Nepal, Inc.
      </li>
    </ul>
  </div>
</footer>
