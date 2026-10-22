import type { Pack } from "../../lib/types";

const pack: Pack = {
  id: "wanderer",
  name: "The Wanderer",
  theme: "Ancient worlds",
  blurb: "What people built, wrote and played thousands of years ago.",
  lessons: [
    {
      id: "b81",
      subject: "History",
      title: "The stone that cracked hieroglyphs",
      body: [
        "In 1799, French soldiers rebuilding a fort near the town of Rashid (Rosetta) in Egypt found a broken slab of dark stone covered in writing. It carried the same decree, issued in 196 BC for King Ptolemy V, in three scripts: Egyptian hieroglyphs, Demotic (an everyday Egyptian script) and Ancient Greek.",
        "Scholars could read the Greek, so the stone offered a key to the hieroglyphs, which nobody had been able to read for around 1,400 years. Thomas Young in England made early progress, showing that oval rings called cartouches held royal names.",
        "The breakthrough came from the French scholar Jean-François Champollion, who announced in 1822 that hieroglyphs mixed sound signs with signs for whole words and ideas. His knowledge of Coptic, a late form of the Egyptian language, was crucial. The stone was taken by the British in 1801 and has been in the British Museum since 1802. Egypt has asked for its return.",
      ],
      takeaway: "The Rosetta Stone repeated one decree in three scripts, letting Champollion decipher hieroglyphs in 1822.",
      qs: [
        {
          q: "Why was the Rosetta Stone so useful?",
          o: [
            "It was a map",
            "It had the same text in three scripts, including Greek",
            "It listed all the pharaohs",
            "It was the oldest stone",
          ],
          a: 1,
          why: "Scholars could read the Greek.",
        },
        {
          q: "Who deciphered hieroglyphs in 1822?",
          o: ["Napoleon", "Howard Carter", "Jean-François Champollion", "Isaac Newton"],
          a: 2,
          why: "Helped by his knowledge of Coptic.",
        },
        {
          q: "Where is the Rosetta Stone now?",
          o: ["Cairo", "The Louvre in Paris", "Rome", "The British Museum"],
          a: 3,
          why: "Since 1802; Egypt has asked for it back.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Rosetta_Stone", "https://en.wikipedia.org/wiki/Jean-Fran%C3%A7ois_Champollion"],
      young: {
        body: [
          "Ancient Egyptians wrote with pictures called hieroglyphs. For hundreds of years, nobody could read them.",
          "In 1799, soldiers found a big stone in Egypt. The same message was carved on it three times, in three different kinds of writing. One of them was Greek, which people could still read.",
          "By comparing the writing, a French scholar called Champollion worked out how to read hieroglyphs in 1822. The stone is called the Rosetta Stone.",
        ],
        takeaway: "The Rosetta Stone helped people learn to read Egyptian hieroglyphs.",
        qs: [
          {
            q: "What are hieroglyphs?",
            o: ["A kind of pyramid", "Ancient Egyptian picture writing", "Egyptian money"],
            a: 1,
            why: "Egyptians used them for thousands of years.",
          },
          {
            q: "Why was the stone so helpful?",
            o: ["It had the same message in three kinds of writing", "It glowed", "It was very big"],
            a: 0,
            why: "People could read the Greek part.",
          },
          {
            q: "Who worked out how to read hieroglyphs?",
            o: ["Cleopatra", "A pharaoh", "Champollion"],
            a: 2,
            why: "He cracked them in 1822.",
          },
        ],
      },
    },
    {
      id: "b82",
      subject: "History",
      title: "Why Roman concrete lasts",
      body: [
        "The Pantheon in Rome has stood for about 1,900 years, and its dome is still the largest unreinforced concrete dome in the world. Roman harbour walls have sat in seawater for two thousand years. Much modern concrete starts cracking within decades.",
        "Part of the secret is volcanic ash. Roman builders mixed lime with ash from around the Bay of Naples. In sea walls, seawater seeping through the concrete reacts with the ash to grow rare interlocking minerals, such as aluminous tobermorite, which strengthen it over time.",
        "In 2023 a team led by Admir Masic at MIT found another clue: small white lumps of lime in Roman concrete, long dismissed as sloppy mixing. They argued the Romans mixed with quicklime while hot, and that when cracks let water in, these lumps dissolve and re-form as calcium carbonate, sealing the cracks. The researchers are now testing self-healing concrete based on the idea.",
      ],
      takeaway: "Roman concrete used volcanic ash and lime lumps that help it strengthen and even self-heal over centuries.",
      qs: [
        {
          q: "What key ingredient did Roman builders use?",
          o: ["Volcanic ash", "Steel bars", "Plastic", "Sugar"],
          a: 0,
          why: "Ash from around the Bay of Naples.",
        },
        {
          q: "What happens to Roman sea walls over time?",
          o: ["They dissolve", "They float", "They turn to sand", "Minerals grow and strengthen them"],
          a: 3,
          why: "Seawater reacts with the ash.",
        },
        {
          q: "What did the 2023 MIT study say lime lumps do?",
          o: ["Make it heavier", "Change its colour", "Seal cracks when water gets in", "Nothing"],
          a: 2,
          why: "They re-form as calcium carbonate.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Roman_concrete", "https://en.wikipedia.org/wiki/Pantheon,_Rome"],
      young: {
        body: [
          "The Romans built amazing buildings almost 2,000 years ago. Some are still standing, like the Pantheon in Rome with its giant dome.",
          "Their secret was special concrete made with ash from volcanoes. In the sea, it even gets stronger over time.",
          "Scientists also found little white lumps in Roman concrete. When a crack lets water in, the lumps help fill the crack back up. It can heal itself!",
        ],
        takeaway: "Roman concrete, made with volcanic ash, can last thousands of years and even fix its own cracks.",
        qs: [
          {
            q: "What did the Romans put in their concrete?",
            o: ["Glass", "Chocolate", "Volcanic ash"],
            a: 2,
            why: "Ash from volcanoes near Naples.",
          },
          {
            q: "What happens to Roman concrete in the sea?",
            o: ["It gets stronger", "It melts", "It turns blue"],
            a: 0,
            why: "Seawater helps new minerals grow in it.",
          },
          {
            q: "What can the little white lumps do?",
            o: ["Glow in the dark", "Help fill cracks", "Make noise"],
            a: 1,
            why: "They help the concrete heal itself.",
          },
        ],
      },
    },
    {
      id: "b83",
      subject: "History",
      title: "Who really built the pyramids",
      body: [
        "The old image of the Great Pyramid built by armies of slaves comes partly from the Greek historian Herodotus and partly from films. Archaeology tells a different story.",
        "In the 1990s, Zahi Hawass and Mark Lehner excavated a workers' town near the Giza pyramids, with bakeries, breweries and evidence that workers ate plenty of beef, sheep and goat. Nearby, workers were buried in tombs with bread and beer for the afterlife, an honour unlikely for slaves. Some skeletons show healed fractures, suggesting they received medical care. Work crews left graffiti with team names such as 'Friends of Khufu'.",
        "In 2013, archaeologists found papyri at Wadi al-Jarf on the Red Sea coast. They include the logbook of an official named Merer, who recorded his team shipping limestone blocks along the Nile to Giza around 4,500 years ago. It's the oldest known inscribed papyrus. The builders were probably a mix of skilled permanent workers and rotating labourers.",
      ],
      takeaway: "The pyramids were built by organised, fed and cared-for workers, not slaves.",
      qs: [
        {
          q: "What did archaeologists find near the Giza pyramids?",
          o: ["A workers' town with bakeries and breweries", "A slave market", "A palace", "Nothing"],
          a: 0,
          why: "Excavated by Hawass and Lehner in the 1990s.",
        },
        {
          q: "What do the workers' tombs suggest?",
          o: ["They were slaves", "They were respected", "They were foreigners", "They were children"],
          a: 1,
          why: "Being buried near the pyramids was an honour.",
        },
        {
          q: "What is Merer's diary?",
          o: ["A novel", "A papyrus logbook about shipping stone to Giza", "A tomb painting", "A royal decree"],
          a: 1,
          why: "It's the oldest known inscribed papyrus.",
        },
      ],
      daily: [],
      sources: ["https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza", "https://en.wikipedia.org/wiki/Diary_of_Merer"],
      young: {
        body: [
          "Many people think the pyramids in Egypt were built by slaves. But scientists have found that's probably not true.",
          "Near the pyramids, they found a town where the workers lived. It had bakeries for bread and lots of meat to eat. Workers who got hurt were looked after.",
          "Workers were even buried close to the pyramids, which was an honour. They were paid workers, proud of their job.",
        ],
        takeaway: "The pyramids were built by paid workers who were fed and looked after.",
        qs: [
          {
            q: "Who built the pyramids?",
            o: ["Aliens", "Robots", "Paid workers"],
            a: 2,
            why: "Archaeologists found their town.",
          },
          {
            q: "What did scientists find near the pyramids?",
            o: ["A workers' town", "A swimming pool", "A castle"],
            a: 0,
            why: "It had bakeries and lots of food.",
          },
          {
            q: "What happened to workers who got hurt?",
            o: ["They were sent away", "They were looked after", "Nothing"],
            a: 1,
            why: "Their bones show injuries that healed.",
          },
        ],
      },
    },
    {
      id: "b84",
      subject: "History",
      title: "A 2,000-year-old computer",
      body: [
        "In 1901, sponge divers exploring a Roman-era shipwreck off the Greek island of Antikythera brought up statues, coins and a lump of corroded bronze. Months later, someone noticed a gear wheel in it.",
        "The Antikythera mechanism, made around 2,100 years ago, is a hand-cranked device of at least 30 interlocking bronze gears. Turning the handle moved pointers showing the positions of the Sun and Moon, the phase of the Moon and the dates of upcoming eclipses. It also tracked the four-year cycle of the ancient Olympic Games. It's often called the first analogue computer.",
        "Nothing of similar complexity is known from the next thousand years or so. Its secrets came out slowly, especially after X-ray scans in 2005 revealed thousands of tiny inscriptions inside, including a kind of user's guide. In 2021 a team at University College London published a reconstruction of how its front displayed the five planets visible to the naked eye.",
      ],
      takeaway: "The Antikythera mechanism was a 2,100-year-old geared device that predicted eclipses and planetary positions.",
      qs: [
        {
          q: "Where was the Antikythera mechanism found?",
          o: ["In a pyramid", "Under a temple", "In a cave", "In a Roman-era shipwreck"],
          a: 3,
          why: "Off the Greek island of Antikythera.",
        },
        {
          q: "What could it predict?",
          o: ["Eclipses", "Earthquakes", "Weather", "Harvests"],
          a: 0,
          why: "And the positions of the Sun, Moon and planets.",
        },
        {
          q: "How did researchers read its hidden inscriptions?",
          o: ["They melted it", "Old drawings", "X-ray scans", "They guessed"],
          a: 2,
          why: "Scans in 2005 revealed thousands of tiny letters.",
        },
      ],
      daily: [1],
      sources: ["https://en.wikipedia.org/wiki/Antikythera_mechanism"],
      young: {
        body: [
          "In 1901, divers found an old shipwreck near a Greek island. Inside was a lump of old, rusty bronze.",
          "Later, people saw tiny gear wheels in it. It was a machine, over 2,000 years old! When you turned a handle, it showed where the Sun and Moon would be.",
          "It could even predict eclipses. It's sometimes called the world's oldest computer.",
        ],
        takeaway: "Divers found a 2,000-year-old machine that could predict eclipses.",
        qs: [
          {
            q: "Where was the old machine found?",
            o: ["In a desert", "In a castle", "In a shipwreck"],
            a: 2,
            why: "Divers found it near a Greek island.",
          },
          {
            q: "How old is it?",
            o: ["About 20 years", "Over 2,000 years", "About 200 years"],
            a: 1,
            why: "It was made around 2,100 years ago.",
          },
          {
            q: "What could it predict?",
            o: ["Eclipses", "Football scores", "Birthdays"],
            a: 0,
            why: "It showed where the Sun and Moon would be.",
          },
        ],
      },
    },
    {
      id: "b85",
      subject: "History",
      title: "Vikings reached America first",
      body: [
        "Norse sagas told of Leif Erikson sailing west from Greenland to a land called Vinland around the year 1000. For centuries, many historians treated this as legend.",
        "In 1960, the Norwegian explorer Helge Ingstad and archaeologist Anne Stine Ingstad found the remains of Norse buildings at L'Anse aux Meadows, at the northern tip of Newfoundland in Canada. Excavations uncovered timber-framed turf houses, iron nails, a bronze cloak pin and evidence of iron smelting.",
        "In 2021 researchers pinned down a precise date. A burst of radiation from the Sun in the year 993 left a spike of carbon-14 in tree rings worldwide. By finding that spike in wood cut with metal tools at the site, they counted the rings and showed the trees were felled in 1021, exactly 471 years before Columbus's first voyage to the Americas.",
      ],
      takeaway: "Norse explorers were in Newfoundland in 1021, 471 years before Columbus.",
      qs: [
        {
          q: "Where is the Norse site L'Anse aux Meadows?",
          o: ["Newfoundland, Canada", "Iceland", "Florida", "Greenland"],
          a: 0,
          why: "Found by the Ingstads in 1960.",
        },
        {
          q: "What year did the 2021 study show wood was cut there?",
          o: ["893", "1021", "1492", "1066"],
          a: 1,
          why: "Using a solar storm's tree-ring signal.",
        },
        {
          q: "How did researchers date the wood so precisely?",
          o: ["Guesswork", "Written records", "Coins", "A carbon-14 spike from a 993 solar storm"],
          a: 3,
          why: "They counted rings from the spike.",
        },
      ],
      daily: [0],
      sources: [
        "https://en.wikipedia.org/wiki/L%27Anse_aux_Meadows",
        "https://en.wikipedia.org/wiki/Norse_colonization_of_North_America",
      ],
      young: {
        body: [
          "Christopher Columbus sailed to the Americas in 1492. But Vikings got there almost 500 years earlier!",
          "Old Viking stories told of sailing west to a new land. In 1960, explorers found the remains of Viking houses in Canada.",
          "Scientists counted the rings in wood the Vikings had cut. It showed they were there in the year 1021.",
        ],
        takeaway: "Vikings reached North America about 500 years before Columbus.",
        qs: [
          {
            q: "Who reached America before Columbus?",
            o: ["Vikings", "Romans", "Pirates"],
            a: 0,
            why: "They were there in 1021.",
          },
          {
            q: "Where were the Viking houses found?",
            o: ["In Mexico", "In Brazil", "In Canada"],
            a: 2,
            why: "In Newfoundland, in Canada.",
          },
          {
            q: "How did scientists find the exact year?",
            o: ["From a Viking diary", "By counting tree rings in the wood", "From coins"],
            a: 1,
            why: "Each ring is one year of growth.",
          },
        ],
      },
    },
    {
      id: "b86",
      subject: "History",
      title: "Writing began with accounting",
      body: [
        "The earliest known writing comes from the city of Uruk in Mesopotamia, in what is now Iraq, from around 3200 BC. It wasn't used for stories or prayers. It was used for bookkeeping: counting grain, beer rations, sheep and workers.",
        "Scribes pressed marks into wet clay with a cut reed, which is why the script became known as cuneiform, from the Latin for 'wedge-shaped'. Over centuries, the signs developed from simple pictures into abstract symbols that could record sounds, and the script was used for more than a dozen languages across 3,000 years.",
        "Clay survives well, so we have hundreds of thousands of tablets, including very personal ones. A tablet from around 1750 BC records a customer called Nanni complaining to a merchant named Ea-nasir that he had been sold poor-quality copper and treated rudely. It's often called the oldest known customer complaint.",
      ],
      takeaway: "Writing was invented in Mesopotamia around 3200 BC, first for keeping accounts.",
      qs: [
        {
          q: "What was the earliest writing mostly used for?",
          o: ["Poetry", "Love letters", "Keeping accounts", "Laws"],
          a: 2,
          why: "Counting grain, beer and sheep.",
        },
        {
          q: "What does ‘cuneiform’ mean?",
          o: ["Picture-writing", "Clay-made", "Sacred script", "Wedge-shaped"],
          a: 3,
          why: "Scribes pressed wedge marks into clay.",
        },
        {
          q: "What is Nanni's tablet famous as?",
          o: ["The oldest known customer complaint", "The first poem", "The first map", "A recipe"],
          a: 0,
          why: "He complained about poor-quality copper.",
        },
      ],
      daily: [0],
      sources: [
        "https://en.wikipedia.org/wiki/Cuneiform",
        "https://en.wikipedia.org/wiki/Complaint_tablet_to_Ea-n%C4%81%E1%B9%A3ir",
      ],
      young: {
        body: [
          "The first writing we know of was made over 5,000 years ago in a place called Mesopotamia, in what is now Iraq.",
          "People wrote by pressing a cut reed into soft clay. The marks looked like little wedges. They used writing to keep track of things like sheep and grain.",
          "One clay tablet, nearly 4,000 years old, is a complaint! A man called Nanni wrote that a shopkeeper sold him bad copper.",
        ],
        takeaway: "The first writing was pressed into clay to keep count of things like sheep and grain.",
        qs: [
          {
            q: "What did people first write on?",
            o: ["Paper", "Soft clay", "Computers"],
            a: 1,
            why: "They pressed marks into clay with a reed.",
          },
          {
            q: "What was the first writing used for?",
            o: ["Comics", "Birthday cards", "Keeping count of things"],
            a: 2,
            why: "Like how much grain or how many sheep.",
          },
          {
            q: "What did Nanni's tablet say?",
            o: ["A complaint about bad copper", "A recipe", "A joke"],
            a: 0,
            why: "It's one of the oldest complaints ever found.",
          },
        ],
      },
    },
    {
      id: "b87",
      subject: "History",
      title: "You can't see the Great Wall from space",
      body: [
        "A popular claim says the Great Wall of China is the only human-made structure visible from space, or even from the Moon. It isn't true.",
        "The wall is long, around 21,000 kilometres including all its branches according to a 2012 Chinese survey, but most of it is only a few metres wide, and it's built from materials similar in colour to the land around it. From the Moon, about 384,000 kilometres away, you can't make out any individual human-made structure with the naked eye.",
        "From low Earth orbit, around 400 kilometres up, astronauts can spot cities, airports and big highways, especially at night when they're lit. But China's first astronaut, Yang Liwei, said in 2003 that he couldn't see the wall. Astronauts have photographed parts of it using zoom lenses. The myth appeared in print long before anyone had been to space.",
      ],
      takeaway: "The Great Wall is too narrow to see from space with the naked eye, and certainly not from the Moon.",
      qs: [
        {
          q: "Can you see the Great Wall from the Moon with the naked eye?",
          o: ["Yes, easily", "Only at night", "No", "Only with clear skies"],
          a: 2,
          why: "No individual structure is visible from that far.",
        },
        {
          q: "Why is the wall hard to see from orbit?",
          o: ["It's underground", "It's narrow and similar in colour to the land", "It's painted blue", "It's too short"],
          a: 1,
          why: "Most of it is only a few metres wide.",
        },
        {
          q: "What did astronaut Yang Liwei say in 2003?",
          o: ["It glowed", "It was huge", "He couldn't see it", "It was red"],
          a: 2,
          why: "He was China's first astronaut.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Great_Wall_of_China"],
      young: {
        body: [
          "Some people say you can see the Great Wall of China from space. That's a myth!",
          "The wall is very, very long, but it's quite thin. It's also the same colour as the ground around it, so it blends in.",
          "China's first astronaut looked for it from space and said he couldn't see it. From space, you can see big cities, especially their lights at night.",
        ],
        takeaway: "You can't see the Great Wall of China from space with just your eyes.",
        qs: [
          {
            q: "Can you see the Great Wall from space with just your eyes?",
            o: ["Yes", "No", "Only on Tuesdays"],
            a: 1,
            why: "It's too thin and blends in.",
          },
          {
            q: "Why is the wall hard to see?",
            o: ["It's underground", "It's invisible", "It's thin and the same colour as the ground"],
            a: 2,
            why: "Long, but only a few metres wide.",
          },
          {
            q: "What can astronauts see from space?",
            o: ["Big cities and their lights", "Cars' number plates", "People waving"],
            a: 0,
            why: "Especially at night.",
          },
        ],
      },
    },
    {
      id: "b88",
      subject: "History",
      title: "The first Olympics had one race",
      body: [
        "The first recorded ancient Olympic Games, at Olympia in Greece, took place in 776 BC. According to the records, they had a single event: the stadion, a sprint of about 192 metres, one length of the stadium. The winner was a cook named Koroibos from the nearby city of Elis.",
        "Over the following centuries, events were added: longer races, wrestling, boxing, chariot racing, the pentathlon and the brutal pankration, a mix of boxing and wrestling with very few rules. Athletes competed naked, and married women were barred from watching. Winners received an olive wreath, though their home cities often showered them with money and honours.",
        "The Games were held every four years for more than a thousand years, a span called an Olympiad. They ended in the late 4th century AD, traditionally linked to bans on pagan festivals by the Roman emperor Theodosius I. The modern Olympics were revived in Athens in 1896.",
      ],
      takeaway: "The ancient Olympics began in 776 BC with a single sprint and ran for over a thousand years.",
      qs: [
        {
          q: "What was the only event at the first recorded Olympics?",
          o: ["Wrestling", "A sprint called the stadion", "Javelin", "Chariot racing"],
          a: 1,
          why: "About 192 metres long.",
        },
        {
          q: "What did ancient Olympic winners receive at the Games?",
          o: ["An olive wreath", "Gold medals", "Land", "Nothing"],
          a: 0,
          why: "Home cities often added rewards.",
        },
        { q: "When were the modern Olympics revived?", o: ["1776", "1896", "1924", "1948"], a: 1, why: "In Athens." },
      ],
      daily: [0, 2],
      sources: ["https://en.wikipedia.org/wiki/Ancient_Olympic_Games", "https://en.wikipedia.org/wiki/Running_in_Ancient_Greece"],
      young: {
        body: [
          "The first Olympic Games we know about were held in Greece in 776 BC. That's over 2,700 years ago!",
          "There was only one event: a running race about as long as two football pitches. The winner was a cook called Koroibos.",
          "Winners got a crown made of olive leaves, not a gold medal. The modern Olympics started again in 1896.",
        ],
        takeaway: "The first Olympics had just one event: a running race.",
        qs: [
          { q: "Where did the first Olympics happen?", o: ["Greece", "China", "Brazil"], a: 0, why: "At Olympia, in 776 BC." },
          {
            q: "What was the only event?",
            o: ["Swimming", "Football", "A running race"],
            a: 2,
            why: "A sprint of about 192 metres.",
          },
          {
            q: "What did winners get?",
            o: ["A gold medal", "A crown of olive leaves", "A trophy"],
            a: 1,
            why: "Medals came much later.",
          },
        ],
      },
    },
  ],
};

export default pack;
