import { Pagination } from '@mui/material';
import { useContext} from 'react';
import { ProductDataContext } from "../context/Context";
const MUIPagination = () => {
    const { pageNumber, setPageNumber } = useContext(ProductDataContext);
    const handlePageChange = (event, page) => {
        setPageNumber(page);
    };
    return (
        <Pagination variant='outlined' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} count={2}
            page={pageNumber} onChange={handlePageChange} />
    )
}
export default MUIPagination;

