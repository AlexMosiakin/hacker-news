import React, {useState, useEffect} from "react";
import { useFetch } from "../../../../hooks/useFetch";
import newsService from "../../../../API/newsService";
import classes from './SubComments.module.css'
import manIcon from '../../../../img/man.svg'

function SubComments(props) {
    const currentId = props.subComment;
    const [comment, setComment] = useState(0);

    const [commentFetch, isCommentLoading, commentError] = useFetch(async (currentId) => {
        const response = await newsService.getComment(currentId);
        setComment(response);
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
        </div>
        :
        ""
    )
}

export default SubComments