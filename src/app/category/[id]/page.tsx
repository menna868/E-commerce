import SelectedCategory from "@/Api/selectedCtegory";
import CategoryProductDetails from "@/app/_components/categorydetails/CategoryDetails";
import React from "react";

export default async function categoryDetails({params}: {params: { id: string };
}) {
  const { id } = params;
  const data = await SelectedCategory(id);
  return <CategoryProductDetails data={data} />;
}
