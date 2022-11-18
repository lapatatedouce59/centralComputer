var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isLaunched = false
let eventSaid = false

function playAudio(audio){
    return new Promise(res=>{
        audio.play()
        audio.onended = res
    })
}


//DICTIONNAIRE DE SONS

async function launchAlert(name){
    switch(name){


        //SFX
        case 'notif':
            console.log('[lauchAlert] Notif!')
            let notifAudio=new Audio('./sounds/notif.mp3')
            await playAudio(notifAudio)
            console.log('son '+ name +' terminé')
        break;
        case 'systemNotif':
            console.log('[lauchAlert] Notif!')
            let sysAudio=new Audio('./sounds/system.mp3')
            await playAudio(sysAudio)
            console.log('son '+ name +' terminé')
        break;
        case 'sncfMusic':
            console.log('[lauchAlert] Sncf!')
            let sncfAudio=new Audio('./sounds/sncf_soir.mp3')
            await playAudio(sncfAudio)
            console.log('son '+ name +' terminé')
        break;
        case 'ratpMusic':
            console.log('[lauchAlert] Ratp!')
            let ratpAudio=new Audio('./sounds/RATP_matin..mp3')
            await playAudio(ratpAudio)
            console.log('son '+ name +' terminé')
        break;
        case 'sncfAnnonce':
            console.log('[lauchAlert] Sncf Notif!')
            let ssncfAudio=new Audio('./sounds/sncf_annonce.mp3')
            await playAudio(ssncfAudio)
            console.log('son '+ name +' terminé')
        break;

        //EVENTS
        case 'meteo-tom':
            console.log('[lauchAlert] Météo pour demain! [Annonce]')
            let dmAudio=new Audio('./sounds/meteo/meteo-demain.mp3')
            await playAudio(dmAudio)
            console.log('son '+ name +' terminé')
            eventSaid = true
        break;
        case 'meteo-today':
            console.log('[lauchAlert] Météo pour demain! [Annonce]')
            let tdAudio=new Audio('./sounds/meteo/today-meteo.mp3')
            await playAudio(tdAudio)
            console.log('son '+ name +' terminé')
            eventSaid = true
        break;
        case 'minimal-temp':
            console.log('[lauchAlert] Météo pour demain! [Températures minimale?]')
            let minAudio=new Audio('./sounds/meteo/minimal-temp.mp3')
            await playAudio(minAudio)
            console.log('son '+ name +' terminé')
            eventSaid = true
        break;
        case 'maximal-temp':
            console.log('[lauchAlert] Météo pour demain! [Températures maximales?]')
            let maxAudio=new Audio('./sounds/meteo/max-temp.mp3')
            await playAudio(maxAudio)
            console.log('son '+ name +' terminé')
            eventSaid = true
        break;
        case 'manger':
            console.log('[lauchAlert] Notification pour manger!')
            let eatAudio=new Audio('./sounds/eat.mp3')
            await playAudio(eatAudio)
            console.log('son '+ name +' terminé')
            eventSaid = true
        break;
        case 'bye':
            console.log('[lauchAlert] Au revoir.')
            let byeAudio=new Audio('./sounds/bye.mp3')
            await playAudio(byeAudio)
            console.log('son '+ name +' terminé')
            eventSaid = true
        break;
        case 'stopSystem':
            console.log('[lauchAlert] Notifcation pour extinction du système')
            let endAudio=new Audio('./sounds/goodbye.mp3')
            await playAudio(endAudio)
            console.log('son '+ name +' terminé')
            eventSaid = true
        break;
        case 'wakingUp':
            console.log('[lauchAlert] Notification de réveil du système')
            let helloAudio=new Audio('./sounds/waking_up..mp3')
            await playAudio(helloAudio)
            console.log('son '+ name +' terminé')
            eventSaid = true
        break;
        case 'good-day':
            console.log('[lauchAlert] Notification de bonne journée.')
            let goodDayAudio=new Audio('./sounds/good-bye.mp3')
            await playAudio(goodDayAudio)
            console.log('son '+ name +' terminé')
            eventSaid = true
        break;
        case 'noHomework':
            console.log('[lauchAlert] Notification de non présence de devoirs.')
            let noHmAudio=new Audio('./sounds/no_homework.mp3')
            await playAudio(noHmAudio)
            console.log('son '+ name +' terminé')
            eventSaid = true
        break;
        case 'Homework':
            console.log('[lauchAlert] Notification de non présence de devoirs.')
            let HmAudio=new Audio('./sounds/homework.mp3')
            await playAudio(HmAudio)
            console.log('son '+ name +' terminé')
            eventSaid = true
        break;

        //CALENDRIER
        case 'noEvents':
            console.log('[lauchAlert] Notification de non présence d\'évennements.')
            let noEvtAudio=new Audio('./sounds/events/no_event.mp3')
            await playAudio(noEvtAudio)
            console.log('son '+ name +' terminé')
            eventSaid = true
        break;
        case 'Events':
            console.log('[lauchAlert] Notification de présence d\'évennements.')
            let EvtAudio=new Audio('./sounds/events/event_in.mp3')
            await playAudio(EvtAudio)
            console.log('son '+ name +' terminé')
            eventSaid = true
        break;


        //HEURES
        case '7h':
            console.log('[lauchAlert] 7h00!')
            let ssAudio=new Audio('./sounds/hours/7h.mp3')
            await playAudio(ssAudio)
            console.log('son '+ name +' terminé')
        break;
        case '7h30':
            console.log('[lauchAlert] 7h30!')
            let ssaudio=new Audio('./sounds/hours/7h30.mp3')
            await playAudio(ssaudio)
            console.log('son '+ name +' terminé')
        break;
        case '8h':
            console.log('[lauchAlert] 8h00!')
            let WAudio=new Audio('./sounds/hours/8h.mp3')
            await playAudio(WAudio)
            console.log('son '+ name +' terminé')
        break;
        case '8h30':
            console.log('[lauchAlert] 8h30!')
            let odio=new Audio('./sounds/hours/8h30.mp3')
            await playAudio(odio)
            console.log('son '+ name +' terminé')
        break;
        case '9h':
            console.log('[lauchAlert] 9h00!')
            let PAudio=new Audio('./sounds/hours/9h.mp3')
            await playAudio(PAudio)
            console.log('son '+ name +' terminé')
        break;
        case '9h30':
            console.log('[lauchAlert] 9h30!')
            let oAudio=new Audio('./sounds/hours/9h30.mp3')
            await playAudio(oAudio)
            console.log('son '+ name +' terminé')
        break;
        case '10h':
            console.log('[lauchAlert] 10h00!')
            let RAudio=new Audio('./sounds/hours/10h.mp3')
            await playAudio(RAudio)
            console.log('son '+ name +' terminé')
        break;
        case '10h30':
            console.log('[lauchAlert] 10h30!')
            let KAudio=new Audio('./sounds/hours/10h30.mp3')
            await playAudio(KAudio)
            console.log('son '+ name +' terminé')
        break;
        case '11h':
            console.log('[lauchAlert] 11h00!')
            let DAudio=new Audio('./sounds/hours/11h.mp3')
            await playAudio(DAudio)
            console.log('son '+ name +' terminé')
        break;
        case '11h30':
            console.log('[lauchAlert] 11h30!')
            let FAudio=new Audio('./sounds/hours/11h30.mp3')
            await playAudio(FAudio)
            console.log('son '+ name +' terminé')
        break;
        case '12h':
            console.log('[lauchAlert] 12h00!')
            let nAudio=new Audio('./sounds/hours/12h.mp3')
            await playAudio(nAudio)
            console.log('son '+ name +' terminé')
        break;
        case '12h30':
            console.log('[lauchAlert] 12h30!')
            let AAudio=new Audio('./sounds/hours/12h30.mp3')
            await playAudio(AAudio)
            console.log('son '+ name +' terminé')
        break;
        case '13h':
            console.log('[lauchAlert] 13h00!')
            let aAudio=new Audio('./sounds/hours/13h.mp3')
            await playAudio(aAudio)
            console.log('son '+ name +' terminé')
        break;
        case '13h30':
            console.log('[lauchAlert] 13h30!')
            let rAudio=new Audio('./sounds/hours/13h30.mp3')
            await playAudio(rAudio)
            console.log('son '+ name +' terminé')
        break;
        case '14h':
            console.log('[lauchAlert] 14h00!')
            let eAudio=new Audio('./sounds/hours/14h.mp3')
            await playAudio(eAudio)
            console.log('son '+ name +' terminé')
        break;
        case '14h30':
            console.log('[lauchAlert] 14h30!')
            let tAudio=new Audio('./sounds/hours/14h30.mp3')
            await playAudio(tAudio)
            console.log('son '+ name +' terminé')
        break;
        case '15h':
            console.log('[lauchAlert] 15h00!')
            let sAudio=new Audio('./sounds/hours/15h.mp3')
            await playAudio(sAudio)
            console.log('son '+ name +' terminé')
        break;
        case '15h30':
            console.log('[lauchAlert] 15h30!')
            let qAudio=new Audio('./sounds/hours/15h30.mp3')
            await playAudio(qAudio)
            console.log('son '+ name +' terminé')
        break;
        case '16h':
            console.log('[lauchAlert] 16h00!')
            let wAudio=new Audio('./sounds/hours/16h.mp3')
            await playAudio(wAudio)
            console.log('son '+ name +' terminé')
        break;
        case '16h30':
            console.log('[lauchAlert] 16h30!')
            let jAudio=new Audio('./sounds/hours/16h30.mp3')
            await playAudio(jAudio)
            console.log('son '+ name +' terminé')
        break;
        case '17h':
            console.log('[lauchAlert] 17h00!')
            let xAudio=new Audio('./sounds/hours/17h.mp3')
            await playAudio(xAudio)
            console.log('son '+ name +' terminé')
        break;
        case '17h30':
            console.log('[lauchAlert] 17h30!')
            let iAudio=new Audio('./sounds/hours/17h30.mp3')
            await playAudio(iAudio)
            console.log('son '+ name +' terminé')
        break;
        case '18h':
            console.log('[lauchAlert] 18h00!')
            let cAudio=new Audio('./sounds/hours/18h.mp3')
            await playAudio(cAudio)
            console.log('son '+ name +' terminé')
        break;
        case '18h30':
            console.log('[lauchAlert] 18h30!')
            let bAudio=new Audio('./sounds/hours/18h30.mp3')
            await playAudio(bAudio)
            console.log('son '+ name +' terminé')
        break;
        case '19h':
            console.log('[lauchAlert] 19h00!')
            let gAudio=new Audio('./sounds/hours/19h.mp3')
            await playAudio(gAudio)
            console.log('son '+ name +' terminé')
        break;
        case '19h30':
            console.log('[lauchAlert] 19h30!')
            let hAudio=new Audio('./sounds/hours/19h30.mp3')
            await playAudio(hAudio)
            console.log('son '+ name +' terminé')
        break;
        case '20h':
            console.log('[lauchAlert] 20h00!')
            let kAudio=new Audio('./sounds/hours/20h.mp3')
            await playAudio(kAudio)
            console.log('son '+ name +' terminé')
        break;
        case '20h30':
            console.log('[lauchAlert] 20h30!')
            let mAudio=new Audio('./sounds/hours/20h30.mp3')
            await playAudio(mAudio)
            console.log('son '+ name +' terminé')
        break;
        case '21h':
            console.log('[lauchAlert] 21h!')
            let BAudio=new Audio('./sounds/hours/21h.mp3')
            await playAudio(BAudio)
            console.log('son '+ name +' terminé')
        break;
        case '21h30':
            console.log('[lauchAlert] 21h30!')
            let vAudio=new Audio('./sounds/hours/21h30.mp3')
            await playAudio(vAudio)
            console.log('son '+ name +' terminé')
        break;
        case '22h':
            console.log('[lauchAlert] 22h!')
            let EAudio=new Audio('./sounds/hours/22h.mp3')
            await playAudio(EAudio)
            console.log('son '+ name +' terminé')
        break;
        case '22h30':
            console.log('[lauchAlert] 22h30!')
            let ZAudio=new Audio('./sounds/hours/22h30.mp3')
            await playAudio(ZAudio)
            console.log('son '+ name +' terminé')
        break;
        case '23h':
            console.log('[lauchAlert] 23h!')
            let fAudio=new Audio('./sounds/hours/23h.mp3')
            await playAudio(fAudio)
            console.log('son '+ name +' terminé')
        break;
        
    }
    isLaunched = true
    //RESET DU BOUTON
    ctx.fillStyle = "#65FF62";
    ctx.fillRect(250, 350, 300, 100);
    ctx.fillStyle = "#303030";
    ctx.font = '30px Arial'
    ctx.fillText('Lancer alerte', 300, 410)
    isLaunched=false
}

async function sayHours(hour){
    switch(hour){
        case '7:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('7h')
            await launchAlert('ratpMusic')
            await launchAlert('wakingUp')
            await launchAlert('noEvents')
            await launchAlert('meteo-today')
            await launchAlert('minimal-temp')
            await launchAlert('maximal-temp')
            await launchAlert('good-day')
            await launchAlert('sncfAnnonce')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '7:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('7h30')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '8:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('8h')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '8:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('8h30')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '9:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('9h')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '9:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('9h30')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '10:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('10h')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '10:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('10h30')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '11:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('11h')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '11:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('11h30')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '12:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('12h')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '12:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('12h30')
            await launchAlert('systemNotif')
            launchAlert('manger')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '13:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('13h')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '13:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('13h30')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '14:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('14h')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '14:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('14h30')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '15:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('15h')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '15:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('15h30')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '16:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('16h')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '16:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('16h30')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '17:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('17h')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '17:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('17h30')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '18:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('18h')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '18:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('18h30')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '19:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('19h')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '19:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('19h30')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '20:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('20h')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '20:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('20h30')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '21:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('21h')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '21:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('21h30')
            await launchAlert('manger')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '22:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('22h')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '22:30':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('22h30')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        case '23:00':
            eventSaid = true
            await launchAlert('notif')
            await launchAlert('23h')
            await launchAlert('sncfMusic')
            await launchAlert('stopSystem')
            await launchAlert('noHomework')
            await launchAlert('meteo-tom')
            await launchAlert('minimal-temp')
            await launchAlert('maximal-temp')
            await launchAlert('bye')
            setTimeout(() => {  eventSaid=false }, 66000);
            break;
        default:
            eventSaid = false
        break;
    }
}



window.onload = function(){
    showHour('00:00');
    setInterval(function(){
        /*let now = new Date();
        let ampm = now.toLocaleTimeString('default', {
        hour: '2-digit',
        minute: '2-digit'
    });*/
        showHour(ampm);
        console.log("[showHour] "+ampm);

        if(eventSaid) return console.log("[ampm] Alerte déjà diffusée.");
        sayHours(ampm)
    }, 10000)

}




let lastHour='00:00'
async function showHour(hour){
    ctx.fillStyle = '#000000';
    ctx.fillRect(10, 10, 200, 100)
    ctx.font = '60px Arial'
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(hour, 10, 100)
}


ctx.fillStyle = "#65FF62";
ctx.fillRect(250, 350, 300, 100);

ctx.fillStyle = "#303030";
ctx.font = '30px Arial'
ctx.fillText('Lancer alerte', 300, 410)

//Function to get the mouse position
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

//The rectangle should have x,y,width,height properties
var rect = {
    x:250,
    y:350,
    width:300,
    height:100
};



canvas.addEventListener('click', function(evt) {
    let mousePos = getMousePos(canvas, evt);

    if (isInside(mousePos,rect)) {
        if(!isLaunched){
            sayHours('21h')
            ctx.fillStyle = "#E21E1E";
            ctx.fillRect(250, 350, 300, 100);
            ctx.fillStyle = "#303030";
            ctx.font = '30px Arial'
            ctx.fillText('Diffusion', 350, 410)
        } else if (isLaunched) {
            ctx.fillStyle = "#65FF62";
            ctx.fillRect(250, 350, 300, 100);
            ctx.fillStyle = "#303030";
            ctx.font = '30px Arial'
            ctx.fillText('Lancer alerte', 300, 410)
            isLaunched=false
        }

    }else{
        console.error('Pas de zone reconnue')
    }   
}, false);


