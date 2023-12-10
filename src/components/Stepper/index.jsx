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
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

const steps = [
  { title: 'O que estará à venda?', description: 'Seção 1' },
  { title: 'Detalhes', description: 'Seção 2' },
  { title: 'Finalização', description: 'Seção 3' },
];

function StatusCreation({ currentStep }) {
  return (
    <Stepper index={currentStep} orientation="vertical" height="400px" gap="0">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}

export default StatusCreation;
