const Name=document.getElementById('name');
const Prenom=document.getElementById('prenom');
const email=document.getElementById('email');
const motdepasse=document.getElementById('motdepasse');
const confiramtion =document.getElementById('confirmation');
const form=document.getElementById('form');
const noRequired= document.getElementById('no-required');
const prenomRequired= document.getElementById('prenomRequired');
const emailRequired=document.getElementById('emailRequired');
const motDePasseRequired =document.getElementById('motDePasseRequired')
const confirmationRequired = document.getElementById('confirmationRequired')

form.addEventListener('submit', (e)=>{
    
    e.preventDefault();
    if (Name.value =='') {
        Name.classList.remove('is-valid')
        Name.classList.add('is-invalid')
        noRequired.innerText='le nom est obligatoire';
    }
    else{
        Name.classList.add('is-valid')
        Name.classList.remove('is-invalid')
        noRequired.innerHTML='';
    }
    if (Prenom.value =='') {
        Prenom.classList.remove('is-valid')
        Prenom.classList.add('is-invalid')
        prenomRequired.innerText='le prenom est obligatoire';
    }
    else{
        Prenom.classList.add('is-valid')
        Prenom.classList.remove('is-invalid')
        prenomRequired.innerHTML='';
    }
    if (email.value =='' || !email.value.includes('@')) {
        email.classList.remove('is-valid')
        email.classList.add('is-invalid')
        if (email.value ==''){
            emailRequired.innerText='l\'email est obligatoire';
        }
        if(email.value !='' && !email.value.includes('@')){
            emailRequired.innerText='adresse mail ne contien pas @';
        }
    }
    else{
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
        emailRequired.innerHTML='';
    }
    if (motdepasse.value =='') {
        motdepasse.classList.remove('is-valid')
        motdepasse.classList.add('is-invalid')
        motDePasseRequired.innerText='le mot de passe est obligatoire';
    }
    else{
        motdepasse.classList.remove('is-invalid')
        motdepasse.classList.add('is-valid')
        motDePasseRequired.innerHTML='';
    }
    if (confiramtion.value =='' || motdepasse.value !== confiramtion.value) {
        confiramtion.classList.remove('is-valid')
        confiramtion.classList.add('is-invalid')
        if(confiramtion.value =='')
        {
            confirmationRequired.innerText='la confirmation de mot de passe est obligatoire';
        }

        if(motdepasse.value !== confiramtion.value)
        {
            confirmationRequired.innerHTML='non identique'
        }
    }
    else{
        confiramtion.classList.remove('is-invalid')
        confiramtion.classList.add('is-valid')
        confirmationRequired.innerHTML='';
    }


})

