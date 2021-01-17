window.addEventListener('DOMContentLoaded',
function(){
		let btn = document.querySelectorAll('button');
		let rotateElem = document.querySelectorAll('.instructors');
		let container = document.querySelector('.container-center__instructor');
		var btnBack = document.querySelectorAll('.btnBack');

		container.addEventListener('click', rotate);

	function	rotate(e){
         for(let i=0; i<btn.length; i++){
				if(e.target==btn[i]){
					rotateElem[i].classList.add('back-side');
				}
				if(e.target == btnBack[i]){
					rotateElem[i].classList.remove('back-side');
				}
			}
		}
})