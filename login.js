// Declaro variables de botones 'registrarse' e 'ingresar'
let ingresarBtn = document.getElementById("ingresarBtn");
let registrarBtn = document.getElementById("registrarBtn");

// Creo evento onclick al boton 'ingresar'
ingresarBtn.onclick = function() {

    // Oculto input de 'email' y 'tel'
    document.getElementById("emailField").style.maxHeight = "0";
    document.getElementById('emailField').style.border = 'none';
    document.getElementById("telField").style.maxHeight = "0";
    document.getElementById('telField').style.border = 'none';

    // Cambio título a 'ingresar'
    document.getElementById("title").innerHTML = "Ingresar";

    // Cambio estilos a botones 'ingresar' y 'registrarse'
    registrarBtn.classList.add("disable");
    ingresarBtn.classList.remove("disable");

    // Muestro 'Olvidaste la contraseña?'
    document.getElementById("pass").classList.remove("dn");

    // Oculto validaciones de campos
    document.getElementById('userField').classList.remove('input-error');
    document.getElementById('userMark').classList.add('dn');
    document.getElementById('userError').classList.add('dn');
    document.getElementById('passwordField').classList.remove('input-error');
    document.getElementById('passwordMark').classList.add('dn');
    document.getElementById('passwordError').classList.add('dn');

    document.getElementById('user').setAttribute('name', 'userLogin');
    document.getElementById('password').setAttribute('name', 'passwordLogin');

    // Cambio id de 'user' y 'password'
    document.getElementById('userField').id = 'userLogin';
    document.getElementById('passwordField').id = 'passwordLogin';

    // Resetear formulario
    form.reset();
    campos['telefono'] = false;
    campos['email'] = false;

}

// Creo evento onclick al boton 'registrar'
registrarBtn.onclick = function() {

    // Muestro input 'tel' y 'email'
    emailField.style.maxHeight = "6rem";
    emailField.style.border = '1px solid #614ed9';
    telField.style.maxHeight = "6rem";
    telField.style.border = '1px solid #614ed9';

    // Cambio título a 'Registrarse'
    title.innerHTML = "Registrarse";

    // Cambio estilos a botones 'ingresar' y 'registrarse'
    ingresarBtn.classList.add("disable");
    registrarBtn.classList.remove("disable");

    // Oculto 'Olvidaste la contraseña?'
    pass.classList.add("dn");

    // Cambio id de 'user' y 'password'
    document.getElementById('userLogin').id = 'userField';
    document.getElementById('passwordLogin').id  = 'passwordField';

    // Cambio namefield de 'user' y 'password'
    document.getElementById('user').setAttribute('name', 'user');
    document.getElementById('password').setAttribute('name', 'password');

    campos['usuarioLogin'] = '';
    campos['passwordLogin'] ='';

    form.reset();
}

// Declaro variables para el formulario
const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
const expresiones = {
    telefono: /^\d{7,14}$/, // 7 a 14 números.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, //Letras, numeros, guion y guion bajo.
    password: /^.{4,12}$/ // 4 a 12 dígitos.
}

const campos = {
    telefono: false,
    correo: false,
    usuario: false,
    password: false,
    usuarioLogin: '',
    passwordLogin: ''
}

// Validacion de formulario
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "tel":
            if(expresiones.telefono.test(e.target.value)) {
                document.getElementById('telField').style.border = '1px solid #614ed9';
                document.getElementById('telMark').classList.add('dn');
                document.getElementById('telError').classList.add('dn');
                campos['telefono'] = true;
            } else {
                document.getElementById('telField').style.border = '1px solid red';
                document.getElementById('telMark').classList.remove('dn');
                document.getElementById('telError').classList.remove('dn');
                campos['telefono'] = false;
            }
        break;
        case "email":
            if(expresiones.correo.test(e.target.value)) {
                document.getElementById('emailField').style.border = '1px solid #614ed9';
                document.getElementById('emailMark').classList.add('dn');
                document.getElementById('emailError').classList.add('dn');
                campos['correo'] = true;
            } else {
                document.getElementById('emailField').style.border = '1px solid red';
                document.getElementById('emailMark').classList.remove('dn');
                document.getElementById('emailError').classList.remove('dn');
                campos['correo'] = false;
            }
        break;
        case "user":
            if(expresiones.usuario.test(e.target.value)) {
                document.getElementById('userField').classList.remove('input-error');
                document.getElementById('userMark').classList.add('dn');
                document.getElementById('userError').classList.add('dn');
                campos['usuario'] = true;
            } else {
                document.getElementById('userField').classList.add('input-error');
                document.getElementById('userMark').classList.remove('dn');
                document.getElementById('userError').classList.remove('dn');
                campos['usuario'] = false;
            }
        break;
        case 'userLogin':
            if (e.target.value === localStorage.getItem('usuario')) {
                campos['usuarioLogin'] = true;
            } else if (e.target.value === null || e.target.value === '') {
                campos['usuarioLogin'] = '';
            } else {
                campos['usuarioLogin'] = false;
            }
        break;
        case "password":
            if(expresiones.password.test(e.target.value)) {
                document.getElementById('passwordField').classList.remove('input-error');
                document.getElementById('passwordMark').classList.add('dn');
                document.getElementById('passwordError').classList.add('dn');
                campos['password'] = true;
            } else {
                document.getElementById('passwordField').classList.add('input-error');
                document.getElementById('passwordMark').classList.remove('dn');
                document.getElementById('passwordError').classList.remove('dn');
                campos['password'] = false;
            }
        break;
        case 'passwordLogin':
            if (e.target.value === localStorage.getItem('contraseña')) {
                campos['passwordLogin'] = true;
            } else if (e.target.value === '' || e.target.value === null) {
                campos['passwordLogin'] = '';
            } else {
                campos['passwordLogin'] = false;
            }
        break;
    }
};

// Al soltar la tecla o salir del campo, valida formulario
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if(campos.telefono && campos.correo && campos.usuario && campos.password) {
        alert('Registrado correctamente!');
        localStorage.setItem('usuario', user.value);
        localStorage.setItem('contraseña', password.value);
        console.log(localStorage.getItem('usuario'));
        console.log(localStorage.getItem('contraseña'));
        form.reset();
    } else if (campos.usuarioLogin && campos.passwordLogin) {
        window.location.href = 'reserva.html';
    } else if (campos.usuarioLogin === '' || campos.passwordLogin === '') {
        e.preventDefault();
    } else {
        alert('Ingrese sus datos nuevamente.');
    }
});

ingresarBtn.addEventListener('click', () => {

    // Oculto validacion de campo de 'tel'
    document.getElementById('telField').classList.remove('input-error');
    document.getElementById('telMark').classList.add('dn');
    document.getElementById('telError').classList.add('dn');

    // Oculto validacion de campo de 'email'
    document.getElementById('emailField').classList.remove('input-error');
    document.getElementById('emailMark').classList.add('dn');
    document.getElementById('emailError').classList.add('dn');

    // Oculto validacion de campo de 'user'
    document.getElementById('userLogin').classList.remove('input-error');
    document.getElementById('userMark').classList.add('dn');
    document.getElementById('userError').classList.add('dn');

    // Oculto validacion de campo de 'password'
    document.getElementById('passwordLogin').classList.remove('input-error');
    document.getElementById('passwordMark').classList.add('dn');
    document.getElementById('passwordError').classList.add('dn');
})