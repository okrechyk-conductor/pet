let localhostDetails = null;

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.url.includes("localhost")) {
    const url = new URL(tab.url);
    localhostDetails = {
      protocol: url.protocol,
      port: url.port || "80" // Default port if not specified
    };
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "redirect") {
    if (localhostDetails) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tab = tabs[0];
        const url = new URL(tab.url);
        const newUrl = `${localhostDetails.protocol}//localhost:${localhostDetails.port}${url.pathname}${url.search}${url.hash}`;
        chrome.tabs.update(tab.id, { url: newUrl });
      });
    } else {
      sendResponse({ success: false, message: "Localhost details not found." });
    }
  }

  return true;
});
