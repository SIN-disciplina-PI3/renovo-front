import { useState } from 'react';
import { Stack, Text, Box, HStack, Button, Input, Textarea, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormControl, FormLabel, FormErrorMessage, RadioGroup, Radio } from '@chakra-ui/react';

function AdSecondStep({ onBack, onNext }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [estado, setEstado] = useState('');


  const handleNext = () => {
    onNext(null, { nome, descricao, preco, estado });
  };

  return (
    <Stack spacing={4} mt={4} mb={4} p={4} w="800px">
      <Text fontSize='5xl'>detalhes</Text>

      <FormControl isRequired>
        <FormLabel>Nome do Produto</FormLabel>
        <Input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Descrição do Produto</FormLabel>
        <Textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Preço do Produto</FormLabel>
        <NumberInput
          value={preco}
          onChange={(value) => setPreco(value)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

        <FormControl isRequired>
        <FormLabel>Condições de Uso</FormLabel>
        <RadioGroup value={estado} onChange={(value) => setEstado(value)}>
          <HStack spacing={4}>
            <Radio value="Usado">Usado</Radio>
            <Radio value="Novo">Novo</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>

      <HStack spacing={4} justify="flex-end">
        <Button bg={"#4F6CB1"} size="sm" onClick={onBack}>
            Voltar
        </Button>
        <Button bg={"#4F6CB1"} size="sm" onClick={handleNext}>
          Próximo
        </Button>
      </HStack>
    </Stack>
  );
}

export default AdSecondStep;