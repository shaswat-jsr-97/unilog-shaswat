import { Box, Card, CardHeader, Divider, Flex, Heading, IconButton, Text, Tooltip } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FiRefreshCw } from 'react-icons/fi'

type Props = {
    title: string
    subtitle?: string
    handleRefresh?: () => void
    children: ReactNode
}

export default function PageCard({ title, subtitle, handleRefresh, children }: Props) {
    return (
        <Card w={`100%`} variant="outline">
            <CardHeader pb={2}>
                <Flex flexDir="row" align={`center`} justify={`space-between`}>
                    <Box>
                        <Heading size="md" color="gray.900">
                            {title}
                        </Heading>
                        <Text as="p" fontSize="xs" color="gray.500" mt={2}>
                            {subtitle}
                        </Text>
                    </Box>
                    {handleRefresh ? (
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
                    ) : (
                        <></>
                    )}
                </Flex>
            </CardHeader>
            <Divider />
            {children}
        </Card>
    )
}
