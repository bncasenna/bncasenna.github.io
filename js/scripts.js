const traducoes = {
    pt: {
        titulo: "<i>✨ Bem vindo ao meu espaço digital! ✨</i>",
        bio: "Sou <i>Bianca Senna</i>, tenho 29 anos, sou educadora. Atualmente, estou me aventurando   em um novo universo: o desenvolvimento web. Criei este espaço para colocar em prática tudo o    que venho estudando. Aqui, compartilho meus <i>diplomas, certificados, projetos</i> e as    experiências que me trouxeram até esta nova fase da vida — um momento que me permite mimar a    minha criança interior e seguir meus sonhos. No futuro, espero que este espaço seja o registro  da minha transformação em uma profissional da área de tecnologia.<br>"
    },
    en: {
        titulo: "<i>✨ Welcome to my digital space! ✨</i>",
        bio: "My name is <i>Bianca Senna</i>, 29 years old, and I am an educator. Currently, I'm    venturing into a new universe: web development. I created this space to put all my knowledge    into practice. Here, I share my <i>diplomas, certificates, projects</i> and the experiences     that have led me to this new phase of my life — a time to nurture my inner child and follow my  dreams. I hope this space will document my development as a technology specialist in the future.<br>"
    },
    de: {
        titulo: "<i>✨ Willkommen in meinem digitalen Raum! ✨</i>",
        bio: "Ich heiße <i>Bianca Senna</i>, Ich bin 29 Jahre alt und Pädagogin. Aktuell wage ich mich  in ein neues Universe: die Webentwicklung. Ich habe diesen Raum geschaffen, um all mein Wissen  in die Praxis umzusetzen. Hier teile ich meine <i>Diplome, Zertifikate, Projekte</i> und die    Erfahrungen, die mich in diese neue Lebensphase geführt haben – eine Zeit, in der ich mein  inneres Kind wiederentdecken und meinen Träumen folgen kann. Ich hoffe, dass dieser Raum in     Zukunft meine Entwicklung zur Technologieexpertin dokumentieren wird.<br>"
    }
};

function trocarIdioma(idioma) {
    // Altera o título usando o ID 'welcome' do seu HTML
    const elementoTitulo = document.getElementById('welcome');
    // Altera a bio usando o ID 'bio' do seu HTML
    const elementoBio = document.getElementById('bio');

    if (elementoTitulo && elementoBio) {
        elementoTitulo.innerHTML = traducoes[idioma].titulo;
        elementoBio.innerHTML = traducoes[idioma].bio;
    }
}
trocarIdioma('pt');

const imagens = document.querySelectorAll('.gallery img'); 
const modal = document.getElementById('modal');
const modalImg = document.querySelector('#modal img');
const closeImg = document.querySelector('.btnClose');

imagens.forEach(imagem =>{
    imagem.addEventListener('click', () =>{
        const imgSelect = imagem.src;
        modalImg.src = imgSelect;
        
        modal.style.display = 'flex';
        closeImg.style.display = 'block';
    })
});

closeImg.addEventListener('click', ()=>{
        closeImg.style.display = 'none';
        modal.style.display = 'none';
    })

modal.addEventListener('click', (event)=>{
    if(event.target === modal){
        modal.style.display = 'none';
        closeImg.style.display = 'none';
    }
})