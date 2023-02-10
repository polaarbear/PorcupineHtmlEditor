
var porcupine;
var porcupineEditor;

function startPorcupine(porcupineTheme, porcupineDefaultMessage, border, radius) {

    porcupineEditor = new Quill('#porcupineEditor', {
        theme: porcupineTheme,
        placeholder: porcupineDefaultMessage,
    });
    porcupine = document.getElementById('porcupine');
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
    if (porcupineEditor) {
        return porcupineEditor.getText();
    }
}

function getPorcupineHTML() {
    if (porcupineEditor) {
        return porcupineEditor.root.innerHTML;
    }
}

function setPorcupineText(text) {
    if (porcupineEditor) {
        porcupineEditor.setText(text, 'silent');
    }
}

function setPorcupineHTML(html) {
    if (porcupineEditor) {
        porcupineEditor.root.innerHTML = html;
    }
}

function showPorcupine() {
    if (porcupine) {
        porcupine.style.display = 'block';
    }
}

function hidePorcupine() {
    if (porcupine) {
        porcupine.style.display = 'none';
    }
}