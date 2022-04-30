import React,{useState} from 'react';
import Nav from '../../components/Nav';
import MainLayout from "../../components/layouts/MainLayout";
import ProgrammesComoponent from '../../components/ProgrammesComponent';
// import ProgramesId from '../../components/ProgramesId';

export default function programmes(props){

	return(
	<div className="flex flex-col min-h-screen">
	<Nav/>
	 {
	 props.items.map(item => (
	 <ProgrammesComoponent {...item} 
	 key={item.id}
	 />)
	 )
	 }
	</div>
	)
}