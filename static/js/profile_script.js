// Tabs code from W3S
  function openTab(evt, tabName) {
  let i,
      tabcontent, 
      tablinks;

  // Change to display first tab on page load
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

openBooksTabOnload();
// Open first tab on page load
function openBooksTabOnload()  {
    document.getElementById("books").style.display = "block";
    document.getElementsByClassName("tablinks")[0].classList.add("active");
}

// Scroll code from W3S
// Get button to scroll back to top of the page
let scrollBtnP = document.getElementById("scrollToTopProfile");

window.onscroll = function() {
    showScrollBtn();
};

// Show button when user scrolls down 20px from top of page
function showScrollBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtnP.style.display = "block";
  } else {
    scrollBtnP.style.display = "none";
  }
}

// On button click, scroll to the top of the page 
function scrollUp() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.getElementById("scrollToTopProfile").addEventListener("click", scrollUp);