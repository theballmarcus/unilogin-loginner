(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        // Use $ here...
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();

(() => {
    account = {
        name : "marc171b",
        pass : "aaaa"
    }


    //account.pass = atob(account.pass);

    failed = document.getElementById("form-error-message-form-error")
                                    //form-error-message-form-error
    browser.storage.local.get('checkedObj').then(a => {
        if(!!a.checkedObj.myKey) {
            if(window.location.href.split("/")[2].split(".")[0] == "broker") {
                if(failed === null) {
                    input = document.getElementById("username");
                    input.setAttribute('value', account.name)
                    curform = input.parentElement;
                    form = curform.parentElement;
                    form.submit();
            
                }
            } else if (window.location.href.split("/")[2].split(".")[0] == "idp") {
                if(failed === null) {
                    input = document.getElementById("form-error");
                    input.setAttribute('value', account.pass)
                    curform = input.parentElement;
                    form = curform.parentElement;
                    //form.submit();
                
                }
            }
        }
    });


    browser.menus.create({
        id: "log-selection",
        title: "Log '%s' to the console",
        contexts: ["selection"]
    });

    function restoreOptions() {
        browser.storage.local.get('checkedObj').then(writeParameter);
    }
})();