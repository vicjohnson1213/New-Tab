chrome.storage.sync.get({
    title: 'Title',
    body: 'Body'
}, function(items) {
    document.getElementById('title').innerText = items.title;
    document.getElementById('body').innerText = items.body;
});