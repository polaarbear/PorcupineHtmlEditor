
//INITIALIZATION
function startPorcupine(id, porcupineTheme, porcupineDefaultMessage, border, radius) {
    new Quill('#' + id, {
        theme: porcupineTheme,
        placeholder: porcupineDefaultMessage,
    });
    setToolbarBorder(border, radius);
}

function setToolbarBorder(border, radius) {
    var toolBar = document.getElementsByClassName("ql-toolbar")[0];
    if (toolBar) {
        toolBar.style.border = border;
        toolBar.style.marginBottom = ".1rem";
        toolBar.style.borderRadius = radius;
    }
}

//CONTENT FUNCTIONS
function getPorcupineLength(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    return porcupineEditor.getLength();
}

function getPorcupineText(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    return porcupineEditor.getText();
}

function getPorcupineText(id, index) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    return porcupineEditor.getText(index);
}

function getPorcupineText(id, index, length) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    return porcupineEditor.getText(index, length);
}

function setPorcupineText(id, text) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    porcupineEditor.setText(text, 'silent');
}

function getPorcupineHTML(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    return porcupineEditor.root.innerHTML;
}

function setPorcupineHTML(id, html) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    porcupineEditor.root.innerHTML = html;
}

function deletePorcupineText(id, index, length) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    porcupineEditor.deleteText(index, length, 'silent');
}

function insertImageToPorcupine(id, index, imageURL) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    porcupineEditor.insertEmbed(index, 'image', imageURL, 'silent');
}

function insertTextToPorcupine(id, index, text) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    porcupineEditor.insertText(index, text, 'silent');
}

//EDITOR
function clearPorcupineFocus(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    porcupineEditor.blur();
}

function grabPorcupineFocus(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    porcupineEditor.focus();
}

function isPorcupineFocused(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    return porcupineEditor.hasFocus();
}

function enablePorcupine(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    porcupineEditor.enable(true);
}

function disablePorcupine(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    porcupineEditor.enable(false);
}

//FORMATTING
function formatPorcupineSelection(id, property, value) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    porcupineEditor.format(property, value, 'silent');
}

function formatPorcupineText(id, index, length, property, value) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    porcupineEditor.formatText(index, length, property, value, 'silent');
}

function clearPorcupineFormat(id, index, length) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    porcupineEditor.removeFormat(index, length, 'silent');
}

//SELECTION
function getBounds(id, index) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    return porcupineEditor.getBounds(index);
}

function getBounds(id, index, length) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    return porcupineEditor.getBounds(index, length);
}

function getSelection(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    return porcupineEditor.getSelection();
}

function setSelection(id, index, length) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    porcupineEditor.setSelection(index, length, 'silent');
}

//VISIBILITY

function showPorcupine(id) {
    porcupine = document.getElementById(id);
    porcupine.style.display = 'block';
}

function hidePorcupine(id) {
    porcupine = document.getElementById(id);
    porcupine.style.display = 'none';
}