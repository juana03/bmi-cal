// membuat logika dan perhitungan pada kalkulator BMI
function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(1);
    var result = "";
    if (gender == "male") {
        if (bmi < 18.5) {
            result = "Berat Badan Kurang";
        } else if (bmi < 25) {
            result = "Berat Badan Normal";
        } else if (bmi < 30) {
            result = "Berat Badan Lebih";
        } else {
            result = "Berat Badan Obesitas";
        }
    } else {
        if (bmi < 18.5) {
            result = "Berat Badan Kurang";
        } else if (bmi < 24) {
            result = "Berat Badan Normal";
        } else if (bmi < 29) {
            result = "Berat Badan Berlebih";
        } else {
            result = "Berat Badan Obesitas";
        }
    }

    document.getElementById("result").innerHTML = "Body Mass Index (BMI) Anda" + "<br>" + "<h1>" + bmi + "</h1>" + "Anda Memiliki " + result + "<br>";

}
