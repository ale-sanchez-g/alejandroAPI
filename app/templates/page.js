module.exports = {

    page: function() {
        return '<!DOCTYPE html><html><header></header><body> ' +
            '<div style="width:70%;height:70%;"><iframe src="' +
            'string_to_replace' +
            '" width=100% height=100% ' +
            'style="position:absolute" frameBorder="0" ' +
            'class="giphy-embed" allowFullScreen>' +
            '</iframe></div></body></html>';
    }
};