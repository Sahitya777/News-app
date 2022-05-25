import React from 'react'
import {Grid,Grow,Typography} from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard';
const NewsCards=({articles})=> {
  return (
    <div>
      <div>     
          {articles.map((article, i) => (
              <NewsCard />
            
          ))}      
      </div>
    </div>

  );
};


export default NewsCards;