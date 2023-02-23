import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Flex,
    Icon,
    Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import { HiOutlineDocument } from 'react-icons/hi'
import { IoMdSettings } from 'react-icons/io'
import { IoLogoOctocat } from 'react-icons/io'
import { RxDashboard } from 'react-icons/rx'

import styles from './sidebar.module.scss'

export default function Sidebar() {
    return (
        <Flex flexDir="column" className={`${styles.Sidebar} expanded`} px={4} position="absolute" align="flex-start">
            <Flex align="center" gap={2}>
                <Icon color="white" as={IoLogoOctocat} fontSize={`32px`} mt={2} className={styles.logo} />
                <Text className={styles.logoName} as="span" fontWeight="bold" color="white">
                    <Link href="/">Unilog</Link>
                </Text>
            </Flex>
            <Accordion allowToggle w={`100%`}>
                <AccordionItem border="0">
                    <AccordionButton p={0} className={styles.menuItem} _hover={{ bgColor: 'gray.800' }}>
                        <Link href="/dashboard/overview" className={styles.menuLink}>
                            <Flex flexDir="row" flexGrow={1} align="center" gap="0.5rem" py={3} px={2}>
                                <Icon as={RxDashboard} fontSize="lg" color="white" />
                                <Text fontWeight="bold" className={styles.title} as="span" fontSize="sm" color="white">
                                    Dashboard
                                </Text>
                            </Flex>
                        </Link>
                        {/* <Flex py={3} px={3} className={styles.menuToggle}>
                            <AccordionIcon color="white" />
                        </Flex> */}
                    </AccordionButton>
                    {/* <AccordionPanel className={styles.submenuContainer}>
                        <Flex flexDir="column" ps={9}>
                            <Link href={'#'}>
                                <Text my={2} as="p" fontSize="xs" color="white" className={styles.submenuItem}>
                                    Dashboard Item 1
                                </Text>
                            </Link>
                            <Link href={'#'}>
                                <Text my={2} as="p" fontSize="xs" color="white" className={styles.submenuItem}>
                                    Dashboard Item 2
                                </Text>
                            </Link>
                            <Link href={'#'}>
                                <Text my={2} as="p" fontSize="xs" color="white" className={styles.submenuItem}>
                                    Dashboard Item 3
                                </Text>
                            </Link>
                        </Flex>
                    </AccordionPanel> */}
                </AccordionItem>
                <AccordionItem border="0">
                    <AccordionButton p={0} className={styles.menuItem} _hover={{ bgColor: 'gray.800' }}>
                        <Link href="/ndr" className={styles.menuLink}>
                            <Flex flexDir="row" flexGrow={1} align="center" gap="0.5rem" py={3} px={2}>
                                <Icon as={HiOutlineDocument} fontSize="lg" color="white" />
                                <Text fontWeight="bold" className={styles.title} as="span" fontSize="sm" color="white">
                                    NDR
                                </Text>
                            </Flex>
                        </Link>
                        {/* <Flex py={3} px={3} className={styles.menuToggle}>
                        <AccordionIcon color="white"/>
                    </Flex> */}
                    </AccordionButton>
                    {/* <AccordionPanel className={styles.submenuContainer}>
                    <Flex flexDir="column" ps={9}>
                        <Link href={'#'}><Text my={2} as="p" fontSize="xs" color="white" className={styles.submenuItem}>Submenu Item 1</Text></Link>
                        <Link href={'#'}><Text my={2} as="p" fontSize="xs" color="white" className={styles.submenuItem}>Submenu Item 1</Text></Link>
                        <Link href={'#'}><Text my={2} as="p" fontSize="xs" color="white" className={styles.submenuItem}>Submenu Item 1</Text></Link>
                    </Flex>
                    </AccordionPanel> */}
                </AccordionItem>
                <AccordionItem border="0">
                    <AccordionButton p={0} className={styles.menuItem} _hover={{ bgColor: 'gray.800' }}>
                        <Link href="/settings" className={styles.menuLink}>
                            <Flex flexDir="row" flexGrow={1} align="center" gap="0.5rem" py={3} px={2}>
                                <Icon as={IoMdSettings} fontSize="lg" color="white" />
                                <Text fontWeight="bold" className={styles.title} as="span" fontSize="sm" color="white">
                                    Settings
                                </Text>
                            </Flex>
                        </Link>
                        <Flex py={3} px={3} className={styles.menuToggle}>
                            <AccordionIcon color="white" />
                        </Flex>
                    </AccordionButton>
                    <AccordionPanel className={styles.submenuContainer}>
                        <Flex flexDir="column" ps={9}>
                            <Link href={'#'}>
                                <Text my={2} as="p" fontSize="xs" color="white" className={styles.submenuItem}>
                                    Settings Item 1
                                </Text>
                            </Link>
                            <Link href={'#'}>
                                <Text my={2} as="p" fontSize="xs" color="white" className={styles.submenuItem}>
                                    Settings Item 2
                                </Text>
                            </Link>
                            <Link href={'#'}>
                                <Text my={2} as="p" fontSize="xs" color="white" className={styles.submenuItem}>
                                    Settings Item 3
                                </Text>
                            </Link>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            {/* <Flex className={styles.menuItem} borderRadius={4} align="center" gap={2}>
                <Link href="/dashboard/overview" className={styles.menuLink}>
                    <Flex flexDir="row" flexGrow={1} align="center" gap="0.5rem" py={3} px={2}>
                        <Icon as={RxDashboard} fontSize="lg" color="white" />
                        <Text fontWeight="bold" className={styles.title} as="span" fontSize="sm" color="white">
                            Dashboard
                        </Text>
                    </Flex>
                </Link>
                
            </Flex>
            <Flex flexDir="column" ps={9}>
                <Link href={'#'}><Text my={2} as="p" fontSize="xs" color="white" className={styles.submenuItem}>Submenu Item 1</Text></Link>
                <Link href={'#'}><Text my={2} as="p" fontSize="xs" color="white" className={styles.submenuItem}>Submenu Item 1</Text></Link>
                <Link href={'#'}><Text my={2} as="p" fontSize="xs" color="white" className={styles.submenuItem}>Submenu Item 1</Text></Link>
            </Flex>
            <Link href="/ndr" className={styles.menuLink}>
                <Flex className={styles.menuItem} py={3} borderRadius={4} px={2} align="center" gap={2}>
                    <Icon as={HiOutlineDocument} fontSize="lg" color="white" />
                    <Text fontWeight="bold" className={styles.title} as="span" fontSize="sm" color="white">
                        NDR
                    </Text>
                </Flex>
            </Link>

            <Link href="/settings" className={styles.menuLink}>
                <Flex className={styles.menuItem} py={3} borderRadius={4} px={2} align="center" gap={2}>
                    <Icon as={IoMdSettings} fontSize="lg" color="white" />
                    <Text fontWeight="bold" className={styles.title} as="span" fontSize="sm" color="white">
                        Settings
                    </Text>
                </Flex>
            </Link> */}
        </Flex>
    )
}
