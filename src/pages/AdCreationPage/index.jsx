import FormCadastroPessoaFisica from "../../components/FormularioCadastroPF/index";
import FormCadastroONG from "./../../components/FormularioCadastroONG/index";
import { Flex, Box } from "@chakra-ui/react";
import NavbarAdCreationPage from "../../components/NavbarAdCreationPage/index";
import img from "../../assets/imagecadastro.png";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import StatusCreation from "../../components/Stepper/index";
import AdFirstStep from "../../components/AdFirstStep/index";
import AdSecondStep from "../../components/AdSecondStep";
import AdThirdStep from "../../components/AdThirdStep";
import { useState } from "react";

const AdCreationPage = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState(null);
    const [category, setCategory] = useState(null);

    const handleNextStep = (category = null, formData = null) => {

        if(category){
            setCategory(category);
        }

        if(formData){
            setFormData(formData);
        }
        setCurrentStep((currentStep) => currentStep + 1);
    };

    const handleBack = () => {
        setCurrentStep((currentStep) => currentStep - 1);
    };
  
  
    return (
        <>
            <NavbarAdCreationPage />
            <Flex alignItems="center" height="110vh">
                <Box marginLeft={"9%"}>
                    <StatusCreation currentStep={currentStep}/>
                </Box>

                <Box marginLeft={"9%"}>
                    {console.log(currentStep)}
                    {currentStep === 0 && <AdFirstStep onNext={handleNextStep}/>}
                    {currentStep === 1 && <AdSecondStep onNext={handleNextStep} onBack={handleBack}/> }
                    {currentStep === 2 && <AdThirdStep data={formData} onNext={handleNextStep} onBack={handleBack}/> }
                </Box>

            </Flex>
          
        </>
    );
};

export default AdCreationPage;