

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