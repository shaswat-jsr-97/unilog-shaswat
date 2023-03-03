import { CardBody } from '@chakra-ui/react'
import FilterBar from 'page-modules/tracking/orders/components/FilterBar'
import Shipments from 'page-modules/tracking/orders/components/Shipments'
import { Filters } from 'page-modules/tracking/orders/types/filters'
import { useState } from 'react'
import PageCard from 'shared/components/PageCard/PageCard'

export default function Orders() {
    const [filters, setFilters] = useState<Filters>({
        to: '',
        from: '',
        sortBy: '',
        timeline: 'last_7_days',
        filterBy: [],
        searchText: '',
        customFilters: {},
    })

    return (
        <PageCard title="Orders" subtitle="View, filter and sort all orders placed with UniLog.">
            <CardBody overflow={`auto`}>
                <FilterBar filters={filters} setFilters={setFilters} />
                <Shipments filters={filters} />
            </CardBody>
        </PageCard>
    )
}
