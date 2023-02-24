import { CardBody } from '@chakra-ui/react'
import PageCard from 'shared/components/PageCard/PageCard'

export default function Orders() {
    return (
        <PageCard title="Orders" subtitle="View, filter and sort all orders placed with UniLog.">
            <CardBody overflow={`auto`}>Orders!</CardBody>
        </PageCard>
    )
}
