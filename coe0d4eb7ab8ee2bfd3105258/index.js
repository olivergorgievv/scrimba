let left = document.getElementById("left")
let right = document.getElementById("right")
let score = 0
let score2 = 0
function btn1() {
    score += 1
    left.textContent = score
} 
function btn2() {
    score += 2
    left.textContent = score
}
function btn3() {
    score += 3
    left.textContent = score
}
function btn11() {
    score2 += 1
    right.textContent = score2
}
function btn22() {
    score2 += 2
    right.textContent = score2
}
function btn33() {
    score2 += 3
    right.textContent = score2
}
function btnres() {
    right.textContent = 0
    left.textContent = 0 
    score = 0
    score2 = 0
}
    