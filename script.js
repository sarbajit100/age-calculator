//input
let InputDay = document.getElementById("day")
let InputMonth = document.getElementById('month')
let InputYear = document.getElementById('year')

//output
let YearResult = document.getElementById("yy")
let MonthResult = document.getElementById("mm")
let DayResult = document.getElementById("dd")

//submit
let form = document.querySelector('form')
form.addEventListener("submit", handleSubmit)
//Day calculator

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];

function validate() {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector("small").innerText = "this field is required.";
            validator = false;
        }else if(InputMonth.value > 12){
            InputMonth.style.borderColor = "red";
            InputMonth.parentElement.querySelector("small").innerText = "must be a valid month.";
            validator = false;
        }else if(InputDay.value > 31){
            InputDay.style.borderColor = "red";
            InputDay.parentElement.querySelector("small").innerText = "must be a valid day.";
            validator = false;
        }else{
            i.style.borderColor = "black";
            parent.querySelector("small").innerText = "";
            validator = true;
        }
    })
    return validator;
}

function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
        if (InputDay.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (InputMonth.value > month) {
            month = month + 12;
            year = year - 1;
        }

        const d = day - InputDay.value;
        const m = month - InputMonth.value;
        const y = year - InputYear.value;

        DayResult.innerHTML = d;
        MonthResult.innerHTML = m;
        YearResult.innerHTML = y;

    }
}
