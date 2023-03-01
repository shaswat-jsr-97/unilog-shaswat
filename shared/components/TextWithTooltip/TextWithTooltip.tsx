import { Text, Tooltip } from '@chakra-ui/react'

type Props = {
    text: string
    width?: string
    maxWidth?: string
    noOfLines?: number
    isTruncated?: boolean
}

export default function TextWithTooltip({ text, width, maxWidth, noOfLines, isTruncated = true }: Props) {
    const multiLine = !!noOfLines ? true : false

    return (
        <Tooltip label={text}>
            {multiLine ? (
                <Text noOfLines={noOfLines} width={width}>
                    {text}
                </Text>
            ) : (
                <Text isTruncated={isTruncated} width={width} maxWidth={maxWidth}>
                    {text}
                </Text>
            )}
        </Tooltip>
    )
}
