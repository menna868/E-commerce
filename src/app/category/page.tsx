import React from 'react'
import AllCategories from '@/Api/AllCategories.api';
import SingleCategory from '../_components/singleCategory/SingleCategory';
import { CategoryTypes } from '@/Types/Category.types';

export default async function Category() {
  let data = await AllCategories();
  console.log(data);
  
  return (
    <>
      <div className="flex flex-wrap  w-[80%] mx-auto  my-7">
        {data.map((currentCategory: CategoryTypes) => (
          <SingleCategory
            key={currentCategory._id}
            category={currentCategory}
          />
        ))}
      </div>
    </>
  );
}
