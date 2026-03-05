/* Nos aseguramos de que todo el HTML haya cargado primero
document.addEventListener('DOMContentLoaded', () => {
    
    // Capturamos el botón usando su ID
    const btnBuscar = document.getElementById('btn-buscar');

    // Le decimos al botón qué hacer cuando le hagan clic
    btnBuscar.addEventListener('click', () => {
        
        // Obtenemos los valores que el usuario eligió en las listas desplegables
        const ancho = document.getElementById('ancho').value;
        const perfil = document.getElementById('perfil').value;
        const rin = document.getElementById('rin').value;

        // Revisamos si el usuario llenó los 3 campos
        if (ancho && perfil && rin) {
            // Si están completos, mostramos un mensaje de éxito
            alert(`Buscando en inventario: Llantas medida ${ancho}/${perfil} R${rin}...\n¡En un sitio real aquí verías los resultados!`);
        } else {
            // Si falta alguno, le pedimos que complete la información
            alert('Por favor, selecciona el Ancho, el Perfil y el Rin para realizar la búsqueda.');
        }
    });
});*/