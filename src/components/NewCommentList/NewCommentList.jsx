import React, { useEffect, useState } from "react";
import NewCommentItem from "./NewCommentItem/NewCommentItem";

function NewCommentList({newIsLoading, comments}){

    return(
        <div>
            {
            newIsLoading ? 
            <h5>Loading...</h5>
            :
            comments.map( newItem => 
              <NewCommentItem key={newItem} id={newItem}/>
            )
          }
        </div>
    )
}

export default NewCommentList