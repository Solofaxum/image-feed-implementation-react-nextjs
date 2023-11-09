

import { fetchEpisodeCharacters } from '../../api/api';
import Character from '../../../components/character';
import { Box } from "@mui/material";
import { EpisodeData } from '@/app/util/type';

type Params = {
    params: {
        id: string
    }
}
async function page({ params: { id } }: Params) {
    const data: Promise<EpisodeData> = fetchEpisodeCharacters(id)
    const characters = (await data).characters;
    // console.log('my characters .......', characters)
    return (
        <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center',}}>
            <Box >
                <Character characters={characters} />
            </Box>
        </Box>
    )
}

export default page;