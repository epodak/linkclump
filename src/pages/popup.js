document.getElementById('openLinksButton').addEventListener('click', function () {
    let pattern = document.getElementById('pattern').value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { message: "openLinks", pattern: pattern });
    });
});

document.getElementById('optionsButton').addEventListener('click', function () {
    chrome.runtime.openOptionsPage();
});
