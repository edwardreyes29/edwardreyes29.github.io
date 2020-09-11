$(document).ready(() => {
  $('.submit').click(function (event) {
    console.log("clicked")

    const name = $("#nameInput").val();
    const email = $("#emailInput").val();
    const message = $("#messageInput").val(); 
    let statusElm = $(".status");
    statusElm.empty();

    // validate email
    if(email.length > 5 && email.includes('@') && email.includes('.')) {
    } else {
      event.preventDefault(); // prevent form from submitting
      statusElm.append('<div>Email is not valid</div>');
    }

    if(name.length > 2) {
    } else {
      event.preventDefault();
      statusElm.append('<div>Name is not valid</div>')
    }

    if(message.length > 10 && message.length <= 1000) {
    } else {
      event.preventDefault();
      if (message.length < 10) 
        statusElm.append('<div>Message must be at-least 10 characters</div>');
      else 
        statusElm.append('<div>Message is too long</div>')
    }

  })
})