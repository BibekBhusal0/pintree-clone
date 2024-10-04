const url = "chrome://newtab";

const openLink = () => {
  chrome.tabs.create({ url });
};

document.querySelector("button").addEventListener("click", openLink);
