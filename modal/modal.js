$("#btnConnexion").click(function(event) {

    // Fetch form to apply custom Bootstrap validation
    var form = $("#formConnexion")

    if (form[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    form.addClass('was-validated');
    // Perform ajax submit here...

});
