document.getElementById('calculate').addEventListener('click', function(){
    const capital = document.getElementById('value').value;
    const taxa = (document.getElementById('fee').value) / 100;
    const periodo = document.getElementById('time').value;
    let typeJuros = document.getElementById('menu').value
    let total =  capital * (1 + taxa)**periodo;

    if (typeJuros == "simples") {
        total = capital * (taxa/100) * periodo;
    }


    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.', ','));

    document.getElementById('jurosType').innerHTML = typeJur + `aa`;
    console.log(typeJur)
});