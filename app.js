function showOption(option) {
    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "none";
    if (option === 1) {
        document.getElementById("option1").style.display = "block";
    } else if (option === 2) {
        document.getElementById("option2").style.display = "block";
    }
}

function convertMgToMl() {
    let miligramos = parseFloat(document.getElementById("mg").value);
    let kilogramos = parseFloat(document.getElementById("kg").value);
    let equivalente = parseFloat(document.getElementById("equivalent").value);

    if (isNaN(miligramos) || isNaN(kilogramos) || isNaN(equivalente)) {
        alert("Por favor ingrese todos los valores correctamente.");
        return;
    }

    let multiplicacion = miligramos * kilogramos;
    let conversion = multiplicacion / equivalente;

    document.getElementById("result1").innerText = "Al animal debe aplicarsele: " + conversion.toFixed(2) + "ml";
}

function convertGramsToMg() {
    let gramos = parseFloat(document.getElementById("grams").value);
    let mililitros = parseFloat(document.getElementById("ml").value);
    let miligramos = parseFloat(document.getElementById("mg2").value);
    let kilogramos = parseFloat(document.getElementById("kg2").value);

    if (isNaN(gramos) || isNaN(mililitros) || isNaN(miligramos) || isNaN(kilogramos)) {
        alert("Por favor ingrese todos los valores correctamente.");
        return;
    }

    let gramg = gramos * 1000;
    let mgaml = gramg / mililitros;
    let multiplicacion = miligramos * kilogramos;
    let conversion = multiplicacion / mgaml;

    document.getElementById("result2").innerText = "Al animal debe aplicarsele: " + conversion.toFixed(2) + "ml";
}


