// Blog Expand Function (COMMON FUNCTION: 3)

function uttorDekhao(ques) {
    document.getElementById(ques).classList.toggle('hidden');
}

document.getElementById('proshno1').addEventListener('click', function() {
    uttorDekhao('uttor1');
})

document.getElementById('proshno2').addEventListener('click', function() {
    uttorDekhao('uttor2');
})

document.getElementById('proshno3').addEventListener('click', function() {
    uttorDekhao('uttor3');
})

document.getElementById('proshno4').addEventListener('click', function() {
    uttorDekhao('uttor4');
})