export interface ApproachTrait {
  id: string;
  title: string;
  summary: string;
  rotationClass: string;
  tapeRotationClass: string;
  reflection: string;
  practiceTag: string;
}

export interface ProfileRow {
  label: string;
  value: string;
  isMono?: boolean;
}

export interface HobbyItem {
  id: 'writing' | 'drawing' | 'reading' | 'photography' | 'dance';
  title: string;
  summary: string;
  rotationClass: string;
  tapeRotationClass: string;
  journalTitle: string;
  journalNote: string;
  favoritePrompt: string;
}

export interface MarketShareBrand {
  brand: string;
  share: number;
  barColorClass: string;
  insight: string;
  segment: string;
}

export interface AppleFactor {
  title: string;
  detail: string;
}

export interface SketchbookPage {
  id: string;
  title: string;
  dateLabel: string;
  caption: string;
  notes: string;
}

export const APPROACH_TRAITS: ApproachTrait[] = [
  {
    id: 'curious',
    title: 'Curious',
    summary: 'I enjoy learning new things and exploring ideas from different perspectives.',
    rotationClass: '-rotate-2',
    tapeRotationClass: 'rotate-2',
    reflection:
      'Every project begins with a simple question—why do people choose certain tools, and how can information be presented so it feels intuitive and welcoming?',
    practiceTag: 'Research · Observation',
  },
  {
    id: 'creative',
    title: 'Creative',
    summary: 'I like expressing ideas through writing, drawing, and visual storytelling.',
    rotationClass: 'rotate-2',
    tapeRotationClass: '-rotate-2',
    reflection:
      'Combining hand-drawn sketchbook warmth with structured digital layouts helps ideas stay memorable and human.',
    practiceTag: 'Visual Storytelling · Layout',
  },
  {
    id: 'detail-oriented',
    title: 'Detail-Oriented',
    summary: 'I value neatness, clarity, and attention to detail in the things I create.',
    rotationClass: '-rotate-1',
    tapeRotationClass: 'rotate-1',
    reflection:
      'From aligned margins and readable typography to verified data citations, small refinements elevate the whole piece.',
    practiceTag: 'Typography · Data Hygiene',
  },
  {
    id: 'adaptable',
    title: 'Adaptable',
    summary: 'I am open to learning, trying new things, and developing my skills.',
    rotationClass: 'rotate-2',
    tapeRotationClass: '-rotate-3',
    reflection:
      'Studying Information Systems means balancing analytical logic with creative experimentation across new mediums.',
    practiceTag: 'Continuous Learning · ITPLN',
  },
];

export const ABOUT_CONTENT = {
  kicker: 'A Little About Me',
  heading: "Hey, I'm Anggun",
  bioId:
    'Halo, aku Anggun Adha Hanifa, mahasiswa Program Studi Sistem Informasi di ITPLN. Aku tertarik pada dunia kreativitas dan teknologi. Aku senang menulis, menggambar, membaca, mengambil foto, dan menari. Bagiku, Sistem Informasi bukan hanya tentang logika, tetapi juga tentang bagaimana ide dan kreativitas dapat dipadukan dengan teknologi untuk menghasilkan sesuatu yang bermanfaat.',
  bioEn:
    "Hello, I'm Anggun Adha Hanifa, an Information Systems student at ITPLN. I am drawn to the intersection of creativity and technology. I love writing, drawing, reading, capturing photos, and dancing. For me, Information Systems is not only about logic—it is about blending ideas and creativity with technology to craft something genuinely meaningful.",
  footnote: 'curious mind · creative heart',
};

export const PROFILE_ROWS: ProfileRow[] = [
  { label: 'Name', value: 'Anggun Adha Hanifa' },
  { label: 'Campus', value: 'ITPLN' },
  { label: 'Study Program', value: 'Sistem Informasi' },
  { label: 'Student ID', value: '202632013', isMono: true },
  { label: 'Interests', value: 'Writing, Drawing, Reading, Photography, Dance' },
  { label: 'Personality', value: 'Curious, creative, detail-oriented' },
];

export const HOBBIES: HobbyItem[] = [
  {
    id: 'writing',
    title: 'Writing',
    summary: 'A space to arrange thoughts and tell stories through words.',
    rotationClass: '-rotate-1',
    tapeRotationClass: 'rotate-2',
    journalTitle: 'Field Notes & Reflections',
    journalNote:
      'Writing helps clarify complex technical concepts into approachable stories—whether drafting study summaries, personal essays, or UI microcopy.',
    favoritePrompt: 'Journaling observations about everyday digital habits.',
  },
  {
    id: 'drawing',
    title: 'Drawing',
    summary: 'A way to turn imagination and ideas into visual forms.',
    rotationClass: 'rotate-1',
    tapeRotationClass: '-rotate-2',
    journalTitle: 'Botanical & Wireframe Sketches',
    journalNote:
      'Before opening any screen, ideas start on warm paper—botanical margins, layout thumbnails, and visual metaphors.',
    favoritePrompt: 'Pressed leaves, ink linework, and editorial grid drafts.',
  },
  {
    id: 'reading',
    title: 'Reading',
    summary: 'A little journey to discover new knowledge and perspectives.',
    rotationClass: '-rotate-2',
    tapeRotationClass: 'rotate-1',
    journalTitle: 'Reading Desk',
    journalNote:
      'Exploring design monographs, Indonesian essays, and technology case studies broadens how I frame problems in Information Systems.',
    favoritePrompt: 'Annotated margins and quiet afternoon chapters.',
  },
  {
    id: 'photography',
    title: 'Capturing Photos',
    summary: 'A way to keep moments and notice small details around me.',
    rotationClass: 'rotate-2',
    tapeRotationClass: '-rotate-1',
    journalTitle: 'Light & Everyday Frames',
    journalNote:
      'Photography trains the eye for framing, balance, and natural warmth—the same visual sensitivity I bring into digital compositions.',
    favoritePrompt: 'Morning shadows, campus corners, and warm textures.',
  },
  {
    id: 'dance',
    title: 'Dance',
    summary: 'A form of expression through movement, rhythm, and music.',
    rotationClass: '-rotate-1',
    tapeRotationClass: 'rotate-3',
    journalTitle: 'Rhythm & Movement',
    journalNote:
      'Dance brings balance away from screens—teaching timing, expressive flow, and confidence in collaborative spaces.',
    favoritePrompt: 'Choreography practice and expressive tempo.',
  },
];

export const MOBILE_VENDOR_SHARES: MarketShareBrand[] = [
  {
    brand: 'Apple',
    share: 20.78,
    barColorClass: 'bg-choc-dark',
    segment: 'Flagship & Secondary iOS Ecosystem',
    insight:
      'Leads individual vendor share in Indonesia at 20.78%, supported by strong resale demand, longevity of iOS updates, and aspirational brand appeal.',
  },
  {
    brand: 'Samsung',
    share: 14.15,
    barColorClass: 'bg-choc-mid',
    segment: 'Entry-to-Flagship Android Portfolio',
    insight:
      'Second-largest share at 14.15%, anchored by wide distribution across Galaxy A-series mid-range models and flagship productivity devices.',
  },
  {
    brand: 'Oppo',
    share: 11.83,
    barColorClass: 'bg-gold-muted',
    segment: 'Camera-Focused Retail & Mid-Range',
    insight:
      'Captures 11.83% through strong offline retail presence across Indonesia and portrait-oriented smartphone marketing.',
  },
  {
    brand: 'Xiaomi',
    share: 10.85,
    barColorClass: 'bg-choc-dark/70',
    segment: 'Price-to-Performance Enthusiasts',
    insight:
      'Holds 10.85% with strong loyalty among students and tech-savvy buyers seeking high specifications at accessible price points.',
  },
  {
    brand: 'Vivo',
    share: 9.21,
    barColorClass: 'bg-choc-dark/50',
    segment: 'Youth & Social Media Photography',
    insight:
      'Accounts for 9.21%, favored for sleek hardware designs, front-camera features, and broad nationwide retail visibility.',
  },
];

export const APPLE_ADOPTION_FACTORS: AppleFactor[] = [
  {
    title: 'Long-Term Device Durability',
    detail:
      'Older iPhone generations continue to perform smoothly for everyday messaging, coursework, and mobile photography years after initial release.',
  },
  {
    title: 'Consistent iOS Software Updates',
    detail:
      'Multi-year security patches and OS upgrades keep devices compatible with modern campus, banking, and creative apps.',
  },
  {
    title: 'Active Second-Hand iPhone Market',
    detail:
      'High resale liquidity lowers the effective cost of ownership, allowing students and young professionals to enter the ecosystem sustainably.',
  },
  {
    title: 'Brand Prestige & Ecosystem Continuity',
    detail:
      'Consistent camera processing, AirDrop convenience, and recognizable industrial design reinforce word-of-mouth adoption.',
  },
];

export const SKETCHBOOK_PAGES: SketchbookPage[] = [
  {
    id: 'botanical',
    title: '01. Botanical Paper Study',
    dateLabel: 'Sketchbook Page 04',
    caption: 'sketchbook & notes',
    notes:
      'Layered torn-paper silhouette paired with muted sage, dusty pink, and gold leaf accents—the visual seed for this portfolio.',
  },
  {
    id: 'grid-notes',
    title: '02. Editorial Grid & Paper Clips',
    dateLabel: 'Sketchbook Page 09',
    caption: 'layout proportions',
    notes:
      'Exploring how structured 28px graph paper grounds tilted stationery notes so the page feels handcrafted yet easy to scan.',
  },
  {
    id: 'infographic-draft',
    title: '03. Smartphone Share Draft',
    dateLabel: 'Sketchbook Page 14',
    caption: 'statcounter notes',
    notes:
      'Translating Statcounter Indonesia vendor percentages into warm chocolate-and-gold horizontal bars with clear tabular figures.',
  },
];

export const SOCIAL_PROFILES = {
  instagram: {
    platform: 'Instagram',
    handle: '@anggunadhahanifa',
    note: 'Visual diary, creative sketches, campus snapshots & everyday stories.',
    suggestedTopics: 'Photography · Sketchbook · Daily Notes',
  },
  facebook: {
    platform: 'Facebook',
    handle: 'Anggun Adha Hanifa',
    note: 'Academic updates, community discussions & shared creative articles.',
    suggestedTopics: 'ITPLN · Information Systems · Collaboration',
  },
};
