import { useQuery } from '@tanstack/react-query'
import { fetchShipments } from 'apis/post'

import { Filters } from '../types/filters'

export function useShipments(filters: Filters) {
    return useQuery({
        queryKey: ['shipments', filters],
        queryFn: () => fetchShipments(filters),
        refetchOnWindowFocus: false,
        refetchInterval: (data, query) =>
            query.state.dataUpdateCount === 1 && data?.result?.refresh_required ? 100 : false,
        // enabled: !!filters.from?.length && !!filters.to?.length,
    })
}
