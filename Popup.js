
document.querySelectorAll('INPUT[Type="button"]').forEach(button =>
	button.addEventListener('click', event => {
        chrome.tabs.create({url: event.target.dataset.location})
	    // window.location.href = event.target.dataset.location
	})
  )
