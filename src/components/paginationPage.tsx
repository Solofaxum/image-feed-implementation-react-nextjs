import React from 'react'
import { Pagination } from '@mui/material';
import { PaginationProps } from '../../src/app/util/type';

const PaginationPage:React.FC<PaginationProps> = ({ currentPage, totalPage, handlePageChange }) => {
    return (
        <Pagination
            count={totalPage}
            page={currentPage}
            onChange={handlePageChange}
        />
    )
}
export default PaginationPage