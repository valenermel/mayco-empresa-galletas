async function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const response = await fetch('register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=${username}&password=${password}&role=${role}`
    });
    const data = await response.json();
    alert(data.message);

    // Si el registro es exitoso, iniciar sesión automáticamente
    if (data.message === 'Registro exitoso.') {
        await login();  // Llama a la función login para iniciar sesión
    }
}

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=${username}&password=${password}`
    });
    const data = await response.json();

    if (data.message === 'Inicio de sesión exitoso.') {
        alert(data.message);

        // Ocultar el contenedor de login y mostrar cambio de cuenta
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('changeAccountButton').style.display = 'block';

        // Mostrar el panel correspondiente según el rol del usuario
        if (data.role === 'employee') {
            document.getElementById('employeePanel').style.display = 'block';
            document.getElementById('adminPanel').style.display = 'none';
        } else if (data.role === 'admin') {
            document.getElementById('adminPanel').style.display = 'block';
            document.getElementById('employeePanel').style.display = 'none';
        }
    } else {
        alert(data.message);
    }
}

async function logout() {
    const response = await fetch('logout.php');
    const data = await response.json();
    alert(data.message);

    // Restaurar visibilidad de los campos de inicio de sesión y ocultar paneles
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('changeAccountButton').style.display = 'none';
    document.getElementById('employeePanel').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'none';
}

// Función para cambiar de cuenta, que simplemente cierra la sesión
function changeAccount() {
    logout();
}

async function registerMerchandiseStatus() {
    const status = prompt("Ingrese el estado de la mercadería:");
    // Aquí puedes enviar la información al servidor
    const response = await fetch('registerStatus.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `status=${status}`
    });
    const data = await response.json();
    alert(data.message);
}

async function registerTruckLocation() {
    const location = prompt("Ingrese la ubicación actual del camión:");
    // Aquí puedes enviar la información al servidor
    const response = await fetch('registerLocation.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `location=${location}`
    });
    const data = await response.json();
    alert(data.message);
}

async function reportTheft() {
    const incidentDetails = prompt("Ingrese detalles del robo:");
    // Aquí puedes enviar la información al servidor
    const response = await fetch('reportTheft.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `incidentDetails=${incidentDetails}`
    });
    const data = await response.json();
    alert(data.message);
}

async function viewTrucks() {
    const response = await fetch('viewTrucks.php');
    const data = await response.json();
    alert("Camiones: " + JSON.stringify(data.trucks));
}

async function superviseDeliveries() {
    const response = await fetch('superviseDeliveries.php');
    const data = await response.json();
    alert("Entregas: " + JSON.stringify(data.deliveries));
}

async function accessIncidentReports() {
    const response = await fetch('incidentReports.php');
    const data = await response.json();
    alert("Reportes de Incidentes: " + JSON.stringify(data.reports));
}
