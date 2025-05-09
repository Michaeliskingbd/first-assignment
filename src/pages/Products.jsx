import React from "react";

import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <section className="h-fit bg-gradient-to-r from-green-500 via-blue-200 to-red-500 p-[50px] flex gap-4 flex-wrap">
      <ProductCard />
    </section>
  );
};

export default Products;
