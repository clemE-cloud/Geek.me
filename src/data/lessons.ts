import type { Lesson } from "../lib/types";

/*
 * The lesson library. To add a lesson:
 *   1. Append an object of this shape to LESSONS.
 *   2. Add its id to a constellation in constellations.ts (that decides where it appears on the map).
 *
 * {
 *   id: "b22",                 // unique and never reused: saved progress uses it
 *   subject: "Science",        // label shown on the lesson and its card
 *   title: "Short title",
 *   body: ["Paragraph one.", "Paragraph two.", "Paragraph three."],   // 2–4 short paragraphs
 *   takeaway: "One sentence to remember.",                            // becomes the collectible card
 *   qs: [                      // 3 multiple-choice questions
 *     { q: "Question?", o: ["A", "B", "C", "D"], a: 1, why: "Shown after answering." },
 *   ],                         // a = index of the correct option in o (0 = first)
 * },
 */
export const LESSONS: Lesson[] = [
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
          "Violet scatters less than blue",
          "Some violet is absorbed high up",
        ],
        a: 2,
        why: "Violet actually scatters more than blue; the other three explain why we still see blue.",
      },
    ],
  },
  {
    id: "b02",
    subject: "Mind",
    title: "The spacing effect",
    body: [
      "In 1885 the German psychologist Hermann Ebbinghaus memorised lists of nonsense syllables and tested himself over time. He found that memory fades fast at first and then levels off. He drew it as the forgetting curve.",
      "He also found the cure. Reviewing material just as you're starting to forget it resets the curve, and each review makes the next drop slower. Spreading practice out beats cramming the same amount into one sitting, even when the total time is identical.",
      "This is called the spacing effect, and it is one of the most replicated results in learning research. The Review tab in this app uses it: questions you get right come back after longer and longer gaps, and ones you miss come back tomorrow.",
    ],
    takeaway: "Spread your reviews out. Recalling something just before you forget it makes it stick far longer than cramming.",
    qs: [
      {
        q: "Who first described the forgetting curve?",
        o: ["Sigmund Freud", "Hermann Ebbinghaus", "B. F. Skinner", "Jean Piaget"],
        a: 1,
        why: "Ebbinghaus published it in 1885 from experiments on himself.",
      },
      {
        q: "Compared with cramming the same total time, spaced practice…",
        o: ["Works about the same", "Produces longer-lasting memory", "Only helps children", "Is worse for facts"],
        a: 1,
        why: "Spacing reliably improves long-term retention for the same study time.",
      },
      {
        q: "When is a review most useful, according to this idea?",
        o: ["Immediately after learning", "Just as you start to forget", "Only once, a year later", "Never; rereading is enough"],
        a: 1,
        why: "Retrieving a fading memory strengthens it the most.",
      },
    ],
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
        o: ["His editor", "His brother Josef", "A Prague engineer", "His audience"],
        a: 1,
        why: "Josef Čapek, a painter, suggested it.",
      },
      {
        q: "The Czech word ‘robota’ means…",
        o: ["Metal man", "Clockwork", "Forced labour", "Thinking machine"],
        a: 2,
        why: "It referred to the work serfs were obliged to do.",
      },
    ],
  },
  {
    id: "b04",
    subject: "Math",
    title: "The birthday paradox",
    body: [
      "How many people do you need in a room for a better-than-even chance that two share a birthday? Most people guess around 180. The answer is 23.",
      "The trick is that you are not comparing everyone to one person. You are comparing every possible pair, and 23 people make 253 pairs. Each pair has only a 1 in 365 chance of matching, but with that many pairs the chances add up fast. With 23 people the probability is about 50.7%, and with 70 people it passes 99.9%.",
      "The same maths explains why ‘unlikely’ coincidences happen all the time, and why computer scientists worry about two different files producing the same hash.",
    ],
    takeaway: "With n people there are n(n−1)/2 pairs, so shared birthdays become likely with only 23 people.",
    qs: [
      {
        q: "How many people give a roughly 50% chance of a shared birthday?",
        o: ["23", "57", "183", "366"],
        a: 0,
        why: "At 23 people the probability is about 50.7%.",
      },
      {
        q: "How many pairs can 23 people form?",
        o: ["23", "46", "253", "529"],
        a: 2,
        why: "23 × 22 ÷ 2 = 253 pairs.",
      },
      {
        q: "With 70 people, the chance of a shared birthday is about…",
        o: ["20%", "50%", "80%", "99.9%"],
        a: 3,
        why: "It climbs above 99.9% at 70 people.",
      },
    ],
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
        o: ["One", "Two", "Three", "Eight"],
        a: 2,
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
  },
  {
    id: "b06",
    subject: "Economics",
    title: "Opportunity cost",
    body: [
      "Every choice has a hidden price: the best thing you gave up to make it. Economists call this the opportunity cost.",
      "Say you spend Saturday at a concert that costs £40. The cost isn't only the ticket. It's also the next-best use of that day, maybe a paid shift worth £90 or a hike you'd have loved. Money, time and attention are all limited, so using them one way always means not using them another.",
      "Thinking this way changes decisions. A ‘free’ meeting costs an hour of everyone's time. Holding cash has the cost of returns you could have earned. The useful question is rarely ‘is this good?’ but ‘is this better than my next-best option?’",
    ],
    takeaway: "The real cost of a choice is the value of the best alternative you give up.",
    qs: [
      {
        q: "Opportunity cost is…",
        o: [
          "The price on the receipt",
          "The value of the best alternative you give up",
          "Every alternative added together",
          "Tax on a purchase",
        ],
        a: 1,
        why: "It's only the single next-best option, not all of them combined.",
      },
      {
        q: "A ‘free’ one-hour meeting with 8 people has an opportunity cost of…",
        o: ["Nothing", "One hour", "Eight hours of other work", "The room booking fee"],
        a: 2,
        why: "Each person gives up an hour they could have used elsewhere.",
      },
      {
        q: "Which question best reflects opportunity-cost thinking?",
        o: ["Is this good?", "Is this cheap?", "Is this better than my next-best option?", "Did others choose it?"],
        a: 2,
        why: "Choices are judged against what else you could do.",
      },
    ],
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
        o: ["Leonardo da Vinci", "Filippo Brunelleschi", "Michelangelo", "Giotto"],
        a: 1,
        why: "Brunelleschi's Baptistery panel experiment came around 1415.",
      },
      {
        q: "In linear perspective, receding parallel lines…",
        o: ["Stay parallel", "Curve outward", "Meet at a vanishing point", "Disappear at the frame edge"],
        a: 2,
        why: "They converge on a single point on the horizon.",
      },
      {
        q: "Who first wrote a treatise explaining the method?",
        o: ["Alberti", "Vasari", "Dürer", "Raphael"],
        a: 0,
        why: "Alberti's On Painting appeared in 1435.",
      },
    ],
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
          "Lakes freeze top-down and the ice insulates the water below",
          "Fish produce heat",
          "Water never gets below 10 °C",
        ],
        a: 1,
        why: "Floating ice forms a lid that slows further freezing.",
      },
    ],
  },
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
  },
  {
    id: "b10",
    subject: "Mind",
    title: "The Dunning–Kruger effect",
    body: [
      "In 1999, psychologists David Dunning and Justin Kruger tested people on logic, grammar and humour, then asked them to guess how well they'd done. The lowest scorers overestimated themselves the most, placing themselves well above average.",
      "Their explanation: the skills you need to do something well are often the same skills you need to judge whether you did it well. Without them, you can't see your own mistakes.",
      "Later researchers argue that part of the pattern is a statistical artifact, because everyone tends to guess near the middle. Even so, the practical lesson holds: confidence is a poor guide to competence, and feedback from outside is worth seeking.",
    ],
    takeaway: "People with low skill often can't see their own errors, so self-confidence is a weak signal of ability.",
    qs: [
      {
        q: "In the 1999 study, who overestimated their performance most?",
        o: ["Top scorers", "Lowest scorers", "Middle scorers", "Nobody"],
        a: 1,
        why: "The bottom group placed themselves well above average.",
      },
      {
        q: "Dunning and Kruger's main explanation was that…",
        o: [
          "Low scorers lie",
          "Judging quality needs the same skills as doing well",
          "Tests were unfair",
          "Confidence causes mistakes",
        ],
        a: 1,
        why: "Without the skill, you can't recognise your own errors.",
      },
      {
        q: "What do some later researchers argue?",
        o: [
          "The effect is partly a statistical artifact",
          "It only affects children",
          "It was never tested",
          "Experts overestimate most",
        ],
        a: 0,
        why: "Regression toward the middle can produce part of the pattern.",
      },
    ],
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
        o: ["They have their own DNA", "They contain chlorophyll", "They are made of metal", "They exist only in plants"],
        a: 0,
        why: "They carry a small circular genome of their own.",
      },
      {
        q: "The endosymbiotic theory says mitochondria were once…",
        o: ["Viruses", "Free-living bacteria", "Fungi", "Parts of the nucleus"],
        a: 1,
        why: "An ancient cell engulfed bacteria that became mitochondria.",
      },
      {
        q: "From whom do you inherit mitochondrial DNA?",
        o: ["Father", "Mother", "Both equally", "Grandparents only"],
        a: 1,
        why: "The egg provides the mitochondria.",
      },
    ],
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
        o: ["Consonants", "Long vowel sounds", "Word order", "The alphabet"],
        a: 1,
        why: "Long vowels moved, e.g. ‘bite’ was once said like ‘beet’.",
      },
      {
        q: "Who brought the printing press to England?",
        o: ["Gutenberg", "Caxton", "Chaucer", "Shakespeare"],
        a: 1,
        why: "William Caxton, in 1476.",
      },
      {
        q: "Why is ‘knight’ spelled with a k?",
        o: ["A printing error", "The k was once pronounced", "It's from Greek", "To look fancy"],
        a: 1,
        why: "Spellings froze before the sound dropped out.",
      },
    ],
  },
  {
    id: "b13",
    subject: "Math",
    title: "Why 0.999… equals 1",
    body: [
      "The number 0.999… with nines going on forever is exactly equal to 1, not just very close. It feels wrong, but there are several simple proofs.",
      "One: 1/3 = 0.333…. Multiply both sides by 3 and you get 1 = 0.999…. Another: if two numbers are different, there must be a number between them. Try to name one between 0.999… and 1 and you can't, because any gap you choose is bigger than the remaining difference.",
      "The confusion comes from imagining the nines being written out one at a time. The notation means the limit of that process, and that limit is exactly 1. Two different decimal spellings can name the same number.",
    ],
    takeaway: "0.999… repeating is the same number as 1; it's just a second way to write it.",
    qs: [
      {
        q: "Is 0.999… (repeating forever) equal to 1?",
        o: ["No, it's slightly less", "Yes, exactly", "Only approximately", "It's undefined"],
        a: 1,
        why: "It's exactly equal; the notation means the limit.",
      },
      {
        q: "Which proof was given?",
        o: ["3 × 0.333… = 0.999… = 1", "1 ÷ 0 = ∞", "π is irrational", "Square roots"],
        a: 0,
        why: "Since 1/3 = 0.333…, three of them make both 1 and 0.999….",
      },
      {
        q: "Why can't you find a number between 0.999… and 1?",
        o: ["Because they're the same number", "Because decimals stop", "Because of rounding", "Because 1 is prime"],
        a: 0,
        why: "No gap exists between equal numbers.",
      },
    ],
  },
  {
    id: "b14",
    subject: "Space",
    title: "You're always seeing the past",
    body: [
      "Light is fast, about 300,000 km per second, but not instant. Sunlight takes roughly 8 minutes and 20 seconds to reach Earth. If the Sun vanished, you wouldn't know for over eight minutes.",
      "The nearest star after the Sun, Proxima Centauri, is about 4.24 light-years away. The light you'd see from it left before you saw it, over four years ago. Light from the Andromeda Galaxy set off about 2.5 million years ago.",
      "Looking out into space is looking back in time. That's how astronomers study the early universe: the most distant galaxies show us how things were billions of years ago.",
    ],
    takeaway: "Light takes time to travel, so everything you see in the sky is how it was, not how it is.",
    qs: [
      {
        q: "How long does sunlight take to reach Earth?",
        o: ["1 second", "About 8 minutes 20 seconds", "About 1 hour", "About 1 day"],
        a: 1,
        why: "The Sun is about 150 million km away.",
      },
      {
        q: "How far is Proxima Centauri?",
        o: ["About 4.24 light-years", "About 100 light-years", "About 8 light-minutes", "About 1 million light-years"],
        a: 0,
        why: "It's the closest star to the Sun.",
      },
      {
        q: "Why do astronomers study very distant galaxies?",
        o: ["They are brighter", "Their light shows the early universe", "They are moving closer", "They are easier to reach"],
        a: 1,
        why: "Old light is a view into the past.",
      },
    ],
  },
  {
    id: "b15",
    subject: "Economics",
    title: "The rule of 72",
    body: [
      "Compound growth means you earn returns on your returns. It feels slow at first, then speeds up, which makes it hard to estimate in your head.",
      "The rule of 72 is a shortcut: divide 72 by the yearly growth rate to get roughly how many years it takes to double. At 6% a year, money doubles in about 12 years. At 9%, about 8 years. At 2%, about 36.",
      "It works for anything growing at a steady rate, including debt and inflation. At 3% inflation, prices double in about 24 years, which means the value of cash under the mattress halves.",
    ],
    takeaway: "Years to double ≈ 72 ÷ the annual growth rate.",
    qs: [
      {
        q: "At 8% a year, roughly how long until money doubles?",
        o: ["4 years", "9 years", "16 years", "72 years"],
        a: 1,
        why: "72 ÷ 8 = 9.",
      },
      {
        q: "At 3% inflation, prices double in about…",
        o: ["3 years", "12 years", "24 years", "50 years"],
        a: 2,
        why: "72 ÷ 3 = 24.",
      },
      {
        q: "Compound growth means…",
        o: ["Growth on the original amount only", "Growth on growth", "A fixed yearly amount", "No growth"],
        a: 1,
        why: "Each period's returns also earn returns.",
      },
    ],
  },
  {
    id: "b16",
    subject: "Philosophy",
    title: "The ship of Theseus",
    body: [
      "The Greek writer Plutarch described a puzzle. The Athenians kept the ship of the hero Theseus for centuries, replacing each rotten plank with new timber. Eventually, no original wood was left. Is it still the same ship?",
      "Later philosophers added a twist: suppose someone collected all the old planks and rebuilt them into a ship. Which one is the real ship of Theseus?",
      "There's no agreed answer, and that's the point. The puzzle asks what identity really is: material, form, or continuity over time. It applies to you too, since most of the cells in your body are replaced over the years.",
    ],
    takeaway: "If every part of something is replaced, whether it's the same thing depends on what you think identity is.",
    qs: [
      {
        q: "Which ancient writer recorded the ship of Theseus puzzle?",
        o: ["Homer", "Plutarch", "Aristotle", "Herodotus"],
        a: 1,
        why: "It appears in Plutarch's Life of Theseus.",
      },
      {
        q: "What twist did later philosophers add?",
        o: ["The ship sank", "The old planks were rebuilt into a second ship", "The ship was painted", "Theseus returned"],
        a: 1,
        why: "Thomas Hobbes, among others, raised the rebuilt-ship version.",
      },
      {
        q: "The puzzle is mainly about…",
        o: ["Shipbuilding", "Identity over time", "Greek religion", "Naval warfare"],
        a: 1,
        why: "It asks what makes something remain the same thing.",
      },
    ],
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
        o: ["Telegraph", "Local solar noon", "Church bells in London", "Radio signals"],
        a: 1,
        why: "Each town used its own sun-based time.",
      },
      {
        q: "Who drove the switch to time zones in North America?",
        o: ["Railways", "Farmers", "The Navy", "Banks"],
        a: 0,
        why: "Railways adopted standard time on 18 November 1883.",
      },
      {
        q: "Which place became the prime meridian in 1884?",
        o: ["Paris", "Washington", "Greenwich", "Rome"],
        a: 2,
        why: "Chosen at the International Meridian Conference.",
      },
    ],
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
        o: ["Onion juice splashing", "A sulphur-based gas released when cells break", "The smell alone", "Heat from cutting"],
        a: 1,
        why: "syn-propanethial-S-oxide irritates the eyes.",
      },
      {
        q: "Why does a sharp knife help?",
        o: ["It's colder", "It crushes fewer cells", "It's cleaner", "It cuts faster than the gas"],
        a: 1,
        why: "Less cell damage means less gas.",
      },
      {
        q: "Why might onions have evolved this chemistry?",
        o: ["To attract bees", "To defend against being eaten", "To grow faster", "No reason"],
        a: 1,
        why: "It deters animals that bite into the bulb.",
      },
    ],
  },
  {
    id: "b19",
    subject: "Mind",
    title: "Sleep files your memories",
    body: [
      "Sleep isn't downtime for the brain. During deep sleep, the hippocampus replays the day's experiences and helps transfer them into longer-term storage in the cortex.",
      "Studies repeatedly find that people who sleep after learning remember more than people who stay awake for the same time. Skills practised in the day can even improve overnight.",
      "So there's a real cost to studying all night. Some of what you gain in hours you lose in consolidation. Learning something, then sleeping on it, is one of the most efficient study habits there is.",
    ],
    takeaway: "Sleep after learning helps lock it in; pulling an all-nighter undercuts what you studied.",
    qs: [
      {
        q: "Which brain region replays experiences during sleep?",
        o: ["Hippocampus", "Cerebellum", "Brainstem", "Retina"],
        a: 0,
        why: "It helps move memories into long-term storage.",
      },
      {
        q: "Compared with staying awake, sleeping after learning usually…",
        o: ["Improves memory", "Erases memory", "Has no effect", "Only helps children"],
        a: 0,
        why: "Sleep supports memory consolidation.",
      },
      {
        q: "What's the downside of an all-nighter before a test?",
        o: ["None", "You lose consolidation that sleep provides", "It's illegal", "You remember too much"],
        a: 1,
        why: "Without sleep, less of what you studied gets stored.",
      },
    ],
  },
  {
    id: "b20",
    subject: "Music",
    title: "The octave is a doubling",
    body: [
      "Play a note, then the same note one octave higher. They sound like the same note at different heights. That's because the higher one vibrates exactly twice as fast.",
      "Concert pitch sets the A above middle C at 440 vibrations per second (440 Hz). The A an octave up is 880 Hz, and the one below is 220 Hz. Each octave doubles or halves the frequency.",
      "Western music divides the octave into 12 semitones. In modern equal temperament, each semitone multiplies the frequency by the twelfth root of 2, about 1.0595, so twelve steps make exactly one doubling.",
    ],
    takeaway: "An octave doubles the frequency, and 12 equal semitone steps of ×1.0595 make that doubling.",
    qs: [
      {
        q: "If A4 is 440 Hz, what is A5?",
        o: ["450 Hz", "660 Hz", "880 Hz", "1,320 Hz"],
        a: 2,
        why: "One octave up doubles the frequency.",
      },
      {
        q: "How many semitones are in an octave?",
        o: ["7", "8", "12", "16"],
        a: 2,
        why: "The chromatic scale has 12.",
      },
      {
        q: "In equal temperament, each semitone multiplies frequency by…",
        o: ["2", "1.5", "The twelfth root of 2", "12"],
        a: 2,
        why: "About 1.0595, so 12 steps give ×2.",
      },
    ],
  },
  {
    id: "b21",
    subject: "Space",
    title: "Day on Venus, year on Venus",
    body: [
      "Venus spins extremely slowly. One full turn on its axis takes about 243 Earth days. It goes around the Sun in about 225 Earth days. So a Venusian day is longer than its year.",
      "It also spins backwards compared with most planets. On Venus, the Sun would rise in the west and set in the east, if you could see it through the thick clouds.",
      "Because of the combined spin and orbit, the time from one sunrise to the next on Venus is about 117 Earth days. Scientists still debate why it turned out this way; a giant impact or the pull of its dense atmosphere are both candidates.",
    ],
    takeaway: "Venus rotates once every 243 days, longer than its 225-day year, and it spins backwards.",
    qs: [
      {
        q: "How long does Venus take to rotate once?",
        o: ["24 hours", "About 59 days", "About 243 days", "About 365 days"],
        a: 2,
        why: "It's the slowest rotation of any planet.",
      },
      {
        q: "On Venus, the Sun rises in the…",
        o: ["East", "West", "North", "It never rises"],
        a: 1,
        why: "Venus spins in the opposite direction to most planets.",
      },
      {
        q: "A Venus day compared with its year is…",
        o: ["Shorter", "Longer", "The same", "Undefined"],
        a: 1,
        why: "243 days to rotate versus 225 to orbit.",
      },
    ],
  },
];

export const lessonById = (id: string): Lesson | undefined => LESSONS.find((l) => l.id === id);
