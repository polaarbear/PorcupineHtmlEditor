
var porcupine;

function startPorcupine(porcupineTheme, porcupineDefaultMessage, border, width) {
    porcupine = new Quill('#porcupineEditor', {
        theme: porcupineTheme,
        placeholder: porcupineDefaultMessage
    });
    setToolbarBorder(border, width);
}

function setToolbarBorder(border, width) {
    var toolBar = document.getElementsByClassName("ql-toolbar")[0];
    if (toolBar) {
        toolBar.style.border = border;
    }
}

function getPorcupineText() {
    return porcupine.getText();
}

function getPorcupineHTML() {
    return porcupine.root.innerHTML;
}

function setPorcupineText(text) {
    porcupine.setText(text, 'silent');
}

function setPorcupineHTML(html) {
    porcupine.root.innerHTML = html;
}