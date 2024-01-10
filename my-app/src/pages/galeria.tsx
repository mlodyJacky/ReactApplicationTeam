// Filename - pages/blogs.js

import React from "react";
import jablko from '../images/jabko-375x200.png';
import calendar from '../images/calendar.png';
import computer from '../images/komputer.jpg';
import myszka from "../images/myszkamiki.png";
import cake from "../images/cake.jpg";
import bananki from "../images/bananki.jpg";

const Galeria = () => {
	return (
		<div>
			<h1>Galeria</h1>

			<table>
				<tr>
					<td><img src={computer} width="500" height="500"></img></td>
					<td><img src={calendar} width="500" height="500"></img></td>
					<td><img src={myszka} width="500" height="500"></img></td>
				</tr>
				<tr>
					<td><img src={cake} width="500" height="500"></img></td>
					<td><img src={bananki} width="500" height="500"></img></td>
					<td><img src={jablko} width="500" height="500"></img></td>
				</tr>
			</table>
		</div>
	);
};

export default Galeria;
