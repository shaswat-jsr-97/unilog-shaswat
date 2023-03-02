import { Dispatch } from 'react'

import { Actions, DefaultFilters } from '../types/filters'

type Props = {
    filters: DefaultFilters
    dispatch: Dispatch<Actions>
}

export default function DefaultFiltersComponent({}: Props) {
    return <>Default</>
}
