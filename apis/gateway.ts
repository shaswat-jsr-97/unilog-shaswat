const baseURL = 'https://unilog.unicommerce.com'

export default async function gateway(URL: string, options: RequestInit) {
    const res = await fetch(`${baseURL}/${URL}`, { ...options })

    if (!res.ok) throw new Error(res.statusText)
    const text = await res.text()
    return text ? JSON.parse(text) : {}
}
