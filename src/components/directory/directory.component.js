import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import  {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';


const Directory=({sections})=>
	(<div className="directory-menu">
		{sections.map(({title,imageUrl,id,size,linkUrl})=>( 
			<MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} linkUrl={linkUrl} size={size} />
	))}

		</div>);

const mapStateToProps=createStructuredSelector({
  sections:selectDirectorySections
})

export default connect(mapStateToProps)(Directory);