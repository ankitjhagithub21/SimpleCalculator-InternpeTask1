const display = document.getElementById('display')
const buttonsContainer = document.getElementById('buttons-container')
const arr = [1,2,3,4,5,6,7,8,9,0,'+','-','x','/','C','=']

arr.forEach((ele)=>{
    let button = document.createElement('button')
    button.textContent=ele;
    buttonsContainer.appendChild(button)

})

document.querySelectorAll('button').forEach((btn)=>{
    btn.addEventListener('click',()=>{
        
        if(btn.textContent==="C"){
            display.value=""
        }else if(btn.textContent === "="){
            let res = eval(display.value)
            display.value=res;
        }else if(btn.textContent=== "x"){
            display.value+='*';
        }else{
            display.value+=btn.textContent
        }
    })
})