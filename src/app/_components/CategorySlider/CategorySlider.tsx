import AllCategories from '@/Api/AllCategories.api'
import React from 'react'
import CategorySwiper from '../CategorySwiper/CategorySwiper';

export default  async  function CategorySlider() {
    let data = await AllCategories();
    
    
    return (
      <CategorySwiper data={data} />
  )
}
