import { IconButton, Tooltip } from '@chakra-ui/react'
import { TbDownload } from 'react-icons/tb'

export default function DownloadCSV() {
    function handleDownload() {
        // TODO: Handle Download CSV & toast display
    }

    return (
        <>
            <Tooltip hasArrow label="Download as CSV">
                <IconButton
                    size="sm"
                    colorScheme="gray"
                    icon={<TbDownload />}
                    aria-label={'download'}
                    onClick={handleDownload}
                ></IconButton>
            </Tooltip>
        </>
    )
}
