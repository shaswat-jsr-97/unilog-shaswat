import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function BreadcrumbComp() {
    const router = useRouter()

    const generateBreadcrumbs = () => {
        const asPathWithoutQuery = router.asPath.split('?')[0]
        const asPathNestedRoutes = asPathWithoutQuery.split('/').filter((v) => v.length > 0)
        const crumblist = asPathNestedRoutes.map((subpath, idx) => {
            const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/')
            const title = subpath.charAt(0).toUpperCase() + subpath.slice(1).replace(/([A-Z])/g, ' $1')
            return { href, title }
        })

        return [...crumblist]
    }

    const breadcrumbs = generateBreadcrumbs()

    return (
        <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
            {breadcrumbs.map((el, i) => {
                return (
                    <BreadcrumbItem key={i}>
                        <Link href={el.href}>
                            <Text as="span" color={i == breadcrumbs.length - 1 ? '' : 'blue.600'} fontSize="sm">
                                {el.title}
                            </Text>
                        </Link>
                    </BreadcrumbItem>
                )
            })}
        </Breadcrumb>
    )
}
