export type SortParams =
    | 'order_date'
    | 'dispatch_date'
    | 'delivery_date'
    | 'expected_delivery_date'
    | 'total_delivery_time'

export type FilterParams =
    | 'delivery_today'
    | 'sla_breached'
    | 'in_transit'
    | 'out_for_delivery'
    | 'delivered'
    | 'has_delivery_failed'

export type DefaultFilters = {
    to: string // YYYY-MM--DD
    from: string // YYYY-MM--DD
    sortBy: SortParams | ''
    filterBy: FilterParams[]
    searchText: string
}

export type CustomFilters = {
    [key: string]: string[]
}

export type Filters = DefaultFilters & { customFilters: CustomFilters }
