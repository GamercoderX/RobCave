let locations = [{place: "Mandalika, Indonesia", country: " indonesia"}, {place: "Rio Hondo, Argentina", country: " argentina"}, {place: "Cota, USA", country: " usa"}, {place: "Portimao, Portugal", country: " portugal"}, {place: "Jerez, Spain", country: " spain"}, {place: "Le Mans, France", country: " france"}, {place: "Mugello, Italy", country: " Italy"}, {place: "Barcelona, Catalonia", country: " spain"}, {place: "Sachsenring, Germany", country: " Germany"}, {place: "Assen, Netherlands", country: " Netherlands"}, {place: "Kymi Ring, Finland", country: " Finland"}, {place: "Silverstone, Britain", country: " Britain"}, {place: "Red Bull Ring, Austria", country: " Austria"}, {place: "Misano, San Marino", country: " San Marino"}, {place: "Motorland, Aragon", country: " Aragon"}, {place: "Motegi, Japan", country: " Japan"}, {place: "Chang, Thailand", country: " Thailand"}, {place: "Philip Island, Australia", country: " Australia"}, {place: "Sepang, Malaysia", country: " Malaysia"}, {place: "Ricardo Tormo, Valencia", country: " spain"}]

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