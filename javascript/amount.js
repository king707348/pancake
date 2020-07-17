/*const ulSalad = document.querySelector("#ulSalad")
const urlSalad = "javascript/salad.json"

axios.get(urlSalad).then(event=>{
    //console.log(event.data)
    const data = event.data
    for(let i in data){
        const pic = data[i].pic
        const name = data[i].name
        const content = data[i].content
        const price = data[i].price
        let qty = data[i].qty
        ulSalad.innerHTML +=`<li>
                            <img src="${pic}">
                            <div class="menu-txt">
                            <h4>${name}</h4> 
                            <p>${content}</p>
                            </div>
                            <div class="price">
                                <p>${price}</p>
                                <span class="qty">
                                    <p>Qty:${qty}</p>
                                    <i class="fas fa-plus-circle plus"></i>
                                    <i class="fas fa-minus-circle minus"></i>
                                </span>
                            </div>
                        </li>`
    }
}).catch(function(err){
        console.log(err)
    })  





const details = document.querySelector("#details")
let qty = document.querySelector("#qty")
let name = document.querySelector(".menu-txtx h4")
let price = document.querySelector(".price")

/*qty.addEventListener('click',function(e){
    let detail = e.target.children[0]
    let score = Number(detail.innerHTML)


    if(e.target.classList.contains("plus")){
        detail.innerHTML =  qty + 1
    }else if(e.target.classList.contains("minus")){
        detail.innerHTML =  qty - 1
    }
})*/



