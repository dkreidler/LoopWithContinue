var input = document.querySelector('input');
var para = document.querySelector('p');
var btn = document.querySelector('button');

var num = input.value;

btn.addEventListener('click', function() {
    input.value = '';
    input.focus();
    for (var i = 0; i <= num; i++) {
        var sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot) {
            continue;
        }

        para.textContent += i + ' ';
    }
});