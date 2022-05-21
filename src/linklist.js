const links = [
  {
    title: "Wordle",
    url: "https://www.nytimes.com/games/wordle/index.html",
    description: "The original, now owned by the New York Times",
    categories: ["word"],
  },
  {
    title: "Quordle",
    url: "https://www.quordle.com/",
    description: "wordle x 4",
    categories: ["word"],
  },
  {
    title: "Octordle",
    url: "https://octordle.com/",
    description: "wordle x 8",
    categories: ["word"],
  },
  {
    title: "Worldle",
    url: "https://worldle.teuteuf.fr/",
    description: "guess the country by silhouette",
    categories: ["geography"],
  },
  {
    title: "Globle",
    url: "https://globle-game.com/game",
    description: "guess the country",
    categories: ["geography"],
  },
  {
    title: "Tradle",
    url: "https://oec.world/en/tradle/",
    description: "guess the country by major exports",
    categories: ["geography"],
  },
  {
    title: "Moviedle",
    url: "https://www.moviedle.app/",
    description: "guess the movie from a 1-second clip",
    categories: ["media"],

  },
  {
    title: "Heardle",
    url: "https://www.heardle.app/",
    description: "Guess the song",
    categories: ["media"],
  },
  {
    title: "Semantle",
    url: "https://semantle.com/",
    description: "Guess the word based on semantic similarity",
    categories: ["word"],
  },
  {
    title: "Absurdle",
    url: "https://qntm.org/files/absurdle/absurdle.html",
    description: "Wordle that is intentionally super hard",
    categories: ["word"],
  },
  {
    title: "Lewdle",
    url: "https://www.lewdlegame.com/",
    description: "Guess the naughty word",
    categories: ["rude"],
  },
  {
    title: "Primel",
    url: "https://converged.yt/primel/",
    description: "Guess the 5-digit prime number",
    categories: ["math"],
  },
  {
    title: "Sweardle",
    url: "https://sweardle.com/",
    description: "guess the 4-letter word",
    categories: ["rude"],
  },
  {
    title: "Queerdle",
    url: "https://queerdle.com/",
    description: "Guess the word from LGBTQ+ vocabulary",
    categories: ["word"],
  },
  {
    title: "Taylordle",
    url: "https://www.taylordle.com/",
    description: "Guess the word from taylor swift related word",
    categories: ["funny"],
  },
  {
    title: "BTS-dle",
    url: "https://bts-wordle.vercel.app/",
    description: "Guess the BTS related word",
    categories: ["funny"],
  },
  {
    title: "Wordle Unlimited",
    url: "https://wordplay.com/",
    description: "find the word with unlimited guesses",
    categories: ["word"],
  },

  {
    title: "Searchdle",
    url: "https://wtfseo.com/searchdle/",
    description: "SEO parody of wordle",
    categories: ["funny"],
  },

  {
    title: "Jewdle",
    url: "https://www.jewdle.app/",
    description: "Guess the word related to Judaism",
    categories: ["word"],
  },
  {
    title: "Star Wordle",
    url: "https://www.starwordle.com/",
    description: "Guess the Star Wars related word",
    categories: ["funny"],
  },
  {
    title: "Waffle",
    url: "https://wafflegame.net/",
    description: "find the word by swapping letters in a grid",
    categories: ["word"],
  },
  {
    title: "Framed",
    url: "https://framed.wtf/",
    description: "Guess the movie from a single frame",
    categories: ["media"],
  },
  {
    title: "Squirdle",
    url: "https://squirdle.fireblend.com/",
    description: "Guess the Pokemon",
    categories: ["funny"],
  },
  {
    title: "Crosswordle",
    url: "https://crosswordle.vercel.app/",
    description: "Start with the wordle answer and work backwards",
    categories: ["word"],
  },
  {
    title: "dungleon",
    url: "https://www.dungleon.com/",
    description: "Guess the dungeon layout",
    categories: ["media"],
  },
  {
    title: "Nerdle",
    url: "https://nerdlegame.com/",
    description: "Guess the equation",
    categories: ["math"],
  },
  {
    title: "Box Office Game",
    url: "https://boxofficega.me/",
    description: "Guess the 5 highest-grossing movies for the given weekend",
    categories: ["media"],
  },
  {
    title: "Squabble",
    url: "https://squabble.me/",
    description: "Competetive battle-royale wordle",
    categories: ["word"],
  },
  {
    title: "Speedle",
    url: "https://tck.mn/speedle/",
    description: "Wordle Speedrun",
    categories: ["word"],
  },
  {
    title: "Passwordle",
    url: "https://passwordle.com/",
    description: "crack the password",
    categories: ["word"],
  },
];

/* template
{
  title: "",
  url: "",
  description: "",
  categories: [""],
},
*/

function sortByCategory(a,b) {
  if (a.title === "Wordle") return -1;
  if (b.title === "Wordle") return 1;
  return a.categories[0] < b.categories[0] ? 1 : -1;
}

export default links.sort(sortByCategory);
