import type { Pack } from "../../lib/types";

const pack: Pack = {
  id: "coder",
  name: "The Coder",
  theme: "Computers & the internet",
  blurb: "How the machines in your pocket think and talk.",
  lessons: [
    {
      id: "b89",
      subject: "Technology",
      title: "Why computers count in binary",
      body: [
        "Everything a computer stores, from photos to music to this sentence, is held as long strings of 0s and 1s. Each 0 or 1 is a bit, and eight bits make a byte, enough to store one of 256 different values.",
        "Binary is used because it's easy to build reliably. A transistor only has to be clearly on or off, and a circuit only has to tell a high voltage from a low one. Trying to distinguish ten voltage levels for decimal digits would be far more error-prone, especially with billions of tiny switches packed together.",
        "Counting in binary works like decimal, but each place is worth twice the one to its right instead of ten times: 1, 2, 4, 8, 16 and so on. So 1011 means 8 + 0 + 2 + 1, which is 11. The German mathematician Gottfried Leibniz described the system in detail in 1703, centuries before electronic computers existed.",
      ],
      takeaway: "Computers use binary because on/off switches are easy to build reliably; each place is worth double the last.",
      qs: [
        { q: "How many bits are in a byte?", o: ["2", "4", "8", "10"], a: 2, why: "Enough for 256 different values." },
        { q: "What is 1011 in binary as a normal number?", o: ["1,011", "13", "11", "9"], a: 2, why: "8 + 0 + 2 + 1 = 11." },
        {
          q: "Why do computers use binary?",
          o: [
            "On/off states are easy to build reliably",
            "It's faster to type",
            "It uses less electricity than decimal by law",
            "Tradition",
          ],
          a: 0,
          why: "Telling two states apart is far less error-prone.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Binary_number", "https://en.wikipedia.org/wiki/Byte"],
      young: {
        body: [
          "Computers store everything, from games to photos, as lots and lots of 0s and 1s. This is called binary.",
          "Inside a computer are billions of tiny switches. Each one is either off, which means 0, or on, which means 1. It's easy to build switches that are clearly on or off.",
          "In binary, each place is worth double the one next to it: 1, 2, 4, 8. So 101 in binary means 4 + 1, which is 5.",
        ],
        takeaway: "Computers store everything as 0s and 1s, using tiny on-off switches.",
        qs: [
          { q: "What two numbers does binary use?", o: ["1 and 2", "5 and 10", "0 and 1"], a: 2, why: "Off is 0 and on is 1." },
          { q: "What does 101 in binary mean?", o: ["5", "101", "3"], a: 0, why: "4 + 0 + 1 = 5." },
          {
            q: "What is inside a computer that works like 0s and 1s?",
            o: ["Tiny batteries", "Tiny on-off switches", "Tiny lights"],
            a: 1,
            why: "Each switch is either on or off.",
          },
        ],
      },
    },
    {
      id: "b90",
      subject: "Technology",
      title: "The first website is still online",
      body: [
        "In 1989 Tim Berners-Lee, a British scientist at CERN, the physics laboratory near Geneva, wrote a proposal for a system to share documents between computers using links. His boss, Mike Sendall, famously wrote 'Vague but exciting...' on the cover.",
        "By the end of 1990, Berners-Lee had built the key pieces still used today: HTML for writing pages, HTTP for sending them, URLs for addressing them, plus the first web browser and web server. The first website, at info.cern.ch, explained what the World Wide Web was and how to use it. It went public in August 1991.",
        "The internet already existed; the web was a way of using it. The decision that made it grow was CERN's announcement in April 1993 that the web's software would be free for anyone to use, with no royalties. CERN has since restored the first website, and you can still visit it.",
      ],
      takeaway: "Tim Berners-Lee invented the web at CERN, and CERN made it free for everyone in 1993.",
      qs: [
        {
          q: "Where was the World Wide Web invented?",
          o: ["Silicon Valley", "Oxford University", "MIT", "CERN, near Geneva"],
          a: 3,
          why: "By Tim Berners-Lee.",
        },
        {
          q: "What's the difference between the internet and the web?",
          o: ["They're the same", "The web is only email", "The internet is newer", "The web is a way of using the internet"],
          a: 3,
          why: "The internet already existed.",
        },
        {
          q: "What did CERN decide in 1993?",
          o: ["To sell the web", "To make the web's software free for anyone", "To shut it down", "To patent HTML"],
          a: 1,
          why: "No royalties helped it spread.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/World_Wide_Web", "https://en.wikipedia.org/wiki/Tim_Berners-Lee"],
      young: {
        body: [
          "In 1989, a scientist called Tim Berners-Lee had an idea. What if documents on different computers could be linked together?",
          "He invented the World Wide Web, and in 1991 he put the very first website online. It explained what the web was and how to use it. You can still visit it today.",
          "His workplace decided to let everyone use the web for free. That's one reason it spread around the whole world.",
        ],
        takeaway: "Tim Berners-Lee invented the World Wide Web and made the first website.",
        qs: [
          {
            q: "Who invented the World Wide Web?",
            o: ["Tim Berners-Lee", "Albert Einstein", "Walt Disney"],
            a: 0,
            why: "He built it in 1989–1991.",
          },
          {
            q: "What did the first website explain?",
            o: ["How to bake bread", "The rules of chess", "What the web was and how to use it"],
            a: 2,
            why: "It was a guide to the new web.",
          },
          {
            q: "Why did the web spread so fast?",
            o: ["It was very expensive", "Everyone could use it for free", "Only scientists could use it"],
            a: 1,
            why: "Nobody had to pay to use it.",
          },
        ],
      },
    },
    {
      id: "b91",
      subject: "Technology",
      title: "The first computer programmer",
      body: [
        "In the 1830s, the English mathematician Charles Babbage designed the Analytical Engine, a mechanical, steam-powered general-purpose computer. It was never finished, but on paper it had a memory, a processing unit and instructions fed in on punched cards, borrowed from Jacquard weaving looms.",
        "In 1843 Ada Lovelace, the daughter of the poet Lord Byron, translated an article about the engine and added her own notes, three times longer than the original. In Note G she set out a step-by-step method for the engine to calculate Bernoulli numbers, often called the first published computer program.",
        "Her bigger leap was seeing what such a machine might become. She wrote that it could work on anything that could be represented by symbols, not just numbers, and suggested it might even compose music. She also argued that it could only do what it was instructed to do, a point Alan Turing discussed a century later. The programming language Ada is named after her.",
      ],
      takeaway: "Ada Lovelace published the first computer program in 1843 and saw that computers could work with any symbols.",
      qs: [
        {
          q: "Who designed the Analytical Engine?",
          o: ["Alan Turing", "Isaac Newton", "Charles Babbage", "Thomas Edison"],
          a: 2,
          why: "A mechanical computer designed in the 1830s.",
        },
        {
          q: "What did Ada Lovelace's Note G contain?",
          o: ["A method for calculating Bernoulli numbers", "A poem", "A map", "A song"],
          a: 0,
          why: "Often called the first published program.",
        },
        {
          q: "What did Lovelace suggest the engine might one day do?",
          o: ["Compose music", "Fly", "Cure disease", "Predict weather"],
          a: 0,
          why: "It could work with any symbols, not just numbers.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Ada_Lovelace", "https://en.wikipedia.org/wiki/Analytical_engine"],
      young: {
        body: [
          "Nearly 200 years ago, Charles Babbage designed a computer made of metal gears, powered by steam. It was never finished.",
          "A mathematician called Ada Lovelace wrote instructions for how the machine could solve a tricky maths problem. These are often called the first computer program.",
          "Ada also guessed that computers might one day make music, not just do sums. She was right!",
        ],
        takeaway: "Ada Lovelace wrote what is often called the first computer program, in 1843.",
        qs: [
          {
            q: "What was Babbage's computer made of?",
            o: ["Metal gears", "Plastic", "Glass screens"],
            a: 0,
            why: "It was a mechanical machine.",
          },
          {
            q: "What did Ada Lovelace write?",
            o: ["A cookbook", "Instructions for the machine", "A song"],
            a: 1,
            why: "Often called the first computer program.",
          },
          {
            q: "What did Ada guess computers could do?",
            o: ["Fly", "Cook dinner", "Make music"],
            a: 2,
            why: "She saw they could work with any kind of symbol.",
          },
        ],
      },
    },
    {
      id: "b92",
      subject: "Technology",
      title: "Why long passwords beat clever ones",
      body: [
        "A password's strength depends on how many guesses an attacker would need. Every extra character multiplies the possibilities. Eight random lowercase letters give 26⁸ combinations, about 209 billion. Specialised password-cracking hardware can try billions of guesses a second against stolen password data, so that's not enough.",
        "Swapping letters for symbols, like p@ssw0rd, helps less than it seems, because cracking software tries those substitutions automatically. Length helps much more. A passphrase of four words picked truly at random from a list of 7,776 words gives about 3.7 million billion combinations, and it's easier to remember.",
        "The words must be chosen randomly, not as a phrase or song lyric, which attackers also try. Even better: use a password manager to create a different long random password for every site, and turn on two-factor authentication, so a stolen password alone isn't enough.",
      ],
      takeaway: "Length beats complexity: four random words are far stronger than a short password full of symbols.",
      qs: [
        {
          q: "What matters most for password strength?",
          o: ["Using symbols", "Your pet's name", "Capital letters", "Length and randomness"],
          a: 3,
          why: "Each extra character multiplies the possibilities.",
        },
        {
          q: "Why doesn't p@ssw0rd help much?",
          o: ["Symbols aren't allowed", "Cracking software tries common substitutions", "It's too long", "It's case-sensitive"],
          a: 1,
          why: "Attackers know the tricks.",
        },
        {
          q: "What should the words in a passphrase be?",
          o: ["A famous quote", "Song lyrics", "Picked truly at random", "Your address"],
          a: 2,
          why: "Attackers try known phrases too.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Password_strength", "https://en.wikipedia.org/wiki/Diceware"],
      young: {
        body: [
          "A password keeps your accounts safe. A strong password is hard for someone else to guess.",
          "Longer passwords are much harder to guess than short ones, even short ones with lots of symbols.",
          "A good trick is to pick four random words, like 'purple elbow rocket soup'. It's long, strong and easy to remember. Never share your password with friends.",
        ],
        takeaway: "Long passwords made of random words are strong and easy to remember.",
        qs: [
          {
            q: "Which is usually stronger?",
            o: ["A long password", "A short password", "No password"],
            a: 0,
            why: "Longer means more to guess.",
          },
          {
            q: "What's a good password trick?",
            o: ["Your name", "Four random words", "123456"],
            a: 1,
            why: "Long and easy to remember.",
          },
          {
            q: "Who should you share your password with?",
            o: ["Your best friend", "Everyone", "Nobody, except a trusted adult if needed"],
            a: 2,
            why: "Passwords only work if they're secret.",
          },
        ],
      },
    },
    {
      id: "b93",
      subject: "Technology",
      title: "The internet's first message crashed",
      body: [
        "On 29 October 1969, a student programmer named Charley Kline at UCLA tried to log in to a computer at the Stanford Research Institute, over the brand-new ARPANET, the network that grew into the internet. He typed 'L', then 'O', and the system crashed. So the first message sent was 'LO'.",
        "About an hour later, the login worked. ARPANET was funded by the US Department of Defense's research agency, ARPA, and connected university computers so researchers could share them.",
        "It used packet switching, an idea developed independently by Paul Baran in the US and Donald Davies in the UK in the 1960s. Instead of holding open a single line like a phone call, data is chopped into small packets that travel separately, possibly by different routes, and are reassembled at the other end. If one path fails, packets go another way. That's still how the internet works today.",
      ],
      takeaway: "The internet's first message, in 1969, was 'LO' before the system crashed, and it used packet switching.",
      qs: [
        {
          q: "What was the first message sent over ARPANET?",
          o: ["Hello", "LO", "Test", "LOGIN"],
          a: 1,
          why: "The system crashed after two letters.",
        },
        {
          q: "What is packet switching?",
          o: [
            "Sending data in small chunks that travel separately",
            "Using one fixed line like a phone call",
            "Posting floppy disks",
            "Radio broadcasting",
          ],
          a: 0,
          why: "Packets are reassembled at the other end.",
        },
        {
          q: "What did ARPANET grow into?",
          o: ["Television", "The telephone network", "The internet", "GPS"],
          a: 2,
          why: "It connected university computers from 1969.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/ARPANET", "https://en.wikipedia.org/wiki/Packet_switching"],
      young: {
        body: [
          "In 1969, two big computers far apart in the USA were joined together for the first time. This was the start of the internet.",
          "A student tried to type 'LOGIN'. He got as far as 'L' and 'O', then the computer crashed! So the first message ever sent was 'LO'.",
          "The internet sends information in tiny pieces called packets. They travel separately and get put back together at the end.",
        ],
        takeaway: "The first internet message was 'LO', because the computer crashed.",
        qs: [
          {
            q: "What was the first message sent?",
            o: ["Hello", "LO", "Hi Mum"],
            a: 1,
            why: "The computer crashed after two letters.",
          },
          {
            q: "What happened after the O?",
            o: ["It printed a picture", "A song played", "The computer crashed"],
            a: 2,
            why: "It worked about an hour later.",
          },
          {
            q: "How does the internet send information?",
            o: ["In tiny pieces called packets", "With pigeons", "By post"],
            a: 0,
            why: "They're put back together at the end.",
          },
        ],
      },
    },
    {
      id: "b94",
      subject: "Technology",
      title: "Moore's law",
      body: [
        "In 1965 Gordon Moore, who later co-founded Intel, noticed that the number of components that could be packed onto a computer chip had been doubling every year. He predicted the trend would continue. In 1975 he revised it to a doubling about every two years.",
        "It wasn't a law of nature but an observation that became a target the industry worked to meet. For about 50 years it held remarkably well. Intel's first microprocessor in 1971 had about 2,300 transistors; large chips today have tens of billions.",
        "Doubling every two years means about a thousandfold increase every 20 years, which is why a cheap phone outperforms room-sized supercomputers of the past. The pace has slowed since the 2010s, because transistors are now only tens of atoms across and making them smaller is getting harder and more expensive. Chipmakers increasingly gain speed through new designs and by stacking components in 3D.",
      ],
      takeaway: "Moore's law: the number of transistors on a chip doubled about every two years for roughly 50 years.",
      qs: [
        {
          q: "How often does Moore's law say transistor counts double?",
          o: ["Every month", "Every century", "Every ten years", "About every two years"],
          a: 3,
          why: "Moore revised it to two years in 1975.",
        },
        {
          q: "Is Moore's law a law of nature?",
          o: ["Yes", "Only for phones", "No, an observation that became an industry target", "It was passed by Congress"],
          a: 2,
          why: "Engineers worked to keep it going.",
        },
        {
          q: "Why has progress slowed recently?",
          o: ["Lack of interest", "Transistors are now only tens of atoms across", "Silicon ran out", "A law stopped it"],
          a: 1,
          why: "Shrinking them further is very hard.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Moore%27s_law"],
      young: {
        body: [
          "Computer chips are full of tiny switches called transistors. More transistors make a computer more powerful.",
          "In 1965, Gordon Moore noticed that the number of transistors on a chip kept doubling. Later he said it would double about every two years. He was right for about 50 years!",
          "That's why a phone today is more powerful than giant computers that filled whole rooms long ago.",
        ],
        takeaway: "For about 50 years, computer chips doubled their number of tiny switches every two years.",
        qs: [
          {
            q: "What are transistors?",
            o: ["Screens", "Batteries", "Tiny switches in computer chips"],
            a: 2,
            why: "Chips have billions of them.",
          },
          {
            q: "How often did the number of transistors double?",
            o: ["About every two years", "Every day", "Every 100 years"],
            a: 0,
            why: "That's Moore's law.",
          },
          {
            q: "Why is a phone so powerful today?",
            o: ["It's bigger", "Chips have doubled in power many times", "It's heavier"],
            a: 1,
            why: "Lots of doubling adds up.",
          },
        ],
      },
    },
    {
      id: "b95",
      subject: "Technology",
      title: "The Y2K bug was real",
      body: [
        "To save expensive memory, many programs written from the 1960s to the 1990s stored years with just two digits: 1985 was '85'. When 1999 rolled over to 2000, '00' could be read as 1900. Bank interest, pension dates, billing and scheduling systems could all have gone wrong.",
        "Governments and companies spent years checking and fixing code, at an estimated cost of around $300 billion worldwide. When midnight arrived, very little broke, and some people concluded the danger had been exaggerated. Many of the engineers involved argue the opposite: little broke because of the work.",
        "Another date problem is coming. Many systems count time as the number of seconds since 1 January 1970, stored in a signed 32-bit number. That counter runs out at 03:14:07 UTC on 19 January 2038, after which it wraps around to a date in 1901. Most modern systems have moved to 64-bit time, but old embedded devices may still be affected.",
      ],
      takeaway: "Y2K was a real bug fixed by years of work, and a similar '2038 problem' is coming.",
      qs: [
        {
          q: "What caused the Y2K problem?",
          o: ["Viruses", "Leap years", "Power cuts", "Years stored with only two digits"],
          a: 3,
          why: "'00' could be read as 1900.",
        },
        {
          q: "Why did so little break on 1 January 2000?",
          o: ["Years of work fixed it", "The problem was fake", "Computers were switched off", "Luck"],
          a: 0,
          why: "Around $300 billion was spent on fixes.",
        },
        {
          q: "When does the 32-bit time counter run out?",
          o: ["2000", "19 January 2038", "2025", "2100"],
          a: 1,
          why: "It counts seconds since 1970.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Year_2000_problem", "https://en.wikipedia.org/wiki/Year_2038_problem"],
      young: {
        title: "The Millennium Bug",
        body: [
          "Old computers saved space by writing years with just two numbers. So 1999 was written '99'.",
          "That was a problem when the year 2000 came. '00' could look like 1900 to a computer! This was called the Millennium Bug, or Y2K.",
          "People spent years fixing computers before 2000 arrived. Because of all that work, very little went wrong.",
        ],
        takeaway: "The Millennium Bug was a real problem that people fixed before the year 2000.",
        qs: [
          {
            q: "How did old computers write the year 1999?",
            o: ["99", "1,999", "IX"],
            a: 0,
            why: "Using just two numbers saved space.",
          },
          {
            q: "What might '00' look like to a computer?",
            o: ["2100", "1900", "Zero"],
            a: 1,
            why: "It couldn't tell 1900 from 2000.",
          },
          {
            q: "Why did little go wrong in 2000?",
            o: ["It was all a joke", "Computers were turned off", "People fixed the computers in time"],
            a: 2,
            why: "It took years of work.",
          },
        ],
      },
    },
    {
      id: "b96",
      subject: "Technology",
      title: "How a touchscreen feels your finger",
      body: [
        "Most phone and tablet screens are capacitive. Under the glass is a fine grid of transparent conductive lines, usually made of indium tin oxide, carrying a tiny electrical field.",
        "Your body conducts electricity. When your fingertip comes close, it changes the electrical charge, or capacitance, where the lines cross. The phone's controller scans the grid many times a second and works out where the change is, so it can track several fingers at once. That's what makes pinch-to-zoom possible.",
        "This explains a few everyday annoyances. Ordinary gloves block the effect, so touchscreen gloves have conductive threads woven into the fingertips. A plastic stylus does nothing unless it has a conductive tip. Water drops can confuse the screen because water conducts too. Older resistive screens, common in the early 2000s, worked differently: you had to press two layers together, which is why they needed a firmer touch.",
      ],
      takeaway: "Capacitive touchscreens sense the electrical change your conductive finger makes in a grid under the glass.",
      qs: [
        {
          q: "Why do ordinary gloves stop touchscreens working?",
          o: [
            "They're too thick to press",
            "They scratch the glass",
            "They're too warm",
            "They block the electrical effect of your finger",
          ],
          a: 3,
          why: "Touchscreen gloves have conductive threads.",
        },
        {
          q: "What does a capacitive screen detect?",
          o: ["A change in electrical charge", "Heat", "Pressure", "Light"],
          a: 0,
          why: "Your conductive body changes the capacitance.",
        },
        {
          q: "Why can water drops confuse a touchscreen?",
          o: ["Water is cold", "Water is heavy", "Water conducts electricity", "Water reflects light"],
          a: 2,
          why: "The screen reads them like a touch.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Touchscreen", "https://en.wikipedia.org/wiki/Capacitive_sensing"],
      young: {
        body: [
          "How does a phone screen know where you touch it? Your body carries tiny amounts of electricity.",
          "Under the glass is an invisible grid of wires. When your finger comes close, it changes the electricity in the grid. The phone works out exactly where.",
          "That's why normal gloves don't work on a touchscreen. They stop your finger's electricity reaching the screen.",
        ],
        takeaway: "Touchscreens feel the tiny electricity in your finger.",
        qs: [
          {
            q: "What does a touchscreen sense from your finger?",
            o: ["Your fingerprint", "Tiny amounts of electricity", "The colour of your skin"],
            a: 1,
            why: "Your body carries a little electricity.",
          },
          {
            q: "What is under the screen's glass?",
            o: ["Sand", "Water", "An invisible grid of wires"],
            a: 2,
            why: "It notices changes when you touch it.",
          },
          {
            q: "Why don't normal gloves work?",
            o: ["They block your finger's electricity", "They're too colourful", "They're too soft"],
            a: 0,
            why: "Special gloves have threads that let it through.",
          },
        ],
      },
    },
  ],
};

export default pack;
