import { FetchShipmentsType } from 'apis/post'

import { CustomFilters, DefaultFilters, Filters } from './types/filters'
import { ShipmentsColumns } from './types/shipment'

export const INIT_DEFAULT_FILTER_VALUES: DefaultFilters = {
    to: '',
    from: '',
    sortBy: '',
    timeline: 'last_7_days',
    filterBy: [],
    searchText: '',
}

// TODO: To be changed when receiving custom filters depending upon their type
export const INIT_CUSTOM_FILTER_VALUES: CustomFilters = {}

export const INIT_FILTER_VALUES: Filters = {
    to: '',
    from: '',
    sortBy: '',
    timeline: 'last_7_days',
    filterBy: [],
    searchText: '',
    customFilters: {},
}

export function parseDate(date: string | null | undefined): string {
    if (!date) return '-'

    return new Date(date).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export function sanitiseData(data: FetchShipmentsType | null | undefined): ShipmentsColumns[] {
    if (!data || !data.result || !data.result.tracking_records) return []

    return data.result.tracking_records.map((record) => {
        return {
            shippingProvider: {
                awb: record.tracking_number,
                courier: record.shipping_source_code,
            },
            orderDetails: {
                saleOrder: record.order_number,
                shippingPackage: record.shipping_package_code,
            },
            customer: {
                name: record.customer_name,
                phone: record.customer_phone,
            },
            facility: record.facility_code,
            courierStatus: record.courier_status,
            trackingStatus: record.current_wismo_display_status,
            orderDate: parseDate(record.order_datetime),
            dispatchDate: parseDate(record.dispatch_datetime),
            expectedDeliveryDate: parseDate(record.expected_delivered_datetime),
            deliveryDate: parseDate(record.delivered_datetime),
            attempts: +record.no_of_items,
        }
    })
}
