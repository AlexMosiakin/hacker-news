import React, { useEffect, useState } from 'react';
import  { useParams } from 'react-router-dom'
import newsService from '../../API/newsService';
import Loader from '../../components/Loader/Loader';
import NewCommentList from '../../components/NewCommentList/NewCommentList';
import { useFetch } from '../../hooks/useFetch';
import classes from './NewItem.module.css';

function NewItem() {
    const params = useParams()
    const currentId = params.id;
    const [newItem, setNewItem] = useState([]);
    const [comments, setComments] = useState([]);
    const [newFetch, newIsLoading, newError] = useFetch( async (currentId) => {
        const response = await newsService.getNewItem(currentId);
        setNewItem(response);
        setComments(response.kids);
    })

    useEffect(() => {
        newFetch(currentId);
    },[])
    
    return (
        <div className={classes.newItemWrapper}>
            {newIsLoading ? 
            <div className={classes.newItemContainerLoad}>
            <Loader/>
            </div>
            :
            <div>
                <div className={classes.newItemContainer}>
                    <p className={classes.newItemTitle}>{newItem.title}</p>
                    <p className={classes.newItemRow}>link: {newItem.url}</p>
                    <p className={classes.newItemRow}>time: {newItem.time}</p>
                    <p className={classes.newItemRow}>score: {newItem.score}</p>
                    <p className={classes.newItemRow}>comments: {comments ? comments.length : 0}</p>
                </div>
                <div className={classes.newItemComments}>
                    {comments ? <NewCommentList newIsLoading={newIsLoading} comments={comments}/> : ""}
                </div>
                
            </div>
            }
        </div>
    );
    }

export default NewItem