const usuarios = [
    {
        usuario: 'carlos@carlos.com',
        senha:'carlos123456'
    },
    {
        usuario: 'leticia@leticia.com',
        senha:'leticia654321'
    },
    {
        usuario: 'bruno@bruno.com',
        senha:'bruno987654'
    },
]
const fotografia = [
    {
        nome: 'Foto1',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto2',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto3',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto4',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto5',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto6',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto7',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto8',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto9',
        like: 0,
        deslike: 0,
    },
    
]

const modal = document.querySelector('.modal')
const btn = document.querySelector('#modal')
const fechar = document.querySelector('.cancelar')

btn.addEventListener('click', ()=>{
    modal.style.display = "block"
})
fechar.addEventListener('click', ()=>{
    modal.style.display = "none"
})

const btnCurtida = document.querySelectorAll('#btnCurtida');
const likeImg = document.querySelectorAll('#likeImg');
let isLiked = false;

btnCurtida.forEach((elemento, index) => {
  elemento.addEventListener('click', () => {
    isLiked = !isLiked;
    if (isLiked) {
      likeImg[index].src = './assets/icones/coracao-vermelho.svg';
    } else {
      likeImg[index].src = './assets/icones/coracao-branco.svg'; // Defina o caminho da imagem padrão quando não curtida
    }
  });
});


const dislike = document.querySelectorAll('#dislike')
const count = document.querySelectorAll('#count')
let countersArray = Array.from(count).map(() => 0)

dislike.forEach(function (elementos, index){
    elementos.addEventListener('click', ()=>{
            countersArray[index]++
            count[index].textContent= countersArray[index]
      
    })
})

const like = document.querySelectorAll('#like')
const countLike = document.querySelectorAll('#countLike')
let counterArray = Array.from(countLike).map(() => 0)

like.forEach(function (elementos, index){
    elementos.addEventListener('click', ()=>{
            counterArray[index]++
            countLike[index].textContent= counterArray[index]
      
    })
})