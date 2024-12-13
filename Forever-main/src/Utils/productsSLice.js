import { createSlice } from "@reduxjs/toolkit";
import { products } from "./assets/frontend_assets/assets";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    product: products, 
    allProducts: products, 
    filters: {
      category: [], 
      subCategory: [], 
    },
  },
  reducers: {
    changeSearchProducts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.product = state.allProducts.filter((each) =>
        each.name.toLowerCase().includes(searchTerm)
      );
    },
    changeFilter: (state, action) => {
      const { filterType, value } = action.payload;
      const isActive = state.filters[filterType].includes(value);

      if (isActive) {
        state.filters[filterType] = state.filters[filterType].filter(
          (item) => item !== value
        );
      } else {
        state.filters[filterType].push(value);
      }

      const { category, subCategory } = state.filters;
      state.product = state.allProducts.filter((product) => {
        const categoryMatch = category.length
          ? category.includes(product.category)
          : true;
        const subCategoryMatch = subCategory.length
          ? subCategory.includes(product.subCategory)
          : true;
        return categoryMatch && subCategoryMatch;
      });
    },
  },
});

export const { changeSearchProducts, changeFilter } = productsSlice.actions;

export default productsSlice.reducer;
