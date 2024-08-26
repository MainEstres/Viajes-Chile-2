document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

function addAlert() {
    const alertContainer = document.getElementById('alerts');
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-custom';
    alertDiv.innerHTML = `
      <div class="alert-custom-header">Mesaje enviado correctamente</div>
      Su mensaje ha sido recibido satisfactoriamente por mi, en cuanto tenga tiempo le enviare mi respuesta.
    `;
    alertContainer.appendChild(alertDiv);
  
    setTimeout(() => {
      alertDiv.remove();
    }, 4000); // La alerta desaparecerá después de 3 segundos
  }