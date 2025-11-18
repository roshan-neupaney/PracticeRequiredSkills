import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, jest } from "@jest/globals";
import { load } from "../routes/[slug]/+page";
import * as graphql from "../lib/graphql";
import type { PageLoad } from "../routes/[slug]/$types";

// Proper Jest mock
jest.mock("../lib/graphql", () => ({
  graphqlClient: {
    request: jest.fn(),
  },
}));

const mockRequest = graphql.graphqlClient.request as jest.MockedFunction<
  typeof graphql.graphqlClient.request
>;

describe("load function", () => {
  beforeEach(() => {
    mockRequest.mockReset();
  });

  it("fetches shoes and filters correctly", async () => {
    mockRequest
      .mockResolvedValueOnce({
        shoeFilters: {
          categories: [{ id: "1", title: "Men's" }],
          brands: [{ id: "nike", title: "Nike" }],
          colors: [{ id: "red", title: "Red", color_code: "#ff0000" }],
        },
      })
      .mockResolvedValueOnce({
        shoe: {
          data: [
            {
              id: "s1",
              title: "Air Max 90",
              price: 18000,
              slug_url: "air-max-90",
              category: { title: "Men's" },
              colorVariation: [{ image_url: "/img1.jpg" }],
            },
          ],
          totalData: 1,
          page: 1,
          pageSize: 20,
        },
      });

    const result = (await load({
      params: { slug: "Men's" },
      url: new URL("http://localhost"),
    } as Parameters<PageLoad>[0]))!;

    expect(result).toEqual(
      expect.objectContaining({
        title: "Men's",
        categories: [{ id: "1", title: "Men's" }],
        brands: [{ id: "nike", title: "Nike" }],
        colors: [{ id: "red", title: "Red", color_code: "#ff0000" }],
        shoes: [
          {
            id: "s1",
            title: "Air Max 90",
            price: 18000,
            slug_url: "air-max-90",
            category: { title: "Men's" },
            colorVariation: [{ image_url: "/img1.jpg" }],
          },
        ],
        totalData: 1,
        page: 1,
        pageSize: 20,
      })
    );
    expect(result.shoes).toHaveLength(1);
    expect(result.shoes[0].title).toBe("Air Max 90");
  });

  it("handles errors gracefully", async () => {
    mockRequest.mockRejectedValue(new Error("Network error"));
    
    const result = (await load({
      params: { slug: "sneakers" },
      url: new URL("http://localhost"),
    } as Parameters<PageLoad>[0]))!;

    expect(result.shoes).toEqual([]);
    expect(result.totalData).toBe(0);
  });
});
