import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineDocument } from 'react-icons/hi'
import { IoMdSettings } from 'react-icons/io'
import { IoLogoOctocat } from 'react-icons/io'
import { RxDashboard } from 'react-icons/rx'

import styles from './sidebar.module.scss'

export default function Sidebar() {
    return (
        <Flex flexDir="column" className={`${styles.Sidebar} expanded`} px={4} position="absolute" align="flex-start">
            <Icon color="white" as={IoLogoOctocat} fontSize={`32px`} mt={2} className={styles.logo} />
            <Flex className={styles.menuItem} py={2} borderRadius={4} px={2} align="center" gap={2}>
                <Icon as={RxDashboard} fontSize="lg" color="white" />
                <Text fontWeight="bold" className={styles.title} as="span" fontSize="sm" color="white">
                    Dashboard
                </Text>
            </Flex>
            <Flex className={styles.menuItem} py={2} borderRadius={4} px={2} align="center" gap={2}>
                <Icon as={HiOutlineDocument} fontSize="lg" color="white" />
                <Text fontWeight="bold" className={styles.title} as="span" fontSize="sm" color="white">
                    NDR
                </Text>
            </Flex>
            <Flex className={styles.menuItem} py={2} borderRadius={4} px={2} align="center" gap={2}>
                <Icon as={IoMdSettings} fontSize="lg" color="white" />
                <Text fontWeight="bold" className={styles.title} as="span" fontSize="sm" color="white">
                    Settings
                </Text>
            </Flex>
        </Flex>
    )
}
