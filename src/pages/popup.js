document.getElementById('openLinksButton').addEventListener('click', function () {
    let pattern = document.getElementById('pattern').value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { message: "openLinks", pattern: pattern });
    });
});

document.getElementById('openPanButton').addEventListener('click', function () {
    let pattern = '^http://www\\.zhuzhupan2\\.com/gotopan_pay';
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { message: "openLinks", pattern: pattern });
    });
});

document.getElementById('openUkButton').addEventListener('click', function () {
    let pattern = '^http://www\\.zhuzhupan2\\.com/uk\\?id=';
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { message: "openLinks", pattern: pattern });
    });
});

document.getElementById('optionsButton').addEventListener('click', function () {
    chrome.runtime.openOptionsPage();
});
