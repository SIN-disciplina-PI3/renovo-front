import React, { useState } from 'react'

import { FormControl, FormLabel, Input, Button, Box, Flex } from '@chakra-ui/react'

const FormLogin = () => {
  const [credenciais, setCredenciais] = useState({ email: '', senha: '' })
  const [show, setShow] = React.useState(false)

  const onChangeInput = event => {
    setCredenciais({ ...credenciais, [event.target.name]: event.target.value })
  }

  return (
      <FormControl maxW={"589px"} >
        <FormLabel>E-mail</FormLabel>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={credenciais.email}
          onChange={onChangeInput}
          name={'email'}
          id={'email'}
          height={'44px'}
        />

        <FormLabel marginTop={8}>Senha</FormLabel>
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="Digite sua senha"
          value={credenciais.senha}
          onChange={onChangeInput}
          name={'senha'}
          id="senha"
          height={'44px'}
        />

        <Button
          colorScheme="blue"
          variant="solid"
          type={'submit'}
          width={'178px'}
          height={'44px'}
          marginTop={8}
        >
          Entrar
        </Button>
      </FormControl>
  )
}

export default FormLogin
