
const informations = [
    {'tittle': 'PROJETOS TÉCNICOS',
    'photo':'../image/tableCheck.png', 
    'text': '     Nossa empresa conta com profissionais com grande conhecimento técnico para auxiliar na busca a solução das suas demandas. Realizamos projetos nas mais diversas áreas da Engenharia Mecânica, sempre prezando pelo embasamento técnico e legal, para garantir maior segurança do usuário.', 
    'bulletsText': []},
    {'tittle': 'PARECER TÉCNICO VEÍCULOS, MÁQUINAS E EQUIPAMENTOS',
    'photo':'../image/engrenagem.png', 
    'text': 'O parecer técnico de veículos, máquinas e equipamentos tem por finalidade garantir a segurança operacional dos mesmos, evitando assim acidentes ou danos ambientais provenientes do mau estado de conservação, segurança e operação.', 
    'bulletsText': []},
    {'tittle': 'OPACIDADE E RUÍDO',
    'photo':'../image/carbono.png', 
    'text': 'É um certificado que formaliza o controle periódico das emissões de poluentes junto à fumaça emitida. Realizamos a verifição de presença de fumaça escura e a potência dos ruídos emitidos pelos veículos, máquinas agrícolas, tratores, escavadeiras, esteiras, guindastes, geradores, compressores, torres de luz, máquinas estacionárias e entre outros. Os testes são realizados conforme Resolução das seguintes normativas abaixo:', 
    'bulletsText': ['Norma ISO 14000','CONAMA 418/2009','CONTRAN 958/2022','SASSMAQ','Normativa Nº 6  IBAMA']},
    {'tittle': 'Teste de Carga/ Gancho',
    'photo':'../image/gancho.png', 
    'text': 'Este teste é necessário antes da liberação do equipamento para uso e após substituição ou reparo de componentes, o teste deve ser realizado para garantir o bom funcionamento do equipamento. Nossos profissionais possuem uma vasta experiência na área e utilizamos algumas normas como referência na execução do teste, tais como:', 
    'bulletsText': ['NBR 14768-2021','NBR 11900-2022','NBR 13541-2017','NBR ISO 4309-2022']},
    {'tittle': 'ENSAIO NÃO DESTRUTIVO LIQUIDO PENETRANTE - LP',
    'photo':'../image/naodestrutivos.png', 
    'text': 'O ensaio por líquido penetrante é um método de teste não destrutivo que não prejudica as amostras ou peças que estão sendo inspecionadas. O teste é muito eficaz na detecção de porosidade, rachaduras, fraturas, colos, costuras e outras falhas que estão abertas na superfície do corpo de prova e podem ser causadas por fadiga, impacto, têmpera, usinagem, retificação, forjamento, rajadas, retração ou sobrecarga.', 
    'bulletsText': []},
    {'tittle': 'ENSAIO NÃO DESTRUTIVO (YOKE MAGNÉTICO)',
    'photo':'../image/yokiMag.png', 
    'text': 'Submete uma peça, ou parte dela, a um campo magnético. Este ensaio é aplicado em diversos tipos de materiais metálicos, como:', 
    'bulletsText': ['Fundidos de aço ferrítico;','Peças que sofreram usinagem ou tratamento térmico;','Forjados, Laminados, Extrudados e Soldados;','Porcas, parafusos e trincas por retífica.']},
    {'tittle': 'MEDIÇÃO DE ESPESSURA DE CHAPA POR ULTRASSOM',
    'photo':'../image/ChapaPorUltrasom.png', 
    'text': 'A medição de espessura por ultrassom é um método de mensuração de espessuras de materiais ferrosos e não ferrosos, paredes, chapas, tubos, tanques, vasos de pressão, entre outros. O método visa detectar perdas de espessuras nesses materiais, em razão de corrosões e processos abrasivos.', 
    'bulletsText': []},
    {'tittle': 'ANÁLISE DE RUÍDO AMBIENTAL',
    'photo':'../image/ruido.png', 
    'text': 'As medições são realizadas com equipamentos específicos para esse fim, devidamente calibrados, em horários planejados junto ao cliente (diurno, vespertino e noturno) conforme a demanda. Os ensaios são realizados em conformidade com:  ABNT NBR 10151 e ABNT NBR 10152.', 
    'bulletsText': ['ABNT NBR 10151','ABNT NBR 10152']},
    {'tittle': 'NR 12',
    'photo':'../image/nr12.png', 
    'text': 'O laudo de NR-12 é necessário em máquinas e equipamentos de uma empresa ou indústria, e também em plataformas para trabalhos em altura, manipuladores de cargas, empilhadeiras e similares, implementos agrícolas, linha amarela e outros.', 
    'bulletsText': []},
    {'tittle': 'NR 11',
    'photo':'../image/nr11.png', 
    'text': 'A NR-11 tem por objetivo principal a prevenção de acidentes com alto potencial de danos à saúde e segurança dos trabalhadores, sociedade, meio ambiente e empresas, a partir da implementação de condições técnicas de segurança para a realização das atividades.', 
    'bulletsText': []},
    {'tittle': 'MEDIÇÃO DA CAPACIDADE VOLUMÉTRICA DE TANQUES',
    'photo':'../image/caminhao.png', 
    'text': 'A obtenção do laudo de capacidade volumétrica de tanques é uma das obrigações para empreendimentos que trabalham com produtos a granel, limpa-fossa entre outros tipos de tanques. É essencial saber a capacidade metrológica de um dispositivo para, efetivamente, compreender a quantidade certa de produto a despejar no recipiente.', 
    'bulletsText': []}
]


const containerItems = document.querySelector('#Services');



const loadImages = (info, container) => {
    for( let i in info){

        container.innerHTML+= 
        `
            <div class="boxServices">
                <div class="boxPhotosServices" id="boxPhotosServices"><img src="${info[i].photo}" alt=""></div>
                <div class="divTextServices">
                    <div class="tittleServices"><p>${info[i].tittle}</p></div>
                    <div class="textServices"><p>${info[i].text} </p></div>
                    <div class="dots"></div>
                </div>
            </div>

        `
        
        //console.log(info[i].bulletsText)

        for(let a in info[i].bulletsText){
            const divsDots = document.getElementsByClassName('dots')[i]; divsDots.innerHTML += `<div><p>* ${info[i].bulletsText[a]}</p></div>`
        }
       
    }
}


loadImages(informations, containerItems);



/*
info.forEach( i => {
    console.log(informations[i].tittle)
    
});
*/