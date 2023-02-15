import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import styles from './navbar.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavBar() {
    return (
        <Flex className={styles.NavBar} flexDir="row" justify={`space-between`} align="center" px={4}>
            <GiHamburgerMenu />
            <Text fontSize="sm">Main Nav Bar comes here.</Text>
            <Avatar size="xs"></Avatar>
        </Flex>
    )
}