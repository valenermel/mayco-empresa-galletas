// Manejar inicio de sesión
document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const result = await response.json();
    if (result.success) {
        alert('Has iniciado sesión correctamente.');
        document.getElementById('auth').style.display = 'none';
        document.getElementById('delivery').style.display = 'block';
        document.getElementById('logout-section').style.display = 'block'; // Mostrar sección de cerrar sesión
    } else {
        alert(result.message);
    }
});

// Manejar registro
document.getElementById('register-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const profession = document.getElementById('profession').value;

    const response = await fetch('register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, profession }),
    });

    const result = await response.json();
    alert(result.message);

    if (result.success) {
        document.getElementById('register').style.display = 'none';
        document.getElementById('auth').style.display = 'none';
        document.getElementById('delivery').style.display = 'block';
        document.getElementById('logout-section').style.display = 'block'; // Mostrar sección de cerrar sesión
    }
});

// Manejar el botón de crear cuenta
document.getElementById('show-register-btn').addEventListener('click', () => {
    document.getElementById('auth').style.display = 'none';
    document.getElementById('register').style.display = 'block';
});

// Manejar el botón de cancelar registro
document.getElementById('cancel-register-btn').addEventListener('click', () => {
    document.getElementById('register').style.display = 'none';
    document.getElementById('auth').style.display = 'block';
});

// Manejar el cierre de sesión
document.getElementById('logout-btn').addEventListener('click', async () => {
    const response = await fetch('logout.php', {
        method: 'POST',
    });

    const result = await response.json();
    if (result.success) {
        alert('Has cerrado sesión correctamente.');
        document.getElementById('delivery').style.display = 'none';
        document.getElementById('auth').style.display = 'block';
        document.getElementById('logout-section').style.display = 'none'; // Ocultar sección de cerrar sesión
    } else {
        alert('Error al cerrar sesión.');
    }
});

document.getElementById("delivery-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío normal del formulario

    const deliveryId = document.getElementById("delivery-id").value;
    const status = document.querySelector("input[name='status']:checked"); // Obtiene el botón de radio seleccionado
    const additionalInfo = document.getElementById("additional-info").value;

    if (!status) {
        alert("Debes seleccionar un estado.");
        return;
    }

    fetch("reportDelivery.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            delivery_id: deliveryId,
            status: status.value, // Solo un valor, ya que es un radio button
            additional_info: additionalInfo
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.message);
            document.getElementById("delivery-form").reset(); // Limpiar el formulario
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error("Error:", error));
});