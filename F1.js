let locations = [{place: "Albert Park, Australia", country: " Australia"}, {place: "Bahrain International Circuit, Bahrain", country: " Bahrain"}, {place: "Imola, italy", country: " italy"}, {place: "Portimao, Portugal", country: " portugal"}, {place: "Shanghai International Circuit, china", country: " china"}, {place: "Circuit de Barcelona-Catalunya, Spain", country: " spain"}, {place: "Circuit de Monaco, Monaco", country: " monaco"}, {place: "Baku City Circuit, Azerbaijan", country: " Azerbaijan"}, {place: "Circuit Gilles Villeneuve, Canada", country: "Canada"}, {place: "Circuit Paul Ricard, France", country: " France"}, {place: "Red Bull Ring, Austria", country: "Austria"}, {place: "Silverstone, Britain", country: " Britain"}, {place: "Hungaroring, Hungary", country: " Hungary"}, {place: "Spa-Francorchamps, Belgium", country: " Belgium"}, {place: "Zandvoort, Netherlands", country: " Netherlands"}, {place: "Monza, Italy", country: " Italy"}, {place: "Sochi Autodrom, Russia", country: " Russia"}, {place: "Marina Bay, Singapore", country: " Singapore"}, {place: "Suzuka, Japan", country: " Japan"}, {place: "Circuit of the Americas, USA", country: 'Usa'}, {place:'Circuit Hermanos Rodriguez, Mexico', country:'Mexico'}, {place:'Interlagos, Brazil', country:'Brazil'}, {place:'Jeddah Street Circuit, Saudi Arabia', country:'Saudi Arabia'}, {place:'Yas Marina Circuit, UAE', country:'UAE'}]
console.log(locations[0].country)
console.log(`flags/${locations[0].country.trim()}.png`)
let goalTime = []
let myTimeS = []

for(i=0; i < locations.length; i++){
let trackprofile = document.createElement('div')
trackprofile.style.display = 'flex'
trackprofile.style.flexDirection = 'row'
trackprofile.style.marginLeft = '10px'
trackprofile.style.paddingRight = '90px'
trackprofile.className = "track-profile"
let imagediv = document.createElement('div')
let picture = document.createElement('img')

picture.src = "/flags/"+locations[i].country.toLowerCase().trim()+".png"

picture.style.objectFit = 'cover'
picture.style.height = '100px'
picture.style.width = '150px'
picture.style.borderRadius = '20px'
imagediv.appendChild(picture)

imagediv.display = 'flex'
imagediv.style.alignItems = 'flex-start';
imagediv.style.borderImageSlice =  1;
imagediv.style.border = '4px solid';
imagediv.style.borderRadius = '25px'
imagediv.style.height = '100px'
imagediv.style.width = '150px'
imagediv.style.margin = '5px'


let details = document.createElement('div')
details.display = 'flex'
details.style.lineHeight = '12px'
details.style.margin = '0px 0px 0px 10px'
details.style.alignItems = 'flex-start';
details.style.color = 'beige';



let circuitName = document.createElement('p')
circuitName.innerText = 'Circuit: ' + locations[i].place
circuitName.style.width = '320px'
let goaltime = document.createElement('p')
goaltime.innerText = 'Ai Time: ' + "N/A"
let myTime = document.createElement('p')
myTime.innerText = "Rob's Time: " + "N/A"

details.appendChild(circuitName)
details.appendChild(goaltime)
details.appendChild(myTime)
trackprofile.appendChild(imagediv)
trackprofile.appendChild(details)

document.getElementById("track-template").appendChild(trackprofile)
}


/*
object-fit: cover;

    height: 200px;
    width: auto;
*/