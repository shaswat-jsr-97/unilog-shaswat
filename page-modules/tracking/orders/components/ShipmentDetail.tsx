import {
    Box,
    Center,
    Divider,
    Flex,
    Spinner,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'

import { useShipmentDetails } from '../hooks/queries'
import { parseDate } from '../utils'

type Props = {
    trackingNumber: string
}

export default function ShipmentDetail({ trackingNumber }: Props) {
    const { isLoading, isError, data, error } = useShipmentDetails(trackingNumber)

    if (isLoading)
        return (
            <Center h="100%">
                <Spinner />
            </Center>
        )
    if (isError) return <Center h="100%">{String(error) ?? 'An error occurred, please try again later!'}</Center>

    return (
        <>
            <Text fontSize="md" mb={4}>
                Basic Information
            </Text>
            <Flex justifyContent="space-between" mb={3}>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Tracking Number
                    </Text>
                    <Text className="value" fontSize="sm">
                        {data.result.tracking_details.tracking_number || '-'}
                    </Text>
                </Box>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Sale Order
                    </Text>
                    <Text className="value" fontSize="sm">
                        {data.result.tracking_details.order_number || '-'}
                    </Text>
                </Box>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Shipping Package
                    </Text>
                    <Text className="value" fontSize="sm">
                        {data.result.tracking_details.shipping_package_code || '-'}
                    </Text>
                </Box>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Tracking Status
                    </Text>
                    <Text className="value" fontSize="sm">
                        {data.result.tracking_details.current_wismo_display_status || '-'}
                    </Text>
                </Box>
            </Flex>

            <Flex justifyContent="space-between" mb={3}>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Courier
                    </Text>
                    <Text className="value" fontSize="sm">
                        {data.result.tracking_details.shipping_source_code || '-'}
                    </Text>
                </Box>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Shipping Method Type
                    </Text>
                    <Text className="value" fontSize="sm">
                        {data.result.tracking_details.shipping_type || '-'}
                    </Text>
                </Box>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Payment Method
                    </Text>
                    <Text className="value" fontSize="sm">
                        {data.result.tracking_details.payment_method || '-'}
                    </Text>
                </Box>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Number of Items
                    </Text>
                    <Text className="value" fontSize="sm">
                        {data.result.tracking_details.no_of_items || '-'}
                    </Text>
                </Box>
            </Flex>

            <Flex justifyContent="space-between" mb={3}>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Date of Order
                    </Text>
                    <Text className="value" fontSize="sm">
                        {parseDate(data.result.tracking_details.order_datetime) || '-'}
                    </Text>
                </Box>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Date of Dispatch
                    </Text>
                    <Text className="value" fontSize="sm">
                        {parseDate(data.result.tracking_details.dispatch_datetime) || '-'}
                    </Text>
                </Box>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Date of Expected Delivery
                    </Text>
                    <Text className="value" fontSize="sm">
                        {parseDate(data.result.tracking_details.expected_delivered_datetime) || '-'}
                    </Text>
                </Box>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Date of Delivery
                    </Text>
                    <Text className="value" fontSize="sm">
                        {parseDate(data.result.tracking_details.delivered_datetime) || '-'}
                    </Text>
                </Box>
            </Flex>

            <Flex justifyContent="space-between" mb={3}>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Shipment Total Cost
                    </Text>
                    <Text className="value" fontSize="sm">
                        {data.result.tracking_details.total_price || '-'}
                    </Text>
                </Box>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Customer Name
                    </Text>
                    <Text className="value" fontSize="sm">
                        {data.result.tracking_details.customer_name || '-'}
                    </Text>
                </Box>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Customer Phone
                    </Text>
                    <Text className="value" fontSize="sm">
                        {data.result.tracking_details.customer_phone || '-'}
                    </Text>
                </Box>
                <Box className="container" w={`25%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Customer Email
                    </Text>
                    <Text className="value" fontSize="sm">
                        {data.result.tracking_details.customer_email || '-'}
                    </Text>
                </Box>
            </Flex>
            <Flex justifyContent={`flex-start`} mb={4}>
                <Box className="container" w={`100%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Customer Address
                    </Text>
                    <Text className="value" fontSize="sm">
                        {data.result.tracking_details.delivery_address || '-'}
                    </Text>
                </Box>
            </Flex>
            <Flex justifyContent={`flex-start`} mb={4}>
                <Box className="container" w={`100%`} p={0}>
                    <Text className="key" fontSize="xs" color="gray.600">
                        Customer Latest Feedback
                    </Text>
                    <Text className="value" fontSize="sm">
                        {data.result.tracking_details.customer_feedback || '-'}
                    </Text>
                </Box>
            </Flex>
            <Divider mb={4} />
            <Text fontSize="md" mb={4}>
                Order Items{' '}
            </Text>
            <TableContainer>
                <Table variant="simple" border={`1px solid var(--chakra-colors-gray-200)`}>
                    <Thead>
                        <Tr>
                            <Th textTransform={`initial`} fontSize="xs" fontWeight="normal" px={2} py={2}>
                                SKU
                            </Th>
                            <Th
                                textTransform={`initial`}
                                fontSize="xs"
                                fontWeight="normal"
                                px={2}
                                py={2}
                                borderLeft="1px solid var(--chakra-colors-gray-200)"
                            >
                                Channel Product
                            </Th>
                            <Th
                                textTransform={`initial`}
                                fontSize="xs"
                                fontWeight="normal"
                                px={2}
                                py={2}
                                borderLeft="1px solid var(--chakra-colors-gray-200)"
                            >
                                Total Cost
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.result.tracking_details &&
                            data.result.tracking_details.line_items &&
                            data.result.tracking_details.line_items.map((item, idx: number) => {
                                return (
                                    <Tr key={idx}>
                                        <Td px={2} py={2} fontSize="sm">
                                            {item.seller_sku_code}
                                        </Td>
                                        <Td
                                            px={2}
                                            py={2}
                                            fontSize="sm"
                                            borderLeft="1px solid var(--chakra-colors-gray-200)"
                                        >
                                            {item.seller_sku_code}
                                        </Td>
                                        <Td
                                            px={2}
                                            py={2}
                                            fontSize="sm"
                                            borderLeft="1px solid var(--chakra-colors-gray-200)"
                                        >
                                            {item.total_price}
                                        </Td>
                                    </Tr>
                                )
                            })}
                    </Tbody>
                </Table>
            </TableContainer>

            <Divider my={4} />

            <Text fontSize="md" mb={4}>
                Tracking Events
            </Text>
            <TableContainer>
                <Table variant="simple" border={`1px solid var(--chakra-colors-gray-200)`} mb={2}>
                    <Thead>
                        <Tr>
                            <Th textTransform={`initial`} fontSize="xs" fontWeight="normal" px={2} py={2}>
                                Date
                            </Th>
                            <Th
                                textTransform={`initial`}
                                fontSize="xs"
                                fontWeight="normal"
                                px={2}
                                py={2}
                                borderLeft="1px solid var(--chakra-colors-gray-200)"
                            >
                                Status
                            </Th>
                            <Th
                                textTransform={`initial`}
                                fontSize="xs"
                                fontWeight="normal"
                                px={2}
                                py={2}
                                borderLeft="1px solid var(--chakra-colors-gray-200)"
                            >
                                Location
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.result.tracking_details &&
                            data.result.tracking_details.tracking_events &&
                            data.result.tracking_details.tracking_events.map((item, idx: number) => {
                                return (
                                    <Tr key={idx}>
                                        <Td px={2} py={2} fontSize="sm">
                                            {item.tracking_datetime || '-'}
                                        </Td>
                                        <Td
                                            px={2}
                                            py={2}
                                            fontSize="sm"
                                            borderLeft="1px solid var(--chakra-colors-gray-200)"
                                        >
                                            {item.tracking_status || '-'}
                                        </Td>
                                        <Td
                                            px={2}
                                            py={2}
                                            fontSize="sm"
                                            borderLeft="1px solid var(--chakra-colors-gray-200)"
                                        >
                                            {item.tracking_location || '-'}
                                        </Td>
                                    </Tr>
                                )
                            })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}
