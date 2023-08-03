import { signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import{auth} from "./firebase.js";
import{showMessage} from "./showMessage.js"
const loginForm= document.querySelector('#login-form');

loginForm.addEventListener('submit',async(e)=>{

e.preventDefault()
const email=loginForm['session_login'].value
const password = loginForm['session_password'].value

   try {
    const userCredentials = await signInWithEmailAndPassword(auth,email,password)
    showMessage("Ingreso Correcto")
    setTimeout( function() {  window.location.href = "../inicio/"; }, 2000 );    
   } catch (error) {
    
    if(error.code==="auth/wrong-password"){
        showMessage('Contraseña Incorrecta','error');
    }else if(error.code==="auth/user-not-found"){
        showMessage('Usuario no encontrado','error');
    }else if(error.code==="auth/invalid-email"){
        showMessage("Correo inválido",'error');
    }else{
        showMessage(error.message,'error');
    }
   }
}
);