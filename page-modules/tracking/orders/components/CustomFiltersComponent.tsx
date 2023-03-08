import { Center, Spinner } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

import { useExtendedMetadata } from '../hooks/queries'
import { CustomFilters } from '../types/filters'

type Props = {
    filters: CustomFilters
    setFilters: Dispatch<SetStateAction<CustomFilters>>
}

export default function CustomFiltersComponent({}: Props) {
    const { isLoading, isError, data, error } = useExtendedMetadata()

    if (isLoading) {
        return (
            <Center h={'100%'}>
                <Spinner></Spinner>
            </Center>
        )
    }

    if (isError) return <Center h={'400px'}>{String(error) ?? 'An error occurred, please try again later!'}</Center>

    console.log(data)
    return <></>
}
