let disableState = true

$('.list-title-holder').click(function(event) {
  if (disableState) {
    $(this).css('boxShadow', '0px 0px 10px white')
    $('.btn-danger').prop("disabled", false)
    disableState = false
  } else {
    $(this).css('boxShadow', '0px 0px 10px black')
    $('.btn-danger').prop("disabled", true)
    disableState = true
  }
})