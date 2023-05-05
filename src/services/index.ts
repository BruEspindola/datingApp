import axios from 'axios';

export interface Character {
  id: number;
  name: string;
  imageUrl: string;
}


export interface Res{
  data: Character[],
  status: number
}

export const getAllCharacter = async () => {
  const response = await axios.get<Res>(`https://api.disneyapi.dev/character?&pageSize=7438`);
  return response.data.data;
};
