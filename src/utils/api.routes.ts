const API_ENDPOINTS = {
  Categories: "/categories",
  Products: {
    all: "/products",
    TOP_Sell: "/products?orderby=popularity",
    ON_Sell: "/products?on_sale=true",
    NEW_Arrival: "/products?orderby=date",
    Best_Sellers: "/products?best_sellers=true",
    By_Category: "/products/byCategory",
    Related: "products?include",
  },
  Orders: {
    create: "/orders",
  },
};

export default API_ENDPOINTS;
