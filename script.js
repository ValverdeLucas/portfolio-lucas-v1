const menuPrincipal = document.querySelector('.container__middle');
const menu = document.querySelector('.main__container');
const botaoSobre = document.querySelector('.user__menu');
const botaoMenu = document.querySelector('.fa-plus');
const botaoStack = document.querySelector('.techstack__menu');
const botaoCurriculo = document.querySelector('.curriculum__menu');
const botaoProjetos = document.querySelector('.projects__menu');
const botaoContato = document.querySelector('.contact__menu');

botaoMenu.onclick = function () {
    if (menuPrincipal.classList.contains('active') && menu.classList.contains('active')) {
        menuPrincipal.classList.remove('active');
        menu.classList.remove('active', 'sobre-active', 'curriculo-active', 'stack-active', 'projetos-active', 'contato-active');
    } else {
        menuPrincipal.classList.add('active');
        menu.classList.add('active');
    }
}

botaoSobre.onclick = function () {
    menu.classList.add('sobre-active');
    if (menu.classList.contains('stack-active')) {
        menu.classList.add('sobre-active');
        menu.classList.remove('stack-active');
    } if (menu.classList.contains('curriculo-active')) {
        menu.classList.add('sobre-active');
        menu.classList.remove('curriculo-active');
    } if (menu.classList.contains('projetos-active')) {
        menu.classList.add('sobre-active');
        menu.classList.remove('projetos-active');
    } if (menu.classList.contains('contato-active')) {
        menu.classList.add('sobre-active');
        menu.classList.remove('contato-active');
    } else {
        menu.classList.add('sobre-active');
    }
}

botaoStack.onclick = function () {
    menu.classList.add('stack-active');
    if (menu.classList.contains('sobre-active')) {
        menu.classList.add('stack-active');
        menu.classList.remove('sobre-active');
    } if (menu.classList.contains('curriculo-active')) {
        menu.classList.add('stack-active');
        menu.classList.remove('curriculo-active');
    } if (menu.classList.contains('projetos-active')) {
        menu.classList.add('stack-active');
        menu.classList.remove('projetos-active');
    } if (menu.classList.contains('contato-active')) {
        menu.classList.add('stack-active');
        menu.classList.remove('contato-active');
    } else {
        menu.classList.add('stack-active');
    }
}

botaoCurriculo.onclick = function () {
    menu.classList.add('curriculo-active');
    if (menu.classList.contains('sobre-active')) {
        menu.classList.add('curriculo-active');
        menu.classList.remove('sobre-active');
    } if (menu.classList.contains('stack-active')) {
        menu.classList.add('curriculo-active');
        menu.classList.remove('stack-active');
    } if (menu.classList.contains('projetos-active')) {
        menu.classList.add('curriculo-active');
        menu.classList.remove('projetos-active');
    } if (menu.classList.contains('contato-active')) {
        menu.classList.add('curriculo-active');
        menu.classList.remove('contato-active');
    } else {
        menu.classList.add('curriculo-active');
    }
}

botaoProjetos.onclick = function () {
    menu.classList.add('projetos-active');
    if (menu.classList.contains('sobre-active')) {
        menu.classList.add('projetos-active');
        menu.classList.remove('sobre-active');
    } if (menu.classList.contains('stack-active')) {
        menu.classList.add('projetos-active');
        menu.classList.remove('stack-active');
    } if (menu.classList.contains('curriculo-active')) {
        menu.classList.add('projetos-active');
        menu.classList.remove('curriculo-active');
    } if (menu.classList.contains('contato-active')) {
        menu.classList.add('projetos-active');
        menu.classList.remove('contato-active');
    } else {
        menu.classList.add('projetos-active');
    }
}

botaoContato.onclick = function () {
    menu.classList.add('contato-active');
    if (menu.classList.contains('sobre-active')) {
        menu.classList.add('contato-active');
        menu.classList.remove('sobre-active');
    } if (menu.classList.contains('stack-active')) {
        menu.classList.add('contato-active');
        menu.classList.remove('stack-active');
    } if (menu.classList.contains('curriculo-active')) {
        menu.classList.add('contato-active');
        menu.classList.remove('curriculo-active');
    } if (menu.classList.contains('projetos-active')) {
        menu.classList.add('contato-active');
        menu.classList.remove('projetos-active');
    } else {
        menu.classList.add('contato-active');
    }
}

const temaRoot = document.querySelector(':root');
const tema1 = document.querySelector('.tema1');
const tema2 = document.querySelector('.tema2');
const tema3 = document.querySelector('.tema3');
const tema4 = document.querySelector('.tema4');

tema1.onclick = function () {
    temaRoot.style.setProperty("--color-one", "#ffb800")
    temaRoot.style.setProperty("--color-two", "#330099")
    temaRoot.style.setProperty("--color-three", "#fd2282")
    temaRoot.style.setProperty("--color-four", "#fd2282")
    temaRoot.style.setProperty("--color-five", "#040348")
    temaRoot.style.setProperty("--color-six", "#FBFBFB")
    tema1.classList.add('active');
    tema2.classList.remove('active');
    tema3.classList.remove('active');
    tema4.classList.remove('active');
}

tema2.onclick = function () {
    temaRoot.style.setProperty("--color-one", "#669bbc")
    temaRoot.style.setProperty("--color-two", "#003049")
    temaRoot.style.setProperty("--color-three", "#c1121f ")
    temaRoot.style.setProperty("--color-four", "#c1121f")
    temaRoot.style.setProperty("--color-five", "#fdf0d5")
    temaRoot.style.setProperty("--color-six", "#fdf0d5")
    tema1.classList.remove('active');
    tema2.classList.add('active');
    tema3.classList.remove('active');
    tema4.classList.remove('active');
}

tema3.onclick = function () {
    temaRoot.style.setProperty("--color-one", "#EEBB88")
    temaRoot.style.setProperty("--color-two", "#171310")
    temaRoot.style.setProperty("--color-three", "#EEBB88")
    temaRoot.style.setProperty("--color-four", "#FBFBFB")
    temaRoot.style.setProperty("--color-five", "#171310")
    temaRoot.style.setProperty("--color-six", "#FBFBFB")
    tema1.classList.remove('active');
    tema2.classList.remove('active');
    tema3.classList.add('active');
    tema4.classList.remove('active');
}

tema4.onclick = function () {
    temaRoot.style.setProperty("--color-one", "#EFCCBF ")
    temaRoot.style.setProperty("--color-two", "#008080")
    temaRoot.style.setProperty("--color-three", "#F2E2A4")
    temaRoot.style.setProperty("--color-four", "#F2E2A4")
    temaRoot.style.setProperty("--color-five", "#004444")
    temaRoot.style.setProperty("--color-six", "#FBFBFB")
    tema1.classList.remove('active');
    tema2.classList.remove('active');
    tema3.classList.remove('active');
    tema4.classList.add('active');
}


