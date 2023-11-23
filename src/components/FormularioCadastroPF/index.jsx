import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Box,
    Flex,
    Stack,
    Text
} from '@chakra-ui/react';

const FormCadastroPessoaFisica = () => {
    const [dadosCadastro, setDadosCadastro] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        cpf: '',
        celular: '',
        dataNascimento: '',
        cep: '',
        rua: '',
        bairro: '',
        uf: '',
        cidade: '',
        numero: '',
        senha: '',
    });

    const [show, setShow] = React.useState(false);

    const onChangeInput = (event) => {
        setDadosCadastro({ ...dadosCadastro, [event.target.name]: event.target.value });
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log('Dados do formulário:', dadosCadastro);
    };

    return (
        <form onSubmit={onSubmitForm}>
            <Stack spacing={4} maxW={'589px'}>
                <Flex justify="space-between">
                    <FormControl flex="1">
                        <FormLabel>Nome</FormLabel>
                        <Input
                            type="text"
                            placeholder="Digite seu nome"
                            value={dadosCadastro.nome}
                            onChange={onChangeInput}
                            name={'nome'}
                            id={'nome'}
                            height={'44px'}
                        />
                    </FormControl>

                    <FormControl flex="1" marginLeft={4}>
                        <FormLabel>Sobrenome</FormLabel>
                        <Input
                            type="text"
                            placeholder="Digite seu sobrenome"
                            value={dadosCadastro.sobrenome}
                            onChange={onChangeInput}
                            name={'sobrenome'}
                            id={'sobrenome'}
                            height={'44px'}
                        />
                    </FormControl>
                </Flex>

                <FormControl>
                    <FormLabel>E-mail</FormLabel>
                    <Input
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={dadosCadastro.email}
                        onChange={onChangeInput}
                        name={'email'}
                        id={'email'}
                        height={'44px'}
                    />
                </FormControl>

                <Flex justify="space-between" mt={4}>
                    <FormControl flex="1">
                        <FormLabel>CPF</FormLabel>
                        <Input
                            type="number"
                            placeholder="xxx.xxx.xxx-xx"
                            value={dadosCadastro.cpf}
                            onChange={onChangeInput}
                            name={'cpf'}
                            id={'cpf'}
                            height={'44px'}
                        />
                    </FormControl>

                    <FormControl flex="1" marginLeft={4}>
                        <FormLabel>Celular</FormLabel>
                        <Input
                            type="tel"
                            placeholder="(xx) 9xxxx-xxxx"
                            value={dadosCadastro.celular}
                            onChange={onChangeInput}
                            name={'celular'}
                            id={'celular'}
                            height={'44px'}
                        />
                    </FormControl>
                </Flex>

                <Flex justify="space-between" mt={4}>
                    <FormControl flex="1">
                        <FormLabel>Data de Nascimento</FormLabel>
                        <Input
                            type="date"
                            placeholder="dd/mm/aaaa"
                            value={dadosCadastro.dataNascimento}
                            onChange={onChangeInput}
                            name={'dataNascimento'}
                            id={'dataNascimento'}
                            height={'44px'}
                        />
                    </FormControl>

                    <FormControl flex="1" marginLeft={4}>
                        <FormLabel>CEP</FormLabel>
                        <Input
                            type="number"
                            placeholder="xxxxx-xxx"
                            value={dadosCadastro.cep}
                            onChange={onChangeInput}
                            name={'cep'}
                            id={'cep'}
                            height={'44px'}
                        />
                    </FormControl>

                    <Button
                        colorScheme="blue"
                        variant="solid"
                        type="submit"
                        width={'120px'}
                        marginTop={8}
                        flex="1"
                        marginLeft={4}

                    >
                        Buscar
                    </Button>
                </Flex>

                <Flex justify="space-between" mt={4}>
                    <FormControl flex="1">
                        <FormLabel>Rua</FormLabel>
                        <Input
                            type="text"
                            placeholder="Ex: Rua Francisco da Cunha"
                            value={dadosCadastro.rua}
                            onChange={onChangeInput}
                            name={'rua'}
                            id={'rua'}
                            height={'44px'}
                            width={'320px'}
                        />
                    </FormControl>

                    <FormControl flex="1" marginLeft={4}>
                        <FormLabel>Bairro</FormLabel>
                        <Input
                            type="text"
                            placeholder="Ex: Santana"
                            value={dadosCadastro.bairro}
                            onChange={onChangeInput}
                            name={'bairro'}
                            id={'bairro'}
                            height={'44px'}
                            width={'150px'}
                        />
                    </FormControl>

                    <FormControl flex="1" marginLeft={4}>
                        <FormLabel>UF</FormLabel>
                        <Input
                            type="text"
                            placeholder="Ex: PE"
                            value={dadosCadastro.uf}
                            onChange={onChangeInput}
                            name={'uf'}
                            id={'uf'}
                            height={'44px'}
                            width={'85px'}
                        />
                    </FormControl>
                </Flex>

                <Flex justify="space-between" mt={4}>
                    <FormControl flex="1">
                        <FormLabel>Cidade</FormLabel>
                        <Input
                            type="text"
                            placeholder="Ex: Recife"
                            value={dadosCadastro.cidade}
                            onChange={onChangeInput}
                            name={'cidade'}
                            id={'cidade'}
                            height={'44px'}
                        />
                    </FormControl>

                    <FormControl flex="1" marginLeft={4}>
                        <FormLabel>Número</FormLabel>
                        <Input
                            type="number"
                            placeholder="Ex: 74"
                            value={dadosCadastro.numero}
                            onChange={onChangeInput}
                            name={'numero'}
                            id={'numero'}
                            height={'44px'}
                        />
                    </FormControl>
                </Flex>

                <FormControl>
                    <FormLabel>Senha</FormLabel>
                    <Input
                        type="password"
                        placeholder="Digite sua senha"
                        value={dadosCadastro.senha}
                        onChange={onChangeInput}
                        name={'senha'}
                        id={'senha'}
                        height={'44px'}
                    />
                </FormControl>

                <Flex marginTop={1}>
                    <Text fontSize="md" color={'#17214D'}>
                        Ao clicar em criar conta você aceita os termos de uso.
                    </Text>
                </Flex>


                <Button
                    colorScheme="blue"
                    variant="solid"
                    type="submit"
                    width={'178px'}
                    marginTop={4}
                >
                    Cadastrar
                </Button>
            </Stack>
        </form>
    );
};

export default FormCadastroPessoaFisica;
