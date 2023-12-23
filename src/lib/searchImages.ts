export async function SearchImages(query:string,page :number = 0) {
    const response = await fetch(
        `https://api.qewertyy.me/image-search/google/?query=${query}&page=${page}`,
        {
            method:'POST'
        }
        ).catch((err) => err);
    if (response instanceof Error) throw response;
    const data = await response.json();
    return data['content'];
}