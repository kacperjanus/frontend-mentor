const tinyurl = 'https://api.tinyurl.com/create';
const tinyUrlToken = "NnNY5KssXsap4lfGxJ2mznemoatnHvEYWlB15xvvnhGrJvbPv4BQwqtKBIAe"

interface TinyUrlResponse {
    "domain": string,
    "alias": string,
    "deleted": boolean,
    "archived": boolean,
    "tags": string[],
    analytics: { "enabled": boolean, "public": boolean }[],
    "tiny_url": string,
    "created_at": string,
    "expires_at": string | null,
    "url": string
}

export async function ShortenUrl(url: string) {
    const urlToShorten = {
        "url": url,
        "domain": "tinyurl.com",
    }
    return await fetch(tinyurl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tinyUrlToken}`
            },
            body: JSON.stringify(urlToShorten)
        }).then(response => response.json()).then(data => {
            return data.data as TinyUrlResponse;
        }).catch(error => {
            throw new Error(error.message)
        })

}