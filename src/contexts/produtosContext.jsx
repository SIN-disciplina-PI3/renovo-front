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
import smartwatch from './../assets/a5d0cf86eb62ce4decaefb113cfa7513.webp'
import fone from './../assets/5117_fone-bluetooth-redmi-buds-4-active-xiaomi-x00757_m2_638318384999138991.jpg'
import livroMagico from './../assets/livro.jpg'

const ProdutosContext = React.createContext()

const ProdutosContextProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const produto1 = {
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
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
      id: '5',
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
      id: '6',
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
      id: '7',
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
      id: '8',
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
      id: '9',
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
      id: '10',
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
      id: '11',
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
      id: '12',
      preco: '20',
      nome: 'Camiseta Comfort',
      loja: 'por Casa Rosa',
      descricao: 'Camiseta Comfort EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [camiseta],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'camiseta'
    }

    const produto13 = {
      id: '13',
      preco: '20',
      nome: 'Camiseta Comfort',
      loja: 'por Casa Rosa',
      descricao: 'Camiseta Comfort EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [camiseta],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'camiseta'
    }

    const produto14 = {
      id: '14',
      preco: '20',
      nome: 'Camiseta Comfort',
      loja: 'por Casa Rosa',
      descricao: 'Camiseta Comfort EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [camiseta],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'camiseta'
    }

    const produto15 = {
      id: '15',
      preco: '20',
      nome: 'Camiseta Comfort',
      loja: 'por Casa Rosa',
      descricao: 'Camiseta Comfort EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [camiseta],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'camiseta'
    }

    const produto16 = {
      id: '16',
      preco: '20',
      nome: 'Camiseta Comfort',
      loja: 'por Casa Rosa',
      descricao: 'Camiseta Comfort EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [camiseta],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'camiseta'
    }

    const produto17 = {
      id: '17',
      preco: '20',
      nome: 'Vestido Comfort',
      loja: 'por Casa Rosa',
      descricao: 'Vestido Comfort super confortável',
      url: [vestido],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'vestido'
    }

    const produto18 = {
      id: '18',
      preco: '20',
      nome: 'Vestido Comfort',
      loja: 'por Casa Rosa',
      descricao: 'Vestido Comfort super confortável',
      url: [vestido],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'vestido'
    }

    const produto19 = {
      id: '19',
      preco: '20',
      nome: 'Vestido Comfort',
      loja: 'por Casa Rosa',
      descricao: 'Vestido Comfort super confortável',
      url: [vestido],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'vestido'
    }

    const produto20 = {
      id: '20',
      preco: '20',
      nome: 'Vestido Comfort',
      loja: 'por Casa Rosa',
      descricao: 'Vestido Comfort super confortável',
      url: [vestido],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'vestido'
    }

    const produto21 = {
      id: '21',
      preco: '20',
      nome: 'Vestido Comfort',
      loja: 'por Casa Rosa',
      descricao: 'Vestido Comfort super confortável',
      url: [vestido],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'vestido'
    }

    const produto22 = {
      id: '22',
      preco: '20',
      nome: 'Vestido Comfort',
      loja: 'por Casa Rosa',
      descricao: 'Vestido Comfort super confortável',
      url: [vestido],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'vestido'
    }

    const produto23 = {
      id: '23',
      preco: '20',
      nome: 'Vestido Comfort',
      loja: 'por Casa Rosa',
      descricao: 'Vestido Comfort super confortável',
      url: [vestido],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'vestido'
    }

    const produto24 = {
      id: '24',
      preco: '20',
      nome: 'Camiseta Comfort',
      loja: 'por Casa Rosa',
      descricao: 'Camiseta Comfort EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [camiseta],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'camiseta'
    }

    const produto25 = {
      id: '25',
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
      id: '26',
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
      id: '27',
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
      id: '28',
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
      id: '29',
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
      id: '30',
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
      id: '31',
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
      id: '32',
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
      id: '33',
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
      id: '34',
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
      id: '35',
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
      id: '36',
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
      id: '37',
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
      id: '38',
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
      id: '39',
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
      id: '40',
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
      id: '41',
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
      id: '42',
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
      id: '43',
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
      id: '44',
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
      id: '45',
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
      id: '46',
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado",
      categoria: 'novidades'
    }

    const produto48 = {
      id: '47',
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Alagoas Importados',
      url: [iphone14, iphone13, iphone14],
      descricao: "Iphone 14 excelente qualidade",
      tamanho: "14 pol",
      estoque: "2",
      estado: "novo",
      categoria: 'novidades'
    }
    const produto49 = {
      id: '48',
      preco: '20',
      nome: 'Calça mom Riachuelo',
      loja: 'por Casa Rosa',
      descricao: 'Calça mom, folgadinha, jeans azul claro, cintura alta Veste P/M',
      url: [rectangle39, rectangle50, rectangle51],
      tamanho: '38',
      estoque: '1',
      estado: 'nova',
      categoria: 'novidades'
    }

    const produto50 = {
      id: '49',
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado",
      categoria: 'novidades'
    }

    
    const produto51 = {
      id: '50',
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado",
      categoria: 'novidades'
    }

    const produto52 = {
      id: '51',
      preco: '20',
      nome: 'Calça mom Riachuelo',
      loja: 'por Casa Rosa',
      descricao: 'Calça mom, folgadinha, jeans azul claro, cintura alta Veste P/M',
      url: [rectangle39, rectangle50, rectangle51],
      tamanho: '38',
      estoque: '1',
      estado: 'nova',
      categoria: 'novidades'
    }

    const produto53 = {
      id: '52',
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado",
      categoria: 'novidades'
    }
    const produto54 = {
      id: '53',
      preco: '20',
      nome: 'Calça mom Riachuelo',
      loja: 'por Casa Rosa',
      descricao: 'Calça mom, folgadinha, jeans azul claro, cintura alta Veste P/M',
      url: [rectangle39, rectangle50, rectangle51],
      tamanho: '38',
      estoque: '1',
      estado: 'nova',
      categoria: 'novidades'
    }

    const produto55 = {
      id: '54',
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado",
      categoria: 'novidades'
    }

    const produto56 = {
      id: '55',
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado",
      categoria: 'novidades'
    }

    const produto57 = {
      id: '56',
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: [iphone11pro, iphone12, iphone11pro],
      descricao: "Iphone 11 excelente qualidade",
      tamanho: "11pol",
      estoque: "4",
      estado: "usado",
      categoria: 'novidades'
    }

    const produto58 = {
      id: '57',
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Alagoas Importados',
      url: [iphone14, iphone13, iphone14],
      descricao: "Iphone 14 excelente qualidade",
      tamanho: "14 pol",
      estoque: "2",
      estado: "novo",
      categoria: 'novidades'
    }

    const produto59 = {
      id: '58',
      preco: '20',
      nome: 'Calça mom Riachuelo',
      loja: 'por Casa Rosa',
      descricao: 'Calça mom, folgadinha, jeans azul claro, cintura alta Veste P/M',
      url: [rectangle39, rectangle50, rectangle51],
      tamanho: '38',
      estoque: '1',
      estado: 'nova',
      categoria: 'novidades'
    }

    const produto60 = {
      id: '59',
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Alagoas Importados',
      url: [iphone14, iphone13, iphone14],
      descricao: "Iphone 14 excelente qualidade",
      tamanho: "14 pol",
      estoque: "2",
      estado: "novo",
      categoria: 'novidades'
    }

    const produto61 = {
      id: '60',
      preco: '20',
      nome: 'Calça mom Riachuelo',
      loja: 'por Casa Rosa',
      descricao: 'Calça mom, folgadinha, jeans azul claro, cintura alta Veste P/M',
      url: [rectangle39, rectangle50, rectangle51],
      tamanho: '38',
      estoque: '1',
      estado: 'nova',
      categoria: 'novidades'
    }

    const produto62 = {
      id: '61',
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Alagoas Importados',
      url: [iphone14, iphone13, iphone14],
      descricao: "Iphone 14 excelente qualidade",
      tamanho: "14 pol",
      estoque: "2",
      estado: "novo",
      categoria: 'novidades'
    }


    const produto63 = {
      id: '62',
      preco: '20',
      nome: 'Calça mom Riachuelo',
      loja: 'por Casa Rosa',
      descricao: 'Calça mom, folgadinha, jeans azul claro, cintura alta Veste P/M',
      url: [rectangle39, rectangle50, rectangle51],
      tamanho: '38',
      estoque: '1',
      estado: 'nova',
      categoria: 'novidades'
    }


    const produto64 = {
      id: '63',
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Alagoas Importados',
      url: [iphone14, iphone13, iphone14],
      descricao: "Iphone 14 excelente qualidade",
      tamanho: "14 pol",
      estoque: "2",
      estado: "novo",
      categoria: 'novidades'
    }
    const produto65 = {
      id: '64',
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
    const produto66 = {
      id: '65',
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

    const produto67 = {
      id: '66',
      preco: '20',
      nome: 'Camiseta Comfort',
      loja: 'por Casa Rosa',
      descricao: 'Camiseta Comfort EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [camiseta],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'camiseta'
    }

    const produto68 = {
      id: '67',
      preco: '20',
      nome: 'Camiseta Comfort',
      loja: 'por Casa Rosa',
      descricao: 'Camiseta Comfort EM ALGODÃO PERUANO COM MANGA CURTA',
      url: [camiseta],
      tamanho: 'P',
      estoque: '1',
      estado: 'nova',
      categoria: 'camiseta'
    }
    const produto69 = {
      id: '68',
      preco: '150',
      nome: 'Smartwatch Apple',
      loja: 'por Casa Rosa',
      descricao: 'Tenha controle de tudo em seu braço',
      url: [smartwatch],
      tamanho: '4cm',
      estoque: '3',
      estado: 'nova',
      categoria: 'acessorios-eletronico'
    }
    const produto70 = {
      id: '69',
      preco: '140',
      nome: 'Fone Bluetooth',
      loja: 'por Recife importados',
      descricao: 'Suas corridas serão mais divertidas com esse fone',
      url: [fone],
      tamanho: '3cm',
      estoque: '4',
      estado: 'novo',
      categoria: 'acessorios-eletronico'
    }
    const produto71 = {
      id: '70',
      preco: '150',
      nome: 'Smartwatch Apple',
      loja: 'por Casa Rosa',
      descricao: 'Tenha controle de tudo em seu braço',
      url: [smartwatch],
      tamanho: '4cm',
      estoque: '3',
      estado: 'nova',
      categoria: 'acessorios-eletronico'
    }
    const produto72 = {
      id: '71',
      preco: '140',
      nome: 'Fone Bluetooth',
      loja: 'por Recife importados',
      descricao: 'Suas corridas serão mais divertidas com esse fone',
      url: [fone],
      tamanho: '3cm',
      estoque: '4',
      estado: 'novo',
      categoria: 'acessorios-eletronico'
    }
    const produto73 = {
      id: '72',
      preco: '150',
      nome: 'Smartwatch Apple',
      loja: 'por Casa Rosa',
      descricao: 'Tenha controle de tudo em seu braço',
      url: [smartwatch],
      tamanho: '4cm',
      estoque: '3',
      estado: 'nova',
      categoria: 'acessorios-eletronico'
    }
    const produto74 = {
      id: '73',
      preco: '140',
      nome: 'Fone Bluetooth',
      loja: 'por Recife importados',
      descricao: 'Suas corridas serão mais divertidas com esse fone',
      url: [fone],
      tamanho: '3cm',
      estoque: '4',
      estado: 'novo',
      categoria: 'acessorios-eletronico'
    }
    const produto75 = {
      id: '74',
      preco: '150',
      nome: 'Smartwatch Apple',
      loja: 'por Casa Rosa',
      descricao: 'Tenha controle de tudo em seu braço',
      url: [smartwatch],
      tamanho: '4cm',
      estoque: '3',
      estado: 'nova',
      categoria: 'acessorios-eletronico'
    }
    const produto76 = {
      id: '75',
      preco: '140',
      nome: 'Fone Bluetooth',
      loja: 'por Recife importados',
      descricao: 'Suas corridas serão mais divertidas com esse fone',
      url: [fone],
      tamanho: '3cm',
      estoque: '4',
      estado: 'novo',
      categoria: 'acessorios-eletronico'
    }
    const produto77 = {
      id: '76',
      preco: '150',
      nome: 'Smartwatch Apple',
      loja: 'por Casa Rosa',
      descricao: 'Tenha controle de tudo em seu braço',
      url: [smartwatch],
      tamanho: '4cm',
      estoque: '3',
      estado: 'nova',
      categoria: 'acessorios-eletronico'
    }
    const produto78 = {
      id: '77',
      preco: '140',
      nome: 'Fone Bluetooth',
      loja: 'por Recife importados',
      descricao: 'Suas corridas serão mais divertidas com esse fone',
      url: [fone],
      tamanho: '3cm',
      estoque: '4',
      estado: 'novo',
      categoria: 'acessorios-eletronico'
    }
    const produto79 = {
      id: '78',
      preco: '150',
      nome: 'Smartwatch Apple',
      loja: 'por Casa Rosa',
      descricao: 'Tenha controle de tudo em seu braço',
      url: [smartwatch, smartwatch,smartwatch],
      tamanho: '4cm',
      estoque: '3',
      estado: 'nova',
      categoria: 'acessorios-eletronico'
    }
    const produto80 = {
      id: '79',
      preco: '140',
      nome: 'Fone Bluetooth',
      loja: 'por Recife importados',
      descricao: 'Suas corridas serão mais divertidas com esse fone',
      url: [fone, fone, fone],
      tamanho: '3cm',
      estoque: '4',
      estado: 'novo',
      categoria: 'acessorios-eletronico'
    }

    const produto81 = {
      id: '81',
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

    const produto82 = {
      id: '82',
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

    
    const produto83 = {
      id: '83',
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

    const produto84 = {
      id: '84',
      preco: '50',
      nome: 'Livro Mágico',
      loja: 'Livraria Francisco',
      url: [livroMagico, livroMagico, livroMagico],
      descricao: "Livro para feitiços mágicos",
      tamanho: "25cm",
      estoque: "3",
      estado: "novo",
      categoria: "livros"
    }
    const produto85 = {
      id: '85',
      preco: '50',
      nome: 'Livro Mágico',
      loja: 'Livraria Francisco',
      url: [livroMagico, livroMagico, livroMagico],
      descricao: "Livro para feitiços mágicos",
      tamanho: "25cm",
      estoque: "3",
      estado: "novo",
      categoria: "livros"
    }
    const produto86 = {
      id: '86',
      preco: '50',
      nome: 'Livro Mágico',
      loja: 'Livraria Francisco',
      url: [livroMagico, livroMagico, livroMagico],
      descricao: "Livro para feitiços mágicos",
      tamanho: "25cm",
      estoque: "3",
      estado: "novo",
      categoria: "livros"
    }
    const produto87 = {
      id: '87',
      preco: '50',
      nome: 'Livro Mágico',
      loja: 'Livraria Francisco',
      url: [livroMagico, livroMagico, livroMagico],
      descricao: "Livro para feitiços mágicos",
      tamanho: "25cm",
      estoque: "3",
      estado: "novo",
      categoria: "livros"
    }
    const produto88 = {
      id: '88',
      preco: '50',
      nome: 'Livro Mágico',
      loja: 'Livraria Francisco',
      url: [livroMagico, livroMagico, livroMagico],
      descricao: "Livro para feitiços mágicos",
      tamanho: "25cm",
      estoque: "3",
      estado: "novo",
      categoria: "livros"
    }
    const produto89 = {
      id: '89',
      preco: '50',
      nome: 'Livro Mágico',
      loja: 'Livraria Francisco',
      url: [livroMagico, livroMagico, livroMagico],
      descricao: "Livro para feitiços mágicos",
      tamanho: "25cm",
      estoque: "3",
      estado: "novo",
      categoria: "livros"
    }
    const produto90 = {
      id: '90',
      preco: '50',
      nome: 'Livro Mágico',
      loja: 'Livraria Francisco',
      url: [livroMagico, livroMagico, livroMagico],
      descricao: "Livro para feitiços mágicos",
      tamanho: "25cm",
      estoque: "3",
      estado: "novo",
      categoria: "livros"
    }
    const produto91 = {
      id: '91',
      preco: '50',
      nome: 'Livro Mágico',
      loja: 'Livraria Francisco',
      url: [livroMagico, livroMagico, livroMagico],
      descricao: "Livro para feitiços mágicos",
      tamanho: "25cm",
      estoque: "3",
      estado: "novo",
      categoria: "livros"
    }
    

    setProdutos([produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8, produto9, produto10, produto11, produto12, produto13, produto14, produto15, produto16, produto17, produto18, produto19, produto20, produto21, produto22, produto23, produto24, produto25, produto26, produto27, produto28, produto29, produto30, produto31, produto32, produto33, produto34, produto35, produto36, produto37, produto38, produto39, produto40, produto41, produto42, produto43, produto44, produto45, produto46, produto48, produto49, produto50, produto51, produto52, produto53, produto54, produto55, produto56, produto57, produto58, produto59, produto60, produto61, produto62, produto63, produto64, produto65, produto66, produto67, produto68, produto69, produto70, produto71, produto72, produto73, produto74, produto75, produto76, produto77, produto78, produto79, produto80, produto81, produto82, produto83, produto84, produto85, produto86, produto87, produto88, produto89, produto90, produto91])
  }, [])

  return (
    <ProdutosContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ProdutosContext.Provider>
  )
}

export { ProdutosContext, ProdutosContextProvider }
