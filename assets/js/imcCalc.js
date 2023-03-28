// IMC
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');

altura.addEventListener('input',  imcCalculate);
peso.addEventListener('input',  imcCalculate);

function imcCalculate() {
  const h = parseFloat(altura.value);
  const p = parseFloat(peso.value);

  if (!peso.value || !altura.value) {
    classResult.style.color = "#455a64"
    imcResult.textContent = 0
    return classResult.textContent = 0
  }

  const imc = p / (h ** 2);

  let classificacao = '';
  let color;
  if (imc < 18.5) {
    classificacao = 'Magreza';
    color = "#858228"
  } else if (imc < 25) {
    classificacao = 'Normal';
    color = "#117729"
  } else if (imc < 30) {
    classificacao = 'Sobrepeso';
    color = "#ff6a00"
  } else {
    classificacao = 'Obesidade';
    color = "red"
  }
  imcResult.textContent = imc.toFixed(2)
  classResult.textContent = classificacao
  classResult.style.color =  color
}
