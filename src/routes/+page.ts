// src/routes/+page.ts
import type { PageLoad } from "./$types";
import { graphqlClient } from "$lib/graphql";

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

export const load: PageLoad = async () => {
  const {shoe} = await graphqlClient.request(GET_SHOES, { orderBy: "newest", page: 1, pageSize: 20 });
  return {
    shoes: shoe.data,
  };
};
