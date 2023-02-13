
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
    if (porcupineEditor) {        
        return porcupineEditor.getLength();
    }

}

function getPorcupineText(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        return porcupineEditor.getText();
    }
}

function getPorcupineText(id, index) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        return porcupineEditor.getText(index);
    }
}

function getPorcupineText(id, index, length) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        return porcupineEditor.getText(index, length);
    }
}

function setPorcupineText(id, text) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        porcupineEditor.setText(text, 'silent');
    }
}

function getPorcupineHTML(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        return porcupineEditor.root.innerHTML;
    }
}

function setPorcupineHTML(id, html) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        porcupineEditor.root.innerHTML = html;
    }
}

function deletePorcupineText(id, index, length) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        porcupineEditor.deleteText(index, length, 'silent');
    }
}

function insertImageToPorcupine(id, index, imageURL) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        porcupineEditor.insertEmbed(index, 'image', imageURL, 'silent');
    }
}

function insertTextToPorcupine(id, index, text) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        porcupineEditor.insertText(index, text, 'silent');
    }
}

//EDITOR
function clearPorcupineFocus(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        porcupineEditor.blur();
    }
}

function grabPorcupineFocus(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        porcupineEditor.focus();
    }
}

function isPorcupineFocused(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        return porcupineEditor.hasFocus();
    }
}

function enablePorcupine(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        porcupineEditor.enable(true);
    }
}

function disablePorcupine(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        porcupineEditor.enable(false);
    }
}

//FORMATTING
function formatPorcupineSelection(id, property, value) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        porcupineEditor.format(property, value, 'silent');
    }
}

function formatPorcupineText(id, index, length, property, value) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        porcupineEditor.formatText(index, length, property, value, 'silent');
    }
}

function clearPorcupineFormat(id, index, length) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        porcupineEditor.removeFormat(index, length, 'silent');
    }
}

//SELECTION
function getBounds(id, index) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        return porcupineEditor.getBounds(index);
    }
}

function getBounds(id, index, length) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        return porcupineEditor.getBounds(index, length);
    }
}

function getSelection(id) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        return porcupineEditor.getSelection();
    }
}

function setSelection(id, index, length) {
    var porcupineEditor = Quill.find(document.getElementById(id));
    if (porcupineEditor) {
        porcupineEditor.setSelection(index, length, 'silent');
    }
}

//VISIBILITY

function showPorcupine(id) {
    var porcupine = document.getElementById(id);
    if (porcupine) {
        porcupine.style.display = 'block';
    }
}

function hidePorcupine(id) {
    var porcupine = document.getElementById(id);
    if (porcupine) {
        porcupine.style.display = 'none';
    }
}