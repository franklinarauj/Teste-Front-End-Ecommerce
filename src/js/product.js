var dots = document.querySelector('.dots');
var qntd = document.querySelectorAll('.slides .image');
var active = 0;
var imagem = document.getElementById('active');
var next = document.getElementById('next')
var prev = document.getElementById('prev')

for(let i=0; i < qntd.length; i++) {
    var div = document.createElement('div')
    div.id = i
    dots.appendChild(div)
}
document.getElementById('0').classList.add('imgActive')

var pos = document.querySelectorAll('.dots div')

for(let i=0; i < pos.length; i++) {
    pos[i].addEventListener('click', () => {
        active = pos[i].id
        slide()
    })
}

prev.addEventListener('click', () => {
    active--
    slide()
})

next.addEventListener('click', () => {
    active++
    slide()
})

function slide() {
    if (active >= qntd.length) {
        active = 0
    }
    else if (active < 0) {
        active = qntd.length-1
    }
    document.querySelector('.imgActive').classList.remove('imgActive')
    imagem.style.marginLeft = -512*active+'px'
    document.getElementById(active).classList.add('imgActive')
}

slide()