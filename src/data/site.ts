// Central site content for A&B Construction.
//
// This is the single source of truth for company info, navigation, services,
// team, and featured projects. Items the client has not provided yet are left
// as empty strings or marked with a `todo` flag so they render as clearly
// labeled placeholders instead of fabricated content.
//
// TODO(client): replace every `todo: true` item and empty contact field below
// with real details before the public launch.

export interface ContactInfo {
  phone: string;
  phoneHref: string;
  email: string;
  address: {
    line1: string;
    city: string;
    state: string;
    zip: string;
  };
}

export const site = {
  name: 'A&B Construction',
  shortName: 'A&B',
  tagline: 'Full-service residential & commercial construction in Western North Carolina.',
  serviceArea: 'Western North Carolina',
  // TODO(client): confirm/replace real contact details before public launch.
  contact: {
    phone: '',
    phoneHref: '',
    email: '',
    address: {
      line1: '',
      city: 'Burnsville',
      state: 'NC',
      zip: '',
    },
  } as ContactInfo,
};

export const navLinks = [
  { name: 'Residential', href: '/residential' },
  { name: 'Commercial', href: '/commercial' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

// Temporary stock imagery. TODO(client): swap for real project photo folders.
export const placeholderImages = {
  residentialHero:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
  commercialHero:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80',
  customHome:
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
  renovation:
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
  addition:
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
  farmhouse:
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
  commercialBuilding:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  commercialInterior:
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
  recreation:
    'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=1400&q=80',
  crew:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
};

// What We Do — from ab_site_details.pdf.
export interface ServiceCategory {
  id: string;
  title: string;
  division: 'residential' | 'commercial';
  tagline: string;
  items: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'residential',
    title: 'Residential Construction',
    division: 'residential',
    tagline: 'Custom homes and places to live, built for the mountains.',
    items: [
      'Custom homes',
      'Rental properties',
      'Spec & community homes',
      'Tiny homes & barndominiums',
    ],
  },
  {
    id: 'renovations',
    title: 'Renovations & Additions',
    division: 'residential',
    tagline: 'Expanding, updating, and transforming existing spaces.',
    items: [
      'Room additions & expansions',
      'Decks, porches, and exterior builds',
      'Full interior & exterior remodels',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    division: 'commercial',
    tagline: 'Light commercial and traveling builds for business clients.',
    items: [
      'Light commercial facilities',
      'Traveling commercial builds',
      'Specialty structures & custom facility projects',
    ],
  },
  {
    id: 'specialty',
    title: 'Specialty Project Services',
    division: 'commercial',
    tagline: 'Site-driven, structural, and design-led project work.',
    items: [
      'Site-driven builds & grading-integrated projects',
      'Structural enhancements',
      'Community-based spec development',
      'Custom design-driven construction',
    ],
  },
];

// How We Operate — from ab_site_details.pdf. `todo` items await client copy.
export interface OperatingItem {
  title: string;
  body: string;
  todo?: boolean;
}

export const operatingModel: OperatingItem[] = [
  {
    title: 'General Contracting',
    body: '',
    todo: true,
  },
  {
    title: 'Design & Build',
    body: '',
    todo: true,
  },
  {
    title: 'Construction Management',
    body: '',
    todo: true,
  },
  {
    title: 'Subcontractor-Driven, Supervisor-Managed',
    body: 'We work through an established and deeply built subcontractor network that spans every phase of construction — from initial grading and site preparation to structural work, mechanical systems, and final finishings. Each job site is directly supervised by our project supervisor to ensure coordinated workflow, consistent quality, safety compliance, and reliable timeline performance.',
  },
  {
    title: 'Clear Client Communication',
    body: 'Clients remain connected with our leadership throughout each project stage — from planning and permitting to final walkthrough.',
  },
  {
    title: 'Efficient Project Structuring',
    body: 'Our operational model allows us to manage multiple simultaneous builds while maintaining reliable, personalized service.',
  },
];

// Team — from ab_site_details.pdf. Bios/titles/education await client copy.
export interface TeamMember {
  name: string;
  initials: string;
  role: string;
  group: 'Partners' | 'Officers';
  bio: string;
  todo?: boolean;
}

export const team: TeamMember[] = [
  {
    name: 'Avery Austin',
    initials: 'AA',
    role: 'Founding Partner',
    group: 'Partners',
    bio: '',
    todo: true,
  },
  {
    name: 'Tristan McCarty',
    initials: 'TM',
    role: 'Partner',
    group: 'Partners',
    bio: '',
    todo: true,
  },
  {
    name: 'Josh Banks',
    initials: 'JB',
    role: 'Founding Partner',
    group: 'Partners',
    bio: '',
    todo: true,
  },
  {
    name: 'Andrew Brown',
    initials: 'AB',
    role: 'Officer',
    group: 'Officers',
    bio: '',
    todo: true,
  },
];

// Project spotlight — real projects named in ab_site_details.pdf.
// Summaries and photos await client content (summaryTodo / placeholder image).
export type ProjectCategory =
  | 'Custom Homes'
  | 'Commercial Construction'
  | 'Renovations & Additions'
  | 'Specialty Builds'
  | 'Subcontracted Projects';

export interface Project {
  id: string;
  title: string;
  location: string;
  division: 'residential' | 'commercial';
  category: ProjectCategory;
  summary: string;
  summaryTodo?: boolean;
  image: string;
}

export const portfolioCategories: ProjectCategory[] = [
  'Custom Homes',
  'Commercial Construction',
  'Renovations & Additions',
  'Specialty Builds',
  'Subcontracted Projects',
];

export const projects: Project[] = [
  {
    id: 'phipps-creek',
    title: 'Phipps Creek Road Custom Home',
    location: 'Burnsville, NC',
    division: 'residential',
    category: 'Custom Homes',
    summary: '',
    summaryTodo: true,
    image: placeholderImages.customHome,
  },
  {
    id: 'lickskillet',
    title: 'Lickskillet Road Custom Home',
    location: 'Burnsville, NC',
    division: 'residential',
    category: 'Custom Homes',
    summary: '',
    summaryTodo: true,
    image: placeholderImages.farmhouse,
  },
  {
    id: 'serrell-garage',
    title: '4-Car Garage & 2-Bedroom Build',
    location: 'Avery County, NC',
    division: 'residential',
    category: 'Renovations & Additions',
    summary: '',
    summaryTodo: true,
    image: placeholderImages.addition,
  },
  {
    id: 'barndominium',
    title: 'Barndominium Build',
    location: 'Burnsville, NC',
    division: 'residential',
    category: 'Specialty Builds',
    summary: '',
    summaryTodo: true,
    image: placeholderImages.renovation,
  },
  {
    id: 'ray-cort-park',
    title: 'Ray-Cort Recreation Park',
    location: 'Burnsville, NC',
    division: 'commercial',
    category: 'Subcontracted Projects',
    summary: '',
    summaryTodo: true,
    image: placeholderImages.recreation,
  },
  {
    id: 'toe-river-gallery',
    title: 'Toe River Art Gallery Facility Build',
    location: 'Burnsville, NC',
    division: 'commercial',
    category: 'Commercial Construction',
    summary: '',
    summaryTodo: true,
    image: placeholderImages.commercialInterior,
  },
  {
    id: 'spay-neuter',
    title: 'Spay & Neuter Facility Build',
    location: 'Burnsville, NC',
    division: 'commercial',
    category: 'Commercial Construction',
    summary: '',
    summaryTodo: true,
    image: placeholderImages.commercialBuilding,
  },
];

// About Us — finished copy from ab_site_details.pdf.
export const aboutCopy = [
  'A&B Construction is a full-service residential and commercial construction firm based in Western North Carolina. We are a locally owned company built on clear communication, dependable oversight, and a commitment to delivering high-quality work.',
  'We manage a broad range of construction projects — from custom homes and large-scale renovations to commercial builds and specialty structures. Supported by a strong subcontractor network and dedicated on-site supervision, we deliver consistent craftsmanship, reliable scheduling, and straightforward project management.',
  'Our leadership team brings practical field expertise, client-focused communication, and organized operational structure to every build.',
];
