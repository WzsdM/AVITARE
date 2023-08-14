// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import{showMessage} from "./showMessage.js"
import{getDatabase,ref,set,child,update,remove} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCudkjXLezfl4cU9tZzVL7QghFIB46egmM",
  authDomain: "salferinversiones.firebaseapp.com",
  databaseURL: "https://salferinversiones.firebaseio.com",
  projectId: "salferinversiones",
  storageBucket: "salferinversiones.appspot.com",
  messagingSenderId: "499539526287",
  appId: "1:499539526287:web:c57319e0eb7dd54a99a6fa",
  measurementId: "G-TQSZ3R7NG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const form=document.getElementById('232130335455649');
const button=form['input_111'];
const date=new Date().toLocaleDateString();


// Guardar el objeto en Firebase

button.addEventListener('click',e =>{
    const leadID = Date.now().toString(36) + Math.random().toString(36).substr(2);

    if(form['first_105'].value!=""&&form['last_105'].value!=""
    &&form['input_112_full'].value!=""&&form['input_6'].value!=""
    &&form['Edad'].value!=""&&form['input_114'].value!=""&&form['input_116'].value!=""
    &&form['lite_mode_22'].value!=""&&form['input_22_timeInput'].value!=""
    &&form['input_117'].value!=""&&form['input_119'].value!=""&&form['input_120'].value!=""
    &&form['input_122'].value!=""&&form['input_123'].value!=""&&form['input_125'].value!=""
    &&form['input_126'].value!=""&&form['lite_mode_128'].value!=""&&form['input_129'].value!=""
    ){
        const db =getDatabase(app);
        set(ref(db, 'Avitare/NewLeads/' + leadID), {
            IngresoFechaHora: date,
            NombreCompleto: form['first_105'].value.toUpperCase()+" "+form['last_105'].value.toUpperCase(),
            Telefono: form['input_112_full'].value,
            Género: form['input_6'].value.toUpperCase(),
            Edad: form['Edad'].value.toUpperCase(),
            Ocupación: form['input_114'].value.toUpperCase(),
            EstadoLaboral: form['input_116'].value.toUpperCase(),
            FechaContacto: form['lite_mode_22'].value,
            HoraContacto: form['input_22_timeInput'].value,
            TipoContacto: form['input_117'].value.toUpperCase(),
            LugarResidencia: form['input_119'].value.toUpperCase(),
            EstadoProspecto: form['input_120'].value.toUpperCase(),
            Supervisor: form['input_122'].value.toUpperCase(),
            Asesor: form['input_123'].value.toUpperCase(),
            Comentarios: form['input_125'].value.toUpperCase(),
            ProyectoInmobiliario: form['input_126'].value.toUpperCase(),
            FechaProximaAccion: form['lite_mode_128'].value,
            Acción: form['input_129'].value.toUpperCase(),
        });
        showMessage('Cliente Registrado');
        window.location.reload();
    }else{
        showMessage('Faltan Datos','error');
    }

}); 