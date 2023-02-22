import { ChevronRightIcon } from '@chakra-ui/icons'
import { Card, CardBody, CardHeader, Divider, Flex, Heading, Icon, List, ListItem, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BsCash } from 'react-icons/bs'
import { FaTruckPickup } from 'react-icons/fa'
import { GiOrganigram } from 'react-icons/gi'
import { TbFileInvoice } from 'react-icons/tb'
// import Form from './components/Form'

import styles from './settings.module.scss'

export default function SettingsPage() {
    return (
        
        <Card w={`100%`} variant="outline">
            <CardHeader>
                <Heading size="md" color="gray.900">
                <div className="col-lg-4 p-3 text-center text-lg-start border-0">                    
                    <p>Click to enter form</p>
                </div>
                </Heading>
                {/* <Link href="/components/Form" passHref>
                    Fill Form
                </Link> */}
                
                <Text as="p" fontSize="xs" color="gray.500" mt={2}>
                    Overview your configurations across UniLog. Select a category to begin.
                </Text>
            </CardHeader>
            {/* <Form /> */}
            <Divider />
            <CardBody overflow={`auto`}>
                <Flex gap={4} flexWrap={`wrap`} flexBasis={`25%`}>
                    <Card w={`25%`} flex="1 0 21%">
                        <CardHeader>
                            <Flex flexDir="row" gap={4} align="center">
                                <Icon as={GiOrganigram} fontSize="lg" />
                                <Text as="span" fontSize="sm" fontWeight="bold">
                                    Company
                                </Text>
                            </Flex>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <List>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" className={styles.link}>
                                        <Link href="/settings/company-profile">
                                            <Text as="span" fontSize="sm">
                                                Company Profile
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" mt={2} className={styles.link}>
                                        <Link href="/settings/components/Maps">
                                            <Text as="span" fontSize="sm">
                                                India Map
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" mt={2} className={styles.link}>
                                        <Link href="#">
                                            <Text as="span" fontSize="sm">
                                                KYC International
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" mt={2} className={styles.link}>
                                        <Link href="#">
                                            <Text as="span" fontSize="sm">
                                                Change Password
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                            </List>
                        </CardBody>
                    </Card>
                    <Card w={`25%`} flex="1 0 21%">
                        <CardHeader>
                            <Flex flexDir="row" gap={4} align="center">
                                <Icon as={GiOrganigram} fontSize="lg" />
                                <Text as="span" fontSize="sm" fontWeight="bold">
                                    Company
                                </Text>
                            </Flex>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <List>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" className={styles.link}>
                                        <Link href="/settings/company-profile">
                                            <Text as="span" fontSize="sm">
                                                Company Profile
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" mt={2} className={styles.link}>
                                        <Link href="#">
                                            <Text as="span" fontSize="sm">
                                                KYC
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" mt={2} className={styles.link}>
                                        <Link href="#">
                                            <Text as="span" fontSize="sm">
                                                KYC International
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" mt={2} className={styles.link}>
                                        <Link href="#">
                                            <Text as="span" fontSize="sm">
                                                Change Password
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                            </List>
                        </CardBody>
                    </Card>
                    <Card w={`25%`} flex="1 0 21%">
                        <CardHeader>
                            <Flex flexDir="row" gap={4} align="center">
                                <Icon as={GiOrganigram} fontSize="lg" />
                                <Text as="span" fontSize="sm" fontWeight="bold">
                                    Company
                                </Text>
                            </Flex>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <List>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" className={styles.link}>
                                        <Link href="/settings/company-profile">
                                            <Text as="span" fontSize="sm">
                                                Company Profile
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" mt={2} className={styles.link}>
                                        <Link href="#">
                                            <Text as="span" fontSize="sm">
                                                KYC
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" mt={2} className={styles.link}>
                                        <Link href="#">
                                            <Text as="span" fontSize="sm">
                                                KYC International
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" mt={2} className={styles.link}>
                                        <Link href="#">
                                            <Text as="span" fontSize="sm">
                                                Change Password
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                            </List>
                        </CardBody>
                    </Card>
                    <Card w={`25%`} flex="1 0 21%">
                        <CardHeader>
                            <Flex flexDir="row" gap={4} align="center">
                                <Icon as={GiOrganigram} fontSize="lg" />
                                <Text as="span" fontSize="sm" fontWeight="bold">
                                    Company
                                </Text>
                            </Flex>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <List>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" className={styles.link}>
                                        <Link href="/settings/company-profile">
                                            <Text as="span" fontSize="sm">
                                                Company Profile
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" mt={2} className={styles.link}>
                                        <Link href="#">
                                            <Text as="span" fontSize="sm">
                                                KYC
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" mt={2} className={styles.link}>
                                        <Link href="#">
                                            <Text as="span" fontSize="sm">
                                                KYC International
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex align="center" justifyContent="space-between" mt={2} className={styles.link}>
                                        <Link href="#">
                                            <Text as="span" fontSize="sm">
                                                Change Password
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                            </List>
                        </CardBody>
                    </Card>
                    <Card w={`25%`} flex="1 0 21%">
                        <CardHeader>
                            <Flex flexDir="row" gap={4} align="center">
                                <Icon as={FaTruckPickup} fontSize="lg" />
                                <Text as="span" fontSize="sm" fontWeight="bold">
                                    Pickup Address
                                </Text>
                            </Flex>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <List>
                                <ListItem className={styles.link}>
                                    <Flex align="center" justifyContent="space-between">
                                        <Link href="#">
                                            <Text as="span" fontSize="sm">
                                                Manage Pickup Address
                                            </Text>
                                        </Link>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                            </List>
                        </CardBody>
                    </Card>
                    <Card w={`25%`} flex="1 0 21%">
                        <CardHeader>
                            <Flex flexDir="row" gap={4} align="center">
                                <Icon as={BsCash} fontSize="lg" />
                                <Text as="span" fontSize="sm" fontWeight="bold">
                                    COD Payments
                                </Text>
                            </Flex>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <List>
                                <ListItem className={styles.link}>
                                    <Flex align="center" justifyContent="space-between">
                                        <Text as="span" fontSize="sm">
                                            Bank Details
                                        </Text>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                                <ListItem className={styles.link}>
                                    <Flex align="center" justifyContent="space-between" mt={2}>
                                        <Text as="span" fontSize="sm">
                                            Early COD
                                        </Text>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                                <ListItem className={styles.link}>
                                    <Flex align="center" justifyContent="space-between" mt={2}>
                                        <Text as="span" fontSize="sm">
                                            Postpaid
                                        </Text>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                            </List>
                        </CardBody>
                    </Card>
                    <Card w={`25%`} flex="1 0 21%">
                        <CardHeader>
                            <Flex flexDir="row" gap={4}>
                                <Icon as={TbFileInvoice} fontSize="lg" />
                                <Text as="span" fontSize="sm" fontWeight="bold">
                                    Billing
                                </Text>
                            </Flex>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <List>
                                <ListItem className={styles.link}>
                                    <Flex align="center" justifyContent="space-between">
                                        <Text as="span" fontSize="sm">
                                            GSTIN Invoicing
                                        </Text>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                                <ListItem className={styles.link}>
                                    <Flex align="center" justifyContent="space-between" mt={2}>
                                        <Text as="span" fontSize="sm">
                                            Billing Address
                                        </Text>
                                        <ChevronRightIcon fontSize="sm" />
                                    </Flex>
                                </ListItem>
                            </List>
                        </CardBody>
                    </Card>
                </Flex>
            </CardBody>
        </Card>
    )
}
