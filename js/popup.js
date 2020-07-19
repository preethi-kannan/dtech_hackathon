
document.querySelectorAll('button').forEach(button =>
	button.addEventListener('click', event => {
        chrome.tabs.create({url: event.target.dataset.location})
	    // window.location.href = event.target.dataset.location
	})
  )

function changeHeaders(businessNames, businessDescriptions, businessLinks) {
	document.getElementById("product1").innerHTML = businessNames[0]
	document.getElementById("product2").innerHTML = businessNames[1]
	document.getElementById("product3").innerHTML = businessNames[2]

	document.getElementById("product1Description").innerHTML = businessDescriptions[0]
	document.getElementById("product2Description").innerHTML = businessDescriptions[1]
	document.getElementById("product3Description").innerHTML = businessDescriptions[2]

	document.getElementById("product1").setAttribute("data-location", businessLinks[0])
	document.getElementById("product2").setAttribute("data-location", businessLinks[1])
	document.getElementById("product3").setAttribute("data-location", businessLinks[2])
}
