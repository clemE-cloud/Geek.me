import type { Pack } from "../../lib/types";

const pack: Pack = {
  id: "diver",
  name: "The Diver",
  theme: "Oceans",
  blurb: "Salt, tides, whale song and the deepest place on Earth.",
  lessons: [
    {
      id: "b41",
      subject: "Nature",
      title: "Why the sea is salty",
      body: [
        "Rain is very slightly acidic, and as it runs over rocks it dissolves tiny amounts of minerals. Rivers carry those minerals to the sea. Rivers taste fresh because the amounts are small, but they never stop flowing.",
        "When seawater evaporates, the water leaves and the salt stays behind. Over hundreds of millions of years, the minerals have built up until about 3.5% of seawater, by weight, is dissolved salt. Most of it is sodium and chloride, the same ingredients as table salt. Hot springs on the sea floor, called hydrothermal vents, add more minerals from below.",
        "The sea isn't getting saltier and saltier, though. Salt also leaves the water, locked into sediments on the sea floor, so the level has stayed roughly steady for a very long time. If all the salt in the oceans were spread over the land, it would form a layer more than 150 metres thick.",
      ],
      takeaway: "Rivers carry dissolved minerals to the sea, and evaporation leaves the salt behind.",
      qs: [
        {
          q: "Where does most of the sea's salt come from?",
          o: ["Fish", "Melting icebergs", "Minerals dissolved from rocks and carried by rivers", "Rain clouds"],
          a: 2,
          why: "Rivers bring a small, steady supply.",
        },
        {
          q: "About how salty is seawater?",
          o: ["0.5%", "3.5%", "15%", "35%"],
          a: 1,
          why: "About 35 grams of salt per kilogram of seawater.",
        },
        {
          q: "Why doesn't the sea keep getting saltier?",
          o: ["Fish eat the salt", "It does, quickly", "Rain dilutes it", "Salt is locked into sea-floor sediments"],
          a: 3,
          why: "Salt in and salt out roughly balance.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Seawater", "https://en.wikipedia.org/wiki/Salinity"],
      young: {
        body: [
          "Rain washes over rocks and picks up tiny bits of salt and minerals. Rivers carry them all the way to the sea.",
          "The Sun warms the sea and some of the water floats up into the sky as vapour. The salt can't float up, so it stays in the sea.",
          "This has been happening for millions and millions of years. That's why the sea is salty, but rivers are not.",
        ],
        takeaway: "Rivers bring salt to the sea, and when the water evaporates, the salt stays behind.",
        qs: [
          {
            q: "Where does the sea's salt come from?",
            o: ["Rocks, carried by rivers", "Fish", "Clouds"],
            a: 0,
            why: "Rain washes salt out of rocks.",
          },
          {
            q: "When seawater evaporates, what stays behind?",
            o: ["The water", "Nothing", "The salt"],
            a: 2,
            why: "Only the water rises into the air.",
          },
          {
            q: "Why aren't rivers salty?",
            o: ["They have no salt at all", "They carry only a tiny amount at a time", "Fish drink it"],
            a: 1,
            why: "It builds up in the sea over a very long time.",
          },
        ],
      },
    },
    {
      id: "b42",
      subject: "Nature",
      title: "Whale songs travel across oceans",
      body: [
        "Sound travels about four times faster in water than in air, and low sounds travel furthest. Blue whales and fin whales make deep calls, some below the range of human hearing, that can be detected hundreds of kilometres away.",
        "Part of the reason is a layer in the ocean, around a kilometre down in many places, called the SOFAR channel. Changes in temperature and pressure bend sound back into this layer, so it can travel very long distances with little loss. Navies have used it to listen for submarines.",
        "Male humpback whales sing long, structured songs that change over time. In 2011 researchers led by Ellen Garland reported that new songs spread across the South Pacific, from eastern Australia to French Polynesia, over about two years, passing from one population to the next like a pop hit.",
      ],
      takeaway: "Low whale calls can travel hundreds of kilometres underwater, and humpback songs spread between populations.",
      qs: [
        {
          q: "How does the speed of sound in water compare with air?",
          o: ["About the same", "About four times faster", "Slower", "Ten times slower"],
          a: 1,
          why: "Water carries sound much faster than air.",
        },
        {
          q: "What is the SOFAR channel?",
          o: ["A layer where sound travels very far", "A whale migration route", "A shipping lane", "A deep trench"],
          a: 0,
          why: "Sound gets bent back into it, so it carries far.",
        },
        {
          q: "What did the 2011 humpback study find?",
          o: ["Songs never change", "Songs are random", "Only females sing", "New songs spread between populations"],
          a: 3,
          why: "Songs passed from Australia to French Polynesia.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Whale_vocalization", "https://en.wikipedia.org/wiki/SOFAR_channel"],
      young: {
        body: [
          "Whales talk and sing underwater. Sound travels faster in water than in air, and deep, low sounds travel the furthest.",
          "Blue whales make very low calls that can be heard hundreds of kilometres away. Some are so low that people can't hear them at all.",
          "Humpback whales sing long songs. Their songs change over time, and new songs can spread from one group of whales to another, like a popular tune.",
        ],
        takeaway: "Whale songs can travel hundreds of kilometres, and new songs spread between whales.",
        qs: [
          {
            q: "Which sounds travel furthest underwater?",
            o: ["High squeaks", "Clicks", "Low, deep sounds"],
            a: 2,
            why: "Low sounds lose less energy as they travel.",
          },
          {
            q: "How far can blue whale calls be heard?",
            o: ["A few metres", "Hundreds of kilometres", "Only next to the whale"],
            a: 1,
            why: "Their calls are very deep and powerful.",
          },
          {
            q: "What can happen to a humpback song?",
            o: ["It spreads to other groups of whales", "Only one whale knows it", "It stays the same forever"],
            a: 0,
            why: "Like a popular tune catching on.",
          },
        ],
      },
    },
    {
      id: "b43",
      subject: "Geography",
      title: "The deepest place on Earth",
      body: [
        "The deepest known point in the ocean is the Challenger Deep, in the Mariana Trench in the western Pacific. It's about 10,900 metres down. If you dropped Mount Everest into it, the peak would still be more than 2 kilometres under water.",
        "The pressure at the bottom is over 1,000 times the air pressure at the surface, like having several cars resting on every square centimetre. Even so, life lives there, including tiny shrimp-like amphipods and single-celled creatures.",
        "Only a handful of people have been to the bottom. Jacques Piccard and Don Walsh reached it in 1960 in the bathyscaphe Trieste, whose window cracked on the way down. The film director James Cameron made the first solo dive in 2012. Far more people have walked on the Moon than had visited the Challenger Deep before 2019.",
      ],
      takeaway: "The Challenger Deep is about 10,900 metres down, deep enough to swallow Everest with room to spare.",
      qs: [
        {
          q: "Where is the Challenger Deep?",
          o: ["The Atlantic", "The Arctic Ocean", "The Mariana Trench in the Pacific", "The Red Sea"],
          a: 2,
          why: "It's in the western Pacific.",
        },
        {
          q: "If Everest were placed in it, its peak would be…",
          o: ["Above the surface", "More than 2 km under water", "Exactly at the surface", "Touching the bottom"],
          a: 1,
          why: "The trench is about 10,900 m deep; Everest is about 8,850 m tall.",
        },
        {
          q: "Who first reached the bottom in 1960?",
          o: ["Piccard and Walsh", "James Cameron", "Jacques Cousteau", "Neil Armstrong"],
          a: 0,
          why: "They went down in the Trieste.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Challenger_Deep", "https://en.wikipedia.org/wiki/Trieste_(bathyscaphe)"],
      young: {
        body: [
          "The deepest place in the sea is called the Challenger Deep. It's in the Pacific Ocean and it's about 11 kilometres down.",
          "That's deeper than the tallest mountain is tall. If you put Mount Everest at the bottom, its top would still be under water.",
          "It's completely dark down there and the water pushes very hard. But tiny creatures still live there! Only a few people have ever been to the bottom.",
        ],
        takeaway: "The deepest place in the sea is so deep that Mount Everest would fit inside it.",
        qs: [
          {
            q: "Which ocean has the deepest place?",
            o: ["The Pacific", "The Atlantic", "The Arctic"],
            a: 0,
            why: "The Challenger Deep is in the Pacific.",
          },
          {
            q: "If Mount Everest were at the bottom, its top would be…",
            o: ["Poking out", "Still under water", "In the clouds"],
            a: 1,
            why: "The deep is about 11 km; Everest is under 9 km.",
          },
          {
            q: "Does anything live at the bottom?",
            o: ["No, nothing", "Only sharks", "Yes, tiny creatures"],
            a: 2,
            why: "Some small animals can live under all that pressure.",
          },
        ],
      },
    },
    {
      id: "b44",
      subject: "Nature",
      title: "The ocean makes about half our oxygen",
      body: [
        "Trees get the credit, but scientists estimate that at least half of the oxygen produced on Earth comes from the ocean. Most of it is made by phytoplankton: microscopic algae and bacteria drifting near the surface and using sunlight for photosynthesis.",
        "One of them, a bacterium called Prochlorococcus, wasn't discovered until 1988. It is the smallest known photosynthetic organism, yet it's so abundant that it may produce a significant share of the oxygen in the air you breathe.",
        "Producing oxygen isn't the same as adding it to the air for good. Much of what the ocean makes is used up again by sea creatures and by bacteria breaking down dead matter. But over Earth's history, ocean life has been central to building and keeping our oxygen-rich atmosphere.",
      ],
      takeaway: "Tiny ocean plankton produce at least half of the oxygen made on Earth.",
      qs: [
        {
          q: "About how much of Earth's oxygen production happens in the ocean?",
          o: ["Almost none", "At least half", "About 10%", "All of it"],
          a: 1,
          why: "Mostly by phytoplankton near the surface.",
        },
        {
          q: "What is Prochlorococcus?",
          o: ["A whale", "A type of seaweed", "A tiny photosynthetic bacterium", "A volcano"],
          a: 2,
          why: "The smallest known photosynthetic organism.",
        },
        {
          q: "Why doesn't all ocean oxygen end up in the air?",
          o: ["It's frozen", "It turns into salt", "Whales store it", "Sea life and decay use much of it"],
          a: 3,
          why: "Production and use roughly balance in the ocean.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Phytoplankton", "https://en.wikipedia.org/wiki/Prochlorococcus"],
      young: {
        body: [
          "We often think trees make the air we breathe. They do make lots of oxygen. But the sea makes about half of it!",
          "The sea is full of plankton, tiny living things too small to see. Some of them use sunlight to make food, just like plants, and they give out oxygen.",
          "So next time you take a deep breath, thank the sea. Some of that oxygen was made by plankton.",
        ],
        takeaway: "Tiny plankton in the sea make about half the oxygen on Earth.",
        qs: [
          {
            q: "How much of Earth's oxygen does the sea make?",
            o: ["None", "About half", "A tiny bit"],
            a: 1,
            why: "Tiny plankton make lots of it.",
          },
          {
            q: "What are plankton?",
            o: ["Tiny living things in the sea", "Big fish", "Rocks"],
            a: 0,
            why: "Most are too small to see.",
          },
          {
            q: "What do some plankton use to make food?",
            o: ["Salt", "Moonlight", "Sunlight"],
            a: 2,
            why: "Just like plants on land.",
          },
        ],
      },
    },
    {
      id: "b45",
      subject: "Science",
      title: "What causes tides",
      body: [
        "The Moon's gravity pulls a little harder on the side of Earth facing it than on Earth's centre, and a little harder on Earth's centre than on the far side. That difference stretches the oceans into two bulges: one towards the Moon and one on the opposite side.",
        "As Earth turns, most coasts pass through both bulges each day, so they get two high tides and two low tides. The cycle takes about 24 hours and 50 minutes rather than 24, because the Moon moves along its orbit while Earth spins, so high tide comes roughly 50 minutes later each day.",
        "The Sun has a tidal pull too, a bit under half as strong. Around new and full moon, the Sun and Moon line up and tides are biggest, called spring tides (nothing to do with the season). At half moon, they pull at right angles, giving smaller neap tides.",
      ],
      takeaway: "The Moon stretches the oceans into two bulges, so most coasts get two high tides a day.",
      qs: [
        {
          q: "Why are there two high tides a day, not one?",
          o: [
            "The Sun and Moon take turns",
            "The Moon stretches the ocean into two bulges",
            "Wind pushes the water back",
            "Earth wobbles",
          ],
          a: 1,
          why: "One bulge faces the Moon and one faces away.",
        },
        {
          q: "When are spring tides?",
          o: ["In spring", "During storms", "At half moon", "At new and full moon"],
          a: 3,
          why: "The Sun and Moon line up and pull together.",
        },
        {
          q: "Why is high tide about 50 minutes later each day?",
          o: ["The Moon moves along its orbit", "Earth slows down", "The Sun moves", "Clocks drift"],
          a: 0,
          why: "Earth has to turn a bit further to catch up with the Moon.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Tide"],
      young: {
        body: [
          "At the beach, the sea comes in and goes out twice a day. These are the tides.",
          "The Moon's pull tugs on the oceans and stretches them into two bulges, one on each side of Earth. As Earth spins, the beach passes through both bulges.",
          "When the Sun and Moon line up, they pull together and the tides are extra big.",
        ],
        takeaway: "The Moon's pull makes the sea come in and go out twice a day.",
        qs: [
          {
            q: "How many high tides do most beaches get each day?",
            o: ["Two", "One", "Ten"],
            a: 0,
            why: "Earth spins through two bulges of water.",
          },
          {
            q: "What mostly causes tides?",
            o: ["Wind", "The Moon's pull", "Fish swimming"],
            a: 1,
            why: "The Moon tugs on the oceans.",
          },
          {
            q: "When are tides extra big?",
            o: ["At lunchtime", "When it rains", "When the Sun and Moon line up"],
            a: 2,
            why: "They pull in the same direction.",
          },
        ],
      },
    },
    {
      id: "b46",
      subject: "Nature",
      title: "Sharks are older than trees",
      body: [
        "The oldest fairly complete shark-like fossil, a fish called Doliodus, is about 397 million years old, and shark-like scales go back further still. The first trees appeared a little later, around 385 million years ago.",
        "Sharks have survived several mass extinctions, including the one that ended the non-bird dinosaurs 66 million years ago. Their skeletons are made of cartilage, the bendy material in your ears and nose, which rarely fossilises. Most of what we know about ancient sharks comes from teeth, which they shed by the thousand over a lifetime.",
        "Being old doesn't mean being unchanged. Modern sharks like great whites and hammerheads evolved much more recently. And today many shark species are in trouble: overfishing has cut oceanic shark and ray populations by about 70% since 1970, according to a 2021 study in Nature.",
      ],
      takeaway: "Sharks have existed for around 400 million years, since before the first trees.",
      qs: [
        {
          q: "Which came first, sharks or trees?",
          o: ["Trees", "They appeared together", "Sharks", "Nobody knows"],
          a: 2,
          why: "Shark-like fish appeared at least 10 million years before the first trees.",
        },
        {
          q: "Why are shark skeletons rarely fossilised?",
          o: ["Sharks eat their bones", "They're made of cartilage", "They're too small", "They dissolve in salt water"],
          a: 1,
          why: "Most shark fossils are teeth.",
        },
        {
          q: "How much have oceanic shark and ray populations fallen since 1970?",
          o: ["About 10%", "About 30%", "About 70%", "Not at all"],
          a: 2,
          why: "Mainly because of overfishing.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Shark", "https://en.wikipedia.org/wiki/Evolution_of_fish"],
      young: {
        body: [
          "Sharks have been swimming in the sea for about 400 million years. That's longer than there have been trees!",
          "Sharks were around before the dinosaurs, and they're still here long after the dinosaurs died out.",
          "Shark skeletons are made of bendy cartilage, like the tip of your nose. It rarely turns into fossils, so scientists mostly find old shark teeth.",
        ],
        takeaway: "Sharks have been around longer than trees, and longer than dinosaurs.",
        qs: [
          { q: "Which came first?", o: ["Trees", "Sharks", "Dinosaurs"], a: 1, why: "Sharks are about 400 million years old." },
          {
            q: "What are shark skeletons made of?",
            o: ["Cartilage", "Wood", "Metal"],
            a: 0,
            why: "The same bendy stuff as the tip of your nose.",
          },
          {
            q: "What do scientists mostly find from old sharks?",
            o: ["Whole skeletons", "Fins", "Teeth"],
            a: 2,
            why: "Teeth turn into fossils much more easily.",
          },
        ],
      },
    },
    {
      id: "b47",
      subject: "Nature",
      title: "Coral is an animal",
      body: [
        "A coral reef looks like rock covered in plants, but each coral is a colony of tiny animals called polyps, relatives of jellyfish and sea anemones. Each polyp has a soft body, a mouth ringed with stinging tentacles, and builds a limestone cup beneath itself.",
        "Most reef-building corals rely on algae called zooxanthellae that live inside their tissues. The algae photosynthesise and pass sugars to the coral, providing most of its food. They also give corals much of their colour.",
        "When water gets too warm for too long, the partnership breaks down and the coral expels its algae. Without them, the coral turns white, which is called bleaching. It isn't dead yet, but it's starving, and it can die if conditions don't improve. Repeated marine heatwaves have caused mass bleaching on the Great Barrier Reef several times since 1998.",
      ],
      takeaway: "Coral is a colony of tiny animals that depend on algae living inside them.",
      qs: [
        {
          q: "What is coral?",
          o: ["A colony of tiny animals", "A plant", "A rock", "A type of fish"],
          a: 0,
          why: "Each polyp is related to jellyfish.",
        },
        {
          q: "What gives corals most of their food?",
          o: ["Sand", "Fish droppings", "Sunlight directly", "Algae living inside them"],
          a: 3,
          why: "The algae photosynthesise and share sugars.",
        },
        {
          q: "What causes coral bleaching?",
          o: ["Too much sunlight on dry days", "Water that's too warm for too long", "Too many fish", "Low tides"],
          a: 1,
          why: "Stressed corals expel their algae.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Coral", "https://en.wikipedia.org/wiki/Coral_bleaching"],
      young: {
        body: [
          "Coral looks like colourful rock, or maybe plants. But coral is actually made of tiny animals called polyps!",
          "Tiny plant-like algae live inside the coral. They use sunlight to make food and share it with the coral. They also give coral its bright colours.",
          "If the sea gets too warm, the algae leave. The coral turns white. This is called bleaching, and it makes the coral weak and hungry.",
        ],
        takeaway: "Coral is made of tiny animals, helped by algae that live inside them.",
        qs: [
          {
            q: "What is coral made of?",
            o: ["Rock", "Seaweed", "Tiny animals"],
            a: 2,
            why: "Each tiny animal is called a polyp.",
          },
          {
            q: "What lives inside coral and shares food?",
            o: ["Fish", "Algae", "Crabs"],
            a: 1,
            why: "They make food from sunlight.",
          },
          {
            q: "What happens to coral when the sea gets too warm?",
            o: ["It turns white", "It turns blue", "It grows faster"],
            a: 0,
            why: "The algae leave, and this is called bleaching.",
          },
        ],
      },
    },
    {
      id: "b48",
      subject: "Nature",
      title: "Most deep-sea animals glow",
      body: [
        "Below about 200 metres, sunlight fades fast, and below 1,000 metres it's completely dark. Yet the deep sea is full of light, made by the animals themselves. This is bioluminescence.",
        "The light comes from a chemical reaction: a molecule called luciferin reacts with oxygen, helped by an enzyme called luciferase, and gives off energy as light, usually blue. Blue travels furthest through seawater. In a 2017 study of video from Monterey Bay, California, Séverine Martini and Steven Haddock found that about three-quarters of the animals they observed could make light.",
        "Animals use it to lure prey, like the anglerfish's glowing lure, to find mates, and to hide. Some squid light up their bellies to match the faint light from above, so they cast no shadow for predators looking up.",
      ],
      takeaway: "About three-quarters of deep-sea animals can make their own light, mostly blue.",
      qs: [
        {
          q: "What is bioluminescence?",
          o: ["Glowing rocks", "Reflected moonlight", "Light made by living things", "Light from volcanoes"],
          a: 2,
          why: "A chemical reaction inside the animal makes light.",
        },
        {
          q: "What colour is most deep-sea light?",
          o: ["Red", "White", "Yellow", "Blue"],
          a: 3,
          why: "Blue travels furthest through seawater.",
        },
        {
          q: "Why do some squid light up their bellies?",
          o: ["To hide their shadow from predators below", "To keep warm", "To read", "To scare whales"],
          a: 0,
          why: "Matching the light from above makes them invisible from below.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Bioluminescence", "https://en.wikipedia.org/wiki/Counter-illumination"],
      young: {
        body: [
          "Deep in the sea, it's darker than the darkest night. Sunlight can't reach that far down.",
          "But lots of deep-sea animals make their own light! This is called bioluminescence. Most of the light is blue.",
          "The anglerfish has a glowing lure on its head to catch food. Some squid light up their tummies to hide from hungry animals below.",
        ],
        takeaway: "Many deep-sea animals make their own light.",
        qs: [
          {
            q: "Why is the deep sea dark?",
            o: ["It's always night there", "Sunlight can't reach it", "The water is black"],
            a: 1,
            why: "Light fades as it goes deeper.",
          },
          {
            q: "What colour is most deep-sea light?",
            o: ["Red", "Green", "Blue"],
            a: 2,
            why: "Blue light travels furthest in water.",
          },
          {
            q: "What does the anglerfish use its light for?",
            o: ["Catching food", "Reading", "Keeping warm"],
            a: 0,
            why: "Small fish swim towards the glowing lure.",
          },
        ],
      },
    },
  ],
};

export default pack;
