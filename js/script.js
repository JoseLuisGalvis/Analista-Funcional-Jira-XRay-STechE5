// Función para mostrar el modal con contenido específico

$(document).ready(function () {
  $('[data-bs-toggle="modal"]').on("click", function () {
    var title = $(this).data("content");
    var modalId = "#" + title.replace(/\s+/g, "").toLowerCase();
    var content = $(this).data("content");

    // Oculta todos los modals
    $(".modal").modal("hide");

    // Muestra el modal correspondiente y carga el contenido
    $(modalId).modal("show");
    $(modalId + ".modal-body").html(content);
  });
});
