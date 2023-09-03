

const contatoJson = [
    {id:2,img:'../image/phoneContact.png',text:'Telefone: (41) 99648-2073'},
    {id:1,img:'../image/whatsContact.png',text:'WhatsApp: (41) 99648-2073'},
    {id:3,img:'../image/emailContact.png',text:'Email: atendimento@jclaudos.eng.br'}
]

contatoJson.map((item) => {
    
    let itemContato = document.querySelector('.models .divContato').cloneNode(true)

    itemContato.querySelector('.divContato img').src = item.img
    itemContato.querySelector('.divContato .txtCto01').innerHTML = item.text
    
    document.querySelector('.contatoText').append(itemContato)

    
})