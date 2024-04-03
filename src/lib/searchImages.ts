const baseUrl = "https://api.qewertyy.dev";

export async function SearchImages(
  query: string,
  searchEngine: string,
  page: number = 0
) {
  const response = await fetch(
    `${baseUrl}/image-search/${searchEngine}/?query=${query}&page=${page}`,
    {
      method: "POST",
    }
  ).catch((err) => err);
  if (response instanceof Error) throw response;
  const data = await response.json();
  return data["content"];
}
