import { FetchShipmentsType } from 'apis/post'

import { ShipmentsColumns } from './types/shipment'

function parseDate(date: string | null | undefined): string {
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
            saleOrder: record.order_number,
            customer: {
                name: record.customer_name,
                phone: record.customer_phone,
            },
            shippingPackage: record.shipping_package_code,
            facility: record.facility_code,
            trackingStatus: record.current_wismo_display_status,
            orderDate: parseDate(record.order_datetime),
            dispatchDate: parseDate(record.dispatch_datetime),
            expectedDeliveryDate: parseDate(record.expected_delivered_datetime),
            deliveryDate: parseDate(record.delivered_datetime),
            attempts: +record.no_of_items,
        }
    })
}
