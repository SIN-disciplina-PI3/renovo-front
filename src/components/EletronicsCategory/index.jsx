import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';  


const EletronicsCategory = () => {

    return (
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink href='/renovo-front/'>Início</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/renovo-front/eletronics' fontWeight='bold'>Eletrônicos</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};

export default EletronicsCategory;