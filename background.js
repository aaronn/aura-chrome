function buttonPressed() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "buttonPressed"}, function(response) {
            if (response.enabled==false) {
                reloadTab();
            }
        });
      });
}

function reloadTab() {
    chrome.tabs.reload();
}

chrome.browserAction.onClicked.addListener(function(activeTab) {
    buttonPressed();
});