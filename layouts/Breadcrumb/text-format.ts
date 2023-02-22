export enum CAPITALISE_ALL {
    ndr,
    rto,
}

export enum CAPITALISE_NONE {}

export function formatText(text: string): string {
    if (text in CAPITALISE_ALL) text = text.toUpperCase()
    else if (text in CAPITALISE_NONE) text = text.toLowerCase()
    else text = text.charAt(0).toUpperCase() + text.slice(1)

    return text
}
