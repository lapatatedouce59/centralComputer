var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isLaunched = false

function playAudio(audio){
    return new Promise(res=>{
        audio.play()
        audio.onended = res
    })
}

async function launchAlert(name){
    switch(name){
        case 'notif':
            console.log('Notif!')
            let notifAudio=new Audio('./sounds/notif.mp3')
            await playAudio(notifAudio)
            console.log('son '+ name +' lancé')
        break;
        case '21h':
            console.log('21h!')
            let hourAudio=new Audio('./sounds/hours/21h.mp3')
            await playAudio(hourAudio)
            console.log('son '+ name +' lancé')
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
        case '21h':
            await launchAlert('notif')
            launchAlert('21h')
    }
}


let lastHour='00:00'
function showHour(hour){
    ctx.fillStyle = '#000000';
    ctx.font = '60px Arial'
    ctx.fillText(lastHour, 10, 100)
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(hour, 10, 100)
}


ctx.fillStyle = "#65FF62";
ctx.fillRect(250, 350, 300, 100);

ctx.fillStyle = "#303030";
ctx.font = '30px Arial'
ctx.fillText('Lancer alerte', 300, 410)

ctx.fillStyle = "#FFFFFF";
ctx.font = '60px Arial'
ctx.fillText('Lancer alerte', 10, 100)

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


