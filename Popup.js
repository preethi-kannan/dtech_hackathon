var isExtensionOn = true;

document.querySelectorAll('INPUT[Type="button"]').forEach(button =>
	button.addEventListener('click', event => {
        chrome.tabs.create({url: event.target.dataset.location})
	    // window.location.href = event.target.dataset.location
	})
  )

function disableButton() {
    var disableButton = document.getElementById("disableButton");
    if (disableButton.innerHTML === "Disable extension") {
        isExtensionOn = false;
    } else if (disableButton.innerHTML === "Enable") {
        isExtensionOn = true;
    } else {
        alert("Error");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var disableButton = document.getElementById("disableButton");
    var br1 = document.getElementById("br1");
    var br2 = document.getElementById("br2");

    chrome.extension.sendMessage({cmd: "setOnOffState", data: {value: isExtensionOn}});

    chrome.extension.sendMessage({cmd: "getOnOffState"}, function (response) {
        if (response !== undefined) {
            if (response) {
                disableButton.innerHTML = "Disable";
                disableButton.className = "disableButton";
                disableButton.style.display = "";
                br1.style.display = "";
                br2.style.display = "";
            }
            else {
                disableButton.innerHTML = "Enable";
                disableButton.className = "enableButton";
                disableButton.style.display = "";
                br1.style.display = "";
                br2.style.display = "";
            }
        }
    });
});

