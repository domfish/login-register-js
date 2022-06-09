function login(e){
    e.preventDefault();
    var nom= document.getElementById('nom');
    var password=document.getElementById('password');
    var nomRequired =document.getElementById('nomRequired');
    var motDePasseRequired=document.getElementById('motDePasseRequired');

    if (nom.value == '' || !nom.value.includes('@')) {
        nom.classList.remove('is-valid');
        nom.classList.add('is-invalid');
        if (nom.value == '' ){
            nomRequired.innerHTML='l\'adresse mail est obligatoire';
        }
        if (nom.value != '' && !nom.value.includes('@')){
            nomRequired.innerHTML ='@ est obligatoire'
        }
    }
    else{
        nom.classList.remove('is-invalid');
        nom.classList.add('is-valid');
        nomRequired.innerHTML='';
    }
    if (password.value =='') {
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');
        motDePasseRequired.innerHTML='le mot de passe et obligatoire';
    }
    else{
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
        motDePasseRequired.innerHTML='';
    }
}
var form = document.getElementById('form');
form.addEventListener('submit',login);


