/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from 'react'
import { Box, Typography, ListItemButton } from '@mui/material';
import { CharacterList, CharctersProps } from '@/app/util/type';
import PaginationPage from '../components/paginationPage';


const Characters: React.FC<CharctersProps> = ({ characters }) => {
    const [characterList, setCharacterList] = useState<CharacterList[]>([])
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState<number>(1)
    const totalPage: number = Math.ceil(characterList.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = characterList.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
    }
    useEffect(() => {
        const fetchCharacters = async () => {
            const characterPromises = characters.map(async (url: string) => {
                const res = await fetch(url);
                const data = await res.json();
                return {
                    id: data.id,
                    name: data.name,
                    image: data.image
                }
            })
            const characterData = await Promise.all(characterPromises);
            setCharacterList(characterData)
        }
        fetchCharacters();
    }, [characters])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Typography variant='h5' sx={{ mt: 5, color: 'blue', mb: 2 }}> {`${characterList.length} Characters in this episode`}</Typography>
            <Box>
            </Box>
            <Box sx={{ display: 'flex', margin: 5, flexWrap: 'wrap' }}>
                {currentItems.map(({id, name, image}) => (
                    <Box key={id} sx={{ display: 'flex' }} >
                        <ListItemButton  sx={{ display: 'flex', flexDirection: 'column' }}>
                            <img src={image} alt={name} style={{ width: '150px', height: '150px', borderRadius: '5px' }} />
                            <Typography sx={{ color: 'black', fontSize: '12px' }}>{name}</Typography>
                        </ListItemButton>
                    </Box>
                ))}
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <PaginationPage currentPage={currentPage} totalPage={totalPage} handlePageChange={handlePageChange} />
            </Box>
        </Box>
    )
}

export default Characters;