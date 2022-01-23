fetch(chrome.runtime.getURL('/rogers.html')).then(r => r.text()).then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
});