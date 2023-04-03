const empresaJSON = [
    {id:1,tittle:'SOBRE NÓS',img:'../image/logoPadraoSmall.png',text:'A JC é uma empresa de engenharia. Realizamos laudos e projetos.\nContamos com uma equipe personalizada e multidisciplinar para garantir a melhor qualidade de serviço'},
    {id:2,tittle:'MISSÃO',img:'../image/mission.png',text:'Levar até nossos clientes um atendimento exclusivo e personalizado'},
    {id:3,tittle:'VISÃO',img:'../image/vision.png',text:'Ser reconhecida como uma empresa de exelência nos serviços prestados e projetos na área da engenharia e consultoria mecânica.'},
    {id:4,tittle:'VALORES',img:'../image/value.png',text: "*Inovação \n*Transparência \n*Ética \n*Responsabilidade \n*Sustentabilidade"}
]

empresaJSON.map((item,index)  => {
    //console.log(item)

    let itemEmpresa = document.querySelector('.models .emptyEmpresa').cloneNode(true)
    
    document.querySelector('.empresaMain').append(itemEmpresa)
    
    itemEmpresa.querySelector('.photoEmpresa img').src = item.img
    itemEmpresa.querySelector('.textEmpresa .pEmpresa').innerHTML = item.text
    itemEmpresa.querySelector('.textEmpresa .tittleEmpresa').innerHTML = item.tittle

    
    
    
    //onsole.log(itemEmpresa)

    
    
})