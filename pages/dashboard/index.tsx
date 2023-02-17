import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    IconButton,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tooltip,
} from '@chakra-ui/react'
import React from 'react'
import toast from 'react-hot-toast'
import { FiRefreshCw } from 'react-icons/fi'

import DashboardCouriers from './components/Courier'
import DashboardDelays from './components/Delays'
import DashboardNDR from './components/NDR'
import DashboardOrders from './components/Orders'
import DashboardOverview from './components/Overview'
import DashboardRTO from './components/RTO'
import DashboardShipments from './components/Shipments'
import DashboardTracking from './components/Tracking'
import styles from './dashboard.module.scss'

export default function DashboardPage() {
    const handleRefresh = () => {
        return toast('Refreshing...')
    }
    return (
        <Card w={`100%`}>
            <CardHeader pb={0}>
                <Flex flexDir="row" align={`center`} justify={`space-between`}>
                    <Heading size="md" color="gray.900">
                        Dashboard
                    </Heading>
                    <Box>
                        <Tooltip label="Refresh" hasArrow>
                            <IconButton
                                size="sm"
                                aria-label={'Refresh'}
                                icon={<FiRefreshCw />}
                                onClick={handleRefresh}
                            />
                        </Tooltip>
                    </Box>
                </Flex>
            </CardHeader>
            <CardBody>
                <Tabs isLazy isFitted className={styles.dashboardTabsContainer} color="gray.700">
                    <TabList>
                        <Tab
                            className={styles.dashboardTab}
                            fontSize="sm"
                            _selected={{ color: 'blue.400', borderColor: 'blue.400' }}
                            fontWeight="bold"
                        >
                            Overview
                        </Tab>
                        <Tab
                            className={styles.dashboardTab}
                            fontSize="sm"
                            _selected={{ color: 'blue.400', borderColor: 'blue.400' }}
                            fontWeight="bold"
                        >
                            Orders
                        </Tab>
                        <Tab
                            className={styles.dashboardTab}
                            fontSize="sm"
                            _selected={{ color: 'blue.400', borderColor: 'blue.400' }}
                            fontWeight="bold"
                        >
                            Shipments
                        </Tab>
                        <Tab
                            className={styles.dashboardTab}
                            fontSize="sm"
                            _selected={{ color: 'blue.400', borderColor: 'blue.400' }}
                            fontWeight="bold"
                        >
                            NDR
                        </Tab>
                        <Tab
                            className={styles.dashboardTab}
                            fontSize="sm"
                            _selected={{ color: 'blue.400', borderColor: 'blue.400' }}
                            fontWeight="bold"
                        >
                            RTO
                        </Tab>
                        <Tab
                            className={styles.dashboardTab}
                            fontSize="sm"
                            _selected={{ color: 'blue.400', borderColor: 'blue.400' }}
                            fontWeight="bold"
                        >
                            Courier
                        </Tab>
                        <Tab
                            className={styles.dashboardTab}
                            fontSize="sm"
                            _selected={{ color: 'blue.400', borderColor: 'blue.400' }}
                            fontWeight="bold"
                        >
                            Delays
                        </Tab>
                        <Tab
                            className={styles.dashboardTab}
                            fontSize="sm"
                            _selected={{ color: 'blue.400', borderColor: 'blue.400' }}
                            fontWeight="bold"
                        >
                            Tracking
                        </Tab>
                    </TabList>

                    <TabPanels className={styles.dashboardTabPanel}>
                        <TabPanel>
                            <DashboardOverview />
                        </TabPanel>
                        <TabPanel>
                            <DashboardOrders />
                        </TabPanel>
                        <TabPanel>
                            <DashboardShipments />
                        </TabPanel>
                        <TabPanel>
                            <DashboardNDR />
                        </TabPanel>
                        <TabPanel>
                            <DashboardRTO />
                        </TabPanel>
                        <TabPanel>
                            <DashboardCouriers />
                        </TabPanel>
                        <TabPanel>
                            <DashboardDelays />
                        </TabPanel>
                        <TabPanel>
                            <DashboardTracking />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </CardBody>
        </Card>
    )
}
