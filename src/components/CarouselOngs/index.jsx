'use client'

import React, { useState, useEffect, useContext } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import SectionOng from '../SectionOngs'
import {OngsContext, OngsContextProvider} from '../../contexts/ongsContext'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import {Pagination} from 'swiper/modules'

function OngCarousel() {
  const {ongs} = useContext(OngsContext)
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
            spaceBetween: 0
          },
          '@0.10': {
            slidesPerView: 2,
            spaceBetween: 0
          },
          '@0.20': {
            slidesPerView: 3,
            spaceBetween: 0
          },
          '@0.30': {
            slidesPerView: 4,
            spaceBetween: 0
          },
          '@0.40': {
            slidesPerView: 5,
            spaceBetween: 0
          },
          '@0.50': {
            slidesPerView: 6,
            spaceBetween: 0
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {ongs.map((ong, index) => (
          <SwiperSlide key={index}>
            <SectionOng ongProp={ong} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default OngCarousel
