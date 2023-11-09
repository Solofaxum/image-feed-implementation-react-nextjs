
import { getEpisodes } from '../api/api';
import { ApiResponse } from '../util/type';
import EpisodeList from '../../components/episodeList';
import { Box, Typography } from "@mui/material";

const Sidebar: React.FC = async () => {
    const data: Promise<ApiResponse> = getEpisodes()
    const episodes = (await data).results;
    // console.log("my episodes ........", episodes[0].name)
    return (
        <Box sx={{ ml: 2 , }}>
            <Box>
                <Box>
                    <Typography variant='h5' sx={{ fontSize: "50px",mt: 8, color: 'blue', mb: 2 }}>Episodes</Typography>
                </Box>
                <EpisodeList episodes={episodes} />
            </Box>
        </Box>
    )
}

export default Sidebar;