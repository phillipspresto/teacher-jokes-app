const jokesObj = [
    {
      "ID": 1,
      "Joke": "What did the bartender say to the jumper cables? You better not try to start anything."
    },
    {
      "ID": 2,
      "Joke": "Don't you hate jokes about German sausage? They're the wurst!"
    },
    {
      "ID": 3,
      "Joke": "Two artists had an art contest... It ended in a draw"
    },
    {
      "ID": 4,
      "Joke": "Why did the chicken cross the playground? To get to the other slide."
    },
    {
      "ID": 5,
      "Joke": "What gun do you use to hunt a moose? A moosecut!"
    },
    {
      "ID": 6,
      "Joke": "If life gives you melons, you might have dyslexia."
    },
    {
      "ID": 7,
      "Joke": "Broken pencils... ...are pointless."
    },
    {
      "ID": 8,
      "Joke": "What did one snowman say to the other snowman? 'Do you smell carrots?'"
    },
    {
      "ID": 9,
      "Joke": "How many hipsters does it take to change a lightbulb? It's a really obscure number. You've probably never heard of it."
    },
    {
      "ID": 10,
      "Joke": "Where do sick boats go? The dock!"
    },
    {
      "ID": 12,
      "Joke": "My girlfriend told me she was leaving me because I keep pretending to be a Transformer... I said, No, wait! I can change!"
    },
    {
      "ID": 13,
      "Joke": "Old Chinese proverb: Man who not shower in 7 days makes one reek."
    },
    {
      "ID": 15,
      "Joke": "What form of radiation bakes you cookies? A gramma ray"
    },
    {
      "ID": 17,
      "Joke": "What's the loudest economic system? CAPITALISM"
    },
    {
      "ID": 18,
      "Joke": "I went for a job interview today... The interviewer said to me, What would you say your greatest weakness is? I said, I think Id have to say my listening skills are my greatest strength."
    },
    {
      "ID": 19,
      "Joke": "Who was the knight that invented the round table? Sir Cumference."
    },
    {
      "ID": 20,
      "Joke": "What did the German air force eat for breakfast during WW2? Luftwaffles"
    },
    {
      "ID": 22,
      "Joke": "What did the number zero say to the number eight? 'Nice belt.'"
    },
    {
      "ID": 23,
      "Joke": "What's worse than a centipede with sore feet? A giraffe with a sore throat"
    },
    {
      "ID": 24,
      "Joke": "What's red and bad for your teeth? A brick."
    },
    {
      "ID": 27,
      "Joke": "Wanna hear a joke about unemployed people? Nevermind, they don't work."
    },
    {
      "ID": 29,
      "Joke": "How much did the skeleton charge for his excellent legal services? An arm and a leg."
    },
    {
      "ID": 30,
      "Joke": "Why do gorillas have such big nostrils? Cos they got big fingers."
    },
    {
      "ID": 31,
      "Joke": "What is the difference between a Siberian husky and an Alaskan husky? About 1500 miles."
    },
    {
      "ID": 32,
      "Joke": "What do vegan zombies eat? GRAAAIIINSSS!"
    },
    {
      "ID": 34,
      "Joke": "What do you call a car that eats other cars? A carnivore."
    },
    {
      "ID": 35,
      "Joke": "Why did the golfer wear two pairs of pants? In case he gets a hole in one"
    },
    {
      "ID": 36,
      "Joke": "An Olympic gymnast walked into a bar... She didnt get a medal..."
    },
    {
      "ID": 37,
      "Joke": "What does a mexican magician make for breakfast? Toast-tah-dahs!"
    },
    {
      "ID": 38,
      "Joke": "Why don't Bond villains feel cold in the winter? Because they dress in lairs."
    },
    {
      "ID": 42,
      "Joke": "Knock knock... Who's there? I did up. I did up-who?"
    },
    {
      "ID": 44,
      "Joke": "What type of school did Sherlock Holmes go to? Elementary"
    },
    {
      "ID": 45,
      "Joke": "My friend told an out of place joke about police searches. But I don't think it was warranted."
    },
    {
      "ID": 47,
      "Joke": "Why did the vampire use mouthwash? Because he had bat breath"
    },
    {
      "ID": 48,
      "Joke": "What did the corn say when it was complemented? Aww, shucks!"
    },
    {
      "ID": 50,
      "Joke": "Why did the Fall break off from all the other seasons? Because it wanted autumnomy"
    },
    {
      "ID": 51,
      "Joke": "If I ever fire someone who is a Taylor Swift fan I'll say 'I knew you were trouble when you clocked in.'"
    },
    {
      "ID": 52,
      "Joke": "What do you do if a cow is in the middle of the road you're driving on? steer clear"
    },
    {
      "ID": 53,
      "Joke": "What do you call a blind buck? No eye-deer."
    },
    {
      "ID": 55,
      "Joke": "There was a depressed sausage... he thought his life was THE WURST."
    },
    {
      "ID": 56,
      "Joke": "What's a dog's favorite mode of transportation? A waggin'"
    },
    {
      "ID": 58,
      "Joke": "What happened to the tyrannical peach? He got impeached!"
    },
    {
      "ID": 59,
      "Joke": "Why do elephants paint their toenails red? So they can hide in cherry trees. You ever seen an elephant in a cherry tree? *Then it's working*."
    },
    {
      "ID": 61,
      "Joke": "What did the German physicist use to drink his beer? Ein stein."
    },
    {
      "ID": 62,
      "Joke": "What did earth say to the other planets? You guys have no life!"
    },
    {
      "ID": 64,
      "Joke": "Wanna hear a dirty joke? Two white stallions fell in the mud."
    },
    {
      "ID": 65,
      "Joke": "What did one frog say to the other frog? Time's fun when you're having flies."
    },
    {
      "ID": 66,
      "Joke": "Why did the boy take a pencil and paper to bed? He was told to draw the curtains before going to sleep."
    },
    {
      "ID": 67,
      "Joke": "Why do sorority girls only travel in odd numbered groups? Because they *can't even*!"
    },
    {
      "ID": 70,
      "Joke": "I'm reading a book about anti-gravity... ... It's impossible to put down"
    },
    {
      "ID": 72,
      "Joke": "Why is Dr. Frankenstein never lonely? He's good at making friends."
    },
    {
      "ID": 73,
      "Joke": "What do you call a pig that does karate? A pork chop."
    },
    {
      "ID": 74,
      "Joke": "What was the car doing in the dressing room? Changing attire."
    },
    {
      "ID": 75,
      "Joke": "What do you call a pile of dogs? A ruff terrain."
    },
    {
      "ID": 76,
      "Joke": "How do you prepare for a party in space? You Planet"
    },
    {
      "ID": 78,
      "Joke": "Why did the bicycle fall over? Because it was two-tired"
    },
    {
      "ID": 80,
      "Joke": "Which kitchen appliance tells the best jokes? The eggbeater - he cracks everybody up!"
    },
    {
      "ID": 81,
      "Joke": "Why did the jellyroll? He saw the apple turnover."
    },
    {
      "ID": 84,
      "Joke": "What do dwarves use to cut their pizza? Little Caesars"
    },
    {
      "ID": 85,
      "Joke": "What did the fish say when it hit the wall? Dam."
    },
    {
      "ID": 87,
      "Joke": "Where did Napoleon keep his armies? In his sleevies!"
    },
    {
      "ID": 90,
      "Joke": "What did Vincent van Gogh call himself when he joined the Justice League? The Starry Knight"
    },
    {
      "ID": 91,
      "Joke": "Why did the boy take a ladder to school? He wanted to go to high school."
    },
    {
      "ID": 92,
      "Joke": "What's the best thing to put into a pie? Your teeth."
    },
    {
      "ID": 94,
      "Joke": "What do you get when you cross a firecracker and a duck? A firequacker."
    },
    {
      "ID": 95,
      "Joke": "What's a baker's biggest fear? Something going a-rye while they're raisin' bread."
    },
    {
      "ID": 98,
      "Joke": "This dermatologist waits a month to diagnose a skin disorder... She's reluctant to make a rash decision."
    },
    {
      "ID": 100,
      "Joke": "What did one casket say to the other? 'Is that you coffin?'"
    },
    {
      "ID": 103,
      "Joke": "What is a martian's favourite chocolate? A mars bar"
    },
    {
      "ID": 105,
      "Joke": "What did the cow say when it saw the farmer twice in one day? Deja Moo!"
    },
    {
      "ID": 108,
      "Joke": "What do you call a sleeping dinosaur? A dino-snore."
    },
    {
      "ID": 109,
      "Joke": "Breaking news! Energizer Bunny arrested... ...charged with battery."
    },
    {
      "ID": 111,
      "Joke": "What did the butcher say when he handed his customer an empty pack of hotdogs on halloween? Happy halloweenie"
    },
    {
      "ID": 112,
      "Joke": "Can February March? No, but April May."
    },
    {
      "ID": 113,
      "Joke": "What's the internal temperature of a Taun-Taun? Lukewarm"
    },
    {
      "ID": 114,
      "Joke": "What's it called when a planet orbits its sun 8 times? An orbyte"
    },
    {
      "ID": 115,
      "Joke": "Why are there only two hundred and thirty nine beans in a bowl of bean soup? Because just one more and it would be two-farty"
    },
    {
      "ID": 116,
      "Joke": "What does a nosey pepper do? It gets jalapeno business."
    },
    {
      "ID": 118,
      "Joke": "what does clark kent have for breakfast? alter-eggos"
    },
    {
      "ID": 121,
      "Joke": "Two drums and a cymbal fall off a cliff... ba-dum tss"
    },
    {
      "ID": 123,
      "Joke": "Where do pots go on vacation? JaPAN!"
    },
    {
      "ID": 126,
      "Joke": "Did you hear about the scarecrow who won the Nobel Prize? He was outstanding in his field."
    },
    {
      "ID": 127,
      "Joke": "A man was caught stealing in a supermarket today while balanced on the shoulders of a couple of vampires. He was charged with shoplifting on two counts."
    },
    {
      "ID": 129,
      "Joke": "Every morning I run around the block 5 times... ...Then I slide the block back under the bed and go back to sleep"
    },
    {
      "ID": 131,
      "Joke": "Why do cicadas stay up all night chirping irregularly, unable to sleep? Their cicadan rhythm is off"
    },
    {
      "ID": 137,
      "Joke": "Have you heard what I think of windmills? Big Fan."
    },
    {
      "ID": 138,
      "Joke": "Max wondered why the ball was slowly growing larger... and then it hit him."
    },
    {
      "ID": 139,
      "Joke": "I saw a documentary on how they make jeans... It was riveting."
    },
    {
      "ID": 141,
      "Joke": "Did you hear about the homemade poison ivy remedy? You can make it from scratch."
    },
    {
      "ID": 144,
      "Joke": "I bought a duckdoo yesterday! 'What's a duckdoo?' 'quack, quack'"
    },
    {
      "ID": 145,
      "Joke": "What do you call Batman skipping church? Christian Bail."
    },
    {
      "ID": 147,
      "Joke": "Why did the mobster buy a planner? So he could organize his crime"
    },
    {
      "ID": 150,
      "Joke": "Why do they make Raisin Bran commercials? For raisin bran awareness."
    },
    {
      "ID": 151,
      "Joke": "What do you call a bald porcupine? Pointless!"
    },
    {
      "ID": 152,
      "Joke": "Where does the thumb meet its type? At the SPACE BAR!"
    },
    {
      "ID": 155,
      "Joke": "What the plate say to the other plate? Dinners on me"
    },
    {
      "ID": 158,
      "Joke": "I wanted to put a pizza joke here ...but it was too saucy."
    },
    {
      "ID": 159,
      "Joke": "What do you call a cow that just gave birth? Decaffeinated"
    },
    {
      "ID": 160,
      "Joke": "Why did the bee go to the doctor? Because he had hives."
    },
    {
      "ID": 161,
      "Joke": "How many ears does Captain Picard have? A right ear. A left ear. And a final front ear."
    },
    {
      "ID": 162,
      "Joke": "What type of doctor prescribes Coke and 7-up for a living? A Poptometrist!"
    },
    {
      "ID": 164,
      "Joke": "Why was the healthy potato not allowed on the plane? He was on the No Fry list."
    },
    {
      "ID": 165,
      "Joke": "I saw an all frog production of Frozen yesterday... It was toad-aly cool!"
    },
    {
      "ID": 167,
      "Joke": "If you ever get cold, just stand in the corner of a room for a while. *They're normally around 90 degrees.*"
    },
    {
      "ID": 170,
      "Joke": "How many magazines did the racquetball company make before going out of business? Tennis shoes."
    },
    {
      "ID": 171,
      "Joke": "Why was the actor detained by airport security? He said he was in town to shoot a pilot."
    },
    {
      "ID": 172,
      "Joke": "What did the llama say when asked to a picnic? Alpaca lunch!"
    },
    {
      "ID": 175,
      "Joke": "What electronic device leaves behind a lot of broken glass? A PC, seeing how they typically run on Windows!"
    },
    {
      "ID": 176,
      "Joke": "Why did the orange move to veggieland? So he could live in peas and hominy."
    },
    {
      "ID": 178,
      "Joke": "What do you call beef that's been burned? A mis-steak."
    },
    {
      "ID": 179,
      "Joke": "How do cows get their gossip? They herd it through the bovine."
    },
    {
      "ID": 181,
      "Joke": "Why doesn't the Sun go to college? Because he already has a million degrees."
    },
    {
      "ID": 182,
      "Joke": "What do you call a sheep with no legs? A cloud."
    },
    {
      "ID": 183,
      "Joke": "JKLMNOPQRST That's all that stands between U and I"
    },
    {
      "ID": 187,
      "Joke": "Shall I tell you the joke about the body snatchers? Best not, you might get carried away."
    },
    {
      "ID": 188,
      "Joke": "Gravity makes a terrible friend. It's always holding you down."
    },
    {
      "ID": 193,
      "Joke": "How do you stop a charging bull? Take away its credit card!"
    },
    {
      "ID": 194,
      "Joke": "Two antennas met on a roof, they fell in love and got married, the ceremony was awful but the reception was brilliant."
    },
    {
      "ID": 195,
      "Joke": "Is it just me... ...or are circles pointless?"
    },
    {
      "ID": 196,
      "Joke": "Why do cows wear bells? Because their horns don't work."
    },
    {
      "ID": 202,
      "Joke": "Whatever you do, always give 100%... Unless of course, you're donating blood."
    },
    {
      "ID": 204,
      "Joke": "Why does the dog go to the gym? He wants to get ruff"
    },
    {
      "ID": 206,
      "Joke": "How do you make a squid laugh? Ten tickles."
    },
    {
      "ID": 207,
      "Joke": "What cars do wolves drive? Auuuuuuuuuuuuudis!"
    },
    {
      "ID": 208,
      "Joke": "What do you call a cow that doesn't give milk? A Milk Dud."
    },
    {
      "ID": 210,
      "Joke": "Why are locomotive drivers so good at driving locomotives? Because they were trained."
    },
    {
      "ID": 211,
      "Joke": "What do you call a number that cant keep still? A roamin numeral."
    },
    {
      "ID": 213,
      "Joke": "What did the Tin Man say when he got run over by a steamroller? Curses! Foil again!"
    },
    {
      "ID": 214,
      "Joke": "How can you tell that a straight pin is confused? Just look at it. It's headed in one direction and pointed in the other."
    },
    {
      "ID": 215,
      "Joke": "What is an astronaut's favorite meal? Launch"
    },
    {
      "ID": 216,
      "Joke": "What do you do to dead chemists? You barium."
    },
    {
      "ID": 217,
      "Joke": "Why did the tomato turned red? Because it saw the salad dressing"
    },
    {
      "ID": 218,
      "Joke": "Why are contortionists always angry? Their work usually has them pretty bent out of shape."
    },
    {
      "ID": 219,
      "Joke": "I never buy Velcro It's such a rip off."
    },
    {
      "ID": 1622,
      "Joke": "What is heavy forward but not backward? ton"
    }
  ]
// get random joke from jokes object ^^ and set to randomJoke variable
let valuesArray = Object.values(jokesObj);
let usedArray = [];


//add listener to button
const btn = document.querySelector(".btn");
btn.addEventListener("click", function(e) {
  if(valuesArray.length === 0) {
    valuesArray = usedArray;
    usedArray = [];
  }
    //DOM joke to container variable
    const randomValue = Math.floor(Math.random() * valuesArray.length);
    const randomJoke = jokesObj.splice(randomValue, 1);
    const randomJokeObj = randomJoke[0];
    const joke = randomJokeObj["Joke"];
    const textBox = document.querySelector("#jokes-text");
    if(textBox) {
      textBox.textContent = JSON.stringify(joke);
    }
});







  