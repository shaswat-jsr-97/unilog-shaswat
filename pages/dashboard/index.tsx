import { Card, CardBody, CardHeader, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

import styles from './dashboard.module.scss'

export default function DashboardPage() {
    return (
        <Card w={`100%`}>
            <CardHeader pb={0}>
                <Heading size="md" color="gray.900">
                    Dashboard
                </Heading>
            </CardHeader>
            <CardBody pt={2}>
                <Tabs>
                    <TabList>
                        <Tab className={styles.dashboardTab} fontSize="sm" fontWeight="bold">
                            Overview
                        </Tab>
                        <Tab className={styles.dashboardTab} fontSize="sm" fontWeight="bold">
                            Orders
                        </Tab>
                        <Tab className={styles.dashboardTab} fontSize="sm" fontWeight="bold">
                            Shipments
                        </Tab>
                        <Tab className={styles.dashboardTab} fontSize="sm" fontWeight="bold">
                            NDR
                        </Tab>
                        <Tab className={styles.dashboardTab} fontSize="sm" fontWeight="bold">
                            RTO
                        </Tab>
                        <Tab className={styles.dashboardTab} fontSize="sm" fontWeight="bold">
                            Courier
                        </Tab>
                        <Tab className={styles.dashboardTab} fontSize="sm" fontWeight="bold">
                            Delays
                        </Tab>
                        <Tab className={styles.dashboardTab} fontSize="sm" fontWeight="bold">
                            Tracking
                        </Tab>
                    </TabList>

                    <TabPanels className={styles.dashboardTabPanel}>
                        <TabPanel>
                            <Card>
                                <CardHeader>Overview</CardHeader>
                                <CardBody>Today&apos;s orders - Rs. 15,019</CardBody>
                            </Card>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </CardBody>
        </Card>
    )
}
