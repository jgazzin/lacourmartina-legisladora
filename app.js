const btnTitulo =  document.querySelector('.titulo .btn')
const textoTitulo = document.querySelector('.texto-titulo')

const btnNota = document.querySelector('.texto .btn')
const textoNota = document.querySelectorAll('.texto-nota p')

btnTitulo.addEventListener('click', () => {
    copiarTexto(textoTitulo.innerText)

})

btnNota.addEventListener('click', ()=> {
    let nota = '';
    textoNota.forEach(parrafo => {
        nota += parrafo.innerHTML + '\n';
    });

    copiarTexto(nota)
})

function copiarTexto(elemento) {
    const texto = elemento;

    navigator.clipboard.writeText(texto)
      .then(() => {
        console.log('Texto copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar texto: ', err);
      });
  }

// descargar imagen
document.querySelector('.btn-img .btn').addEventListener('click', function() {
    let imagenUrl = document.querySelector('.imagen').src;
    var linkDescarga = document.createElement('a');

    linkDescarga.href = imagenUrl;
    linkDescarga.download = 'sesion-ml.jpg'; // Puedes cambiar el nombre del archivo aquí
    document.body.appendChild(linkDescarga);
    linkDescarga.click();
    document.body.removeChild(linkDescarga);
});

