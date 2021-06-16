const inicio = document.querySelector("#inicio");
const calculo = document.querySelector("#calculo");
const container = document.querySelector(".container");



calculo.addEventListener("click", () => {
  var talla=document.getElementById("altura").value;
  var peso=document.getElementById("peso").value;
  if (talla.length==0 || peso.length==0){
    alert("ingrese los datos solicitados")
  }else{
    container.classList.add("sign-up-mode");
    calculoBMI();
    }
});


inicio.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function calculoBMI(){
  var talla=document.getElementById("altura").value;
  var peso=document.getElementById("peso").value;
  // parseInt(talla,10);
  // parseInt(peso,10);
  var resultado=peso/(talla*talla);
  // parseFloat(resultado,10);
  document.getElementById("talla").innerHTML = talla;
  document.getElementById("peso1").innerHTML = peso;
  document.getElementById("BMI").innerHTML = resultado.toFixed(2);

  clasificacionBMI(resultado);  
}

function clasificacionBMI(res){
  titulo.style.background="#5A6882"
  if (res>=18.5 && res<=24.9)
  {
    document.getElementById("categoria").innerHTML="Normal";
    document.getElementById("riesgo").innerHTML="Promedio";
    
    normal.style.background="#D48D99"
    So.style.background="#949FB1"
    OG1.style.background="#949FB1"
    OG2.style.background="#949FB1"
    OG3.style.background="#949FB1"
    //RECOMENDACION
    document.getElementById("recomendacion").innerHTML="No descuides tu alimentación e hidratación mantente saludable.";

  }else if (res>=25 && res<=29.9)
  {
    document.getElementById("categoria").innerHTML="Sobrepeso";
    document.getElementById("riesgo").innerHTML="Aumentado";
    So.style.background="#D48D99"
    normal.style.background="#949FB1"
    OG1.style.background="#949FB1"
    OG2.style.background="#949FB1"
    OG3.style.background="#949FB1"
    document.getElementById("recomendacion").innerHTML="Evita la ansiedad o estrés no lo pagues comiendo. <br> Adquiere productos frescos y duraderos";


  }else if (res>=30 && res<=34.9)
  {
    document.getElementById("categoria").innerHTML="Obesidad Grado 1";
    document.getElementById("riesgo").innerHTML="Moderado";
    OG1.style.background="#D48D99"
    So.style.background="#949FB1"
    normal.style.background="#949FB1"
    OG2.style.background="#949FB1"
    OG3.style.background="#949FB1"
    
    document.getElementById("recomendacion").innerHTML="Evita alimentos ultraprocesados, energéticos, precocinados. <br> Añade un poco de actividad física a tu rutina diaria, te ayudará a perder peso mas rápido.";

  }else if (res>=35 && res<=39.9)
  {
    document.getElementById("categoria").innerHTML="Obesidad Grado 2";
    document.getElementById("riesgo").innerHTML="Severo";
    OG2.style.background="#D48D99"
    OG1.style.background="#949FB1"
    So.style.background="#949FB1"
    normal.style.background="#949FB1"
    OG3.style.background="#949FB1"

    document.getElementById("recomendacion").innerHTML="Comer fibra te ayuda a prevenir comer demasiado, ya que te hace sentir saciado. <br> trata de caminar los 10 000 pasos al día para quemar 100 calorías extra ";

  }else if (res>=40)
  {
    document.getElementById("categoria").innerHTML="Obesidad Grado 3";
    document.getElementById("riesgo").innerHTML="Muy severo";
    OG3.style.background="#D48D99"
    OG2.style.background="#949FB1"
    OG1.style.background="#949FB1"
    So.style.background="#949FB1"
    normal.style.background="#949FB1"

    document.getElementById("recomendacion").innerHTML="Evitar el consumo de alcohol o reducirlo.<br> Gestionar el estrés para una mejor salud física y mental.<br> Mantenerse físicamente activo, a diario y cada uno a su manera.<br> Reduce el consumo de sal y de azúcar.";

  }
}