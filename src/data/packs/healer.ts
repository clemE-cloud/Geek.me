import type { Pack } from "../../lib/types";

const pack: Pack = {
  id: "healer",
  name: "The Healer",
  theme: "Your body",
  blurb: "How your body works, and how people learned to keep it well.",
  lessons: [
    {
      id: "b49",
      subject: "Health",
      title: "Why your stomach doesn't digest itself",
      body: [
        "Your stomach makes hydrochloric acid strong enough to sit around pH 1.5 to 3.5, along with enzymes that break down protein. Your stomach wall is also made of protein. So why doesn't it get digested?",
        "Several defences work together. Cells in the lining release a thick layer of mucus that coats the wall, and they release bicarbonate into it, which neutralises acid right at the surface. The main protein-cutting enzyme, pepsin, is released in an inactive form and only switches on once it meets the acid inside the stomach.",
        "The lining also replaces itself quickly. Its surface cells are renewed every few days. When these defences fail, the result is an ulcer. For decades ulcers were blamed on stress, until Barry Marshall and Robin Warren showed in the 1980s that most are caused by the bacterium Helicobacter pylori. Marshall drank a culture of it to prove the point, and they won the 2005 Nobel Prize.",
      ],
      takeaway: "Mucus, acid-neutralising bicarbonate and fast cell renewal stop your stomach digesting itself.",
      qs: [
        {
          q: "What coats and protects the stomach wall?",
          o: ["Fat", "A thick layer of mucus", "Bone", "Saliva"],
          a: 1,
          why: "It holds bicarbonate that neutralises acid.",
        },
        {
          q: "How often are the stomach's surface cells renewed?",
          o: ["Every few days", "Every year", "Never", "Every hour"],
          a: 0,
          why: "Fast renewal repairs damage.",
        },
        {
          q: "What causes most stomach ulcers?",
          o: ["Spicy food", "Stress alone", "The bacterium Helicobacter pylori", "Cold drinks"],
          a: 2,
          why: "Marshall and Warren proved it in the 1980s.",
        },
      ],
      daily: [0, 2],
      sources: ["https://en.wikipedia.org/wiki/Gastric_mucosa", "https://en.wikipedia.org/wiki/Helicobacter_pylori"],
      young: {
        body: [
          "Your stomach makes strong acid to break down food. But your stomach is made of meat too. So why doesn't it eat itself?",
          "The stomach makes a thick, slimy layer called mucus. It coats the inside like a raincoat and keeps the acid away from the wall.",
          "The stomach's inside layer also renews itself every few days, so any damage gets fixed fast.",
        ],
        takeaway: "A slimy coat of mucus protects your stomach from its own acid.",
        qs: [
          {
            q: "What does your stomach make to break down food?",
            o: ["Ice", "Strong acid", "Sugar"],
            a: 1,
            why: "Acid and enzymes break food apart.",
          },
          {
            q: "What protects the stomach wall?",
            o: ["A slimy coat of mucus", "Hair", "Bones"],
            a: 0,
            why: "It works like a raincoat against the acid.",
          },
          {
            q: "How often does the inside layer renew?",
            o: ["Once a year", "Never", "Every few days"],
            a: 2,
            why: "Fast repairs keep it healthy.",
          },
        ],
      },
    },
    {
      id: "b50",
      subject: "Health",
      title: "Why you get goosebumps",
      body: [
        "Each hair on your body has a tiny muscle attached to its root, called the arrector pili. When you're cold, or feel a strong emotion, these muscles contract. The hairs stand up and the skin around them bunches into little bumps.",
        "For our furry ancestors, this was useful. Raised fur traps a thicker layer of air, which keeps warmth in. It also makes an animal look bigger, which is why a frightened cat puffs up. Humans have lost most of our fur, so goosebumps no longer do much, but the reflex has stayed.",
        "The trigger comes from the sympathetic nervous system, the same 'fight or flight' system that releases adrenaline. That's why goosebumps can come with fear, awe or a moving piece of music. A 2020 study in mice also found the same nerves help hair follicles grow, so the reflex may have a second job.",
      ],
      takeaway: "Goosebumps are tiny muscles raising your hairs, a leftover from furrier ancestors.",
      qs: [
        {
          q: "What raises your hairs when you get goosebumps?",
          o: ["Sweat", "Static electricity", "Blood pressure", "Tiny muscles at each hair root"],
          a: 3,
          why: "They're called arrector pili.",
        },
        {
          q: "Why were goosebumps useful for furry animals?",
          o: ["Raised fur traps warm air and looks bigger", "They help them swim", "They attract mates", "They help hearing"],
          a: 0,
          why: "A puffed-up cat shows both effects.",
        },
        {
          q: "Which system triggers goosebumps?",
          o: ["The digestive system", "The immune system", "The sympathetic nervous system", "The skeleton"],
          a: 2,
          why: "The same 'fight or flight' system that releases adrenaline.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Goose_bumps", "https://en.wikipedia.org/wiki/Arrector_pili_muscle"],
      young: {
        body: [
          "When you're cold, little bumps can pop up on your skin. These are goosebumps.",
          "Every hair on your body has a tiny muscle at the bottom. When you're cold or scared, the muscles squeeze and the hairs stand up.",
          "Animals with lots of fur use this to keep warm, because fluffed-up fur traps warm air. A scared cat puffs up to look bigger. We have much less fur, but we still get the bumps.",
        ],
        takeaway: "Goosebumps happen when tiny muscles make your hairs stand up.",
        qs: [
          {
            q: "What makes your hairs stand up?",
            o: ["Tiny muscles", "The wind", "Your bones"],
            a: 0,
            why: "Each hair has its own little muscle.",
          },
          {
            q: "Why does fluffed-up fur help animals?",
            o: ["It makes them faster", "It changes colour", "It traps warm air"],
            a: 2,
            why: "A thicker coat of air keeps them warm.",
          },
          {
            q: "Why does a scared cat puff up?",
            o: ["To dry off", "To look bigger", "To sleep"],
            a: 1,
            why: "Looking bigger can scare away danger.",
          },
        ],
      },
    },
    {
      id: "b51",
      subject: "History",
      title: "The mould that changed medicine",
      body: [
        "In September 1928, Alexander Fleming came back from holiday to his London laboratory and found that mould had landed on one of his dishes of Staphylococcus bacteria. Around the mould was a clear ring where the bacteria had died.",
        "The mould was Penicillium, and Fleming called the substance it released penicillin. But it was hard to purify and he moved on to other work. More than ten years later, at Oxford, Howard Florey, Ernst Chain and a team including Norman Heatley worked out how to produce and purify it. The first patient, a policeman named Albert Alexander, was treated in 1941.",
        "Mass production in the United States during the Second World War made penicillin widely available by 1944. Fleming, Florey and Chain shared the 1945 Nobel Prize. In his Nobel lecture, Fleming warned that misusing penicillin could breed resistant bacteria, a problem that is now a major global health threat.",
      ],
      takeaway: "Fleming spotted penicillin in 1928, and Florey and Chain's team made it into a usable drug.",
      qs: [
        {
          q: "What did Fleming notice in 1928?",
          o: ["A new virus", "Bacteria dying around a patch of mould", "A broken microscope", "Sugar crystals"],
          a: 1,
          why: "The mould was releasing penicillin.",
        },
        {
          q: "Who turned penicillin into a usable drug?",
          o: ["Edward Jenner", "Louis Pasteur", "Marie Curie", "Florey, Chain and their Oxford team"],
          a: 3,
          why: "Fleming had found it hard to purify.",
        },
        {
          q: "What did Fleming warn about in 1945?",
          o: ["Penicillin running out", "Misuse breeding resistant bacteria", "Mould spreading", "High prices"],
          a: 1,
          why: "Antibiotic resistance is now a major threat.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Penicillin", "https://en.wikipedia.org/wiki/History_of_penicillin"],
      young: {
        body: [
          "In 1928, a scientist called Alexander Fleming came back from holiday and found mould growing on one of his dishes of germs.",
          "Around the mould, the germs had died! The mould was making something that killed them. Fleming called it penicillin.",
          "Other scientists later found how to make lots of it. Penicillin became the first antibiotic, a medicine that fights germs, and it has saved millions of lives.",
        ],
        takeaway: "Penicillin, the first antibiotic, was found when mould killed germs in a dish.",
        qs: [
          { q: "What grew on Fleming's dish?", o: ["Flowers", "Mould", "Crystals"], a: 1, why: "It had drifted in by accident." },
          {
            q: "What happened to the germs near the mould?",
            o: ["They died", "They grew bigger", "They changed colour"],
            a: 0,
            why: "The mould made something that killed them.",
          },
          {
            q: "What is an antibiotic?",
            o: ["A type of food", "A vitamin", "A medicine that fights germs"],
            a: 2,
            why: "Penicillin was the first one.",
          },
        ],
      },
    },
    {
      id: "b52",
      subject: "History",
      title: "The doctor who said wash your hands",
      body: [
        "In 1840s Vienna, the General Hospital had two maternity wards. In the one run by doctors and medical students, many more mothers died of childbed fever than in the one run by midwives, sometimes several times as many.",
        "The young doctor Ignaz Semmelweis noticed that the doctors often came straight from dissecting bodies. In 1847 he made them wash their hands in chlorinated lime before examining patients. Deaths on the doctors' ward fell from around 10% to under 2%.",
        "Many senior doctors rejected his idea. Germ theory didn't exist yet, and some were offended at being told they were spreading disease. Semmelweis lost his post, grew bitter and died in an asylum in 1865, aged 47. Within a few decades, the work of Louis Pasteur and Joseph Lister proved him right. The 'Semmelweis reflex' now names the habit of rejecting evidence that clashes with established beliefs.",
      ],
      takeaway: "Semmelweis cut deaths by making doctors wash their hands, years before germs were understood.",
      qs: [
        {
          q: "What did Semmelweis make doctors do in 1847?",
          o: ["Wash their hands in chlorinated lime", "Wear masks", "Boil their tools", "Open windows"],
          a: 0,
          why: "Doctors often came straight from dissections.",
        },
        {
          q: "How did most senior doctors respond?",
          o: ["They ignored the data but agreed", "They gave him a prize", "They copied it at once", "They rejected his idea"],
          a: 3,
          why: "Germ theory didn't exist yet.",
        },
        {
          q: "What does 'the Semmelweis reflex' mean?",
          o: ["Washing hands often", "A knee reflex", "Rejecting evidence that clashes with beliefs", "A type of fever"],
          a: 2,
          why: "Named after how his evidence was treated.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Ignaz_Semmelweis"],
      young: {
        body: [
          "About 180 years ago, a doctor in Vienna called Ignaz Semmelweis noticed something worrying. Mothers having babies got sick more often when doctors looked after them.",
          "The doctors often came from other work without washing their hands. Semmelweis made them wash their hands first. After that, far fewer mothers got sick.",
          "At the time, nobody knew about germs. Many doctors didn't believe him. Today, washing your hands is one of the best ways to stop illness.",
        ],
        takeaway: "Washing hands stops germs spreading, as a doctor showed long before germs were discovered.",
        qs: [
          {
            q: "What did Semmelweis ask doctors to do?",
            o: ["Wash their hands", "Wear hats", "Work faster"],
            a: 0,
            why: "Dirty hands were spreading illness.",
          },
          {
            q: "What happened after the doctors washed their hands?",
            o: ["More people got sick", "Far fewer people got sick", "Nothing changed"],
            a: 1,
            why: "Clean hands stopped germs spreading.",
          },
          {
            q: "Did other doctors believe him at first?",
            o: ["Yes, all of them", "They gave him a medal", "Many didn't"],
            a: 2,
            why: "Nobody knew about germs yet.",
          },
        ],
      },
    },
    {
      id: "b53",
      subject: "Health",
      title: "Your skeleton is alive",
      body: [
        "Bone looks like stone, but it's living tissue that is constantly being rebuilt. Cells called osteoclasts dissolve small patches of old bone, and osteoblasts lay down new bone in their place. In adults, this remodelling replaces roughly 10% of the skeleton each year.",
        "The process lets bones repair tiny cracks and adapt to the loads they carry. Tennis players have measurably thicker bones in their playing arm. Astronauts lose bone in weightlessness, which is why they exercise for hours a day on the space station.",
        "You were born with around 270 to 300 bones. Many fuse as you grow, for example in the skull and at the base of the spine, leaving most adults with 206. Bones also store calcium for the rest of the body and, in their marrow, make billions of new blood cells every day.",
      ],
      takeaway: "Bones are constantly rebuilt, and babies have around 300 bones that fuse into 206.",
      qs: [
        {
          q: "Roughly how much of an adult skeleton is replaced each year?",
          o: ["1%", "None", "50%", "10%"],
          a: 3,
          why: "Osteoclasts and osteoblasts remodel it continuously.",
        },
        {
          q: "Why do babies have more bones than adults?",
          o: ["Adults lose bones", "Many bones fuse as you grow", "Babies grow extra ones", "They don't"],
          a: 1,
          why: "For example in the skull and spine.",
        },
        {
          q: "Why do astronauts exercise for hours a day?",
          o: ["Boredom", "To stay warm", "To limit bone loss in weightlessness", "To sleep better"],
          a: 2,
          why: "Bones weaken without loads to carry.",
        },
      ],
      daily: [1],
      sources: ["https://en.wikipedia.org/wiki/Bone_remodeling", "https://en.wikipedia.org/wiki/Human_skeleton"],
      young: {
        body: [
          "Your bones might feel like hard rock, but they're alive. They grow, repair themselves and change all the time.",
          "Babies are born with around 300 bones. As you grow, some of them join together. Grown-ups have 206.",
          "Bones get stronger when you use them, by running, jumping and playing. Inside some bones, a soft part called marrow makes new blood every day.",
        ],
        takeaway: "Your bones are alive, and babies have about 300 that join up into 206.",
        qs: [
          { q: "How many bones do grown-ups have?", o: ["1,000", "50", "206"], a: 2, why: "Some baby bones join together." },
          {
            q: "About how many bones are babies born with?",
            o: ["206", "300", "10"],
            a: 1,
            why: "Many of them fuse as you grow.",
          },
          {
            q: "What makes bones stronger?",
            o: ["Running, jumping and playing", "Sleeping all day", "Sitting still"],
            a: 0,
            why: "Bones get stronger when they're used.",
          },
        ],
      },
    },
    {
      id: "b54",
      subject: "Health",
      title: "Why it's called a vaccine",
      body: [
        "In the 1700s, smallpox killed hundreds of thousands of people a year in Europe alone. It was widely said that milkmaids who had caught cowpox, a mild disease from cows, didn't get smallpox.",
        "In 1796 the English doctor Edward Jenner tested this. He took material from a cowpox sore on the hand of a milkmaid, Sarah Nelmes, and put it into a cut on the arm of James Phipps, an eight-year-old boy. Weeks later he exposed James to smallpox, and the boy didn't get ill. It would never pass an ethics committee today, but it worked.",
        "The Latin for cow is vacca, and cowpox is vaccinia, which is where 'vaccine' comes from. Vaccines train the immune system to recognise a germ without the danger of the real disease. A global vaccination campaign led the World Health Organization to declare smallpox eradicated in 1980, the first human disease wiped out.",
      ],
      takeaway: "‘Vaccine’ comes from the Latin for cow, after Jenner used cowpox to protect against smallpox in 1796.",
      qs: [
        {
          q: "Where does the word ‘vaccine’ come from?",
          o: ["Latin for cow", "Greek for needle", "A scientist's name", "French for health"],
          a: 0,
          why: "Jenner used cowpox, vaccinia.",
        },
        {
          q: "What did Jenner use to protect against smallpox?",
          o: ["Garlic", "Cold baths", "Penicillin", "Material from cowpox sores"],
          a: 3,
          why: "Milkmaids with cowpox seemed protected.",
        },
        {
          q: "When was smallpox declared eradicated?",
          o: ["1900", "1945", "1980", "2001"],
          a: 2,
          why: "The first human disease to be wiped out.",
        },
      ],
      daily: [0, 2],
      sources: ["https://en.wikipedia.org/wiki/Edward_Jenner", "https://en.wikipedia.org/wiki/Smallpox"],
      young: {
        body: [
          "Long ago, a terrible illness called smallpox made millions of people sick. People noticed that milkmaids who caught a mild illness from cows, called cowpox, didn't get smallpox.",
          "In 1796, a doctor called Edward Jenner tested this idea. He gave a boy a little cowpox, and afterwards the boy didn't catch smallpox.",
          "The Latin word for cow is ‘vacca’. That's where the word vaccine comes from! Thanks to vaccines, smallpox has now disappeared from the world.",
        ],
        takeaway: "The word vaccine comes from the Latin word for cow.",
        qs: [
          {
            q: "The word vaccine comes from the Latin word for…",
            o: ["Cow", "Doctor", "Needle"],
            a: 0,
            why: "Jenner used cowpox from cows.",
          },
          {
            q: "Who seemed safe from smallpox?",
            o: ["Kings", "Milkmaids who'd had cowpox", "Sailors"],
            a: 1,
            why: "Cowpox protected them.",
          },
          {
            q: "What has happened to smallpox?",
            o: ["It's still common", "It got stronger", "It has disappeared from the world"],
            a: 2,
            why: "Vaccines wiped it out by 1980.",
          },
        ],
      },
    },
    {
      id: "b55",
      subject: "Health",
      title: "Nobody knows exactly why we yawn",
      body: [
        "Almost all vertebrates yawn, from fish to birds to people, and babies yawn in the womb from about 11 weeks. Yet scientists still don't agree on what yawning is for.",
        "The old idea that we yawn to get more oxygen doesn't hold up: in a 1987 experiment, Robert Provine found that breathing extra oxygen or carbon dioxide didn't change how often people yawned. A leading current idea, championed by Andrew Gallup, is that yawning helps cool the brain, by drawing in air and increasing blood flow. Supporting this, people yawn more often in moderate temperatures than in very hot or very cold ones.",
        "Contagious yawning is another puzzle. Seeing, hearing or even reading about yawning can set you off. It's common in humans and has been reported in chimpanzees and dogs, and some research suggests it's linked to social closeness, though the evidence is mixed. Did you yawn while reading this?",
      ],
      takeaway: "Yawning is universal, but its purpose is unknown; brain cooling is one leading theory.",
      qs: [
        {
          q: "Do we yawn to get more oxygen?",
          o: ["Experiments don't support it", "Yes, definitely", "Only at night", "Only when tired"],
          a: 0,
          why: "Extra oxygen didn't change yawning rates.",
        },
        {
          q: "What does one leading theory say yawning does?",
          o: ["Stretches the tongue", "Cleans the lungs", "Cools the brain", "Warms the blood"],
          a: 2,
          why: "Andrew Gallup has championed this idea.",
        },
        {
          q: "When do babies start yawning?",
          o: ["At birth", "At age one", "In the womb, from about 11 weeks", "When they learn to talk"],
          a: 2,
          why: "Yawning starts very early.",
        },
      ],
      daily: [0, 2],
      sources: ["https://en.wikipedia.org/wiki/Yawn"],
      young: {
        body: [
          "Everybody yawns. So do cats, dogs, fish and birds. Babies even yawn before they're born.",
          "But here's a surprise: scientists aren't sure why we yawn! One idea is that yawning helps cool down your brain.",
          "Yawns are catching too. Seeing someone yawn, or even reading about yawning, can make you yawn. Are you yawning yet?",
        ],
        takeaway: "Everyone yawns, but scientists still aren't sure why.",
        qs: [
          {
            q: "Do scientists know exactly why we yawn?",
            o: ["Yes", "Only for cats", "No, not yet"],
            a: 2,
            why: "There are ideas, but no agreed answer.",
          },
          {
            q: "What's one idea about yawning?",
            o: ["It cools your brain", "It makes you taller", "It cleans your teeth"],
            a: 0,
            why: "Drawing in air may help cool the brain.",
          },
          {
            q: "What can make you yawn?",
            o: ["Eating carrots", "Seeing someone else yawn", "Loud music only"],
            a: 1,
            why: "Yawns are catching.",
          },
        ],
      },
    },
    {
      id: "b56",
      subject: "Health",
      title: "The appendix may not be useless",
      body: [
        "The appendix, a small pouch off the large intestine, was long treated as a leftover from our evolutionary past. Charles Darwin suggested it was a shrunken remnant of a larger digestive organ in our plant-eating ancestors.",
        "In 2007, a team led by William Parker and Randal Bollinger at Duke University proposed a job for it: a safe house for helpful gut bacteria. After an illness like cholera flushes the gut, bacteria sheltering in the appendix could recolonise it.",
        "Support came from comparing animals. A 2017 study led by Heather Smith found that an appendix has evolved independently at least 30 times in mammals and has rarely been lost once it appears, which suggests it gives some advantage. It also contains lymphoid tissue, part of the immune system. None of this means you need one: people live normal lives after it's removed.",
      ],
      takeaway: "The appendix may shelter helpful gut bacteria, and it has evolved independently many times in mammals.",
      qs: [
        {
          q: "What job has been proposed for the appendix?",
          o: ["Storing fat", "A safe house for helpful gut bacteria", "Making bile", "Digesting grass"],
          a: 1,
          why: "Bacteria there could repopulate the gut after illness.",
        },
        {
          q: "How many times has the appendix evolved independently in mammals?",
          o: ["At least 30 times", "Twice", "Once", "Never"],
          a: 0,
          why: "And it's rarely lost once it appears.",
        },
        {
          q: "Can people live normally without an appendix?",
          o: ["Only with medication", "No", "Only children", "Yes"],
          a: 3,
          why: "Removing it is a common operation.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Appendix_(anatomy)"],
      young: {
        body: [
          "The appendix is a small tube attached to your gut. For a long time, people thought it was useless.",
          "Now some scientists think it has a job. It may be a safe hiding place for good bacteria that help you digest food. After a tummy bug, they can come out and help again.",
          "Lots of animals have an appendix too. But people can live perfectly well if theirs is taken out.",
        ],
        takeaway: "Your appendix might be a hiding place for good gut bacteria.",
        qs: [
          {
            q: "Where is the appendix?",
            o: ["In your head", "In your foot", "Attached to your gut"],
            a: 2,
            why: "It's a small tube off the large intestine.",
          },
          {
            q: "What might the appendix do?",
            o: ["Help you see", "Keep good bacteria safe", "Make you sneeze"],
            a: 1,
            why: "They can help your gut after a tummy bug.",
          },
          {
            q: "Can people live without an appendix?",
            o: ["Yes", "No", "Only grown-ups"],
            a: 0,
            why: "Many people have theirs removed.",
          },
        ],
      },
    },
  ],
};

export default pack;
