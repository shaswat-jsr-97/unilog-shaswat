import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
} from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

import { Actions, CustomFilters, DefaultFilters } from '../types/filters'
import CustomFiltersComponent from './CustomFiltersComponent'
import DefaultFiltersComponent from './DefaultFiltersComponent'

type Props = {
    controls: {
        isOpen: boolean
        onClose: () => void
    }
    defaultFilters: DefaultFilters
    dispatchDefaultFilterChange: Dispatch<Actions>
    customFilters: CustomFilters
    setCustomFilters: Dispatch<SetStateAction<CustomFilters>>
    applyFilters: () => void
}

export default function FilterDrawer({
    controls,
    defaultFilters,
    dispatchDefaultFilterChange,
    customFilters,
    setCustomFilters,
    applyFilters,
}: Props) {
    return (
        <Drawer isOpen={controls.isOpen} onClose={controls.onClose} placement={'right'} size={'sm'}>
            <DrawerOverlay transform={'none !important'} />
            <DrawerContent>
                <DrawerCloseButton size={'sm'} />

                <DrawerHeader py={2} px={4} bg={`gray.100`} fontSize={'sm'}>
                    Filter Records
                </DrawerHeader>

                <DrawerBody>
                    <DefaultFiltersComponent filters={defaultFilters} dispatch={dispatchDefaultFilterChange} />
                    <CustomFiltersComponent filters={customFilters} setFilters={setCustomFilters} />
                </DrawerBody>

                <DrawerFooter
                    py={2}
                    px={4}
                    bg={`gray.100`}
                    justifyContent={'flex-start'}
                    borderTop={'1px solid var(--chakra-colors-gray-200)'}
                >
                    <Flex justify="flex-start">
                        <Button
                            mr={4}
                            colorScheme={'teal'}
                            onClick={() => {
                                applyFilters()
                                controls.onClose()
                            }}
                            size={'xs'}
                            h={`28px`}
                        >
                            Search
                        </Button>
                        <Button bg={`white`} variant={'outline'} onClick={controls.onClose} size={'xs'} h={`28px`}>
                            Close
                        </Button>
                    </Flex>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
