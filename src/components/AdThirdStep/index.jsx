import { useState } from 'react';
import {
  Stack,
  Text,
  Box,
  HStack,
  Button,
  FormControl,
} from '@chakra-ui/react';

function AdThirdStep({ data, onBack }) {
  const handleBack = () => {
    onBack(); 
  };

  const handleFinish = () => {
    console.log('Dados finais:', data);
  };

  return (
    <Stack spacing={4} mt={4} mb={4} p={4} w="800px">
      <Text fontSize="4xl"></Text>

      <Box
        border="1px solid #CBD5E0"
        borderRadius="lg"
        p={4}
        bgColor="#F7FAFC"
      >
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Dados do Produto
        </Text>
        <Text>
          <strong>Nome do Produto:</strong> {data.nome}
        </Text>
        <Text>
          <strong>Descrição do Produto:</strong> {data.descricao}
        </Text>
        <Text>
          <strong>Preço do Produto:</strong> R$ {data.preco}
        </Text>
        <Text>
          <strong>Condição de Uso:</strong> {data.estado}
        </Text>
      </Box>

      <HStack spacing={4} justify="center">
        <Button bg={"#4F6CB1"} size="sm" onClick={handleBack}>
          Voltar
        </Button>
        <Button bg={"#4F6CB1"} size="sm" onClick={handleFinish}>
          Finalizar
        </Button>
      </HStack>
    </Stack>
  );
}

export default AdThirdStep;
