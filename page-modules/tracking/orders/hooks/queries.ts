import { useQuery } from '@tanstack/react-query'
import { fetchExtendedMetadata, fetchMetadata, fetchShipmentDetails } from 'apis/get'
import { fetchShipments } from 'apis/post'

import { Filters } from '../types/filters'

export function useShipments(filters: Filters) {
    return useQuery({
        queryKey: ['shipments', filters],
        queryFn: () => fetchShipments(filters),
        refetchOnWindowFocus: false,
        refetchInterval: (data, query) =>
            query.state.dataUpdateCount === 1 && data?.result?.refresh_required ? 100 : false,
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

export function useMetadata() {
    return useQuery({
        queryKey: ['metadata'],
        queryFn: fetchMetadata,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })
}

export function useExtendedMetadata() {
    return useQuery({
        queryKey: ['extendedMetadata'],
        queryFn: fetchExtendedMetadata,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })
}
