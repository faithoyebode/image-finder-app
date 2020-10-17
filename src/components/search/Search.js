import React from 'react'
import { Input } from "@chakra-ui/core";
import { Select } from "@chakra-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, clearImages } from './searchTextAction';
import { setAmount } from './setAmountAction';
import ImageResult from '../image-results/ImageResult';
import Modal from '../modal/Modal';


const Search = () => {
    const dispatch = useDispatch();
    const textSearch = useSelector(state => state.userSearchText.searchText);
    const amount = useSelector(state => state.userAmount.amount);
    const images = useSelector(state => state.getImages.images);
    const open = useSelector(state => state.chosenImage.dialog);


    const handleTextChange = (e) => {
        e.preventDefault();
        const val = e.target.value;
        if(val === ''){
            return dispatch(clearImages());
        }
        dispatch(setSearchText(val));
    }

    return (
        <div className="search">
            <Input 
                name="searchText"
                defaultValue={textSearch}
                onChange={handleTextChange}
                size="lg"
                placeholder="Search Images"
            />

            <div className="select-container">
                <Select
                    name="amount"
                    value={amount}
                    onChange={(e) => {dispatch(setAmount(e.target.value));}}
                >
                
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={30}>30</option>
                    <option value={50}>50</option>
                </Select>
            </div>
            <br />
            {
                images.length > 0 ? (<ImageResult images={images} />) : null
            }
            { open ? <Modal /> : null }
        </div>
    )
}

export default Search;
