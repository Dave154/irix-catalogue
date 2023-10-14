document.addEventListener('DOMContentLoaded', ()=>{
const services = document.querySelector('.dropdown');
const dropdowncontent = services.querySelector('.dropdown-content');

services.addEventListener('click', () => {
	 dropdowncontent.classList.toggle('show')});
window.addEventListener('click' , (event) => {
	if( !event.target.matches('#dropdown')) {
		if(dropdowncontent.classList.contains('show')){
			dropdowncontent.classList.remove('show');
		}
	}
});
});

