          (function(){
            const ul = document.querySelector("#ul")
            const url = "/pancake_manor/javascript/pancakeMenu.json"
            
            axios.get(url).then(event=>{
                console.log(event.data)
                const data = event.data
                for(let i in data){
                    console.log(data[i].name)
                    let pic = data[i].pic
                    let name = data[i].name
                    ul.innerHTML +=`<li>
                                        <img src="${pic}">
                                        <div class="menu-txt">
                                            <h4>${name}</h4>
                                        </div>
                                    </li>`
                }
            })
        })

