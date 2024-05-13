document.addEventListener("DOMContentLoaded", function () {
    chrome.runtime.sendMessage({ action: "redirect" }, function (response) {
      if (response && response.success === false) {
        alert(response.message);
      }
    });
  });
  