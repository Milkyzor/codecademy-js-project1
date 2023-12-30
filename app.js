/*
// PLAN:

1 - Fictional Facts Generator.

2 - Facts will be based on When? What? Why? And how it happened? Dramatic or Funny Facts
        Facts -> Dramatic? Funny? -> When? What? Why? How? -> Fact (return string)
            Futuristic World > Single Sentences > Build Fact Template > Create list of elements > Need to make sense together
                `In ${year}, ${what} ${how}. ${why}!`

3 - Include comments in your code for clarity.

4 - Create and array of strings for each category.

5 - Functions:
        randomSelector(array);
        pickMood();
        factFactory (mood, {when, what, why, how});
            isFactRepetitive(mood, when, what, why, how)
            doesFactExist(fact, facts);
            pushAndReturFact(fact);
        submitString(category);

6 - Run your program multiple times and check for varied and random outputs.

7 - Use Git commands to track changes (git add, git commit) and regularly push updates to GitHub.

8 - Refactor code for efficiency and readability.

9 - Write a README file explaining your program, how to run it, and its features.

10 - Do a final round of testing.
*/


// ARRAYS TO WORK
let years = [2052, 2073, 2056, 2080, 2059, 2030, 2091, 2093, 2075, 2054, 2033, 2087, 2099, 2086, 2088, 2069, 2079, 2044, 2050, 2066, 2034, 2072, 2084, 2089, 2038, 2032, 2057, 2081, 2062, 2074, 2082, 2040, 2077, 2098, 2070, 2042, 2036, 2055, 2045, 2067];

let what = {
    dramatic: [
        "cities float into the sky",
        "oceans glow with electric light",
        "gigantic storms reverse their course",
        "the moon turns blood red",
        "massive earthquakes reshape continents",
        "a new island rises from the sea",
        "volcanoes erupt in tandem worldwide",
        "a comet passes extremely close to Earth",
        "the sun dims for several days",
        "all machines suddenly come to life",
        "a global aurora lights up the sky",
        "gravity fluctuates unpredictably",
        "a colossal tsunami engulfs coastlines",
        "a black hole appears near Earth",
        "the earth's rotation suddenly slows",
        "a planet-wide blackout occurs",
        "giant sinkholes swallow entire cities",
        "a mysterious force levitates objects",
        "time loops for twenty-four hours",
        "a global ice age begins",
        "solar flares disrupt all technology",
        "a parallel world becomes visible",
        "all animals start speaking human languages",
        "the atmosphere changes color",
        "a worldwide telepathic link is established"
    ],

    funny: [
        "cats will learn to use smartphones",
        "penguins will start a dance revolution",
        "robots will develop a taste for pizza",
        "aliens will join the Olympics",
        "cars will start flying to avoid traffic",
        "trees will start moving to find sunlight",
        "ice cream will become a currency",
        "squirrels will start trading stocks",
        "dogs will master the art of cooking",
        "clouds will spell out daily horoscopes",
        "birds will form a synchronized flying team",
        "mice will start a tech company",
        "fish will invent a new language",
        "shoes will become self-tying",
        "hats will float above heads",
        "bicycles will ride themselves",
        "lakes will turn into giant jelly pools",
        "sandwiches will make themselves",
        "monkeys will start a rock band",
        "elephants will paint abstract art",
        "snails will race in grand prix",
        "flowers will sing in the morning",
        "clocks will run backwards for fun",
        "rain will fall in different colors",
        "stars will rearrange nightly"
    ]
};


let how = {
    dramatic: [
        "in a breathtaking display",
        "with an eerie luminescence",
        "defying all scientific explanations",
        "casting a crimson hue everywhere",
        "altering the global landscape forever",
        "emerging from the ocean depths",
        "in a symphony of fire and ash",
        "causing global panic and wonder",
        "plunging the world into twilight",
        "in a surprising twist of fate",
        "painting the sky with vivid colors",
        "creating chaos and beauty",
        "in an apocalyptic wave",
        "stirring fear and fascination",
        "changing day and night cycles",
        "leaving humanity in darkness",
        "in a catastrophic natural event",
        "challenging the laws of physics",
        "in a perplexing temporal anomaly",
        "ushering a new ice epoch",
        "cutting off all modern conveniences",
        "blurring the line between realities",
        "in an unprecedented linguistic miracle",
        "transforming the skies above",
        "connecting minds across the globe"
    ],

    funny: [
        "with great enthusiasm",
        "as a new fashion trend",
        "to everyone's surprise",
        "causing worldwide amusement",
        "in a surprising twist",
        "while everyone watches",
        "becoming a global phenomenon",
        "and it's hilarious",
        "to much fanfare",
        "sparking a new trend",
        "breaking all the records",
        "making headlines everywhere",
        "as the latest craze",
        "with unexpected skill",
        "amazing everyone",
        "in a hilarious turn of events",
        "causing lots of laughter",
        "in the most comedic way",
        "becoming viral sensations",
        "with a touch of genius",
        "in a whimsical display",
        "charming all spectators",
        "as a fun anomaly",
        "brightening everyone's day",
        "in a spectacular show"
    ]
};


let why = {
    dramatic: [
        "Due to a mysterious cosmic phenomenon",
        "As a result of an alien intervention",
        "Triggered by an unforeseen astrological alignment",
        "This follows a series of rare celestial events",
        "Scientists attribute this to a drastic tectonic shift",
        "An undersea volcanic eruption causes this phenomenon",
        "Linked to a chain reaction of geological disturbances",
        "This is a once-in-a-millennium cosmic close call",
        "Astronomers speculate about a strange solar anomaly",
        "This is the outcome of a failed scientific experiment",
        "A natural marvel never before witnessed by humanity",
        "Caused by an unknown anomaly in Earth's magnetic field",
        "Marking the most devastating natural disaster in history",
        "Astronomers are baffled by this sudden gravitational shift",
        "This event redefines humanity's understanding of time",
        "Experts are calling this the onset of a mini ice age",
        "Solar activity reaches unprecedented levels",
        "Opening a gateway to an alternate universe",
        "This marks the first instance of interspecies communication",
        "Due to a sudden change in atmospheric conditions",
        "A global psychic event unfolds unexpectedly",
        "An enigmatic force disrupts the natural order",
        "This signifies a major evolutionary leap for Earth",
        "Resulting from a shift in the cosmic spectrum",
        "Scientists believe this is the dawn of a new age"
    ],

    funny: [
        "This happens due to a strange cosmic event",
        "It's all thanks to a quirky scientist's invention",
        "A mysterious glitch in reality makes this possible",
        "This is the result of an unexpected alien influence",
        "Turns out, it's a side effect of a new technology",
        "It all starts with a mischievous wizard's spell",
        "A hilarious accident in a secret lab causes this",
        "This occurs after a peculiar shift in the space-time continuum",
        "It's the outcome of an eccentric billionaire's experiment",
        "A comical mix-up in the laws of physics leads to this",
        "This is the surprising result of a global vote",
        "A magical meteor shower brings about these changes",
        "It's a weird side effect of climate change",
        "An ancient prophecy predicted this all along",
        "A time-traveling prankster is behind this",
        "It's the aftermath of the world's funniest joke",
        "A viral internet challenge goes unexpectedly right",
        "This is due to a breakthrough in comedy science",
        "It's all part of a new reality show",
        "A group of kids' wild imagination brings this to life",
        "This is the effect of a planet-wide happiness wave",
        "It turns out to be an elaborate social experiment",
        "A curious case of mass hypnosis causes this",
        "This happens after the discovery of laughonium",
        "It's a result of the world deciding to have more fun"
    ]
};


// Existing moods:
let mood = ['funny', 'dramatic'];


// Facts already created
let facts = {
    funny: [],
    dramatic: []
};



// FUNCTIONS:

// Picks a mood randomly
const pickMood = () => {
    const choosenMood = randomSelector(mood);
    return choosenMood;
}


// Selects a random element of an array
const randomSelector = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}


// Picks a random value of selected object and key
const randomSelectorObjectKeyValue = (object, key) => {
    return object[key][Math.floor(Math.random() * object[key].length)];
}

// Creates a new fact randomly.
// If fact already exists, logs a message and creates a new fact.
// If fact doesn't exist, logs the fact and pushes fact into facts
const factFactory = () => {
    let year = randomSelector(years);
    let choosenMood = pickMood();
    let whatComponent = randomSelectorObjectKeyValue(what, choosenMood);
    let howComponent = randomSelectorObjectKeyValue(how, choosenMood);
    let whyComponent = randomSelectorObjectKeyValue(why, choosenMood);

    let fact = `In ${year}, ${whatComponent} ${howComponent}. ${whyComponent}!`;

    if (facts[choosenMood].includes(fact)) {
        console.log('Fact already existed, new fact being created.')
        return factFactory();
    } else {
        console.log(fact);
        facts[choosenMood].push(fact);
    }
}


// Convert fact (added manually) to factFactory template.
function processFact(fact) {
    
    // Capitalize the first letter after '.', '!', or '?'
    fact = fact.replace(/([.!?])\s*(\w)/g, (m, p1, p2) => p1 + " " + p2.toUpperCase());
    console.log("Letter was capitalised");
    
    // Insert a space after ',', '.', '!', or '?'
    fact = fact.replace(/([,!.?])(\w)/g, "$1 $2");
    console.log("Space added between punctuation");

    //Lowercase first letter from fact
    fact = fact.charAt(0).toLowerCase() + fact.slice(1);

    return fact;
}


//Add facts manually to facts
function addFact(mood, year, fact) {
    mood = mood.toLowerCase();
    console.log("mood converted to lower case");

    fact = processFact(fact);
    console.log("Fact processed");

    fact = `In ${year}, ${fact}`;
    console.log("Fact converted to string");

    if (!facts[mood]) {
        facts[mood] = [fact];
        console.log("Mood created and fact pushed");
        console.log(fact);
    } else {
        if (!facts[mood].includes(fact)) {
            facts[mood].push(fact);
            console.log("Mood already existed and fact pushed");
            console.log(fact);
        } else {
            console.log("Fact already exists under this mood.");
        }
    }
}

// Running program
factFactory();