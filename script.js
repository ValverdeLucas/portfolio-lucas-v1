const menuPrincipal = document.querySelector('.container__middle');
const menu = document.querySelector('.main__container')
const botaoSobre = document.querySelector('.user__menu')
const botaoMenu = document.querySelector('.fa-plus');
const botaoStack = document.querySelector('.techstack__menu')
const botaoCurriculo = document.querySelector('.curriculum__menu')
const botaoProjetos = document.querySelector('.projects__menu')
const botaoContato = document.querySelector('.contact__menu')


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


