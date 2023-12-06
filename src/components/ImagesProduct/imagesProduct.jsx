import { useState, useEffect, useContext } from 'react';
import { ProdutosContext } from '../../contexts/produtosContext';
import imagem1 from './../../assets/Rectangle39.png'
import imagem2 from './../../assets/Rectangle50.png'
import imagem3 from './../../assets/Rectangle51.png'
import {
    Image,
    Flex,
    Box
} from '@chakra-ui/react';

const ImagesProduct = ({index}) => {

    const indexInt = parseInt(index.index, 10)

    const { produtos } = useContext(ProdutosContext)

    const [produto, setProduto] = useState({url: []});
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const produto = { url: [imagem1, imagem2, imagem3] };

        setProduto(produto)
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
                    src={produtos[indexInt]?.url[selectedImage]}
                    borderRadius={10}
                    alt='Calça'
                />

                <Flex maxW={300} justify={"space-between"} marginTop={4}>

                    {produtos[indexInt]?.url.map((url, index) => (
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