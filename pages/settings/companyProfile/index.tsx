import { Card, CardHeader, Divider, Heading, Text } from '@chakra-ui/react'
import FormSetting from '../components/Form'

export default function CompanyProfile() {
    return (
        <>
        <Card w={`100%`} variant="outline">
            <CardHeader>
                <Heading size="md" color="gray.900">
                    Fill In The Form
                </Heading>
                <Text as="p" fontSize="xs" color="gray.500" mt={2}>
                    Please Enter The Form Details
                </Text>
            </CardHeader>
            <FormSetting />
            <Divider />
        </Card>
        </>
    )
}
