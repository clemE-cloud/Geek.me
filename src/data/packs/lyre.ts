import type { Pack } from "../../lib/types";

const pack: Pack = {
  id: "lyre",
  name: "The Lyre",
  theme: "Sky & sound",
  blurb: "Starlight, planets and the physics of music.",
  lessons: [
    {
      id: "b14",
      subject: "Space",
      title: "You're always seeing the past",
      body: [
        "Light is fast, about 300,000 km per second, but not instant. Sunlight takes roughly 8 minutes and 20 seconds to reach Earth. If the Sun vanished, you wouldn't know for over eight minutes.",
        "The nearest star after the Sun, Proxima Centauri, is about 4.24 light-years away. The light you see from it left the star more than four years ago. Light from the Andromeda Galaxy set off about 2.5 million years ago.",
        "Looking out into space is looking back in time. That's how astronomers study the early universe: the most distant galaxies show us how things were billions of years ago.",
      ],
      takeaway: "Light takes time to travel, so everything you see in the sky is how it was, not how it is.",
      qs: [
        {
          q: "How long does sunlight take to reach Earth?",
          o: ["1 second", "About 1 hour", "About 8 minutes 20 seconds", "About 1 day"],
          a: 2,
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
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Speed_of_light"],
      young: {
        body: [
          "Light is the fastest thing there is, but it still takes time to travel.",
          "Sunlight takes about 8 minutes to reach Earth. So the Sun you see is the Sun as it was 8 minutes ago. (Never look straight at it.)",
          "Light from the nearest star after the Sun takes over 4 years to get here. Looking at the stars means looking back in time.",
        ],
        takeaway: "Light takes time to travel, so you see stars as they were in the past.",
        qs: [
          {
            q: "How long does sunlight take to reach Earth?",
            o: ["About 8 seconds", "About 8 minutes", "About 8 days"],
            a: 1,
            why: "It travels about 150 million km to get here.",
          },
          {
            q: "When you look at a star, you see it…",
            o: ["As it will be tomorrow", "As it was in the past", "Exactly as it is now"],
            a: 1,
            why: "Its light left the star long ago.",
          },
          {
            q: "Light from the nearest star after the Sun takes…",
            o: ["1 minute", "1,000 years", "Over 4 years"],
            a: 2,
            why: "That star, Proxima Centauri, is over 4 light-years away.",
          },
        ],
      },
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
        { q: "How many semitones are in an octave?", o: ["7", "8", "12", "16"], a: 2, why: "The chromatic scale has 12." },
        {
          q: "In equal temperament, each semitone multiplies frequency by…",
          o: ["2", "1.5", "12", "The twelfth root of 2"],
          a: 3,
          why: "About 1.0595, so 12 steps give ×2.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Octave"],
      young: {
        body: [
          "Sing a low note, then the same note higher up. They sound like the same note, only higher. That gap is called an octave.",
          "Sound is made of vibrations. The higher note vibrates exactly twice as fast as the lower one.",
          "The note A that orchestras tune to vibrates 440 times every second. The A one octave higher vibrates 880 times a second.",
        ],
        takeaway: "A note one octave higher vibrates twice as fast.",
        qs: [
          {
            q: "The note an octave higher vibrates…",
            o: ["Twice as fast", "Half as fast", "At the same speed"],
            a: 0,
            why: "Going up an octave doubles the speed.",
          },
          {
            q: "If an A vibrates 440 times a second, the A an octave up vibrates…",
            o: ["220 times", "880 times", "4,400 times"],
            a: 1,
            why: "440 × 2 = 880.",
          },
          {
            q: "Sound is made of…",
            o: ["Light", "Vibrations", "Water"],
            a: 1,
            why: "Sound is things vibrating, and the air carrying it to your ears.",
          },
        ],
      },
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
          o: ["East", "North", "West", "It never rises"],
          a: 2,
          why: "Venus spins in the opposite direction to most planets.",
        },
        {
          q: "A Venus day compared with its year is…",
          o: ["Shorter", "Undefined", "The same", "Longer"],
          a: 3,
          why: "243 days to rotate versus 225 to orbit.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Venus"],
      young: {
        body: [
          "Venus spins very slowly. One full spin takes 243 Earth days.",
          "Venus goes all the way around the Sun in 225 Earth days. So one spin of Venus takes longer than one trip around the Sun.",
          "Venus also spins the opposite way to Earth. If you could see through its thick clouds, the Sun would rise in the west.",
        ],
        takeaway: "On Venus, one spin takes longer than one trip around the Sun.",
        qs: [
          {
            q: "How long does Venus take to spin once?",
            o: ["1 Earth day", "243 Earth days", "10 Earth years"],
            a: 1,
            why: "It's the slowest-spinning planet.",
          },
          {
            q: "Which takes longer on Venus?",
            o: ["They take the same time", "One trip around the Sun", "One spin"],
            a: 2,
            why: "243 days to spin, 225 days to go around the Sun.",
          },
          {
            q: "On Venus, the Sun would rise in the…",
            o: ["West", "North", "East"],
            a: 0,
            why: "Venus spins the opposite way to Earth.",
          },
        ],
      },
    },
    {
      id: "b36",
      subject: "Space",
      title: "Why we only see one side of the Moon",
      body: [
        "The Moon does spin. It turns once on its axis in the same time it takes to go once around Earth, about 27.3 days. Because the two match, the same side always faces us.",
        "This is called tidal locking. Earth's gravity stretches the Moon slightly, raising a bulge. Long ago, when the Moon spun faster, Earth kept tugging on that bulge and slowing the spin until the bulge pointed at Earth and stayed there. Many moons in the solar system are locked to their planets in the same way.",
        "The far side isn't permanently dark: it gets as much sunlight as the near side, just when we can't see it. And thanks to a slight wobble called libration, we actually see about 59% of the Moon's surface over time. Nobody saw the far side until the Soviet probe Luna 3 photographed it in 1959.",
      ],
      takeaway: "The Moon spins exactly once per orbit, so the same side always faces Earth.",
      qs: [
        {
          q: "Does the Moon spin?",
          o: ["No, never", "Yes, once a day", "Yes, once per orbit", "Only during eclipses"],
          a: 2,
          why: "About 27.3 days for a spin and an orbit.",
        },
        {
          q: "What locked the Moon's spin?",
          o: ["The Sun's heat", "Earth's gravity pulling on a bulge", "Meteor impacts", "Its magnetic field"],
          a: 1,
          why: "Tidal forces slowed the spin until it matched the orbit.",
        },
        {
          q: "Is the far side of the Moon always dark?",
          o: ["No, it gets as much sunlight", "Yes", "Only in winter", "It has no surface"],
          a: 0,
          why: "We just can't see it from Earth.",
        },
      ],
      daily: [0, 2],
      sources: ["https://en.wikipedia.org/wiki/Tidal_locking", "https://en.wikipedia.org/wiki/Far_side_of_the_Moon"],
      young: {
        body: [
          "Look at the Moon on different nights. You always see the same face, with the same dark patches.",
          "That's because the Moon spins around exactly once each time it goes around Earth. So the same side always points at us.",
          "The other side isn't dark all the time. It gets sunlight too, we just can't see it. Nobody saw it until a space probe took photos in 1959.",
        ],
        takeaway: "The Moon spins once each time it goes around Earth, so we always see the same side.",
        qs: [
          {
            q: "Which side of the Moon do we see?",
            o: ["A different side each night", "Only the dark side", "Always the same side"],
            a: 2,
            why: "Its spin matches its trip around Earth.",
          },
          {
            q: "Does the far side get sunlight?",
            o: ["Yes", "No, never", "Only at Christmas"],
            a: 0,
            why: "It's lit up when we can't see it.",
          },
          {
            q: "How did people first see the far side?",
            o: ["With a big telescope", "From photos taken by a space probe", "From a mountain"],
            a: 1,
            why: "A Soviet probe photographed it in 1959.",
          },
        ],
      },
    },
    {
      id: "b37",
      subject: "Music",
      title: "Why shorter strings sound higher",
      body: [
        "Pluck a guitar string and it vibrates along its whole length. Press it down at a fret and you shorten the part that vibrates, so it vibrates faster and the note goes up.",
        "The relationship is exact: halve the length and the frequency doubles, raising the note by an octave. That's why the 12th fret, halfway along the string, plays the same note an octave higher. Ancient Greek thinkers linked to Pythagoras noticed these neat ratios on a one-string instrument called a monochord.",
        "Length isn't the only control. Tighter strings vibrate faster, which is how you tune by turning the pegs. Heavier strings vibrate more slowly, which is why bass strings are thick. The French mathematician Marin Mersenne set out these three rules in 1636. Frets get closer together as you go up the neck because each semitone needs the same percentage change in length, not the same distance.",
      ],
      takeaway: "Halving a string's length doubles its frequency; tension and thickness change pitch too.",
      qs: [
        {
          q: "What happens to the note if you halve a string's length?",
          o: ["It goes down an octave", "It goes up an octave", "It stays the same", "It goes silent"],
          a: 1,
          why: "Half the length means double the frequency.",
        },
        {
          q: "What does tightening a string do?",
          o: ["Nothing", "Lowers the pitch", "Makes it louder only", "Raises the pitch"],
          a: 3,
          why: "Tighter strings vibrate faster.",
        },
        {
          q: "Why are frets closer together higher up the neck?",
          o: [
            "Each semitone needs the same percentage change in length",
            "To save wood",
            "For decoration",
            "Strings are thinner there",
          ],
          a: 0,
          why: "Equal ratios, not equal distances.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Mersenne%27s_laws", "https://en.wikipedia.org/wiki/Monochord"],
      young: {
        body: [
          "When you pluck a guitar string, it wiggles back and forth very fast. That wiggling makes the sound.",
          "If you press the string down, a shorter part wiggles. A shorter string wiggles faster, and the note sounds higher.",
          "Press exactly halfway and you get the same note, but higher. Tighter strings sound higher too. Thick, heavy strings sound lower.",
        ],
        takeaway: "Shorter, tighter or thinner strings sound higher.",
        qs: [
          {
            q: "What happens when you make a string shorter?",
            o: ["The note goes lower", "The note goes higher", "It stops making sound"],
            a: 1,
            why: "A shorter string wiggles faster.",
          },
          {
            q: "Which strings sound lowest?",
            o: ["Short and tight", "Thin and short", "Thick and heavy"],
            a: 2,
            why: "Heavy strings wiggle more slowly.",
          },
          {
            q: "What makes the sound?",
            o: ["The string wiggling", "The wood getting warm", "Your finger humming"],
            a: 0,
            why: "Fast wiggles push the air and make sound.",
          },
        ],
      },
    },
    {
      id: "b38",
      subject: "Space",
      title: "Neutron stars",
      body: [
        "When a giant star runs out of fuel, its core can collapse in under a second. Protons and electrons are crushed together into neutrons, leaving a ball about 20 kilometres across that holds more mass than the Sun.",
        "That makes neutron stars the densest objects we can see. A teaspoon of their material would weigh around a billion tonnes on Earth. Their gravity is so strong that light leaving them bends noticeably.",
        "Many spin very fast, some hundreds of times a second, and sweep beams of radio waves across space like a lighthouse. In 1967 the astronomy student Jocelyn Bell Burnell noticed a signal pulsing every 1.3 seconds. It was so regular that her team half-jokingly labelled it LGM-1, for 'little green men'. It turned out to be the first known pulsar: a spinning neutron star.",
      ],
      takeaway: "A neutron star packs more than the Sun's mass into a ball about 20 km wide.",
      qs: [
        {
          q: "About how wide is a neutron star?",
          o: ["20 metres", "2,000 kilometres", "20 kilometres", "As wide as the Sun"],
          a: 2,
          why: "More than the Sun's mass, squeezed into a city-sized ball.",
        },
        {
          q: "Who discovered the first pulsar?",
          o: ["Edwin Hubble", "Carl Sagan", "Galileo", "Jocelyn Bell Burnell"],
          a: 3,
          why: "She noticed the regular signal in 1967.",
        },
        {
          q: "What is a pulsar?",
          o: ["A comet", "A spinning neutron star", "A black hole", "An alien signal"],
          a: 1,
          why: "Its beam sweeps past us like a lighthouse.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Neutron_star", "https://en.wikipedia.org/wiki/Jocelyn_Bell_Burnell"],
      young: {
        body: [
          "When a giant star dies, its middle can squash down in less than a second. What's left can be a neutron star.",
          "A neutron star is only about as wide as a city. But it's heavier than the whole Sun! One teaspoon of it would weigh as much as a mountain.",
          "Some neutron stars spin hundreds of times a second and send out beams like a lighthouse. A young scientist called Jocelyn Bell Burnell found the first one in 1967.",
        ],
        takeaway: "A neutron star is as small as a city but heavier than the Sun.",
        qs: [
          {
            q: "How wide is a neutron star?",
            o: ["About as wide as a city", "As wide as Earth", "As wide as the Sun"],
            a: 0,
            why: "It's tiny for a star, about 20 km.",
          },
          {
            q: "A neutron star is heavier than…",
            o: ["A car", "The Sun", "Nothing"],
            a: 1,
            why: "It squeezes a huge amount into a small space.",
          },
          {
            q: "Who found the first spinning neutron star?",
            o: ["Isaac Newton", "Neil Armstrong", "Jocelyn Bell Burnell"],
            a: 2,
            why: "She spotted its regular signal in 1967.",
          },
        ],
      },
    },
    {
      id: "b39",
      subject: "Music",
      title: "Why some notes clash",
      body: [
        "Play two notes together and they either blend or grate. Much of the difference comes down to simple ratios. An octave is a 2:1 ratio of frequencies, and a perfect fifth, like C up to G, is close to 3:2. Their sound waves line up often, and they sound smooth.",
        "Notes very close in pitch do something else. Their waves drift in and out of step, so the combined sound swells and fades a few times a second. These pulses are called beats. Two notes 3 Hz apart produce three beats a second.",
        "Musicians use this to tune. As two strings get closer to the same pitch, the beats slow down and stop when they match. Which combinations sound pleasant also depends on culture and on what we're used to hearing, so the maths explains a lot, but not everything.",
      ],
      takeaway: "Notes with simple frequency ratios blend; nearly matching notes pulse with beats.",
      qs: [
        { q: "What ratio is a perfect fifth close to?", o: ["2:1", "3:2", "5:4", "9:8"], a: 1, why: "Like C to G." },
        {
          q: "Two notes 3 Hz apart make how many beats a second?",
          o: ["1", "6", "3", "None"],
          a: 2,
          why: "The beat rate equals the difference in frequency.",
        },
        {
          q: "How do musicians use beats?",
          o: ["To tune, listening for the beats to stop", "To keep time", "To play louder", "They don't"],
          a: 0,
          why: "Beats slow and vanish as pitches match.",
        },
      ],
      daily: [1],
      sources: ["https://en.wikipedia.org/wiki/Consonance_and_dissonance", "https://en.wikipedia.org/wiki/Beat_(acoustics)"],
      young: {
        body: [
          "Some notes sound nice together. Others sound a bit crunchy. Why?",
          "Every note is a vibration. When two notes vibrate in a simple pattern together, like one going twice as fast as the other, they sound smooth.",
          "When two notes are almost the same, but not quite, you hear a wobbly 'wah-wah' sound. Musicians listen for that wobble when they tune. When it stops, the notes match.",
        ],
        takeaway: "Notes sound smooth together when their vibrations fit a simple pattern.",
        qs: [
          {
            q: "Notes that vibrate in a simple pattern together sound…",
            o: ["Crunchy", "Silent", "Smooth"],
            a: 2,
            why: "Their vibrations line up often.",
          },
          {
            q: "What do two almost-matching notes make?",
            o: ["No sound", "A wobbly sound", "A drum sound"],
            a: 1,
            why: "The wobble is called beats.",
          },
          {
            q: "How do musicians know two notes match?",
            o: ["The wobble stops", "They look at the strings", "The notes get louder"],
            a: 0,
            why: "No wobble means the notes are the same.",
          },
        ],
      },
    },
    {
      id: "b40",
      subject: "Space",
      title: "Why Mars is red",
      body: [
        "Mars is red because it's rusty. Its rocks and dust contain a lot of iron, and over billions of years that iron reacted with small amounts of oxygen to form iron oxide, the same compound as rust on an old bike.",
        "Fine dust covers much of the planet, and global dust storms can lift it high into the thin air. That gives the daytime Martian sky a pale, butterscotch colour rather than blue.",
        "Sunsets go the other way. Mars's fine dust scatters blue light forward, close to the direction of the Sun, so the glow around the setting Sun looks blue. NASA's rovers have photographed it many times. On Earth, air molecules scatter blue light to the sides, which is why our sky is blue and our sunsets are red.",
      ],
      takeaway: "Iron oxide, or rust, in its dust makes Mars red, and its sunsets look blue.",
      qs: [
        {
          q: "What makes Mars red?",
          o: ["Hot lava", "Iron oxide, or rust", "Red plants", "Reflected light from the Sun"],
          a: 1,
          why: "Iron in its rocks and dust has oxidised.",
        },
        {
          q: "What colour are Martian sunsets?",
          o: ["Red", "Green", "Blue", "Purple"],
          a: 2,
          why: "Fine dust scatters blue light near the Sun's direction.",
        },
        {
          q: "What colour is the Martian daytime sky?",
          o: ["Deep blue", "Bright green", "Black", "Pale butterscotch"],
          a: 3,
          why: "Dust in the air tints it.",
        },
      ],
      daily: [0, 1],
      sources: ["https://en.wikipedia.org/wiki/Mars", "https://en.wikipedia.org/wiki/Atmosphere_of_Mars"],
      young: {
        body: [
          "Mars is called the red planet. It's red because it's rusty!",
          "Mars has lots of iron in its rocks and dust. Over a very long time, the iron turned to rust, just like an old bike left out in the rain.",
          "Here's something odd: on Mars, sunsets look blue. The dust in the air makes blue light shine around the setting Sun.",
        ],
        takeaway: "Mars is red because its dust is rusty, and its sunsets look blue.",
        qs: [
          {
            q: "Why is Mars red?",
            o: ["It's very hot", "Its dust is rusty", "It's painted"],
            a: 1,
            why: "Iron in the dust turned to rust.",
          },
          { q: "What colour are sunsets on Mars?", o: ["Pink", "Red", "Blue"], a: 2, why: "Martian dust makes the glow blue." },
          {
            q: "What is rust made from?",
            o: ["Iron", "Plastic", "Water and sand"],
            a: 0,
            why: "Iron reacts with oxygen to make rust.",
          },
        ],
      },
    },
  ],
};

export default pack;
