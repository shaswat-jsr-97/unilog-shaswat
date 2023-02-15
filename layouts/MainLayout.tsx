import { Flex } from '@chakra-ui/layout';
import React from 'react';
import NavBar from './NavBar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import styles from './mainLayout.module.scss';
export default function MainLayout() {

    return (
        <>
            <Sidebar />
            <Flex className={styles.layout} flexDir="column">
                <NavBar />
            </Flex>
        </>
    )
}