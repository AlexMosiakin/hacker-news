import React, { useEffect, useState } from 'react';
import newsService from '../../../API/newsService';
import classes from './NewListItem.module.css';
import { useFetch } from '../../../hooks/useFetch';
import { useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import Loader from '../../Loader/Loader';

function NewListItem({id}) {
    const [newItem, setNewItem] = useState([]);
    const router = useNavigate();
    const [fetchNewItem, isNewItemLoading, newItemError] = useFetch(async (id) => {
        const response = await newsService.getNewItem(id);
        setNewItem(response)
    })
    
    useEffect(() => {
        fetchNewItem(id);
    },[]);

    const dispatch = useDispatch();
  
    const getId = (ClickedId) => {
        dispatch({type:"GET_ID", payload: ClickedId});
        router(`/news/${ClickedId}`)
    }

    return (
        <div onClick={() => getId(newItem.id)} className={classes.newListItemWrapper}>
            {isNewItemLoading ? 
            <div className={classes.newListItem + " " + classes.newListItemLoad}>
                <Loader/>
            </div>
            :
            <div className={classes.newListItem}>
                <p className={classes.newRow + " " + classes.newTitle}>{newItem.title}</p>
                <p className={classes.newRow}>by: {newItem.by}</p>
                <p className={classes.newRow}>score: {newItem.score}</p>
                <p className={classes.newRow}>time: {newItem.time}</p>
            </div>
            }
        </div>
    );
    }

export default NewListItem