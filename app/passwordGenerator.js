var exec = require('child_process').exec;
var passWd = "no password created";

function generatePass(leng) {

     exec(`ruby rubyPassword.rb ${leng}`, function (error, stdout) {
        if (error) console.log(error);
        passWd = (stdout);
    });

    return passWd;
}

module.exports = generatePass;
