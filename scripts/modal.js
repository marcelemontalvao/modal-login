const btn = document.getElementById("btn")
const btnModal = document.getElementById("btn-modal")
const btnSend = document.querySelector(".btn")

btn.addEventListener("click", () => {
    const modal = document.querySelector(".container-modal")
    modal.style.display = "flex";
})

btnModal.addEventListener("click", () => {
    const modal = document.querySelector(".container-modal")
    modal.style.display = "none";
})

btnSend.addEventListener("click", () => {
    const modal = document.querySelector(".container-modal")
    const email = document.getElementById("input-email")
    if(email.value != 0) {
        modal.style.display = "none";
    }
})