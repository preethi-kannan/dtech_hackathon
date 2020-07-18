
function loadPage() {
	document.getElementById("close_window").addEventListener('click', closeWindow);
	window.addEventListener('click', function(e) {
		if (!document.getElementById('buy-window').contains(e.target)) {
			closeWindow();
		}
	})
}

function closeWindow() {
	console.log('close');
	document.getElementById('buy-window').style.display = 'none';
	document.getElementById('buy-overlay').style.display = 'none';
}