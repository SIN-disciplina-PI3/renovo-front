import { useState } from 'react';
import { Stack, Text, Box, HStack, Button } from '@chakra-ui/react';

function AdFirstStep({ onNext }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleNext = () => {
    if (selectedCategory) {
      onNext(selectedCategory); 
    }
  };


  return (
    <Stack spacing={3} mt={4} mb={4} align="flex-start"> 
      <Text fontSize='6xl'>O que estará à venda?</Text>

      <HStack spacing={4} justify="flex-end"> 
        {['Eletrônicos', 'Livros', 'Acessórios', 'Cozinha', 'Cama', 'Calça', 'Camiseta', 'Vestido'].map((category) => (
          <Box
            key={category}
            bg={selectedCategory === category ? '#4F6CB1' : '#E2E8FD'}
            p={4}
            borderRadius="lg"
            boxShadow="md"
            cursor="pointer"
            transition="background 0.3s"
            _hover={{ bg: "#4F6CB1" }}
            onClick={() => handleCategorySelect(category)}
          >
            <p>{category}</p>
          </Box>
        ))}
      </HStack>

      <Button
        isDisabled={!selectedCategory}
        bg={"#4F6CB1"}
        size="lg"
        onClick={handleNext}
        alignSelf="flex-end" 
        mt={4} 
      >
        Próximo
      </Button>
    </Stack>
  );
}

export default AdFirstStep;
