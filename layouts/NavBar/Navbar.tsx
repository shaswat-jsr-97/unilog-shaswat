import { Avatar, Flex } from '@chakra-ui/react';
import React from 'react';
import styles from './navbar.module.scss';
import BreadcrumbComp from '../Breadcrumb/Breadcrumb';

export default function NavBar() {
    return (
        <Flex className={styles.NavBar} flexDir="row" justify={`space-between`} align="center" px={4} cursor="pointer">
            <Flex className={styles.leftSide} align="center">
                <BreadcrumbComp />
            </Flex>
            <Avatar size="xs"></Avatar>
        </Flex>
    )
}