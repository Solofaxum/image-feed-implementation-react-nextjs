export type Info = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export type EpisodeData = {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string
}

export type ApiResponse = {
    info: Info;
    results: EpisodeData[];
}


export type Origin = {
    name: string;
    url: string;
}
export type Location = {
    name: string;
    url: string;
}
export type Episode = {
    id: string,
    name: string,
    characters: string[]
  }
export type Character = {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: string;
    location: string;
    image: string;
    episode: string[];
    url: string;
    created: string;
}
export type CharacterApi= {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}

export type CharacterList = {
    id: string,
    name: string,
    image: string
}

export type CharacterListProps = {
    allCharacters: CharacterList[];
}

export type CharctersProps = {
    characters: string[];
}
export type PaginationProps = {
    currentPage:number;
    totalPage:number;
    handlePageChange:(event:React.ChangeEvent<unknown>, page:number)=>void;
}






