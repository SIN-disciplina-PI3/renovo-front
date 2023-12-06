import React, { useState, useEffect } from 'react'
import iphone12 from './../assets/iphone12.png'
import iphone11pro from './../assets/iphone11pro.png'
import iphone13 from './../assets/iphone13.png'
import iphone14 from './../assets/iphone14.png'
import rectangle39 from './../assets/Rectangle39.png'
import rectangle50 from './../assets/Rectangle50.png'
import rectangle51 from './../assets/Rectangle51.png'

const ProdutosContext = React.createContext()

const ProdutosContextProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const produto1 = {
      preco: '2100',
      nome: 'Iphone 12',
      loja: 'por Recife Importados',
      url: [iphone12, iphone11pro, iphone12],
      descricao: "Iphone 12 excelente qualidade",
      tamanho: "12pol",
      estoque: "5",
      estado: "usado"
    }
    const produto2 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado"
    }
    const produto3 = {
      preco: '2940',
      nome: 'Iphone 13',
      loja: 'por Recife Imports',
      url: [iphone13, iphone14, iphone13],
      descricao: "Iphone 13 excelente qualidade",
      tamanho: "13pol",
      estoque: "5",
      estado: "novo"
    }

    const produto4 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado"
    }

    const produto5 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Alagoas Importados',
      url: [iphone14, iphone13, iphone14],
      descricao: "Iphone 14 excelente qualidade",
      tamanho: "14 pol",
      estoque: "2",
      estado: "novo"
    }

    const produto6 = {
      preco: '2940',
      nome: 'Iphone 13',
      loja: 'por Recife Imports',
      url: [iphone13, iphone14, iphone13],
      descricao: "Iphone 13 excelente qualidade",
      tamanho: "13pol",
      estoque: "5",
      estado: "novo"
    }

    const produto7 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado"
    }

    const produto8 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Alagoas Importados',
      url: [iphone14, iphone13, iphone14],
      descricao: "Iphone 14 excelente qualidade",
      tamanho: "14 pol",
      estoque: "2",
      estado: "novo"
    }

    const produto9 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado"
    }

    const produto10 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Alagoas Importados',
      url: [iphone14, iphone13, iphone14],
      descricao: "Iphone 14 excelente qualidade",
      tamanho: "14 pol",
      estoque: "2",
      estado: "novo"
    }

    const produto11 = {
      preco: '2940',
      nome: 'Iphone 13',
      loja: 'por Recife Imports',
      url: [iphone13, iphone14, iphone13],
      descricao: "Iphone 13 excelente qualidade",
      tamanho: "13pol",
      estoque: "5",
      estado: "novo"
    }

    const produto12 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado"
    }

    const produto13 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Alagoas Importados',
      url: [iphone14, iphone13, iphone14],
      descricao: "Iphone 14 excelente qualidade",
      tamanho: "14 pol",
      estoque: "2",
      estado: "novo"
    }
    const produto14 = {
      preco: '2100',
      nome: 'Iphone 12',
      loja: 'por Recife Importados',
      url: [iphone12, iphone11pro, iphone12],
      descricao: "Iphone 12 excelente qualidade",
      tamanho: "12pol",
      estoque: "5",
      estado: "usado"
    }
    const produto15 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado"
    }
    const produto16 = {
      preco: '2940',
      nome: 'Iphone 13',
      loja: 'por Recife Imports',
      url: [iphone13, iphone14, iphone13],
      descricao: "Iphone 13 excelente qualidade",
      tamanho: "13pol",
      estoque: "5",
      estado: "novo"
    }

    const produto17 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado"
    }

    const produto18 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Alagoas Importados',
      url: [iphone14, iphone13, iphone14],
      descricao: "Iphone 14 excelente qualidade",
      tamanho: "14 pol",
      estoque: "2",
      estado: "novo"
    }

    const produto19 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado"
    }

    const produto20 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado"
    }

    const produto21 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Alagoas Importados',
      url: [iphone14, iphone13, iphone14],
      descricao: "Iphone 14 excelente qualidade",
      tamanho: "14 pol",
      estoque: "2",
      estado: "novo"
    }

    const produto22 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado"
    }

    const produto23 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Alagoas Importados',
      url: [iphone14, iphone13, iphone14],
      descricao: "Iphone 14 excelente qualidade",
      tamanho: "14 pol",
      estoque: "2",
      estado: "novo"
    }
    const produto24 = {
      preco: '20',
      nome: 'Calça mom Riachuelo',
      loja: 'por Casa Rosa',
      descricao: 'Calça mom, folgadinha, jeans azul claro, cintura alta Veste P/M',
      url: [rectangle39, rectangle50, rectangle51],
      tamanho: '38',
      estoque: '1',
      estado: 'nova'
    }
    const produto25 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado"
    }
    const produto26 = {
      preco: '20',
      nome: 'Calça mom Riachuelo',
      loja: 'por Casa Rosa',
      descricao: 'Calça mom, folgadinha, jeans azul claro, cintura alta Veste P/M',
      url: [rectangle39, rectangle50, rectangle51],
      tamanho: '38',
      estoque: '1',
      estado: 'nova'
    }
    setProdutos([produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8, produto9, produto10, produto11, produto12, produto13, produto13, produto14, produto15, produto16, produto17, produto18, produto19, produto20, produto21, produto22, produto23, produto24, produto25, produto26])
  }, [])

  return (
    <ProdutosContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ProdutosContext.Provider>
  )
}

export { ProdutosContext, ProdutosContextProvider }
