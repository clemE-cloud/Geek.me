import type { Pack } from "../../lib/types";

const pack: Pack = {
  id: "navigator",
  name: "The Navigator",
  theme: "Earth & places",
  blurb: "Maps, mountains, moving continents and the far corners of the planet.",
  lessons: [
    {
      id: "b65",
      subject: "Geography",
      title: "Your world map is lying about size",
      body: [
        "On many wall maps, Greenland looks about as big as Africa. In reality Africa is roughly 14 times larger. The culprit is the Mercator projection, created by the Flemish mapmaker Gerardus Mercator in 1569.",
        "Mercator designed it for sailors. On his map, a line of constant compass bearing is a straight line, which made plotting a course much easier. The price is that areas get stretched more and more as you move away from the equator. At 60 degrees north, roughly the latitude of southern Greenland, things look four times bigger in area than they should.",
        "No flat map can show the round Earth without distorting something: area, shape, distance or direction. Mercator keeps local shapes and directions but sacrifices area. Equal-area projections such as Gall–Peters fix the sizes but squash shapes. Online map services use a version of Mercator because it keeps streets at right angles when you zoom in.",
      ],
      takeaway: "The Mercator map makes places near the poles look far bigger; Africa is about 14 times the size of Greenland.",
      qs: [
        {
          q: "How much bigger is Africa than Greenland?",
          o: ["About the same", "About twice", "About 100 times", "About 14 times"],
          a: 3,
          why: "Mercator inflates areas near the poles.",
        },
        {
          q: "What was the Mercator projection designed for?",
          o: ["Sailors navigating by compass", "Schools", "Tax collectors", "Astronomers"],
          a: 0,
          why: "Constant compass bearings appear as straight lines.",
        },
        {
          q: "Can a flat map show the Earth without any distortion?",
          o: ["Yes, with care", "No", "Only near the equator", "Only at night"],
          a: 1,
          why: "Something always has to give.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Mercator_projection"],
      young: {
        body: [
          "On lots of world maps, Greenland looks as big as Africa. But Africa is actually about 14 times bigger!",
          "The Earth is round, like a ball. It's impossible to flatten a ball onto paper without stretching something.",
          "A popular map from 1569, made for sailors, stretches the places near the top and bottom the most. That's why Greenland looks so huge.",
        ],
        takeaway: "Flat maps stretch places near the poles, so Greenland looks much bigger than it is.",
        qs: [
          {
            q: "Which is bigger, Africa or Greenland?",
            o: ["Greenland", "Africa", "They're the same"],
            a: 1,
            why: "Africa is about 14 times bigger.",
          },
          {
            q: "Why do flat maps stretch things?",
            o: ["The Earth is round", "Mapmakers are careless", "Paper shrinks"],
            a: 0,
            why: "You can't flatten a ball without stretching it.",
          },
          {
            q: "Which places get stretched most on that map?",
            o: ["Islands only", "Places near the middle", "Places near the poles"],
            a: 2,
            why: "The stretching grows towards the top and bottom.",
          },
        ],
      },
    },
    {
      id: "b66",
      subject: "Geography",
      title: "The lake that holds a fifth of the world's fresh water",
      body: [
        "Lake Baikal in Siberia is the deepest lake on Earth, reaching about 1,640 metres. Although it's smaller in area than several lakes, its depth means it holds about 23,000 cubic kilometres of water: more than all five of North America's Great Lakes combined.",
        "That's around a fifth of all the unfrozen fresh surface water on the planet. It's also the oldest lake we know of, at roughly 25 million years. Most lakes fill with sediment within tens of thousands of years, but Baikal sits in a rift where the Earth's crust is slowly pulling apart, so it keeps getting deeper.",
        "Its long isolation has produced unique wildlife. Most of its thousands of plant and animal species live nowhere else, including the nerpa, one of the only seals in the world that lives entirely in fresh water. How the seals' ancestors got there, more than 1,500 kilometres from the sea, is still debated.",
      ],
      takeaway: "Lake Baikal is the deepest and oldest lake, holding about a fifth of Earth's unfrozen fresh surface water.",
      qs: [
        {
          q: "Where is Lake Baikal?",
          o: ["Canada", "Switzerland", "Siberia, Russia", "Kenya"],
          a: 2,
          why: "In southern Siberia.",
        },
        {
          q: "About how old is Lake Baikal?",
          o: ["10,000 years", "25 million years", "1 million years", "1 billion years"],
          a: 1,
          why: "It's the oldest lake we know of.",
        },
        {
          q: "What unusual animal lives in Baikal?",
          o: ["A penguin", "A freshwater shark", "A freshwater seal", "A dolphin"],
          a: 2,
          why: "The nerpa lives only in fresh water.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Lake_Baikal", "https://en.wikipedia.org/wiki/Baikal_seal"],
      young: {
        body: [
          "Lake Baikal in Russia is the deepest lake in the world. It's more than one and a half kilometres deep!",
          "It holds about a fifth of all the fresh, unfrozen lake and river water on Earth. It's also the oldest lake, about 25 million years old.",
          "A special seal called the nerpa lives there. It's one of the only seals that lives in fresh water instead of the sea.",
        ],
        takeaway: "Lake Baikal is the deepest and oldest lake in the world.",
        qs: [
          {
            q: "What is special about Lake Baikal?",
            o: ["It's in a desert", "It's made of chocolate", "It's the deepest lake in the world"],
            a: 2,
            why: "It's over 1.5 km deep.",
          },
          {
            q: "What animal lives there?",
            o: ["A freshwater seal", "A penguin", "A camel"],
            a: 0,
            why: "The nerpa seal lives in fresh water.",
          },
          {
            q: "About how old is the lake?",
            o: ["100 years", "25 million years", "1,000 years"],
            a: 1,
            why: "It's the oldest lake we know of.",
          },
        ],
      },
    },
    {
      id: "b67",
      subject: "Geography",
      title: "Is Everest really the tallest mountain?",
      body: [
        "Mount Everest's summit is the highest point above sea level, at 8,849 metres according to a 2020 Chinese and Nepali survey. But 'tallest' depends on how you measure.",
        "Measured from its base, Mauna Kea in Hawaii wins. Most of it is under the Pacific, but from the sea floor to its summit it rises about 10,200 metres, more than a kilometre taller than Everest.",
        "There's a third answer. Earth bulges at the equator because it spins, so places near the equator are further from Earth's centre. Chimborazo, a volcano in Ecuador, is only 6,263 metres above sea level, but its summit is about 2 kilometres further from the centre of the Earth than Everest's. Standing on Chimborazo, you are as close to space as you can get on Earth's surface.",
      ],
      takeaway:
        "Everest is highest above sea level, Mauna Kea is tallest from base, and Chimborazo is furthest from Earth's centre.",
      qs: [
        {
          q: "Which mountain is tallest from base to peak?",
          o: ["Everest", "K2", "Kilimanjaro", "Mauna Kea"],
          a: 3,
          why: "Most of it is under the sea.",
        },
        {
          q: "Why is Chimborazo's peak furthest from Earth's centre?",
          o: ["Earth bulges at the equator", "It's the highest", "It's a volcano", "It's growing"],
          a: 0,
          why: "Ecuador sits on the equatorial bulge.",
        },
        {
          q: "How high above sea level is Everest?",
          o: ["About 6,300 m", "About 8,850 m", "About 10,200 m", "About 12,000 m"],
          a: 1,
          why: "8,849 m, measured in 2020.",
        },
      ],
      daily: [0, 1],
      sources: [
        "https://en.wikipedia.org/wiki/Mount_Everest",
        "https://en.wikipedia.org/wiki/Mauna_Kea",
        "https://en.wikipedia.org/wiki/Chimborazo",
      ],
      young: {
        body: [
          "Mount Everest is the highest mountain above the sea. Its top is almost 9 kilometres up.",
          "But Mauna Kea in Hawaii starts deep under the ocean. Measured from its bottom to its top, it's even taller than Everest!",
          "The Earth also bulges in the middle. So the top of a mountain called Chimborazo is the furthest point from the Earth's centre.",
        ],
        takeaway: "Everest is highest above the sea, but Mauna Kea is taller from bottom to top.",
        qs: [
          {
            q: "Which mountain is highest above the sea?",
            o: ["Chimborazo", "Mauna Kea", "Everest"],
            a: 2,
            why: "Its top is almost 9 km up.",
          },
          {
            q: "Where does Mauna Kea start?",
            o: ["Deep under the ocean", "In the clouds", "On a beach"],
            a: 0,
            why: "Most of it is under water.",
          },
          {
            q: "What shape is the Earth around its middle?",
            o: ["Flat", "It bulges out", "Square"],
            a: 1,
            why: "Spinning makes it bulge at the equator.",
          },
        ],
      },
    },
    {
      id: "b68",
      subject: "Geography",
      title: "The continents are moving",
      body: [
        "Look at a map and South America's east coast seems to fit into Africa's west coast. In 1912 the German scientist Alfred Wegener argued this wasn't a coincidence: the continents had once been joined and had drifted apart. He pointed to matching rocks and fossils on both sides of the Atlantic.",
        "Most geologists rejected the idea for decades, mainly because Wegener couldn't explain what force could move continents. The answer came in the 1950s and 1960s, when maps of the ocean floor revealed ridges where new crust forms and spreads outwards. Earth's surface is broken into plates that slide over the hot, slowly flowing rock beneath.",
        "The movement is about as fast as your fingernails grow. The Atlantic widens by about 2.5 centimetres a year. Around 300 million years ago, the continents were joined in a supercontinent called Pangaea, which began breaking up about 200 million years ago. Wegener died in 1930 on an expedition in Greenland, before he was proved right.",
      ],
      takeaway: "Continents drift on moving plates, about as fast as fingernails grow; they were once joined as Pangaea.",
      qs: [
        {
          q: "Who proposed continental drift in 1912?",
          o: ["Charles Darwin", "Alfred Wegener", "Isaac Newton", "Charles Lyell"],
          a: 1,
          why: "He pointed to matching coastlines, rocks and fossils.",
        },
        {
          q: "Why was his idea rejected at first?",
          o: ["The maps were wrong", "Fossils didn't match", "He couldn't explain what moved the continents", "It was illegal"],
          a: 2,
          why: "Sea-floor spreading supplied the mechanism later.",
        },
        {
          q: "How fast does the Atlantic widen?",
          o: ["About 2.5 cm a year", "About 1 m a year", "About 1 km a year", "It doesn't"],
          a: 0,
          why: "About as fast as fingernails grow.",
        },
      ],
      daily: [0, 2],
      sources: ["https://en.wikipedia.org/wiki/Continental_drift", "https://en.wikipedia.org/wiki/Pangaea"],
      young: {
        body: [
          "Look at a world map. South America and Africa look like puzzle pieces that could fit together.",
          "That's because they used to be joined! Long ago, all the land was one giant piece called Pangaea. It slowly broke apart.",
          "The land still moves today, sitting on huge pieces called plates. They move about as fast as your fingernails grow.",
        ],
        takeaway: "The continents were once joined together, and they're still slowly moving.",
        qs: [
          {
            q: "Which two continents look like puzzle pieces?",
            o: ["Europe and Australia", "Asia and Antarctica", "South America and Africa"],
            a: 2,
            why: "Their coasts fit together.",
          },
          {
            q: "What was the giant piece of land called?",
            o: ["Atlantis", "Pangaea", "Gondor"],
            a: 1,
            why: "It broke apart millions of years ago.",
          },
          {
            q: "How fast do continents move?",
            o: ["About as fast as fingernails grow", "They don't move", "As fast as a car"],
            a: 0,
            why: "A few centimetres a year.",
          },
        ],
      },
    },
    {
      id: "b69",
      subject: "Geography",
      title: "When the Sahara was green",
      body: [
        "Between roughly 11,000 and 5,000 years ago, much of what is now the Sahara was grassland, with lakes, rivers and wetlands. Lake Mega-Chad covered an area larger than the Caspian Sea does today.",
        "Rock art from the period, in places such as the Tassili n'Ajjer mountains in Algeria, shows giraffes, elephants, cattle herds and people swimming. Archaeologists have found fish bones and harpoons in places that are now hundreds of kilometres from any water.",
        "The cause was a slow wobble in Earth's orbit and tilt, which changed how much summer sunshine reached the northern hemisphere. Stronger summer sun strengthened the West African monsoon, pushing rain far into North Africa. As the orbit shifted, the rains retreated south and the desert returned, fairly quickly in some places. Scientists call this time the African Humid Period.",
      ],
      takeaway: "The Sahara was green grassland with lakes until about 5,000 years ago, thanks to a wobble in Earth's orbit.",
      qs: [
        {
          q: "Roughly when was the Sahara green?",
          o: ["100 million years ago", "11,000 to 5,000 years ago", "In Roman times", "Never"],
          a: 1,
          why: "During the African Humid Period.",
        },
        {
          q: "What evidence shows the Sahara was green?",
          o: ["Satellite photos", "Old maps", "Ancient poems", "Rock art of giraffes and swimmers"],
          a: 3,
          why: "Fish bones and harpoons too.",
        },
        {
          q: "What brought the rain?",
          o: ["Volcanoes", "Ice ages", "A stronger monsoon from a wobble in Earth's orbit", "Rivers from Europe"],
          a: 2,
          why: "More summer sun strengthened the monsoon.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/African_humid_period", "https://en.wikipedia.org/wiki/Tassili_n%27Ajjer"],
      young: {
        body: [
          "Today the Sahara is a huge, dry desert. But thousands of years ago, it was green!",
          "It had grass, lakes and rivers. Giraffes, elephants and hippos lived there. People painted pictures of them on rocks, and some of the paintings show people swimming.",
          "The rain came because of a slow wobble in the way the Earth goes around the Sun. When the wobble changed, the rain moved away and the desert came back.",
        ],
        takeaway: "Thousands of years ago, the Sahara Desert was green with lakes and animals.",
        qs: [
          {
            q: "What was the Sahara like thousands of years ago?",
            o: ["Covered in ice", "Under the sea", "Green, with lakes"],
            a: 2,
            why: "It had grass, lakes and rivers.",
          },
          {
            q: "How do we know animals lived there?",
            o: ["People painted them on rocks", "From old photos", "From videos"],
            a: 0,
            why: "Rock paintings show giraffes and elephants.",
          },
          {
            q: "What changed the rain?",
            o: ["People built dams", "A slow wobble in Earth's path around the Sun", "Elephants drank it all"],
            a: 1,
            why: "The rain moved south as the wobble changed.",
          },
        ],
      },
    },
    {
      id: "b70",
      subject: "Geography",
      title: "One country, one clock",
      body: [
        "China spans about 5,000 kilometres from east to west, wide enough for five time zones based on the Sun. Since 1949, the whole country has officially used a single time, Beijing Time.",
        "In the far west, in Xinjiang, that means the Sun can rise after 9 or 10 a.m. in winter and set around midnight in summer. Many people there, especially the Uyghur community, use an unofficial local time two hours behind Beijing, so daily life can run on two clocks at once.",
        "Other countries go the other way. Russia has 11 time zones. France has 12, the most of any country, because its overseas territories are scattered around the world, from French Polynesia in the Pacific to Réunion in the Indian Ocean. India uses a single zone that is five and a half hours ahead of UTC, one of several places whose clocks are offset by a half hour.",
      ],
      takeaway: "China uses one time zone across 5,000 km, while France, with its overseas territories, has 12.",
      qs: [
        {
          q: "How many official time zones does China use?",
          o: ["One", "Three", "Five", "Eleven"],
          a: 0,
          why: "Beijing Time, since 1949.",
        },
        {
          q: "Which country has the most time zones?",
          o: ["France", "USA", "Russia", "China"],
          a: 0,
          why: "Its overseas territories span the globe.",
        },
        {
          q: "India's time is ahead of UTC by…",
          o: ["5 hours", "4 hours 45 minutes", "6 hours", "5 hours 30 minutes"],
          a: 3,
          why: "It's one of several half-hour offsets.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Time_in_China", "https://en.wikipedia.org/wiki/Time_in_France"],
      young: {
        body: [
          "China is a very wide country. When the Sun rises in the east of China, it's still dark in the west.",
          "But the whole country uses the same clock time! So in the far west, the Sun can rise as late as 10 o'clock in the morning in winter.",
          "Other countries have lots of time zones. France has the most, 12, because it has islands and lands all around the world.",
        ],
        takeaway: "All of China uses one clock time, even though it's very wide.",
        qs: [
          {
            q: "How many clock times does China use?",
            o: ["Twenty", "Five", "One"],
            a: 2,
            why: "The whole country uses Beijing Time.",
          },
          {
            q: "In winter in western China, the Sun can rise at about…",
            o: ["10 in the morning", "5 in the morning", "Midnight"],
            a: 0,
            why: "Because the clock follows Beijing, far to the east.",
          },
          {
            q: "Which country has the most time zones?",
            o: ["China", "France", "Japan"],
            a: 1,
            why: "It has islands all around the world.",
          },
        ],
      },
    },
    {
      id: "b71",
      subject: "Geography",
      title: "Where you can touch two continents",
      body: [
        "Iceland sits on top of the Mid-Atlantic Ridge, the long underwater mountain chain where the North American and Eurasian plates are pulling apart. Iceland is one of the few places where this ridge rises above sea level.",
        "At Þingvellir National Park, you can walk through a rift valley between the two plates, and in the Silfra fissure, divers swim in glacial water so clear they can see more than 100 metres, with one hand reaching towards each plate. The gap widens by about 2 centimetres a year.",
        "The same spreading feeds Iceland's volcanoes and hot springs. Much of the country's heating and electricity comes from geothermal and hydro power. Þingvellir is also where Iceland's parliament, the Althing, first met in 930 AD, making it one of the oldest parliaments in the world.",
      ],
      takeaway: "In Iceland, the North American and Eurasian plates pull apart above sea level at about 2 cm a year.",
      qs: [
        {
          q: "Which ridge does Iceland sit on?",
          o: ["The Himalayas", "The Andes", "The Mid-Atlantic Ridge", "The Ring of Fire"],
          a: 2,
          why: "It's where two plates spread apart.",
        },
        {
          q: "What can divers do in the Silfra fissure?",
          o: ["See sharks", "Swim between two tectonic plates", "Find gold", "Visit a sunken ship"],
          a: 1,
          why: "The water is extremely clear.",
        },
        {
          q: "When did Iceland's parliament first meet at Þingvellir?",
          o: ["930 AD", "1776", "1066", "1944"],
          a: 0,
          why: "The Althing is one of the oldest parliaments.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Mid-Atlantic_Ridge", "https://en.wikipedia.org/wiki/%C3%9Eingvellir"],
      young: {
        body: [
          "The Earth's outside is cut into giant pieces called plates. In Iceland, two of them are slowly pulling apart.",
          "You can walk in a valley between the plates. Divers can even swim in a crack between them, in water so clear it looks like glass.",
          "The crack gets about 2 centimetres wider every year. That's why Iceland has lots of volcanoes and hot springs.",
        ],
        takeaway: "In Iceland, two giant plates of the Earth are slowly pulling apart.",
        qs: [
          {
            q: "What is happening to the plates in Iceland?",
            o: ["They're sinking", "They're pulling apart", "They're melting"],
            a: 1,
            why: "About 2 cm every year.",
          },
          {
            q: "What can divers do there?",
            o: ["Swim between two plates", "Ride whales", "Walk on the sea floor"],
            a: 0,
            why: "The water in the crack is very clear.",
          },
          {
            q: "Iceland has lots of…",
            o: ["Deserts", "Kangaroos", "Volcanoes and hot springs"],
            a: 2,
            why: "Heat rises where the plates pull apart.",
          },
        ],
      },
    },
    {
      id: "b72",
      subject: "Geography",
      title: "The loneliest place in the ocean",
      body: [
        "Point Nemo, in the South Pacific, is the place in the ocean furthest from any land. The nearest islands are about 2,700 kilometres away. It was calculated in 1992 by the Croatian-Canadian engineer Hrvoje Lukatela, and named after Captain Nemo from Jules Verne's novels.",
        "Because it's so remote, space agencies use the area as a spacecraft graveyard. Old satellites and supply ships are steered to burn up over it, with surviving pieces sinking into deep water far from shipping lanes. Hundreds of spacecraft have ended their lives there, including the Russian space station Mir in 2001.",
        "The nearest humans to Point Nemo are often not on Earth. The International Space Station orbits about 400 kilometres up, so when it passes overhead, its crew is closer than anyone on land.",
      ],
      takeaway: "Point Nemo is about 2,700 km from land, and the nearest people are often astronauts overhead.",
      qs: [
        {
          q: "How far is Point Nemo from the nearest land?",
          o: ["About 27 km", "About 270 km", "About 2,700 km", "About 27,000 km"],
          a: 2,
          why: "It's the most remote spot in the ocean.",
        },
        {
          q: "What do space agencies use the area for?",
          o: ["Launching rockets", "Nothing", "Testing submarines", "A spacecraft graveyard"],
          a: 3,
          why: "Old spacecraft are steered to fall there.",
        },
        {
          q: "Who are often the nearest people to Point Nemo?",
          o: ["Fishermen", "Astronauts on the space station", "Islanders", "Scientists on a ship"],
          a: 1,
          why: "The ISS orbits about 400 km up.",
        },
      ],
      daily: [0, 2],
      sources: ["https://en.wikipedia.org/wiki/Pole_of_inaccessibility", "https://en.wikipedia.org/wiki/Spacecraft_cemetery"],
      young: {
        body: [
          "Point Nemo is the spot in the ocean that's furthest from any land. The nearest island is about 2,700 kilometres away.",
          "It's so lonely that space agencies send old spacecraft to crash into the sea there, far away from people and ships.",
          "Here's a strange fact: the closest people to Point Nemo are often astronauts in the space station flying overhead!",
        ],
        takeaway: "Point Nemo is the loneliest spot in the ocean, and astronauts are often the nearest people.",
        qs: [
          {
            q: "What is Point Nemo?",
            o: ["A big island", "The place in the ocean furthest from land", "A famous ship"],
            a: 1,
            why: "The nearest land is about 2,700 km away.",
          },
          {
            q: "What gets sent to crash there?",
            o: ["Old spacecraft", "Old cars", "Rubbish bags"],
            a: 0,
            why: "It's far from people and ships.",
          },
          {
            q: "Who is often closest to Point Nemo?",
            o: ["Pirates", "Penguins", "Astronauts in space"],
            a: 2,
            why: "The space station flies about 400 km above.",
          },
        ],
      },
    },
  ],
};

export default pack;
