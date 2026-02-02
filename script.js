const form = document.getElementById('form');
const date = document.getElementById('dateOfBirth');
const month = document.getElementById('monthOfBirth'); 
const year = document.getElementById('yearOfBirth');
const gender = document.getElementById('gender');

form.addEventListener('submit', function(event){
    event.preventDefault
})

if(date.value>31){
    alert('Fill in the correct date')
}
if(gender.value===!male ||gender.value===!female && gender.value==='')
    alert('Fill in correct gender')

    alert