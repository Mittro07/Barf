/* Menu hamburgesa */
const $menu = document.getElementById('menu');
const $cerrar = document.getElementById('close');
const $nav = document.getElementById('nav');

$menu.addEventListener('click', () => {
    $nav.classList.add('visible');
    $menu.classList.add('hidden');
});

$cerrar.addEventListener('click', () => {
    $nav.classList.remove('visible');
    $menu.classList.remove('hidden');
});






/* Input range */
const $range = document.getElementById('peso');
const $pesoRange = document.getElementById('peso-range');

$pesoRange.TextContent = `${$range.value} Kg`;

$range.addEventListener('input', () => {
    $pesoRange.textContent = $range.value + ' kg';
});


/* Calculadora darf */
const $actividad = document.getElementById('actividad');
const $calcular = document.getElementById('calcular');
const $respuesta = document.getElementById('response');


$calcular.addEventListener('click', () => {
    if($actividad.value != 'Selecciona un nivel de actividad') {
        const $peso = parseFloat($range.value);
        if($actividad.value === 'baja') {
            const resultado = $peso * 0.02;
            $respuesta.textContent = `${resultado.toFixed(2)} Kg`;
        }
        if($actividad.value === 'media') {
            const resultado = $peso * 0.025;
            $respuesta.textContent = `${resultado.toFixed(2)} Kg`;
        }
        if($actividad.value === 'alta') {
            const resultado = $peso * 0.03;
            $respuesta.textContent = `${resultado.toFixed(2)} Kg`;
        }
    }
})


