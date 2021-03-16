


let result = document.getElementById("result");
let textarea = document.getElementById("Text");
let select = document.getElementById("select");


textarea.addEventListener("input", ()=>{
    makeresult();
})

select.addEventListener("change", ()=>{
    makeresult();
})

function makeresult() {
    if (select.value=="decode"){
result.value= window.atob(textarea.value);
    }else{
result.value= window.btoa(textarea.value);
    }
}