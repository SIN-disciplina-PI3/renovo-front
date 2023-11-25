import FormCadastroPessoaFisica from "../../components/FormularioCadastroPF/index";
import FormCadastroONG from "./../../components/FormularioCadastroONG/index";
import { Flex, Box } from "@chakra-ui/react";
import NavbarCadastro from "../../components/NavBarCadastro/index";
import img from "../../assets/imagecadastro.png";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Cadastro = () => {
  return (
    <>
      <NavbarCadastro />
      <Flex alignItems="center" height="160vh">
        
        <Box marginLeft={"8%"}>
          <Tabs variant="unstyled"  >
            <TabList>
              <Tab mb={"25px"} width={"150px"} border="1px" borderRadius={"10px 0 0 10px"} 
              borderColor={"gray.300"} _selected={{ color: "white", bg: "blue.500"}}>Pessoa Física</Tab>
              <Tab mb={"25px"} width={"150px"} border="1px" borderRadius={"0 10px 10px 0"} 
              borderColor={"gray.300"} _selected={{ color: "white", bg: "blue.500"}}>ONG</Tab>
            </TabList>
            <TabPanels >
              <TabPanel>
                <FormCadastroPessoaFisica />
              </TabPanel>
              <TabPanel>
                <FormCadastroONG />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Box marginLeft={"10%"} marginTop={-40}>
          <img src={img} alt="Image cadastro" width="100%" height="auto" />
        </Box>
      </Flex>
    </>
  );
};

export default Cadastro;