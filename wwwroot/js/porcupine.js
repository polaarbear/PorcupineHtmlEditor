
var porcupine;

function startPorcupine(porcupineTheme, porcupineDefaultMessage) {
    porcupine = new Quill('#porcupineEditor', {
        theme: porcupineTheme,
        placeholder: porcupineDefaultMessage
    });
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