import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Brand } from "@/Types/Product.types";

export default function SingleBrand({
  brand,
  onClick,
}: {
  brand: Brand;
  onClick: () => void;
}) {
  return (
    <div className="w-full md:w-1/4 p-4">
      <Card
        onClick={onClick}
        className="cursor-pointer hover:shadow-xl hover:shadow-green-500 transition-all duration-300"
      >
        <CardHeader className="text-center">
          <CardTitle>
            <img
              src={brand.image}
              alt="cover"
              className="w-full object-cover"
            />
          </CardTitle>
          <CardDescription className="text-black text-2xl m-4">
            {brand.name}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
