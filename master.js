function _get(val) {
    calc.display.value += val
}
function _ac() {
    calc.display.value = ''
}
function _c() {
    calc.display.value = calc.display.value.slice(0, -1)
}
function _equal() {
    calc.display.value = eval(calc.display.value)
}
