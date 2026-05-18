const traducoes = {
    pt: {
        titulo: "<i>✨ Bem vindo ao meu espaço digital! ✨</i>",
        bio: "Sou <i>Bianca Senna</i>, tenho 29 anos, sou educadora. Atualmente, estou me aventurando   em um novo universo: o desenvolvimento web. Criei este espaço para colocar em prática tudo o    que venho estudando. Aqui, compartilho meus <i>diplomas, certificados, projetos</i> e as experiências que me trouxeram até esta nova fase da vida — um momento que me permite mimar a    minha criança interior e seguir meus sonhos. No futuro, espero que este espaço seja o registro  da minha transformação em uma profissional da área de tecnologia.<br>",
        
        title: "<i>O advogado</i>",
        a1: "<span>Introvertido</span><b>I</b>",
        a2: "<span>Intuitivo</span><b>N</b>",
        a3: "<span>Sentimental</span><b>F</b>",
        a4: "<span>Julgador</span><b>J</b>",
        a5: "<span>Turbulento</span><b>-T</b>",
        t1: "Empatia",
        t2: "Idealismo",
        t3: "Criatividade",
        t4: "Propósito",
        about: "Sobre mim:",
        me: "Busco significado e aprimorar tudo o que faço. Minha natureza INFJ-T me impulsiona a olhar além das linhas de código, unindo a sensibilidade para entender as necessidades humanas à disciplina da tecnologia. Busco sempre o equilíbrio perfeito entre estética e função, transformando cada projeto em uma oportunidade de criar conexões reais e interfaces que realmente facilitem a vida das pessoas."
    },
    en: {
        titulo: "<i>✨ Welcome to my digital space! ✨</i>",
        bio: "My name is <i>Bianca Senna</i>, 29 years old, and I am an educator. Currently, I'm venturing into a new universe: web development. I created this space to put all my knowledge into practice. Here, I share my <i>diplomas, certificates, projects</i> and the experiences that have led me to this new phase of my life — a time to nurture my inner child and follow my  dreams. I hope this space will document my development as a technology specialist in the future.<br>",

        title: "<i>The Laywer</i>",
        a1: "<span>Introverted</span><b>I</b>",
        a2: "<span>Intuitive</span><b>N</b>",
        a3: "<span>Felling</span><b>F</b>",
        a4: "<span>Judging</span><b>J</b>",
        a5: "<span>Turbulent</span><b>-T</b>",
        t1: "Empathy",
        t2: "Idealism",
        t3: "Creativity",
        t4: "Purpose",
        about: "About me:",
        me: "I seek meaning and to improve everything I do. My INFJ-T nature drives me to look beyond the lines of code, combining sensitivity to understand human needs with the discipline of technology. I always seek the perfect balance between aesthetics and function, transforming each project into an opportunity to create real connections and interfaces that truly make people's lives easier.",
    },
    de: {
        titulo: "<i>✨ Willkommen in meinem digitalen Raum! ✨</i>",
        bio: "Ich heiße <i>Bianca Senna</i>, Ich bin 29 Jahre alt und Pädagogin. Aktuell wage ich mich  in ein neues Universe: die Webentwicklung. Ich habe diesen Raum geschaffen, um all mein Wissen  in die Praxis umzusetzen. Hier teile ich meine <i>Diplome, Zertifikate, Projekte</i> und die Erfahrungen, die mich in diese neue Lebensphase geführt haben – eine Zeit, in der ich mein  inneres Kind wiederentdecken und meinen Träumen folgen kann. Ich hoffe, dass dieser Raum in Zukunft meine Entwicklung zur Technologieexpertin dokumentieren wird.<br>",
        title: "<i>The Laywer</i>",
        a1: "<span>Introvertiert</span><b>I</b>",
        a2: "<span>Intuitiv</span><b>N</b>",
        a3: "<span>Fühlend</span><b>F</b>",
        a4: "<span>Urteilend</span><b>J</b>",
        a5: "<span>Turbulent</span><b>-T</b>",
        t1: "Empathisch",
        t2: "Idealistisch",
        t3: "Kreativ",
        t4: "Zielstrebig",
        about: "Uber mich",
        me: "Ich suche nach Sinn und möchte alles, was ich tue, verbessern. Meine INFJ-T-Persönlichkeit treibt mich an, über den Tellerrand hinauszuschauen und menschliche Bedürfnisse mit der Disziplin der Technologie zu verbinden. Ich strebe stets nach der perfekten Balance zwischen Ästhetik und Funktion und nutze jedes Projekt als Chance, echte Verbindungen und Schnittstellen zu schaffen, die das Leben der Menschen tatsächlich erleichtern.",
    }
};

function trocarIdioma(idioma) {
    // Altera o título usando o ID 'welcome'
    const elementoTitulo = document.getElementById('welcome');
    // Altera a bio usando o ID 'bio' 
    const elementoBio = document.getElementById('bio');

    if (elementoTitulo && elementoBio) {
        elementoTitulo.innerHTML = traducoes[idioma].titulo;
        elementoBio.innerHTML = traducoes[idioma].bio;
    }
    const ids = ['title', 'a1', 'a2', 'a3', 'a4', 'a5', 't1', 't2', 't3', 't4', 'about', 'me'];
    
    ids.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento && traducoes[idioma][id]) {
            elemento.innerHTML = traducoes[idioma][id];
        }
    });
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