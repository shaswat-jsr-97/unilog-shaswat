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
import { toast } from 'react-hot-toast'

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
    function validateFilters() {
        if (defaultFilters.timeline === 'custom') {
            const days90InMiliSeconds = 90 * 24 * 60 * 60 * 1000

            if (!defaultFilters.from || !defaultFilters.to) throw new Error('Please select custom time range')

            if (new Date(defaultFilters.from).getTime() + days90InMiliSeconds < new Date(defaultFilters.to).getTime())
                throw new Error('Maximum time range is 90 days')

            if (new Date(defaultFilters.from).getTime() > new Date(defaultFilters.to).getTime())
                throw new Error('Invalid date range')
        }
    }

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
                                try {
                                    validateFilters()
                                    applyFilters()
                                    controls.onClose()
                                } catch (err) {
                                    toast.error(String(err ?? 'Invalid Filters'))
                                }
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
