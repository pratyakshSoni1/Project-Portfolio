window.onload = function(){
    var x = document.querySelectorAll('#LogsSection div')
    x[0].textContent = "Screen Height: " + screen.availHeight
    x[1].textContent = "Screen Width: " + screen.availWidth

}