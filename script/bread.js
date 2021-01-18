window.addEventListener('DOMContentLoaded', function(){
function urlToString() {
	const fromLink = document.querySelector('.from-link');
	const fromId = document.querySelector('.from-id');
	let st = String(window.location);
	let result = st.substring( st.lastIndexOf('/') + 1, st.length );
	if(result == 'contactus.html'){
		fromId.style.display = 'none';
	}
	else{
		fromLink.style.display = 'none';
	}

	}
	urlToString();

	


})
