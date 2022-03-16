import React, { useEffect, useState } from 'react';
import newsService from '../../../API/newsService';
import classes from './NewListItem.module.css';
import { useFetch } from '../../../hooks/useFetch';

function NewListItem({id}) {
    const [newItem, setNewItem] = useState([]);

    const [fetchNewItem, isNewItemLoading, newItemError] = useFetch(async (id) => {
        const response = await newsService.getNewItem(id);
        setNewItem(response)
    })
    
    useEffect(() => {
        fetchNewItem(id);
      },[]);

    return (
        <div className={classes.newListItemWrapper}>
            <div className={classes.newListItem}>
                <p>id: {newItem.id}</p>
                <p>by: {newItem.by}</p>
                <p>title: {newItem.title}</p>
                <p>score: {newItem.score}</p>
                <p>time: {newItem.time}</p>
            </div>
        </div>
    );
    }

export default NewListItem