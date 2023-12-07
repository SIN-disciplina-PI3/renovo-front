import { useState, useContext } from 'react';
import { ProdutosContext } from '../../contexts/produtosContext';
import {
    Image,
    Flex,
    Box
} from '@chakra-ui/react';

const ImagesProduct = (id) => {

    const { produtos } = useContext(ProdutosContext)
    const [selectedImage, setSelectedImage] = useState(0);
    function onChangeImagem(index) {
        setSelectedImage(index);
    }

    return (
        <>
            <Box>
                <Image
                    w={504}
                    h={572}
                    objectFit='cover'
                    src={produtos[id.id - 1]?.url[selectedImage]}
                    borderRadius={10}
                    alt='Calça'
                />

                <Flex maxW={300} justify={"space-between"} marginTop={4}>

                    {produtos[id.id - 1]?.url.map((url, index) => (
                        <>
                            <Image
                                boxSize={88}
                                objectFit='cover'
                                borderRadius={10}
                                src={url}
                                alt='Calça'
                                cursor={"pointer"}
                                key={index}
                                border={(selectedImage === index) ? "2px solid #4E81EF" : "none"}
                                onClick={() => onChangeImagem(index)}
                            />
                        </>
                    ))}

                </Flex>
            </Box>
        </>
    )
}

export default ImagesProduct;