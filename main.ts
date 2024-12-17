// api test chuck norris jokes
// const chuck = () => {
//   fetch("https://api.chucknorris.io/jokes/random")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.value);
//     });
// };
// chuck();
//-----------------------------------------------------------------------------------------------------------------/
// console.log("rad 10");
// const url = "https://api.chucknorris.io/jokes/";

// const getRandomJoke = async (): Promise<string> => {
//   const response = await fetch(url + "random");
//   const data = await response.json();
//   return data.value;

// };
// console.log(getRandomJoke());

// const url = "https://api.chucknorris.io/jokes/";

// const getRandomJoke = async (): Promise<string> => {
//   const response = await fetch(url + "random");
//   const data = await response.json();

//   return data.value;
// };

// console.log(await getRandomJoke());
///////////////////////////////////////////////////////////////////////////////////////////
// random beer
// const baseUrl = "https://api.openbrewerydb.org/breweries";

// // Funktion för att hämta alla bryggerier och välja ett slumpmässigt
// const getRandomBrewery = async (): Promise<string | null> => {
//   try {
//     // Försök först med `/random` endpoint
//     let response = await fetch(`${baseUrl}/random`);
//     let data = await response.json();

//     // Om `/random` inte returnerar giltig data, använd fallback
//     if (!data || !data.name) {
//       console.warn("Ingen data från `/random`. Hämtar lista istället...");

//       response = await fetch(baseUrl);
//       const breweries = await response.json();

//       if (Array.isArray(breweries) && breweries.length > 0) {
//         // Slumpa ett bryggeri från listan
//         const randomBrewery =
//           breweries[Math.floor(Math.random() * breweries.length)];
//         return randomBrewery.name || null;
//       } else {
//         console.error("Ingen bryggeridata tillgänglig.");
//         return null;
//       }
//     }

//     // Returnera namnet från `/random`
//     return data.name;
//   } catch (error) {
//     console.error("Ett fel inträffade:", error);
//     return null;
//   }
// };

// // Använd funktionen
// getRandomBrewery().then((name) => {
//   if (name) {
//     console.log("Bryggeriets namn:", name);
//   } else {
//     console.log("Ingen bryggeri hittades.");
//   }
// });
/////////////////////////////////////////////////////////////////////////////////////////
// random cocktail

// const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

// const getRandomDrink = async (): Promise<string> => {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data.drinks[0].strDrink;
// };
// console.log(await getRandomDrink());

///////////////////////////////////////////////////////////////////////////////////////////////
// document.getElementById("random")?.addEventListener("click", async () => {
//   const url = "https://api.gameofthronesquotes.xyz/v1/random";

//   const getRandomQuote = async (): Promise<string> => {
//     const response = await fetch(url);
//     const data = await response.json();
//     return `My name is ${data.character.name} and my quote is: "${data.sentence}"`;
//   };

//   const quote = await getRandomQuote();
//   const p = document.createElement("p");
//   p.innerHTML = quote;

//   document.getElementById("quote-container")?.appendChild(p);
// });
////////////////////////////////////////////////////////////////////////

// random jokes
// document.getElementById("random")?.addEventListener("click", async () => {
//   const url = "https://official-joke-api.appspot.com/random_joke"

//   const getRandomJokes = async (): Promise<string> => {
//     const response = await fetch(url);
//     const random = await response.json();
//     return random.type + ": " + random.setup + " " + random.punchline;
//   };

//   const quote = await getRandomJokes();
//   const p = document.createElement("p");
//   p.innerHTML = quote;

//   document.getElementById("quote-container")?.appendChild(p);
//   console.log(await getRandomJokes());
// })
//////////////////////////////////////////////
// api potter
document.getElementById("random")?.addEventListener("click", async () => {
  const url = "https://hp-api.onrender.com/api/characters";

  
  const getRandomCharacter = async (): Promise<string> => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const data = await response.json();
      const character = data[0]; 
      return `
        <strong>Name:</strong> ${character.name}<br>
        <strong>House:</strong> ${character.house}<br>
        <strong>Patronus:</strong> ${character.patronus}<br>
        <strong>Species:</strong> ${character.species}<br>
        <strong>Wand:</strong> ${character.wand.wood || "Unknown"} wood, 
          ${character.wand.core || "Unknown"} core, 
          ${character.wand.length || "Unknown"} length<br>
        <strong>Hogwarts Role:</strong> ${
          character.hogwartsStudent
            ? "Student"
            : character.hogwartsStaff
              ? "Staff"
              : "None"
        }<br>
        <strong>Actor:</strong> ${character.actor}<br>
        <strong>Status:</strong> ${character.alive ? "Alive" : "Deceased"}<br>
        ${
          character.image
            ? `<img src="${character.image}" alt="${character.name}" style="max-width:200px; margin-top:10px;">`
            : ""
        }
      `;
    } catch (error) {
      console.error("Error fetching character:", error);
      return "Failed to fetch character data.";
    }
  };


  const quoteContainer = document.getElementById("quote-container");
  if (!quoteContainer) return;

  const quote = await getRandomCharacter();
  const p = document.createElement("div"); 
  p.classList.add("character-card"); 
  p.innerHTML = quote;

  quoteContainer.appendChild(p);
});

