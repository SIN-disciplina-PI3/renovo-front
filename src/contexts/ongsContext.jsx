import React, {useState, useEffect } from "react";

const OngsContext = React.createContext();

const OngsContextProvider = ({children}) => {
  const [ongs, setOngs] = useState([])

  useEffect(() => {
    const ong1 = {
      nome: 'CasaRosa',
      descricao: 'Abrigamos mulheres vítimas do câncer de mama.',
      tags: [{nome: 'mulheres', variant: 'false'}, {nome: 'câncer de Mama', variant: 'true'}]
    }
    const ong2 = {
      nome: 'Abrigo Pet',
      descricao: 'Abrigamos bichinhos de rua para adoção.',
      tags: [{nome: 'animais', variant: 'false'}, {nome: 'abrigo', variant: 'true'}]
    }
    const ong3 = {
      nome: 'Hospitalhaços',
      descricao: 'Levamos alegria a crianças de Hospitais Público.',
      tags: [{nome: 'crianças', variant: 'false'}, {nome: 'hospital', variant: 'true'}]
    }
    const ong4 = {
      nome: 'ÁguaSim',
      descricao: 'Lutamos pelo direito de acesso à água para todos.',
      tags: [{nome: 'acesso à água', variant: 'true'}]
    }
    const ong5 = {
      nome: 'Arca',
      descricao: 'Reinserção social de crianças e adolescentes',
      tags: [{nome: 'crianças', variant: 'true'}, {nome: 'adolescentes', variant: 'true'}]
    }

    const ong6 = {
      nome: 'Arca',
      descricao: 'Reinserção social de crianças e adolescentes',
      tags: [{nome: 'crianças', variant: 'true'}, {nome: 'adolescentes', variant: 'true'}]
    }

    const ong7 = {
      nome: 'ÁguaSim',
      descricao: 'Lutamos pelo direito de acesso à água para todos.',
      tags: [{nome: 'acesso à água', variant: 'true'}]
    }

    const ong8 = {
      nome: 'Hospitalhaços',
      descricao: 'Levamos alegria a crianças de Hospitais Público.',
      tags: [{nome: 'crianças', variant: 'false'}, {nome: 'hospital', variant: 'true'}]
    }

    setOngs([
      ong1,
      ong2,
      ong3,
      ong4,
      ong5,
      ong6,
      ong7,
      ong8
    ])
  }, [])

  return (
    <OngsContext.Provider value={{ongs, setOngs}} >
      {children}
    </OngsContext.Provider>
  )
}

export {OngsContext, OngsContextProvider}

