export const DASHBOARD_ROUTE_MAP = {
    overview: {
        index: 0,
        breadcrumb: 'Overview',
    },
    orders: {
        index: 1,
        breadcrumb: 'Orders',
    },
    shipments: {
        index: 2,
        breadcrumb: 'Shipments',
    },
    ndr: {
        index: 3,
        breadcrumb: 'NDR',
    },
    rto: {
        index: 4,
        breadcrumb: 'RTO',
    },
    courier: {
        index: 5,
        breadcrumb: 'Courier',
    },
    delays: {
        index: 6,
        breadcrumb: 'Delays',
    },
    tracking: {
        index: 7,
        breadcrumb: 'Tracking',
    },
}

export type DASHBOARD_ROUTE_PATH =
    | 'overview'
    | 'orders'
    | 'shipments'
    | 'ndr'
    | 'rto'
    | 'courier'
    | 'delays'
    | 'tracking'
