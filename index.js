
trackWindow();

var targetButton;
var category;

function trackWindow() {
	var active = true;
	targetButton = document.getElementById('add-to-cart-button');

	const url = location.href;
	if(!url) {
		return;
	}

	category = getProductCategory(url);

	if (targetButton) {
		targetButton.addEventListener('click', (e) => {
			if (active) {
			e.preventDefault();
			insertWindow();
			console.log('hi');
		}
		}
	)}
}

function getProductCategory(url) {
	if(url.includes('amazon.com') && !url.includes('buy')) {
		targetCategories = document.title.split(":");
		targetCategory = targetCategories[(targetCategories.length - 1)]
		console.log(targetCategory);
		if (!targetCategory) {
			return 'categoryNotFound'
		}
		
		return targetCategory
	}
}


function insertWindow() {
	fetch(chrome.extension.getURL('BusinessesWindow.html'))
	.then(response => response.text())
	.then(data => {
		const body = document.getElementsByTagName('body')[0];
		const window = document.createElement('div');
		window.className = 'buy-window';
		window.id = 'buy-window';
		window.innerHTML = data;
		body.append(window);

		const overlay = document.createElement('div');
		overlay.className = 'buy-overlay';
		overlay.id = 'buy-overlay';
		body.append(overlay);

		loadPage();

	}).catch(err => {
		console.log('Error loading window' + err)
	});
}
