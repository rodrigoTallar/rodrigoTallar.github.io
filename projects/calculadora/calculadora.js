function display(val) {
    document.getElementById("textval").value+=val
}

function evaluate() {
    alert("f")
    let x = document.getElementById("textval").value
    let y = eval(x)
    document.getElementById("textval").value = y
}

function clr() {
    document.getElementById("textval").value = ""
}