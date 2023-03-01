import { useQuery } from '@tanstack/react-query'
import { fetchShipmentDetails } from 'apis/get'
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

export function useShipmentDetails(trackingNumber: string) {
    return useQuery({
        queryKey: ['shipmentDetails', trackingNumber],
        queryFn: () => fetchShipmentDetails(trackingNumber),
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })
}
