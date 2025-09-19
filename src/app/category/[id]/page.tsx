import SelectedCategory from "@/Api/selectedCtegory";
import CategoryProductDetails from "@/app/_components/categorydetails/CategoryDetails";
import React from "react";

export default async function categoryDetails({ params }:{params:Promise<{id:string}>}) {
  let{id} =await params;
  const data = await SelectedCategory(id);
  return <CategoryProductDetails data={data} />;
}
