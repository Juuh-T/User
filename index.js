// Faz os checkboxes funcionarem como se fossem radio buttons
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(cb => {
    cb.addEventListener("change", function() {
        if (this.checked) {
            checkboxes.forEach(other => {
                if (other !== this) {
                    other.checked = false; // desmarca os outros
                }
            });
        }
    });
});

document.getElementById("formAcesso").addEventListener("submit", function(event) {
    event.preventDefault();

    const cadastro = document.getElementById("cadastro").checked;
    const login = document.getElementById("login").checked;

    if (cadastro) {
        window.location.href = "cadastro.html";
    } else if (login) {
        window.location.href = "login.html";
    } else {
        alert("Selecione uma opção para continuar!");
    }
});
