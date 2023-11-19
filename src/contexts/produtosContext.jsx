import React, { useState, useEffect } from 'react'
import iphone12 from './../assets/iphone12.png'
import iphone11pro from './../assets/iphone11pro.png'
import iphone13 from './../assets/iphone13.png'
import iphone14 from './../assets/iphone14.png'

const ProdutosContext = React.createContext()

const ProdutosContextProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const produto1 = {
      preco: '2100',
      nome: 'Iphone 12',
      loja: 'por Recife Importados',
      url: iphone12
    }
    const produto2 = {
      preco: '1900',
      nome: 'Iphone 11',
      loja: 'por Recife Importados',
      url: iphone11pro
    }
    const produto3 = {
      preco: '2940',
      nome: 'Iphone 13',
      loja: 'por Recife Imports',
      url: iphone13
    }

    const produto4 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: iphone11pro
    }

    const produto5 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Sergipe Importados',
      url: iphone14
    }

    const produto6 = {
      preco: '2940',
      nome: 'Iphone 13',
      loja: 'por Recife Imports',
      url: iphone13
    }

    const produto7 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: iphone11pro
    }

    const produto8 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Sergipe Importados',
      url: iphone14
    }

    const produto9 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: iphone11pro
    }

    const produto10 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Sergipe Importados',
      url: iphone14
    }

    const produto11 = {
      preco: '2940',
      nome: 'Iphone 13',
      loja: 'por Recife Imports',
      url: iphone13
    }

    const produto12 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: iphone11pro
    }

    const produto13 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Sergipe Importados',
      url: iphone14
    }
    const produto14 = {
      preco: '2100',
      nome: 'Iphone 12',
      loja: 'por Recife Importados',
      url: iphone12
    }
    const produto15 = {
      preco: '1900',
      nome: 'Iphone 11',
      loja: 'por Recife Importados',
      url: iphone11pro
    }
    const produto16 = {
      preco: '2940',
      nome: 'Iphone 13',
      loja: 'por Recife Imports',
      url: iphone13
    }

    const produto17 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: iphone11pro
    }

    const produto18 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Sergipe Importados',
      url: iphone14
    }

    const produto19 = {
      preco: '2940',
      nome: 'Iphone 13',
      loja: 'por Recife Imports',
      url: iphone13
    }

    const produto20 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: iphone11pro
    }

    const produto21 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Sergipe Importados',
      url: iphone14
    }

    const produto22 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: iphone11pro
    }

    const produto23 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Sergipe Importados',
      url: iphone14
    }
    setProdutos([produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8, produto9, produto10, produto11, produto12, produto13, produto13, produto14, produto15, produto16, produto17, produto18, produto19, produto20, produto21, produto22, produto23])
  }, [])

  return (
    <ProdutosContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ProdutosContext.Provider>
  )
}

export { ProdutosContext, ProdutosContextProvider }
