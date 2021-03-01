let showHideBtn = document.querySelector('#showhide')

showHideBtn.addEventListener('click', function(e){
    this.innerText=="show form"? this.innerText="hide form" : this.innerText="show form";
    document.querySelector('#addCustomer').classList.toggle('d-none')
})