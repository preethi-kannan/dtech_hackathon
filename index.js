
trackWindow();

var targetButton;
var category;
var allCategories;

function trackWindow() {
	var active = true;
	allCategories = []
	targetButton = document.getElementById("add-to-cart-button");

	const url = location.href;
	if(!url) {
		return;
	}

	category = getProductCategory(url);
	
	// if (allCategories.includes(category)) {
	if (targetButton) {
		targetButton.addEventListener('click', (e) => {
			if (active) {
				e.preventDefault()
				alert("Check your extension for some alternatives from black owned businesses!")
			}
		})
	}
}


function getProductCategory(url) {
	if(url.includes('amazon.com') && !url.includes('buy')) {
		targetCategories = document.title.split(":");
		targetCategory = targetCategories[(targetCategories.length - 1)]
		console.log(targetCategory);
		if (!targetCategory) {
			return 'categoryNotFound'
		}
	}
		// export {targetCategory};
		return targetCategory
	}

