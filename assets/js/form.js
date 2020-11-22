let scrolledDown = false;

$(document).ready(function() {
    window.onscroll = function(ev) {
        if (!scrolledDown && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            scrolledDown = true;
            openForm();
        }
    };
})

function openForm() {
    $("#myModal").modal('show');
    return false;
}

function sendForm() {
    let email = document.getElementById("emailInput");
    let hp = document.getElementsByName("_honey")[0].value;

    if (hp === undefined || hp === "")
    {
        $.ajax({
            url: "https://formsubmit.co/ajax/unicorns.guideme@gmail.com",
            method: "POST",
            data: {
                email: email.value,
            },
            dataType: "json",
            success: function(resp) {
                if (resp.success === "true") {
                    /* Send event to Google Analytics. */
                    gtag('event', 'submit', {
                        'event_category': 'Forms',
                        'event_label': 'Newsletter subscription'
                    });

                    scrolledDown = true;
                    $("#myModal").modal('hide');
                    email.value = "";
                    $(".toast-success").toast('show');
                }
                else {
                    console.log(resp);
                    $(".toast-error").toast('show');
                }
            }
        });
    }

    return false;
}
