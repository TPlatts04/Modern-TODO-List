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
      <li class="list-1"> Must be less than or equal to 30 Characters <i class='fa-solid fa-check text-center'></i></li>
      <li class="list-2"> Contain no special characters <i class='fa-solid fa-check text-center'></i></li>
    </ul>
  </div>
  <div class="pop-up-button-holder d-flex justify-content-center flex-row column-gap-3">
    <button class="btn btn-dark mt-5 btn-cancel">Cancel</button>
    <button class="btn btn-light mt-5 btn-confirm">Confirm</button>
  </div>
  `
  holder.appendChild(popUp) // Append new div to parent

  $('.holder').slideDown(300)

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
  const specialReg = /[!"£$%^&*()_+{:}@>?</`,./;'[|~\]=-]+/g // Create regex to find any special characters
  $(".new-list-title").keyup(function() {
    $('.char-count').text(`${$(this).val().length}/30 Characters used`)
    // Check if the length of the input value is more or less than 30
    if ($(this).val().length > 30){
      $('.list-1').html("<li>Must be less than or equal to 30 Characters <i class='fa-solid fa-xmark text-center'></i></li>")
    } else {
      $('.list-1').html("<li>Must be less than or equal to 30 Characters <i class='fa-solid fa-check text-center'></i></li>")
      $('.btn-light').attr("disabled", false)
    }
    // Check if string in input has any special characters
    if (titleString.value.match(specialReg) !== null){
      $('.list-2').html("<li>Contain no special characters <i class='fa-solid fa-xmark text-center'></i></li>")
    } else {
      $('.list-2').html("<li>Contain no special characters <i class='fa-solid fa-check text-center'></i></li>")
    }

    if ($(this).val().length > 30 || titleString.value.match(specialReg) !== null) {
      $('.btn-confirm').prop("disabled", true) // Disable button if doesnt meet criteria
    } else {
      $('.btn-confirm').prop("disabled", false) // Enable button if meet criteria
    }
  })

  // Created the close animation etc for the cancel button
  $('.btn-cancel').click(function() {
    $('.holder').slideUp(300)
  
      // Enable all buttons while pop-up closes
      $('.btn-delete').prop("disabled", false)
      $('.btn-add').prop("disabled", false)
      $('.add-btn').prop("disabled", false)
      $('.clear-btn').prop("disabled", false)
    
      // Remove bg to remove the disabled button "effect"
      $('.page-container').css("backgroundColor", "")
    
      // Reset opacity to make restore original alpha value more 
      $('.list-title-holder').css("opacity", "1");
      $('.list-title').css("opacity", "1");
      $('.btn-delete').css("opacity", "1");
      $('.btn-add').css("opacity", "1");
      $('.add-btn').css("opacity", "1");
      $('.clear-btn').css("opacity", "1");
    
      // Remove pointer cursor from list divs
      $('.list-title-holder').css("cursor", "pointer");

      holder.removeChild(popUp)
  })
})