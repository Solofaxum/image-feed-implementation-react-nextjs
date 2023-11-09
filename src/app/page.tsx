
import { fetchCharacters } from '../app/api/api';
import CharacterList from '../components/characterList';
import { CharacterApi } from '../app/util/type';

const Home: React.FC = async () => {
  const data: Promise<CharacterApi> = fetchCharacters()
  const allCharacters = (await data).results;
  return <CharacterList allCharacters={allCharacters} />
}
export default Home;