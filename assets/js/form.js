window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
formbutton("create", {
    theme: "minimal",
    action: "https://formspree.io/f/xgepybqv",
    title: "Tell us what you think!",
    buttonImg: "<i class='fas fa-comment' style='font-size:24px'/>",
    fields: [{
        name: "name",
        type: "text",
        label: "Your Name",
        required: true,
    },
    {
        name: "email",
        type: "email",
        label: "Your Email",
        required: true
    },
    {
        name: "Message",
        type: "textarea",
        required: true
    },
    {
        type: "submit"
    }],
    styles: {
        button: {
            "background": "#61b7cf",
        },
        title: {
            "background": "#61b7cf",
        },
        textInput: {
            "border": "1px inset black",
            "border-radius": "5px"
        },
        emailInput: {
            "border": "1px inset black",
            "border-radius": "5px"
        },
        textareaInput: {
            "border": "1px inset black",
            "border-radius": "5px"
        },
        submitInput: {
            "background": "#61b7cf",
            "color": "white"
        }
    },
    onResponse: function(ok, setStatus) {
        if (ok) {
          setStatus("Thanks for your feedback.");
        } else {
          setStatus("<span style='color:red'>There was a problem. We've been notified.</span>");
        }
    },
});

function openForm() {
    var btn = document.getElementById("formbutton-button");
    btn.click();
    return false;
}