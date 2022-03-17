import React, { useEffect, useState } from "react";
import newsService from "../../../API/newsService";
import { useFetch } from "../../../hooks/useFetch";
import classes from './NewCommentItem.module.css';


function NewCommentItem(props){
    const currentId = props.id;
    const [comment, setComment] = useState(0);
    const [commentFetch, isCommentLoading, commentError] = useFetch(async (currentId) => {
        const response = await newsService.getComment(currentId);
        setComment(response);
    })

    useEffect(() => {
        commentFetch(currentId);
    },[])

    return(
        <div>
            <p className={classes.commentRow}>by: {comment.by}</p>
            <div className={classes.commentRow}>
                <div dangerouslySetInnerHTML={{__html: comment.text}}></div>
            </div>
        </div>
    )
}

export default NewCommentItem;