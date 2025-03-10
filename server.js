// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';


// Doe een fetch naar de data die je nodig hebt
const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies')
const apiResponseJSON = await apiResponse.json()

// Controleer eventueel de data in je console
// (Let op: dit is _niet_ de console van je browser, maar van NodeJS, in je terminal)
// console.log(apiResponseJSON)


// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Maak een GET route voor de index (meestal doe je dit in de root, als /)

app.get('/', async function (request, response) {
  // Render index.liquid uit de Views map

  const responseFromAPI = await fetch('https://fdnd-agency.directus.app/items/dda_agencies');
    
  // Zet de JSON-gegevens om naar een object
  const jsonResponse = await responseFromAPI.json();
  const data = jsonResponse.data 

  console.log(jsonResponse.data);

response.render('index.liquid', { leden: data })
})

// https://fdnd-agency.directus.app/items/dda_agencies?fields=title filteren op alleen titel
// https://fdnd-agency.directus.app/items/dda_agencies?fields=province_string filteren op provincie
// https://fdnd-agency.directus.app/items/dda_agencies?filter={"province_string" : "Noord-Holland"} filteren per provincie



app.get('/leden/bedrijf/:id', async function (request, response) {
  // Render index.liquid uit de Views map
  // Geef hier eventueel data aan mee
  response.render('lid.liquid')
})


{/* <option value="Alle provincies">Alle provincies</option>
<option value="Noord-Holland">Noord-Holland</option>
<option value="Zuid-Holland">Zuid-Holland</option>
<option value="Groningen">Groningen</option>
<option value="Friesland">Friesland</option>
<option value="Drenthe">Drenthe</option>
<option value="Overijssel">Overijssel</option>
<option value="Flevoland">Flevoland</option>
<option value="Gelderland">Gelderland</option>
<option value="Utrecht">Utrecht</option>
<option value="Limburg">Limburg</option>
<option value="Noord-Brabant">Noord-Brabant</option>
<option value="Zeeland">Zeeland</option> */}

app.get('/Noord-Holland', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?filter={"province_string" : "Noord-Holland"} ')
  const apiResponseJSON = await apiResponse.json()
  console.log(apiResponseJSON.data)
 
  response.render('index.liquid', { leden: apiResponseJSON.data })
})
 
app.get('/Zuid-Holland', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?filter={"province_string" : "Zuid-Holland"} ')
  const apiResponseJSON = await apiResponse.json()
  console.log(apiResponseJSON.data)
 
  response.render('index.liquid', { leden: apiResponseJSON.data })
})
 
app.get('/Groningen', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?filter={"province_string" : "Groningen"} ')
  const apiResponseJSON = await apiResponse.json()
  console.log(apiResponseJSON.data)
 
  response.render('index.liquid', { leden: apiResponseJSON.data })
})
 
app.get('/Friesland', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?filter={"province_string" : "Friesland"} ')
  const apiResponseJSON = await apiResponse.json()
  console.log(apiResponseJSON.data)
 
  response.render('index.liquid', { leden: apiResponseJSON.data })
})
 
app.get('/Drenthe', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?filter={"province_string" : "Drenthe"} ')
  const apiResponseJSON = await apiResponse.json()
  console.log(apiResponseJSON.data)
 
  response.render('index.liquid', { leden: apiResponseJSON.data })
})

 
app.get('/Overijssel', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?filter={"province_string" : "Overijssel"} ')
  const apiResponseJSON = await apiResponse.json()
  console.log(apiResponseJSON.data)
 
  response.render('index.liquid', { leden: apiResponseJSON.data })
})
 
 
app.get('/Flevoland', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?filter={"province_string" : "Flevoland"} ')
  const apiResponseJSON = await apiResponse.json()
  console.log(apiResponseJSON.data)
 
  response.render('index.liquid', { leden: apiResponseJSON.data })
})
 
 
app.get('/Gelderland', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?filter={"province_string" : "Gelderland"} ')
  const apiResponseJSON = await apiResponse.json()
  console.log(apiResponseJSON.data)
 
  response.render('index.liquid', { leden: apiResponseJSON.data })
})
 
 
app.get('/Utrecht', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?filter={"province_string" : "Utrecht"} ')
  const apiResponseJSON = await apiResponse.json()
  console.log(apiResponseJSON.data)
 
  response.render('index.liquid', { leden: apiResponseJSON.data })
})

app.get('/Limburg', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?filter={"province_string" : "Limburg"} ')
  const apiResponseJSON = await apiResponse.json()
  console.log(apiResponseJSON.data)
 
  response.render('index.liquid', { leden: apiResponseJSON.data })
})

app.get('/Noord-Brabant', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?filter={"province_string" : "Noord-Brabant"} ')
  const apiResponseJSON = await apiResponse.json()
  console.log(apiResponseJSON.data)
 
  response.render('index.liquid', { leden: apiResponseJSON.data })
})
 
app.get('/Zeeland', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?filter={"province_string" : "Zeeland"} ')
  const apiResponseJSON = await apiResponse.json()
  console.log(apiResponseJSON.data)
 
  response.render('index.liquid', { leden: apiResponseJSON.data })
})



 


//  sorteren
app.get('/A-Z', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?sort=title')
  const apiResponseJSON = await apiResponse.json()
  console.log(apiResponseJSON.data)
 
  response.render('index.liquid', { leden: apiResponseJSON.data })
})

app.get('/Z-A', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?sort=-title')
  const apiResponseJSON = await apiResponse.json()
  console.log(apiResponseJSON.data)
   
  response.render('index.liquid', { leden: apiResponseJSON.data })
})
  
app.get('/colleagues', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?sort=colleagues')
  const apiResponseJSON = await apiResponse.json()
  console.log(apiResponseJSON.data)
   
  response.render('index.liquid', { leden: apiResponseJSON.data })
})




// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
// Hier doen we nu nog niets mee, maar je kunt er mee spelen als je wilt
app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  response.redirect(303, '/')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
