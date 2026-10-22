import type { Pack } from "../../lib/types";

const pack: Pack = {
  id: "abacus",
  name: "The Abacus",
  theme: "Numbers & money",
  blurb: "Probability, infinity and the maths behind everyday decisions.",
  lessons: [
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
        { q: "How many pairs can 23 people form?", o: ["23", "46", "253", "529"], a: 2, why: "23 × 22 ÷ 2 = 253 pairs." },
        {
          q: "With 70 people, the chance of a shared birthday is about…",
          o: ["20%", "50%", "80%", "99.9%"],
          a: 3,
          why: "It climbs above 99.9% at 70 people.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Birthday_problem"],
      young: {
        title: "The birthday surprise",
        body: [
          "How many people do you need in a room for a good chance that two of them share a birthday? Lots of people guess about 180.",
          "The real answer is just 23. That's because any two people can match, not only you and someone else. 23 people can make 253 different pairs.",
          "With so many pairs, a match becomes likely. With 70 people, it's almost certain.",
        ],
        takeaway: "With just 23 people, there's about an even chance that two share a birthday.",
        qs: [
          {
            q: "How many people give about an even chance of a shared birthday?",
            o: ["23", "100", "180"],
            a: 0,
            why: "Just 23 people is enough for about a 50% chance.",
          },
          {
            q: "Why are so few people enough?",
            o: ["Most birthdays are in summer", "People forget their birthdays", "There are lots of possible pairs"],
            a: 2,
            why: "23 people make 253 pairs, and any pair can match.",
          },
          {
            q: "With 70 people, a shared birthday is…",
            o: ["Almost certain", "Impossible", "Very unlikely"],
            a: 0,
            why: "With 70 people the chance is over 99.9%.",
          },
        ],
      },
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
            "Every alternative added together",
            "The value of the best alternative you give up",
            "Tax on a purchase",
          ],
          a: 2,
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
          o: ["Is this good?", "Is this cheap?", "Did others choose it?", "Is this better than my next-best option?"],
          a: 3,
          why: "Choices are judged against what else you could do.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Opportunity_cost"],
      young: {
        title: "The hidden cost of choosing",
        body: [
          "Imagine you have one free afternoon. You can go to the park or watch a film, but not both.",
          "If you pick the park, you give up the film. The thing you give up is called the opportunity cost.",
          "Every choice has one, because time and money run out. A good question to ask is: is this better than the next best thing I could do?",
        ],
        takeaway: "When you choose something, the best thing you didn't choose is its hidden cost.",
        qs: [
          {
            q: "Opportunity cost is…",
            o: ["The best thing you gave up", "The price on the tag", "How long a shop is open"],
            a: 0,
            why: "It's the next best choice you missed out on.",
          },
          {
            q: "You play football on Saturday instead of going to a friend's party. What's the opportunity cost?",
            o: ["The football", "The party", "Nothing"],
            a: 1,
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
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/0.999..."],
      young: {
        title: "A number with two names",
        body: [
          "Here's a strange one: 0.999…, with nines that never stop, is exactly the same number as 1.",
          "Try this. One third is 0.333…, with threes forever. Three thirds make one whole. And three lots of 0.333… make 0.999…. So 0.999… must equal 1.",
          "It's like how ½ and 0.5 are two ways to write the same amount. Some numbers have two names.",
        ],
        takeaway: "0.999…, with nines forever, is another way to write 1.",
        qs: [
          {
            q: "Is 0.999… (nines forever) equal to 1?",
            o: ["No, it's a bit less", "Yes, exactly", "Only sometimes"],
            a: 1,
            why: "They are the same number, written two ways.",
          },
          {
            q: "Three lots of 0.333… make…",
            o: ["0.999…, which is 1", "3.333…", "0.3"],
            a: 0,
            why: "Three thirds make one whole.",
          },
          {
            q: "½ and 0.5 are…",
            o: ["Both bigger than 1", "Different amounts", "Two names for the same amount"],
            a: 2,
            why: "Like 0.999… and 1, they're the same number.",
          },
        ],
      },
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
          o: ["Growth on the original amount only", "A fixed yearly amount", "Growth on growth", "No growth"],
          a: 2,
          why: "Each period's returns also earn returns.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Rule_of_72"],
      young: {
        title: "How fast money doubles",
        body: [
          "Money saved in a bank can earn a little extra each year, called interest. Then the extra earns extra too. This is called compound growth.",
          "There's a shortcut to see how long it takes to double: divide 72 by the yearly growth. If your money grows by 6% a year, 72 ÷ 6 = 12. It doubles in about 12 years.",
          "At 8% a year, it's 72 ÷ 8 = 9 years. The faster it grows, the sooner it doubles.",
        ],
        takeaway: "To find how many years it takes money to double, divide 72 by the yearly growth.",
        qs: [
          {
            q: "At 6% a year, about how long until money doubles?",
            o: ["6 years", "12 years", "72 years"],
            a: 1,
            why: "72 ÷ 6 = 12.",
          },
          {
            q: "Compound growth means…",
            o: ["Money disappears", "Money stays the same", "The extra money earns extra too"],
            a: 2,
            why: "You earn interest on your interest.",
          },
          {
            q: "Which doubles faster?",
            o: ["Growing 9% a year", "They're the same", "Growing 2% a year"],
            a: 0,
            why: "72 ÷ 9 = 8 years, but 72 ÷ 2 = 36 years.",
          },
        ],
      },
    },
    {
      id: "b29",
      subject: "Math",
      title: "Why a circle has 360 degrees",
      body: [
        "Nobody knows for certain why we split a circle into 360 degrees, but the best explanations point to ancient Mesopotamia. Babylonian astronomers counted in base 60, which is also why an hour has 60 minutes and a minute 60 seconds.",
        "360 is also close to the number of days in a year, so the Sun moves roughly one degree a day against the background stars. That made it a natural unit for tracking the sky.",
        "Whatever its origin, 360 is an unusually handy number. It can be divided evenly by 24 different whole numbers, including 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20 and 30. That makes halves, thirds, quarters, fifths and sixths of a circle all whole numbers of degrees. Mathematicians often prefer radians, which are based on the circle's radius, but 360 has stuck for everyday use.",
      ],
      takeaway:
        "360 degrees probably comes from Babylonian base-60 counting and the roughly 360-day year, and it divides very neatly.",
      qs: [
        {
          q: "Which ancient culture is linked to the 360-degree circle?",
          o: ["Viking", "Roman", "Aztec", "Babylonian"],
          a: 3,
          why: "Babylonian astronomers counted in base 60.",
        },
        {
          q: "Why is 360 a handy number?",
          o: ["It divides evenly by many numbers", "It's prime", "It's a square number", "It's very large"],
          a: 0,
          why: "It has 24 divisors, so many fractions of a circle are whole degrees.",
        },
        {
          q: "Base 60 is also why we have…",
          o: ["12 months", "7-day weeks", "60 minutes in an hour", "100 centimetres in a metre"],
          a: 2,
          why: "Minutes and seconds come from the same Babylonian system.",
        },
      ],
      daily: [0, 2],
      sources: ["https://en.wikipedia.org/wiki/Degree_(angle)", "https://en.wikipedia.org/wiki/Sexagesimal"],
      young: {
        body: [
          "A full turn is 360 degrees. But why 360, and not 100?",
          "It probably goes back to people in ancient Babylon, over 4,000 years ago. They counted in sixties. That's also why an hour has 60 minutes.",
          "360 is also close to the number of days in a year. And it splits neatly into halves, thirds, quarters and lots of other parts. That makes it very handy.",
        ],
        takeaway: "A full turn is 360 degrees, a number that probably comes from ancient Babylon.",
        qs: [
          {
            q: "How many degrees are in a full turn?",
            o: ["100", "360", "1,000"],
            a: 1,
            why: "A half turn is 180 and a quarter turn is 90.",
          },
          {
            q: "Counting in sixties is also why an hour has…",
            o: ["100 minutes", "24 seconds", "60 minutes"],
            a: 2,
            why: "It comes from the same old way of counting.",
          },
          {
            q: "Why is 360 handy?",
            o: ["It splits neatly into many parts", "It's very small", "It's an odd number"],
            a: 0,
            why: "Halves, thirds and quarters are all whole numbers.",
          },
        ],
      },
    },
    {
      id: "b30",
      subject: "Math",
      title: "The Monty Hall problem",
      body: [
        "You're on a game show facing three doors. Behind one is a car; behind the others, goats. You pick door 1. The host, who knows where the car is, opens door 3 to show a goat, and offers you the chance to switch to door 2. Should you?",
        "Yes. Switching wins two times in three. Your first pick had a 1 in 3 chance of being the car, and that doesn't change. The other 2 in 3 was spread across the two remaining doors, and the host has just shown you which of those two to take.",
        "When Marilyn vos Savant gave this answer in Parade magazine in 1990, thousands of readers wrote in to say she was wrong, many of them with PhDs. She was right. It helps to imagine 100 doors: you pick one, the host opens 98 goats, and suddenly switching looks obvious.",
      ],
      takeaway: "In the Monty Hall problem, switching doors wins two times out of three.",
      qs: [
        {
          q: "Should you switch doors?",
          o: ["No, it's 50–50", "Yes, switching wins 2 in 3", "It doesn't matter", "Only if you picked door 1"],
          a: 1,
          why: "Your first pick stays at 1 in 3.",
        },
        {
          q: "Why does the host's choice matter?",
          o: [
            "He picks at random",
            "He knows where the car is and always shows a goat",
            "He's trying to trick you",
            "It doesn't",
          ],
          a: 1,
          why: "His knowledge funnels the 2-in-3 chance onto one door.",
        },
        {
          q: "How did many readers react to vos Savant's answer?",
          o: ["They agreed", "They ignored it", "They sued", "They wrote in to say she was wrong"],
          a: 3,
          why: "Thousands wrote letters, but she was right.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Monty_Hall_problem"],
      young: {
        title: "The three doors puzzle",
        body: [
          "On a game show, there are three doors. A prize is behind one of them. You pick a door.",
          "The host knows where the prize is. He opens one of the other doors to show it's empty. Then he asks: do you want to swap to the last door?",
          "You should swap! Swapping wins 2 times out of 3. Your first pick only had a 1 in 3 chance, and the host helped by showing you an empty door.",
        ],
        takeaway: "In the three doors puzzle, swapping wins 2 times out of 3.",
        qs: [
          {
            q: "In the puzzle, should you swap doors?",
            o: ["No", "Yes", "It doesn't matter"],
            a: 1,
            why: "Swapping wins 2 times out of 3.",
          },
          {
            q: "What chance did your first pick have?",
            o: ["1 in 3", "1 in 2", "3 in 3"],
            a: 0,
            why: "There were three doors and one prize.",
          },
          {
            q: "What does the host open?",
            o: ["The prize door", "Your door", "An empty door"],
            a: 2,
            why: "He knows where the prize is, so he avoids it.",
          },
        ],
      },
    },
    {
      id: "b31",
      subject: "Economics",
      title: "Why prices end in .99",
      body: [
        "A price of £4.99 is only a penny less than £5, but it often sells noticeably better. This is called charm pricing, and the main explanation is the left-digit effect.",
        "We read numbers from left to right and anchor on the first digit. So £4.99 gets filed as 'four-something' before we reach the pennies. In a 2005 study, Manoj Thomas and Vicki Morwitz found people judged prices like £2.99 as meaningfully cheaper than £3.00, but only when the leftmost digit changed: £4.59 versus £4.60 made little difference.",
        "A popular story says .99 prices were invented to force cashiers to open the till to give change, which stopped them pocketing the money. It's plausible but hard to prove. Shops selling luxury goods often avoid .99 on purpose, because round prices signal quality rather than a bargain.",
      ],
      takeaway: "Prices ending in .99 work because we anchor on the leftmost digit.",
      qs: [
        {
          q: "What explains most of the .99 effect?",
          o: ["Coin shortages", "Sales tax", "The left-digit effect", "Tradition only"],
          a: 2,
          why: "We anchor on the first digit we read.",
        },
        {
          q: "When did the effect show up in the 2005 study?",
          o: ["Only when the leftmost digit changed", "Always", "Only for food", "Never"],
          a: 0,
          why: "£4.59 versus £4.60 barely mattered.",
        },
        {
          q: "Why do luxury shops often use round prices?",
          o: ["They're easier to add", "Round prices signal quality", "Tax rules", "Cashiers prefer them"],
          a: 1,
          why: ".99 suggests a bargain, which luxury brands avoid.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Psychological_pricing"],
      young: {
        body: [
          "Shops often price things at £4.99 instead of £5. It's only one penny less. So why do they do it?",
          "We read numbers from left to right. Our brain sees the 4 first and thinks 'about four pounds', even though it's really almost five.",
          "This trick is called charm pricing. Next time you're in a shop, see how many prices end in 99.",
        ],
        takeaway: "Prices like £4.99 feel cheaper because we notice the first number most.",
        qs: [
          {
            q: "How much less is £4.99 than £5?",
            o: ["One pound", "One penny", "Ten pence"],
            a: 1,
            why: "Just 1p, but it feels like more.",
          },
          {
            q: "Which part of a price do we notice most?",
            o: ["The first number", "The last number", "The pound sign"],
            a: 0,
            why: "We read left to right and focus on the first digit.",
          },
          {
            q: "What is this trick called?",
            o: ["Penny saving", "Price tagging", "Charm pricing"],
            a: 2,
            why: "It makes prices feel more charming, or cheaper.",
          },
        ],
      },
    },
    {
      id: "b32",
      subject: "Math",
      title: "Benford's law",
      body: [
        "Take a big set of real-world numbers, like the populations of towns, river lengths or company accounts, and look at the first digit of each. You might expect each digit from 1 to 9 to appear about equally. Instead, 1 comes first about 30% of the time, and 9 less than 5%.",
        "The astronomer Simon Newcomb spotted it in 1881, when he noticed that the early pages of books of logarithm tables were more worn than the later ones. The physicist Frank Benford tested it on thousands of data sets in 1938, and it now carries his name.",
        "It happens with numbers that span several orders of magnitude and grow by percentages: to get from a leading 1 to a leading 2, a value has to double, but from 9 to 10 it only grows about 11%. Auditors use the pattern to spot invented numbers, because people making figures up tend to spread their digits too evenly.",
      ],
      takeaway: "In many real data sets, about 30% of numbers start with 1, and fraud investigators use this.",
      qs: [
        {
          q: "How often does 1 lead in data that follows Benford's law?",
          o: ["About 11%", "About 30%", "About 50%", "About 90%"],
          a: 1,
          why: "9 leads less than 5% of the time.",
        },
        {
          q: "What tipped off Simon Newcomb?",
          o: ["Worn early pages in logarithm books", "Census data", "Stock prices", "Star charts"],
          a: 0,
          why: "People looked up numbers starting with 1 more often.",
        },
        {
          q: "Who uses Benford's law at work?",
          o: ["Pilots", "Chefs", "Auditors looking for fraud", "Gardeners"],
          a: 2,
          why: "Made-up numbers tend to have evenly spread first digits.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Benford%27s_law"],
      young: {
        title: "The number 1 shows up first",
        body: [
          "Look at lots of real numbers, like how many people live in each town. Write down the first digit of each one.",
          "You might think each digit from 1 to 9 would come up the same amount. But 1 comes first about 3 times in 10. 9 comes first less than once in 20.",
          "This pattern is called Benford's law. People who check for cheating in money records use it, because made-up numbers often don't follow the pattern.",
        ],
        takeaway: "In lots of real numbers, the first digit is 1 more often than any other.",
        qs: [
          {
            q: "Which first digit shows up most in real numbers?",
            o: ["9", "5", "1"],
            a: 2,
            why: "It leads about 3 times in 10.",
          },
          {
            q: "What is this pattern called?",
            o: ["Benford's law", "The number rule", "Newton's law"],
            a: 0,
            why: "It's named after the scientist Frank Benford.",
          },
          {
            q: "Who uses this pattern?",
            o: ["Bakers", "People checking for cheating in money records", "Football referees"],
            a: 1,
            why: "Made-up numbers often don't fit the pattern.",
          },
        ],
      },
    },
  ],
};

export default pack;
