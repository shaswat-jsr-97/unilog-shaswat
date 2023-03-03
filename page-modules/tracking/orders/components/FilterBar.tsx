import { SearchIcon } from '@chakra-ui/icons'
import { Button, Flex, IconButton, Input, InputGroup, InputLeftElement, Tooltip, useDisclosure } from '@chakra-ui/react'
import { useIsFetching } from '@tanstack/react-query'
import { Dispatch, KeyboardEvent, Reducer, SetStateAction, useReducer, useState } from 'react'
import { MdFilterAlt } from 'react-icons/md'

import { ActionType, Actions, CustomFilters, DefaultFilters, Filters } from '../types/filters'
import FilterDrawer from './FilterDrawer'
import MoreOptions from './MoreOptions'

type Props = {
    filters: Filters
    setFilters: Dispatch<SetStateAction<Filters>>
}

function reducer(state: DefaultFilters, { type, payload }: Actions): DefaultFilters {
    switch (type) {
        case ActionType.SET_TO:
            return { ...state, to: payload }
        case ActionType.SET_FROM:
            return { ...state, from: payload }
        case ActionType.SET_SORT:
            return { ...state, sortBy: payload }
        case ActionType.SET_TIMELINE:
            return { ...state, timeline: payload }
        case ActionType.SET_FILTERS:
            return { ...state, filterBy: payload }
        case ActionType.SET_SEARCH_TEXT:
            return { ...state, searchText: payload }
        default:
            return state
    }
}

export default function FilterBar({ setFilters }: Props) {
    const [defaultFilters, dispatchDefaultFilterChange] = useReducer<Reducer<DefaultFilters, Actions>>(reducer, {
        to: '',
        from: '',
        sortBy: '',
        timeline: 'last_7_days',
        filterBy: [],
        searchText: '',
    })

    const [customFilters, setCustomFilters] = useState<CustomFilters>({})

    const filterDrawerControls = useDisclosure()

    const isShipmentsFetching = useIsFetching({ queryKey: ['shipments'] })

    function applyFilters() {
        setFilters({ ...defaultFilters, customFilters: customFilters })
    }

    return (
        <>
            <Flex justifyContent="flex-end" align="center" gap="1rem">
                <InputGroup w={'30%'}>
                    <InputLeftElement pointerEvents="none" top="-0.25rem">
                        <SearchIcon color="gray.300" fontSize="sm" />
                    </InputLeftElement>
                    <Input
                        borderRadius="0.3rem"
                        value={defaultFilters.searchText}
                        placeholder="Search AWB/Order/Phone/Facility/Courier"
                        size="sm"
                        onChange={(e) =>
                            dispatchDefaultFilterChange({
                                type: ActionType.SET_SEARCH_TEXT,
                                payload: e.target.value,
                            })
                        }
                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && applyFilters()}
                    />
                </InputGroup>
                <Flex gap={4}>
                    <Tooltip hasArrow label="Filters">
                        <IconButton
                            aria-label="filters"
                            icon={<MdFilterAlt />}
                            size="sm"
                            onClick={filterDrawerControls.onOpen}
                        ></IconButton>
                    </Tooltip>
                    <Button size="sm" colorScheme="teal" isLoading={!!isShipmentsFetching} onClick={applyFilters}>
                        Search
                    </Button>
                    <MoreOptions />
                </Flex>
            </Flex>
            <FilterDrawer
                controls={filterDrawerControls}
                defaultFilters={defaultFilters}
                dispatchDefaultFilterChange={dispatchDefaultFilterChange}
                customFilters={customFilters}
                setCustomFilters={setCustomFilters}
                applyFilters={applyFilters}
            />
        </>
    )
}
