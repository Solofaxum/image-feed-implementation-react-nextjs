/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from 'react';
import { CharacterListProps } from '@/app/util/type';
import { Box, Typography, ListItemButton } from '@mui/material';
import PaginationPage from '../components/paginationPage';


const CharacterList: React.FC<CharacterListProps> = ({ allCharacters }) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState<number>(1)
    const totalPage: number = Math.ceil(allCharacters.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allCharacters.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Typography variant='h5' sx={{ mt: 5, color: 'Blue', mb: 2 }}> Rick and Morty Characters</Typography>
            <Box sx={{ display: 'flex', margin: 5, flexWrap: 'wrap' }}>
                {currentItems.map(({id, name, image}) => (
                    <Box sx={{ display: 'flex' }} key={id} >
                        <ListItemButton >
                            <img src={image} alt={name} style={{ width: '150px', height: '150px', borderRadius: '20px' }} />
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

export default CharacterList;
