let disableState = true

$('.list-title-holder').click(function(event) { // Enable/disable delete list button 
  if (disableState) {
    $(this).css('boxShadow', '0px 0px 10px white')
    $('.btn-delete').prop("disabled", false)
    disableState = false
  } else {
    $(this).css('boxShadow', '0px 0px 10px black')
    $('.btn-delete').prop("disabled", true)
    disableState = true
  }
})

// Add new list function
$('.btn-add').click(function() { // To add new lists
  const holder = document.getElementById('holder') // Access parent div
  const popUp = document.createElement('div') // Create new div for pop-up
  popUp.classList.add('pop-up')
  popUp.innerHTML = `
  <div class=pop-up-holder>
    <h1 class="holder-title text-center mt-3">Would you like to add a new event?</h1>
    <label for="new-list-title" class="new-list-label">Enter your new list name:</label>
    <input type="text" class="new-list-title form-control" id="new-list-title">
    <p class="char-count">0/30 Characters used</p>
  </div>
  <div class="requirements">
    <ul>
      <li> Must be less than 30 Characters</li>
      <li> Contain no special characters</li>
    </ul>
  </div>
  `
  holder.appendChild(popUp) // Append new div to parent

  $('.holder').slideDown(200)

  // Disable all buttons while pop-up is open
  $('.btn-delete').prop("disabled", true)
  $('.btn-add').prop("disabled", true)
  $('.add-btn').prop("disabled", true)
  $('.clear-btn').prop("disabled", true)

  // Add bg to show the disabled button "effect"
  $('.page-container').css("backgroundColor", "rgba(0,0,0,0.8)")

  // Lower opacity to make pop-up "pop" more 
  $('.list-title-holder').css("opacity", "0.4");
  $('.list-title').css("opacity", "0.4");
  $('.btn-delete').css("opacity", "0.4");
  $('.btn-add').css("opacity", "0.4");
  $('.add-btn').css("opacity", "0.4");
  $('.clear-btn').css("opacity", "0.4");

  // Remove pointer cursor from list divs
  $('.list-title-holder').css("cursor", "default");

  // Gather key inputs to update character count for new list title 
  let titleString = document.getElementById('new-list-title')
  $(".new-list-title").keyup(function() {
    if ($(this).val().length >= 30){
      alert("Text limit has been reached")
      titleString.value = $(this).val().slice(0, 30)
    }
    $('.char-count').text(`${$(this).val().length}/30 Characters used`)
  })
})