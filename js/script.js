const contadorVisitas = document.getElementById("contadorVisitas");
const btnReestablecer = document.getElementById("btnReestablecer");

let visitas = localStorage.getItem("visitas");

if (!visitas) {
    visitas = 0;
}

visitas = Number(visitas);
visitas++;

contadorVisitas.textContent = visitas;
localStorage.setItem("visitas", visitas);

btnReestablecer.addEventListener("click", () => {
    localStorage.setItem("visitas", 0);
    contadorVisitas.textContent = 0;
});
