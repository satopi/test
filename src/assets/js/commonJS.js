export function down(a,flag){
	if(flag%2==0){
		a.target.parentNode.parentNode.style.background = ''
		a.target.parentNode.previousElementSibling.previousElementSibling.childNodes[0].style.color = 'white'
		a.target.parentNode.previousElementSibling.style.color = 'white'
		a.target.parentNode.nextElementSibling.childNodes[0].style.color = 'white'
	}else{
		a.target.parentNode.parentNode.style.background = 'white'
		a.target.parentNode.previousElementSibling.previousElementSibling.childNodes[0].style.color = '#FC0E50'
		a.target.parentNode.previousElementSibling.style.color = 'black'
		a.target.parentNode.nextElementSibling.childNodes[0].style.color = '#FC0E50'
	}
} 