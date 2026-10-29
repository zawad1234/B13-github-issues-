function loadData(){

  fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')

  .then(function(res){

 return res.json()


  })
  .then(function(data){

      const datas = data.data
      const container = document.getElementById('all-issues')
      container.innerHTML= "" 
      
              const open = document.getElementById('open')
      const Opencontainer = document.getElementById('open-container')
      const closeContainer =document.getElementById('close-container')
               const closed = document.getElementById('close') 
               const all = document.getElementById('all')

               const allcards = []
    
     for(let datum of datas){


let Label = ''
const labels = datum.labels
for(let label of labels){
       Label = Label+ `<span class="bg-amber-500 rounded" >${label}</span>`   

   
}
let statusImg = ''
if(datum.status==='open'){

    statusImg = "assets/Open-Status.png"
}
else{
    statusImg= "assets/Closed-Status.png"
    

}
let borderColor = ''
if(datum.status==='open'){
 borderColor = "border-green-400"
    
}
else{
    borderColor= "border-purple-400"
}




 const div = document.createElement('div') 

         div.innerHTML =`
            <div class=" bg-white flex justify-between w-[500px] rounded-2xl p-5 shadow-lg border-t-4 ${borderColor}">
            <div id="nav-con" class="">
                <img src="${statusImg}" alt="">
                <h2 class="text-xl font-bold mt-2.5">${datum.title}</h2>

                <p class="mt-2.5">${datum.description}</p>
                <div class="flex gap-4 mt-2.5">
                   ${Label}
                </div>

               <hr class="mt-3">
                <div class="flex justify-between mt-2.5">
               <div class="">
                <p>${datum.author}</p>
                <p>${datum.assignee}</p>
               </div>


               <div class="">
                <p>${datum.createdAt}</p>
                <p>${datum.updatedAt}</p>
               </div>
               </div>

            </div>

            <div>
                <span class="bg-red-400 rounded">${datum.priority}</span>
            </div>
               </div>




                
         `
         
         
         
         container.append(div) 
         allcards.push(div)

         

         open.addEventListener('click', function(){
           const container = document.getElementById('all-issues')
           const count = document.getElementById('number')

           container.classList.add('hidden') 

           closeContainer.classList.add('hidden')
         

           if(datum.status==='open'){
            Opencontainer.append(div)
            Opencontainer.classList.remove('hidden')
            count.innerText = Opencontainer.children.length 
              
           }
        
             
         })

         closed.addEventListener('click', function(){
                 
            const container = document.getElementById('all-issues')
           container.classList.add('hidden') 
           Opencontainer.classList.add('hidden')
            const count = document.getElementById('number')

           if(datum.status==='closed'){

            closeContainer.append(div)
            closeContainer.classList.remove('hidden')
            count.innerText = closeContainer.children.length 
           }
           

                       



         })
         
     all.addEventListener('click', function(){
             const count = document.getElementById('number')
             
                       
        for(let card of allcards){

            container.append(card) 
            container.classList.remove('hidden')
            count.innerText = container.children.length
        }



     })






        }




           
           




  })








}
loadData() 