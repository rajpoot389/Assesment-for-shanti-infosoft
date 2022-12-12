import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { useGlobalContext } from '../Warehouse/context';

const Header = () => {
    const opacity = useGlobalContext().showPopUp;
    const dispatch=useGlobalContext().dispatch;
    const searchText=useGlobalContext().searchText;
    function handleChange(e){
        dispatch({type:'SEARCH_INPUT',payload:(e.target.value)})
    }
    return (
        <div className={opacity?'header-container opacity-down':'header-container'}>
            <div className="input-container">
                <input type="text" placeholder='Search' className='search-box' onChange={handleChange} />
                <SearchIcon sx={{ fontSize: 30, position: 'relative', right: '3.5rem', top: '1rem' }} />
            </div>
            <Button variant="outlined" startIcon={<AddIcon />}  onClick={() => {dispatch({type:'SHOWPOPUPBAR'})}} sx={{ backgroundColor: '#e4e4ee', color: 'black', fontSize: '1.3rem', width: '14rem', height: '4rem', border: '1px solid #e4e4ee', textTransform: 'capitalize',fontWeight:500 }}>
                Add Task
            </Button>
        </div>
    )
}

export default Header
{/* <div className={opacity ? 'steps-container opacity-down' : 'steps-container'}> */}