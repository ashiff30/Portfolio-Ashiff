function send(event){
    event.preventDefault();
    let userName = document.getElementById("user-input").value;
    let userMail = document.getElementById("user-mail").value;
    let userMessage = document.getElementById("user-message").value;
    console.log(userName + " " + userMail + " " + userMessage) 
}

function notify(){
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    
    if (toastTrigger) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
      toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
      })
    }
}

function updateProgressBar() {
    const scrollTop = window.scrollY; // How far the user has scrolled
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercentage = (scrollTop / documentHeight) * 100; // Percentage scrolled

    const progressBar = document.getElementById('scrollProgress');
    progressBar.style.width = scrollPercentage + '%'; // Update the width of the progress bar
    progressBar.setAttribute('aria-valuenow', scrollPercentage); // Update for accessibility
  }

  // Attach the function to the window's scroll event
  window.addEventListener('scroll', updateProgressBar);