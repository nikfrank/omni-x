function click(e) {
    chrome.tabs.executeScript(null, {file: "js/socket.io.js"});
    chrome.tabs.executeScript(null, {file: "content_script.js"});
    //      {code:"document.body.style.backgroundColor='red'; console.log('blagh');"});
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('p');
    for (var i = 0; i < divs.length; i++) {
	divs[i].addEventListener('click', click);
    }
});
