// cada vez que se pulse el boton tenemos que obtener valores nuevos
const boton_calcular = document.querySelector("#button_calcular_problem");
const container_result_problem = document.querySelector(".container_result_problem");
const container_number = document.querySelector(".container_result_number");
boton_calcular.addEventListener("click",calcularProblem);

function calcularProblem(){
    // obtenemos los valores de los inputs
    let masa_arma = document.getElementById("masa_arma").value;
    let masa_bala = document.getElementById("masa_bala").value;
    let velocidad_bala = document.getElementById("velocidad_bala").value;

    // formula
    let valor_final = (-masa_bala * velocidad_bala)/masa_arma;
    container_result_problem.style.display="block";
    container_number.innerHTML = `EL RESULTADO ES: Vf = <strong>${valor_final.toFixed(2)} m/s</strong>`;
}