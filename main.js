let input =document.querySelector('.input')
let afficher =document.querySelector('.afficher')
let btn =document.querySelector('.btn')

let checkboxInput =document.querySelector('.checkboxInput')

let lists=[]

function todo() {
    btn.addEventListener('click',()=>{
        if (input.value==='') return 
        
        afficher.innerHTML=''
        // console.log(input.value.trim());
        lists.push(input.value.trim())
        for (let i = 0; i < lists.length; i++) {

         afficher.innerHTML +=`
         <div class="resulte">
                     <input type="checkbox" class="eraser" >
                 
                     <p class='para'>${lists[i]}</p>
                 
                     <button class='del'>del</button>
                 
             
             </div>
         `
     }
     
// console.log(lists);
     input.value=''
     checkBox()
     supprimer()
    })
}
todo()

function checkBox() {
    let checkbox =document.querySelectorAll('.eraser')
    let para =document.querySelector('.para')

    checkbox.forEach(box=>{
        box.addEventListener('click',()=>{
          
            if(box.checked){
   

            box.nextElementSibling.style.textDecoration='line-through';
        }else{

            box.nextElementSibling.style.textDecoration='none';
        }
        })
    })

}

function supprimer() {
    let dels= document.querySelectorAll('.del')
    dels.forEach(del=>{
        del.addEventListener('click',()=>{
            del.parentElement.style.display='none'
        
        })

    })

}

 

    
