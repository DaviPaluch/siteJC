

const url = window.location.href;
var file = url.split('/');
var urlLength = file.length
console.log(urlLength)
let page;


if(urlLength === 4){
    page = 'index'
}
else{
    switch(file.valueOf()[4]){
        case 'servicos.html':
            console.log('servicos')
            page = 'servicos'
            


            break;
        case 'contato.html':
            console.log('contato')
            page = 'contato'
            break;
        case 'empresa.html':
            console.log('empresa')
            page = 'empresa'
        case 'obrigado.html':
            console.log('obrigado')
            page = 'obrigado'
        
    }
}

const a = document.querySelector('#logoHome')
a.querySelector('#logoHome').addEventListener('click',
    manipulaLinks())









function manipulaLinks (){
    console.log('ddsf')
}





/*

window.location.href


function manipulaDados(id){

    console.log("hello")
    if(id.attributes.redirects.value === 'index'){
        window.location.replace('../index.html')
    }
    if(id.attributes.redirects.value === 'index2'){
        console.log('fdsdsf')
        window.location.replace('../index.html')
    }
    if(id.attributes.redirects.value === 'servicos'){
        window.location.replace('./paginas/servicos.html')
    }
    if(id.attributes.redirects.value === 'contato'){
        window.location.replace('./paginas/contato.html')
    }
    if(id.attributes.redirects.value === 'empresa'){
        window.location.replace('./paginas/empresa.html')
    }
    if(id.attributes.redirects.value === 'Whats'){
        window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5541996482073&text=Ol%C3%A1!%20Pode%20me%20ajudar%3F')
    }
    
}
*/

/*
function manipulaDados(link){
    if(link === 'servicos'){
        window.location.replace('./servicos.html')
    }
    if(link === 'contato'){
        window.location.replace('./contato.html')
    }
    if(link === 'empresa'){
        window.location.replace('./.html')
    }
    if(link = 'Whats'){
        window.open('./index.html')
    } else{
        window.location.replace('./index.html')
    }
}

*/


/*link.view.parent.document.all.buttonServices.attributes.link.value*/ 