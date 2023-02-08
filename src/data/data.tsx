import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Harvey Duperier's Homepage",
  description: "Personal Website built with react.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi. I'm Harvey Duperier.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a North Carolina based Student, currently studying
        at <strong className="text-stone-100">UNC-Chapel Hill</strong> focused on <strong className="text-stone-100">Economics and Computer Science</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training my <strong className="text-stone-100">German Sherpherd</strong>,
        plucking my <strong className="text-stone-100">guitar</strong> (badly), or exploring {' '}
        <strong className="text-stone-100">The Triangle</strong> (Chapel Hill, Durham, Raleigh).
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm graduating from UNC-Chapel Hill in May 2023 with dual degrees in Economics and Computer Science. Besides those subject areas, I am greatly interested in financial markets (traditional, cryptocurrency, commodities), machine learning, and data science.`,
  aboutItems: [
    {label: 'Location', text: 'Chapel Hill, NC', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Finance, Fishing, Walking my Dog', Icon: SparklesIcon},
    {label: 'Study', text: 'University of North Carolina at Chapel Hill', Icon: AcademicCapIcon},
    {label: 'Degrees', text: 'B.S. in Economics; B.A. in Computer Science.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken Languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'HTML/CSS',
        level: 8,
      },
      {
        name: 'Javascript',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Node.js',
        level: 4,
      },
    ],
  },
  {
    name: 'Miscellaneous Development',
    skills: [
      {
        name: 'Microsoft Office (Excel in Particular)',
        level: 9,
      },
      {
        name: 'R',
        level: 7,
      },
      {
        name: 'Swift',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
// What do I put in the url section for each item below to link to html files?
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Loan Default Predictor',
    description: 'Prediction of defaults utilizing Machine Learning models.',
    url: 'https://hduperier.github.io/loanDefaultPrediction/',
    image: porfolioImage1,
  },
  {
    title: 'Modeling KickStarter Campaign Success.',
    description: 'Predicting campaign success with machine learning algorithms.',
    url: 'https://github.com/hduperier/kickstarterMachineLearning/blob/main/573%20Research%20Paper.pdf',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2023',
    location: 'University of North Carolina at Chapel Hill',
    title: 'B.S. in Economics',
    content: <p>Studied Economics at UNC-Chapel Hill. Relevant coursework includes: Econometrics, Machine Learning Econometrics, Labor Economics, Economics of Life, and others.</p>,
  },
  {
    date: 'May 2023',
    location: 'University of North Carolina at Chapel Hill',
    title: 'B.A. in Computer Science',
    content: <p>Studied Computer Science at UNC-Chapel Hill. Relevant coursework includes: Data Structures, Software Development, Cybersecurity, Machine Learning Econometrics, and others.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2020 - Present',
    location: 'Self-Employed',
    title: 'Research / Investment',
    content: (
      <p>
        <ul>
          <li>Heavily researched cryptocurrency and traditional finance markets, focusing on topics such as scalability of blockchains through L2s, EVM workings, automated trading bots, and more.</li>
          <li>Personal investing on multiple time-frames with self-developed trading edges through TA, FA, tokenomics, and heavy research/data analytics.</li>
          <li>Made strides in data science knowledge with high profieciency in Python, R, and SQL, among other languages.</li>
          <li>Developed personal trading bots in cryptocurrency markets that work on multiple timeframes.</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'August 2021 - August 2022',
    location: 'Olympus DAO',
    title: 'Research / Financial Intern & Assistant',
    content: (
      <p>
        <ul>
          <li>Organized seed round investing and exchange listing conversation between my superior, the head of Olympus, and financial corporations and VCs, such as Coinbase, paradigm, a16z, Atlantis VC, Arca VC, and more.</li>
          <li>Personally kept and managed my superior's schedule and calendar, aiding in calls, meetings, development, and research.</li>
          <li>Aided in research papers on Layer 2 scaling solutions and digital inverse bonds.</li>
          <li>Handled all other personal aspects of supervisor's schedule and life, planning and updating nearly hourly.</li>
        </ul>
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If you would like to reach out to me, use the provided contact box or follow the links to one of my contacts.',
  items: [
    {
      type: ContactType.Email,
      text: 'henryha@live.unc.edu',
      href: 'mailto:henryha@live.unc.edu',
    },
    {
      type: ContactType.Location,
      text: 'Chapel Hill, NC',
      href: 'https://goo.gl/maps/cgVUdECny7Ykr88W7',
    },
    {
      type: ContactType.Github,
      text: 'hduperier',
      href: 'https://github.com/hduperier',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/hduperier'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/21114786/hduperier'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/h-harvey-duperier-049bb8198'},
];
