import React,{useState} from 'react';
import Nav from '../../components/Nav';
import ProgramesId from '../../components/ProgramesIdComponent';
import ProgrammesComoponent from '../../components/ProgrammesComponent';


function Programmes(props) {
  
    const [selectedItem,setSelectedItem] = useState(null);

    const onSelectedItem = itemId => {
        setSelectedItem(itemId)
    }

    return (
     <div className="flex flex-col min-h-screen">
	<Nav/>
	 <ProgramesId
      item = {props.items.filter(item => item.id === selectedItem)}
     />
     <ProgrammesComoponent />
	</div>
    );
}

export default Programmes;