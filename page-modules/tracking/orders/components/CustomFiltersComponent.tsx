import { Dispatch, SetStateAction } from 'react'

import { CustomFilters } from '../types/filters'

type Props = {
    filters: CustomFilters
    setFilters: Dispatch<SetStateAction<CustomFilters>>
}

export default function CustomFiltersComponent({}: Props) {
    return <>Custom</>
}
