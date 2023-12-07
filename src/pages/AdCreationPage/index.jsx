import FormCadastroPessoaFisica from "../../components/FormularioCadastroPF/index";
import FormCadastroONG from "./../../components/FormularioCadastroONG/index";
import { Flex, Box } from "@chakra-ui/react";
import NavbarAdCreationPage from "../../components/NavbarAdCreationPage/index";
import img from "../../assets/imagecadastro.png";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import StatusCreation from "../../components/Stepper/index";

const AdCreationPage = () => {
    return (
        <>
            <NavbarAdCreationPage />
            <Flex alignItems="center" height="110vh">
                <Box marginLeft={"9%"}>
                <StatusCreation />
                </Box>
            </Flex>
        </>
    );
};

export default AdCreationPage;