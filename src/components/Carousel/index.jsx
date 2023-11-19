import React, { useContext } from 'react'
import {
  ProdutosContext,
  ProdutosContextProvider
} from '../../contexts/produtosContext'
import SectionProduct from '../SectionProduct'

import { Box, Flex } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

function ProductCarousel() {
  const { produtos } = useContext(ProdutosContext)

  const swiperStyle = {
    height: '380px'
  }

  return (
    <>
      <Swiper
        style={swiperStyle}
        slidesPerView={6}
        spaceBetween={-5}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10
          },
          '@0.10': {
            slidesPerView: 2,
            spaceBetween: 30
          },
          '@0.20': {
            slidesPerView: 3,
            spaceBetween: 50
          },
          '@0.30': {
            slidesPerView: 4,
            spaceBetween: 60
          },
          '@0.40': {
            slidesPerView: 5,
            spaceBetween: 80
          },
          '@0.50': {
            slidesPerView: 6,
            spaceBetween: 100
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {produtos.map((produto, index) => (
          <SwiperSlide key={index}>
            <SectionProduct produtoProp={produto} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ProductCarousel
