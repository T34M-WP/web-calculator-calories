let weight = parseFloat(prompt("โปรดระบุน้ำหนัก"));
let height = parseFloat(prompt("โปรดระบุส่วนสูง"));
let age = parseFloat(prompt("โปรดระบุอายุ"));
let bmr;

function male(radio) {
    if (radio.checked) {
        bmr = (66 + (13.7 * weight) + (5 * height)) - (8 * age);
        // alert("ผู้ชาย BMR = " + bmr);
        return bmr;
    }
}

function female(radio) {
    if (radio.checked) {
        bmr = (655 + (9.6 * weight) + (8 * height)) - (4.7 * age);
        // alert("ผู้หญิง BMR = " + bmr);
        return bmr;
    }
}

function calculateBMR() {
    document.getElementById("bmr").textContent = "BMR = " + bmr.toFixed(0);
}

function handleSelection(select) {
    let selectedValue = select.value;
    if (selectedValue === "1") {
        // เรียกใช้ฟังก์ชันที่เกี่ยวข้องกับการไม่ออกกำลังกาย
        tdee = bmr * 1.2
        return tdee
    } else if (selectedValue === "2") {
        // เรียกใช้ฟังก์ชันที่เกี่ยวข้องกับการออกกำลังกายเบา ๆ
        tdee = bmr * 1.375
        return tdee
    } else if (selectedValue === "3") {
        // เรียกใช้ฟังก์ชันที่เกี่ยวข้องกับการออกกำลังกายปานกลาง
        tdee = bmr * 1.55
        return tdee
    } else if (selectedValue === "4") {
        // เรียกใช้ฟังก์ชันที่เกี่ยวข้องกับการออกกำลังกายหนัก
        tdee = bmr * 1.725
        return tdee
    } else if (selectedValue === "5") {
        // เรียกใช้ฟังก์ชันที่เกี่ยวข้องกับการออกกำลังกายหนักมาก
        tdee = bmr * 9
        return tdee
    }
}

function calculateTDEE() {
    document.getElementById("tdee").textContent = "TDEE = " + tdee.toFixed(0);
}


function lose() {
    lose = tdee - 200
    document.getElementById("lose").textContent = "หากคุณต้องการลดน้ำหนักคุณควรกิน " + lose.toFixed(0) + "-" + (lose.toFixed(0) - 100) + " Calories ต่อวัน";
    return lose
}

function gain() {
    gain = tdee + 200
    document.getElementById("gain").textContent = "หากคุณต้องการเพิ่มน้ำหนักคุณควรกิน " + gain.toFixed(0) + "-" + (parseFloat(gain.toFixed(0)) + 100) + " Calories ต่อวัน";
    return gain
}

function daily() {
    let qrt = prompt("โปรดระบุจำนวนอาหารที่กินไปในวันนี้")
    let sum = 0
    for (var i = 1; i <= qrt; i++) {

        let item_calories = prompt("แคลลอลี่ของอาหารอย่างที่ " + i)
        document.getElementById("calories-list").innerHTML += "แคลลอลี่ของอาหารอย่างที่ " + i + ": " + item_price + " Calories" + "<br>"

        sum = sum + parseInt(item_calories)



    }


    document.getElementById("result").innerHTML = "หากต้องการลดน้ำหนักคุณสามารถกินได้อีก " + (lose-sum).toFixed(0) + " Calories" + "<br>" +"หากต้องการเพิ่มน้ำหนักคุณสามารถกินได้อีก " + (gain-sum).toFixed(0) + " Calories" 
}
