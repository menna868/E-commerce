"use client";

import AllBrandApi from "@/Api/AllBrand.api";
import { Brand } from "@/Types/Product.types";
import React, { useEffect, useState } from "react";
import SingleBrand from "../_components/singleBrand/SingleBrand";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
} from "flowbite-react";

export default function Brands() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  useEffect(() => {
    (async () => {
      const data = await AllBrandApi();
      setBrands(data);
    })();
  }, []);

  return (
    <>
      <h1 className="text-center text-green-500 text-3xl my-7 font-bold">
        All Brands
      </h1>

      <div className="flex flex-wrap w-[80%] mx-auto my-7">
        {brands.map((brand) => (
          <SingleBrand
            key={brand._id}
            brand={brand}
            onClick={() => setSelectedBrand(brand)}
          />
        ))}
      </div>

     
      {selectedBrand && (
        <Modal show={true} onClose={() => setSelectedBrand(null)}>
          <ModalHeader>{selectedBrand.name}</ModalHeader>
          <ModalBody>
            <div className="flex items-center justify-between p-8">
              <div>
                <p className="text-green-500 text-4xl font-semibold my-4">
                  {selectedBrand.name}
                </p>
                
              </div>
              <img src={selectedBrand.image} alt={selectedBrand.name} />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              className="bg-green-500 hover:bg-black"
              onClick={() => setSelectedBrand(null)}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
}
