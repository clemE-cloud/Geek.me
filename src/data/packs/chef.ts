import type { Pack } from "../../lib/types";

const pack: Pack = {
  id: "chef",
  name: "The Chef",
  theme: "Food science",
  blurb: "The chemistry happening in your kitchen.",
  lessons: [
    {
      id: "b97",
      subject: "Food",
      title: "The reaction that makes food brown",
      body: [
        "Toast, roast potatoes, seared steak, coffee beans and the crust of bread all get their brown colour and much of their flavour from the same chemistry: the Maillard reaction, named after the French chemist Louis-Camille Maillard, who described it in 1912.",
        "It happens when amino acids, the building blocks of protein, react with certain sugars under heat. The reaction produces hundreds of new flavour and aroma compounds and brown pigments. It speeds up a lot above about 140 °C, which is why boiled food, stuck at 100 °C, doesn't brown, while frying and roasting do.",
        "Water slows it down, so cooks pat meat dry before searing. It isn't the same as caramelisation, which is sugar breaking down on its own at higher temperatures. Like many good things, it can go too far: heavily browned starchy foods form more acrylamide, a substance food safety agencies advise limiting.",
      ],
      takeaway: "The Maillard reaction between proteins and sugars browns and flavours food above about 140 °C.",
      qs: [
        {
          q: "What browns toast and seared steak?",
          o: ["Caramelisation", "Oxidation", "The Maillard reaction", "Fermentation"],
          a: 2,
          why: "Amino acids and sugars react under heat.",
        },
        {
          q: "Why doesn't boiled food brown?",
          o: ["It does brown", "Boiling removes sugar", "Steam washes off colour", "Water stays at about 100 °C"],
          a: 3,
          why: "The reaction speeds up above about 140 °C.",
        },
        {
          q: "Why do cooks pat meat dry before searing?",
          o: ["Water slows browning", "To cool it", "To season it", "For safety"],
          a: 0,
          why: "Surface water keeps the temperature too low.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Maillard_reaction"],
      young: {
        body: [
          "Why does toast turn brown and taste so good? It's because of a special change called the Maillard reaction.",
          "When food gets hot enough, bits of protein and sugar join together. They make new brown colours and lots of tasty flavours.",
          "Boiled food stays pale, because water can't get hot enough. Frying, toasting and roasting make food much hotter, so it goes brown.",
        ],
        takeaway: "Heat makes protein and sugar in food join up, turning it brown and tasty.",
        qs: [
          {
            q: "What turns toast brown?",
            o: ["The Maillard reaction", "Paint", "Sunlight"],
            a: 0,
            why: "Heat makes proteins and sugars join together.",
          },
          {
            q: "Why does boiled food stay pale?",
            o: ["It's too wet to see", "Water can't get hot enough", "Boiled food has no sugar"],
            a: 1,
            why: "Water stops at 100 °C.",
          },
          {
            q: "Which cooking makes food brown?",
            o: ["Freezing", "Boiling", "Roasting"],
            a: 2,
            why: "Roasting gets food much hotter.",
          },
        ],
      },
    },
    {
      id: "b98",
      subject: "Food",
      title: "Why chillies burn and milk helps",
      body: [
        "The heat in chilli peppers comes from capsaicin. It binds to a receptor on nerve cells called TRPV1, whose normal job is to detect painful heat above about 43 °C. So capsaicin tricks your nerves into reporting burning when there's no real heat at all. David Julius shared the 2021 Nobel Prize partly for discovering this receptor.",
        "Capsaicin is an oily molecule that doesn't dissolve well in water, so drinking water mostly spreads it around. Milk works better: a protein in it called casein helps pull capsaicin away from the receptors, and the fat helps dissolve it.",
        "Birds don't have a version of the receptor that responds to capsaicin, so they eat chillies happily and spread the seeds, which pass through them undamaged. Mammals, whose teeth crush seeds, are put off. Chilli heat is measured in Scoville units, from a test devised by the pharmacist Wilbur Scoville in 1912.",
      ],
      takeaway: "Capsaicin triggers your heat-pain receptors, and milk's casein and fat help wash it away.",
      qs: [
        {
          q: "What chemical makes chillies hot?",
          o: ["Caffeine", "Capsaicin", "Citric acid", "Menthol"],
          a: 1,
          why: "It triggers the TRPV1 receptor.",
        },
        {
          q: "Why doesn't water help much?",
          o: ["It's too cold", "It makes it worse chemically", "Capsaicin doesn't dissolve well in water", "It does help a lot"],
          a: 2,
          why: "Milk's casein and fat work better.",
        },
        {
          q: "Why can birds eat chillies without feeling the heat?",
          o: [
            "Their receptor doesn't respond to capsaicin",
            "They swallow fast",
            "They have no tongues",
            "They only eat mild ones",
          ],
          a: 0,
          why: "They then spread the seeds.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Capsaicin", "https://en.wikipedia.org/wiki/TRPV1"],
      young: {
        body: [
          "Chillies taste hot because of a chemical inside them called capsaicin.",
          "Capsaicin tricks the nerves in your mouth. It makes them send a 'hot!' message to your brain, even though nothing is really hot.",
          "Water doesn't help much. Milk works better, because it helps wash the capsaicin away. Birds can't feel chilli heat at all!",
        ],
        takeaway: "A chemical in chillies tricks your mouth into feeling heat, and milk helps more than water.",
        qs: [
          {
            q: "What makes chillies taste hot?",
            o: ["Capsaicin", "Salt", "Sunshine"],
            a: 0,
            why: "It's a chemical inside the chilli.",
          },
          {
            q: "Which helps more with chilli heat?",
            o: ["Water", "Lemonade", "Milk"],
            a: 2,
            why: "Milk helps wash the capsaicin away.",
          },
          {
            q: "Which animals can't feel chilli heat?",
            o: ["Dogs", "Birds", "People"],
            a: 1,
            why: "So they spread chilli seeds around.",
          },
        ],
      },
    },
    {
      id: "b99",
      subject: "Food",
      title: "Why honey keeps for years",
      body: [
        "Sealed honey can last for years, even decades, without going off. Archaeologists have reported finding honey in ancient Egyptian tombs, thousands of years old, that still looked edible.",
        "Bees make honey hostile to microbes. They evaporate nectar until honey is only about 17% water, mostly sugar. At that concentration, sugar pulls water out of any bacteria or yeast that land in it, so they can't grow. Honey is also acidic, around pH 3.9, and bees add an enzyme, glucose oxidase, that releases small amounts of hydrogen peroxide when honey is diluted.",
        "The weak spot is moisture. If honey absorbs water from the air, yeasts can start to ferment it, which is why it should be kept sealed. Crystallised honey hasn't gone bad; the sugar has formed crystals, and gentle warming melts them. Honey shouldn't be given to babies under one, as it can carry spores of the bacteria that cause infant botulism.",
      ],
      takeaway: "Honey resists spoiling because it's very low in water, acidic and contains bee enzymes.",
      qs: [
        {
          q: "About how much of honey is water?",
          o: ["None", "About 50%", "About 80%", "About 17%"],
          a: 3,
          why: "Bees evaporate the nectar.",
        },
        {
          q: "Why can't most bacteria grow in honey?",
          o: ["It's too cold", "The sugar pulls water out of them", "It's too dark", "Bees guard it"],
          a: 1,
          why: "Plus it's acidic.",
        },
        {
          q: "Is crystallised honey spoiled?",
          o: ["Yes, throw it away", "Only if it's old", "Only if it's white", "No, it's just sugar crystals"],
          a: 3,
          why: "Gentle warming melts the crystals.",
        },
      ],
      daily: [0, 2],
      sources: ["https://en.wikipedia.org/wiki/Honey"],
      young: {
        body: [
          "Honey can stay good to eat for years and years if it's kept in a closed jar.",
          "Honey has very little water in it and lots of sugar. Germs need water to grow, so they can't grow in honey.",
          "If honey goes crunchy, it's not bad. The sugar has just made crystals. A little warmth makes it runny again.",
        ],
        takeaway: "Honey stays good for years because germs can't grow in it.",
        qs: [
          {
            q: "How long can honey stay good?",
            o: ["One day", "One hour", "Years and years"],
            a: 2,
            why: "If it's kept in a closed jar.",
          },
          {
            q: "Why can't germs grow in honey?",
            o: ["It has very little water", "It's too sticky", "It's too yellow"],
            a: 0,
            why: "Germs need water to grow.",
          },
          {
            q: "What does it mean if honey goes crunchy?",
            o: ["It's gone bad", "The sugar made crystals", "Bees are inside"],
            a: 1,
            why: "A little warmth melts them.",
          },
        ],
      },
    },
    {
      id: "b100",
      subject: "Food",
      title: "What makes popcorn pop",
      body: [
        "Each popcorn kernel holds a little water, about 14% by weight, inside a hard, airtight shell called the hull. The inside is packed with starch.",
        "As the kernel heats up, the water turns to steam, but the hull holds it in. Pressure builds to around nine times normal air pressure. At about 180 °C, the hull bursts. The sudden drop in pressure makes the hot, softened starch and steam expand rapidly into the white foam we eat, which sets almost instantly as it cools. The pop itself comes mostly from the release of steam, according to a 2015 study using high-speed cameras.",
        "Only certain types of corn pop well. Sweet corn and the corn used for cornflour usually just scorch, because their hulls are too porous to hold the pressure. Kernels that don't pop, often called 'old maids', usually have hulls that are damaged or have dried out too much.",
      ],
      takeaway: "Steam builds up inside a popcorn kernel's hard hull until it bursts at about 180 °C.",
      qs: [
        {
          q: "What builds up inside a popcorn kernel?",
          o: ["Steam pressure", "Air", "Oil", "Sugar"],
          a: 0,
          why: "The hull traps the steam from its water.",
        },
        {
          q: "At about what temperature does the hull burst?",
          o: ["100 °C", "180 °C", "300 °C", "50 °C"],
          a: 1,
          why: "By then the pressure is about nine times normal.",
        },
        {
          q: "Why doesn't sweet corn pop well?",
          o: ["It's too sweet", "It's too small", "Its hull is too porous to hold pressure", "It has no water"],
          a: 2,
          why: "Steam escapes before pressure builds.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Popcorn"],
      young: {
        body: [
          "Every popcorn kernel has a tiny drop of water inside a hard shell.",
          "When the kernel gets hot, the water turns into steam. The steam pushes and pushes, but the shell holds it in.",
          "Then, POP! The shell bursts, and the soft inside puffs up into the fluffy white popcorn we eat.",
        ],
        takeaway: "Steam builds up inside a popcorn kernel until its shell bursts.",
        qs: [
          {
            q: "What is inside a popcorn kernel?",
            o: ["Air bubbles only", "A seed of salt", "A tiny drop of water"],
            a: 2,
            why: "It turns into steam when hot.",
          },
          { q: "What does the water turn into?", o: ["Steam", "Ice", "Sugar"], a: 0, why: "Heat turns water into steam." },
          {
            q: "What happens when the shell bursts?",
            o: ["It turns black", "The inside puffs up into popcorn", "It disappears"],
            a: 1,
            why: "The soft starch puffs into white fluff.",
          },
        ],
      },
    },
  ],
};

export default pack;
