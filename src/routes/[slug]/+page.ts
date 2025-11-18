import type { PageLoad } from "./$types";
import { graphqlClient } from "../../lib/graphql";

const GET_FILTER_DATA = `
  query Filters {
    shoeFilters {
        categories {
          id
          title
        }
        brands {
          id
          title
        }
        colors {
          id
          title
          color_code
        }
    }
  }
`;

const GET_SHOES = `
  query GetShoes(
    $categories: [String!],
    $colors: [String!],
    $brands: [String!],
    $search: String,
    $sortBy: String,
    $page: Int!,
    $pageSize: Int!
  ) {
    shoe (
      filter: {
        categories: $categories
        colors: $colors
        brands: $brands
        search: $search
        sortBy: $sortBy
        page: $page
        pageSize: $pageSize
      }
    ) {
        data {
            id
            title
            price
            slug_url
            category { title }
            colorVariation { image_url }
        }
        totalData
        page
        pageSize
    }
  }
`;

export const load: PageLoad = async ({ params, url }) => {
  const slug = params.slug;
  const search = url.searchParams.get("search") || undefined;
  const colors = url.searchParams.get("colors")?.split(",") || undefined;
  const brands = url.searchParams.get("brands")?.split(",") || undefined;
  const sortBy = url.searchParams.get("sortBy") || undefined;
  const page = Number(url.searchParams.get("page") || 1);
  const pageSize = Number(url.searchParams.get("pageSize") || 20);

  const isSearchPage = slug === "search";
  const categories = isSearchPage ? undefined : [slug.replaceAll("%7C", "|")];
  try {
    const [{ shoeFilters }, { shoe }] = await Promise.all([
      graphqlClient.request(GET_FILTER_DATA),
      graphqlClient.request(GET_SHOES, {
        categories,
        colors,
        brands,
        search,
        sortBy,
        page,
        pageSize,
      }),
    ]);

    const title = isSearchPage ? "All Shoes" : slug.replaceAll("%7C", " | ");
    return {
      title,
      categories: shoeFilters.categories,
      colors: shoeFilters.colors,
      brands: shoeFilters.brands,
      shoes: shoe.data,
      totalData: shoe.totalData,
      pageSize: shoe.pageSize,
      page: shoe.page,
      searchParams: Object.fromEntries(url.searchParams),
    };
  } catch (e) {
    return {
      title: "Shoes",
      shoes: [],
      totalData: 0,
      categories: [],
      colors: [],
      brands: [],
      page: 1,
      pageSize: 20,
      searchParams: ''
    };
  }
};
