import React from "react";

export default async function SelectedCategory(id: string) {
  let response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?category=${id}`
  );

  let { data } = await response.json();

  return data;
}
