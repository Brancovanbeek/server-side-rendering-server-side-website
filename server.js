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
  response.render('index.liquid'  )
})

app.get('/leden/lid/:id', async function (request, response) {
  
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies/' + request.params.id)
  const apiResponseJSON = await apiResponse.json() 

  response.render('lid.liquid', { lidDetails: apiResponseJSON.data });
})

app.get('/leden', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies')
  const apiResponseJSON = await apiResponse.json()
  console.log(request.params.id)
 
  response.render('leden.liquid', { leden: apiResponseJSON.data })
})



app.get('/leden/:id', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?filter={"province_string" : "'+ request.params.id+'"} ')
  const apiResponseJSON = await apiResponse.json()
  console.log(request.params.id)
 
  response.render('leden.liquid', { leden: apiResponseJSON.data })
})

//  sorteren
app.get('/leden/zoeken/:wat', async function (request, response) {
  let searcher;
  if (request.params.wat == "az") {
    searcher = 'title';
  } else if (request.params.wat == "za") {
    searcher = '-title';
  } else if (request.params.wat == "colleagues") {
    searcher = 'colleagues';
  } else {
    searcher = "";
  }
  
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies?sort=' + searcher);
  const apiResponseJSON = await apiResponse.json();
  console.log(request.params.wat);
  
  response.render('leden.liquid', { leden: apiResponseJSON.data });
});

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
