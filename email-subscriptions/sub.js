
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyqFearNshD2tGQmn9Vwrftpk46LQJcc1tOS0-o3iGWXyGDYMqt73PAmtOHeodH92dE/exec'
  const form = document.forms['submit-to-google-sheet']
  let msg =document.querySelector("#msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Thank you for Subscribing!";
        setTimeout(function(){
            msg.innerHTML = "";
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })