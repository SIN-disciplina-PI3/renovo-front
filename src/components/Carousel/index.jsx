import React, { useContext, useEffect, useState } from 'react'
import {
  ProdutosContext,
  ProdutosContextProvider
} from '../../contexts/produtosContext'
import SectionProduct from '../SectionProduct'
import { Link as LinkDom } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

function ProductCarousel({ categoria }) {
  const { produtos } = useContext(ProdutosContext)

  const [produtosDaCategoria, setProdutosDaCategoria] = useState([]);

  useEffect(() => {
   
    if(categoria){
      const produtosFiltrados = produtos.filter((produto) => produto.categoria === categoria);
      setProdutosDaCategoria(produtosFiltrados);
    }else {
      setProdutosDaCategoria(produtos);
    }

  }, []);

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

        {produtosDaCategoria.map((produto, index) => (
          <SwiperSlide key={index}>
            <Link textDecoration={"none"} as={LinkDom} to={`/renovo-front/${index}`}>
            <SectionProduct produtoProp={produto} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ProductCarousel
