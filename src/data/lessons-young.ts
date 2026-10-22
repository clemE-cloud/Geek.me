import type { LessonVersion } from "../lib/types";

/*
 * Simpler versions of each lesson for younger learners (about 6–12).
 * Same id and the same number of questions as the standard lesson, so progress
 * and review carry over if someone switches level.
 *
 * Writing guide: short sentences, everyday words, one idea per paragraph,
 * 3 options per question. Leave out formulas and dates that don't help.
 */
export const YOUNG: Record<string, LessonVersion> = {
  b01: {
    body: [
      "Sunlight looks white, but it is really all the colours mixed together.",
      "When sunlight hits the air, the blue part bounces around the most. It gets scattered all over the sky. So wherever you look up, blue light is coming towards your eyes.",
      "At sunset, the light has to pass through much more air to reach you. Most of the blue bounces away on the trip, so the reds and oranges are left.",
    ],
    takeaway: "Air bounces blue light around the most, so the sky looks blue.",
    qs: [
      { q: "Sunlight is really…", o: ["Only yellow", "All the colours mixed", "Only blue"], a: 1, why: "White sunlight is a mix of every colour." },
      { q: "Which colour does air bounce around the most?", o: ["Blue", "Red", "Green"], a: 0, why: "Blue light scatters the most, so it fills the sky." },
      {
        q: "Why are sunsets red and orange?",
        o: ["The Sun gets cooler", "Clouds paint the sky", "The light passes through more air and loses its blue"],
        a: 2,
        why: "On the long trip through the air, most of the blue light bounces away.",
      },
    ],
  },
  b02: {
    title: "Little and often",
    body: [
      "Over 100 years ago, a scientist called Hermann Ebbinghaus tested his own memory. He found that we forget new things quickly at first.",
      "He also found a fix. If you practise again just as you start to forget, the memory comes back stronger. Each time, it lasts longer.",
      "So a little practice on different days works better than one long go. That's why the Review tab brings questions back after a few days.",
    ],
    takeaway: "Practising a little on different days helps you remember for longer.",
    qs: [
      {
        q: "If you never practise, what happens to something new you learned?",
        o: ["It gets stronger", "You forget it quickly at first", "You remember it forever"],
        a: 1,
        why: "Memory fades fastest just after we learn something.",
      },
      {
        q: "Which works better?",
        o: ["A little practice on different days", "One very long practice", "No practice"],
        a: 0,
        why: "Spreading practice out makes memories last longer.",
      },
      {
        q: "Who tested his own memory to find this out?",
        o: ["Isaac Newton", "Albert Einstein", "Hermann Ebbinghaus"],
        a: 2,
        why: "Ebbinghaus studied memory in the 1880s.",
      },
    ],
  },
  b03: {
    body: [
      "The word robot is only about 100 years old. It first appeared in 1920, in a play by a Czech writer called Karel Čapek.",
      "His brother Josef thought of the word. It comes from the Czech word robota, which means hard work that you are forced to do.",
      "The play was a big hit, and soon people all over the world were saying robot.",
    ],
    takeaway: "‘Robot’ comes from a Czech word for forced work, and it was made up for a play in 1920.",
    qs: [
      { q: "Where did the word robot first appear?", o: ["In a play", "In a cartoon", "In a science book"], a: 0, why: "It was in Karel Čapek's 1920 play R.U.R." },
      { q: "Who thought of the word?", o: ["A robot", "Karel Čapek's brother Josef", "A teacher"], a: 1, why: "Čapek said his brother Josef suggested it." },
      { q: "The Czech word robota means…", o: ["Metal friend", "Fast machine", "Forced work"], a: 2, why: "Robota means work that people were made to do." },
    ],
  },
  b04: {
    title: "The birthday surprise",
    body: [
      "How many people do you need in a room for a good chance that two of them share a birthday? Lots of people guess about 180.",
      "The real answer is just 23. That's because any two people can match, not only you and someone else. 23 people can make 253 different pairs.",
      "With so many pairs, a match becomes likely. With 70 people, it's almost certain.",
    ],
    takeaway: "With just 23 people, there's about an even chance that two share a birthday.",
    qs: [
      { q: "How many people give about an even chance of a shared birthday?", o: ["23", "100", "180"], a: 0, why: "Just 23 people is enough for about a 50% chance." },
      {
        q: "Why are so few people enough?",
        o: ["Most birthdays are in summer", "There are lots of possible pairs", "People forget their birthdays"],
        a: 1,
        why: "23 people make 253 pairs, and any pair can match.",
      },
      { q: "With 70 people, a shared birthday is…", o: ["Very unlikely", "Impossible", "Almost certain"], a: 2, why: "With 70 people the chance is over 99.9%." },
    ],
  },
  b05: {
    body: [
      "An octopus has three hearts. Two pump blood through its gills, and one pumps it around the rest of its body.",
      "Its blood is blue. Our blood uses iron to carry oxygen around, but octopus blood uses copper, and that makes it blue.",
      "Most of an octopus's nerve cells are in its arms. Each arm can feel, taste and decide some things by itself.",
    ],
    takeaway: "An octopus has three hearts, blue blood, and arms that can make some decisions on their own.",
    qs: [
      { q: "How many hearts does an octopus have?", o: ["One", "Three", "Eight"], a: 1, why: "Two for the gills and one for the body." },
      { q: "Why is octopus blood blue?", o: ["It uses copper", "It drinks seawater", "It eats blue fish"], a: 0, why: "Copper in its blood makes it blue." },
      { q: "Where are most of an octopus's nerve cells?", o: ["In its head", "In its eyes", "In its arms"], a: 2, why: "That's why each arm can act a bit on its own." },
    ],
  },
  b06: {
    title: "The hidden cost of choosing",
    body: [
      "Imagine you have one free afternoon. You can go to the park or watch a film, but not both.",
      "If you pick the park, you give up the film. The thing you give up is called the opportunity cost.",
      "Every choice has one, because time and money run out. A good question to ask is: is this better than the next best thing I could do?",
    ],
    takeaway: "When you choose something, the best thing you didn't choose is its hidden cost.",
    qs: [
      { q: "Opportunity cost is…", o: ["The price on the tag", "The best thing you gave up", "How long a shop is open"], a: 1, why: "It's the next best choice you missed out on." },
      {
        q: "You play football on Saturday instead of going to a friend's party. What's the opportunity cost?",
        o: ["The party", "The football", "Nothing"],
        a: 0,
        why: "The party is the next best thing you gave up.",
      },
      {
        q: "Why does every choice have an opportunity cost?",
        o: ["Shops charge extra", "Choices are always wrong", "Time and money run out"],
        a: 2,
        why: "You can't do everything, so choosing one thing means not doing another.",
      },
    ],
  },
  b07: {
    body: [
      "About 600 years ago in Florence, Italy, an architect called Filippo Brunelleschi painted a building so that it looked amazingly real.",
      "He had worked out a trick called perspective. Lines going away from you seem to meet at one point far away, called the vanishing point. Things also look smaller the further away they are.",
      "Soon painters everywhere used the trick to make flat pictures look deep. Try it: draw a road that gets narrower and narrower until it meets at one dot.",
    ],
    takeaway: "In a perspective drawing, lines going away from you meet at a vanishing point.",
    qs: [
      { q: "Who showed off the perspective trick in Florence?", o: ["Pablo Picasso", "Filippo Brunelleschi", "Vincent van Gogh"], a: 1, why: "Brunelleschi showed it around the year 1415." },
      { q: "In perspective, lines going away from you…", o: ["Meet at a vanishing point", "Get wider", "Turn into circles"], a: 0, why: "They seem to meet at one point far away." },
      { q: "In a perspective drawing, things far away look…", o: ["Bigger", "Brighter", "Smaller"], a: 2, why: "The further away something is, the smaller you draw it." },
    ],
  },
  b08: {
    body: [
      "Most things get heavier for their size when they freeze, so the solid sinks. Water is different: ice floats.",
      "When water freezes, its tiny parts lock together in a pattern with lots of space in it. That makes ice lighter for its size than water.",
      "This helps fish. Ponds freeze at the top first, and the ice works like a blanket. The water underneath stays liquid, so fish can live there all winter.",
    ],
    takeaway: "Ice has more space inside than water, so it floats, and that keeps ponds liquid underneath.",
    qs: [
      { q: "What does ice do in water?", o: ["Sinks", "Floats", "Disappears"], a: 1, why: "Ice is lighter for its size than water." },
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
  b09: {
    body: [
      "The Great Pyramid in Egypt was built about 4,500 years ago.",
      "Cleopatra, a famous queen of Egypt, lived about 2,000 years ago. That's around 2,500 years after the pyramid was built.",
      "People first walked on the Moon in 1969. So Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid. To her, the pyramids were already ancient.",
    ],
    takeaway: "Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid.",
    qs: [
      { q: "About how long ago was the Great Pyramid built?", o: ["450 years ago", "4,500 years ago", "45,000 years ago"], a: 1, why: "It was built around 2560 BC." },
      { q: "To Cleopatra, the pyramids were…", o: ["Brand new", "Still being built", "Already very old"], a: 2, why: "They were about 2,500 years old in her time." },
      { q: "Cleopatra lived closer in time to…", o: ["The Moon landing", "The building of the Great Pyramid", "The dinosaurs"], a: 0, why: "About 2,000 years to the Moon landing, about 2,500 to the pyramid." },
    ],
  },
  b10: {
    title: "Why your own mistakes are hard to spot",
    body: [
      "In 1999, two scientists gave people some tests. Then they asked everyone to guess how well they had done.",
      "Many of the people who did worst thought they had done well. To spot a mistake, you need the same skills it takes to avoid it. So while you're still learning something, your mistakes can be hard to see.",
      "That's why it helps to ask someone else to check your work, even when you feel sure.",
    ],
    takeaway: "Feeling sure doesn't always mean you're right, so it helps to have someone check.",
    qs: [
      {
        q: "In the study, who often guessed too high about their own score?",
        o: ["Many of the lowest scorers", "Only the top scorers", "Nobody"],
        a: 0,
        why: "People who did worst often thought they'd done well.",
      },
      {
        q: "Why can your own mistakes be hard to spot?",
        o: ["Mistakes are invisible", "Spotting them needs the skills you're still learning", "Nobody ever makes mistakes"],
        a: 1,
        why: "You need the same skills to do it and to check it.",
      },
      { q: "What's a good habit, then?", o: ["Never ask for help", "Answer faster", "Ask someone to check your work"], a: 2, why: "Someone else can see what you can't." },
    ],
  },
  b11: {
    body: [
      "Inside your cells are tiny parts called mitochondria. They turn food into energy your body can use.",
      "Mitochondria have their own DNA, separate from the rest of the cell. Scientists think that's because, a very long time ago, they were tiny bacteria living on their own. Another cell swallowed them, and they stayed.",
      "You get your mitochondria from your mum.",
    ],
    takeaway: "Mitochondria make energy in your cells, and long ago they were tiny bacteria.",
    qs: [
      { q: "What do mitochondria do?", o: ["Make energy from food", "Help you see", "Grow your hair"], a: 0, why: "They're the cell's power plants." },
      { q: "Long ago, mitochondria were probably…", o: ["Plants", "Tiny bacteria", "Bits of bone"], a: 1, why: "Another cell swallowed them and they stayed." },
      { q: "Who do you get your mitochondria from?", o: ["Your dad", "Both parents equally", "Your mum"], a: 2, why: "They come from the egg cell." },
    ],
  },
  b12: {
    body: [
      "Long ago, English words sounded different. ‘Bite’ sounded like ‘beet’, and ‘house’ sounded like ‘hoose’.",
      "Around the same time, printing arrived in England. Printers started writing words the same way every time, while the way people said them was still changing.",
      "So many spellings stayed old-fashioned. In ‘knight’, people used to say the k out loud. Odd spellings are clues to how people talked long ago.",
    ],
    takeaway: "English spelling is odd because spellings got fixed while the sounds kept changing.",
    qs: [
      { q: "Long ago, ‘bite’ sounded like…", o: ["‘beet’", "‘boat’", "‘bat’"], a: 0, why: "The long vowel sounds in English changed over time." },
      { q: "What helped fix spellings in place?", o: ["Phones", "Printing", "Television"], a: 1, why: "Printers wrote words the same way every time." },
      { q: "Why is there a k in ‘knight’?", o: ["It looks nice", "It's a spelling mistake", "People used to say it"], a: 2, why: "The k used to be spoken." },
    ],
  },
  b13: {
    title: "A number with two names",
    body: [
      "Here's a strange one: 0.999…, with nines that never stop, is exactly the same number as 1.",
      "Try this. One third is 0.333…, with threes forever. Three thirds make one whole. And three lots of 0.333… make 0.999…. So 0.999… must equal 1.",
      "It's like how ½ and 0.5 are two ways to write the same amount. Some numbers have two names.",
    ],
    takeaway: "0.999…, with nines forever, is another way to write 1.",
    qs: [
      { q: "Is 0.999… (nines forever) equal to 1?", o: ["No, it's a bit less", "Yes, exactly", "Only sometimes"], a: 1, why: "They are the same number, written two ways." },
      { q: "Three lots of 0.333… make…", o: ["0.3", "3.333…", "0.999…, which is 1"], a: 2, why: "Three thirds make one whole." },
      { q: "½ and 0.5 are…", o: ["Two names for the same amount", "Different amounts", "Both bigger than 1"], a: 0, why: "Like 0.999… and 1, they're the same number." },
    ],
  },
  b14: {
    body: [
      "Light is the fastest thing there is, but it still takes time to travel.",
      "Sunlight takes about 8 minutes to reach Earth. So the Sun you see is the Sun as it was 8 minutes ago. (Never look straight at it.)",
      "Light from the nearest star after the Sun takes over 4 years to get here. Looking at the stars means looking back in time.",
    ],
    takeaway: "Light takes time to travel, so you see stars as they were in the past.",
    qs: [
      { q: "How long does sunlight take to reach Earth?", o: ["About 8 seconds", "About 8 minutes", "About 8 days"], a: 1, why: "It travels about 150 million km to get here." },
      { q: "When you look at a star, you see it…", o: ["As it was in the past", "As it will be tomorrow", "Exactly as it is now"], a: 0, why: "Its light left the star long ago." },
      { q: "Light from the nearest star after the Sun takes…", o: ["1 minute", "1,000 years", "Over 4 years"], a: 2, why: "That star, Proxima Centauri, is over 4 light-years away." },
    ],
  },
  b15: {
    title: "How fast money doubles",
    body: [
      "Money saved in a bank can earn a little extra each year, called interest. Then the extra earns extra too. This is called compound growth.",
      "There's a shortcut to see how long it takes to double: divide 72 by the yearly growth. If your money grows by 6% a year, 72 ÷ 6 = 12. It doubles in about 12 years.",
      "At 8% a year, it's 72 ÷ 8 = 9 years. The faster it grows, the sooner it doubles.",
    ],
    takeaway: "To find how many years it takes money to double, divide 72 by the yearly growth.",
    qs: [
      { q: "At 6% a year, about how long until money doubles?", o: ["6 years", "12 years", "72 years"], a: 1, why: "72 ÷ 6 = 12." },
      { q: "Compound growth means…", o: ["The extra money earns extra too", "Money stays the same", "Money disappears"], a: 0, why: "You earn interest on your interest." },
      { q: "Which doubles faster?", o: ["Growing 2% a year", "They're the same", "Growing 9% a year"], a: 2, why: "72 ÷ 9 = 8 years, but 72 ÷ 2 = 36 years." },
    ],
  },
  b16: {
    body: [
      "A Greek hero called Theseus had a famous ship. The people of Athens kept it for hundreds of years.",
      "Whenever a plank rotted, they replaced it with a new one. In the end, not one original plank was left. Is it still the same ship?",
      "Now imagine someone kept all the old planks and built them into a ship. Which one is the real ship of Theseus? People still argue about it. What do you think?",
    ],
    takeaway: "If every part of something gets replaced, it's hard to say whether it's still the same thing.",
    qs: [
      {
        q: "What happened to the ship's planks?",
        o: ["They were painted gold", "They were replaced one by one", "Nobody touched them"],
        a: 1,
        why: "Each rotten plank was swapped for a new one.",
      },
      { q: "What is the puzzle about?", o: ["Whether it's still the same ship", "How fast ships go", "Who built the first boat"], a: 0, why: "It's about what makes something the same thing." },
      { q: "Do people agree on the answer?", o: ["Yes, everyone agrees", "Nobody has thought about it", "No, they still argue"], a: 2, why: "There's no agreed answer, so your view counts too." },
    ],
  },
  b17: {
    body: [
      "Long ago, every town set its clocks by the Sun. When the Sun was highest in the sky, it was noon. So clocks in nearby towns were a few minutes apart.",
      "Trains made this a big problem. Timetables were confusing, and that could be dangerous.",
      "So in 1883, railways in the USA and Canada agreed to use a few big time zones instead. A year later, Greenwich in England became the starting line for the world's time.",
    ],
    takeaway: "Time zones were invented because trains needed clear timetables.",
    qs: [
      { q: "Before time zones, towns set their clocks by…", o: ["Phones", "The Sun", "The radio"], a: 1, why: "Noon was when the Sun was highest." },
      { q: "What made time zones necessary?", o: ["Trains", "Bicycles", "Cars"], a: 0, why: "Railway timetables needed everyone to agree on the time." },
      { q: "Which place became the starting line for world time?", o: ["Paris", "New York", "Greenwich"], a: 2, why: "Greenwich, in London, was chosen in 1884." },
    ],
  },
  b18: {
    body: [
      "A whole onion doesn't make you cry. The tears start when you cut it.",
      "Cutting breaks open tiny cells in the onion. Chemicals inside mix and make a gas. When the gas reaches your eyes, they make tears to wash it away. Onions probably do this to stop animals eating them.",
      "A sharp knife breaks fewer cells, so there's less gas. Chilling the onion first helps too. (Ask a grown-up before using a knife.)",
    ],
    takeaway: "Cutting an onion releases a gas that makes your eyes water.",
    qs: [
      { q: "When does an onion make you cry?", o: ["When you cut it", "When you look at it", "When it's in the fridge"], a: 0, why: "Cutting breaks its cells and releases the gas." },
      { q: "Why do your eyes make tears?", o: ["Because onions are sad", "To wash the gas away", "To help you see"], a: 1, why: "Tears flush the gas out of your eyes." },
      { q: "What helps?", o: ["A blunt knife", "Cutting very slowly", "A sharp knife and a cold onion"], a: 2, why: "Fewer broken cells and a slower reaction mean less gas." },
    ],
  },
  b19: {
    body: [
      "While you sleep, your brain is busy. It goes over things that happened in the day and stores the important ones as long-lasting memories.",
      "In tests, people who sleep after learning remember more than people who stay awake. Sometimes skills even get better overnight.",
      "So a good night's sleep before a test helps more than staying up late to study.",
    ],
    takeaway: "Sleep helps your brain store what you learned.",
    qs: [
      { q: "What does your brain do while you sleep?", o: ["Stores memories from the day", "Switches off completely", "Forgets everything"], a: 0, why: "It replays the day and files away what matters." },
      {
        q: "Who usually remembers more?",
        o: ["People who stay awake all night", "People who sleep after learning", "They remember the same"],
        a: 1,
        why: "Sleep helps lock in what you learned.",
      },
      { q: "Before a test, what helps most?", o: ["Staying up very late", "Skipping breakfast", "A good night's sleep"], a: 2, why: "Your brain stores what you studied while you sleep." },
    ],
  },
  b20: {
    body: [
      "Sing a low note, then the same note higher up. They sound like the same note, only higher. That gap is called an octave.",
      "Sound is made of vibrations. The higher note vibrates exactly twice as fast as the lower one.",
      "The note A that orchestras tune to vibrates 440 times every second. The A one octave higher vibrates 880 times a second.",
    ],
    takeaway: "A note one octave higher vibrates twice as fast.",
    qs: [
      { q: "The note an octave higher vibrates…", o: ["Twice as fast", "Half as fast", "At the same speed"], a: 0, why: "Going up an octave doubles the speed." },
      { q: "If an A vibrates 440 times a second, the A an octave up vibrates…", o: ["220 times", "880 times", "4,400 times"], a: 1, why: "440 × 2 = 880." },
      { q: "Sound is made of…", o: ["Light", "Water", "Vibrations"], a: 2, why: "Sound is things vibrating, and the air carrying it to your ears." },
    ],
  },
  b21: {
    body: [
      "Venus spins very slowly. One full spin takes 243 Earth days.",
      "Venus goes all the way around the Sun in 225 Earth days. So one spin of Venus takes longer than one trip around the Sun.",
      "Venus also spins the opposite way to Earth. If you could see through its thick clouds, the Sun would rise in the west.",
    ],
    takeaway: "On Venus, one spin takes longer than one trip around the Sun.",
    qs: [
      { q: "How long does Venus take to spin once?", o: ["1 Earth day", "243 Earth days", "10 Earth years"], a: 1, why: "It's the slowest-spinning planet." },
      { q: "Which takes longer on Venus?", o: ["One spin", "One trip around the Sun", "They take the same time"], a: 0, why: "243 days to spin, 225 days to go around the Sun." },
      { q: "On Venus, the Sun would rise in the…", o: ["East", "North", "West"], a: 2, why: "Venus spins the opposite way to Earth." },
    ],
  },
};
