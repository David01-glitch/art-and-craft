// Craft imagery (bundled ES-module imports — no runtime hotlinks)
import heroImg from '../assets/images/hero/hero.jpg'
import paintingImg from '../assets/images/crafts/painting.jpg'
import diyImg from '../assets/images/crafts/diy.jpg'
import paperImg from '../assets/images/crafts/paper.jpg'
import seasonalImg from '../assets/images/crafts/seasonal.jpg'
import paintingPageImg from '../assets/images/painting/painting.jpg'
import diyPageImg from '../assets/images/diy/diy.jpg'
import communityImg from '../assets/images/community/community.jpg'
import knittingImg from '../assets/images/blog/knitting.jpg'
import potteryImg from '../assets/images/blog/pottery.jpg'
import embroideryImg from '../assets/images/blog/embroidery.jpg'
import cardImg from '../assets/images/projects/card.jpg'
import macrameImg from '../assets/images/projects/macrame.jpg'
import candleImg from '../assets/images/projects/candle.jpg'

export const IMAGES = {
  hero: heroImg,
  painting: paintingImg,
  diy: diyImg,
  paper: paperImg,
  seasonal: seasonalImg,
  paintingPage: paintingPageImg,
  diyPage: diyPageImg,
  community: communityImg,
  knitting: knittingImg,
  pottery: potteryImg,
  embroidery: embroideryImg,
  card: cardImg,
  macrame: macrameImg,
  candle: candleImg,
}

export const CATEGORIES = [
  {
    slug: 'painting',
    title: 'Painting',
    to: '/painting',
    image: paintingImg,
    alt: 'A watercolour painting in progress with a loaded brush and paint tin',
    blurb:
      'Watercolour, acrylic, and gouache basics for beginners — color mixing, brush control, and simple studies you can finish in an afternoon.',
  },
  {
    slug: 'diy',
    title: 'DIY Crafts',
    to: '/diy',
    image: diyImg,
    alt: 'Assorted handmade craft materials laid out on a work surface',
    blurb:
      'Practical do-it-yourself projects using everyday materials — home décor, upcycling, and small woodworking you can make with basic tools.',
  },
  {
    slug: 'paper',
    title: 'Paper & Handmade',
    to: '/crafts',
    image: paperImg,
    alt: 'Colourful rolled-paper quilling craft close-up',
    blurb:
      'Paper crafts, quilling, origami, and handmade cards — approachable techniques that need little more than paper, glue, and patience.',
  },
  {
    slug: 'seasonal',
    title: 'Seasonal Crafts',
    to: '/crafts',
    image: seasonalImg,
    alt: 'A handmade decorative wreath',
    blurb:
      'Wreaths, garlands, and seasonal décor for holidays and changing weather — festive, budget-friendly makes for the whole year.',
  },
]

export const PROJECTS = [
  {
    title: 'Handmade Greeting Cards',
    image: cardImg,
    alt: 'A handmade greeting card with layered paper and hand-lettering',
    time: '30–45 min',
    level: 'Beginner',
    summary:
      'Fold, layer, and letter a simple card using cardstock and scraps. A friendly first paper project with room to make it your own.',
  },
  {
    title: 'Macramé Wall Hanging',
    image: macrameImg,
    alt: 'A knotted macramé wall hanging made from natural cord',
    time: '2–3 hours',
    level: 'Beginner–Intermediate',
    summary:
      'Learn two core knots — the square knot and the half-hitch — and combine them into a small wall hanging on a wooden dowel.',
  },
  {
    title: 'Poured Container Candle',
    image: candleImg,
    alt: 'A handmade candle being made with melted wax and a wick',
    time: '1 hour + cooling',
    level: 'Beginner',
    summary:
      'Melt, scent, and pour a simple soy container candle. A tidy introduction to working safely with wax, wicks, and temperature.',
  },
]

export const FAQS = [
  {
    q: 'Do I need expensive supplies to start?',
    a: 'No. Most projects on this site are chosen because they use inexpensive, widely available materials — paper, glue, basic paints, and common household items. We note when a project needs a specific tool so you can decide before you begin.',
  },
  {
    q: 'Are these projects suitable for beginners?',
    a: 'Yes. Every project lists a difficulty level and an estimated time. We favor clear, step-friendly instructions and prioritize techniques that are forgiving of small mistakes.',
  },
  {
    q: 'Is the content focused on the United States?',
    a: 'Our editorial focus is U.S. art and craft culture — American folk traditions, seasonal makes, and materials commonly found in U.S. stores. Many techniques are universal, so crafters anywhere can follow along.',
  },
  {
    q: 'Can I share my own craft ideas?',
    a: 'We are building simple community features. For now, you can reach us by email or phone (see the Contact page) to suggest topics or share what you have made.',
  },
  {
    q: 'Do you sell products or supplies?',
    a: 'No. Senior Pet Companions is an informational publication about art and crafts. We do not currently sell products or services through this website.',
  },
]

// Blog articles — full text lives in the DOM so "Read More" only toggles visibility.
export const ARTICLES = [
  {
    id: 'knitting-basics',
    title: 'Getting Started With Knitting: Your First Ten Stitches',
    category: 'Fiber',
    date: '2025-01-12',
    image: knittingImg,
    alt: 'Balls of wool yarn with knitting needles',
    excerpt:
      'Knitting looks intricate, but it rests on two motions repeated with patience. Here is a calm, beginner-friendly way to cast on and knit your first rows.',
    body: [
      'Knitting is built from a small set of repeated movements. Once your hands learn the rhythm of a single knit stitch, everything else — scarves, dishcloths, simple hats — is a variation on that motion. The goal of your first session is not a finished object; it is comfort with the tools.',
      'Start with a smooth, light-colored worsted-weight yarn and a pair of size 8 (5 mm) needles. Light yarn lets you see the individual stitches, which makes mistakes easier to spot and fix. Avoid dark or fuzzy yarn until you are confident.',
      'Cast on ten stitches using the long-tail method: leave a tail about three times the width of your finished piece, make a slip knot, and use your thumb and finger to form each new loop. Ten stitches is enough to practice without feeling crowded. Keep your tension relaxed — tight cast-on rows are the most common beginner frustration.',
      'To knit a stitch, insert the right needle front-to-back through the first loop, wrap the working yarn counter-clockwise, draw the loop through, and slide the old stitch off. Say the steps aloud — "in, wrap, through, off" — until your hands remember them. Work every row this way and you are knitting in garter stitch, which produces a soft, ridged fabric that lies flat.',
      'Expect uneven stitches at first. That unevenness disappears with practice as your hands find a consistent tension. When you can knit a small square without checking the steps, you are ready to bind off and try a real project like a washcloth or a simple scarf.',
    ],
  },
  {
    id: 'watercolour-color-mixing',
    title: 'Watercolour Color Mixing Without the Mud',
    category: 'Painting',
    date: '2025-02-03',
    image: paintingImg,
    alt: 'Watercolour paints and a brush on paper',
    excerpt:
      'Muddy colors are usually a mixing problem, not a talent problem. A short guide to keeping your watercolour washes clean and luminous.',
    body: [
      'New watercolour painters often worry that their colors turn gray and lifeless. In almost every case the cause is not the paint — it is mixing too many pigments together or reworking a wash before it dries. Clean color comes from restraint.',
      'Begin with a limited palette: a warm and cool version of each primary color gives you six paints that can mix almost anything. For example, a warm red, a cool red, a warm blue, a cool blue, a warm yellow, and a cool yellow. Fewer pigments in a mix means fewer chances to create mud.',
      'Mix two colors at a time whenever possible. Orange from red and yellow stays bright; add blue and it drifts toward brown. That is useful when you want brown, and a problem when you do not. Learn which pairs make clean secondaries and which make earthy neutrals.',
      'Let each wash dry before painting over it. Watercolour is transparent, so a dried layer glows through the next one. Disturbing a damp wash lifts pigment and blends layers into gray. Patience is a technique here, not just a virtue.',
      'Keep two water jars — one to rinse, one to mix with clean water — and change them often. A surprising amount of muddiness comes from dirty rinse water quietly tinting every new color you pick up.',
    ],
  },
  {
    id: 'pottery-hand-building',
    title: 'Hand-Building Pottery With No Wheel Required',
    category: 'Clay',
    date: '2025-02-20',
    image: potteryImg,
    alt: 'Handmade ceramic pottery pieces',
    excerpt:
      'You do not need a pottery wheel to make useful, beautiful clay objects. Pinch and coil methods are older than the wheel and just as rewarding.',
    body: [
      'The pottery wheel gets the attention, but the oldest and most accessible ways to shape clay use nothing but your hands. Pinch pots and coil building are ideal starting points because they teach you how clay behaves before you add the complexity of a spinning wheel.',
      'A pinch pot begins with a ball of clay about the size of an orange. Press your thumb into the center, then pinch the walls between thumb and fingers while slowly rotating. Work from the bottom up, keeping the walls an even thickness. Even, unhurried pressure is the whole secret.',
      'Coil building lets you make larger and taller forms. Roll ropes of clay on a flat surface, then stack and blend them, smoothing each new coil into the one below so the wall becomes a single piece. Score and add a little water where pieces join to help them bond.',
      'Let finished pieces dry slowly and evenly, loosely covered, so they do not crack. If you do not have access to a kiln, many community art centers and studios offer firing services for a small fee — a good reason to visit and meet other makers.',
      'Hand-building rewards texture and imperfection. Fingerprints, gentle asymmetry, and visible coils are not flaws; they are the honest marks of something made by hand.',
    ],
  },
  {
    id: 'embroidery-first-sampler',
    title: 'Embroidery Basics: Four Stitches for Your First Sampler',
    category: 'Fiber',
    date: '2025-03-05',
    image: embroideryImg,
    alt: 'An embroidery hoop with colourful thread',
    excerpt:
      'A sampler is a small practice cloth where you try one stitch at a time. Four beginner stitches will carry you through most simple designs.',
    body: [
      'Embroidery is portable, inexpensive, and forgiving — a perfect craft for quiet evenings. The traditional way to learn is a sampler: a scrap of cotton in a hoop where you practice each stitch in a row until it feels natural.',
      'You need an embroidery hoop, a piece of tightly woven cotton, embroidery floss, and a needle with an eye large enough to thread easily. Separate the floss into three strands for most work; six strands can look heavy on small designs.',
      'Start with the running stitch — simple in-and-out lines — to get used to even spacing. Then try the backstitch, which makes a solid unbroken line ideal for outlines and lettering. These two stitches alone can complete many designs.',
      'Add the satin stitch to fill small shapes with smooth blocks of color, keeping your strands flat and parallel. Finish with the French knot, a small raised dot that is fiddly at first but adds wonderful texture for flower centers and details.',
      'Do not aim for perfection on a sampler. Its purpose is practice, and the small unevenness of early rows becomes a record of how quickly your hands improve.',
    ],
  },
  {
    id: 'diy-upcycled-decor',
    title: 'Upcycling at Home: Turning Everyday Items Into Décor',
    category: 'DIY',
    date: '2025-03-18',
    image: diyImg,
    alt: 'Craft materials arranged for a do-it-yourself project',
    excerpt:
      'Upcycling makes something better from something you already own. A few simple ideas for giving jars, tins, and offcuts a second life.',
    body: [
      'Upcycling is the practice of turning items destined for the recycling bin into something more useful or beautiful. It is friendly to the wallet and the environment, and it is a great way to practice craft skills without buying new supplies.',
      'Glass jars are the easiest place to start. Clean and de-label them, then use them as brush holders, small vases, or organizers. A coat of water-based paint on the outside, or a simple twine wrap around the neck, changes the look completely.',
      'Metal tins and wooden offcuts respond well to a light sanding and a coat of primer before painting. Sanding gives paint something to grip; skipping it is the most common reason a finish peels later.',
      'Fabric scraps become gift wrap, patches, or the filling for a small pincushion. Keeping a "scrap jar" turns leftover material from clutter into a resource you reach for on your next project.',
      'The guiding question for any upcycle is simple: what does this object want to become? Working with an item’s existing shape and material usually gives a better result than forcing it into something it is not.',
    ],
  },
  {
    id: 'seasonal-simple-wreath',
    title: 'A Simple Seasonal Wreath Anyone Can Make',
    category: 'Seasonal',
    date: '2025-04-02',
    image: seasonalImg,
    alt: 'A handmade seasonal wreath',
    excerpt:
      'A wreath is really just materials attached to a ring. Once you understand that, you can make one for any season with what you have on hand.',
    body: [
      'Wreaths feel like an advanced craft, but the structure is simple: a ring, a base layer to hide it, and decorative elements attached in small clusters. Understanding those three parts lets you adapt the idea to any season or budget.',
      'Start with a base ring — a wire frame, a foam ring, or even a sturdy loop of cardboard for a first attempt. Wrap it with ribbon, twine, or fabric strips so no bare ring shows through your finished piece.',
      'Gather your decorative material into small bunches rather than attaching single pieces. Bunches read as fuller and take far less time. Secure each bunch with floral wire, always facing the same direction as you work around the ring so the wreath looks intentional.',
      'Vary the material by season: evergreen sprigs and pinecones in winter, dried grasses and paper leaves in autumn, fabric flowers in spring. A wreath made from paper or fabric lasts for years and can be stored flat.',
      'Step back often as you work and turn the wreath to check it from a distance. Wreaths are viewed from across a room, so overall balance matters more than the detail of any single cluster.',
    ],
  },
]

export const ARTICLE_CATEGORIES = ['All', ...Array.from(new Set(ARTICLES.map((a) => a.category)))]
