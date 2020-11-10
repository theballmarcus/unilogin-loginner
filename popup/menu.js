checkedObj = {};

function writeParameter(a) {
    //alert(!!a)
  
    document.getElementById("logincheckbox").checked = !!a.checkedObj.myKey;
}

function saveOptions(e) {
    checked = document.getElementById("logincheckbox").checked;
    checkedObj.myKey = checked;
    browser.storage.local.set({checkedObj});//.this();
    e.preventDefault();
}

function restoreOptions() {
    browser.storage.local.get('checkedObj').then(writeParameter);
}

document.addEventListener('DOMContentLoaded', restoreOptions); //Restore defaults on DOM load...
document.getElementById('logincheckbox').addEventListener("change", saveOptions);