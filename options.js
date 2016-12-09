// Saves options to chrome.storage
function save_options() {
    var title = document.getElementById('title').value;
    var body = document.getElementById('body').value;
    chrome.storage.sync.set({
        title: title,
        body: body
    }, function() {
        // Update status to let user know options were saved.
        var saveButton = document.getElementById('save');
        saveButton.innerText = 'Options saved!';
        console.log('saved')

        setTimeout(function() {
            saveButton.innerText = 'Save';
        }, 1000);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        title: 'Title',
        body: 'Body'
    }, function(items) {
        document.getElementById('title').value = items.title;
        document.getElementById('body').value = items.body;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);