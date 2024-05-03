/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/

function copyAddress(event) {
    event.preventDefault();

    var copyInput = document.getElementById("address");
    var fullAddress = copyInput.getAttribute("data-full-address");

    if (navigator.clipboard) {
        // Clipboard API is available
        navigator.clipboard.writeText(fullAddress).then(function() {
            console.log('Address copied to clipboard successfully!');
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    } else {
        // Clipboard API is not available, use document.execCommand('copy')
        var textarea = document.createElement('textarea');
        textarea.value = fullAddress;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            console.log('Address copied to clipboard successfully!');
        } catch (err) {
            console.error('Could not copy text: ', err);
        }
        document.body.removeChild(textarea);
    }

    // Create and show a hint message
    var hint = document.createElement('span');
    hint.innerText = 'Copied to clipboard';
    hint.style.cssText = 'position: absolute; color: green; background-color: white; padding: 5px; border-radius: 5px; margin-left: 10px;';
    var button = document.querySelector('.address-container button');
    button.parentNode.insertBefore(hint, button.nextSibling);

    // Remove the hint after 2 seconds
    setTimeout(function() {
        hint.remove();
    }, 2000);
}
