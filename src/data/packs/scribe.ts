import type { Pack } from "../../lib/types";

const pack: Pack = {
  id: "scribe",
  name: "The Scribe",
  theme: "People & time",
  blurb: "Words, art and the odd ways history fits together.",
  lessons: [
    {
      id: "b09",
      subject: "History",
      title: "Cleopatra and the Moon landing",
      body: [
        "The Great Pyramid of Giza was built around 2560 BC. Cleopatra VII, the last active ruler of Ptolemaic Egypt, died in 30 BC, about 2,530 years later.",
        "The first Moon landing was in 1969, roughly 2,000 years after Cleopatra. So she lived closer in time to Apollo 11 than to the building of the Great Pyramid.",
        "Ancient Egypt lasted so long that, to Cleopatra, the pyramids were already ancient monuments. Grouping ‘the ancients’ together hides how vast the gaps between them were.",
      ],
      takeaway: "Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid.",
      qs: [
        {
          q: "The Great Pyramid was built around…",
          o: ["500 BC", "1200 BC", "2560 BC", "4000 BC"],
          a: 2,
          why: "It dates to the reign of Khufu, around 2560 BC.",
        },
        {
          q: "Roughly how many years separated the Great Pyramid from Cleopatra's death?",
          o: ["500", "1,000", "2,500", "5,000"],
          a: 2,
          why: "About 2,530 years.",
        },
        {
          q: "What does this comparison mainly show?",
          o: [
            "Cleopatra built the pyramids",
            "Ancient Egyptian history spanned enormous time",
            "The Moon landing was faked",
            "Pyramids are recent",
          ],
          a: 1,
          why: "‘Ancient Egypt’ covers nearly three thousand years.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Cleopatra"],
      young: {
        body: [
          "The Great Pyramid in Egypt was built about 4,500 years ago.",
          "Cleopatra, a famous queen of Egypt, lived about 2,000 years ago. That's around 2,500 years after the pyramid was built.",
          "People first walked on the Moon in 1969. So Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid. To her, the pyramids were already ancient.",
        ],
        takeaway: "Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid.",
        qs: [
          {
            q: "About how long ago was the Great Pyramid built?",
            o: ["450 years ago", "4,500 years ago", "45,000 years ago"],
            a: 1,
            why: "It was built around 2560 BC.",
          },
          {
            q: "To Cleopatra, the pyramids were…",
            o: ["Already very old", "Still being built", "Brand new"],
            a: 0,
            why: "They were about 2,500 years old in her time.",
          },
          {
            q: "Cleopatra lived closer in time to…",
            o: ["The dinosaurs", "The building of the Great Pyramid", "The Moon landing"],
            a: 2,
            why: "About 2,000 years to the Moon landing, about 2,500 to the pyramid.",
          },
        ],
      },
    },
    {
      id: "b03",
      subject: "Language",
      title: "Where the word ‘robot’ came from",
      body: [
        "The word robot first appeared in 1920, in the Czech play R.U.R. (Rossum's Universal Robots) by Karel Čapek. The robots in it were artificial workers made of synthetic flesh, closer to clones than to machines.",
        "Čapek credited his brother Josef, a painter, with the word. It comes from the Czech robota, meaning forced labour, the kind of work serfs owed their lords.",
        "The play was a hit in Europe and America, and the word spread into dozens of languages within a few years. So every time you say robot, you are using a word built around the idea of unwilling, unpaid work.",
      ],
      takeaway: "‘Robot’ comes from the Czech ‘robota’, forced labour, and was coined for a 1920 play.",
      qs: [
        {
          q: "The word ‘robot’ first appeared in…",
          o: ["A 1920 Czech play", "An 1890s factory manual", "Isaac Asimov's 1950 book", "A 1960s US patent"],
          a: 0,
          why: "Karel Čapek's play R.U.R. introduced it in 1920.",
        },
        {
          q: "Who did Karel Čapek credit with inventing the word?",
          o: ["His brother Josef", "His editor", "A Prague engineer", "His audience"],
          a: 0,
          why: "Josef Čapek, a painter, suggested it.",
        },
        {
          q: "The Czech word ‘robota’ means…",
          o: ["Metal man", "Forced labour", "Clockwork", "Thinking machine"],
          a: 1,
          why: "It referred to the work serfs were obliged to do.",
        },
      ],
      daily: [0, 2],
      sources: ["https://en.wikipedia.org/wiki/R.U.R."],
      young: {
        body: [
          "The word robot is only about 100 years old. It first appeared in 1920, in a play by a Czech writer called Karel Čapek.",
          "His brother Josef thought of the word. It comes from the Czech word robota, which means hard work that you are forced to do.",
          "The play was a big hit, and soon people all over the world were saying robot.",
        ],
        takeaway: "‘Robot’ comes from a Czech word for forced work, and it was made up for a play in 1920.",
        qs: [
          {
            q: "Where did the word robot first appear?",
            o: ["In a cartoon", "In a play", "In a science book"],
            a: 1,
            why: "It was in Karel Čapek's 1920 play R.U.R.",
          },
          {
            q: "Who thought of the word?",
            o: ["Karel Čapek's brother Josef", "A robot", "A teacher"],
            a: 0,
            why: "Čapek said his brother Josef suggested it.",
          },
          {
            q: "The Czech word robota means…",
            o: ["Metal friend", "Fast machine", "Forced work"],
            a: 2,
            why: "Robota means work that people were made to do.",
          },
        ],
      },
    },
    {
      id: "b07",
      subject: "Art",
      title: "How painters discovered perspective",
      body: [
        "Around 1415, the Florentine architect Filippo Brunelleschi painted a small panel of the Baptistery of Florence. He drilled a hole in it and had viewers look through from the back at a mirror. The painted building lined up with the real one so closely that people were astonished.",
        "He had worked out linear perspective: parallel lines going away from you appear to meet at a single vanishing point on the horizon, and objects shrink in a regular way with distance.",
        "Twenty years later, in 1435, Leon Battista Alberti wrote the method down in his treatise On Painting. Within a generation, Renaissance painters were using it to build convincing three-dimensional space on flat walls.",
      ],
      takeaway:
        "Linear perspective makes parallel lines meet at a vanishing point; Brunelleschi demonstrated it and Alberti wrote it down.",
      qs: [
        {
          q: "Who is credited with demonstrating linear perspective in Florence?",
          o: ["Leonardo da Vinci", "Michelangelo", "Filippo Brunelleschi", "Giotto"],
          a: 2,
          why: "Brunelleschi's Baptistery panel experiment came around 1415.",
        },
        {
          q: "In linear perspective, receding parallel lines…",
          o: ["Stay parallel", "Curve outward", "Disappear at the frame edge", "Meet at a vanishing point"],
          a: 3,
          why: "They converge on a single point on the horizon.",
        },
        {
          q: "Who first wrote a treatise explaining the method?",
          o: ["Alberti", "Vasari", "Dürer", "Raphael"],
          a: 0,
          why: "Alberti's On Painting appeared in 1435.",
        },
      ],
      daily: [1],
      sources: ["https://en.wikipedia.org/wiki/Perspective_(graphical)"],
      young: {
        body: [
          "About 600 years ago in Florence, Italy, an architect called Filippo Brunelleschi painted a building so that it looked amazingly real.",
          "He had worked out a trick called perspective. Lines going away from you seem to meet at one point far away, called the vanishing point. Things also look smaller the further away they are.",
          "Soon painters everywhere used the trick to make flat pictures look deep. Try it: draw a road that gets narrower and narrower until it meets at one dot.",
        ],
        takeaway: "In a perspective drawing, lines going away from you meet at a vanishing point.",
        qs: [
          {
            q: "Who showed off the perspective trick in Florence?",
            o: ["Pablo Picasso", "Filippo Brunelleschi", "Vincent van Gogh"],
            a: 1,
            why: "Brunelleschi showed it around the year 1415.",
          },
          {
            q: "In perspective, lines going away from you…",
            o: ["Meet at a vanishing point", "Get wider", "Turn into circles"],
            a: 0,
            why: "They seem to meet at one point far away.",
          },
          {
            q: "In a perspective drawing, things far away look…",
            o: ["Bigger", "Brighter", "Smaller"],
            a: 2,
            why: "The further away something is, the smaller you draw it.",
          },
        ],
      },
    },
    {
      id: "b17",
      subject: "History",
      title: "How railways invented time zones",
      body: [
        "Before the 1880s, every town set its clocks by the local sun. Noon in Boston was a few minutes ahead of noon in New York. For travellers on horseback, nobody noticed.",
        "Railways changed that. Timetables with hundreds of local times caused confusion and collisions. On 18 November 1883, US and Canadian railways switched to a handful of standard time zones, a day nicknamed ‘the day of two noons’.",
        "The next year, the International Meridian Conference in Washington chose Greenwich, England, as the prime meridian, the zero line for longitude and world time.",
      ],
      takeaway:
        "Standard time zones were created for railway timetables in 1883, and Greenwich became the world's zero line in 1884.",
      qs: [
        {
          q: "Before standard time, clocks were set by…",
          o: ["Telegraph", "Church bells in London", "Local solar noon", "Radio signals"],
          a: 2,
          why: "Each town used its own sun-based time.",
        },
        {
          q: "Who drove the switch to time zones in North America?",
          o: ["Banks", "Farmers", "The Navy", "Railways"],
          a: 3,
          why: "Railways adopted standard time on 18 November 1883.",
        },
        {
          q: "Which place became the prime meridian in 1884?",
          o: ["Paris", "Greenwich", "Washington", "Rome"],
          a: 1,
          why: "Chosen at the International Meridian Conference.",
        },
      ],
      daily: [0, 2],
      sources: ["https://en.wikipedia.org/wiki/Standard_time"],
      young: {
        body: [
          "Long ago, every town set its clocks by the Sun. When the Sun was highest in the sky, it was noon. So clocks in nearby towns were a few minutes apart.",
          "Trains made this a big problem. Timetables were confusing, and that could be dangerous.",
          "So in 1883, railways in the USA and Canada agreed to use a few big time zones instead. A year later, Greenwich in England became the starting line for the world's time.",
        ],
        takeaway: "Time zones were invented because trains needed clear timetables.",
        qs: [
          {
            q: "Before time zones, towns set their clocks by…",
            o: ["The Sun", "Phones", "The radio"],
            a: 0,
            why: "Noon was when the Sun was highest.",
          },
          {
            q: "What made time zones necessary?",
            o: ["Cars", "Bicycles", "Trains"],
            a: 2,
            why: "Railway timetables needed everyone to agree on the time.",
          },
          {
            q: "Which place became the starting line for world time?",
            o: ["Paris", "Greenwich", "New York"],
            a: 1,
            why: "Greenwich, in London, was chosen in 1884.",
          },
        ],
      },
    },
    {
      id: "b12",
      subject: "Language",
      title: "Why English spelling is so odd",
      body: [
        "Between about 1400 and 1700, the way English speakers pronounced long vowels changed dramatically. This is the Great Vowel Shift. ‘Bite’ used to sound like ‘beet’, and ‘house’ sounded like ‘hoose’.",
        "Meanwhile, William Caxton brought the printing press to England in 1476. Printers started fixing spellings while pronunciation was still moving, so many words froze in their old forms.",
        "That's why the letters often don't match the sounds: ‘knight’ once had a spoken k and a throaty gh. English spelling is partly a fossil record of how people talked five centuries ago.",
      ],
      takeaway:
        "Printing froze English spelling in the middle of the Great Vowel Shift, so letters often record old pronunciations.",
      qs: [
        {
          q: "The Great Vowel Shift changed…",
          o: ["Long vowel sounds", "Consonants", "Word order", "The alphabet"],
          a: 0,
          why: "Long vowels moved, e.g. ‘bite’ was once said like ‘beet’.",
        },
        {
          q: "Who brought the printing press to England?",
          o: ["Gutenberg", "Shakespeare", "Chaucer", "Caxton"],
          a: 3,
          why: "William Caxton, in 1476.",
        },
        {
          q: "Why is ‘knight’ spelled with a k?",
          o: ["A printing error", "It's from Greek", "The k was once pronounced", "To look fancy"],
          a: 2,
          why: "Spellings froze before the sound dropped out.",
        },
      ],
      daily: [0, 2],
      sources: ["https://en.wikipedia.org/wiki/Great_Vowel_Shift"],
      young: {
        body: [
          "Long ago, English words sounded different. ‘Bite’ sounded like ‘beet’, and ‘house’ sounded like ‘hoose’.",
          "Around the same time, printing arrived in England. Printers started writing words the same way every time, while the way people said them was still changing.",
          "So many spellings stayed old-fashioned. In ‘knight’, people used to say the k out loud. Odd spellings are clues to how people talked long ago.",
        ],
        takeaway: "English spelling is odd because spellings got fixed while the sounds kept changing.",
        qs: [
          {
            q: "Long ago, ‘bite’ sounded like…",
            o: ["‘bat’", "‘boat’", "‘beet’"],
            a: 2,
            why: "The long vowel sounds in English changed over time.",
          },
          {
            q: "What helped fix spellings in place?",
            o: ["Printing", "Phones", "Television"],
            a: 0,
            why: "Printers wrote words the same way every time.",
          },
          {
            q: "Why is there a k in ‘knight’?",
            o: ["It looks nice", "People used to say it", "It's a spelling mistake"],
            a: 1,
            why: "The k used to be spoken.",
          },
        ],
      },
    },
    {
      id: "b33",
      subject: "Language",
      title: "Where ‘OK’ came from",
      body: [
        "In the late 1830s, Boston newspapers had a craze for joke abbreviations of deliberate misspellings. ‘O.W.’ stood for ‘oll wright’, and ‘K.Y.’ for ‘know yuse’. On 23 March 1839, the Boston Morning Post printed ‘o.k.’ for ‘oll korrect’.",
        "Most of these jokes vanished. OK survived because of an 1840 election. Supporters of President Martin Van Buren, nicknamed Old Kinderhook after his home town, formed ‘OK Clubs’, and the letters spread across the country.",
        "The story was pieced together by the American linguist Allen Walker Read in the 1960s, after decades of competing theories that traced OK to Scottish, Choctaw, Greek or West African words. Today it's one of the most widely understood words on Earth, used in languages that otherwise borrow little from English.",
      ],
      takeaway: "‘OK’ began as a joke abbreviation of ‘oll korrect’ in an 1839 Boston newspaper.",
      qs: [
        {
          q: "What did ‘o.k.’ originally stand for?",
          o: ["Old king", "Oll korrect", "Only kidding", "Open kitchen"],
          a: 1,
          why: "It was part of a craze for jokey misspelled abbreviations.",
        },
        {
          q: "What helped ‘OK’ spread in 1840?",
          o: ["A song", "A presidential campaign", "The telegraph", "A war"],
          a: 1,
          why: "Van Buren's nickname was Old Kinderhook.",
        },
        {
          q: "Who traced the true origin of OK?",
          o: ["Noah Webster", "Mark Twain", "Samuel Johnson", "Allen Walker Read"],
          a: 3,
          why: "He found the 1839 newspaper use in the 1960s.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/OK", "https://en.wikipedia.org/wiki/Allen_Walker_Read"],
      young: {
        body: [
          "OK might be the most famous word in the world. People say it in lots of languages.",
          "It started as a joke in a newspaper in Boston, USA, in 1839. Writers liked to make silly short forms of misspelled words. ‘O.K.’ stood for ‘oll korrect’, a funny way to spell ‘all correct’.",
          "A year later, a president's supporters used OK in his election campaign, and it spread everywhere.",
        ],
        takeaway: "OK started as a joke short form of ‘oll korrect’, a misspelling of ‘all correct’.",
        qs: [
          {
            q: "What did O.K. first stand for?",
            o: ["Oll korrect", "Oh kay", "Old king"],
            a: 0,
            why: "It was a funny way to spell ‘all correct’.",
          },
          {
            q: "Where did OK first appear?",
            o: ["In a song", "In a newspaper", "On television"],
            a: 1,
            why: "In a Boston newspaper in 1839.",
          },
          {
            q: "What helped OK spread?",
            o: ["A football match", "A film", "An election campaign"],
            a: 2,
            why: "A president's supporters used it a year later.",
          },
        ],
      },
    },
    {
      id: "b34",
      subject: "History",
      title: "The Library of Alexandria faded slowly",
      body: [
        "The popular picture is of one great fire destroying the ancient world's greatest library. The real story is slower and, in a way, sadder.",
        "The library was founded in Alexandria, Egypt, in the third century BC under the Ptolemy kings, who were so keen on books that ships in the harbour reportedly had theirs copied. Julius Caesar's troops did start a fire in the city in 48 BC that may have burned some scrolls, possibly ones in warehouses near the docks. But the library carried on afterwards.",
        "What killed it was centuries of neglect. In 145 BC, Ptolemy VIII expelled many scholars from the city. Royal funding dried up under Roman rule, scholars drifted to other centres, and papyrus scrolls rotted unless they were recopied. By the time of later attacks on the city, there may have been little left to destroy.",
      ],
      takeaway: "The Library of Alexandria declined over centuries from lost funding and neglect, not one great fire.",
      qs: [
        {
          q: "What mainly ended the Library of Alexandria?",
          o: ["One huge fire", "An earthquake", "Centuries of neglect and lost funding", "A flood"],
          a: 2,
          why: "Scholars left, money dried up and scrolls decayed.",
        },
        {
          q: "Whose troops started a fire in Alexandria in 48 BC?",
          o: ["Julius Caesar", "Alexander the Great", "Hannibal", "Cleopatra"],
          a: 0,
          why: "The fire may have burned some scrolls, but the library continued.",
        },
        {
          q: "Why did papyrus scrolls need recopying?",
          o: ["They were too heavy", "Ink faded in sunlight only", "They rotted over time", "The law required it"],
          a: 2,
          why: "Without new copies, the texts were lost.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Library_of_Alexandria"],
      young: {
        body: [
          "Over 2,000 years ago, the city of Alexandria in Egypt had an enormous library. Scholars came from far away to read and write there.",
          "Many people think it burned down in one big fire. A fire did damage part of the city in 48 BC. But the library kept going after that.",
          "What really ended it was slow. Rulers stopped paying for it, scholars left, and old scrolls fell apart when nobody copied them.",
        ],
        takeaway: "The great Library of Alexandria faded away slowly because people stopped looking after it.",
        qs: [
          {
            q: "Where was the famous library?",
            o: ["Rome", "London", "Alexandria, in Egypt"],
            a: 2,
            why: "It was in a big city on Egypt's coast.",
          },
          {
            q: "Did one fire destroy the whole library?",
            o: ["Yes", "No, it faded away slowly", "There was no library"],
            a: 1,
            why: "It carried on after the fire.",
          },
          {
            q: "What happened to old scrolls nobody copied?",
            o: ["They fell apart", "They turned into books", "They got stronger"],
            a: 0,
            why: "Scrolls rot unless new copies are made.",
          },
        ],
      },
    },
    {
      id: "b35",
      subject: "Language",
      title: "How ‘a napron’ became ‘an apron’",
      body: [
        "In Middle English, an apron was ‘a napron’. It came from the old French ‘naperon’, a small cloth, related to ‘napkin’. But when people say ‘a napron’ quickly, it sounds exactly like ‘an apron’, and over time the n slid across to the other word.",
        "Linguists call this rebracketing. The same thing happened to ‘a nadder’, which became ‘an adder’, and ‘a noumpere’, which became ‘an umpire’.",
        "It can work the other way too. ‘An ekename’, meaning an extra name, became ‘a nekename’, and then ‘nickname’. And ‘newt’ was once ‘an ewt’. These words are small fossils of how people misheard each other centuries ago, and they show that much of language change happens by accident.",
      ],
      takeaway: "Some English words gained or lost an n because people misheard where one word ended and the next began.",
      qs: [
        {
          q: "What was ‘an apron’ in Middle English?",
          o: ["An apern", "An aproon", "A pron", "A napron"],
          a: 3,
          why: "The n moved from the noun to the article.",
        },
        {
          q: "Which word gained an n the other way?",
          o: ["Nickname", "Adder", "Umpire", "Apron"],
          a: 0,
          why: "‘An ekename’ became ‘a nekename’, then ‘nickname’.",
        },
        {
          q: "What do linguists call this?",
          o: ["Rhyming", "Rebracketing", "Abbreviation", "Translation"],
          a: 1,
          why: "The boundary between words gets redrawn.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Rebracketing"],
      young: {
        body: [
          "Hundreds of years ago, people didn't say ‘an apron’. They said ‘a napron’.",
          "Say ‘a napron’ fast. It sounds just like ‘an apron’! Over time, people heard it the other way, and the n moved.",
          "It happened to other words too. ‘A nadder’ became ‘an adder’. And ‘an ekename’, meaning an extra name, became ‘a nickname’.",
        ],
        takeaway: "Some words changed because people heard the n in the wrong place.",
        qs: [
          {
            q: "What did people used to call an apron?",
            o: ["A pinny", "A cloth", "A napron"],
            a: 2,
            why: "The n later moved to ‘an’.",
          },
          {
            q: "Why did the word change?",
            o: ["People heard it differently", "A king ordered it", "A spelling test"],
            a: 0,
            why: "‘A napron’ and ‘an apron’ sound the same.",
          },
          {
            q: "Which word grew from ‘an ekename’?",
            o: ["Name tag", "Nickname", "Surname"],
            a: 1,
            why: "The n moved onto the word.",
          },
        ],
      },
    },
  ],
};

export default pack;
