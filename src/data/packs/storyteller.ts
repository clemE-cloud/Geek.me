import type { Pack } from "../../lib/types";

/*
 * Living cultures, written about with respect: say who does what and why, note where practices have changed,
 * and avoid presenting any people as frozen in the past.
 */
const pack: Pack = {
  id: "storyteller",
  name: "The Storyteller",
  theme: "People & cultures",
  blurb: "How people around the world live, celebrate and dress, and the reasons behind it.",
  lessons: [
    {
      id: "b101",
      subject: "Culture",
      title: "Why Maasai warriors wear red braids",
      body: [
        "The Maasai live in southern Kenya and northern Tanzania, and their lives are organised by age. Boys become moran, young warriors, after a coming-of-age ceremony in their teens, and stay moran for around ten to fifteen years.",
        "Traditionally, the moran are the only Maasai who grow their hair long. Everyone else, women included, keeps their head shaved. The moran braid their hair into many thin plaits and colour it with red ochre, a clay rich in iron oxide, mixed with animal fat. They often paint their faces and bodies with it too. Red stands for bravery, strength and the blood of the cattle the Maasai live from.",
        "The long hair ends at a ceremony called Eunoto, when moran become senior warriors. Their mothers shave their heads, which is an emotional moment: the braids took years to grow, and cutting them marks the end of youth.",
      ],
      takeaway: "Only Maasai moran grow long braids, coloured red with ochre and fat; they're shaved off at Eunoto when youth ends.",
      qs: [
        {
          q: "Among the Maasai, who traditionally grows long braided hair?",
          o: ["Elders", "The young warriors, called moran", "Married women", "Everyone"],
          a: 1,
          why: "Everyone else traditionally keeps their head shaved.",
        },
        {
          q: "What gives the braids their red colour?",
          o: ["Beetroot juice", "Henna", "Red ochre mixed with animal fat", "Cattle blood"],
          a: 2,
          why: "Ochre is a clay coloured by iron oxide.",
        },
        {
          q: "What happens to the braids at the Eunoto ceremony?",
          o: ["They're shaved off by the warriors' mothers", "They're dyed white", "They're buried with cattle", "They're tied into a crown"],
          a: 0,
          why: "It marks the move from young warrior to senior warrior.",
        },
      ],
      daily: [0],
      sources: [
        "https://en.wikipedia.org/wiki/Maasai_people",
        "https://www.the-star.co.ke/sasa/books/2023-08-21-photos-pomp-and-colour-as-maasai-morans-embrace-culture-in-key-ceremony",
        "https://artsandculture.google.com/story/5QVhnhhybJEfbg",
      ],
      young: {
        title: "The warriors with red hair",
        body: [
          "The Maasai people live in Kenya and Tanzania, in East Africa. Young men there become warriors called moran.",
          "Only the moran grow their hair long. They braid it into lots of thin plaits. Then they colour it red with a mix of red clay and animal fat. Red means being brave and strong.",
          "When the warriors grow older, there is a big ceremony. Their mothers shave off the long red hair. It shows they are not young warriors any more.",
        ],
        takeaway: "Maasai warriors colour their long braids red, and shave them off when they grow older.",
        qs: [
          {
            q: "Who grows long red braids?",
            o: ["Maasai grandmothers", "Young Maasai warriors", "Maasai babies"],
            a: 1,
            why: "They are called moran.",
          },
          {
            q: "What makes the hair red?",
            o: ["Red clay and animal fat", "Strawberries", "Paint from a shop"],
            a: 0,
            why: "The red clay is called ochre.",
          },
          {
            q: "What does red mean to the Maasai?",
            o: ["Being sleepy", "Being hungry", "Being brave and strong"],
            a: 2,
            why: "That's why warriors wear it.",
          },
        ],
      },
    },
    {
      id: "b102",
      subject: "Culture",
      title: "Milk, blood and cattle",
      body: [
        "For the Maasai, cattle are wealth, food and status all at once. A family's herd is counted carefully, cows are given as gifts at weddings, and many songs and names are about cattle. Killing one is a big decision, so the traditional diet relies on what a living herd can give: milk above all.",
        "Blood is the other gift. A herder ties a cord around a cow's neck so the vein swells, then shoots a blocked arrow into it from close range. The arrow has a stop so it only nicks the vein. Blood is caught in a gourd, the wound is pressed closed, and the cow walks away and recovers.",
        "The blood is usually drunk mixed with milk. It's rich in protein and iron, and it's given especially to new mothers, to young men after circumcision and to people recovering from illness. Today most Maasai also eat maize, beans and rice, and blood is drunk less often.",
      ],
      takeaway: "The Maasai drink cattle blood, usually with milk, taken from a living cow that recovers, so the herd stays alive.",
      qs: [
        {
          q: "Why do the Maasai take blood from cows instead of killing them?",
          o: ["Killing cattle is illegal in Kenya", "Cattle are their wealth, so a living herd keeps giving food", "Blood tastes better", "Meat goes off too fast"],
          a: 1,
          why: "A live cow keeps giving milk and blood.",
        },
        {
          q: "How is the blood drawn?",
          o: ["With a blocked arrow shot into a neck vein", "With a knife to the leg", "From a cut ear", "By the cow drinking salt water"],
          a: 0,
          why: "A stop on the arrow keeps the cut small.",
        },
        {
          q: "Who is blood traditionally given to?",
          o: ["Only elders", "Only visitors", "Only children under five", "New mothers, young men after circumcision and the sick"],
          a: 3,
          why: "It's prized for strength and recovery.",
        },
      ],
      daily: [0],
      sources: [
        "https://www.atlasobscura.com/foods/cow-blood-kenya-maasai",
        "https://en.wikipedia.org/wiki/Maasai_people",
        "https://oriire.com/article/the-sacred-diet-of-the-maasai-its-cuisine-and-symbolic-meaning",
      ],
      young: {
        body: [
          "The Maasai keep big herds of cows. Cows are very precious to them. So they don't like to kill one just for food.",
          "Instead, they drink the cows' milk. Sometimes they also take a little blood from a cow's neck. The cow is not killed, and it gets better.",
          "The blood is often mixed with milk. It is given to people who need to get strong, like new mums. Today the Maasai eat lots of other food too.",
        ],
        takeaway: "The Maasai sometimes drink a little blood from their cows, mixed with milk, without hurting the herd.",
        qs: [
          {
            q: "Why don't the Maasai often kill their cows?",
            o: ["Cows are very precious to them", "Cows are too fast", "They don't eat food"],
            a: 0,
            why: "A living cow gives milk every day.",
          },
          {
            q: "What is the blood often mixed with?",
            o: ["Orange juice", "Milk", "Honey"],
            a: 1,
            why: "Milk and blood together make a strong drink.",
          },
          {
            q: "What happens to the cow afterwards?",
            o: ["It is eaten", "It flies away", "It gets better"],
            a: 2,
            why: "Only a little blood is taken.",
          },
        ],
      },
    },
    {
      id: "b103",
      subject: "Culture",
      title: "The men who wear the veil",
      body: [
        "The Tuareg are a Berber people of the Sahara, living across Niger, Mali, Algeria, Libya and Burkina Faso. In many cultures it's women who cover their faces. Among the Tuareg it's the men. Grown men wear the tagelmust, a long cloth wound into a turban and veil that can cover everything but the eyes.",
        "A young man receives his first veil as a sign he's become an adult. It does keep out sand and sun, but it's also about manners: covering the mouth is a mark of respect, especially in front of elders and in-laws. Women traditionally don't veil their faces.",
        "The finest tagelmusts are dyed with indigo, beaten into the cloth rather than fixed, so the colour rubs off onto the skin. That's why the Tuareg have been called the \"blue people\" of the Sahara. Tuareg women also have unusual standing: families trace descent through mothers, and women often own the tent and livestock.",
      ],
      takeaway: "Tuareg men, not women, veil their faces with the tagelmust, a sign of adulthood and respect whose indigo can tint the skin blue.",
      qs: [
        {
          q: "Among the Tuareg, who traditionally covers their face?",
          o: ["Women", "Children", "Grown men", "Nobody"],
          a: 2,
          why: "Men wear the tagelmust; women traditionally don't veil.",
        },
        {
          q: "Besides keeping out sand, what does the veil express?",
          o: ["Wealth only", "Respect, especially before elders and in-laws", "Which football team you support", "That you're unmarried"],
          a: 1,
          why: "Covering the mouth is a mark of good manners.",
        },
        {
          q: "Why have the Tuareg been called the \"blue people\"?",
          o: ["Indigo from their veils rubs off on their skin", "They live by the sea", "Their tents are blue", "They paint their faces for war"],
          a: 0,
          why: "The dye is beaten into the cloth, not fixed.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Tuareg_people", "https://en.wikipedia.org/wiki/Litham"],
      young: {
        title: "The men who wear the veil",
        body: [
          "The Tuareg people live in the Sahara desert, in North and West Africa. Many travel with camels across the sand.",
          "Tuareg men wrap a long cloth around their heads and faces. It is called a tagelmust. It keeps out sand and sun. Covering your mouth is also a polite thing to do.",
          "Some of these cloths are dyed deep blue. The blue rubs off on their skin! So people call them the blue people of the desert.",
        ],
        takeaway: "Tuareg men cover their faces with a cloth, and its blue dye can turn their skin blue.",
        qs: [
          {
            q: "Where do the Tuareg live?",
            o: ["In the Arctic", "In the Sahara desert", "On an island"],
            a: 1,
            why: "They live across North and West Africa.",
          },
          {
            q: "Who wears the face cloth?",
            o: ["Tuareg men", "Only babies", "Camels"],
            a: 0,
            why: "It's called a tagelmust.",
          },
          {
            q: "Why are they called the blue people?",
            o: ["They paint themselves", "They love the sea", "Blue dye from the cloth rubs off"],
            a: 2,
            why: "The dye is called indigo.",
          },
        ],
      },
    },
    {
      id: "b104",
      subject: "Culture",
      title: "A beauty contest for men",
      body: [
        "The Wodaabe are nomadic cattle herders, part of the wider Fula people, who move through Niger, Chad and nearby countries. Each year at the end of the rainy season, clans gather for the Gerewol, and the young men compete to be chosen by the women.",
        "The men spend hours getting ready. They paint their faces with red and yellow ochre, draw a pale line down the nose to make it look longer, darken their lips with black kohl and add beads, feathers and white cowrie shells. What's admired is height, a straight nose, and very white eyes and teeth.",
        "Then they line up and dance the yaake, standing on tiptoe to look taller, rolling their eyes and flashing their teeth, sometimes for hours. Young women chosen as judges walk along the line and pick the man they find most beautiful. A choice can lead to a romance, or even a marriage.",
      ],
      takeaway: "At the Wodaabe Gerewol, young men paint and dance to show off white eyes and teeth, and young women judge.",
      qs: [
        {
          q: "At the Gerewol, who is judged on their looks?",
          o: ["Young women", "Young men", "Cattle", "Elders"],
          a: 1,
          why: "Young women walk the line and choose.",
        },
        {
          q: "Why do dancers roll their eyes and flash their teeth?",
          o: ["To scare away rivals", "Very white eyes and teeth are admired", "It's part of a prayer", "To show they're tired"],
          a: 1,
          why: "Along with height and a straight nose.",
        },
        {
          q: "Why do the men stand on tiptoe during the yaake dance?",
          o: ["The ground is hot", "To see the judges", "To look taller", "It's a rule of the clan"],
          a: 2,
          why: "Height is one of the things judged.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Wodaabe", "https://en.wikipedia.org/wiki/Gu%C3%A9rewol"],
      young: {
        body: [
          "The Wodaabe people look after cattle in Niger and Chad, in Africa. Every year, after the rainy season, they meet for a big festival.",
          "At the festival, young men dress up. They paint their faces red and yellow. They wear beads, feathers and shells.",
          "Then they dance in a line. They roll their eyes and smile to show white eyes and teeth. Young women choose who looks the best!",
        ],
        takeaway: "At a Wodaabe festival, young men dress up and dance, and young women choose the winner.",
        qs: [
          {
            q: "Who dresses up and dances at the festival?",
            o: ["Young men", "Grandparents", "Cows"],
            a: 0,
            why: "They paint their faces and wear beads.",
          },
          {
            q: "What do the dancers show off?",
            o: ["Their shoes", "White eyes and teeth", "Their cattle"],
            a: 1,
            why: "They roll their eyes and smile.",
          },
          {
            q: "Who chooses the winner?",
            o: ["A king", "The cows", "Young women"],
            a: 2,
            why: "That's the fun twist.",
          },
        ],
      },
    },
    {
      id: "b105",
      subject: "Culture",
      title: "The haka isn't only for war",
      body: [
        "The haka is a Māori posture dance from Aotearoa New Zealand: chanted words, stamping, slapped thighs, wide eyes and tongues out. Most people know it from rugby, but there are many haka, performed to welcome guests, celebrate, mark achievements and mourn at funerals.",
        "The famous one, Ka Mate, was composed around 1820 by Te Rauparaha, a chief of the Ngāti Toa tribe. Hunted by enemies, he hid in a food storage pit, and when he climbed out alive he chanted \"Ka mate, ka mate! Ka ora, ka ora!\": \"I die, I die! I live, I live!\" It's a song about surviving, not attacking.",
        "New Zealand rugby teams have performed haka since the 1880s, and the All Blacks have done so since 1905. In 2014, as part of a settlement with Ngāti Toa, New Zealand passed a law saying that commercial and public uses of Ka Mate must credit Te Rauparaha as its composer.",
      ],
      takeaway: "Ka Mate, the best-known haka, celebrates surviving, not war; there are many haka for welcomes, celebrations and funerals.",
      qs: [
        {
          q: "What do the words \"Ka mate, ka mate! Ka ora, ka ora!\" mean?",
          o: ["Attack, attack!", "We win, we win!", "I die, I die! I live, I live!", "Welcome, welcome!"],
          a: 2,
          why: "Te Rauparaha chanted it after escaping his enemies.",
        },
        {
          q: "Which of these is a real use of haka?",
          o: ["Only before battle", "Welcoming guests and mourning at funerals", "Only at rugby matches", "Only by men"],
          a: 1,
          why: "There are many haka for many occasions; women perform them too.",
        },
        {
          q: "What did a 2014 New Zealand law say about Ka Mate?",
          o: ["Banned haka at sports", "Made haka compulsory at school", "Gave Ka Mate to the rugby team", "Required public uses of Ka Mate to credit Te Rauparaha"],
          a: 3,
          why: "It was part of a settlement with his tribe, Ngāti Toa.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Ka_Mate", "https://www.legislation.govt.nz/act/public/2014/18/en/latest/"],
      young: {
        body: [
          "The haka is a dance from the Māori people of New Zealand. Dancers chant, stamp their feet and slap their legs. They pull fierce faces too.",
          "There are lots of different haka. People do them to welcome guests, to celebrate and to say goodbye at funerals.",
          "The most famous one is about a chief who hid from his enemies and survived. The New Zealand rugby team does it before games.",
        ],
        takeaway: "The haka is a Māori dance, used for welcomes, celebrations and goodbyes, not just rugby.",
        qs: [
          {
            q: "Which people does the haka come from?",
            o: ["The Māori of New Zealand", "The Vikings", "The Romans"],
            a: 0,
            why: "Māori people have many haka.",
          },
          {
            q: "When might people do a haka?",
            o: ["Only at bedtime", "To welcome guests or celebrate", "Only when it rains"],
            a: 1,
            why: "And at funerals, to say goodbye.",
          },
          {
            q: "What is the famous haka about?",
            o: ["Catching fish", "A big feast", "A chief who survived"],
            a: 2,
            why: "He hid from his enemies and lived.",
          },
        ],
      },
    },
    {
      id: "b106",
      subject: "Culture",
      title: "A party for the dead",
      body: [
        "On 1 and 2 November, families across Mexico celebrate Día de Muertos, the Day of the Dead. It isn't meant to be gloomy. The idea is that the souls of loved ones come back for a visit, so families get ready to welcome them.",
        "Homes and graves get an ofrenda, an altar with photos of the dead, candles, their favourite food and drink, and pan de muerto, a sweet bread. Orange marigolds, called cempasúchil, are everywhere: their strong colour and scent are said to guide the souls home. Families often spend the night at the cemetery, eating, talking and playing music.",
        "The smiling skeleton lady, La Catrina, began around 1910 as a satirical print by José Guadalupe Posada. The big parade in Mexico City is newer still: it started in 2016, after a James Bond film, Spectre, invented one for its opening scene. UNESCO listed the tradition as world heritage in 2008.",
      ],
      takeaway: "Día de Muertos welcomes the dead home with altars and marigolds; Mexico City's parade only began in 2016, inspired by a Bond film.",
      qs: [
        {
          q: "What are the orange marigolds for?",
          o: ["To keep insects away", "Their colour and scent are said to guide souls home", "To decorate cakes", "To mark the end of summer"],
          a: 1,
          why: "In Mexico they're called cempasúchil.",
        },
        {
          q: "What goes on an ofrenda?",
          o: ["Photos, candles and the person's favourite food", "Only flowers", "Presents for children", "Masks and costumes"],
          a: 0,
          why: "It's a welcome for visiting souls.",
        },
        {
          q: "Why did Mexico City start a Day of the Dead parade in 2016?",
          o: ["It's thousands of years old", "For the Olympics", "To celebrate a new president", "A James Bond film invented one"],
          a: 3,
          why: "Spectre (2015) opened with a made-up parade, and the city made it real.",
        },
      ],
      daily: [2],
      sources: ["https://en.wikipedia.org/wiki/Day_of_the_Dead", "https://ich.unesco.org/en/lists?RL=00054"],
      young: {
        body: [
          "In Mexico, at the start of November, families celebrate the Day of the Dead. It's a happy time, not a sad one.",
          "People believe their loved ones who have died come back to visit. So families make a special table with photos, candles and their favourite food.",
          "They use lots of orange flowers called marigolds. The bright colour and smell are said to show the visitors the way home.",
        ],
        takeaway: "On the Day of the Dead, Mexican families welcome loved ones back with photos, food and orange flowers.",
        qs: [
          {
            q: "Which country celebrates the Day of the Dead?",
            o: ["Iceland", "Mexico", "Japan"],
            a: 1,
            why: "At the start of November.",
          },
          {
            q: "What goes on the special table?",
            o: ["Photos, candles and favourite food", "Homework", "Toy cars"],
            a: 0,
            why: "It's to welcome visitors.",
          },
          {
            q: "What are the orange flowers for?",
            o: ["Eating", "Throwing at people", "Showing the visitors the way home"],
            a: 2,
            why: "They are called marigolds.",
          },
        ],
      },
    },
    {
      id: "b107",
      subject: "Language",
      title: "Do the Inuit have 100 words for snow?",
      body: [
        "It's one of the most repeated facts about language: the Inuit have dozens, or hundreds, of words for snow. It started in 1911, when the anthropologist Franz Boas mentioned four separate root words for snow in an Inuit language, to show that languages divide the world differently. Over the decades, retellings inflated the number to 50, 100 and even 400.",
        "In 1986 the anthropologist Laura Martin traced how the claim had grown, and the linguist Geoffrey Pullum later called it \"the great Eskimo vocabulary hoax\". Part of the problem is that Inuit languages build long words by adding endings, so one root can make endless words, just as English can say snowdrift, snowfall and slush.",
        "The story has a twist. Later studies of Arctic communities found that some dialects really do have many distinct words for sea ice and snow, because travelling safely depends on telling them apart.",
      ],
      takeaway: "The \"100 words for snow\" grew from Boas's four roots in 1911; Inuit words stack endings, though Arctic dialects do have rich ice and snow vocabularies.",
      qs: [
        {
          q: "Where did the \"Inuit words for snow\" idea start?",
          o: ["A 1911 book by Franz Boas mentioning four roots", "A 1970s TV show", "An Inuit dictionary with 400 words", "A school textbook"],
          a: 0,
          why: "Later retellings inflated the number.",
        },
        {
          q: "Why is counting \"words for snow\" in Inuit languages tricky?",
          o: ["They don't write anything down", "There's no word for snow at all", "Words are built by adding endings, so one root makes many words", "Every village speaks English"],
          a: 2,
          why: "One root can grow into endless words.",
        },
        {
          q: "What did later Arctic studies find?",
          o: ["Inuit people rarely talk about snow", "There are exactly 100 words", "The words were all borrowed from Danish", "Some dialects do have many distinct ice and snow words"],
          a: 3,
          why: "Safe travel depends on telling them apart.",
        },
      ],
      daily: [0],
      sources: ["https://en.wikipedia.org/wiki/Eskimo_words_for_snow", "https://www.adn.com/rural-alaska/article/how-many-eskimo-words-snow-maybe-more-you-think/2013/01/16/"],
      young: {
        title: "How many words for snow?",
        body: [
          "The Inuit people live in the far north, where there is lots of snow and ice. People often say they have a hundred words for snow.",
          "That number grew bigger every time the story was told. Inuit languages join little word parts together. So you can make lots of new words from one word.",
          "But some Inuit languages really do have many words for different kinds of ice. Knowing them helps people travel safely.",
        ],
        takeaway: "The hundred-words-for-snow story grew over time, but some Inuit languages do have many words for ice.",
        qs: [
          {
            q: "Where do the Inuit live?",
            o: ["In the desert", "In the far north", "On a tropical island"],
            a: 1,
            why: "Where there is lots of snow and ice.",
          },
          {
            q: "What happened to the number of snow words over time?",
            o: ["It got bigger with each telling", "It stayed the same", "It went to zero"],
            a: 0,
            why: "Stories often grow when retold.",
          },
          {
            q: "Why do ice words help?",
            o: ["They rhyme", "They are funny", "They help people travel safely"],
            a: 2,
            why: "Some ice is safe to walk on, some isn't.",
          },
        ],
      },
    },
    {
      id: "b108",
      subject: "Culture",
      title: "Why Holi is a festival of colours",
      body: [
        "Holi is a Hindu spring festival celebrated across India, Nepal and wherever Hindu communities live, on the full moon of the month of Phalguna, usually in March. It marks the end of winter and the victory of good over evil.",
        "It starts the night before with bonfires for Holika Dahan. The story goes that the demon king Hiranyakashipu wanted his son Prahlad dead for worshipping the god Vishnu. His sister Holika, said to be protected from fire, sat in a fire with Prahlad on her lap. She burned, and Prahlad walked out unharmed.",
        "The next morning, people throw coloured powder and water at friends, family and strangers. That part is linked to Krishna, who in stories teased Radha by colouring her face. Traditional colours came from flowers such as the bright orange palash. For one day, many of the usual rules about age and status are relaxed.",
      ],
      takeaway: "Holi celebrates spring and good beating evil: bonfires recall Prahlad surviving Holika, and the colours recall Krishna playing with Radha.",
      qs: [
        {
          q: "What does the Holi bonfire, Holika Dahan, recall?",
          o: ["The end of a war", "Prahlad surviving a fire while Holika burned", "The first harvest", "A king's wedding"],
          a: 1,
          why: "It stands for good beating evil.",
        },
        {
          q: "Which god's stories are linked to throwing colours?",
          o: ["Ganesha", "Shiva", "Krishna", "Brahma"],
          a: 2,
          why: "Krishna playfully coloured Radha's face.",
        },
        {
          q: "When is Holi usually celebrated?",
          o: ["Around March, at the end of winter", "At midsummer", "In December", "On New Year's Day"],
          a: 0,
          why: "On the full moon of the month of Phalguna.",
        },
      ],
      daily: [1],
      sources: ["https://en.wikipedia.org/wiki/Holi", "https://en.wikipedia.org/wiki/Holika_Dahan"],
      young: {
        body: [
          "Holi is a Hindu festival in spring. It is celebrated in India, Nepal and all over the world.",
          "The night before, people light bonfires. They remember a story about a boy called Prahlad. A wicked aunt tried to burn him, but he stayed safe.",
          "The next day, everyone throws coloured powder and water at each other. The god Krishna is said to have loved playing with colours.",
        ],
        takeaway: "At Holi, people light bonfires for good beating bad, then throw bright colours to welcome spring.",
        qs: [
          {
            q: "What season is Holi in?",
            o: ["Winter", "Autumn", "Spring"],
            a: 2,
            why: "It welcomes the end of winter.",
          },
          {
            q: "Who stayed safe in the fire story?",
            o: ["Prahlad", "A dragon", "A king"],
            a: 0,
            why: "Good won over bad.",
          },
          {
            q: "What do people throw at Holi?",
            o: ["Snowballs", "Coloured powder and water", "Pillows"],
            a: 1,
            why: "It's a festival of colours.",
          },
        ],
      },
    },
  ],
};

export default pack;
