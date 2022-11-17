// Get the modal
let modal = document.getElementById("modal");
let modalImg= document.getElementById("modalImg")
let closeBtn = document.getElementById("closeBtn")


closeBtn.addEventListener("click", closeModal)



function showModal(comp){
    let x = comp.id
    modal.classList.add("showModal")
    modalImg.classList.add(`${x}`)
    
    
}
function closeModal(){
    modal.classList.remove("showModal")
    modalImg.className = "modalImg"
}

