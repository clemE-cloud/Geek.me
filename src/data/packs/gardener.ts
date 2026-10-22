import type { Pack } from "../../lib/types";

const pack: Pack = {
  id: "gardener",
  name: "The Gardener",
  theme: "Plants & animals",
  blurb: "Clever crows, tiny survivors and the hidden lives of plants.",
  lessons: [
    {
      id: "b73",
      subject: "Nature",
      title: "Trees and the fungus network",
      body: [
        "Most plant roots are wrapped in fungi. The fungi's thin threads, called hyphae, spread through the soil far further than roots can reach, gathering water, phosphorus and nitrogen. In return, the plant feeds the fungi sugar from photosynthesis. This partnership, called mycorrhiza, is more than 400 million years old.",
        "In 1997 the forest ecologist Suzanne Simard reported that carbon could pass between trees through these shared fungal networks. The journal Nature called it the 'wood wide web', and the idea spread through books and films, including claims that old 'mother trees' feed their seedlings and warn neighbours of danger.",
        "The fungal partnership itself is well established. The bigger claims are disputed. A 2023 review led by Justine Karst found that evidence for trees deliberately sharing resources or signals through the network is weak, and that popular accounts have run ahead of the data. It's a good example of a real discovery growing in the retelling.",
      ],
      takeaway: "Fungi link with nearly all plant roots, but claims that trees talk through the network are disputed.",
      qs: [
        {
          q: "What do fungi give plants in mycorrhiza?",
          o: ["Sunlight", "Shade", "Seeds", "Water and nutrients from the soil"],
          a: 3,
          why: "In return the plant gives them sugar.",
        },
        {
          q: "What did a 2023 review conclude about the 'wood wide web'?",
          o: [
            "Evidence for trees sharing on purpose is weak",
            "It's fully proven",
            "Fungi don't exist in forests",
            "Trees can hear",
          ],
          a: 0,
          why: "Popular accounts went beyond the data.",
        },
        {
          q: "How old is the plant–fungus partnership?",
          o: ["About 40 years", "About 4,000 years", "About 400 million years", "About 4 million years"],
          a: 2,
          why: "It may have helped plants colonise land.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Mycorrhizal_network", "https://en.wikipedia.org/wiki/Mycorrhiza"],
      young: {
        body: [
          "Under the ground, tree roots are wrapped in very thin threads. These threads belong to fungi, the same family as mushrooms.",
          "The fungi bring the tree water and food from the soil. The tree gives the fungi sugar in return. They help each other.",
          "Some people say trees use these threads to talk and share food with each other. Scientists are still arguing about how much that really happens.",
        ],
        takeaway: "Fungi and trees help each other underground, swapping food for water.",
        qs: [
          {
            q: "What wraps around tree roots?",
            o: ["Threads from fungi", "Plastic", "Worms"],
            a: 0,
            why: "Fungi grow long, thin threads in the soil.",
          },
          {
            q: "What does the tree give the fungi?",
            o: ["Stones", "Leaves", "Sugar"],
            a: 2,
            why: "It makes sugar from sunlight.",
          },
          {
            q: "Do scientists agree that trees talk to each other?",
            o: ["Yes, they all agree", "No, they're still arguing", "It's been proven"],
            a: 1,
            why: "The evidence is still being tested.",
          },
        ],
      },
    },
    {
      id: "b74",
      subject: "Nature",
      title: "Crows remember faces",
      body: [
        "In 2006, researchers at the University of Washington led by John Marzluff wore a rubber caveman mask while trapping and ringing a few crows on campus. Then they released the birds unharmed.",
        "For years afterwards, crows scolded and mobbed anyone wearing that mask, while ignoring people in a different, neutral mask. More surprisingly, crows that had never been trapped joined in. Young crows learned from their parents and other birds which face meant danger, and the number of scolding crows grew over time.",
        "Crows and their relatives in the corvid family are among the cleverest animals known. New Caledonian crows make hooked tools from twigs. Ravens can plan for future events. Some crows in Japan drop nuts onto roads for cars to crack, then wait for the traffic lights before collecting them, a behaviour that has been widely reported and filmed.",
      ],
      takeaway: "Crows recognise human faces, remember them for years and teach other crows who's dangerous.",
      qs: [
        {
          q: "What did the crows react to?",
          o: ["Loud noises", "A particular mask", "Bright colours", "Food"],
          a: 1,
          why: "They scolded the mask worn by the trappers.",
        },
        {
          q: "Did crows that were never trapped join in?",
          o: ["Yes, they learned from others", "No", "Only adults", "Only in winter"],
          a: 0,
          why: "The knowledge spread through the crow population.",
        },
        {
          q: "Which bird family includes crows and ravens?",
          o: ["Parrots", "Raptors", "Finches", "Corvids"],
          a: 3,
          why: "Corvids are known for intelligence.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Corvidae", "https://en.wikipedia.org/wiki/John_Marzluff"],
      young: {
        body: [
          "Scientists once wore a scary mask while they caught some crows. They let the crows go without hurting them.",
          "For years after, crows would shout at anyone wearing that mask! Even crows that had never been caught joined in. The crows had told each other which face meant trouble.",
          "Crows are very clever birds. Some make tools from twigs to get food out of holes.",
        ],
        takeaway: "Crows remember faces and teach other crows who to watch out for.",
        qs: [
          {
            q: "What did the crows remember?",
            o: ["A song", "A face, or mask", "A smell"],
            a: 1,
            why: "They shouted at the mask for years.",
          },
          { q: "Did other crows join in?", o: ["Yes", "No", "Only baby crows"], a: 0, why: "Crows learned from each other." },
          {
            q: "What can some crows make?",
            o: ["Nests from metal", "Music", "Tools from twigs"],
            a: 2,
            why: "They use them to get food.",
          },
        ],
      },
    },
    {
      id: "b75",
      subject: "Nature",
      title: "The animal that survived space",
      body: [
        "Tardigrades, also called water bears or moss piglets, are eight-legged animals usually under half a millimetre long. They live almost everywhere there's moisture, from mountaintops to deep-sea mud, and there are more than 1,000 known species.",
        "Their trick is a state called a tun. When their surroundings dry out, they pull in their legs, lose almost all their water and slow their metabolism to nearly nothing. In this state, some species have survived temperatures close to absolute zero, heat above 140 °C for a few minutes, and pressures greater than at the bottom of the ocean.",
        "In 2007 the European FOTON-M3 mission carried tardigrades into orbit and exposed them to the vacuum of space. Many survived and later had healthy young. Those also exposed to unfiltered sunlight fared worse. Tardigrades aren't indestructible, but they're among the toughest animals known.",
      ],
      takeaway: "Tardigrades dry out into a 'tun' state that lets them survive extreme cold, heat and even space.",
      qs: [
        {
          q: "What are tardigrades also called?",
          o: ["Sea monkeys", "Water bears", "Sand fleas", "Glow worms"],
          a: 1,
          why: "Or moss piglets.",
        },
        {
          q: "What is a 'tun'?",
          o: ["A shell", "A type of egg", "A dried-out, dormant state", "A burrow"],
          a: 2,
          why: "They lose almost all their water and slow right down.",
        },
        {
          q: "What happened when tardigrades were exposed to space in 2007?",
          o: ["Many survived and had young", "They grew larger", "All died instantly", "They turned to dust"],
          a: 0,
          why: "On the FOTON-M3 mission.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Tardigrade"],
      young: {
        body: [
          "Tardigrades are tiny animals with eight chubby legs. They're also called water bears. Most are smaller than a grain of sand.",
          "When things get too dry, they curl up into a little ball and almost stop living. Then they can survive freezing cold and boiling heat.",
          "In 2007, scientists sent some into space. Many of them survived and later had babies!",
        ],
        takeaway: "Tiny water bears can survive extreme cold, heat and even space.",
        qs: [
          {
            q: "What is another name for tardigrades?",
            o: ["Sky fish", "Water bears", "Rock dogs"],
            a: 1,
            why: "They look a bit like tiny bears.",
          },
          { q: "How many legs do tardigrades have?", o: ["Two", "Hundreds", "Eight"], a: 2, why: "Eight chubby legs." },
          {
            q: "What happened when they went to space?",
            o: ["Many survived", "They turned green", "They all disappeared"],
            a: 0,
            why: "They're some of the toughest animals.",
          },
        ],
      },
    },
    {
      id: "b76",
      subject: "Nature",
      title: "Autumn colours were there all along",
      body: [
        "Leaves are green because they're packed with chlorophyll, the pigment that captures sunlight. But they also contain yellow and orange pigments called carotenoids, the same family that colours carrots. All summer, the chlorophyll hides them.",
        "As days shorten and cool in autumn, deciduous trees stop making chlorophyll and break down what's there to recycle its nitrogen. As the green fades, the yellows and oranges that were present all along show through.",
        "Reds and purples are different. They come from anthocyanins, which many trees actually make fresh in autumn, especially after sunny days and cool nights. Their purpose is still debated; one leading idea is that they act as a sunscreen, protecting the leaf while the tree pulls nutrients back out of it. That's why autumns with bright days and chilly nights tend to be the most colourful.",
      ],
      takeaway: "Autumn yellows were hidden by chlorophyll all summer, while reds are made fresh in autumn.",
      qs: [
        {
          q: "Why do leaves turn yellow in autumn?",
          o: [
            "They get sunburned",
            "Green chlorophyll breaks down, revealing hidden yellows",
            "Frost paints them",
            "They fill with sap",
          ],
          a: 1,
          why: "The carotenoids were there all summer.",
        },
        {
          q: "Where do red autumn colours come from?",
          o: ["Insects", "Rust", "Anthocyanins made fresh in autumn", "Rain"],
          a: 2,
          why: "Many trees produce them as summer ends.",
        },
        {
          q: "Which weather gives the brightest autumn colours?",
          o: ["Warm, cloudy nights", "Constant rain", "Strong winds", "Sunny days and cool nights"],
          a: 3,
          why: "That boosts red pigment production.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Autumn_leaf_color"],
      young: {
        body: [
          "Leaves are green because of a green colour called chlorophyll. It helps them catch sunlight to make food.",
          "Leaves also have yellow and orange colours hidden inside. In summer, the green covers them up.",
          "In autumn, the green fades away, so the yellow and orange show through. Some trees also make new red colours in autumn.",
        ],
        takeaway: "Yellow and orange leaf colours are hidden by green all summer.",
        qs: [
          { q: "What makes leaves green?", o: ["Paint", "Rain", "Chlorophyll"], a: 2, why: "It helps them catch sunlight." },
          {
            q: "When do the yellow colours show?",
            o: ["Only at night", "In autumn, when the green fades", "When it snows"],
            a: 1,
            why: "They were hiding under the green.",
          },
          {
            q: "Where were the yellow colours in summer?",
            o: ["Hidden under the green", "In the sky", "In the roots"],
            a: 0,
            why: "The green covered them up.",
          },
        ],
      },
    },
    {
      id: "b77",
      subject: "Nature",
      title: "Honeybees dance directions",
      body: [
        "A honeybee that finds good flowers comes back to the hive and performs a 'waggle dance' on the vertical honeycomb. She runs forward in a straight line, waggling her body, then loops back around and repeats.",
        "The angle of the straight run, measured from vertical, tells other bees the direction of the flowers relative to the Sun. Straight up means 'fly towards the Sun'; 40 degrees right of vertical means '40 degrees to the right of the Sun'. The length of the waggle run tells them the distance: longer waggles mean further away.",
        "The Austrian scientist Karl von Frisch decoded the dance through decades of experiments and shared the 1973 Nobel Prize for his work on animal behaviour. Bees even adjust the angle through the day to account for the Sun moving across the sky.",
      ],
      takeaway: "Honeybees' waggle dance gives the direction to flowers relative to the Sun, and the distance by its length.",
      qs: [
        {
          q: "What does the angle of the waggle run show?",
          o: ["The flower's colour", "The direction relative to the Sun", "The time of day", "The hive's size"],
          a: 1,
          why: "Straight up means towards the Sun.",
        },
        {
          q: "What does the length of the waggle show?",
          o: ["Weather", "Danger", "Distance", "Smell"],
          a: 2,
          why: "Longer waggles mean further away.",
        },
        {
          q: "Who decoded the waggle dance?",
          o: ["Charles Darwin", "Jane Goodall", "Gregor Mendel", "Karl von Frisch"],
          a: 3,
          why: "He shared the 1973 Nobel Prize.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Waggle_dance", "https://en.wikipedia.org/wiki/Karl_von_Frisch"],
      young: {
        body: [
          "When a honeybee finds lots of flowers, she flies back to the hive to tell the others. But bees can't talk!",
          "Instead, she does a special wiggly dance called the waggle dance. The direction she wiggles shows which way to fly, using the Sun as a guide.",
          "The longer she waggles, the further away the flowers are. The other bees watch, then fly off to find them.",
        ],
        takeaway: "Honeybees dance to tell each other where to find flowers.",
        qs: [
          {
            q: "How does a bee tell others where flowers are?",
            o: ["She sings", "She dances", "She draws a map"],
            a: 1,
            why: "It's called the waggle dance.",
          },
          {
            q: "What does a longer waggle mean?",
            o: ["It's raining", "The flowers are red", "The flowers are further away"],
            a: 2,
            why: "More waggling means a longer trip.",
          },
          {
            q: "What do bees use as a guide for direction?",
            o: ["The Sun", "Trees", "The Moon"],
            a: 0,
            why: "The dance shows the way compared with the Sun.",
          },
        ],
      },
    },
    {
      id: "b78",
      subject: "Nature",
      title: "Bamboo is a giant grass",
      body: [
        "Bamboo is a grass, part of the same family as wheat and lawn grass. Some species are among the fastest-growing plants on Earth: certain bamboos have been measured growing up to 91 centimetres in a single day.",
        "The trick is that bamboo doesn't grow by building new cells at the tip. Each shoot emerges from the ground already at its full width, with all its segments in place, and the segments stretch out, like a telescope opening, using water and energy stored in a large underground network.",
        "Some bamboos also have one of the strangest life cycles in nature. Many species flower only after decades, some after more than 100 years, and all plants of that species flower at roughly the same time, wherever they are, and then die. In parts of north-east India and Myanmar, these mass flowerings produce so much seed that rat populations explode, leading to crop losses and famine.",
      ],
      takeaway: "Bamboo is a grass that can grow almost a metre a day, and some species flower only once a century.",
      qs: [
        {
          q: "What kind of plant is bamboo?",
          o: ["A grass", "A tree", "A fern", "A cactus"],
          a: 0,
          why: "It's in the same family as wheat.",
        },
        {
          q: "How fast can some bamboo grow?",
          o: ["1 cm a year", "1 m a minute", "Up to 91 cm a day", "It doesn't grow"],
          a: 2,
          why: "Segments stretch like a telescope.",
        },
        {
          q: "What happens when some bamboo species flower all at once?",
          o: ["Pandas move away", "Nothing", "Rivers flood", "Seed floods cause rat population explosions"],
          a: 3,
          why: "In parts of India and Myanmar this has caused famines.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Bamboo", "https://en.wikipedia.org/wiki/Mautam"],
      young: {
        body: [
          "Bamboo looks like a tree, but it's actually a giant grass!",
          "Some bamboo can grow almost a metre in one day. That's about as tall as a five-year-old child. You could almost watch it grow.",
          "Some kinds of bamboo only grow flowers once every 100 years or so. When they do, all of the same kind flower at the same time, all over the world.",
        ],
        takeaway: "Bamboo is a giant grass that can grow almost a metre in a day.",
        qs: [
          {
            q: "What is bamboo?",
            o: ["A giant grass", "A tree", "A flower"],
            a: 0,
            why: "It's related to lawn grass and wheat.",
          },
          {
            q: "How much can some bamboo grow in a day?",
            o: ["One millimetre", "Almost a metre", "Ten metres"],
            a: 1,
            why: "About as tall as a young child.",
          },
          {
            q: "How often do some bamboos flower?",
            o: ["Every day", "Every spring", "About once every 100 years"],
            a: 2,
            why: "And they all flower at the same time.",
          },
        ],
      },
    },
    {
      id: "b79",
      subject: "Nature",
      title: "Elephants talk below our hearing",
      body: [
        "Many elephant calls are rumbles so deep that much of their sound is below 20 hertz, too low for human ears. Low sounds travel well through air and across open ground, so other elephants can hear some calls kilometres away.",
        "The biologist Katy Payne noticed in 1984, while watching elephants at a zoo in Portland, Oregon, that she could feel a throbbing in the air near them without hearing anything. Recording equipment confirmed powerful infrasound calls, and later studies in the wild showed elephants use them to keep scattered family groups together and to find mates.",
        "Elephants may also pick up rumbles through the ground. Experiments by Caitlin O'Connell-Rodwell found that elephants respond to recorded calls played as vibrations through the soil, likely sensing them through their feet and trunk. Studies of African elephant calls have even suggested they use something like individual names to address each other.",
      ],
      takeaway: "Elephants communicate with rumbles too deep for us to hear, which can carry for kilometres.",
      qs: [
        {
          q: "Why can't we hear many elephant calls?",
          o: ["They're too quiet", "They're below about 20 hertz", "They're too high", "Elephants whisper"],
          a: 1,
          why: "That's below the range of human hearing.",
        },
        {
          q: "Who discovered elephant infrasound in 1984?",
          o: ["Katy Payne", "David Attenborough", "Jane Goodall", "Dian Fossey"],
          a: 0,
          why: "She felt the throbbing near zoo elephants.",
        },
        {
          q: "How else may elephants detect rumbles?",
          o: ["By sight", "By smell", "Through their tusks only", "Through vibrations in the ground"],
          a: 3,
          why: "Likely through their feet and trunk.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Elephant_communication", "https://en.wikipedia.org/wiki/Katy_Payne"],
      young: {
        body: [
          "Elephants can make sounds so deep and low that people can't hear them at all.",
          "These low rumbles travel a long way. Elephants far apart can hear each other and stay in touch with their family.",
          "Elephants might also feel rumbles through the ground with their feet! Scientists think some elephants even have a kind of name for each other.",
        ],
        takeaway: "Elephants talk with rumbles too low for people to hear.",
        qs: [
          {
            q: "Can people hear all elephant sounds?",
            o: ["Yes", "Only at night", "No, some are too low"],
            a: 2,
            why: "Their deepest rumbles are below our hearing.",
          },
          {
            q: "How might elephants feel rumbles?",
            o: ["Through their feet", "Through their tails only", "Through their eyes"],
            a: 0,
            why: "The ground carries the vibrations.",
          },
          {
            q: "Why are the rumbles useful?",
            o: ["To scare birds", "To stay in touch with family far away", "To make it rain"],
            a: 1,
            why: "Low sounds travel a long way.",
          },
        ],
      },
    },
    {
      id: "b80",
      subject: "Nature",
      title: "The salamander that regrows itself",
      body: [
        "The axolotl is a salamander from the lakes around Mexico City. Unusually, it keeps its juvenile features for life, including its frilly external gills, and it can breed without ever changing into a land-living adult.",
        "Its real fame comes from regeneration. An axolotl can regrow a lost leg, complete with bones, muscles and nerves, usually without a scar. It can also repair parts of its heart, spinal cord, eyes and even brain. Scientists study it to understand why mammals, including us, mostly form scars instead.",
        "Millions of axolotls live in labs and aquariums around the world, but in the wild they're critically endangered. Their only natural home, the canals of Xochimilco, has been shrunk and polluted by the growth of Mexico City, and surveys have found very few left. Conservation projects work with local farmers to keep stretches of canal clean for them.",
      ],
      takeaway: "The axolotl can regrow limbs and parts of its heart and brain, but it's critically endangered in the wild.",
      qs: [
        {
          q: "Where do wild axolotls live?",
          o: ["Canals around Mexico City", "Lake Victoria", "The Amazon", "The Nile"],
          a: 0,
          why: "The canals of Xochimilco.",
        },
        {
          q: "What can an axolotl regrow?",
          o: ["Only its tail", "Nothing", "Limbs and parts of its heart and brain", "Only skin"],
          a: 2,
          why: "Usually without a scar.",
        },
        {
          q: "How are wild axolotls doing?",
          o: ["Thriving", "Critically endangered", "Extinct", "Increasing fast"],
          a: 1,
          why: "Their habitat has shrunk and been polluted.",
        },
      ],
      daily: [1],
      sources: ["https://en.wikipedia.org/wiki/Axolotl"],
      young: {
        body: [
          "The axolotl is a salamander from Mexico. It has frilly gills on its head that look like feathers, and it always seems to be smiling.",
          "Axolotls have an amazing power. If one loses a leg, it can grow a whole new one! It can even fix parts of its heart and brain.",
          "Lots of axolotls live in aquariums, but very few are left in the wild. People are working to keep their lakes clean.",
        ],
        takeaway: "Axolotls can grow back lost legs, but very few live in the wild.",
        qs: [
          {
            q: "Where do axolotls come from?",
            o: ["Antarctica", "Australia", "Mexico"],
            a: 2,
            why: "From lakes around Mexico City.",
          },
          {
            q: "What can an axolotl do if it loses a leg?",
            o: ["Grow a new one", "Nothing", "Use a stick"],
            a: 0,
            why: "It can regrow a whole leg.",
          },
          {
            q: "How many axolotls are left in the wild?",
            o: ["Millions", "Very few", "Too many"],
            a: 1,
            why: "Their lakes have been polluted.",
          },
        ],
      },
    },
  ],
};

export default pack;
