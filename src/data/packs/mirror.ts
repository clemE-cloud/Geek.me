import type { Pack } from "../../lib/types";

const pack: Pack = {
  id: "mirror",
  name: "The Mirror",
  theme: "Inside your head",
  blurb: "How memory, attention and judgement really work.",
  lessons: [
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
          o: ["Sigmund Freud", "B. F. Skinner", "Hermann Ebbinghaus", "Jean Piaget"],
          a: 2,
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
          o: [
            "Just as you start to forget",
            "Immediately after learning",
            "Only once, a year later",
            "Never; rereading is enough",
          ],
          a: 0,
          why: "Retrieving a fading memory strengthens it the most.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Spacing_effect", "https://en.wikipedia.org/wiki/Forgetting_curve"],
      young: {
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
            o: ["It gets stronger", "You remember it forever", "You forget it quickly at first"],
            a: 2,
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
            o: ["Isaac Newton", "Hermann Ebbinghaus", "Albert Einstein"],
            a: 1,
            why: "Ebbinghaus studied memory in the 1880s.",
          },
        ],
      },
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
          o: ["Top scorers", "Nobody", "Middle scorers", "Lowest scorers"],
          a: 3,
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
            "Experts overestimate most",
            "It only affects children",
            "It was never tested",
            "The effect is partly a statistical artifact",
          ],
          a: 3,
          why: "Regression toward the middle can produce part of the pattern.",
        },
      ],
      sources: ["https://en.wikipedia.org/wiki/Dunning–Kruger_effect"],
      young: {
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
            o: ["Mistakes are invisible", "Nobody ever makes mistakes", "Spotting them needs the skills you're still learning"],
            a: 2,
            why: "You need the same skills to do it and to check it.",
          },
          {
            q: "What's a good habit, then?",
            o: ["Never ask for help", "Ask someone to check your work", "Answer faster"],
            a: 1,
            why: "Someone else can see what you can't.",
          },
        ],
      },
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
          o: ["Has no effect", "Erases memory", "Improves memory", "Only helps children"],
          a: 2,
          why: "Sleep supports memory consolidation.",
        },
        {
          q: "What's the downside of an all-nighter before a test?",
          o: ["You lose consolidation that sleep provides", "None", "It's illegal", "You remember too much"],
          a: 0,
          why: "Without sleep, less of what you studied gets stored.",
        },
      ],
      daily: [1],
      sources: ["https://en.wikipedia.org/wiki/Memory_consolidation"],
      young: {
        body: [
          "While you sleep, your brain is busy. It goes over things that happened in the day and stores the important ones as long-lasting memories.",
          "In tests, people who sleep after learning remember more than people who stay awake. Sometimes skills even get better overnight.",
          "So a good night's sleep before a test helps more than staying up late to study.",
        ],
        takeaway: "Sleep helps your brain store what you learned.",
        qs: [
          {
            q: "What does your brain do while you sleep?",
            o: ["Stores memories from the day", "Switches off completely", "Forgets everything"],
            a: 0,
            why: "It replays the day and files away what matters.",
          },
          {
            q: "Who usually remembers more?",
            o: ["People who stay awake all night", "They remember the same", "People who sleep after learning"],
            a: 2,
            why: "Sleep helps lock in what you learned.",
          },
          {
            q: "Before a test, what helps most?",
            o: ["Staying up very late", "A good night's sleep", "Skipping breakfast"],
            a: 1,
            why: "Your brain stores what you studied while you sleep.",
          },
        ],
      },
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
          o: ["Homer", "Aristotle", "Plutarch", "Herodotus"],
          a: 2,
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
          o: ["Shipbuilding", "Naval warfare", "Greek religion", "Identity over time"],
          a: 3,
          why: "It asks what makes something remain the same thing.",
        },
      ],
      sources: ["https://en.wikipedia.org/wiki/Ship_of_Theseus"],
      young: {
        body: [
          "A Greek hero called Theseus had a famous ship. The people of Athens kept it for hundreds of years.",
          "Whenever a plank rotted, they replaced it with a new one. In the end, not one original plank was left. Is it still the same ship?",
          "Now imagine someone kept all the old planks and built them into a ship. Which one is the real ship of Theseus? People still argue about it. What do you think?",
        ],
        takeaway: "If every part of something gets replaced, it's hard to say whether it's still the same thing.",
        qs: [
          {
            q: "What happened to the ship's planks?",
            o: ["They were replaced one by one", "They were painted gold", "Nobody touched them"],
            a: 0,
            why: "Each rotten plank was swapped for a new one.",
          },
          {
            q: "What is the puzzle about?",
            o: ["Who built the first boat", "How fast ships go", "Whether it's still the same ship"],
            a: 2,
            why: "It's about what makes something the same thing.",
          },
          {
            q: "Do people agree on the answer?",
            o: ["Yes, everyone agrees", "No, they still argue", "Nobody has thought about it"],
            a: 1,
            why: "There's no agreed answer, so your view counts too.",
          },
        ],
      },
    },
    {
      id: "b25",
      subject: "Mind",
      title: "Why new words suddenly appear everywhere",
      body: [
        "You learn a new word, or notice a car model for the first time, and within days it seems to be everywhere. It isn't. You've started noticing it.",
        "The linguist Arnold Zwicky named this the frequency illusion in 2005. It combines two habits. Selective attention means your brain flags things it has recently marked as important. Confirmation bias means each new sighting feels like proof that the thing really has become more common, while the times you didn't see it go uncounted.",
        "It's also called the Baader–Meinhof phenomenon, after a reader wrote to a Minnesota newspaper in 1994 about hearing the name of that German militant group twice in one day. The effect matters beyond trivia: doctors who have just read about a rare disease can start seeing it in patients who don't have it.",
      ],
      takeaway: "After you notice something new, your attention makes it seem more common than it is.",
      qs: [
        {
          q: "Why does a new word seem to pop up everywhere?",
          o: ["It's become fashionable", "Advertisers track you", "You've started noticing it", "Memory loss"],
          a: 2,
          why: "It was there before; your attention now flags it.",
        },
        {
          q: "Who named it the frequency illusion?",
          o: ["Sigmund Freud", "Daniel Kahneman", "B. F. Skinner", "Arnold Zwicky"],
          a: 3,
          why: "The linguist Arnold Zwicky coined the term in 2005.",
        },
        {
          q: "Which bias makes each sighting feel like proof?",
          o: ["Confirmation bias", "Hindsight bias", "Anchoring", "Survivorship bias"],
          a: 0,
          why: "You count the hits and don't notice the misses.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Frequency_illusion"],
      young: {
        title: "Why new things seem to be everywhere",
        body: [
          "Have you ever learned a new word, and then heard it again and again that week? It can feel like the word is suddenly everywhere.",
          "It isn't. The word was always there. Your brain has just started noticing it, because it now knows the word matters.",
          "Scientists call this the frequency illusion. It happens to everyone, with words, songs, cars and much more.",
        ],
        takeaway: "Once you notice something new, it seems to be everywhere, but you're just noticing it more.",
        qs: [
          {
            q: "Why does a new word seem to be everywhere?",
            o: ["Everyone copied you", "Your brain has started noticing it", "It was just invented"],
            a: 1,
            why: "It was there all along.",
          },
          {
            q: "What is this called?",
            o: ["Déjà vu", "The echo effect", "The frequency illusion"],
            a: 2,
            why: "Frequency means how often something happens.",
          },
          {
            q: "Who does this happen to?",
            o: ["Everyone", "Only scientists", "Only children"],
            a: 0,
            why: "All brains pay extra attention to new things.",
          },
        ],
      },
    },
    {
      id: "b26",
      subject: "Mind",
      title: "Why you can't tickle yourself",
      body: [
        "Every time you move, your brain predicts what the movement will feel like. A part at the back of the brain called the cerebellum sends out that forecast, and the brain turns down sensations that match it.",
        "That's why your own fingers can't tickle you: the touch is perfectly predicted, so it's damped. In experiments at University College London around 2000, Sarah-Jayne Blakemore and colleagues had people move a robot arm that brushed their own palm. When the robot added a delay of a fifth of a second, or changed the direction slightly, the touch started to feel more ticklish.",
        "The same system helps you tell your own actions from the world's. It's part of why a gentle tap from someone else can make you jump, while you barely notice your hand brushing your own arm.",
      ],
      takeaway: "Your brain predicts and dampens the feel of your own touch, so you can't tickle yourself.",
      qs: [
        {
          q: "Why can't you tickle yourself?",
          o: [
            "Your skin is too thick",
            "Your brain predicts the touch and damps it",
            "You press too hard",
            "Tickling needs two hands",
          ],
          a: 1,
          why: "Predicted sensations feel weaker.",
        },
        {
          q: "Which brain area sends out the prediction?",
          o: ["Retina", "Hippocampus", "Cerebellum", "Spinal cord"],
          a: 2,
          why: "The cerebellum forecasts what your movements will feel like.",
        },
        {
          q: "In the robot experiment, what made self-touch more ticklish?",
          o: ["Cold hands", "A short delay added by the robot", "Music", "Closing their eyes"],
          a: 1,
          why: "The delay made the touch harder to predict.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Tickling", "https://en.wikipedia.org/wiki/Cerebellum"],
      young: {
        body: [
          "Try tickling yourself. It doesn't really work, does it?",
          "Every time you move, your brain guesses what it will feel like. When the feeling matches the guess, your brain turns it down. So your own fingers feel boring, not tickly.",
          "When someone else tickles you, your brain can't guess exactly what will happen. That surprise is what makes it tickle.",
        ],
        takeaway: "Your brain guesses what your own touch will feel like, so you can't surprise yourself with a tickle.",
        qs: [
          {
            q: "Why can't you tickle yourself?",
            o: ["You're not ticklish", "Your fingers are too cold", "Your brain already knows what it will feel like"],
            a: 2,
            why: "A touch you expect feels weaker.",
          },
          {
            q: "What makes a tickle from someone else work?",
            o: ["Surprise", "Their fingers are softer", "Loud laughing"],
            a: 0,
            why: "Your brain can't predict their touch.",
          },
          {
            q: "What does your brain do with feelings it expected?",
            o: ["Makes them stronger", "Turns them down", "Saves them for later"],
            a: 1,
            why: "That's why your own touch feels dull.",
          },
        ],
      },
    },
    {
      id: "b27",
      subject: "Mind",
      title: "Change blindness",
      body: [
        "In a 1998 experiment by Daniel Simons and Daniel Levin, a researcher stopped people on a university campus to ask for directions. Mid-conversation, two men carrying a door walked between them. Behind the door, the researcher swapped places with a different person, who carried on the conversation.",
        "About half the people didn't notice they were now talking to someone else, even though the two researchers wore different clothes and had different voices.",
        "This is change blindness. We feel as if we take in the whole scene, but the brain keeps only a rough sketch and fills in the rest from expectation. Unless your attention is on the thing that changes, the change can slip past. Film editors rely on this: viewers miss many continuity errors between shots.",
      ],
      takeaway:
        "We miss surprisingly large changes when our attention is elsewhere, because the brain stores only a rough sketch.",
      qs: [
        {
          q: "In the door study, roughly how many people missed the swap?",
          o: ["Almost nobody", "Only children", "Everyone", "About half"],
          a: 3,
          why: "Around half kept giving directions to a new person.",
        },
        {
          q: "Why do we miss big changes?",
          o: ["The brain keeps only a rough sketch of a scene", "Poor eyesight", "We blink too much", "Bright light"],
          a: 0,
          why: "What isn't attended to isn't stored in detail.",
        },
        {
          q: "Who benefits from change blindness?",
          o: ["Referees", "Pilots", "Surgeons", "Film editors"],
          a: 3,
          why: "Viewers miss many continuity errors between shots.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Change_blindness"],
      young: {
        body: [
          "Scientists once asked strangers for directions. While they talked, two men carried a big door between them.",
          "Behind the door, the person asking for directions swapped with a different person! About half the people didn't notice they were talking to someone new.",
          "Our eyes see a lot, but our brain only keeps a rough picture. If we're not paying attention to something, we can miss it changing.",
        ],
        takeaway: "Your brain keeps only a rough picture of what you see, so you can miss big changes.",
        qs: [
          {
            q: "What did the scientists swap behind the door?",
            o: ["Their hats", "The person asking for directions", "The map"],
            a: 1,
            why: "A different person carried on the conversation.",
          },
          {
            q: "About how many people noticed?",
            o: ["Everyone", "Nobody", "About half"],
            a: 2,
            why: "The other half didn't notice the new person.",
          },
          {
            q: "Why do we miss changes like this?",
            o: ["Our brain keeps only a rough picture", "We have bad eyes", "Doors are too big"],
            a: 0,
            why: "We only store details we're paying attention to.",
          },
        ],
      },
    },
    {
      id: "b28",
      subject: "Philosophy",
      title: "The trolley problem",
      body: [
        "A runaway trolley is heading for five people on the track. You can pull a lever to switch it onto a side track, where it will hit one person instead. Do you pull it? Most people say yes.",
        "Now change one thing. You're on a footbridge above the track, next to a large stranger. Pushing him off would stop the trolley and save the five. Most people say no, even though the numbers are the same.",
        "The philosopher Philippa Foot introduced the first version in 1967, and Judith Jarvis Thomson added the footbridge in 1985. The gap between the answers is the point: it suggests our sense of right and wrong cares about more than outcomes, such as whether harm is a side effect or the means to an end, and whether we touch the person. Engineers now face real versions when deciding how self-driving cars should behave.",
      ],
      takeaway:
        "People judge identical outcomes differently depending on how harm happens, which shows morality isn't just counting results.",
      qs: [
        {
          q: "In the lever version, what do most people choose?",
          o: ["Do nothing", "Run away", "Pull the lever", "Shout"],
          a: 2,
          why: "Most accept switching the trolley to save five.",
        },
        {
          q: "In the footbridge version, what do most people say?",
          o: ["Push the man", "No, they wouldn't push", "Jump themselves", "Call the police"],
          a: 1,
          why: "Even with the same numbers, most refuse.",
        },
        {
          q: "Who first described the trolley problem?",
          o: ["Philippa Foot", "Immanuel Kant", "John Stuart Mill", "Plato"],
          a: 0,
          why: "Philippa Foot introduced it in 1967.",
        },
      ],
      daily: [],
      sources: ["https://en.wikipedia.org/wiki/Trolley_problem"],
      young: {
        title: "A hard choice",
        body: [
          "Here's a famous puzzle. A runaway train is heading towards five people. You can pull a lever to send it onto another track, where it would hit one person instead.",
          "Most people say they would pull the lever, to save five people instead of one.",
          "But when the puzzle changes so you'd have to push someone, most people say no, even though the numbers are the same. Thinkers have argued about why for over 50 years. What would you do?",
        ],
        takeaway: "People often decide what's right by how something happens, not only by how many are helped.",
        qs: [
          {
            q: "In the puzzle, the train is heading towards…",
            o: ["Five people", "One person", "A station"],
            a: 0,
            why: "Pulling the lever would send it towards one person instead.",
          },
          {
            q: "What do most people say they'd do with the lever?",
            o: ["Leave it", "Pull it", "Break it"],
            a: 1,
            why: "They choose to save five people.",
          },
          {
            q: "Do people agree about the puzzle?",
            o: ["Yes, always", "Nobody has thought about it", "No, they still argue"],
            a: 2,
            why: "It's a puzzle without one agreed answer.",
          },
        ],
      },
    },
  ],
};

export default pack;
