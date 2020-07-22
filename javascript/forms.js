const form = document.forms[0]
const nameField = document.querySelector("#name")
const emailField = document.querySelector("#email")
const btn = document.querySelector(".btn")
console.log(nameField.textContent)
form.addEventListener("input",function(e){
    let doing = e.target
    let input = e.target.value
    if(doing.id === "email"){
        let feedback = emailField.nextElementSibling
        if(input.includes("@")){
            feedback.innerHTML = ""
            feedback.classList.add("text-danger","text-success")
        }else{           
            feedback.innerHTML = `not email form`
            feedback.classList.replace("text-danger")
        }
    }
})
btn.addEventListener("submit",function(){
    form.submit()
})


