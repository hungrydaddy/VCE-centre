$(document).ready(function() {
    setupTextEditor();
});


var setupTextEditor = function() {
    var toolbarOptions = [
        [{
            'size': ['small', false, 'large', 'huge']
        }], // custom dropdown
        [{
            'header': [1, 2, 3, 4, 5, 6, false]
        }],
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],
        [{
            'font': []
        }],
        [{
            'list': 'ordered'
        }, {
            'list': 'bullet'
        }],
        [{
            'script': 'sub'
        }, {
            'script': 'super'
        }], // superscript/subscript
        [{
            'indent': '-1'
        }, {
            'indent': '+1'
        }], // outdent/indent
        [{
            'direction': 'rtl'
        }], // text direction
        [{
            'color': []
        }, {
            'background': []
        }], // dropdown with defaults from theme
        [{
            'align': []
        }],
        ["image"]
        // remove formatting button
    ];

    var quill = new Quill('#editor', {
        modules: {
            toolbar: toolbarOptions
        },
        placeholder: "Text here...",
        theme: 'snow'
    });
}



var submitText = function() {

}
