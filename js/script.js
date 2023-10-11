function konversi(){
    let satu = document.getElementById("input-field").value;

    let hasil = parseInt(satu) * 9/5 + 32;

    document.getElementById("result").innerHTML = " " + hasil;
    document.getElementById("kalkulasi").innerHTML = satu + "°C * (9/5) + 32 = " + hasil + "°F";
}

function resetAll(){
    document.getElementById("input-field").reset();
}