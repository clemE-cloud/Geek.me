import type { Pack } from "../../lib/types";

const pack: Pack = {
  id: "builder",
  name: "The Builder",
  theme: "Inventions",
  blurb: "The ideas and accidents behind things you use every day.",
  lessons: [
    {
      id: "b57",
      subject: "Technology",
      title: "Gutenberg's real invention",
      body: [
        "Printing with movable type didn't start in Europe. Bi Sheng made movable clay type in China around 1040, and in Korea a Buddhist text called the Jikji was printed with movable metal type in 1377.",
        "What Johannes Gutenberg put together in Mainz, Germany, around 1440 was a complete system for printing fast and cheaply with an alphabet of only a few dozen letters. It combined a hand mould for casting identical metal letters quickly, a metal alloy that melted easily and set hard, an oil-based ink that stuck to metal, and a screw press adapted from wine and paper making. His Bible was finished around 1455.",
        "The system spread fast. By 1500, presses in hundreds of European towns had printed millions of books. Cheaper books helped spread the Reformation, the scientific revolution and the idea that ordinary people could read for themselves.",
      ],
      takeaway: "Gutenberg combined type casting, ink, metal and a press into a system that made books cheap.",
      qs: [
        {
          q: "Where was movable type first used?",
          o: ["Germany", "England", "Italy", "China"],
          a: 3,
          why: "Bi Sheng used clay type around 1040.",
        },
        {
          q: "What was Gutenberg's key contribution?",
          o: ["Inventing paper", "A complete system for fast, cheap printing", "Inventing ink", "The alphabet"],
          a: 1,
          why: "He combined casting, metal, ink and a press.",
        },
        {
          q: "Around when was the Gutenberg Bible finished?",
          o: ["1055", "1455", "1655", "1855"],
          a: 1,
          why: "About 15 years after he began.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Printing_press", "https://en.wikipedia.org/wiki/Movable_type"],
      young: {
        body: [
          "Long ago, every book had to be copied out by hand. A single book could take months.",
          "Around 1440, a German man called Johannes Gutenberg built a printing press. It used little metal letters that could be moved around to make any page, then used again.",
          "Suddenly, books could be made quickly and cheaply. People in China and Korea had printed with movable letters even earlier, but Gutenberg's press spread across Europe very fast.",
        ],
        takeaway: "Gutenberg's printing press made books quick and cheap to make.",
        qs: [
          {
            q: "Before printing, how were books made in Europe?",
            o: ["By robots", "By computers", "By hand"],
            a: 2,
            why: "Each copy was written out by hand.",
          },
          {
            q: "What did Gutenberg's press use?",
            o: ["Little metal letters", "Stamps made of cheese", "Paintbrushes"],
            a: 0,
            why: "The letters could be moved and reused.",
          },
          {
            q: "Who printed with movable letters even earlier?",
            o: ["The Romans", "People in China and Korea", "Nobody"],
            a: 1,
            why: "China around 1040 and Korea in 1377.",
          },
        ],
      },
    },
    {
      id: "b58",
      subject: "Technology",
      title: "Why keyboards say QWERTY",
      body: [
        "The QWERTY layout comes from typewriters built by Christopher Latham Sholes in Milwaukee in the late 1860s and early 1870s. In 1873 he sold the design to Remington, the gun and sewing machine maker, which launched it in 1874.",
        "Early typewriters had metal type bars that swung up to hit the paper, and neighbouring bars could jam if typed in quick succession. The common story says QWERTY was designed to slow typists down. A more accurate version is that Sholes rearranged letters through many trial versions, partly to separate pairs that often caused jams. Historians also point to the needs of telegraph operators, who were important early customers.",
        "Whatever the reasons, QWERTY spread because typists trained on it and companies made machines for those typists. Later layouts such as Dvorak, patented in 1936, claimed to be faster, but the advantage is disputed and switching costs kept QWERTY on top.",
      ],
      takeaway: "QWERTY came from 1870s typewriters and stuck because everyone had already learned it.",
      qs: [
        {
          q: "Who designed the QWERTY layout?",
          o: ["Christopher Latham Sholes", "Thomas Edison", "Alexander Graham Bell", "Steve Jobs"],
          a: 0,
          why: "For his typewriters in the 1870s.",
        },
        {
          q: "What problem did early typewriters have?",
          o: ["Keys were too small", "Ink ran out", "Paper tore", "Neighbouring type bars could jam"],
          a: 3,
          why: "Separating common pairs helped reduce jams.",
        },
        {
          q: "Why has QWERTY lasted?",
          o: ["Everyone already learned it", "It's required by law", "It's proven fastest", "It's easiest to make"],
          a: 0,
          why: "Switching costs kept it in place.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/QWERTY", "https://en.wikipedia.org/wiki/Christopher_Latham_Sholes"],
      young: {
        body: [
          "Look at a keyboard. The top row of letters starts Q, W, E, R, T, Y. Why not A, B, C?",
          "This layout comes from typewriters built about 150 years ago by Christopher Latham Sholes. On old typewriters, metal arms could get stuck if you typed some letters one after another. Moving letters apart helped.",
          "Once lots of people learned to type on QWERTY, everyone kept using it, even on phones and computers.",
        ],
        takeaway: "Keyboards say QWERTY because of typewriters from about 150 years ago.",
        qs: [
          {
            q: "What letters start the top row of a keyboard?",
            o: ["A B C D E F", "Z X C V B N", "Q W E R T Y"],
            a: 2,
            why: "That's why it's called QWERTY.",
          },
          {
            q: "Where did the QWERTY layout come from?",
            o: ["Video games", "Old typewriters", "Pianos"],
            a: 1,
            why: "It was made for typewriters in the 1870s.",
          },
          {
            q: "Why do we still use QWERTY?",
            o: ["So many people already learned it", "It's alphabetical", "It's the law"],
            a: 0,
            why: "Changing would mean everyone relearning.",
          },
        ],
      },
    },
    {
      id: "b59",
      subject: "Technology",
      title: "The first computer bug was a real moth",
      body: [
        "On 9 September 1947, operators of the Harvard Mark II computer traced a fault to a moth trapped in one of its relays. They taped it into the logbook with the note: 'First actual case of bug being found.' The page is now held by the Smithsonian.",
        "The joke was that the word was already in use. Engineers had called faults 'bugs' since at least the 1870s, when Thomas Edison used it in letters about his inventions. The moth was funny because it was a literal bug.",
        "The story is often linked to Grace Hopper, a computing pioneer who worked on the Harvard machines and loved telling it, though she didn't find the moth herself. Hopper went on to lead the development of early programming languages that read like English, which shaped COBOL, a language still running many banking systems today.",
      ],
      takeaway: "In 1947 a moth was found in the Harvard Mark II and taped into the log as the first actual bug.",
      qs: [
        {
          q: "What was found in the Harvard Mark II in 1947?",
          o: ["A mouse", "A spider", "A moth", "A beetle"],
          a: 2,
          why: "It was trapped in a relay.",
        },
        {
          q: "Was 'bug' already used for faults before 1947?",
          o: ["No, this was the first use", "Yes, at least since the 1870s", "Only in Britain", "Only for cars"],
          a: 1,
          why: "Edison used it in his letters.",
        },
        {
          q: "Which pioneer is linked to the moth story?",
          o: ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Bill Gates"],
          a: 1,
          why: "She worked on the Harvard machines and told the story often.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Software_bug", "https://en.wikipedia.org/wiki/Grace_Hopper"],
      young: {
        body: [
          "When something goes wrong in a computer, we call it a bug.",
          "In 1947, people working on a huge early computer found a real moth stuck inside it. The moth had stopped the computer from working properly!",
          "They taped the moth into their notebook and wrote 'First actual case of bug being found.' People had called problems bugs before, but this one really was a bug.",
        ],
        takeaway: "In 1947, a real moth was found inside a computer, a real computer bug.",
        qs: [
          {
            q: "What do we call a problem in a computer?",
            o: ["A sock", "A frog", "A bug"],
            a: 2,
            why: "Even before the moth, engineers used the word.",
          },
          {
            q: "What was found inside the computer in 1947?",
            o: ["A worm", "A moth", "A pencil"],
            a: 1,
            why: "It was stuck in one of the parts.",
          },
          {
            q: "What did they do with the moth?",
            o: ["Taped it into a notebook", "Threw it away", "Let it fly away"],
            a: 0,
            why: "The page is now in a museum.",
          },
        ],
      },
    },
    {
      id: "b60",
      subject: "History",
      title: "The tower that grows in summer",
      body: [
        "The Eiffel Tower is about 330 metres tall today, including antennas. On a hot day, its iron expands and the top can rise by up to about 15 centimetres. Sunlight heating one side more than the other also makes the top lean slightly away from the Sun.",
        "It was built by Gustave Eiffel's company for the 1889 World's Fair in Paris, marking 100 years since the French Revolution. Some leading artists signed a public letter against it, calling it a monstrous, useless tower. It was the tallest structure in the world until the Chrysler Building in New York overtook it in 1930.",
        "It was only meant to stand for 20 years. Eiffel helped save it by making it useful for science, especially radio. Military radio stations on the tower intercepted enemy messages during the First World War, and by the time the permit ran out, it had become too valuable to pull down.",
      ],
      takeaway: "The Eiffel Tower's iron expands in heat, and it was saved from demolition by radio.",
      qs: [
        {
          q: "How much can the Eiffel Tower's top rise on a hot day?",
          o: ["Up to about 15 cm", "1 mm", "1 metre", "It can't"],
          a: 0,
          why: "Iron expands when it's heated.",
        },
        {
          q: "Why was the tower built?",
          o: ["As a lighthouse", "For the Olympics", "As a radio mast", "For the 1889 World's Fair"],
          a: 3,
          why: "It marked 100 years since the Revolution.",
        },
        {
          q: "What helped save it from demolition?",
          o: ["Tourism alone", "A royal order", "Its use for radio", "Its height record"],
          a: 2,
          why: "It became valuable for science and the military.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Eiffel_Tower"],
      young: {
        body: [
          "The Eiffel Tower in Paris is made of iron. When metal gets hot, it gets slightly bigger.",
          "So on a hot summer day, the tower can grow up to about 15 centimetres taller. In winter, it shrinks back down.",
          "The tower was built in 1889 for a big fair. It was only supposed to stay for 20 years! People kept it because it was useful for sending radio signals.",
        ],
        takeaway: "The Eiffel Tower grows a little taller on hot days because metal expands.",
        qs: [
          {
            q: "What happens to metal when it gets hot?",
            o: ["It turns blue", "It disappears", "It gets slightly bigger"],
            a: 2,
            why: "Heat makes it expand.",
          },
          {
            q: "How much taller can the tower grow in summer?",
            o: ["1 metre", "About 15 centimetres", "100 metres"],
            a: 1,
            why: "About the length of a pencil.",
          },
          {
            q: "How long was the tower first meant to stay?",
            o: ["20 years", "One week", "Forever"],
            a: 0,
            why: "Radio made it too useful to take down.",
          },
        ],
      },
    },
    {
      id: "b61",
      subject: "Technology",
      title: "Velcro came from a dog walk",
      body: [
        "In 1941 the Swiss engineer George de Mestral came home from a walk in the Alps with his dog and found both of them covered in burdock burrs. Curious, he looked at a burr under a microscope and saw that it was covered in tiny hooks that caught on anything with loops, like fur or wool.",
        "He spent years trying to copy it. Cotton wore out too quickly; nylon worked. He found that sewing nylon loops and then cutting them gave a hook side, while uncut loops made the other side. He patented the idea in 1955 and named it Velcro, from the French velours (velvet) and crochet (hook).",
        "Velcro is a classic example of biomimicry: copying nature's designs. NASA used it in the Apollo programme to keep objects from floating away in weightlessness, which helped make it famous.",
      ],
      takeaway: "Velcro copied the tiny hooks on burdock burrs that stuck to George de Mestral's dog.",
      qs: [
        {
          q: "What inspired Velcro?",
          o: ["Spider webs", "Bird feathers", "Burdock burrs", "Fish scales"],
          a: 2,
          why: "Their tiny hooks catch on loops.",
        },
        {
          q: "Where does the name Velcro come from?",
          o: ["French for velvet and hook", "The inventor's dog", "A Swiss town", "Latin for stick"],
          a: 0,
          why: "Velours and crochet.",
        },
        {
          q: "What is copying nature's designs called?",
          o: ["Robotics", "Botany", "Biography", "Biomimicry"],
          a: 3,
          why: "Velcro is a classic example.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Hook-and-loop_fastener", "https://en.wikipedia.org/wiki/George_de_Mestral"],
      young: {
        body: [
          "In 1941, George de Mestral went for a walk with his dog. When they got home, they were both covered in sticky seed pods called burrs.",
          "He looked at a burr through a microscope. It was covered in tiny hooks that grabbed onto loops in fur and cloth.",
          "He copied the idea with one side of tiny hooks and one side of loops. He called it Velcro. Copying ideas from nature like this is called biomimicry.",
        ],
        takeaway: "Velcro was copied from sticky burrs with tiny hooks.",
        qs: [
          {
            q: "What stuck to George and his dog?",
            o: ["Burrs", "Mud", "Leaves"],
            a: 0,
            why: "Burrs are seed pods with tiny hooks.",
          },
          {
            q: "How does Velcro stick?",
            o: ["Glue", "Tiny hooks grab tiny loops", "Magnets"],
            a: 1,
            why: "Just like a burr on fur.",
          },
          {
            q: "What is copying ideas from nature called?",
            o: ["Gardening", "Recycling", "Biomimicry"],
            a: 2,
            why: "Bio means life, and mimic means copy.",
          },
        ],
      },
    },
    {
      id: "b62",
      subject: "Technology",
      title: "GPS runs on relativity",
      body: [
        "The US Global Positioning System uses around 31 working satellites, each carrying atomic clocks and broadcasting the exact time and its position. Your phone measures how long each signal took to arrive. Since radio travels at the speed of light, each delay gives a distance. With signals from at least four satellites, your phone can work out its position and correct its own less precise clock.",
        "Timing has to be extremely precise: an error of one millionth of a second means about 300 metres on the ground.",
        "That's where Einstein comes in. The satellites move fast, which by special relativity makes their clocks run slow by about 7 microseconds a day. They're also further from Earth's gravity, which by general relativity makes them run fast by about 45 microseconds a day. The net effect is about 38 microseconds a day fast. Without correcting for it, GPS positions would drift by roughly 10 kilometres a day.",
      ],
      takeaway: "GPS works by timing signals from satellites, and it must correct for Einstein's relativity to stay accurate.",
      qs: [
        {
          q: "How many satellites does a phone need for a position fix?",
          o: ["1", "At least 4", "2", "At least 24"],
          a: 1,
          why: "Three for position and one more to fix the clock.",
        },
        {
          q: "How much faster do GPS satellite clocks run per day overall?",
          o: ["Not at all", "About 1 second", "About 1 hour", "About 38 microseconds"],
          a: 3,
          why: "Gravity speeds them up more than motion slows them.",
        },
        {
          q: "Without relativity corrections, GPS would drift by about…",
          o: ["1 metre a year", "10 km a day", "1 cm a day", "Nothing"],
          a: 1,
          why: "Tiny clock errors add up fast.",
        },
      ],
      daily: [0],
      sources: [
        "https://en.wikipedia.org/wiki/Global_Positioning_System",
        "https://en.wikipedia.org/wiki/Error_analysis_for_the_Global_Positioning_System",
      ],
      young: {
        body: [
          "GPS helps phones and cars find where they are. It uses satellites flying high above Earth.",
          "Each satellite sends out a signal saying what time it is, using a super-accurate clock. Your phone listens to at least four satellites and works out how far away each one is.",
          "The clocks have to be incredibly precise. Scientists even have to use Albert Einstein's ideas about time to keep GPS working.",
        ],
        takeaway: "GPS works out where you are by timing signals from satellites.",
        qs: [
          {
            q: "What does GPS use to find where you are?",
            o: ["Kites", "Satellites", "Lighthouses"],
            a: 1,
            why: "They fly high above Earth.",
          },
          {
            q: "How many satellites does your phone listen to?",
            o: ["At least four", "One", "None"],
            a: 0,
            why: "More signals mean a better answer.",
          },
          {
            q: "Whose ideas help keep GPS accurate?",
            o: ["Shakespeare's", "Mozart's", "Albert Einstein's"],
            a: 2,
            why: "His ideas about time matter for the clocks.",
          },
        ],
      },
    },
    {
      id: "b63",
      subject: "Technology",
      title: "Why the plugs in your wall are AC",
      body: [
        "In the 1880s, Thomas Edison built power networks using direct current (DC), which flows in one direction. Its weakness was distance: at the voltages safe for homes, too much energy was lost as heat in the wires, so power stations had to be within a mile or two of their customers.",
        "Alternating current (AC), which reverses direction many times a second, could use a transformer to change voltage easily. Power could be sent long distances at very high voltage with little loss, then stepped down to safer levels near homes. Nikola Tesla's AC motor patents, bought by George Westinghouse, made AC practical.",
        "The rivalry became known as the war of the currents. Westinghouse won the contract to light the 1893 World's Fair in Chicago, and in 1895 a hydroelectric plant at Niagara Falls began producing AC power, which was soon sent to the city of Buffalo. Today the long-distance lines are AC, though very long links increasingly use high-voltage DC.",
      ],
      takeaway: "AC won because transformers let it travel long distances at high voltage with little loss.",
      qs: [
        {
          q: "What was the main weakness of Edison's DC networks?",
          o: ["They were too bright", "They were too cheap", "They couldn't send power far efficiently", "They needed water"],
          a: 2,
          why: "Too much energy was lost over distance.",
        },
        {
          q: "What device made AC practical for long distances?",
          o: ["The transformer", "The light bulb", "The battery", "The fuse"],
          a: 0,
          why: "It changes voltage up and down easily.",
        },
        {
          q: "Who backed AC with Tesla's patents?",
          o: ["Henry Ford", "George Westinghouse", "Thomas Edison", "J. P. Morgan"],
          a: 1,
          why: "He won the 1893 World's Fair contract.",
        },
      ],
      daily: [],
      sources: ["https://en.wikipedia.org/wiki/War_of_the_currents"],
      young: {
        title: "The battle of the currents",
        body: [
          "About 140 years ago, inventors argued about the best way to send electricity to homes.",
          "Thomas Edison liked direct current, which flows one way. But it couldn't travel far without losing lots of energy.",
          "Nikola Tesla and George Westinghouse used alternating current, which switches direction very fast. It could travel long distances. Alternating current won, and it's what comes out of the plugs in your wall.",
        ],
        takeaway: "The electricity in your wall plugs is alternating current, because it travels long distances well.",
        qs: [
          {
            q: "What kind of electricity comes out of wall plugs?",
            o: ["Direct current", "Alternating current", "Lightning"],
            a: 1,
            why: "It switches direction very fast.",
          },
          {
            q: "What was the problem with Edison's direct current?",
            o: ["It was too loud", "It was purple", "It couldn't travel far"],
            a: 2,
            why: "Too much energy was lost on long trips.",
          },
          {
            q: "Who supported alternating current?",
            o: ["Tesla and Westinghouse", "Edison", "Isaac Newton"],
            a: 0,
            why: "Their system won.",
          },
        ],
      },
    },
    {
      id: "b64",
      subject: "Economics",
      title: "The box that shrank the world",
      body: [
        "Until the 1950s, ships were loaded by hand. Dockworkers carried sacks, barrels and crates one at a time, and a ship could spend longer in port than at sea. Goods were often damaged or stolen along the way.",
        "In 1956 the American trucking businessman Malcom McLean sent a converted tanker, the Ideal X, from New Jersey to Texas carrying 58 metal containers. Each could be lifted straight from a truck onto the ship by crane, unopened. McLean later estimated the cost of loading fell from about $5.86 a ton by hand to around 16 cents.",
        "Standard container sizes were agreed in the 1960s, so the same box could travel by ship, train and truck. Cheap shipping made it practical to build products from parts made in many countries. The shipping container is one of the main reasons global trade grew so quickly in the late 20th century.",
      ],
      takeaway: "Standard shipping containers made moving goods so cheap that they reshaped global trade.",
      qs: [
        {
          q: "How were ships loaded before containers?",
          o: ["By robots", "By pipelines", "By hand, item by item", "By aircraft"],
          a: 2,
          why: "Dockworkers carried each sack and crate.",
        },
        {
          q: "Who sent the first container ship voyage in 1956?",
          o: ["Malcom McLean", "Henry Ford", "Andrew Carnegie", "Howard Hughes"],
          a: 0,
          why: "On the Ideal X.",
        },
        {
          q: "Why did standard sizes matter?",
          o: [
            "They looked tidy",
            "They were required by law",
            "They were lighter",
            "The same box could go by ship, train and truck",
          ],
          a: 3,
          why: "Nothing needed unloading between transport types.",
        },
      ],
      daily: [],
      sources: ["https://en.wikipedia.org/wiki/Containerization", "https://en.wikipedia.org/wiki/Malcom_McLean"],
      young: {
        body: [
          "Long ago, ships were loaded by hand. Workers carried every sack and box on board, one by one. It took days.",
          "In 1956, Malcom McLean had an idea. Why not pack everything into big metal boxes that a crane could lift straight onto the ship?",
          "These boxes are called shipping containers. They can go on ships, trains and lorries without being unpacked. They made sending things around the world much cheaper and faster.",
        ],
        takeaway: "Shipping containers made sending goods around the world quick and cheap.",
        qs: [
          {
            q: "How were ships loaded before containers?",
            o: ["With magnets", "By hand, one thing at a time", "With balloons"],
            a: 1,
            why: "Workers carried everything on board.",
          },
          {
            q: "What lifts containers onto ships?",
            o: ["Cranes", "Horses", "Helicopters"],
            a: 0,
            why: "The whole box is lifted at once.",
          },
          {
            q: "Why are containers useful?",
            o: ["They float on their own", "They're made of gold", "They go on ships, trains and lorries without unpacking"],
            a: 2,
            why: "That saves lots of time and money.",
          },
        ],
      },
    },
  ],
};

export default pack;
