import { Filters } from 'page-modules/tracking/orders/types/filters'

import gateway from './gateway'

export type FetchShipmentsType = {
    code: number
    description: string
    result: {
        username: string
        tracking_records: {
            tracking_number: string
            shipping_source_code: string
            order_number: string
            shipping_package_code: string
            facility_code: string
            current_wismo_display_status: string
            order_datetime: string
            dispatch_datetime: string
            expected_delivered_datetime: string
            delivered_datetime: string | null
            no_of_items: number
            payment_method: string
            shipping_type: string
            customer_name: string
            customer_phone: string
            tenant_code: string
        }[]
        refresh_required?: boolean
    }
}
export async function fetchShipments(filters: Filters): Promise<FetchShipmentsType> {
    const { from, to, sortBy, filterBy, searchText, customFilters } = filters
    const days90InMiliSeconds = 90 * 24 * 60 * 60 * 1000

    if (new Date(from).getTime() + days90InMiliSeconds < new Date(to).getTime())
        throw new Error('Maximum time range is 90 days')

    if (new Date(from).getTime() > new Date(to).getTime()) throw new Error('Invalid date range')

    const group_search_criteria: Record<string, string[]> = {}
    Object.keys(customFilters).forEach((key) => {
        group_search_criteria[key] = customFilters[key]
    })

    return gateway(`shipper/api/tracking-list`, {
        method: 'POST',
        headers: {
            'APP-KEY': '#$%^SK&SNLSH*^%SF',
        },
        body: JSON.stringify({
            search_text: searchText,
            from,
            to,
            sort_by: sortBy,
            filters: filterBy,
            group_search_criteria,
        }),
    })
}
