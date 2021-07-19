import React from 'react';
import'./menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem=({title,imageUrl,size,linkUrl,history})=>{ 
	return( <div  className={`${size} menu-item`}>
	<div   className='background-image'  style={{backgroundImage:`url(${imageUrl})`}}/>
   <div  className="content" onClick={()=>history.push(`/${linkUrl}`)}>
   <h1 className="title">{title}</h1>
   <span className="subtitle">SHOP NOW</span>
   </div>
   </div>)}
export default withRouter(MenuItem);