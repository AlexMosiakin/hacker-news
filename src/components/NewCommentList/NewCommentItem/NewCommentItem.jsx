import React, { useEffect, useState } from "react";
import newsService from "../../../API/newsService";
import { useFetch } from "../../../hooks/useFetch";
import classes from './NewCommentItem.module.css';
import manIcon from '../../../img/man.svg'
import SubComments from './SubComments/SubComments'

function NewCommentItem(props){
    const currentId = props.id;
    const [comment, setComment] = useState(0);
    const [subComments, setSubComments] = useState([]);
    const [commentFetch, isCommentLoading, commentError] = useFetch(async (currentId) => {
        const response = await newsService.getComment(currentId);
        setComment(response);
        setSubComments([...subComments, ...response.kids]);
    })

    useEffect(() => {
        commentFetch(currentId);
    },[])

    return(
        comment.by && comment.text ? 
        <div>
            <p className={classes.commentRow}><img className={classes.newCommentItemIcon} src={manIcon} alt={manIcon} />{comment.by}</p>
            <div className={classes.commentRow}>
                <div dangerouslySetInnerHTML={{__html: comment.text}}></div>
            </div>
            {subComments.map(subComment => {
                <SubComments subComment={subComment}/>
            })
            }
        </div>
        :
        ""
    )
}

export default NewCommentItem;