// All content sourced from the real Kousalya Nivas portfolio (web.txt).
// Frontend-only mock data — no backend.

// Use local images from public folder (run 'npm run download-images' to download all images locally)
const IMG = process.env.REACT_APP_USE_LOCAL_IMAGES === 'true' ? '' : 'https://portfolio-kousalya-nivas.vercel.app';

export const SITE = {
  name: "Kousalya Nivas",
  role: "Bharatanatyam Artist, Choreographer & Artistic Director of M.S. Naatyakshetra",
  // Publicly displayed email (footer, contact info). For form submission destination see src/data/contactConfig.js
  email: "msnatyalaya@gmail.com",
  phone: ["+91 96636 80808", "+91 96322 33226"],
  address: {
    line1: "No.1, A-Block, AECS Layout",
    line2: "2nd Main, 3rd Cross, Brookfields",
    city: "Kundalahalli, Bengaluru",
    state: "Karnataka",
    pincode: "560037",
    full: "No.1, A-Block, AECS Layout, 2nd Main, 3rd Cross, Brookfields, Kundalahalli, Bengaluru, Karnataka 560037",
  },
  location: "Bengaluru, India",
  copyrightYear: 2026,
  socials: {
    facebook: "https://www.facebook.com/kousalya.nivaas/",
    instagram: "https://www.instagram.com/kousalya.nivas/",
    youtube: "https://www.youtube.com/@KousalyaNivas",
  },
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Performances", path: "/performances" },
  { label: "Productions", path: "/productions" },
  { label: "Awards", path: "/awards" },
  { label: "Guru", path: "/guru" },
  { label: "Initiatives", path: "/initiatives" },
  { label: "Publications", path: "/publications" },
  { label: "Gallery", path: "/gallery" },
  { label: "Media", path: "/media" },
  { label: "Connect", path: "/connect" },
];

export const HERO = {
  eyebrow: "Bharatanatyam Artist · Choreographer · Artistic Director",
  title: ["Rooted in Tradition.", "Expressed with Grace.", "Inspiring Generations."],
  subtitle:
    "Keeper of the art. Storyteller of devotion. Choreographer of timeless experiences — preserving tradition, inspiring innovation.",
  portrait: `${IMG}/images/hero/Kous_ProDiary.jpg`,
};

export const STATS = [
  { value: "35+", label: "Years of Experience", icon: "Sparkles" },
  { value: "1,000+", label: "Performances", icon: "Drama" },
  { value: "500+", label: "Students Trained", icon: "GraduationCap" },
  { value: "50+", label: "Awards & Honours", icon: "Award" },
  { value: "∞", label: "Dedication", icon: "Flame" },
];

export const ABOUT_PREVIEW = {
  heading: "A Journey of Devotion & Dedication",
  body:
    "For over three decades, Dr. Kousalya Nivas has dedicated her life to Bharatanatyam — learning, performing, choreographing and sharing the divine beauty of this sacred art form. Founder, Guru and Artistic Director of M.S. Naatyakshetra, she bridges sacred tradition with contemporary innovation.",
  signature: "Kousalya Nivas",
};

export const ABOUT = {
  title: "About",
  name: "Dr. Kousalya Nivas",
  portrait: `${IMG}/images/hero/Kous_ProDiary.jpg`,
  paragraphs: [
    "Dr. Kousalya Nivas is an acclaimed Bharatanatyam exponent, choreographer, and visionary educator with an illustrious career spanning 35 years and over 1,000 stage performances. Known for her creative vision, expressive presentation, and innovative choreography, she founded M.S. Naatyakshetra in 2012 alongside her husband Shri. Nivas Venkataramanan with a selfless intent to nurture the art and culture of our nation. As Founder, Guru, and Artistic Director, she has mentored over 500 students, bridging the gap between sacred tradition and contemporary innovation.",
    "Her journey began at the age of four under Guru. Kalaimamani Smt. Revathy Muthuswamy. Today, she continues to deepen her artistry through the study of Karanas under Dr. Guru. Anuradha Vikranth and Nattuvangam under Guru. Shri Ramamoorthy Sriganesh.",
    "What truly distinguishes Dr. Kousalya is her rare synthesis of artistic scholarship and technical excellence. She holds an Honorary Doctorate with title \"Bharatiya Natya Visaradha\", a prestigious recognition from International Vanguard University, Chicago, USA, in recognition of her contributions to the arts, alongside an M.F.A. in Bharatanatyam from Annamalai University, Chidambaram. She also possesses strong technical credentials, including an M.Tech in Computer Networks from CMRIT and a B.Tech in Information Technology from Sri Ramakrishna Engineering College.",
    "Throughout her illustrious career, Dr. Kousalya Nivas has choreographed numerous signature works that bring epic narratives to life. Her vision for the future of Bharatanatyam is embodied in the legacy she has created through Parvata Vedike, an in-house auditorium dedicated to nurturing artistic excellence.",
  ],
  pillars: [
    { title: "Tradition", icon: "Landmark", text: "Rooted in the rich guru–shishya parampara and authentic classical techniques." },
    { title: "Devotion", icon: "Flame", text: "Inspiring through stories of bhakti, dharma and divine surrender." },
    { title: "Innovation", icon: "Sparkles", text: "Bringing freshness to classical storytelling while honouring its roots." },
    { title: "Excellence", icon: "Award", text: "Committed to the highest standards in performance and education." },
  ],
  signatureWorks: [
    { title: "Shri Rama Hanumantha", text: "Epic narrative celebrating devotion and valour", slug: "shri-rama-hanumantha" },
    { title: "Ramapriya Tulsidas", text: "Honouring the great poet-saint's devotion", slug: "ramapriya-tulsidas" },
    { title: "Mukunda Leela", text: "Divine playfulness of Lord Krishna", slug: "mukunda-leela" },
    { title: "Shivom-Jagath Karana", text: "The cosmic dance of creation", slug: "shivom-jagath-kaarana" },
  ],
  timeline: [
    { year: "1990", text: "Began training in Bharatanatyam at the age of four under Guru Kalaimamani Smt. Revathy Muthuswamy." },
    { year: "2000", text: "Won the State-level Bharatanatyam Competition — Dayaa 2000, awarded by Smt. Latha Rajinikanth." },
    { year: "2012", text: "Founded M.S. Naatyakshetra alongside Shri. Nivas Venkataramanan." },
    { year: "2018", text: "Honoured with NADAM Kalabhooshan at the International Classical Dance Festival, Dubai." },
    { year: "2022", text: "Premiered Sri Rama Hanumantha; performed at Mysore Dasara Main Palace." },
    { year: "2025", text: "Conferred an Honorary Doctorate with title \"Bharatiya Natya Visaradha\" from International Vanguard University, Chicago, USA." },
  ],
};

export const PRODUCTIONS = [
  {
    slug: "thiruppavai",
    title: "Thiruppavai",
    subtitle: "The Sacred Hymns of Andal",
    year: "2024",
    type: "Solo Production",
    short: "The sacred hymns of Andal brought to life through dance.",
    image: `${IMG}/images/productions/Tiruppavai-1.jpg`,
    credits: { concept: "Kousalya Nivas", music: "Traditional compositions", duration: "45 minutes", artists: "Solo" },
    storyline:
"Tiruppavai is a solo thematic production centered around the Pasurams from Andal's Thiruppavai. Each pasurams which has devotional hymns was interpreted with intricate dance expressions. By focusing on the deep emotional and spiritual content of the pasurams, the dancers enhance their interpretative skills and grow into professional performers. The collaborative effort across dance institutes fosters a rich environment for artistic development, allowing performers to immerse themselves in the profound devotional themes of Andal's hymns.",
    music:
"Andal Thiruppavai is a live concert that combines intricate footwork, expressive gestures, and emotive storytelling of 13 out of 30 Tamil devotional hymns composed by Andal, the only female Alvar saint of the Vaishnavite tradition. These hymns are part of the Divya Prabandham and are recited during the Margazhi month (December-January) as a form of devotion to Lord Vishnu. These pasurams are beautifully choreographed to provide a harmonious blend of rhythm, melody, and artistry, offering audiences an immersive experience of Andal's devotion and love towards Krishna.",
    reference: "Andal's Thiruppavai - Divya Prabandham",
    stages: [
      "Parvata Vedike, Brookfield, Bengaluru",
      "Seva Sadan, Malleshwaram, Bengaluru",
    ],
    gallery: [
      `${IMG}/images/productions/Tiruppavai-1.jpg`,
      `${IMG}/images/productions/Tiruppavai-2.jpg`,
      `${IMG}/images/productions/Tiruppavai-3.jpg`,
      `${IMG}/images/productions/Tiruppavai-4.jpg`,
      `${IMG}/images/productions/Tiruppavai-5.jpg`,
    ],
    videos: ["JscCd5aVkHo", "3JWbKifMxbE", "QpuExx8l5dc"],
    reviews: [],
  },
  {
    slug: "ramapriya-tulsidas",
    title: "Ramapriya TulsiDas",
    subtitle: "Honouring the Poet-Saint's Devotion",
    year: "2024",
    type: "Dance Drama",
    short: "A tribute to the great poet Tulsidas through dance and storytelling.",
    image: `${IMG}/images/productions/RamaPriyaTulsidas-1.jpg`,
    credits: { concept: "Kousalya Nivas", music: "Shri Praveen D Rao", duration: "45 minutes", artists: "15 performers" },
    storyline:
    "The storyline of this production weaves together the great tales of Rama, beginning with the Shree Ramachandra Kripalu krithis, highlighting the devotion of Tulsidas. It then transitions into the Hanuman Chalisa, where Tulsidas is imprisoned by Emperor Akbar. The production continues with the recitation of the Hanuman Chalisa, depicting key stories from the Ramayana, including Hanuman's journey to Lanka and the battles fought by Rama and his allies. The production concludes with a divine moment when Tulsidas, having chanted the Hanuman Chalisa, is blessed with a vision of Lord Rama, bringing the narrative full circle.",
    music:
"This 45-minutes Bharatanatyam production, performed by 15 artists, showcases the devotional spirit of the Hanuman Chalisa, with music composed by Shri Praveen D Rao. The Chalisa is explored in depth, using expressive sancharis to bring out its spiritual meaning, while intense jathis highlight the technical prowess of the dancers. The intricate choreography, combined with the emotional depth of the verses, has made this production a profound experience for audiences. Its unique approach has garnered widespread appreciation, resonating deeply with viewers and leaving a lasting impact.",
  reference: "Vinaye Patrike",
    stages: [
      "Nritya Bharathanjali 2024, Dwani Auditorium",
      "Ram Janmabhoomi Celebrations, AECS layout",
      "Vaikunta Ekadesi Festival, Srirangam, Trichy",
      "Kannada Rajyotsava Celebrations, Seva Sadan",
      "Tirumala Kalyanum, Palamaner, Andra Pradesh",
      "Hanumanth Jayanthi at Prestige Tranquility Society, Bengaluru",
      "Art festival at IPL Educational Society, Bengaluru",
      "Guru Poornima Celebrations at Sri Pari Poorna Sanatana Ayurvedic College, Neelemangala, Bengaluru",
    ],
    gallery: [
      `${IMG}/images/productions/RamaPriyaTulsidas-1.jpg`,
      `${IMG}/images/productions/RamaPriyaTulsidas-2.jpg`,
      `${IMG}/images/productions/RamaPriyaTulsidas-3.jpg`,
      `${IMG}/images/productions/RamaPriyaTulsidas-4.jpg`,
      `${IMG}/images/productions/RamaPriyaTulsidas-5.jpg`,
      `${IMG}/images/productions/RamaPriyaTulsidas-6.jpg`,
      `${IMG}/images/productions/RamaPriyaTulsidas-7.jpg`,
      `${IMG}/images/productions/RamaPriyaTulsidas-8.jpg`,
    ],
    videos: ["sq_Ch2pbMPs", "srbyZz_CB6w", "fHmVMUS_xp8", "oeCZcpFcsm4"],
    reviews: ["4FZitnUeLk0"],
  },
  {
    slug: "mukunda-leela",
    title: "Mukunda Leela",
    subtitle: "The Divine Play of Krishna",
    year: "2023",
    type: "Dance Drama",
    short: "The enchanting tales of Lord Krishna's divine play.",
    image: `${IMG}/images/productions/Mukundaleela-1.jpg`,
    credits: { concept: "Kousalya Nivas", music: "Shri Praveen D Rao and team", duration: "1 hour", artists: "25 performers" },
    storyline:
"Mukunda Leela is MSN's 1-hour long mega production which portrays the divine saga of Lord Krishna, starting with the birth of Krishna leading up to the Vishwa Roopa Darshana of the Almighty Lord. The production is performed by a troupe of 25-50 artists (number of artists may vary based on stages). The dance production encompasses verses from Bhagavatam, Keerthanas of the greats Kanaka Dasa and Oothukadu Venkata Subbaiyar and a few new compositions of our own.",
music:
"The choreography is a beautiful and graceful blend of traditional Bharathanatyam jathis and abhinayas, Dandiya to depict the Lord's pastimes, Rasa Leela to show the gopis divine love for Lord Krishna, and Kalarippayattu. Mukunda Leela's soul touching music score has been composed by the renowned musician Shri. Praveen D Rao and team. Mukunda Leela has been a production very close to our institution and has touched the hearts of our audiences across multiple stages.",
 reference: "Srimath Bhagavatham",
    stages: [
      "Nrityabharathanjali 2023",
      "Mysore Dasara Main Palace",
      "Janmastami at ISKCON, Whitefield",
      "Kalautsav, Vagdevi Vilas School, Bengaluru",
      "ICCR, Bengaluru",
      "Belaguru Festival",
      "Global Alumini meet, SREC, Coimbatore",
      "Nrityotsava 2019, Mahadevapura",
      "Mysore Dasara, Jaganmohan palace",
      "International Doctors meet, ITC Gardenia",
    ],
    gallery: [
      `${IMG}/images/productions/Mukundaleela-1.jpg`,
      `${IMG}/images/productions/Mukundaleela-2.jpg`,
      `${IMG}/images/productions/Mukundaleela-3.jpg`,
      `${IMG}/images/productions/Mukundaleela-4.jpg`,
      `${IMG}/images/productions/Mukundaleela-5.jpg`,
    ],
    videos: ["pzLxU0f12Ts", "IwIVHg7RRyk"],
    reviews: ["KRMU6FsDvzM", "g0PVF9awj68", "l5GwwbnmkbE"],
  },
  {
    slug: "shri-rama-hanumantha",
    title: "Sri Rama Hanumantha",
    subtitle: "The Devotion & Valour Eternal",
    year: "2022",
    type: "Dance Drama",
    short: "A powerful portrayal of devotion and valor through the story of Hanuman.",
    image: `${IMG}/images/productions/Hanumantha-1.jpeg`,
    credits: { concept: "Kousalya Nivas", music: "Shri Praveen D Rao", duration: "1 hour 15 minutes", artists: "30 performers" },
    storyline:
      "The production begins with scenes of Bala Hanuman, followed by the story of Hanuman's great strength. The sanchari sequences and storyline of this production are choreographed based on the Valmiki Ramayana, with all characters drawn from the epic. The monkey clan, mistaking Rama and Lakshmana for Vali's spies, informs Sugreeva. Hanuman meets Rama, recognizes him, and brings him to Sugreeva. After learning about Sita's abduction, Hanuman is sent to find her. Overcoming obstacles, he reaches Lanka, comforts Sita, and sets the city on fire. He returns to Kishkinda and tells Rama about Sita's condition. They build a bridge to Lanka, and in battle, Hanuman saves Lakshmana. Rama defeats Ravana, reunites with Sita, and returns to Ayodhya, where Hanuman reveals Rama in his heart.",
    music:
      "The jathis, thillana, and songs have been thoughtfully crafted with guidance from my gurus and enriched by my own creative inputs. Every musical piece is intricately woven to complement the choreography, elevating the emotional depth and drama of the Ramayana. The music, composed by Shri Praveen D Rao, further enhances the storytelling. His compositions are deeply rooted in tradition, offering a profound connection to the stories they accompany.",
    reference: "Valmiki Ramayanam, Sundara Kanda",
    stages: [
      "Nrithyabharathanjali 2022, Dwani auditorium, Bengaluru",
      "Infosys outreach program at Sunkathanoor village, Mandya",
      "Nrithyantara Festival 2022, Chowdaih Memorial Hall, Bengaluru",
      "Mahadevapura Kala Utsav, New Horizon College Auditorium",
      "Uchhila Dasara, Udupi",
      "CMR founders' day, Byrathi Campus",
      "Ramanavami Festival, Sarjapur",
      "Kala Arpan at Art of Living International Center, Kanakapura, Bengaluru",
      "Sri Paripoorna Sanathana Ayurveda Medical College, Hospital & Research Centre, Nelamangala Taluk, Bengaluru Rural District, Karnataka"


    ],
    gallery: [
     
      `/images/productions/ha.jpg`,
      `${IMG}/images/productions/Hanumantha_new1.jpeg`,
      `${IMG}/images/productions/Hanumantha_new3.jpeg`,
      `${IMG}/images/productions/Hanumantha_new5.jpeg`,
      `${IMG}/images/productions/Hanumantha-2.jpg`,
      `${IMG}/images/productions/Hanumantha-6.jpeg`,
      `${IMG}/images/productions/Hanumantha_new6.jpeg`,
      `${IMG}/images/productions/Hanumantha_new7.jpeg`,
      `${IMG}/images/productions/Hanumantha_new8.jpeg`,
      `${IMG}/images/productions/Hanumantha-4.jpeg`,
      `${IMG}/images/productions/Hanumantha-5.jpeg`,
      `${IMG}/images/productions/Hanumantha-7.jpeg`,
      `${IMG}/images/productions/Hanumantha-8.jpeg`,
      `${IMG}/images/productions/Hanumantha-9.jpeg`,
      `${IMG}/images/productions/Hanumantha-10.jpeg`,
      `${IMG}/images/productions/Hanumantha-11.jpeg`,
      `${IMG}/images/productions/Hanumantha-12.jpeg`,
      `${IMG}/images/productions/Hanumantha-13.jpeg`,


    ],
    videos: ["mNkCpXl8OGI", "RC0VGLFB_10"],
    reviews: ["PAP81sfr-dI", "dQqwIAP5gaE", "zIopBwwR8oY"],
  },
  {
    slug: "shivom-jagath-kaarana",
    title: "Shivom - Jagat Kaarana",
    subtitle: "The Cosmic Dance of Creation",
    year: "2021",
    type: "Dance Drama",
    short: "A spiritual journey exploring the cosmic dance of Lord Shiva.",
    image: `/images/productions/shivom-8-Photoroom_blackbg.png`,
    credits: { concept: "Kousalya Nivas", music: "Shri Praveen D Rao", duration: "1 hour", artists: "20 performers" },
    storyline:
"Shivom Jagath Kaarana is an 1-hour production on the Eternal Presence of the Almighty Lord Shiva. Presented in a traditional Bharathanatyam Margam format, Shivom Jagath Karana takes the audience through the Bhakthi Kathas of Lord Shiva. Performed by our troupe of 15-20 artists, the compositions include intense, beautiful jathis and graceful, expressive sancharis, captivating the audience into a divine trance. The krithis are taken from Saint Purandaradasa and Saint Tygaraja.",
    music:
"The music is composed and sung by Smt. Neela Ramanuja and team. This production has been highly acclaimed and admired, bringing happiness to countless individuals.",
    reference: "Krithis from Saint Purandaradasa and Saint Tygaraja",
    stages: [
      "Mysore Dasara at Kalamandira",
      "10th year annual celebration at Shiva Temple, Kundalahalli",
      "Chidambaram Natyanjali",
      "Tiruvarur Natyanjali",
      "Mayiladudurai Natyanjali",
      "Kumbakonam Natyanjali",
      "Brahadeeswar Temple, Tanjore",
      "Shiva Vishnu Temple, Tanjore",
      "Nrityantara Festival 2021, Chowdaih Memorial Hall",
    ],
    gallery: [
      `${IMG}/images/productions/shivom-1.jpg`,
      `${IMG}/images/productions/shivom-2.jpg`,
      `${IMG}/images/productions/shivom-3.jpg`,
      `${IMG}/images/productions/shivom-4.jpg`,
      `${IMG}/images/productions/shivom-5.jpg`,
      `${IMG}/images/productions/Shiva_Grup.jpg.jpeg`,
      `${IMG}/images/productions/Smiling_Shiva.JPG.jpeg`,
      `${IMG}/images/productions/shivom-6.jpeg`,
      `${IMG}/images/productions/shivom-7.jpeg`,
      `${IMG}/images/productions/shivom-8.jpeg`,
      `${IMG}/images/productions/shivom-9.jpeg`,
      `${IMG}/images/productions/shivom-10.jpeg`,
      `${IMG}/images/productions/shivom-11.jpeg`,
    ],
    videos: ["CGRt91aBtYY", "FsA2TAByCCs"],
    reviews: [],
  },
];

export const ADVITIYAM = {
  title: "Project Advitiyam",
  body:
    "Project Advitiyam, a creative initiative by Guru Kousalya Nivas, merges classical dance with timeless storytelling through captivating dance drama productions. Our vision is to captivate audiences by bringing to life stories from our rich cultural heritage through the graceful art of dance — bridging the gap between tradition and modernity, especially in the heart of rural India.",
  tagline: "One Dance, Infinite Stories.",
};

export const PERFORMANCES = {
  intro: "A glimpse into Kousalya Nivas's artistic journey through prestigious performances at renowned sabhas, temples, cultural festivals, and institutions across India.",
  highlights: [
    {
      title: "Recognized Cultural Festivals",
      points: [
        "Mysuru Dasara Festival (Main Palace, Kalamandira, Jaganmohan Palace)",
        "Niranthara Festival",
        "Kannada Rajyotsava",
        "Seva Sadan Republic Day",
        "Ravindra Kalakshetra Nrithyantara Festival",
        "Chowdiah Memorial Hall ICCR Cultural Program"
      ],
      image: `${IMG}/images/performances/mysore_dasara_festival.jpeg`
    },
    {
      title: "Corporate Connect",
      points: [
        "International Medical Conference, ITC Hotel",
        "Securonix Corporate CEO Connect, Radisson Blu Hotel",
        "Top CEO Meet, Shangri-La Hotel",
        "Gadag Festival (Outreach program by Infosys Foundation & Bhartiya Vidya Bhavan)"
      ],
      image: `${IMG}/images/performances/International.JPG`
    },
    {
      title: "Temple Festivals",
      points: [
        "Chidambaram Natyanjali",
        "Brahan Natyanjali, Tanjore",
        "Brahadeshwara Temple Navaratri",
        "Kollur Moogambigai Temple Lakshadeepa Utsava",
        "Dharmastala Uchilla Dasara, Mahalakshmi Temple, Udupi"
      ],
      image: `${IMG}/images/productions/shivom-7.jpeg`
    },
  ],
  groups: [
    {
      title: "Natyanjali Festival",
      items: ["Tiruvanaikoil Natyanjali, Trichy", "Naalathe Natyanjali, Malaikottai, Trichy", "Kashi Vishvanath Temple Natyanjali, Trichy", "Tiruvadaimarudur Natyanjali"],
    },
    {
      title: "Temple Utsavs",
      items: [
        "Sreedevi Boodevi Sametha Sri Venkataswamy Temple, BEML Layout, Bengaluru",
        "Siddi Vinayaka Temple, BEML Layout",
        "Belaguru Hanuman Temple",
        "Srirangam Ranganathar Temple",
        "Malaikottai Vinayagar Temple, Trichy",
        "Mannachannaluru Anjaneyar Temple",
      ],
    },
    {
      title: "Cultural & Academic Events",
      items: [
        "Khelo India 2022",
        "International Yoga Celebration, SVYASA",
        "Founders' Day at CMRIT, 2009",
        "National Conference, Trichy",
        "Global Alumni Meet, Sri Ramakrishna Engineering College, Coimbatore",
        "Vagdevi Vilas School Kala Utsav",
        "Alumni Meets at SREC, Coimbatore",
        "MOU Signing Event with Foreign Delegates at SREC",
      ],
    },
    {
      title: "Cultural Festivals",
      items: [
        "Independence Day Celebrations by BJP Cultural Wing",
        "Bengali Cultural Festivals",
        "Kerala Cultural Festivals (Samarpana)",
        "Tamil Sangam Events",
        "Kambar Kazhagam Programs",
      ],
    },
    {
      title: "Religious & Special Celebrations",
      items: [
        "Sathya Sai Baba Centenary, Sai Paripoorna",
        "Ramanavami Utsav, AECS Layout",
        "Hindu Parishath, Pachapur, Belagavi",
        "Radha Krishna Kalyanam, Srirangam",
        "Srinivasa Kalyanam by SRS Trust at Kikani School, Coimbatore",
        "Vinayaka Chaturthi Celebrations, Srirangam",
        "Raghavendra Mutt, Srirangam",
        "Andavan Swamy Centenary Celebrations",
      ],
    },
    {
      title: "Community & Corporate Events",
      items: [
        "Lions Club, Trichy",
        "Rotary Club, Coimbatore",
        "Rotary Club Programs",
        "Eye Rehabilitation Center",
        "Sai Baba Colony, Coimbatore",
        "Dalmia Cements",
        "Apartment Society Festivals",
        "Securonix India Corporate Event",
      ],
    },
  ],
};

export const AWARDS = {
  // intro: "Grateful for the recognition and encouragement that inspires me to continue this artistic journey.",
  nataraja: "/nat.png",
  stats: [
    { value: "6", label: "National & International" },
    { value: "8", label: "Excellence Awards" },
    { value: "17", label: "Total Awards" },
  ],
  list: [
    { year: "2025", title: "Rama – Natya Praveena Puraskar", org: "Sri Sathya Sai Paripoorna Charitable Trust, Neelamangala, Bengaluru", tag: "National Award" },
    { year: "2025", title: 'Honorary Doctorate – "Bharatiya Natya Visaradha"', org: "International Vanguard University, Chicago, USA", tag: "International Award" },
    { year: "2024", title: "Nritya Ratnam", org: "Sri Paripoorana Sanathana Charitable Trust, Neela Mangala, Bengaluru", tag: "Excellence Award" },
    { year: "2023", title: "Abinaya Choodamani", org: "Sri Sri Yadugiri Yathiraja Narayana Ramanuja Jeeyar Swami, Malleshwaram", tag: "Excellence Award" },
    { year: "2023", title: "Vocational Excellence – National Award", org: "International Institute for Social Reforms, Bengaluru", tag: "National Award" },
    { year: "2022", title: "Kala Ratna", org: "Nrityantara Festival, Chowdiah Memorial Hall, Bengaluru", tag: "Excellence Award" },
    { year: "2022", title: "Natya Kala Ratna", org: "Guru Smt. Revathy Muthuswamy, Bharata Natyalaya, Srirangam", tag: "Excellence Award" },
    { year: "2022", title: "Bharatha kala selva ratna", org:"108 Sakthi Peetha Kanchipuram", tag:"Excellence Award"},
    { year: "2020", title: "Mahadevapura Kala Ratna", org: "Shri Arvind Limbavali, MLA Mahadevapura", tag: "Excellence Award" },
    { year: "2019", title: "South Indian Women Achiever Award (SIWAA)", org: "Syrafills Media Ltd., Chennai — Art & Culture", tag: "National Award" },
    { year: "2018", title: "Nadam Kalabhooshan", org: "Shri & Smt. Dhananjayan, International Classical Dance Festival, Dubai", tag: "International Award" },
    { year: "2018", title: "Training Excellence Award", org: "Vagdevi Vilas Sangeetha Kala Mandira", tag: "Education & Mentorship" },
    { year: "2014", title: "Best Supporting Alumni Award", org: "Sri Ramakrishna Engineering College Alumni Association", tag: "Community Service" },
    { year: "2008", title: "Best Student Award", org: "Indian Society for Technical Education (ISTE), Delhi", tag: "Academic Excellence" },
    { year: "2000", title: "Rajni Award", org: "Smt. Latha Rajinikanth — Dayaa 2000", tag: "Competition Award" },
    { year: "1995", title: "Natya Peroli", org: "Kamban Kazhagam", tag: "Excellence Award" },
  ],
  gallery: [
    // Award ceremony images with details
    {
      image: `${IMG}/images/awards/IMG_2400.JPG.jpeg`,
      title: "Honorary Doctorate in Classical Bharatanatyam – Bharatiya Natya Visaradha",
      org: "International Vanguard University, Chicago",
      year: "2025"
    },
    {
      image: `${IMG}/images/awards/Hons_Dr_Award_Kousalya.png`,
      title: 'Honorary Doctorate in Classical Bharatanatyam – "Bharatiya Natya Visaradha"',
      org: "International Vanguard University, Chicago",
      year: "2025"
    },
    {
      image: `${IMG}/images/awards/abinaya choodamani.jpeg`,
      title: "Abinaya Choodamani",
      org: "Sri Sri Yadugiri Yathiraja Narayana Ramanuja Jeeyar Swami, Malleshwaram",
      year: "2023"
    },
    {
      image: `${IMG}/images/awards/Mahadevapura Kala Ratna.jpeg`,
      title: "Mahadevapura Kala Ratna",
      org: "Shri Arvind Limbavali, MLA Mahadevapura",
      year: "2020"
    },
    {
      image: `${IMG}/images/awards/Naadam kalabhoosan.jpeg`,
      title: "Nadam Kalabhooshan",
      org: "Shri & Smt. Dhananjayan, International Classical Dance Festival, Dubai",
      year: "2018"
    },
  ],
};

export const GURU = {
  badge: "M.S. Naatyakshetra · Since 2012",
  title: "The Art of Nurturing Excellence",
  quote: "Training here is an apprenticeship in excellence — where tradition meets the modern stage.",
  mission: "M.S. Naatyakshetra is committed to nurturing well-rounded Bharatanatyam artists through structured training rooted in the Guru-Shishya tradition. By combining artistic excellence, disciplined practice, innovative teaching methodologies, and meaningful performance opportunities, the institution empowers students to excel in Bharatanatyam academically, professionally, and as lifelong ambassadors of Indian classical arts.",
  groupImage: `${IMG}/images/gallery/MS group.jpeg`,
  lineage: [
    { name: "Kalaimamani Smt. Revathy Muthuswamy", role: "Bharatanatyam Guru", org: "Founder of Srirangam Natyalaya, Srirangam", note: "Learned Bharatanatyam and the core principles of the art form." },
    { name: "Karnataka Kalashri Dr. Anuradha Vikranth", role: "Dancer & Choreographer", org: "Founder of Drishti Art Centre, Bengaluru", note: "Deepening artistry by learning Karanas and advanced techniques." },
    { name: "Shri. Ramamoorthy Sriganesh", role: "Mridangam Exponent & Composer", org: "Artistic Director - 'DHWANI', Chennai", note: "Mastering advanced Nattuvangam and rhythmic conduct." },
  ],
  pillars: [
    { title: "Technical Mastery", text: "Building a strong foundation in Bharatanatyam technique, footwork, and precision.", icon: "Footprints" },
    { title: "Emotional Expression", text: "Specialized coaching in Abhinaya, elevating movement into storytelling.", icon: "Heart" },
    { title: "Production Excellence", text: "Comprehensive training in lighting, stage setup, props, and costume design.", icon: "Theater" },
    { title: "Performance Experience", text: "Real-world stage experience through major productions alongside the Guru.", icon: "Users" },
  ],
  legacy: [
    { value: "500+", label: "Students Trained" },
    { value: "14", label: "Years of Excellence" },
    { value: "250", label: "Current Students" },
    { value: "16", label: "Arangetrams Conducted" },
  ],
  testimonials: [
    { name: "Pavan Singh", title: "Nritya Mayura", role: "Software Engineer", image: `${IMG}/images/Guru/Pavan.jpeg`, text: "Guru Smt. Kousalya Ma'am has guided me for over nine years, helping me build a strong foundation in Bharatanatyam while instilling discipline, devotion, and a deep appreciation for our culture." },
    { name: "Richa Thyagarajan", title: "M. S. Kala Bharathi", role: "Medical Student", image: `${IMG}/images/Guru/Richa.jpeg`, text: "For over twelve years, M.S. Naatyakshetra has been my second home. Under the guidance of Guru Smt. Kousalya Nivas Ma'am and Nivas Sir, I have grown in confidence, artistry, and character." },
    { name: "Manasa K R", title: "Abhinaya Paavai", role: "Industrial Designer", image: `${IMG}/images/Guru/Manasa_kR.jpeg`, text: "M.S. Naatyakshetra is more than a dance school — it is a community that nurtures passion, confidence, and artistic excellence." },
  ],
  videos: ["UzfwtdkTmFU", "rnZqDTF1nvQ", "Dln1i3abhfA"],
};

export const INITIATIVES = {
  // intro: "Beyond the stage, I am committed to nurturing, educating, and giving back to the dance community.",
  cards: [
    {
      title: "Art as a Tool for Mental Health",
      image: `${IMG}/images/Initiatives/Mental_Health.jpg`,
      desc: "Kousalya has pioneered the use of Bharatanatyam as a therapeutic intervention for the younger generation — helping children and young adults navigate emotional difficulties, building character and ensuring holistic growth.",
      points: ["Mental Well-being", "Character Building", "Holistic Growth"],
    },
    {
      title: "Empowering the Artist Ecosystem",
      image: `https://portfolio-kousalya-nivas.vercel.app/images/Initiatives/Initiatives_ArtistEcosystem.png`,
      desc: "Through proactive mentorship and leadership, she creates platforms and festivals for established and emerging artists, recognises excellence through awards, and provides essential technical mentorship.",
      points: ["Creating Platforms", "Recognition & Awards", "Technical Mentorship"],
    },
    {
      title: "Parvata: A Sanctuary for Performers",
      image: `https://portfolio-kousalya-nivas.vercel.app/images/Initiatives/Parvata_StageView.JPG`,
      desc: "The establishment of the Parvata Vedike auditorium is a cornerstone of her legacy — built specifically to benefit the wider artist community, ensuring performance space is never a barrier to creativity.",
      points: ["Accessibility", "Environmental Transformation"],
    },
  ],
  quote: "Let the art we cherish be the legacy we leave behind.",
};

export const PUBLICATIONS = {
  book: {
    year: "2016",
    title: "Nrityam Volume 1",
    author: "by Kousalya Nivas",
    image: `${IMG}/images/events/book.png`,
    desc: "A comprehensive exploration of the fundamental adavus and mudras of Bharatanatyam. This book serves as an essential resource for students, teachers, and enthusiasts of classical dance, providing detailed explanations and illustrations of the foundational building blocks of Bharatanatyam technique.",
    topics: ["Fundamental Adavus (Basic Steps)", "Mudras (Hand Gestures)", "Technical Foundations", "Practice Guidelines"],
    quote: "An essential resource for students, teachers, and enthusiasts of Bharatanatyam, providing detailed foundations of this classical art form.",
  },
  papers: [
    { year: "2016", title: "Role of Bharatanatyam in Human Life", venue: "Annamalai University — Department of Music and Dance", desc: "A comprehensive project exploring the profound impact of Bharatanatyam on human life, culture, and society." },
    { year: "2024", title: "Key Elements of Bharatanatyam to Transcend Cultural and Geographical Boundaries", venue: "MGM College, Udupi — National Conference on Performing Arts 2024", desc: "Paper presentation examining how Bharatanatyam transcends cultural and geographical boundaries through music, choreography, and accessibility." },
  ],
};

export const MEDIA = [
  { publication: "Deccan Herald", headline: "Srirangam Hanuman Chalisa Performance", date: "2023", excerpt: "A mesmerising portrayal of devotion that brought the Hanuman Chalisa to life on stage.", image: `${IMG}/images/media/dh_srh.jpg` },
  { publication: "Thinathandi", headline: "Srirangam Hanuman Chalisa Feature", date: "2023", excerpt: "Featured coverage celebrating a landmark devotional production.", image: `${IMG}/images/media/Thinathandi_Srirangam_HanumanChalisa.jpg` },
  { publication: "Varthajala", headline: "Cultural Festival Coverage", date: "2023", excerpt: "Press feature highlighting cultural festival performances and choreographic brilliance.", image: `${IMG}/images/media/varthajala 28.7.23.jpg` },
  { publication: "Press Feature", headline: "Classical Dance Excellence", date: "2022", excerpt: "Recognising excellence and dedication in classical Bharatanatyam.", image: `${IMG}/images/media/PRESS1.png` },
  { publication: "Press Feature", headline: "Cultural Ambassador", date: "2022", excerpt: "A profile honouring her role as an ambassador of Indian classical arts.", image: `${IMG}/images/media/PRESS3.png` },
  { publication: "Press Feature", headline: "Dance Education Pioneer", date: "2021", excerpt: "Spotlight on pioneering dance education and mentorship.", image: `${IMG}/images/media/PRESS5.png` },
];

// Gallery — real production & performance imagery, categorised.
export const GALLERY = [
  // Hanumantha Production
  { src: `/images/productions/ha.jpg`, cat: "Productions" },
  { src: `${IMG}/images/productions/Hanumantha-2.jpg`, cat: "Productions" },
  { src: `${IMG}/images/productions/Hanumantha-6.jpeg`, cat: "Productions" },
  { src: `${IMG}/images/productions/Hanumantha_new1.jpeg`, cat: "Productions" },
  { src: `${IMG}/images/productions/Hanumantha_new3.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/productions/Hanumantha_new5.jpeg`, cat: "Portraits" },
  { src: `${IMG}/images/productions/Hanumantha_new6.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/productions/Hanumantha_new7.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/productions/Hanumantha_new8.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/productions/Hanumantha-4.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/productions/Hanumantha-5.jpeg`, cat: "Productions" },
  { src: `${IMG}/images/productions/Hanumantha-7.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/productions/Hanumantha-8.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/productions/Hanumantha-9.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/productions/Hanumantha-10.jpeg`, cat: "Group" },
  { src: `${IMG}/images/productions/Hanumantha-11.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/productions/Hanumantha-12.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/productions/Hanumantha-13.jpeg`, cat: "Group" },

  // Ramapriya Tulsidas
  { src: `${IMG}/images/productions/RamaPriyaTulsidas-1.jpg`, cat: "Productions" },
  { src: `${IMG}/images/productions/RamaPriyaTulsidas-2.jpg`, cat: "Performances" },
  { src: `${IMG}/images/productions/RamaPriyaTulsidas-3.jpg`, cat: "Performances" },
  { src: `${IMG}/images/productions/RamaPriyaTulsidas-4.jpg`, cat: "Performances" },
  { src: `${IMG}/images/productions/RamaPriyaTulsidas-5.jpg`, cat: "Productions" },
  { src: `${IMG}/images/productions/RamaPriyaTulsidas-6.jpg`, cat: "Performances" },
  { src: `${IMG}/images/productions/RamaPriyaTulsidas-7.jpg`, cat: "Group" },
  { src: `${IMG}/images/productions/RamaPriyaTulsidas-8.jpg`, cat: "Performances" },

  // Mukunda Leela
  { src: `${IMG}/images/productions/Mukundaleela-1.jpg`, cat: "Productions" },
  { src: `${IMG}/images/productions/Mukundaleela-2.jpg`, cat: "Performances" },
  { src: `${IMG}/images/productions/Mukundaleela-3.jpg`, cat: "Performances" },
  { src: `${IMG}/images/productions/Mukundaleela-4.jpg`, cat: "Performances" },
  { src: `${IMG}/images/productions/Mukundaleela-5.jpg`, cat: "Productions" },

  // Shivom - Jagat Kaarana
  { src: `${IMG}/images/productions/Shiva_Grup.jpg.jpeg`, cat: "Group" },
  { src: `${IMG}/images/productions/Smiling_Shiva.JPG.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/productions/shivom-1.jpg`, cat: "Performances" },
  { src: `${IMG}/images/productions/shivom-2.jpg`, cat: "Performances" },
  { src: `${IMG}/images/productions/shivom-3.jpg`, cat: "Performances" },
  { src: `${IMG}/images/productions/shivom-4.jpg`, cat: "Performances" },
  { src: `${IMG}/images/productions/shivom-5.jpg`, cat: "Performances" },
  { src: `${IMG}/images/productions/shivom-6.jpeg`, cat: "Productions" },
  { src: `${IMG}/images/productions/shivom-7.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/productions/shivom-8.jpeg`, cat: "Productions" },
  { src: `${IMG}/images/productions/shivom-9.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/productions/shivom-10.jpeg`, cat: "Group" },
  { src: `${IMG}/images/productions/shivom-11.jpeg`, cat: "Performances" },

  // Thiruppavai
  { src: `${IMG}/images/productions/Tiruppavai-1.jpg`, cat: "Productions" },
  { src: `${IMG}/images/productions/Tiruppavai-2.jpg`, cat: "Performances" },
  { src: `${IMG}/images/productions/Tiruppavai-3.jpg`, cat: "Portraits" },
  { src: `${IMG}/images/productions/Tiruppavai-4.jpg`, cat: "Performances" },
  { src: `${IMG}/images/productions/Tiruppavai-5.jpg`, cat: "Portraits" },

  // Additional Performance & Portrait Gallery
  { src: `${IMG}/images/gallery/kou8.jpeg`, cat: "Portraits" },
  { src: `${IMG}/images/gallery/kou3.jpeg`, cat: "Portraits" },
  { src: `${IMG}/images/gallery/IMG_8177.JPG.jpeg`, cat: "Portraits" },
  { src: `${IMG}/images/gallery/kou4.jpeg`, cat: "Portraits" },
  { src: `${IMG}/images/gallery/kou5.jpeg`, cat: "Portraits" },
  { src: `${IMG}/images/gallery/kou6.jpeg`, cat: "Portraits" },
  { src: `${IMG}/images/gallery/IMG_2247.JPG.jpeg`, cat: "Portraits" },
  { src: `${IMG}/images/gallery/IMG_2255.JPG.jpeg`, cat: "Portraits" },
  { src: `${IMG}/images/gallery/new.jpeg`, cat: "Portraits" },
  { src: `${IMG}/images/gallery/new2.jpeg`, cat: "Portraits" },
  { src: `${IMG}/images/gallery/kou7.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/gallery/kou9.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/gallery/kou10.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/gallery/IMG_8206.JPG.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/gallery/kou11.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/gallery/IMG_2257.JPG.jpeg`, cat: "Group" },
  { src: `${IMG}/images/gallery/IMG_2258.JPG.jpeg`, cat: "Group" },
  { src: `${IMG}/images/gallery/IMG_8207.JPG.jpeg`, cat: "Portraits" },

  // Dubai Performance Images
  { src: `${IMG}/images/performances/dubai_1.jpeg`, cat: "Performances" },
  { src: `${IMG}/images/performances/dubai_2.jpeg`, cat: "Performances" },
];

export const GALLERY_FILTERS = ["All", "Performances", "Productions", "Group", "Portraits"];
