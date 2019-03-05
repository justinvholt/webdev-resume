function resetForm() {
  document.querySelectorAll(".form-field").reset();
}

$(document).submit(function() {
  return resetForm();
});
