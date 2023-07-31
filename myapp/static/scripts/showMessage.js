export function showMessage(message,type="success"){
    Toastify({
        text: message,
        duration: 2000,
        destination: "",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: type==="success" ? "green" : "red",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}