# Sentinels of Silence

**A map of the machines that stayed behind.** An interactive story map for children aged 8 to 11 about the hardware NASA left on the Moon, on Mars and beyond, and the science it made possible.

Project for the **2026 NASA Space Apps Challenge**, challenge *Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars*. Team **Centinela del Silencio** (Medellín Local Event, Colombia).

- Live page: https://nicky-ac.github.io/spaceappschallenge/abandoned_not_forgotten/
- Demo (7 slides): [`demo/Sentinels_of_Silence_demo.pdf`](demo/Sentinels_of_Silence_demo.pdf)

## What it does

The child chooses a place (the Moon, Mars or Beyond) and taps a glowing dot. Each dot is a real machine, pinned where NASA says it is. Its card tells:

- **The story**, in short sentences;
- **What it taught us**, the science it made possible;
- **The plan vs. for real**, a bar comparing how long it was meant to work with how long it did;
- **How it went quiet** and **where it is now**;
- **Check the facts**, with links to the NASA pages.

A counter ("Found 3 of 17") invites the child to find all 17 machines: the Apollo 11 landing stage, the Apollo 15 Moon buggy, the Apollo 12 science station, Surveyor 3, Viking 1 and 2, Sojourner, Spirit, Opportunity, Phoenix, InSight, Ingenuity, Kepler, NEAR Shoemaker, Dawn, and Pioneer 10 and 11.

## How it works

A single static web page: HTML, CSS and plain JavaScript, with no libraries and nothing to install. Open `index.html` through any web server, or visit the live page.

| File | Content |
|---|---|
| `index.html` | The page: map, pins, story panel, progress counter. |
| `data/stories.js` | The 17 story cards shown on the page. |
| `data/artifacts.json` | The facts collected from NASA pages, each entry with its sources and notes on where two NASA pages disagree. |
| `demo/` | The 7-slide demo (HTML source, screenshots and PDF). |

Latitude and longitude are converted to a position on an equirectangular map: `x = (lon + 180) / 360`, `y = (90 - lat) / 180`. The "Beyond" view is a drawing of the solar system and is not to scale.

Accessibility: every pin is a real button with a text label, the page works with the keyboard, images have descriptions, the list under the map gives the same access as the pins, and the pulsing animation is turned off for people who ask for reduced motion.

## NASA data and resources

- **NASA Space Science Data Coordinated Archive (NSSDCA)**, https://nssdc.gsfc.nasa.gov/ : spacecraft records with dates, landing coordinates, results and photographs.
- **NASA Science mission pages**, https://science.nasa.gov/ : Surveyor 3, Viking 1, Viking 2, Mars Pathfinder, Spirit and Opportunity, Phoenix, InSight, Ingenuity, Dawn, NEAR Shoemaker, Pioneer 10, Pioneer 11 and Kepler.
- **NASA Solar System Treks**, https://trek.nasa.gov/ : base maps. Moon: Lunar Reconnaissance Orbiter WAC global mosaic (NASA/GSFC/Arizona State University). Mars: Viking MDIM 2.1 colour mosaic (NASA/JPL/USGS).
- **Images** on the cards come from the NASA pages above; the credit is printed under each image.

The exact page behind every fact is listed in `data/artifacts.json` and under "Check the facts" on each card.

### Notes on accuracy

- Where two NASA pages give different days for the same event (for example the end of Viking 1, or dates given in U.S. time on one page and Universal Time on another), the card shows only the month.
- The NASA pages used do not print coordinates for Ingenuity, so its pin marks the approximate position of Jezero Crater. The Moon buggy pin marks the Apollo 15 landing site.
- The "plan vs. for real" bars use the durations stated by NASA; for Spirit and Opportunity the page quotes NASA's own comparison ("more than 25 times", "60 times").

## Use of AI

The code of the page and the first drafts of the texts and slides were written with AI assistance (Claude, by Anthropic). The facts were collected from the NASA pages listed above, and the texts were checked against them by the author. No AI-generated images, video or audio are used. This project is not endorsed by NASA and uses no NASA logos or insignia.
