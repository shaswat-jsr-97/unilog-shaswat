import { Center, Flex, Spinner, Text } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { Dispatch, SetStateAction, useEffect } from 'react'

import { useExtendedMetadata } from '../hooks/queries'
import { CustomFilters } from '../types/filters'
import FieldWrapper from './FieldWrapper'

type Props = {
    filters: CustomFilters
    setFilters: Dispatch<SetStateAction<CustomFilters>>
}

export default function CustomFiltersComponent({ filters, setFilters }: Props) {
    const { data, isLoading, isError, error } = useExtendedMetadata()

    useEffect(() => {
        if (data?.result?.extended_meta?.group_search_criteria && !Object.keys(filters).length) {
            setFilters(
                Object.keys(data?.result?.extended_meta?.group_search_criteria || {}).reduce((prev, fieldKey) => {
                    return {
                        ...prev,
                        [fieldKey]: data?.result?.extended_meta?.group_search_criteria[fieldKey].init_value,
                    }
                }, {}),
            )
        }
    }, [data])

    if (isLoading) {
        return (
            <Center h={'100%'}>
                <Spinner></Spinner>
            </Center>
        )
    }

    if (isError) return <Center h={'400px'}>{String(error) ?? 'An error occurred, please try again later!'}</Center>

    if (!data?.result?.extended_meta?.group_search_criteria) return <></>

    const fields = data?.result?.extended_meta?.group_search_criteria

    return (
        <>
            <Formik initialValues={filters} onSubmit={(values) => console.log(values)} enableReinitialize={true}>
                <Form>
                    {Object.keys(fields).map((fieldKey) => {
                        if (fields[fieldKey].hidden) return <></>

                        return (
                            <Flex align="center" gap={2} mb={4} key={fieldKey}>
                                <Text as="p" fontSize="sm">
                                    {fields[fieldKey].display}:
                                </Text>
                                <FieldWrapper
                                    fieldKey={fieldKey}
                                    field={fields[fieldKey]}
                                    persistFilters={setFilters}
                                />
                            </Flex>
                        )
                    })}
                </Form>
            </Formik>
        </>
    )
}
