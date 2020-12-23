function quicksort(items, left, right) {
    let pivot = items[(left + (right - left) / 2) | 0]

    let i = left
    let j = right

    while (i <= j) {
        while (items[i] < pivot) 
            i++

        while (items[j] > pivot)
            j--

        if (i <= j) {
            temp = items[i]
            items[i] = items[j]
            items[j] = temp

            i++
            j--
        }
    }

    if (left < j)
        quicksort(items, left, j)

    if (right > i)
        quicksort(items, j + 1, right)
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function quicksortExample() {
    let items = []

    for (let i = 0; i < 1000; i++) {
        items.push(randomInteger(1, 100000))
    }
    
    console.log(items)
    quicksort(items, 0, items.length - 1)
    console.log(items)
}

function tags() {
    let tags = [
        "a",
        "abbr",
        "acronym",
        "address",
        "applet",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "basefont",
        "bdi",
        "bdo",
        "bgsound",
        "big",
        "blink",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "center",
        "cite",
        "code",
        "col",
        "colgroup",
        "content",
        "data",
        "datalist",
        "dd",
        "decorator",
        "del",
        "details",
        "dfn",
        "dir",
        "div",
        "dl",
        "dt",
        "element",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "font",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "isindex",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "listing",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "nobr",
        "noframes",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "plaintext",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "shadow",
        "small",
        "source",
        "spacer",
        "span",
        "strike",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "tt",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "xmp"
    ]

    let res = {}

    for (let tag of tags) {
        let count = document.getElementsByTagName(tag).length
        if (count > 0) {
            res[tag] = count
        }
    }

    console.log(res)
}

function main() {
    window.onload = function() {
        quicksortExample()
        tags()
    }
}

main()

function showContacts() {
    let btn = document.getElementsByClassName('popup--button--right')[0]
    let contacts = document.getElementsByClassName('popup--contacts')[0]
    btn.style.display = "none"
    contacts.style.display = "block"
}

function hideContacts() {
    let btn = document.getElementsByClassName('popup--button--right')[0]
    let contacts = document.getElementsByClassName('popup--contacts')[0]
    btn.style.display = "block"
    contacts.style.display = "none"
}

function leftArrow() {
    let scroll = document.getElementsByClassName('articles__projects__content__list')[0]
    scroll.scrollLeft = 0
}

function rightArrow() {
    let scroll = document.getElementsByClassName('articles__projects__content__list')[0]
    scroll.scrollLeft = 1000
}

function imageClick(elem) {
    if (elem.src.includes("ii1")) {
        elem.src = "img/ii2.png"
    } else {
        elem.src = "img/ii1.png"
    }
}

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