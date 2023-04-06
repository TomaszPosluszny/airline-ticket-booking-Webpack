const sum = require('./sum').sum;
import { sum2 } from './sum2';
import { style } from './css/index.scss';
import Icon from './assets/img/proba.png';
import { data } from 'autoprefixer';

console.log('Hello World');
console.log(sum(2, 3));
console.log(sum2(2, 3));

let heading = document.querySelector('#demo'),
	sumValue = sum(10, 5);

heading.innerText = `10+10= ${sumValue}`;

let myIcon = new Image();
myIcon.src = Icon;

document.querySelector('div').append(myIcon);
document.querySelector('div').classList.add('change');
const cites = document.querySelector('#cites');
const addButton = document.querySelector('#addButton');
const add = document.querySelector('#add');
let selectedValue;
let domAdd;


fetch(
	'https://raw.githubusercontent.com/TomaszPosluszny/airline-ticket-booking/master/host/places.json'
)
	.then((resp) => resp.json()) // Transform the data into json
	.then(function (data) {
		console.log(data);
		const destinations = data.destination;

		console.log(destinations);

		destinations.map(function (element) {
			const city = document.createElement('option');
			city.innerHTML = `${element.desc}`;
			document.getElementById('cites').appendChild(city);
		});
		destinations.map(function (element) {
			const city = document.createElement('option');
			city.innerHTML = `${element.code}`;
			document.getElementById('room').appendChild(city);

	
		});
		let selectedValue = document.getElementById('cites');
		selectedValue.addEventListener('change',function(){
			selectedValue  = this.value
			console.log(selectedValue);
			const createCity = () => {
				const addCity = document.createElement('div');
			
				addCity.innerHTML = `
					<div>
					<h3> ${selectedValue}</h3>
					</div>
				`;
				document.getElementById('add').appendChild(addCity);
			};
			addButton.addEventListener('click', createCity);
		})
	});





