

const buttonHeader = document.getElementById('clickNavHeader')
const navLinks = document.getElementById('navMobile')

buttonHeader.addEventListener('click', function(){showNav(buttonHeader)} )

function showNav(idButton){
    if(idButton.attributes.show.value === 'False'){
        idButton.attributes.show.value = 'True'
        console.log(idButton.attributes.show.value)
        navLinks.classList.remove('display-none')

    }else{
        idButton.attributes.show.value = 'False'
        console.log(idButton.attributes.show.value)
        navLinks.classList.add('display-none')
    }
}

navLinks.classList.add('display-none')




function otherPage(redirect){
    console.log(redirect)
    switch(redirect){
        case 'index':
            const url = window.location.href;
            var file = url.split('/');
            var urlLength = file.length
            if(url[4] == 'paginas'){
                window.location.replace('index.html')
            }else{
                window.location.replace('../index.html')
            }
            break;
        case 'servicos':
            window.location.replace('/paginas/servicos.html')
            break;
        case 'contato':
            window.location.replace('/paginas/contato.html')
            break;
        case 'empresa':
            window.location.replace('/paginas/empresa.html')
            break;
        case 'whats':
            console.log("message")
            window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5541996482073&text=Ol%C3%A1!%20Como%20a%20JC%20pode%20te%20ajudar?%3F')
            break;
        default:break;
    }
}



