import gateway from './gateway'

type TrackingDetails = {
    tracking_number: string
    shipping_source_code: string
    shipping_provider_code: string
    shipping_courier: string
    no_of_items: number
    shipping_type: string
    payment_method: string
    order_number: string
    shipping_package_code: string
    current_location: string
    expected_delivered_datetime: string
    dispatch_datetime: string
    delivered_datetime: string | null
    order_datetime: string
    current_wismo_display_status: string
    last_event_updated: string
    is_dispatched: boolean
    is_shipped: boolean
    is_out_for_delivery: boolean
    is_delivered: boolean
    delivery_city: string
    delivery_state_code: string
    delivery_address: string
    line_items: {
        total_price: string
        seller_sku_code: string
        channel_product_name: string
    }[]
    total_price: number
    customer_name: string
    customer_phone: string
    customer_email: string | null
    customer_feedback: string
    tenant_code: string
    facility_code: string
    stop_polling: boolean
    refresh_required: boolean
    brand_logo: string
    marketing: {
        banners: {
            alt: string
            src: string
        }[]
    }
    tracking_events: {
        tracking_status: string
        tracking_status_code: string | null
        tracking_status_remark: string | null
        tracking_location: string
        tracking_datetime: string
    }[]
}

type FetchShipmentDetails = {
    code: number
    description: string
    result: {
        tracking_details: TrackingDetails
    }
}

export async function fetchShipmentDetails(trackingNumber: string): Promise<FetchShipmentDetails> {
    return await gateway(`shipper/api/tracking-details?tr_number=${trackingNumber}`, {
        headers: {
            'APP-KEY': '#$%^SK&SNLSH*^%SF',
        },
    })
}
