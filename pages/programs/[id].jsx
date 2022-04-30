import React,{useState} from 'react';
import Nav from '../../components/Nav';
import ProgramesId from '../../components/ProgramesIdComponent';
import {useRouter} from 'next/router';
// import ProgrammesComoponent from '../../components/ProgrammesComponent';


function Programmes(props) {
     
    const router = useRouter();
    const {id} = router.query;

    const selelctedItem = props.items.filter(item => item.id == id);

    return (
     <div className="flex flex-col min-h-screen">
	<Nav/>
    {selelctedItem.map(element => (
        <ProgramesId {...element} 
        key={element.id}/>
    ))}
	</div>
    );
}

export default Programmes;