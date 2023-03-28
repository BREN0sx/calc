const JurosSimples = document.getElementById("simples")
const JurosCompostos = document.getElementById("compostos")
const capital = document.getElementById('value');
const taxa = document.getElementById('fee');
const tempo = document.getElementById('time');

capital.addEventListener('input',  jurosCalculate);
taxa.addEventListener('input',  jurosCalculate);
tempo.addEventListener('input',  jurosCalculate);
JurosSimples.addEventListener('click', jurosCalculate);
JurosCompostos.addEventListener('click', jurosCalculate);

function jurosCalculate() {
  const initialValue = parseFloat(capital.value);
  const interestRate = parseFloat(taxa.value) / 100;
  const months = parseFloat(tempo.value);

  if (isNaN(initialValue) || isNaN(interestRate) || isNaN(months)) {
    ciTotal.textContent = "R$ 0,00"
    return ciInterestGain.textContent = "R$ 0,00"
  }

  if (JurosSimples.checked) {
    const simpleInterest = initialValue * interestRate * months;
    const totalAmount = initialValue + simpleInterest;
    ciTotal.textContent = ("R$ " + totalAmount.toFixed(2).replace('.', ','));
    ciInterestGain.textContent = ("R$ " + simpleInterest.toFixed(2).replace('.', ','));
  } else {
    const compoundInterest = initialValue * Math.pow(1 + interestRate, months) - initialValue;
    const totalAmount = initialValue + compoundInterest;
    ciTotal.textContent = ("R$ " + totalAmount.toFixed(2).replace('.', ','));
    ciInterestGain.textContent = ("R$ " + compoundInterest.toFixed(2).replace('.', ','));
  }
}