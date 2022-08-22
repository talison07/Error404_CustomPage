const button = document.querySelector(".button")
const done = document.querySelector(".done")
const text = document.querySelector(".button_text")

button.addEventListener("click", function(){

    button.classList.add("button_clicked")
    done.classList.add("done_clicked")
    text.classList.add("text_clicked")

})
