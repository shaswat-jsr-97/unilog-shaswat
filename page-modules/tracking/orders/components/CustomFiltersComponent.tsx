import { Center, Spinner } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import FormField from 'shared/components/FormField/FormField'

import { useExtendedMetadata } from '../hooks/queries'
import { CustomFilters } from '../types/filters'

type Props = {
    filters: CustomFilters
    setFilters: Dispatch<SetStateAction<CustomFilters>>
}

export default function CustomFiltersComponent({}: Props) {
    const { data, isLoading, isError, error } = useExtendedMetadata()

    if (isLoading) {
        return (
            <Center h={'100%'}>
                <Spinner></Spinner>
            </Center>
        )
    }

    if (isError) return <Center h={'400px'}>{String(error) ?? 'An error occurred, please try again later!'}</Center>

    if (!data?.result?.extended_meta?.group_search_criteria) return <></>

    const fields = data.result.extended_meta.group_search_criteria

    return (
        <>
            {Object.keys(fields).map((fieldKey) => {
                if (fields[fieldKey].hidden) return <></>

                return <FormField key={fieldKey} field={fields[fieldKey]} />
            })}
        </>
    )
}
