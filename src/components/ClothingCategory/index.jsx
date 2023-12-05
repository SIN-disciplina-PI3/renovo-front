import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';  


const ClothingCategory = () => {

    return (
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink href='/renovo-front/'>Início</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/renovo-front/roupas' fontWeight='bold'>Roupas</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};

export default ClothingCategory;