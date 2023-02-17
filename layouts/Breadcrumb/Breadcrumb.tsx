import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, Text } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
  
export default function BreadcrumbComp() {
    const router = useRouter();

    const generateBreadcrumbs = () => {
        // Remove any query parameters, as those aren't included in breadcrumbs
        const asPathWithoutQuery = router.asPath.split("?")[0];
    
        // Break down the path between "/"s, removing empty entities
        // Ex:"/my/nested/path" --> ["my", "nested", "path"]
        const asPathNestedRoutes = asPathWithoutQuery.split("/")
                                                     .filter(v => v.length > 0);
    
        // Iterate over the list of nested route parts and build
        // a "crumb" object for each one.
        const crumblist = asPathNestedRoutes.map((subpath, idx) => {
          // We can get the partial nested route for the crumb
          // by joining together the path parts up to this point.
          const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
          // The title will just be the route string for now
          const title = subpath.charAt(0).toUpperCase() + subpath.slice(1).replace(/([A-Z])/g, " $1");
          return { href, title }; 
        })
    
        return [...crumblist];
      }
    
    const breadcrumbs = generateBreadcrumbs();

    return (
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            {
                breadcrumbs.map((el, i) => {
                    return (<BreadcrumbItem>
                    <Link href={el.href}><Text as="span" color={i==breadcrumbs.length-1 ? "":"blue.600"} fontSize="sm">{el.title}</Text></Link>
                </BreadcrumbItem>)
                })
            }
        </Breadcrumb>
    )
}
