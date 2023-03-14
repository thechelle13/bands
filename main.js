// for of loop to iterate the array of bands
// if else conditional to push into proper array


// const bands = ["Van Halen", "Nirvana", "Johny Cash", "Taylor Swift", "John Coltrane"]


// const country = []
// const grunge = []
// const hardRock = []
// const pop = []
// const jazz = []

// for ( const band of bands) { console.log(band)}

// const bandFilter = () => {

// for (const band of bands){
//     if (band ==="Van Halen" || band ==="Aerosmith") {
//         hardRock.push(band)
//     } else if (band === "Nirvana") {
//         grunge.push(band) 
//     } else if (band ==="Johny Cash") {
//         country.push(band) 
//     } else if (band === "Taylor Swift") {
//         pop.push(band)
//     } else if(band ==="John Coltrane") {
//         jazz.push(band)
//     }
        
//  }

//              console.log(country, grunge, hardRock, pop, jazz)
// }

// bandFilter()



const bands = [
    {
        id: 1,
        name: "Van Halen",
        era: 80,
        instruments: ["guitar", "drums","bass", "mic"]
    },
    {
        id: 1,
        name: "Van Halen",
        era: 80,
        instruments: ["guitar", "drums","bass"]
    }
]




for (const band of bands) {
    console.log(band.instruments)
    for (const instrument of band.instruments){
        console.log(instrument)
    }
}