// JS File for ic-06
// dynamic styling
function submit2Clicked() {
	let line = document.getElementById('line');

	line.classList.add('red');
}

document.getElementById('button1')
		.addEventListener('click', submit2Clicked);


item = document.getElementById('circle');
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func() {
	let item = document.getElementById('circle');
	item.addEventListener("mouseover", func, false);
	item.addEventListener("mouseout", func1, false);

	line.classList.add('orange');
}

function func1()
{  
   item.setAttribute("style", "background-color:green;")
}

