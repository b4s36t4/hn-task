import { describe, test, vi, expect } from "vitest";
import React from "react";
import "@testing-library/jest-dom";

import { render } from "../utils";
import initialData from "../test.json";
import Home from "../../src/pages/home";
import ItemDetails from "../../src/pages/ItemDetails";

// Mock the react-router-dom hooks, instead of wrapping the routes
vi.mock("react-router-dom", async () => {
  return {
    useRouteLoaderData: () => {
      return { hits: initialData.hits };
    },
    useNavigate: () => {
      return () => {};
    },

    useLocation: () => {
      return { state: { selectedItem: initialData.hits[0] } };
    },
  };
});

vi.mock("../../src/query/hooks/useGetNewsDetails.tsx", async () => ({
  useGetNewsDetails: () => ({
    isLoading: false,
    isError: false,
    data: { data: initialData.searchResult },
  }),
}));

describe("Should run the app as expected", () => {
  test("Should render The test from loader", () => {
    const { container } = render(<Home />);

    const items = container.querySelectorAll('[data-id="news-item"]');

    // We only have 18 items in the test-data
    expect(items.length).toBe(18);
  });

  test("Should open the modal after click", async () => {
    const { getAllByTestId } = render(<ItemDetails />);
    const modalOpened = getAllByTestId("Modal");

    expect(modalOpened).not.toBe(null);

    const comments = getAllByTestId("comment");

    expect(comments.length).toBeGreaterThan(0);
  });
});
