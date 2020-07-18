// document.getElementById('btn').addEventListener("click", function(){
// 	document.getElementById('body').innerHTML = "<h1 class='h1'>We are!</h1>";
// })

document.querySelectorAll('INPUT[Type="button"]').forEach(button =>
	button.addEventListener('click', event => {
        chrome.tabs.create({url: event.target.dataset.location})
	    // window.location.href = event.target.dataset.location
	})
  )