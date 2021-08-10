const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');
const errorIcon = document.getElementById('error-icon');
const label = document.getElementsByClassName('email-label')[0];

form.addEventListener('submit', function (event) 
{
    event.preventDefault();
    if (!email.validity.valid) 
  {
    errorIcon.style.opacity = 1;
    label.style.opacity = 1;
  } 
  else
  {
    errorIcon.style.opacity = 0;
    label.style.opacity = 0;
  }
  email.value='';
});

email.addEventListener('click', function (event) 
{
    errorIcon.style.opacity = 0;
    label.style.opacity = 0;
});
  


