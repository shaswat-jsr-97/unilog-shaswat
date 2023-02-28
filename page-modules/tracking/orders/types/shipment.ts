export interface ShipmentsColumns {
    shippingProvider: { awb: string; courier: string }
    saleOrder: string
    customer: { name: string; phone: string }
    shippingPackage: string
    facility: string
    trackingStatus: string
    orderDate: string
    dispatchDate: string
    expectedDeliveryDate: string
    deliveryDate: string
}
