import { CharacterApi } from "../util/type";
import { ApiResponse, EpisodeData } from "../util/type";

const BASE_URL: string = "https://rickandmortyapi.com/api/";

export async function fetchCharacters(): Promise<CharacterApi> {
  try {
    const response = await fetch(`${BASE_URL}/character`);
    if (!response.ok) {
      throw new Error("failed to fetch data");
    }
    return response.json();
  } catch (error) {
    console.error(`Error Message : ${error} `);
  }
}

export async function getEpisodes(): Promise<ApiResponse> {
  try {
    const response = await fetch(`${BASE_URL}/episode`);
    if (!response.ok) {
      throw new Error("failed to fetch data");
    }
    return response.json();
  } catch (error) {
    console.error(`Error Message : ${error} `);
  }
}

export async function fetchEpisodeCharacters(id: string): Promise<EpisodeData> {
  const response = await fetch(`${BASE_URL}/episode/${id}`);
  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  return response.json();
}
