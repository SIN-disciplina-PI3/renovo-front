import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom'
  import { Box, Flex, Button, Spacer } from '@chakra-ui/react'

  const steps = [
    { title: 'O que estará a venda?', description: 'Seção 1' },
    { title: 'Identificando o produto', description: 'Seção 2' },
    { title: 'Detalhes', description: 'Seção 3' },
  ]
  
  function StatusCreation() {
    const { activeStep } = useSteps({
      index: 1,
      count: steps.length,
    })
  
    return (
      <Stepper index={activeStep} orientation='vertical' height='400px' gap='0'>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    )
  }
  
  export default StatusCreation