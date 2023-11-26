import React, { useState } from 'react';
import InputMask from 'react-input-mask';
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

const FormCadastroONG = () => {
    const [dadosCadastro, setDadosCadastro] = useState({
        nomeFantasia: '',
        email: '',
        cnpj: '',
        celular: '',
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
                        <FormLabel>Nome Fantasia</FormLabel>
                        <Input
                            type="text"
                            placeholder="Digite nome da ONG"
                            value={dadosCadastro.nomeFantasia}
                            onChange={onChangeInput}
                            name={'nomeFantasia'}
                            id={'nomeFantasia'}
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
                        <FormLabel>CNPJ</FormLabel>
                        <InputMask
                            mask="99.999.999/9999-99"
                            maskChar={null}
                            value={dadosCadastro.cnpj}
                            onChange={(e) => onChangeInput({ target: { name: 'cnpj', value: e.target.value } })}
                        >
                            {(inputProps) => <Input {...inputProps} type="text" placeholder="xx.xxx.xxx/xxxx-xx" height={'44px'} />}
                        </InputMask>
                    </FormControl>

                    <FormControl flex="1" marginLeft={4}>
                        <FormLabel>Celular</FormLabel>
                        <InputMask
                            mask="(99) 9 9999-9999"
                            maskChar={null}
                            value={dadosCadastro.celular}
                            onChange={(e) => onChangeInput({ target: { name: 'celular', value: e.target.value } })}
                        >
                            {(inputProps) => <Input {...inputProps} type="tel" placeholder="(xx) 9xxxx-xxxx" height={'44px'} />}
                        </InputMask>
                    </FormControl>
                </Flex>

                <Flex justify="space-between" mt={4}>
                    <FormControl flex="1">
                        <FormLabel>CEP</FormLabel>
                        <InputMask
                            mask="99999-999"
                            maskChar={null}
                            value={dadosCadastro.cep}
                            onChange={(e) => onChangeInput({ target: { name: 'cep', value: e.target.value } })}
                        >
                            {(inputProps) => <Input {...inputProps} type="text" placeholder="xxxxx-xxx" height={'44px'} />}
                        </InputMask>
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
                            width={'385px'}
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

export default FormCadastroONG;
