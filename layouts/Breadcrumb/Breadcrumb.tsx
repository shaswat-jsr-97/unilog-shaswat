import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'

export default function BreadcrumbComp() {
    return (
        <Breadcrumb ms={2} spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem>
                <BreadcrumbLink fontSize="sm" href="#">
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}
