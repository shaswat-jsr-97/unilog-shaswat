import { DownloadIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuItem, MenuList, Text, Tooltip } from '@chakra-ui/react'
import { HiEllipsisVertical } from 'react-icons/hi2'

export default function MenuOptions() {
    function handleCSVDownload() {
        console.log('triggered')
    }
    return (
        <Menu autoSelect={false}>
            <Tooltip hasArrow label="Menu Options" defaultIsOpen={false} closeOnClick={true}>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HiEllipsisVertical />}
                    size="sm"
                    fontSize="lg"
                />
            </Tooltip>
            <MenuList zIndex={3}>
                <MenuItem icon={<DownloadIcon />} onClick={handleCSVDownload}>
                    <Text>Download as CSV</Text>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
