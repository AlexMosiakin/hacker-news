import React, { useEffect, useState } from 'react';
import  { useParams } from 'react-router-dom'
import newsService from '../../API/newsService';
import Loader from '../../components/Loader/Loader';
import NewCommentList from '../../components/NewCommentList/NewCommentList';
import { useFetch } from '../../hooks/useFetch';
import classes from './NewItem.module.css';
import timeService from '../../API/timeService';
import starIcon from '../../img/star.svg';
import timeIcon from '../../img/time.svg';
import linkIcon from '../../img/link.svg';
import commentIcon from '../../img/comment.svg';

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
        <div className={classes.newItemBody}>
                {newIsLoading ? 
                <div className={classes.newItemWrapper}>
                    <div className={classes.newItemContainerLoad}>
                        <Loader/>
                    </div>
                </div>
                :
                <div>
                    <div className={classes.newItemWrapper}>
                        <p className={classes.newItemTitle}>{newItem.title}</p>
                        <p className={classes.newItemRow}><img className={classes.newItemIcon} src={linkIcon} alt={linkIcon} />{newItem.url}</p>
                        <p className={classes.newItemRow}><img className={classes.newItemIcon} src={timeIcon} alt={timeIcon} />{timeService.getTime(newItem.time)}</p>
                        <p className={classes.newItemRow}><img className={classes.newItemIcon} src={starIcon} alt={starIcon} />{newItem.score}</p>
                        <p className={classes.newItemRow}><img className={classes.newItemIcon} src={commentIcon} alt={commentIcon} />{comments ? comments.length : 0}</p>
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