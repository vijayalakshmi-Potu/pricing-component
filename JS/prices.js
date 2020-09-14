let basicMonth="$19.99";
let basicYear="$199.99";
let professionalMonth ="$24.99";
let professionalYear ="$249.99";
let masterMonth ="$39.99";
let masterYear ="$399.99";
function changePrice(){
    if(document.getElementById("customSwitch1").checked){
        document.getElementById("basic").innerText=basicMonth;
        document.getElementById("professional").innerText=professionalMonth;
        document.getElementById("master").innerText=masterMonth;
        document.getElementById("viewPlan").innerText="Now you are viewing Monthly plans!"
    }
    else{
        document.getElementById("basic").innerText=basicYear;
        document.getElementById("professional").innerText=professionalYear;
        document.getElementById("master").innerText=masterYear;
        document.getElementById("viewPlan").innerText="Now you are viewing Annual plans!"
    }
}