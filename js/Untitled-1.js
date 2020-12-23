
function showChat() {
    let btn = document.getElementsByClassName('popup--button--left')[0]
    let contacts = document.getElementsByClassName('popup--chat')[0]
    btn.style.display = "none"
    contacts.style.display = "block"
}

function hideChat() {
    let btn = document.getElementsByClassName('popup--button--left')[0]
    let contacts = document.getElementsByClassName('popup--chat')[0]
    btn.style.display = "block"
    contacts.style.display = "none"
}

function sendMessage() {
    let message = document.getElementsByClassName('popup--chat__input')[0]
    if (message.value != '') {
        createMessage(message.value)
    }

    let adjectives = ["Вкусный", "Горький", "Сладкий"]
    let nouns = ["чай", "кофе"]
    let verbs = ["пьют", "выливают", "заваривают"]

    createMessage(rand(adjectives) + ' ' + rand(nouns) + ' ' + rand(verbs))    
}

function rand(items) {
    return items[items.length * Math.random() | 0]
}

function createMessage(text) {
    let list = document.getElementsByClassName('popup--chat__list')[0]

    let newItem = document.createElement("div")
    newItem.classList.add("popup--chat__item")

    let newTextItem = document.createElement("p")
    newTextItem.classList.add("popup--chat__item__text")
    newTextItem.innerHTML = text
    
    let newCloseButton = document.createElement("button")
    newCloseButton.classList.add("popup--chat__item__close")
    newCloseButton.onclick = function() {
        newItem.remove()
    }
    newCloseButton.innerHTML = "X"

    
    newItem.appendChild(newTextItem)
    newItem.appendChild(newCloseButton)

    list.appendChild(newItem)
    list.scrollTop = list.scrollHeight
}
