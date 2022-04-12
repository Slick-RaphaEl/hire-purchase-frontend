import React from 'react';
import Nav from '../components/Nav';
import MainLayout from "../components/layouts/MainLayout";
import ProgrammesComoponent from '../components/ProgrammesComponent';
import keke from '../img/keke-3.jpeg';
import bus from '../img/bus-1.jpeg';
import tailor from '../img/tailor-1.jpeg';

export default function programmes(){
	return(
	<div className="flex flex-col min-h-screen">
	<Nav/>
	 <ProgrammesComoponent
	 heading='rent a keke-napep'
	 image={keke}
	 paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
	 />
	 <ProgrammesComoponent
	 heading='rent a bus'
	 image={bus}
	 paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
	 />
	 <ProgrammesComoponent
	 heading='rent a tailoring machine'
	 image={tailor}
	 paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
	 />
	</div>
	)
}