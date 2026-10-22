import type { Pack } from "../../lib/types";

const pack: Pack = {
  id: "tinkerer",
  name: "The Tinkerer",
  theme: "How things work",
  blurb: "Light, water, cells and the everyday physics hiding in plain sight.",
  lessons: [
    {
      id: "b01",
      subject: "Science",
      title: "Why the sky is blue",
      body: [
        "Sunlight looks white, but it is a mix of every colour. When it hits the tiny nitrogen and oxygen molecules in the air, some of it bounces off in random directions. This is called Rayleigh scattering.",
        "The amount of scattering depends heavily on wavelength: it scales with 1 divided by the wavelength to the fourth power. Blue light has a short wavelength, so it scatters several times more than red. Look anywhere in the sky and you see that scattered blue coming at you.",
        "Violet scatters even more, so why isn't the sky violet? The Sun emits less violet, some is absorbed high in the atmosphere, and our eyes are less sensitive to it. At sunset, light travels through far more air, so most of the blue is scattered away before it reaches you, leaving oranges and reds.",
      ],
      takeaway: "Short wavelengths scatter far more than long ones, which paints the day sky blue and the sunset red.",
      qs: [
        {
          q: "Rayleigh scattering strength is proportional to…",
          o: ["Wavelength", "1 / wavelength²", "1 / wavelength⁴", "Wavelength squared"],
          a: 2,
          why: "It goes with 1/λ⁴, so halving the wavelength gives 16× the scattering.",
        },
        {
          q: "Why are sunsets red and orange?",
          o: [
            "The Sun cools in the evening",
            "Light crosses much more air, so blue scatters out",
            "Dust only appears at night",
            "Red light is reflected by clouds",
          ],
          a: 1,
          why: "The long path through the atmosphere strips out most blue before the light reaches you.",
        },
        {
          q: "Which is NOT a reason the sky isn't violet?",
          o: [
            "The Sun emits less violet",
            "Our eyes are less sensitive to violet",
            "Some violet is absorbed high up",
            "Violet scatters less than blue",
          ],
          a: 3,
          why: "Violet actually scatters more than blue; the other three explain why we still see blue.",
        },
      ],
      daily: [1],
      sources: ["https://en.wikipedia.org/wiki/Rayleigh_scattering"],
      young: {
        body: [
          "Sunlight looks white, but it is really all the colours mixed together.",
          "When sunlight hits the air, the blue part bounces around the most. It gets scattered all over the sky. So wherever you look up, blue light is coming towards your eyes.",
          "At sunset, the light has to pass through much more air to reach you. Most of the blue bounces away on the trip, so the reds and oranges are left.",
        ],
        takeaway: "Air bounces blue light around the most, so the sky looks blue.",
        qs: [
          {
            q: "Sunlight is really…",
            o: ["Only yellow", "Only blue", "All the colours mixed"],
            a: 2,
            why: "White sunlight is a mix of every colour.",
          },
          {
            q: "Which colour does air bounce around the most?",
            o: ["Red", "Blue", "Green"],
            a: 1,
            why: "Blue light scatters the most, so it fills the sky.",
          },
          {
            q: "Why are sunsets red and orange?",
            o: ["The light passes through more air and loses its blue", "Clouds paint the sky", "The Sun gets cooler"],
            a: 0,
            why: "On the long trip through the air, most of the blue light bounces away.",
          },
        ],
      },
    },
    {
      id: "b08",
      subject: "Science",
      title: "Why ice floats",
      body: [
        "Almost every substance is denser as a solid than as a liquid, so its solid form sinks. Water is a famous exception: ice is about 9% less dense than liquid water.",
        "The reason is hydrogen bonding. As water freezes, its molecules lock into an open hexagonal lattice that holds them further apart than in the liquid. Liquid water is actually densest at about 4 °C.",
        "This oddity matters for life. Lakes freeze from the top down, and the ice layer insulates the water beneath. The 4 °C water settles at the bottom, so fish can survive the winter under the ice.",
      ],
      takeaway: "Hydrogen bonds hold ice in an open lattice, so it's less dense than water and floats.",
      qs: [
        {
          q: "Ice is roughly how much less dense than liquid water?",
          o: ["1%", "9%", "25%", "50%"],
          a: 1,
          why: "That's why about 90% of an iceberg sits below the surface.",
        },
        {
          q: "At what temperature is liquid water densest?",
          o: ["0 °C", "4 °C", "20 °C", "100 °C"],
          a: 1,
          why: "Around 4 °C; below that it starts expanding.",
        },
        {
          q: "Why can fish survive winter in frozen lakes?",
          o: [
            "Ice is warm",
            "Fish produce heat",
            "Lakes freeze top-down and the ice insulates the water below",
            "Water never gets below 10 °C",
          ],
          a: 2,
          why: "Floating ice forms a lid that slows further freezing.",
        },
      ],
      daily: [1, 2],
      sources: ["https://en.wikipedia.org/wiki/Properties_of_water"],
      young: {
        body: [
          "Most things get heavier for their size when they freeze, so the solid sinks. Water is different: ice floats.",
          "When water freezes, its tiny parts lock together in a pattern with lots of space in it. That makes ice lighter for its size than water.",
          "This helps fish. Ponds freeze at the top first, and the ice works like a blanket. The water underneath stays liquid, so fish can live there all winter.",
        ],
        takeaway: "Ice has more space inside than water, so it floats, and that keeps ponds liquid underneath.",
        qs: [
          {
            q: "What does ice do in water?",
            o: ["Sinks", "Floats", "Disappears"],
            a: 1,
            why: "Ice is lighter for its size than water.",
          },
          {
            q: "Why is ice lighter for its size?",
            o: ["Its tiny parts lock together with space between them", "It's full of bubbles from the freezer", "It's colder"],
            a: 0,
            why: "Frozen water forms a pattern with gaps in it.",
          },
          {
            q: "How does floating ice help fish?",
            o: ["It gives them food", "It makes the water hot", "It keeps the water below from freezing"],
            a: 2,
            why: "The ice on top works like a blanket.",
          },
        ],
      },
    },
    {
      id: "b05",
      subject: "Nature",
      title: "The octopus is built differently",
      body: [
        "An octopus has three hearts. Two pump blood through the gills, and the third pumps it around the rest of the body. That main heart actually pauses while the octopus swims, which is one reason they prefer crawling.",
        "Its blood is blue. Instead of iron-based haemoglobin, it carries oxygen with haemocyanin, which contains copper. Haemocyanin works well in cold, low-oxygen water.",
        "Most striking is the nervous system: roughly two-thirds of an octopus's neurons sit in its arms rather than its brain. Each arm can taste, feel and make some decisions on its own, while the brain sets the overall goal.",
      ],
      takeaway: "Octopuses have three hearts, copper-based blue blood, and most of their neurons in their arms.",
      qs: [
        {
          q: "How many hearts does an octopus have?",
          o: ["Three", "Two", "One", "Eight"],
          a: 0,
          why: "Two serve the gills and one serves the body.",
        },
        {
          q: "Octopus blood is blue because it uses…",
          o: ["Iron", "Copper", "Cobalt", "Chlorophyll"],
          a: 1,
          why: "Haemocyanin binds oxygen with copper.",
        },
        {
          q: "Where are most of an octopus's neurons?",
          o: ["In its brain", "In its arms", "In its eyes", "In its hearts"],
          a: 1,
          why: "About two-thirds are in the arms.",
        },
      ],
      daily: [0, 1, 2],
      sources: ["https://en.wikipedia.org/wiki/Octopus"],
      young: {
        body: [
          "An octopus has three hearts. Two pump blood through its gills, and one pumps it around the rest of its body.",
          "Its blood is blue. Our blood uses iron to carry oxygen around, but octopus blood uses copper, and that makes it blue.",
          "Most of an octopus's nerve cells are in its arms. Each arm can feel, taste and decide some things by itself.",
        ],
        takeaway: "An octopus has three hearts, blue blood, and arms that can make some decisions on their own.",
        qs: [
          {
            q: "How many hearts does an octopus have?",
            o: ["One", "Three", "Eight"],
            a: 1,
            why: "Two for the gills and one for the body.",
          },
          {
            q: "Why is octopus blood blue?",
            o: ["It eats blue fish", "It drinks seawater", "It uses copper"],
            a: 2,
            why: "Copper in its blood makes it blue.",
          },
          {
            q: "Where are most of an octopus's nerve cells?",
            o: ["In its arms", "In its eyes", "In its head"],
            a: 0,
            why: "That's why each arm can act a bit on its own.",
          },
        ],
      },
    },
    {
      id: "b18",
      subject: "Science",
      title: "Why onions make you cry",
      body: [
        "A whole onion doesn't sting. The tears start when you cut it, because cutting breaks open its cells and mixes chemicals that are normally kept apart.",
        "An enzyme converts sulphur compounds into a gas called syn-propanethial-S-oxide. When it reaches your eyes, it stimulates nerves that trigger tears to flush it away. It's a defence that evolved to stop animals eating the bulb.",
        "A sharp knife crushes fewer cells and releases less gas. Chilling the onion first slows the reaction, and cutting near a fan or open window carries the gas away.",
      ],
      takeaway: "Cutting onions releases an irritant gas; a sharp knife and a cold onion reduce the tears.",
      qs: [
        {
          q: "What triggers the tears?",
          o: ["Onion juice splashing", "Heat from cutting", "The smell alone", "A sulphur-based gas released when cells break"],
          a: 3,
          why: "syn-propanethial-S-oxide irritates the eyes.",
        },
        {
          q: "Why does a sharp knife help?",
          o: ["It's colder", "It's cleaner", "It crushes fewer cells", "It cuts faster than the gas"],
          a: 2,
          why: "Less cell damage means less gas.",
        },
        {
          q: "Why might onions have evolved this chemistry?",
          o: ["To defend against being eaten", "To attract bees", "To grow faster", "No reason"],
          a: 0,
          why: "It deters animals that bite into the bulb.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Syn-Propanethial-S-oxide"],
      young: {
        body: [
          "A whole onion doesn't make you cry. The tears start when you cut it.",
          "Cutting breaks open tiny cells in the onion. Chemicals inside mix and make a gas. When the gas reaches your eyes, they make tears to wash it away. Onions probably do this to stop animals eating them.",
          "A sharp knife breaks fewer cells, so there's less gas. Chilling the onion first helps too. (Ask a grown-up before using a knife.)",
        ],
        takeaway: "Cutting an onion releases a gas that makes your eyes water.",
        qs: [
          {
            q: "When does an onion make you cry?",
            o: ["When you look at it", "When you cut it", "When it's in the fridge"],
            a: 1,
            why: "Cutting breaks its cells and releases the gas.",
          },
          {
            q: "Why do your eyes make tears?",
            o: ["Because onions are sad", "To help you see", "To wash the gas away"],
            a: 2,
            why: "Tears flush the gas out of your eyes.",
          },
          {
            q: "What helps?",
            o: ["A sharp knife and a cold onion", "Cutting very slowly", "A blunt knife"],
            a: 0,
            why: "Fewer broken cells and a slower reaction mean less gas.",
          },
        ],
      },
    },
    {
      id: "b11",
      subject: "Nature",
      title: "The power plant inside your cells",
      body: [
        "Mitochondria turn food into usable energy for your cells. Unusually, they have their own small loop of DNA, separate from the DNA in the cell's nucleus.",
        "That's a clue to their origin. In 1967 biologist Lynn Margulis championed the endosymbiotic theory: mitochondria were once free-living bacteria that were swallowed by another cell over a billion years ago and ended up living inside it permanently.",
        "You inherit your mitochondria almost entirely from your mother, because the egg supplies them and the sperm's are destroyed. That makes mitochondrial DNA a useful tool for tracing maternal ancestry.",
      ],
      takeaway: "Mitochondria were once free bacteria, still carry their own DNA, and are inherited from your mother.",
      qs: [
        {
          q: "What makes mitochondria unusual among cell parts?",
          o: ["They contain chlorophyll", "They have their own DNA", "They are made of metal", "They exist only in plants"],
          a: 1,
          why: "They carry a small circular genome of their own.",
        },
        {
          q: "The endosymbiotic theory says mitochondria were once…",
          o: ["Viruses", "Fungi", "Free-living bacteria", "Parts of the nucleus"],
          a: 2,
          why: "An ancient cell engulfed bacteria that became mitochondria.",
        },
        {
          q: "From whom do you inherit mitochondrial DNA?",
          o: ["Mother", "Father", "Both equally", "Grandparents only"],
          a: 0,
          why: "The egg provides the mitochondria.",
        },
      ],
      daily: [0, 2],
      sources: ["https://en.wikipedia.org/wiki/Mitochondrion"],
      young: {
        body: [
          "Inside your cells are tiny parts called mitochondria. They turn food into energy your body can use.",
          "Mitochondria have their own DNA, separate from the rest of the cell. Scientists think that's because, a very long time ago, they were tiny bacteria living on their own. Another cell swallowed them, and they stayed.",
          "You get your mitochondria from your mum.",
        ],
        takeaway: "Mitochondria make energy in your cells, and long ago they were tiny bacteria.",
        qs: [
          {
            q: "What do mitochondria do?",
            o: ["Grow your hair", "Help you see", "Make energy from food"],
            a: 2,
            why: "They're the cell's power plants.",
          },
          {
            q: "Long ago, mitochondria were probably…",
            o: ["Plants", "Tiny bacteria", "Bits of bone"],
            a: 1,
            why: "Another cell swallowed them and they stayed.",
          },
          {
            q: "Who do you get your mitochondria from?",
            o: ["Your mum", "Both parents equally", "Your dad"],
            a: 0,
            why: "They come from the egg cell.",
          },
        ],
      },
    },
    {
      id: "b22",
      subject: "Science",
      title: "How a microwave heats food",
      body: [
        "A microwave oven fills its metal box with radio waves that flip direction about 2.45 billion times a second. Water molecules are lopsided, with a slightly positive end and a slightly negative end, so they keep trying to line up with the flipping field.",
        "All that twisting jostles neighbouring molecules, and that jostling is heat. Fats and sugars warm up too, but water does most of the work. The waves only reach a few centimetres in, so the middle of a thick dish heats by conduction from the outside. That's why instructions say to stir or let food stand.",
        "The oven came from an accident. In 1945 Percy Spencer, an engineer at Raytheon working on radar equipment, noticed a chocolate bar in his pocket had melted. Raytheon patented a cooking device soon after.",
      ],
      takeaway: "Microwaves make water molecules twist back and forth, and that motion becomes heat.",
      qs: [
        {
          q: "Which molecules in food do microwaves mainly heat?",
          o: ["Salt", "Air", "Protein", "Water"],
          a: 3,
          why: "Water molecules are lopsided, so they twist with the changing field.",
        },
        {
          q: "Why should you stir food or let it stand?",
          o: ["To cool the oven", "The waves only reach a few centimetres in", "To stop sparks", "To kill germs"],
          a: 1,
          why: "The centre heats more slowly, by conduction from the outside.",
        },
        {
          q: "What did Percy Spencer notice in 1945?",
          o: [
            "A popcorn kernel popping",
            "His coffee boiling",
            "A chocolate bar melting in his pocket",
            "His radio stopped working",
          ],
          a: 2,
          why: "He was working near radar equipment at Raytheon.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Microwave_oven", "https://en.wikipedia.org/wiki/Percy_Spencer"],
      young: {
        body: [
          "A microwave oven fills its box with invisible waves. The waves flip back and forth billions of times every second.",
          "Food has lots of water in it. The waves make the tiny bits of water twist and wiggle. All that wiggling makes heat, and the food warms up.",
          "The microwave was invented by accident. In 1945, an engineer called Percy Spencer noticed that a chocolate bar in his pocket had melted while he worked on radar machines.",
        ],
        takeaway: "Microwaves make the water in food wiggle, and the wiggling makes heat.",
        qs: [
          {
            q: "What do microwaves make wiggle in food?",
            o: ["Water", "Salt", "Air"],
            a: 0,
            why: "Water molecules twist with the waves.",
          },
          {
            q: "What does all the wiggling make?",
            o: ["Music", "Light", "Heat"],
            a: 2,
            why: "Moving molecules bump into each other and warm up.",
          },
          {
            q: "What melted in Percy Spencer's pocket?",
            o: ["Ice", "A chocolate bar", "A crayon"],
            a: 1,
            why: "That gave him the idea for a microwave oven.",
          },
        ],
      },
    },
    {
      id: "b23",
      subject: "Science",
      title: "A fridge doesn't make cold",
      body: [
        "A fridge doesn't add cold to food. It moves heat out of the box and dumps it into your kitchen. Put your hand near the coils at the back or bottom and you'll feel it.",
        "The trick is a liquid called a refrigerant that boils at a very low temperature. Pipes inside the fridge let it expand and evaporate, and evaporating soaks up heat, the same way sweat cools your skin. A compressor then squeezes the vapour, which makes it hot, and it gives that heat away to the room as it turns back into liquid.",
        "This means leaving the fridge door open to cool a hot kitchen backfires. The fridge pumps heat from the room, back into the room, and its motor adds extra heat of its own.",
      ],
      takeaway: "A fridge pumps heat out of the box and into the room; evaporation inside does the cooling.",
      qs: [
        {
          q: "Where does the heat from inside a fridge go?",
          o: ["It's destroyed", "Into the food", "Into the freezer", "Into the room"],
          a: 3,
          why: "The coils at the back release it into the kitchen.",
        },
        {
          q: "Why does the refrigerant cool the inside of the fridge?",
          o: ["Evaporating soaks up heat", "It's frozen", "It reflects heat", "It's stored at night"],
          a: 0,
          why: "Like sweat on skin, evaporation takes heat away.",
        },
        {
          q: "What happens if you leave the fridge open to cool a room?",
          o: ["The room gets cooler", "The room warms slightly", "Nothing changes", "The fridge freezes"],
          a: 1,
          why: "It moves heat in a circle and its motor adds more.",
        },
      ],
      daily: [2],
      sources: ["https://en.wikipedia.org/wiki/Refrigerator", "https://en.wikipedia.org/wiki/Vapor-compression_refrigeration"],
      young: {
        body: [
          "A fridge doesn't make cold. It moves heat out of the box and into your kitchen.",
          "Inside the fridge, a special liquid turns into a gas. Turning into a gas soaks up heat, a bit like sweat cooling your skin. Then a pump squeezes the gas and pushes the heat out at the back.",
          "Put your hand near the back of a fridge and you can feel the warm air. That's the heat from inside the fridge.",
        ],
        takeaway: "A fridge moves heat from inside the box out into the room.",
        qs: [
          {
            q: "What does a fridge really do?",
            o: ["Makes cold", "Makes ice from air", "Moves heat out of the box"],
            a: 2,
            why: "It carries heat away from the food.",
          },
          {
            q: "Where does the heat go?",
            o: ["Into the food", "Into the room", "It disappears"],
            a: 1,
            why: "You can feel it near the back of the fridge.",
          },
          {
            q: "Which is like the fridge's trick?",
            o: ["Sweat cooling your skin", "Blowing bubbles", "Rubbing your hands together"],
            a: 0,
            why: "Turning liquid into gas soaks up heat.",
          },
        ],
      },
    },
    {
      id: "b24",
      subject: "Science",
      title: "Why bubbles are round",
      body: [
        "A soap bubble is a thin film of water held between two layers of soap molecules. The film pulls inward on itself, a force called surface tension, and it settles into the shape with the least surface for the air it holds. That shape is a sphere.",
        "The colours come from the film's thickness. Light bounces off both the outer and inner surface, and the two reflections interfere. Depending on the thickness, some colours cancel and others are strengthened, so the bands shift as the film drains and thins.",
        "Just before a bubble pops, patches can look black. The film there has become thinner than the wavelength of visible light, so the reflections cancel almost completely. When bubbles touch, they meet at angles of about 120 degrees, a pattern also seen in foams.",
      ],
      takeaway: "Surface tension pulls a bubble into a sphere, the shape with the least surface for its volume.",
      qs: [
        {
          q: "Why does a bubble form a sphere?",
          o: ["Wind shapes it", "Gravity pulls it", "Soap is round", "It's the least surface for the air inside"],
          a: 3,
          why: "Surface tension shrinks the film to the smallest area it can.",
        },
        {
          q: "What causes a bubble's colours?",
          o: ["Dye in the soap", "Sunlight burning the film", "Reflections from both sides of the film interfering", "Dust"],
          a: 2,
          why: "Thickness decides which colours cancel and which add up.",
        },
        {
          q: "Black patches on a bubble mean the film is…",
          o: ["Very thin, about to pop", "Dirty", "Frozen", "Very thick"],
          a: 0,
          why: "It's thinner than light's wavelength, so the reflections cancel.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Soap_bubble", "https://en.wikipedia.org/wiki/Surface_tension"],
      young: {
        body: [
          "A bubble is a very thin skin of soapy water with air inside.",
          "The skin pulls itself tight, like a stretched balloon. It squeezes into the shape that needs the least skin to hold the air. That shape is a ball.",
          "The rainbow colours come from light bouncing off the inside and outside of the skin. When the skin gets very thin, just before it pops, it can look dark.",
        ],
        takeaway: "A bubble pulls itself into a ball because that shape needs the least skin.",
        qs: [
          {
            q: "What shape do bubbles make?",
            o: ["A cube", "A ball", "A star"],
            a: 1,
            why: "A ball needs the least skin to hold the air.",
          },
          {
            q: "What makes the bubble's skin pull tight?",
            o: ["The wind", "Magnets", "Surface tension"],
            a: 2,
            why: "Water pulls on itself and squeezes the skin.",
          },
          {
            q: "What do the rainbow colours come from?",
            o: ["Light bouncing off both sides of the skin", "Your eyes getting tired", "Paint in the soap"],
            a: 0,
            why: "The two reflections mix and make colours.",
          },
        ],
      },
    },
  ],
};

export default pack;
