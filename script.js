let slideIndex = 0;
let slides = [];
let isPlaying = false;
let slideInterval;
let tempoPorSlide;
let tempoAbertura = 2;
let avancoTimeout;
let musicaAtual = 0;

const musica1 = document.getElementById('musica1');
const musica2 = document.getElementById('musica2');
const musica3 = document.getElementById('musica3');
const aplausos = document.getElementById('aplausos');
const overlay = document.getElementById('startOverlay');

const musicas = [musica1, musica2, musica3];

// Se\u00e7&#245;es tem\u00e1ticas organizadas por etapas da vida
const secoes = [
    {
        titulo: "Inf\u00e2ncia",
        subtitulo: "O come\u00e7o de tudo",
        pasta: "fotos/Infancia_1",
        fotoInicial: "foto_Infancia_Inicial.jpg",
        fotos: [
            "foto_Infancia_1.jpg",
            "foto_Infancia_2.jpg",
            "foto_Infancia_3.jpg",
            "foto_Infancia_4.jpg",
            "foto_Infancia_5.jpg",
            "foto_Infancia_6.jpg"
        ]
    },
    {
        titulo: "O In\u00edcio",
        subtitulo: "Formando o lar",
        pasta: "fotos/O_inicio_2",
        fotoInicial: "foto_Inicio_Inicial.jpg",
        fotos: [
            "foto_Inicio_1.jpg",
            "foto_Inicio_2.jpg",
            "foto_Inicio_3.jpg",
            "foto_Inicio_4.jpg",
            "foto_Inicio_5.jpg"
        ]
    },
    {
        titulo: "Irm\u00e3os",
        subtitulo: "La\u00e7os de sangue",
        pasta: "fotos/Irmaos_3",
        fotoInicial: "foto_Irmaos_Inicial.jpg",
        fotos: [
            "foto_Irmaos_1.jpg",
            "foto_Irmaos_2.jpg",
            "foto_Irmaos_3.jpg",
            "foto_Irmaos_4.jpg",
            "foto_Irmaos_5.jpg",
            "foto_Irmaos_6.jpg",
            "foto_Irmaos_7.jpg",
            "foto_Irmaos_8.jpg",
            "foto_Irmaos_9.jpg",
            "foto_Irmaos_10.jpg",
            "foto_Irmaos_11.jpg"
        ]
    },
    {
        titulo: "Saudades",
        subtitulo: "Pessoas Inesquec\u00edveis",
        pasta: "fotos/Saudades_4",
        fotoInicial: "foto_Saudade_Inicial.jpg",
        fotos: [
            "foto_Saudade_1.jpg",
            "foto_Saudade_2.jpg",
            "foto_Saudade_3.jpg",
            "foto_Saudade_4.jpg",
            "foto_Saudade_5.jpg",
            "foto_Saudade_6.jpg",
            "foto_Saudade_7.jpg",
            "foto_Saudade_8.jpg",
            "foto_Saudade_9.jpg",
            "foto_Saudade_10.jpg",
            "foto_Saudade_11.jpg"
        ]
    },
    {
        titulo: "Meu Amor",
        subtitulo: "O companheiro de vida",
        pasta: "fotos/Marido_5",
        fotoInicial: "foto_Marido_Inicial.jpg",
        fotos: [
            "foto_Marido_1.jpg",
            "foto_Marido_2.jpg",
            "foto_Marido_3.jpg",
            "foto_Marido_4.jpg",
            "foto_Marido_5.jpg",
            "foto_Marido_6.jpg",
            "foto_Marido_7.jpg",
            "foto_Marido_8.jpg",
            "foto_Marido_9.jpg",
            "foto_Marido_10.jpg",
            "foto_Marido_11.jpg",
            "foto_Marido_12.jpg",
            "foto_Marido_13.jpg",
            "foto_Marido_14.jpg"
        ]
    },
    {
        titulo: "Meus Filhos",
        subtitulo: "Nossa maior b\u00ean\u00e7\u00e3o",
        pasta: "fotos/Filhos",
        fotoInicial: "foto_Filhos_Inicial.jpg",
        fotos: [
            "foto_Filhos_1.jpg",
            "foto_Filhos_2.jpg",
            "foto_Filhos_3.jpg",
            "foto_Filhos_4.jpg",
            "foto_Filhos_5.jpg",
            "foto_Filhos_6.jpg",
            "foto_Filhos_7.jpg",
            "foto_Filhos_8.jpg",
            "foto_Filhos_9.jpg",
            "foto_Filhos_10.jpg",
            "foto_Filhos_11.jpg",
            "foto_Filhos_12.jpg",
            "foto_Filhos_13.jpg",
            "foto_Filhos_14.jpg",
            "foto_Filhos_15.jpg",
            "foto_Filhos_16.jpg",
            "foto_Filhos_18.jpg",
            "foto_Filhos_19.jpg",
            "foto_Filhos_20.jpg",
            "foto_Filhos_21.jpg",
            "foto_Filhos_22.jpg",
            "foto_Filhos_23.jpg",
            "foto_Filhos_24.jpg"
        ]
    },
    {
        titulo: "Netos",
        subtitulo: "O fruto do amor",
        pasta: "fotos/Netos",
        fotoInicial: "foto_Netos_Inicial.jpg",
        fotos: [
            "foto_Netos_1.jpg",
            "foto_Netos_2.jpg",
            "foto_Netos_3.jpg",
            "foto_Netos_4.jpg",
            "foto_Netos_5.jpg",
            "foto_Netos_6.jpg",
            "foto_Netos_7.jpg",
            "foto_Netos_8.jpg",
            "foto_Netos_9.jpg",
            "foto_Netos_10.jpg",
            "foto_Netos_11.jpg",
            "foto_Netos_12.jpg",
            "foto_Netos_13.jpg",
            "foto_Netos_14.jpg",
            "foto_Netos_15.jpg",
            "foto_Netos_16.jpg",
            "foto_Netos_17.jpg",
            "foto_Netos_18.jpg",
            "foto_Netos_19.jpg",
            "foto_Netos_20.jpg",
            "foto_Netos_21.jpg",
            "foto_Netos_22.jpg",
            "foto_Netos_23.jpg",
            "foto_Netos_24.jpg",
            "foto_Netos_25.jpg",
            "foto_Netos_26.jpg",
            "foto_Netos_27.jpg",
            "foto_Netos_29.jpg",
            "foto_Netos_30.jpg",
            "foto_Netos_31.jpg",
            "foto_Netos_32.jpg",
            "foto_Netos_33.jpg",
            "foto_Netos_34.jpg",
            "foto_Netos_35.jpg",
            "foto_Netos_36.jpg",
            "foto_Netos_37.jpg",
            "foto_Netos_38.jpg",
            "foto_Netos_39.jpg",
            "foto_Netos_40.jpg",
            "foto_Netos_41.jpg",
            "foto_Netos_42.jpg",
            "foto_Netos_43.jpg",
            "foto_Netos_44.jpg",
            "foto_Netos_45.jpg",
            "foto_Netos_46.jpg",
            "foto_Netos_47.jpg",
            "foto_Netos_48.jpg",
            "foto_Netos_49.jpg",
            "foto_Netos_50.jpg",
            "foto_Netos_51.jpg"
        ]
    },
    {
        titulo: "Sobrinhos",
        subtitulo: "Amor de tia",
        pasta: "fotos/Sobrinhos",
        fotoInicial: "foto_Sobrinhos_Inicial.jpg",
        fotos: [
            "foto_Sobrinhos_1.jpg",
            "foto_Sobrinhos_2.jpg",
            "foto_Sobrinhos_3.jpg",
            "foto_Sobrinhos_4.jpg",
            "foto_Sobrinhos_5.jpg"
        ]
    },
    {
        titulo: "Amigos",
        subtitulo: "Irm\u00e3os escolhidos",
        pasta: "fotos/Amigos",
        fotoInicial: "foto_Amigos_Inicial.jpg",
        fotos: [
            "foto_Amigos_1.jpg",
            "foto_Amigos_2.jpg",
            "foto_Amigos_3.jpg",
            "foto_Amigos_4.jpg",
            "foto_Amigos_5.jpg",
            "foto_Amigos_6.jpg",
            "foto_Amigos_7.jpg",
            "foto_Amigos_8.jpg",
            "foto_Amigos_9.jpg",
            "foto_Amigos_10.jpg",
            "foto_Amigos_11.jpg",
            "foto_Amigos_12.jpg",
            "foto_Amigos_13.jpg",
            "foto_Amigos_14.jpg",
            "foto_Amigos_15.jpg",
            "foto_Amigos_16.jpg",
            "foto_Amigos_17.jpg",
            "foto_Amigos_18.jpg",
            "foto_Amigos_19.jpg",
            "foto_Amigos_20.jpg",
            "foto_Amigos_21.jpg",
            "foto_Amigos_22.jpg",
            "foto_Amigos_23.jpg"
        ]
    },
    {
        titulo: "Fam\u00edlia",
        subtitulo: "Tudo que importa",
        pasta: "fotos/Familia",
        fotoInicial: "foto_Familia_Inicial.jpg",
        fotos: [
            "foto_Familia_1.jpg",
            "foto_Familia_2.jpg",
            "foto_Familia_3.jpg",
            "foto_Familia_4.jpg",
            "foto_Familia_5.jpg",
            "foto_Familia_6.jpg",
            "foto_Familia_7.jpg",
            "foto_Familia_8.jpg",
            "foto_Familia_9.jpg",
            "foto_Familia_10.jpg",
            "foto_Familia_11.jpg",
            "foto_Familia_12.jpg",
            "foto_Familia_13.jpg",
            "foto_Familia_14.jpg",
            "foto_Familia_15.jpg",
            "foto_Familia_16.jpg",
            "foto_Familia_17.jpg",
            "foto_Familia_18.jpg",
            "foto_Familia_19.jpg",
            "foto_Familia_20.jpg",
            "foto_Familia_21.jpg",
            "foto_Familia_22.jpg",
            "foto_Familia_23.jpg",
            "foto_Familia_24.jpg",
            "foto_Familia_25.jpg",
            "foto_Familia_26.jpg",
            "foto_Familia_27.jpg",
            "foto_Familia_28.jpg",
            "foto_Familia_29.jpg",
            "foto_Familia_30.jpg",
            "foto_Familia_31.jpg",
            "foto_Familia_32.jpg",
            "foto_Familia_33.jpg",
            "foto_Familia_34.jpg",
            "foto_Familia_35.jpg",
            "foto_Familia_36.jpg",
            "foto_Familia_37.jpg",
            "foto_Familia_38.jpg",
            "foto_Familia_39.jpg",
            "foto_Familia_40.jpg",
            "foto_Familia_41.jpg",
            "foto_Familia_42.jpg"
        ]
    },
    {
        titulo: "Momentos Especiais",
        subtitulo: "Eu e eu mesma",
        pasta: "fotos/Sozinha",
        fotoInicial: "foto_Sozinha_Inicial.jpg",
        fotos: [
            "foto_Sozinha_1.jpg",
            "foto_Sozinha_2.jpg",
            "foto_Sozinha_3.jpg",
            "foto_Sozinha_4.jpg",
            "foto_Sozinha_5.jpg",
            "foto_Sozinha_6.jpg",
            "foto_Sozinha_7.jpg",
            "foto_Sozinha_8.jpg",
            "foto_Sozinha_9.jpg",
            "foto_Sozinha_10.jpg",
            "foto_Sozinha_11.jpg",
            "foto_Sozinha_12.jpg",
            "foto_Sozinha_13.jpg",
            "foto_Sozinha_14.jpg",
            "foto_Sozinha_15.jpg",
            "foto_Sozinha_16.jpg",
            "foto_Sozinha_17.jpg",
            "foto_Sozinha_18.jpg",
            "foto_Sozinha_19.jpg",
            "foto_Sozinha_20.jpg",
            "foto_Sozinha_21.jpg",
            "foto_Sozinha_22.jpg",
            "foto_Sozinha_23.jpg",
            "foto_Sozinha_24.jpg",
            "foto_Sozinha_25.jpg",
            "foto_Sozinha_26.jpg",
            "foto_Sozinha_27.jpg",
            "foto_Sozinha_28.jpg",
            "foto_Sozinha_29.jpg",
            "foto_Sozinha_30.jpg",
            "foto_Sozinha_31.jpg",
            "foto_Sozinha_32_Copia.jpg"
        ]
    }
];

const kenBurnsEffects = ['ken-burns-1', 'ken-burns-2', 'ken-burns-3', 'ken-burns-4'];

function createTitleSlide(titulo, subtitulo) {
    const slide = document.createElement('div');
    slide.className = 'slide section-title';
    slide.innerHTML = `
        <div class="section-icon">&#10022;</div>
        <h2 class="section-titulo">${titulo}</h2>
        <p class="section-subtitulo">${subtitulo}</p>
    `;
    return slide;
}

function createIntroSlide(titulo, subtitulo, imageSrc) {
    const slide = document.createElement('div');
    slide.className = 'slide intro-slide';
    
    slide.innerHTML = `
        <div class="intro-frame">
            <div class="intro-frame-border">
                <img src="${imageSrc}" alt="${titulo}" class="intro-image">
            </div>
            <div class="intro-info">
                <h2 class="intro-titulo">${titulo}</h2>
                <p class="intro-subtitulo">${subtitulo}</p>
            </div>
        </div>
    `;
    
    const img = slide.querySelector('.intro-image');
    img.onerror = function() {
        console.log('Erro ao carregar foto inicial: ' + imageSrc);
        slide.remove();
        const index = slides.indexOf(slide);
        if (index > -1) {
            slides.splice(index, 1);
        }
    };
    
    return slide;
}

function createImageSlide(imageSrc) {
    const slide = document.createElement('div');
    slide.className = 'slide vignette';
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.className = 'slide-image glow-effect';
    
    const randomEffect = kenBurnsEffects[Math.floor(Math.random() * kenBurnsEffects.length)];
    img.classList.add(randomEffect);
    
    img.alt = 'Foto';
    
    img.onerror = function() {
        console.log('Erro ao carregar: ' + imageSrc);
        const index = slides.indexOf(slide);
        if (index > -1) {
            slides.splice(index, 1);
            slide.remove();
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }
            showSlide(slideIndex);
        }
    };
    
    slide.appendChild(img);
    return slide;
}

function createEndSlide() {
    const slide = document.createElement('div');
    slide.className = 'slide end-slide';
    slide.innerHTML = `
        <div class="end-content">
            <div class="numero-setenta">70</div>
            <h1 style="font-size: 4vw;">Com todo o nosso amor</h1>
            <p class="subtitulo" style="margin-top: 30px;">Felizes 70 anos, M\u00e3e!</p>
            <div class="heart-animation">&#10084;</div>
        </div>
    `;
    return slide;
}

function initSlideshow() {
    const container = document.querySelector('.slideshow-container');
    
    // Slide inicial (titulo)
    const titleSlide = document.createElement('div');
    titleSlide.className = 'slide';
    titleSlide.innerHTML = `
        <div class="numero-setenta">70</div>
        <h1>Anos de Vida e Amor</h1>
        <p class="subtitulo">Uma homenagem carinhosa</p>
    `;
    container.appendChild(titleSlide);
    slides.push(titleSlide);
    
    // Slide de abertura (convite)
    const aberturaSlide = createImageSlide('fotos/Abertura.jpg');
    container.appendChild(aberturaSlide);
    slides.push(aberturaSlide);
    
    // Adiciona secoes tematicas
    secoes.forEach(secao => {
        // Slide de titulo da secao
        const sectionTitle = createTitleSlide(secao.titulo, secao.subtitulo);
        container.appendChild(sectionTitle);
        slides.push(sectionTitle);
        
        // Slide de abertura com foto inicial e moldura
        const introSlide = createIntroSlide(secao.titulo, secao.subtitulo, secao.pasta + '/' + secao.fotoInicial);
        container.appendChild(introSlide);
        slides.push(introSlide);
        
        // Fotos da secao (sem a inicial)
        secao.fotos.forEach(foto => {
            const slide = createImageSlide(secao.pasta + '/' + foto);
            container.appendChild(slide);
            slides.push(slide);
        });
    });
    
    // Slide final
    const endSlide = createEndSlide();
    container.appendChild(endSlide);
    slides.push(endSlide);
    
    showSlide(0);
    updateCounter();
}

function startPresentation() {
    overlay.style.display = 'none';
    isPlaying = true;
    
    document.getElementById('playPauseBtn').innerHTML = '&#10074;&#10074;';
    
    Promise.all([
        new Promise(resolve => {
            if (musica1.duration) resolve();
            else musica1.addEventListener('loadedmetadata', resolve);
        }),
        new Promise(resolve => {
            if (musica2.duration) resolve();
            else musica2.addEventListener('loadedmetadata', resolve);
        }),
        new Promise(resolve => {
            if (musica3.duration) resolve();
            else musica3.addEventListener('loadedmetadata', resolve);
        })
    ]).then(() => {
        const tempoTotal = musica1.duration + musica2.duration + musica3.duration;
        const tempoAbertura = 2;
        const tempoRestante = tempoTotal - tempoAbertura;
        const numSlidesRestantes = slides.length - 1;
        tempoPorSlide = tempoRestante / numSlidesRestantes;
        
        musica1.play();
        musicaAtual = 0;
        
        iniciarAvancoAutomatico();
    });
    
    musica1.addEventListener('ended', () => {
        musica2.currentTime = 0;
        musica2.play();
        musicaAtual = 1;
    });
    
    musica2.addEventListener('ended', () => {
        musica3.currentTime = 0;
        musica3.play();
        musicaAtual = 2;
    });
    
    musica3.addEventListener('ended', () => {
        musicaAtual = 3;
    });
}

function iniciarAvancoAutomatico() {
    clearTimeout(avancoTimeout);
    
    if (!isPlaying) return;
    
    const duracao = slideIndex === 1 ? (tempoPorSlide + tempoAbertura) * 1000 : tempoPorSlide * 1000;
    
    avancoTimeout = setTimeout(() => {
        if (isPlaying && slideIndex < slides.length - 1) {
            changeSlide(1);
            iniciarAvancoAutomatico();
        }
    }, duracao);
}

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    
    slides[slideIndex].classList.add('active');
    updateProgressBar();
    updateCounter();
    
    if (slideIndex === slides.length - 1) {
        musica1.pause();
        musica2.pause();
        musica3.pause();
        clearTimeout(avancoTimeout);
        
        aplausos.currentTime = 0;
        aplausos.play();
    }
}

function changeSlide(direction) {
    showSlide(slideIndex + direction);
}

function updateProgressBar() {
    const progress = ((slideIndex + 1) / slides.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function updateCounter() {
    document.getElementById('slideCounter').textContent = 
        `${slideIndex + 1} / ${slides.length}`;
}

function togglePlayPause() {
    isPlaying = !isPlaying;
    const btn = document.getElementById('playPauseBtn');
    
    if (isPlaying) {
        btn.innerHTML = '&#10074;&#10074;';
        
        if (musicaAtual === 0 && musica1.paused) {
            musica1.play();
        } else if (musicaAtual === 1 && musica2.paused) {
            musica2.play();
        } else if (musicaAtual === 2 && musica3.paused) {
            musica3.play();
        }
        
        iniciarAvancoAutomatico();
    } else {
        btn.innerHTML = '&#9654;';
        musica1.pause();
        musica2.pause();
        musica3.pause();
        clearTimeout(avancoTimeout);
    }
}

function restartPresentation() {
    clearTimeout(avancoTimeout);
    
    musica1.pause();
    musica1.currentTime = 0;
    musica2.pause();
    musica2.currentTime = 0;
    musica3.pause();
    musica3.currentTime = 0;
    aplausos.pause();
    aplausos.currentTime = 0;
    
    slideIndex = 0;
    isPlaying = true;
    
    document.getElementById('playPauseBtn').innerHTML = '&#10074;&#10074;';
    
    showSlide(0);
    
    Promise.all([
        new Promise(resolve => {
            if (musica1.duration) resolve();
            else musica1.addEventListener('loadedmetadata', resolve);
        }),
        new Promise(resolve => {
            if (musica2.duration) resolve();
            else musica2.addEventListener('loadedmetadata', resolve);
        }),
        new Promise(resolve => {
            if (musica3.duration) resolve();
            else musica3.addEventListener('loadedmetadata', resolve);
        })
    ]).then(() => {
        const tempoTotal = musica1.duration + musica2.duration + musica3.duration;
        const tempoRestante = tempoTotal - tempoAbertura;
        const numSlidesRestantes = slides.length - 1;
        tempoPorSlide = tempoRestante / numSlidesRestantes;
        
        musica1.play();
        musicaAtual = 0;
        
        iniciarAvancoAutomatico();
    });
}

document.getElementById('startBtn').addEventListener('click', startPresentation);

document.getElementById('prevBtn').addEventListener('click', () => {
    changeSlide(-1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    changeSlide(1);
});

document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);

document.getElementById('restartBtn').addEventListener('click', restartPresentation);

document.addEventListener('keydown', (e) => {
    if (overlay.style.display !== 'none' && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        startPresentation();
        return;
    }
    
    switch(e.key) {
        case 'ArrowLeft':
            changeSlide(-1);
            break;
        case 'ArrowRight':
            changeSlide(1);
            break;
        case ' ':
            e.preventDefault();
            togglePlayPause();
            break;
        case 'r':
        case 'R':
            restartPresentation();
            break;
        case 'f':
        case 'F':
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                document.documentElement.requestFullscreen();
            }
            break;
    }
});

initSlideshow();
