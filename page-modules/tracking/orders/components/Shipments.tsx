import {
    Box,
    Button,
    Center,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Spinner,
    Text,
    useDisclosure,
} from '@chakra-ui/react'
import { ColumnDef, Row, createColumnHelper } from '@tanstack/react-table'
import TanstackTable from 'lib/TanstackTable/TanstackTable'
import { useMemo, useState } from 'react'

import { useShipments } from '../hooks/queries'
import { Filters } from '../types/filters'
import { ShipmentsColumns } from '../types/shipment'
import { sanitiseData } from '../utils'
import ShipmentDetail from './ShipmentDetail'

interface Props {
    filters: Filters
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createColumns(callback: (row: Row<ShipmentsColumns>) => void): ColumnDef<ShipmentsColumns, any>[] {
    const columnHelper = createColumnHelper<ShipmentsColumns>()

    return [
        columnHelper.accessor<'shippingProvider', { awb: string; courier: string }>('shippingProvider', {
            cell: (info) => {
                return (
                    <>
                        <Text>AWB: {info.getValue().awb}</Text>
                        <Text>Courier: {info.getValue().courier}</Text>
                    </>
                )
            },
            header: 'Shipping Provider',
        }),
        columnHelper.accessor('saleOrder', {
            cell: (info) => info.getValue(),
            header: 'Sale Order',
        }),
        columnHelper.accessor('customer', {
            cell: (info) => {
                return (
                    <>
                        <Text>{info.getValue().name}</Text>
                        <Text>{info.getValue().phone}</Text>
                    </>
                )
            },
            header: 'Customer',
        }),
        columnHelper.accessor('shippingPackage', {
            cell: (info) => info.getValue(),
            header: 'Shipping Package',
        }),
        columnHelper.accessor('facility', {
            cell: (info) => info.getValue(),
            header: 'Facility',
        }),
        columnHelper.accessor('trackingStatus', {
            cell: (info) => info.getValue(),
            header: 'Tracking Status',
        }),
        columnHelper.accessor('orderDate', {
            cell: (info) => info.getValue(),
            header: 'Order Date',
        }),
        columnHelper.accessor('dispatchDate', {
            cell: (info) => info.getValue(),
            header: 'Dispatch Date',
        }),
        columnHelper.accessor('expectedDeliveryDate', {
            cell: (info) => info.getValue(),
            header: 'Expected Delivery Date',
            minSize: 200,
        }),
        columnHelper.accessor('deliveryDate', {
            cell: (info) => info.getValue(),
            header: 'Delivery Date',
        }),
        columnHelper.display({
            id: 'actions',
            cell: (info) => (
                <Button size="xs" onClick={() => callback(info.row)}>
                    Show
                </Button>
            ),
            maxSize: 70,
        }),
    ]
}

export default function Shipments({ filters }: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isLoading, isError, data, error } = useShipments(filters)

    const memoizedData = useMemo(() => sanitiseData(data), [data])
    const memoizedColumns = useMemo(() => createColumns(showShipmentDetails), [])

    const [trackingNumber, setTrackingNumber] = useState<string | null>(null)

    function showShipmentDetails(row: Row<ShipmentsColumns>) {
        setTrackingNumber(row.original.shippingProvider.awb)
        onOpen()
    }

    function hideShipmentDetails() {
        setTrackingNumber(null)
        onClose()
    }

    if (isLoading)
        return (
            <Center h="90%">
                <Spinner />
            </Center>
        )
    if (isError) return <Center h="400px">{String(error) ?? 'An error occurred, please try again later!'}</Center>

    return (
        <Box mt={4} maxH={`90%`} overflow="scroll" border="1px solid var(--chakra-colors-gray-100)">
            <TanstackTable<ShipmentsColumns> data={memoizedData} columns={memoizedColumns} />
            <Drawer isOpen={isOpen} placement="right" onClose={hideShipmentDetails} size="xl">
                <DrawerOverlay transform="none !important" />
                <DrawerContent transform="none !important">
                    <DrawerCloseButton />
                    <DrawerHeader py={2} px={4} bg={`gray.100`}>
                        Shipment Details
                    </DrawerHeader>

                    <DrawerBody>
                        {trackingNumber ? (
                            <ShipmentDetail trackingNumber={trackingNumber} />
                        ) : (
                            <Center h="100%">
                                <Spinner />
                            </Center>
                        )}
                    </DrawerBody>

                    <DrawerFooter
                        justifyContent="flex-start"
                        borderTop="1px solid var(--chakra-colors-gray-200)"
                        py={2}
                        px={4}
                        bg={`gray.100`}
                    >
                        <Flex justify="flex-start">
                            <Button bg={`white`} variant="outline" onClick={hideShipmentDetails} size="sm" h={`28px`}>
                                Close
                            </Button>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}
