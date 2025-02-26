import { Center, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'

type Columns = {
    [key: string]: string
}

type Data<T extends Columns> = { [key in keyof T]: string }[]

type Props<T extends Columns> = {
    columns: Columns
    data: Data<T>
}

export default function ChakraTable<T extends Columns>({ columns, data }: Props<T>) {
    return (
        <TableContainer>
            <Table variant="simple" border={`1px solid var(--chakra-colors-gray-200)`}>
                <Thead>
                    <Tr>
                        {Object.keys(columns).map((columnKey) => {
                            return (
                                <Th
                                    key={columnKey}
                                    textTransform={`initial`}
                                    fontSize="xs"
                                    fontWeight="normal"
                                    px={2}
                                    py={2}
                                    borderLeft="1px solid var(--chakra-colors-gray-200)"
                                >
                                    {columns[columnKey]}
                                </Th>
                            )
                        })}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((rowData, idx) => {
                        return (
                            <Tr key={idx}>
                                {Object.keys(columns).map((columnKey) => {
                                    return (
                                        <Td
                                            key={columnKey}
                                            px={2}
                                            py={2}
                                            fontSize="sm"
                                            borderLeft="1px solid var(--chakra-colors-gray-200)"
                                        >
                                            {rowData[columnKey]}
                                        </Td>
                                    )
                                })}
                            </Tr>
                        )
                    })}

                    {Object.keys(columns)?.length && !data?.length ? (
                        <Tr>
                            <Td colSpan={Object.keys(columns).length || 1}>
                                <Center>
                                    <Text textAlign={`center`} fontSize="xs" color="gray.500">
                                        No records found.
                                    </Text>
                                </Center>
                            </Td>
                        </Tr>
                    ) : (
                        <></>
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
