const last = 0 
let countEl = document.getElementById("count-el");
let total = document.getElementById("total")
let count = 0

function increase() {
    count = count + 1
    countEl.innerHTML = count
}

function decrease() {
    count = count - 1
    countEl.innerHTML = count
}

function saving() {
      total.innerHTML += count + "  -  "
      countEl.innerHTML = 0 
      count = 0
}

