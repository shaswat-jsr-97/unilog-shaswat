import { Box, Button, Center, Spinner, Text } from '@chakra-ui/react'
import { ColumnDef, Row, createColumnHelper } from '@tanstack/react-table'
import TanstackTable from 'lib/TanstackTable/TanstackTable'
import { useMemo } from 'react'

import { useShipments } from '../hooks/queries'
import { Filters } from '../types/filters'
import { ShipmentsColumns } from '../types/shipment'
import { sanitiseData } from '../utils'

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
        }),
        columnHelper.accessor('deliveryDate', {
            cell: (info) => info.getValue(),
            header: 'Delivery Date',
        }),
        columnHelper.accessor('attempts', {
            cell: (info) => (
                <Text as="p" textAlign="right">
                    {info.getValue()}
                </Text>
            ),
            header: 'No. of Attempts',
        }),
        columnHelper.display({
            id: 'actions',
            cell: (info) => (
                <Button size="xs" onClick={() => callback(info.row)}>
                    Show
                </Button>
            ),
        }),
    ]
}

export default function Shipments({ filters }: Props) {
    const { isLoading, isError, data, error } = useShipments(filters)
    const memoizedData = useMemo(() => sanitiseData(data), [data])
    const memoizedColumns = useMemo(() => createColumns(showShipmentDetails), [])

    function showShipmentDetails(row: Row<ShipmentsColumns>) {
        console.log(row)
    }

    if (isLoading)
        return (
            <Center h="400px">
                <Spinner />
            </Center>
        )
    if (isError) return <Center h="400px">{String(error) ?? 'An error occurred, please try again later!'}</Center>

    return (
        <Box mt={4} maxH={`90%`} overflow="scroll" border="1px solid var(--chakra-colors-gray-100)">
            <TanstackTable<ShipmentsColumns> data={memoizedData} columns={memoizedColumns} />
        </Box>
    )
}
