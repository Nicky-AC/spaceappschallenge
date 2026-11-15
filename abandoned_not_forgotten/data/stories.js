/*
  Sentinels of Silence - story cards.
  Facts come from the NASA pages listed in each card's "sources" and are collected in artifacts.json
  (fetched 2026-11-15). Texts were drafted with AI assistance (Claude, Anthropic) and reviewed by the author.
  lat: degrees north. lon: degrees east, from -180 to 180 (converted from the value NASA prints).
  bx / by: position in the "Beyond" drawing, in percent. That drawing is not to scale.
*/
window.ARTIFACTS = [
  /* ------------------------------ THE MOON ------------------------------ */
  {
    id: 'eagle', world: 'moon', name: 'Eagle, the Apollo 11 landing stage', short: 'Eagle (Apollo 11)',
    kind: 'Landing stage', place: 'Sea of Tranquility, the Moon', lat: 0.67416, lon: 23.47314,
    tagline: 'The launch pad that the first Moon walkers left behind.',
    image: { url: 'https://nssdc.gsfc.nasa.gov/planetary/image/ap11_lm_as11_40_5927.jpg', credit: 'NASA', alt: 'The Apollo 11 Lunar Module standing on the Moon' },
    facts: [['Landed', '20 July 1969'], ['Left behind', '21 July 1969'], ['Time on the Moon', '21 h 36 min']],
    story: [
      'In July 1969 a spidery spacecraft called Eagle carried Neil Armstrong and Buzz Aldrin down to the Moon. It was the first time people had ever landed on another world. There were no seats inside.',
      'Eagle was made of two halves. The bottom half had the landing engine, the fuel tanks and the landing legs. When it was time to go home, the top half blasted off and used the bottom half as its launch pad.',
      'So the bottom half stayed. On one of its legs there is a plaque saying that people from planet Earth first set foot on the Moon in July 1969, and that they came in peace for all mankind.'
    ],
    science: [
      'The astronauts collected 21.55 kg of Moon rock and soil to study on Earth.',
      'They set up a seismometer to listen for moonquakes and a detector to measure Moon dust.',
      'They left a special mirror that bounces laser light back to Earth. It needs no power at all.'
    ],
    ending: 'On 21 July 1969 the top half of Eagle lifted off with the two astronauts. The little science station they left stopped answering commands on 27 August 1969.',
    today: 'The landing stage is still at Tranquility Base, exactly where it touched down.',
    sources: [['NASA NSSDCA: Apollo 11 Lunar Module', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C']]
  },
  {
    id: 'lunar-rover', world: 'moon', name: 'The Apollo 15 Moon buggy', short: 'Moon buggy (Apollo 15)',
    kind: 'Rover', place: 'Near Hadley Rille, the Moon', lat: 26.13239, lon: 3.6333,
    tagline: 'The first car ever driven on another world.',
    image: { url: 'https://nssdc.gsfc.nasa.gov/planetary/image/as15_88_11901.jpg', credit: 'NASA', alt: 'The Apollo 15 Lunar Roving Vehicle parked on the Moon' },
    facts: [['Arrived', '30 July 1971'], ['Last drive', '2 August 1971'], ['Distance driven', '27.8 km']],
    story: [
      'Walking on the Moon in a bulky space suit is slow. So engineers built an electric car for it, in only 17 months. It folded up and travelled to the Moon hanging on the side of the lander.',
      'In 1971 astronauts David Scott and James Irwin unfolded it and went for a drive. They reached the edge of a long valley called Hadley Rille and the foot of the Apennine Mountains, places far too distant to reach on foot.',
      'Two more Moon buggies followed, on Apollo 16 and Apollo 17. All three were parked on the Moon when their crews went home.'
    ],
    science: [
      'With the buggy, the Apollo 15 crew explored up to 5 km away from their lander.',
      'They brought home 77.31 kg of rock and soil from three Moon walks.',
      'Astronaut Harrison Schmitt said the big discoveries of the last three Apollo missions would not have been possible without the rover.'
    ],
    ending: 'The buggy was driven for the last time on 2 August 1971, and the astronauts lifted off the same day. Its two batteries could not be recharged.',
    today: 'Three Moon buggies are parked on the Moon, one at each of the last three Apollo landing sites. The pin shows the Apollo 15 landing site.',
    sources: [
      ['NASA NSSDCA: Apollo 15 Lunar Module / Rover', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C'],
      ['NASA NSSDCA: The Apollo Lunar Roving Vehicle', 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html']
    ]
  },
  {
    id: 'alsep', world: 'moon', name: 'The Apollo 12 science station (ALSEP)', short: 'Science station (Apollo 12)',
    kind: 'Science instruments', place: 'Ocean of Storms, the Moon', lat: -3.0094, lon: -23.4246, nudge: [-13, -9],
    tagline: 'A little laboratory that kept working for almost eight years after the astronauts left.',
    image: { url: 'https://nssdc.gsfc.nasa.gov/planetary/image/apollo12_lunar_module.jpg', credit: 'NASA', alt: 'The Apollo 12 Lunar Module on the Moon' },
    facts: [['Switched on', '19 November 1969'], ['Switched off', '30 September 1977'], ['Power', 'About 70 watts']],
    story: [
      'Astronauts could only stay on the Moon for a few days. Scientists wanted measurements for years. The answer was ALSEP: a set of instruments the astronauts unpacked, plugged in and left running.',
      'A box in the middle, the central station, collected the measurements and radioed them to Earth. The astronauts aimed its antenna at our planet by hand. A small nuclear generator gave it about 70 watts of electricity, less than many light bulbs use.',
      'Later Apollo crews set up science stations of their own, so for a while several of them were working on the Moon at the same time.'
    ],
    science: [
      'Its seismometer recorded the first moonquake made on purpose: the crew\'s empty lander was crashed into the Moon about 60 km away.',
      'Its instruments were built to measure moonquakes, the Moon\'s magnetism, the solar wind and dust.',
      'It kept sending measurements to Earth from 1969 until 1977.'
    ],
    ending: 'On 30 September 1977 all the Apollo science stations on the Moon were switched off together.',
    today: 'The station is still where the astronauts set it up, switched off since 1977.',
    sources: [['NASA NSSDCA: Apollo 12 Lunar Module / ALSEP', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C']]
  },
  {
    id: 'surveyor-3', world: 'moon', name: 'Surveyor 3', short: 'Surveyor 3',
    kind: 'Robot lander', place: 'Ocean of Storms, the Moon', lat: -3.0162, lon: -23.418, nudge: [13, 9],
    tagline: 'The robot that bounced, dug holes, and got a visit from astronauts.',
    image: { url: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/as12-48-7134_1280.jpg?w=1280&h=1280&fit=clip&crop=faces%2Cfocalpoint', credit: 'NASA', alt: 'An Apollo 12 astronaut standing next to the Surveyor 3 lander on the Moon' },
    facts: [['Landed', '20 April 1967'], ['Last data', '4 May 1967'], ['Pictures sent', '6,326']],
    story: [
      'Before sending people to the Moon, NASA needed to know something important: is the ground strong enough to stand on, or would a spacecraft sink into dust? Seven robots called Surveyor went to find out.',
      'Surveyor 3 had a bumpy arrival. Shiny rocks confused its landing radar, so it bounced twice, first about 10 meters high and then 3 meters, before settling down inside a crater. Then it reached out with a little scoop and started digging.',
      'More than two years later it had visitors. The Apollo 12 astronauts landed about 180 meters away, walked over, and took some of its parts back to Earth.'
    ],
    science: [
      'Its scoop dug four trenches up to 18 cm deep and showed that Moon soil behaves like wet sand.',
      'Its tests showed the ground was firm enough to hold an Apollo lander.',
      'The parts brought home let scientists see what two and a half years on the Moon does to a machine.'
    ],
    ending: 'Two days after the long lunar night began, on 4 May 1967, Surveyor 3 sent its last data. The night on the Moon lasts two weeks, and the lander never woke up again.',
    today: 'It still sits in its crater, missing about 10 kg of parts. Its TV camera is on display at the Smithsonian National Air and Space Museum in Washington, D.C.',
    sources: [
      ['NASA Science: Surveyor 3', 'https://science.nasa.gov/mission/surveyor-3/'],
      ['NASA NSSDCA: Surveyor 3', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A']
    ]
  },

  /* -------------------------------- MARS -------------------------------- */
  {
    id: 'viking-1', world: 'mars', name: 'Viking 1 lander', short: 'Viking 1',
    kind: 'Lander', place: 'Chryse Planitia, Mars', lat: 22.483, lon: -47.94,
    tagline: 'It took the very first photograph from the ground on Mars.',
    image: { url: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia00/pia00381/PIA00381.tif?w=1280&fm=jpg', credit: 'NASA/JPL', alt: 'The first photograph taken on the surface of Mars, showing rocks and one of the lander\'s footpads' },
    facts: [['Landed', '20 July 1976'], ['Went quiet', 'November 1982'], ['Worked for', '6 years and 116 days']],
    story: [
      'In 1976 nobody knew what the ground of Mars looked like up close. Viking 1 changed that. It made the first truly successful landing on Mars and sent home the first photographs ever taken from the surface.',
      'The landing took patience. The spot chosen at first looked too rough in pictures from orbit, so scientists searched for a safer one before letting the lander go down.',
      'Viking 1 carried a tiny laboratory to answer a huge question: is there life on Mars? The results were puzzling, and the main test for the chemicals of life found none. But the lander kept working as a weather station for years.'
    ],
    science: [
      'It measured the weather: from minus 86 degrees Celsius before dawn to minus 33 in the afternoon.',
      'It found a lot of sulfur in the Martian soil.',
      'Its experiments found no proof of life, which taught scientists how tricky that question is.'
    ],
    ending: 'In November 1982 a faulty command sent from Earth interrupted its communications. Engineers tried to get it back, but they never heard from it again.',
    today: 'It is silent on Chryse Planitia, the "Golden Plain". It was renamed the Thomas Mutch Memorial Station, after the leader of the team that took its pictures.',
    sources: [
      ['NASA Science: Viking 1', 'https://science.nasa.gov/mission/viking-1/'],
      ['NASA NSSDCA: Viking 1 Lander', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1975-075C']
    ]
  },
  {
    id: 'viking-2', world: 'mars', name: 'Viking 2 lander', short: 'Viking 2',
    kind: 'Lander', place: 'Utopia Planitia, Mars', lat: 47.968, lon: 134.29,
    tagline: 'The twin that landed with one foot on a rock.',
    image: { url: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/PIA01522.jpg?w=1280&h=1010&fit=clip&crop=faces%2Cfocalpoint', credit: 'NASA/JPL-Caltech', alt: 'The rocky plain of Utopia Planitia seen by the Viking 2 lander' },
    facts: [['Landed', '3 September 1976'], ['Went quiet', 'April 1980'], ['Worked for', '1,281 Martian days']],
    story: [
      'Viking 2 was the twin of Viking 1. It was supposed to launch first, but a battery problem made it go second, and that is how it got its number.',
      'It landed about 6,460 km away from its twin, on a wide plain called Utopia Planitia, and came to rest tilted, with one leg on top of a rock.',
      'Like its twin, it scooped up soil and tested it for signs of life. Together the two landers sent 4,500 photos of their landing sites back to Earth.'
    ],
    science: [
      'Its life experiments gave the same unclear answer as Viking 1: no proof of life.',
      'Scientists worked out that sunlight makes chemicals in the Martian soil that can look like signs of life.',
      'Its cameras showed a flatter, rockier landscape than the one Viking 1 saw.'
    ],
    ending: 'The lander kept sending data until April 1980, when its batteries failed and it was turned off.',
    today: 'It is silent on Utopia Planitia. In 2001 it was renamed the Gerald Soffen Memorial Station, after the lead scientist of the Viking project.',
    sources: [
      ['NASA Science: Viking 2', 'https://science.nasa.gov/mission/viking-2/'],
      ['NASA NSSDCA: Viking 2 Lander', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1975-083C']
    ]
  },
  {
    id: 'sojourner', world: 'mars', name: 'Sojourner', short: 'Sojourner',
    kind: 'Rover', place: 'Ares Vallis, Mars', lat: 19.33, lon: -33.55,
    tagline: 'The first wheels on Mars belonged to a rover only 30 cm tall.',
    image: { url: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/p/i/a/0/PIA01551-1.jpg?w=1099&h=572&fit=clip&crop=faces%2Cfocalpoint', credit: 'NASA/JPL-Caltech', alt: 'The small Sojourner rover on the surface of Mars' },
    facts: [['Landed', '4 July 1997'], ['Last message', '27 September 1997'], ['Size', '10.6 kg, 30 cm tall']],
    story: [
      'How do you land on Mars without spending a fortune? In 1997 NASA tried something bold: wrap the spacecraft in airbags and let it bounce. Mars Pathfinder hit the ground and bounced like a giant beach ball about 15 times, as high as 15 meters.',
      'Two days later out rolled Sojourner, the first robot rover ever to drive on Mars. It was tiny: 10.6 kg and just 30 cm tall.',
      'Sojourner carried cameras and an instrument that could tell what the rocks and soil of Mars are made of. It is named after Sojourner Truth, an American woman who fought for people\'s rights.'
    ],
    science: [
      'It found rounded pebbles, a clue that water once flowed there when Mars was warmer.',
      'The mission sent back more than 16,500 pictures from the lander and 550 from the rover.',
      'It saw dust devils and thin clouds of water ice in the early morning.'
    ],
    planned_days: 7, actual_days: 85,
    planned_label: 'Main goals: its first 7 Martian days', actual_label: 'Lander and rover sent data for about 12 weeks',
    ending: 'Sojourner could only talk to Earth through its lander. On 27 September 1997 the lander went silent, and nobody knows exactly why.',
    today: 'The rover and its lander, now called the Carl Sagan Memorial Station, have been quiet in Ares Vallis since 1997.',
    sources: [
      ['NASA Science: Mars Pathfinder', 'https://science.nasa.gov/mission/mars-pathfinder/'],
      ['NASA NSSDCA: Mars Pathfinder Rover', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=MESURPR']
    ]
  },
  {
    id: 'spirit', world: 'mars', name: 'Spirit', short: 'Spirit',
    kind: 'Rover', place: 'Gusev Crater, Mars', lat: -14.5692, lon: 175.4729, nudge: [-12, 0],
    tagline: 'A broken wheel turned into its greatest discovery.',
    image: { url: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/rover2-1.jpg?w=1280&h=960&fit=clip&crop=faces%2Cfocalpoint', credit: 'NASA/JPL-Caltech (illustration)', alt: 'Illustration of a Mars Exploration Rover on Mars' },
    facts: [['Landed', 'January 2004'], ['Last message', '22 March 2010'], ['Distance driven', '7.73 km']],
    story: [
      'Spirit was a robot geologist about the size of a golf cart. It landed in Gusev Crater, a place that may once have been a lake, to look for clues of ancient water.',
      'After years of driving, one of its front wheels broke. Spirit kept going, dragging the broken wheel along. And the dragging wheel scraped open the ground and uncovered bright soil.',
      'That soil was almost pure silica, a material that forms in hot springs and steam vents. The broken wheel had found some of the best proof that Mars was once much wetter.'
    ],
    science: [
      'It found nearly pure silica, the kind of material made by hot springs.',
      'It found signs of an ancient volcanic explosion at a place called Home Plate.',
      'It filmed dust devils spinning across Mars. Some of them even cleaned the dust off its solar panels.'
    ],
    planned_days: 90, actual_days: 2269,
    planned_label: '90 Martian days', actual_label: '6 years, 2 months and 19 days',
    wow: 'NASA says that is more than 25 times its planned lifetime!',
    ending: 'In May 2009 Spirit got stuck in soft soil. It was last heard from on 22 March 2010, most probably because of the extreme cold.',
    today: 'Spirit rests beside Home Plate in Gusev Crater. Its landing site is called the Columbia Memorial Station.',
    sources: [
      ['NASA Science: Spirit', 'https://science.nasa.gov/mission/mer-spirit/'],
      ['NASA Science: Spirit and Opportunity science highlights', 'https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-highlights/'],
      ['NASA NSSDCA: Spirit', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2003-027A']
    ]
  },
  {
    id: 'opportunity', world: 'mars', name: 'Opportunity', short: 'Opportunity',
    kind: 'Rover', place: 'Meridiani Planum, Mars', lat: -1.9483, lon: -5.52583,
    tagline: 'Built for 90 days. It drove a marathon instead.',
    image: { url: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/3447/solar_panels_on_rover_seen_from_above.jpeg?w=1238&h=968&fit=clip&crop=faces%2Cfocalpoint', credit: 'NASA/JPL-Caltech/Cornell Univ./Arizona State Univ.', alt: 'Self-portrait of the Opportunity rover seen from above, showing its solar panels' },
    facts: [['Landed', 'January 2004'], ['Last message', '10 June 2018'], ['Distance driven', '45.16 km']],
    story: [
      'Opportunity was Spirit\'s twin, sent to the other side of Mars. Its landing was so lucky that NASA called it a hole in one: it came to a stop inside a small crater.',
      'It was built to work for 90 Martian days and drive 1,000 meters. Instead it kept going for almost 15 years and drove 45.16 km. It was the first vehicle to drive more than a marathon on another world.',
      'Along the way it found tiny round grains that scientists nicknamed "blueberries". They are made of a mineral that usually forms in water.'
    ],
    science: [
      'The "blueberries" showed that water was once there.',
      'It found bright veins of gypsum, left by water flowing through cracks in the rock.',
      'It found clay made in water that was not acid: the friendliest place for tiny living things of all the places it studied.',
      'It discovered a meteorite made of iron and nickel lying on the ground.'
    ],
    planned_days: 90, actual_days: 5250,
    planned_label: '90 Martian days', actual_label: 'Almost 15 years',
    wow: 'NASA says it lasted 60 times longer than planned!',
    ending: 'In 2018 a dust storm covered the whole planet and blocked the sunlight that Opportunity needed. Its last signal arrived on 10 June 2018, and NASA declared the mission complete on 13 February 2019.',
    today: 'Opportunity rests in Perseverance Valley, on the rim of Endeavour Crater.',
    sources: [
      ['NASA Science: Opportunity', 'https://science.nasa.gov/mission/mer-opportunity/'],
      ['NASA Science: Spirit and Opportunity science highlights', 'https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-highlights/'],
      ['NASA NSSDCA: Opportunity', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2003-032A']
    ]
  },
  {
    id: 'phoenix', world: 'mars', name: 'Phoenix', short: 'Phoenix',
    kind: 'Lander', place: 'Arctic plains of Mars', lat: 68.22, lon: -125.75,
    tagline: 'It dug into the frozen north of Mars and touched ice.',
    image: { url: 'https://science.nasa.gov/wp-content/uploads/2024/03/phoenix-lander2.jpg?w=1280', credit: 'NASA/JPL-Caltech/UA/Lockheed Martin (lander being tested on Earth)', alt: 'The Phoenix lander with its round solar panels open during a test on Earth' },
    facts: [['Landed', '25 May 2008'], ['Last message', '2 November 2008'], ['Where', 'As far north as Alaska is on Earth']],
    story: [
      'Phoenix went where no lander had gone before: the far north of Mars, a frozen plain. While it floated down under its parachute, a spacecraft orbiting Mars took its picture. It was the first time one spacecraft photographed another one landing on a planet.',
      'After landing, Phoenix waited 15 minutes for the dust to settle before opening its round solar panels. Then it started digging with its robot arm.',
      'In one trench it uncovered bright chunks. Four days later they were gone. They had vanished, just as ice would. Phoenix had touched the water ice of Mars.'
    ],
    science: [
      'It confirmed that water ice lies just under the ground in the Martian arctic.',
      'It discovered a chemical called perchlorate in the soil, which some microbes could use for energy.',
      'Its tiny chemistry lab found that the soil was alkaline and had salts in it.'
    ],
    planned_days: 90, actual_days: 161,
    planned_label: '90 days', actual_label: 'A little over 5 months',
    ending: 'When summer ended in the Martian north, the Sun sank low and the solar panels could not make enough power. Phoenix sent its last message on 2 November 2008.',
    today: 'The lander is still on the arctic plain where it touched down.',
    sources: [
      ['NASA Science: Phoenix', 'https://science.nasa.gov/mission/phoenix/'],
      ['NASA NSSDCA: Phoenix', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2007-034A']
    ]
  },
  {
    id: 'insight', world: 'mars', name: 'InSight', short: 'InSight',
    kind: 'Lander', place: 'Elysium Planitia, Mars', lat: 4.5, lon: 135.9,
    tagline: 'The lander that listened to the heartbeat of Mars.',
    image: { url: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/downloadable_items/3/8/38686_Mars-InSight-Solar-Panels-Open-pia196641.jpg?w=1280&h=853&fit=clip&crop=faces%2Cfocalpoint', credit: 'NASA/JPL-Caltech/Lockheed Martin Space (lander in a clean room on Earth)', alt: 'The InSight lander with its solar panels open in a clean room on Earth' },
    facts: [['Landed', '26 November 2018'], ['Last message', '15 December 2022'], ['Marsquakes felt', 'More than 1,300']],
    story: [
      'Most Mars robots look at the surface. InSight was sent to study what is deep inside. It did not drive anywhere. It sat very still and listened.',
      'It placed a very sensitive seismometer on the ground, an instrument that feels the planet shake. Quakes travel through a planet, so by listening to them scientists can work out what the inside is like, a bit like a doctor listening to your chest.',
      'InSight also recorded the low rumble of the Martian wind, and it sensed thousands of dust devils passing by, although its cameras never managed to see one.'
    ],
    science: [
      'It made the first detection ever of quakes on Mars.',
      'It found that the core of Mars is molten and bigger than expected, about 1,800 km in radius.',
      'It felt a quake made by a space rock hitting Mars. The crash dug up buried ice.',
      'It made the most complete weather record of any mission on the surface of Mars.'
    ],
    planned_days: 729, actual_days: 1480,
    planned_label: 'About 2 years', actual_label: 'About 4 years',
    ending: 'Its last message arrived on 15 December 2022. After two more tries to reach it, NASA declared the mission over. Most likely its solar-charged batteries could no longer keep it running.',
    today: 'The retired lander sits on Elysium Planitia. A NASA spacecraft orbiting Mars has spotted it from above.',
    sources: [
      ['NASA Science: InSight', 'https://science.nasa.gov/mission/insight/'],
      ['NASA Science: InSight science highlights', 'https://science.nasa.gov/mission/insight/science-highlights/'],
      ['NASA NSSDCA: InSight', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2018-042A']
    ]
  },
  {
    id: 'ingenuity', world: 'mars', name: 'Ingenuity', short: 'Ingenuity',
    kind: 'Helicopter', place: 'Jezero Crater, Mars', lat: 18.4, lon: 77.5,
    tagline: 'The first aircraft to fly on another planet.',
    image: { url: 'https://science.nasa.gov/wp-content/uploads/2024/03/25762-pia24443-1200-0657a5.jpg?w=1200', credit: 'NASA/JPL-Caltech/MSSS', alt: 'The Ingenuity helicopter standing on the surface of Mars' },
    facts: [['Arrived', '18 February 2021'], ['Last flight', '18 January 2024'], ['Mass', '1.8 kg']],
    story: [
      'The air on Mars is so thin that many people wondered if anything could fly there. Ingenuity was built to find out. It weighed only 1.8 kg and travelled to Mars strapped under the belly of the Perseverance rover.',
      'On 19 April 2021 it made the first powered, controlled flight on another planet. People called it a "Wright Brothers moment", after the brothers who made the first airplane flights on Earth.',
      'The plan was to try no more than five flights in 30 days. Ingenuity flew 72 times. It became a scout, flying ahead to show the rover team what was coming.'
    ],
    science: [
      'It proved that powered, controlled flight is possible on another planet.',
      'It flew for 128.8 minutes in total, covered 17 km and climbed as high as 24 meters.',
      'It opened the way for future aircraft on Mars and maybe on other worlds.'
    ],
    planned_days: 30, actual_days: 1004,
    planned_label: 'Up to 5 flights in 30 days', actual_label: '72 flights in almost 3 years',
    wow: 'It was meant to fly 5 times. It flew 72 times!',
    ending: 'At the end of its flight on 18 January 2024 it lost contact just before landing, dropped about one meter and damaged its rotor blades. It could not fly again.',
    today: 'Ingenuity stays in Jezero Crater. NASA is using what it learned to design the next Mars helicopters. The pin shows roughly where Jezero Crater is.',
    sources: [
      ['NASA Science: Ingenuity Mars Helicopter', 'https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/'],
      ['NASA NSSDCA: Mars 2020', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2020-052A']
    ]
  },

  /* ------------------------------- BEYOND ------------------------------- */
  {
    id: 'kepler', world: 'beyond', name: 'Kepler space telescope', short: 'Kepler',
    kind: 'Space telescope', place: 'Circling the Sun, behind the Earth', bx: 8.3, by: 67.2,
    tagline: 'It taught us that there are more planets than stars.',
    image: { url: 'https://images-assets.nasa.gov/image/ACD18-0204-002/ACD18-0204-002~large.jpg?w=1280&h=720&fit=clip&crop=faces%2Cfocalpoint', credit: 'NASA/Ames Research Center/W. Stenzel/D. Rutter (illustration)', alt: 'Illustration of the Kepler space telescope' },
    facts: [['Launched', 'March 2009'], ['Retired', '30 October 2018'], ['Planets found', 'More than 2,600']],
    story: [
      'Are there other planets like Earth out there? Kepler was NASA\'s first planet hunter. It stared at one patch of the sky and watched about 100,000 stars at the same time.',
      'Its trick was simple and clever. When a planet passes in front of its star, the star gets a tiny bit dimmer. Kepler watched for those little dips of light.',
      'Then two of the wheels that kept it pointed failed. Engineers found a way to steady it using the gentle push of sunlight, like a kayak steering into the current, and Kepler went on hunting.'
    ],
    science: [
      'It discovered more than 2,600 planets around other stars.',
      'It showed that our galaxy has more planets than stars.',
      'It found the first Earth-size planet where it is neither too hot nor too cold for liquid water, called Kepler-186f.',
      'It found a planet with two suns, Kepler-16b.'
    ],
    planned_days: 1278, actual_days: 3525,
    planned_label: 'Three and a half years', actual_label: 'Nine years',
    ending: 'In 2018 Kepler ran out of the fuel it needed to keep working. NASA retired it and left it in its safe orbit, far from Earth.',
    today: 'The telescope keeps circling the Sun, following the Earth from far behind.',
    sources: [
      ['NASA Science: Kepler / K2', 'https://science.nasa.gov/mission/kepler/'],
      ['NASA NSSDCA: Kepler', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2009-011A']
    ]
  },
  {
    id: 'near-shoemaker', world: 'beyond', name: 'NEAR Shoemaker', short: 'NEAR Shoemaker',
    kind: 'Spacecraft', place: 'On the asteroid Eros', bx: 12.8, by: 34.4,
    tagline: 'It was never built to land. It landed anyway.',
    image: { url: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/nearspacecraft.jpg?w=1350&h=1024&fit=clip&crop=faces%2Cfocalpoint', credit: 'NASA (illustration)', alt: 'Illustration of the NEAR Shoemaker spacecraft' },
    facts: [['Reached Eros', '14 February 2000'], ['Touched down', '12 February 2001'], ['Last message', '28 February 2001']],
    story: [
      'Eros is an asteroid, a mountain of rock travelling around the Sun. In 2000 NEAR Shoemaker became the first spacecraft ever to orbit an asteroid. For a year it circled Eros, taking pictures and measuring.',
      'It was never designed to land. But when its work was done, the team decided to try something daring: lower it gently, very gently, onto the asteroid.',
      'It touched down at about 6 km per hour, the speed of a brisk walk, and it survived. It even kept sending measurements from the surface for about two weeks.'
    ],
    science: [
      'It sent about 160,000 pictures, ten times more data than planned.',
      'It showed that Eros has no magnetic field.',
      'It found that Eros is about as dense as the rocky crust of the Earth.',
      'On the way it flew past another asteroid, Mathilde, and found it covered in craters.'
    ],
    ending: 'After two weeks on the surface the extreme cold was too much, and the last contact was on 28 February 2001.',
    today: 'NEAR Shoemaker rests on Eros and rides around the Sun with it. NASA tried calling it in December 2002, but it did not answer.',
    sources: [
      ['NASA Science: NEAR Shoemaker', 'https://science.nasa.gov/mission/near-shoemaker/'],
      ['NASA NSSDCA: NEAR Shoemaker', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1996-008A']
    ]
  },
  {
    id: 'dawn', world: 'beyond', name: 'Dawn', short: 'Dawn',
    kind: 'Spacecraft', place: 'Orbiting the dwarf planet Ceres', bx: 24.2, by: 70.5,
    tagline: 'One spacecraft, two worlds, and a mystery of bright spots.',
    image: { url: 'https://science.nasa.gov/wp-content/uploads/2018/10/pia21906-ceres-full-globe-1280x900-1.jpg?w=1280', credit: 'NASA/JPL-Caltech/UCLA/MPS/DLR/IDA (Ceres, photographed by Dawn)', alt: 'The dwarf planet Ceres with its bright spots, photographed by Dawn' },
    facts: [['Launched', '27 September 2007'], ['Reached Ceres', 'March 2015'], ['Went quiet', '31 October 2018']],
    story: [
      'Between Mars and Jupiter there is a belt of rocky leftovers from the time the planets were born. Dawn went there to visit the two biggest ones: the giant asteroid Vesta and the dwarf planet Ceres.',
      'Dawn had unusual engines. They give a gas called xenon an electric charge and shoot it out to push the spacecraft. With its solar panels open Dawn is as long as a big truck, almost 20 meters.',
      'As Dawn got closer to Ceres, its pictures showed strange bright spots shining on the surface. Everyone wondered what they were. Up close, Dawn found the answer: they are deposits of salt.'
    ],
    science: [
      'The bright spots on Ceres are deposits of salts.',
      'It found plenty of ice on Ceres.',
      'It proved that a family of meteorites found on Earth came from Vesta.',
      'It was the first spacecraft to orbit an asteroid in the main belt and the first to reach a dwarf planet.'
    ],
    planned_days: 3199, actual_days: 4052,
    planned_label: 'Main mission: until June 2016', actual_label: 'Kept working until October 2018',
    ending: 'On 31 October 2018 Dawn ran out of the fuel it used to turn. It could no longer point its antenna at Earth or its solar panels at the Sun, and its radio signal was lost.',
    today: 'Dawn is still circling Ceres, silent. NASA expects it to stay in orbit there for at least decades.',
    sources: [
      ['NASA Science: Dawn', 'https://science.nasa.gov/mission/dawn/'],
      ['NASA Science: Dawn at Ceres', 'https://science.nasa.gov/mission/dawn/science/ceres/'],
      ['NASA NSSDCA: Dawn', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2007-043A']
    ]
  },
  {
    id: 'pioneer-10', world: 'beyond', name: 'Pioneer 10', short: 'Pioneer 10',
    kind: 'Space probe', place: 'Leaving the solar system', bx: 90, by: 22,
    tagline: 'It carries a postcard from Earth toward the stars.',
    image: { url: 'https://science.nasa.gov/wp-content/uploads/2023/04/jupiter_pioneer_10_art-jpg.webp?w=1280', credit: 'NASA (illustration)', alt: 'Illustration of Pioneer 10 flying past Jupiter' },
    facts: [['Launched', 'March 1972'], ['Passed Jupiter', '4 December 1973'], ['Last signal', '23 January 2003']],
    story: [
      'In 1972 nobody knew if a spacecraft could cross the asteroid belt without being smashed to pieces. Pioneer 10 was sent to try. It made it through, and was hit by far fewer bits of rock than people had feared.',
      'Then it flew past Jupiter and took about 500 pictures of the giant planet, with its Great Red Spot clearly visible.',
      'Pioneer 10 never came back. It kept going, past all the planets. It carries a metal plaque with drawings of a man and a woman and a map showing where Earth is, in case someone, someday, finds it.'
    ],
    science: [
      'It was the first spacecraft to cross the asteroid belt.',
      'It was the first to take close-up pictures of Jupiter and of its moon Ganymede.',
      'It discovered that Jupiter\'s magnetic tail is almost 800 million km long, reaching all the way to the orbit of Saturn.'
    ],
    planned_days: 640, actual_days: 11284,
    planned_label: '21 months', actual_label: 'More than 30 years',
    ending: 'Its nuclear power source slowly faded until its radio became too weak. The last signal, received on 23 January 2003, took 11 hours and 20 minutes to reach Earth.',
    today: 'Pioneer 10 is drifting out of the solar system, toward the red star Aldebaran. It should pass it in about two million years.',
    sources: [
      ['NASA Science: Pioneer 10', 'https://science.nasa.gov/mission/pioneer-10/'],
      ['NASA NSSDCA: Pioneer 10', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-012A']
    ]
  },
  {
    id: 'pioneer-11', world: 'beyond', name: 'Pioneer 11', short: 'Pioneer 11',
    kind: 'Space probe', place: 'Leaving the solar system', bx: 88, by: 78,
    tagline: 'The first visitor Saturn ever had.',
    image: { url: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/Pioneer11_1600.jpg?w=1280&h=720&fit=clip&crop=faces%2Cfocalpoint', credit: 'NASA (illustration)', alt: 'Illustration of the Pioneer 11 spacecraft' },
    facts: [['Launched', '6 April 1973'], ['Passed Saturn', '1 September 1979'], ['Science ended', '30 September 1995']],
    story: [
      'Pioneer 11 was the sister ship of Pioneer 10. It also flew past Jupiter, so fast that it broke the speed record for anything made by people: more than 106,000 miles per hour, which is about 170,000 km per hour.',
      'Then it headed for Saturn. In 1979 Pioneer 11 became the first spacecraft ever to visit the ringed planet, passing about 21,000 km above it.',
      'Like its sister, it carries a small metal plaque with a message for anyone who might find it. The idea came from the astronomer Carl Sagan.'
    ],
    science: [
      'It was the first spacecraft to fly by Saturn.',
      'It discovered a thin ring around Saturn, now called the F ring, and a new moon.',
      'It gave the first clear proof that Saturn has a magnetic field.',
      'It sent the first pictures of the poles of Jupiter.'
    ],
    ending: 'By 30 September 1995 its nuclear generators could no longer power any experiment. Scientists caught a few more minutes of data that November, and then lost it for good.',
    today: 'Pioneer 11 is on its way out of the solar system. It should pass near a star called Lambda Aquilae in almost four million years.',
    sources: [
      ['NASA Science: Pioneer 11', 'https://science.nasa.gov/mission/pioneer-11/'],
      ['NASA NSSDCA: Pioneer 11', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1973-019A']
    ]
  }
];
