import React, { useEffect, useState } from 'react';
import NewListItem from './NewListItem/NewListItem';

function NewList({isNewsLoading, news}) {

return (
    <div>
        {
          isNewsLoading ? 
          <h5>Loading...</h5>
          :
          news.map( newItem => 
            <NewListItem key={newItem} id={newItem}/>
          )
        }
    </div>
  );
}

export default NewList