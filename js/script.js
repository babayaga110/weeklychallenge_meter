const msgDisplay = document.getElementById('msg')
const btnEl = document.getElementById('connect')
const disBtnEL = document.getElementById('disconnect')
const scrimbaDisplay = document.querySelector('.link')
let num = 0;
let drop = true
addEventListener('change',render)
function render(){
    energy.value = input.value
}

btnEl.addEventListener('click',()=>{
    const timed = setInterval(chargingMood, 1000);
    disBtnEL.addEventListener('click',()=>{
        clearInterval(timed)
        msgDisplay.innerHTML =`Disconnected 😭`
        disBtnEL.style.display= 'none'
        btnEl.style.display ='block'
    })
});


function chargingMood(){
        btnEl.style.display= 'none'
        disBtnEL.style.display ='block'
        if(num < 100){
            num++
            if(num < 30){
                msgDisplay.innerHTML =`Battery low 😞`
            }else if(num < 70){
                msgDisplay.innerHTML = `Charging 😁`
            }else{
                msgDisplay.innerHTML ='Charging 😂'
            }
            input.value = num
            input.style.borderColor= 'green';
            render()
        if(drop){
            input.style.transform = 'scale(0.95)'
            drop = false
        }else{
            input.style.transform = 'scale(1)'
            drop = true
        }
        }else{
            msgDisplay.innerHTML = `Phone is Fully charged 🔋` 
            disBtnEL.style.display ='none'
            btnEl.style.display= 'block'
            scrimbaDisplay.style.display ='block'
        }
    }
