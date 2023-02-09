
var porcupine;

function startPorcupine(porcupineTheme, porcupineDefaultMessage, border, radius) {
    porcupine = new Quill('#porcupineEditor', {
        theme: porcupineTheme,
        placeholder: porcupineDefaultMessage
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