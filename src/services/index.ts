import axios from 'axios';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Res{
  results: Character[],
  status: number
}

export const getAllCharacter = async () => {
  const response = await axios.get<Res>(`https://rickandmortyapi.com/api/character/`);
  return response.data.results;
};
