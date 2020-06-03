import React from 'react';

const Link =  (props) =>  {
	const setPage = (value) => props.changePage(value)
	const TagName = props.tag;	
	return <TagName props={props} onClick={()=> setPage(props.direction)} children={props.direction}/>
} 

export default Link;
