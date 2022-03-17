import React, { useEffect, useState } from 'react';
import NewListItem from './NewListItem/NewListItem';
import classes from './NewList.module.css';
import Loader from '../Loader/Loader';

function NewList({isNewsLoading, news}) {


  return (
      <div className={classes.newList}>
          {
            isNewsLoading ? 
            <Loader/>
            :
            news.map( newItem => 
              <NewListItem key={newItem} id={newItem}/>
            )
          }
      </div>
    );
}

export default NewList