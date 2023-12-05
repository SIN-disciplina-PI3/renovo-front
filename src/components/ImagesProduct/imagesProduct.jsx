import { useState, useEffect } from 'react';
import imagem1 from './../../assets/Rectangle39.png'
import imagem2 from './../../assets/Rectangle50.png'
import imagem3 from './../../assets/Rectangle51.png'

import {
    Image,
    Flex,
    Box
} from '@chakra-ui/react';

const ImagesProduct = () => {

    const [produtos, setProdutos] = useState(['']);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const produto1 = { url: imagem1 };
        const produto2 = { url: imagem2 };
        const produto3 = { url: imagem3 };

        setProdutos([produto1, produto2, produto3])

    }, [])

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
                    src={produtos[selectedImage].url}
                    borderRadius={10}
                    alt='Calça'
                />

                <Flex maxW={300} justify={"space-between"} marginTop={4}>

                    {produtos.map((produto, index) => (
                        <>
                            <Image
                                boxSize={88}
                                objectFit='cover'
                                borderRadius={10}
                                src={produto.url}
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