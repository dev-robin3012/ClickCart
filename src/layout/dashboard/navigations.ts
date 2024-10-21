const navigations = [
  {
    name: "Overview",
    path: "/dashboard",
    icon: "overview",
  },
  {
    name: "Collections",
    path: "/dashboard/collections",
    icon: "overview",
  },
  {
    name: "Inventory",
    path: "/dashboard/products",
    icon: "products",
    nested: [
      {
        name: "Products",
        path: "/dashboard/products",
        icon: "products",
      },
      {
        name: "Collections",
        path: "/dashboard/product-collection",
        icon: "collection",
      },
    ],
  },
  {
    name: "Orders",
    path: "/dashboard/orders",
    icon: "orders",
  },
  {
    name: "Customers",
    path: "/dashboard/customers",
    icon: "customers",
  },
];

export default navigations;
