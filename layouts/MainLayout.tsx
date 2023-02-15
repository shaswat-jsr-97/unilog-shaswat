import { Flex } from '@chakra-ui/layout'
import { ReactNode } from 'react'

import NavBar from './NavBar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import styles from './mainLayout.module.scss'

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Sidebar />
            <Flex className={styles.layout} flexDir="column">
                <NavBar />
            </Flex>
            {children}
        </>
    )
}
