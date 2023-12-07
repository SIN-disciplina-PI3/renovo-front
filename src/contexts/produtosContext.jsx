import React, { useState, useEffect } from 'react'
import iphone12 from './../assets/iphone12.png'
import iphone11pro from './../assets/iphone11pro.png'
import iphone13 from './../assets/iphone13.png'
import iphone14 from './../assets/iphone14.png'
import rectangle39 from './../assets/Rectangle39.png'
import rectangle50 from './../assets/Rectangle50.png'
import rectangle51 from './../assets/Rectangle51.png'
import camiseta from './../assets/camiseta.jpg'
import vestido from './../assets/vestido.jpg'
import cama from './../assets/cama.jpeg'
import cozinha from './../assets/cozinha.png'
import movel from './../assets/movel.jpg'


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
      estado: "usado",
      categoria: "eletronicos"
    }
    const produto2 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado",
      categoria: "eletronicos"
    }
    const produto3 = {
      preco: '2940',
      nome: 'Iphone 13',
      loja: 'por Recife Imports',
      url: [iphone13, iphone14, iphone13],
      descricao: "Iphone 13 excelente qualidade",
      tamanho: "13pol",
      estoque: "5",
      estado: "novo",
      categoria: "eletronicos"
    }

    const produto4 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado",
      categoria: "eletronicos"
    }

    const produto5 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Alagoas Importados',
      url: [iphone14, iphone13, iphone14],
      descricao: "Iphone 14 excelente qualidade",
      tamanho: "14 pol",
      estoque: "2",
      estado: "novo",
      categoria: "eletronicos"
    }

    
    const produto6 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Alagoas Importados',
      url: [iphone14, iphone13, iphone14],
      descricao: "Iphone 14 excelente qualidade",
      tamanho: "14 pol",
      estoque: "2",
      estado: "novo",
      categoria: "eletronicos"
    }

    const produto7 = {
      preco: '20',
      nome: 'Calça mom Riachuelo',
      loja: 'por Casa Rosa',
      descricao: 'Calça mom, folgadinha, jeans azul claro, cintura alta Veste P/M',
      url: [rectangle39, rectangle50, rectangle51],
      tamanho: '38',
      estoque: '1',
      estado: 'nova',
      categoria: 'calça'
    }

    const produto8 = {
      preco: '20',
      nome: 'Calça mom Riachuelo',
      loja: 'por Casa Rosa',
      descricao: 'Calça mom, folgadinha, jeans azul claro, cintura alta Veste P/M',
      url: [rectangle39, rectangle50, rectangle51],
      tamanho: '38',
      estoque: '1',
      estado: 'nova',
      categoria: 'calça'
    }

    const produto9 = {
      preco: '20',
      nome: 'Calça mom Riachuelo',
      loja: 'por Casa Rosa',
      descricao: 'Calça mom, folgadinha, jeans azul claro, cintura alta Veste P/M',
      url: [rectangle39, rectangle50, rectangle51],
      tamanho: '38',
      estoque: '1',
      estado: 'nova',
      categoria: 'calça'
    }

    const produto10 = {
      preco: '20',
      nome: 'Calça mom Riachuelo',
      loja: 'por Casa Rosa',
      descricao: 'Calça mom, folgadinha, jeans azul claro, cintura alta Veste P/M',
      url: [rectangle39, rectangle50, rectangle51],
      tamanho: '38',
      estoque: '1',
      estado: 'nova',
      categoria: 'calça'
    }

    const produto11 = {
      preco: '20',
      nome: 'Calça mom Riachuelo',
      loja: 'por Casa Rosa',
      descricao: 'Calça mom, folgadinha, jeans azul claro, cintura alta Veste P/M',
      url: [rectangle39, rectangle50, rectangle51],
      tamanho: '38',
      estoque: '1',
      estado: 'nova',
      categoria: 'calça'
    }

    const produto12 = {
      preco: '20',
      nome: 'Camiseta Comfort Básica',
      loja: 'por Casa Rosa',
      descricao: 'CAMISETA COMFORT BÁSICA EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [camiseta],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'camiseta'
    }

    const produto13 = {
      preco: '20',
      nome: 'Camiseta Comfort Básica',
      loja: 'por Casa Rosa',
      descricao: 'CAMISETA COMFORT BÁSICA EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [camiseta],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'camiseta'
    }

    const produto14 = {
      preco: '20',
      nome: 'Camiseta Comfort Básica',
      loja: 'por Casa Rosa',
      descricao: 'CAMISETA COMFORT BÁSICA EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [camiseta],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'camiseta'
    }

    const produto15 = {
      preco: '20',
      nome: 'Camiseta Comfort Básica',
      loja: 'por Casa Rosa',
      descricao: 'CAMISETA COMFORT BÁSICA EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [camiseta],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'camiseta'
    }

    const produto16 = {
      preco: '20',
      nome: 'Camiseta Comfort Básica',
      loja: 'por Casa Rosa',
      descricao: 'CAMISETA COMFORT BÁSICA EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [camiseta],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'camiseta'
    }

    const produto17 = {
      preco: '20',
      nome: 'Camiseta Comfort Básica',
      loja: 'por Casa Rosa',
      descricao: 'CAMISETA COMFORT BÁSICA EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [vestido],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'vestido'
    }

    const produto18 = {
      preco: '20',
      nome: 'Camiseta Comfort Básica',
      loja: 'por Casa Rosa',
      descricao: 'CAMISETA COMFORT BÁSICA EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [vestido],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'vestido'
    }

    const produto19 = {
      preco: '20',
      nome: 'Camiseta Comfort Básica',
      loja: 'por Casa Rosa',
      descricao: 'CAMISETA COMFORT BÁSICA EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [vestido],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'vestido'
    }

    const produto20 = {
      preco: '20',
      nome: 'Camiseta Comfort Básica',
      loja: 'por Casa Rosa',
      descricao: 'CAMISETA COMFORT BÁSICA EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [vestido],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'vestido'
    }

    const produto21 = {
      preco: '20',
      nome: 'Camiseta Comfort Básica',
      loja: 'por Casa Rosa',
      descricao: 'CAMISETA COMFORT BÁSICA EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [vestido],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'vestido'
    }

    const produto22 = {
      preco: '20',
      nome: 'Camiseta Comfort Básica',
      loja: 'por Casa Rosa',
      descricao: 'CAMISETA COMFORT BÁSICA EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [vestido],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'vestido'
    }

    const produto23 = {
      preco: '20',
      nome: 'Camiseta Comfort Básica',
      loja: 'por Casa Rosa',
      descricao: 'CAMISETA COMFORT BÁSICA EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [vestido],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'vestido'
    }

    const produto24 = {
      preco: '20',
      nome: 'Camiseta Comfort Básica',
      loja: 'por Casa Rosa',
      descricao: 'CAMISETA COMFORT BÁSICA EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [camiseta],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'camiseta'
    }

    const produto25 = {
      preco: '20',
      nome: 'Calça mom Riachuelo',
      loja: 'por Casa Rosa',
      descricao: 'Calça mom, folgadinha, jeans azul claro, cintura alta Veste P/M',
      url: [rectangle39, rectangle50, rectangle51],
      tamanho: '38',
      estoque: '1',
      estado: 'nova',
      categoria: 'calça'
    }

    const produto26 = {
      preco: '20',
      nome: 'Kit Colcha Casal 3 Peças',
      loja: 'por Casa Rosa',
      descricao: 'Kit Colcha Casal 3 Peças',
      url: [cama],
      tamanho: 'casal',
      estoque: '1',
      estado: 'nova',
      categoria: 'cama'
    }

    const produto27 = {
      preco: '20',
      nome: 'Kit Colcha Casal 3 Peças',
      loja: 'por Casa Rosa',
      descricao: 'Kit Colcha Casal 3 Peças',
      url: [cama],
      tamanho: 'casal',
      estoque: '1',
      estado: 'nova',
      categoria: 'cama'
    }

    const produto28 = {
      preco: '20',
      nome: 'Kit Colcha Casal 3 Peças',
      loja: 'por Casa Rosa',
      descricao: 'Kit Colcha Casal 3 Peças',
      url: [cama],
      tamanho: 'casal',
      estoque: '1',
      estado: 'nova',
      categoria: 'cama'
    }

    const produto29 = {
      preco: '20',
      nome: 'Kit Colcha Casal 3 Peças',
      loja: 'por Casa Rosa',
      descricao: 'Kit Colcha Casal 3 Peças',
      url: [cama],
      tamanho: 'casal',
      estoque: '1',
      estado: 'nova',
      categoria: 'cama'
    }

    const produto30 = {
      preco: '20',
      nome: 'Kit Colcha Casal 3 Peças',
      loja: 'por Casa Rosa',
      descricao: 'Kit Colcha Casal 3 Peças',
      url: [cama],
      tamanho: 'casal',
      estoque: '1',
      estado: 'nova',
      categoria: 'cama'
    }

    const produto31 = {
      preco: '20',
      nome: 'Kit Colcha Casal 3 Peças',
      loja: 'por Casa Rosa',
      descricao: 'Kit Colcha Casal 3 Peças',
      url: [cama],
      tamanho: 'casal',
      estoque: '1',
      estado: 'nova',
      categoria: 'cama'
    }

    
    const produto32 = {
      preco: '20',
      nome: 'Kit tramontina',
      loja: 'por Casa Rosa',
      descricao: 'Kit tramontina',
      url: [cozinha],
      tamanho: 'único',
      estoque: '1',
      estado: 'nova',
      categoria: 'cozinha'
    }

    const produto33 = {
      preco: '20',
      nome: 'Kit tramontina',
      loja: 'por Casa Rosa',
      descricao: 'Kit tramontina',
      url: [cozinha],
      tamanho: 'único',
      estoque: '1',
      estado: 'nova',
      categoria: 'cozinha'
    }

    const produto34 = {
      preco: '20',
      nome: 'Kit tramontina',
      loja: 'por Casa Rosa',
      descricao: 'Kit tramontina',
      url: [cozinha],
      tamanho: 'único',
      estoque: '1',
      estado: 'nova',
      categoria: 'cozinha'
    }
    const produto35 = {
      preco: '20',
      nome: 'Kit tramontina',
      loja: 'por Casa Rosa',
      descricao: 'Kit tramontina',
      url: [cozinha],
      tamanho: 'único',
      estoque: '1',
      estado: 'nova',
      categoria: 'cozinha'
    }

    const produto36 = {
      preco: '20',
      nome: 'Kit tramontina',
      loja: 'por Casa Rosa',
      descricao: 'Kit tramontina',
      url: [cozinha],
      tamanho: 'único',
      estoque: '1',
      estado: 'nova',
      categoria: 'cozinha'
    }

    const produto37 = {
      preco: '20',
      nome: 'Guarda roupa casal',
      loja: 'por Casa Rosa',
      descricao: 'Guarda roupa casal',
      url: [movel],
      tamanho: 'único',
      estoque: '1',
      estado: 'nova',
      categoria: 'móvel'
    }

    const produto38 = {
      preco: '20',
      nome: 'Guarda roupa casal',
      loja: 'por Casa Rosa',
      descricao: 'Guarda roupa casal',
      url: [movel],
      tamanho: 'único',
      estoque: '1',
      estado: 'nova',
      categoria: 'móvel'
    }

    const produto39 = {
      preco: '20',
      nome: 'Guarda roupa casal',
      loja: 'por Casa Rosa',
      descricao: 'Guarda roupa casal',
      url: [movel],
      tamanho: 'único',
      estoque: '1',
      estado: 'nova',
      categoria: 'móvel'
    }

    const produto40 = {
      preco: '20',
      nome: 'Guarda roupa casal',
      loja: 'por Casa Rosa',
      descricao: 'Guarda roupa casal',
      url: [movel],
      tamanho: 'único',
      estoque: '1',
      estado: 'nova',
      categoria: 'móvel'
    }

    const produto41 = {
      preco: '20',
      nome: 'Guarda roupa casal',
      loja: 'por Casa Rosa',
      descricao: 'Guarda roupa casal',
      url: [movel],
      tamanho: 'único',
      estoque: '1',
      estado: 'nova',
      categoria: 'móvel'
    }

    const produto42 = {
      preco: '20',
      nome: 'Guarda roupa casal',
      loja: 'por Casa Rosa',
      descricao: 'Guarda roupa casal',
      url: [movel],
      tamanho: 'único',
      estoque: '1',
      estado: 'nova',
      categoria: 'móvel'
    }

    const produto43 = {
      preco: '20',
      nome: 'Kit tramontina',
      loja: 'por Casa Rosa',
      descricao: 'Kit tramontina',
      url: [cozinha],
      tamanho: 'único',
      estoque: '1',
      estado: 'nova',
      categoria: 'cozinha'
    }


    const produto44 = {
      preco: '20',
      nome: 'Kit tramontina',
      loja: 'por Casa Rosa',
      descricao: 'Kit tramontina',
      url: [cozinha],
      tamanho: 'único',
      estoque: '1',
      estado: 'nova',
      categoria: 'cozinha'
    }


    const produto45 = {
      preco: '20',
      nome: 'Kit tramontina',
      loja: 'por Casa Rosa',
      descricao: 'Kit tramontina',
      url: [cozinha],
      tamanho: 'único',
      estoque: '1',
      estado: 'nova',
      categoria: 'cozinha'
    }

    const produto46 = {
      preco: '20',
      nome: 'Kit tramontina',
      loja: 'por Casa Rosa',
      descricao: 'Kit tramontina',
      url: [cozinha],
      tamanho: 'único',
      estoque: '1',
      estado: 'nova',
      categoria: 'cozinha'
    }
    setProdutos([produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8, produto9, produto10, produto11, produto12, produto13, produto14, produto15, produto16, produto17, produto18, produto19, produto20, produto21, produto22, produto23, produto24, produto25, produto26, produto27, produto28, produto29, produto30, produto31, produto32, produto33, produto34, produto35, produto36, produto37, produto38, produto39, produto40, produto41, produto42, produto43, produto44, produto45, produto46])
  }, [])

  return (
    <ProdutosContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ProdutosContext.Provider>
  )
}

export { ProdutosContext, ProdutosContextProvider }
