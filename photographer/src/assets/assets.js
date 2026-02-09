import {FaSun,FaHeart,FaUserFriends,FaPlane,FaCalendarAlt, FaLightbulb,FaPalette,FaRegImage,FaCameraRetro, FaSearchPlus,FaStreetView, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';


import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Creative Vision',
      description: 'Seeing moments differently and framing them with emotion and purpose.',
      color: 'text-purple'
    },
    {
      icon: FaCameraRetro,
      title: 'Visual Storytelling',
      description: 'Turning real moments into meaningful stories through light and composition.',
      color: 'text-pink'
    },
    {
      icon:  FaSearchPlus,
      title: 'Attention to Detail',
      description: 'Every frame is carefully refined — from lighting to the smallest expression.',
      color: 'text-blue'
    }
  ];



export const skills = [
   {
    title: "Creative Vision",
    icon: FaLightbulb,
    description: "Transforming ideas and emotions into meaningful visual concepts.",
    tags: ["Creative Direction", "Concept Development", "Visual Ideas"]
  },
  {
    title: "Photography",
    icon: FaCameraRetro,
    description: "Capturing authentic moments with a focus on emotion, light, and composition.",
    tags: ["Portraits", "Candid Shots", "Events", "Street Photography"]
  },
  {
    title: "Visual Storytelling",
    icon: FaRegImage,
    description: "Telling stories through thoughtfully composed and expressive photographs.",
    tags: ["Storytelling", "Composition", "Narrative Frames"]
  },
  {
    title: "Color & Editing",
    icon: FaPalette,
    description: "Enhancing images with subtle, natural, and cinematic color tones.",
    tags: ["Lightroom", "Photoshop", "Color Correction", "Retouching"]
  },
  {
    title: "Lighting Techniques",
    icon: FaSun,
    description: "Using light creatively to shape mood, depth, and atmosphere.",
    tags: ["Natural Light", "Golden Hour", "Studio Lighting"]
  },
  {
    title: "Passion & Dedication",
    icon: FaHeart,
    description: "Driven by passion to create timeless photographs with attention to detail.",
    tags: ["Consistency", "Patience", "Personal Projects"]
  }
];



export const categories = [
  {
    title: "Wedding Photography",
    description: "Capturing emotional, candid, and timeless moments from wedding ceremonies.",
    image: projectImg1,
    tech: ["Candid Moments", "Low Light", "Storytelling"],
    icons: [FaHeart, FaCameraRetro],
    demo: "#",   // can link to gallery page
    code: "#",   // optional or remove later
  },
  {
    title: "Pre-Wedding Shoots",
    description: "Romantic and cinematic pre-wedding stories captured with creativity.",
    image: projectImg2,
    tech: ["Couple Poses", "Outdoor Shoots", "Natural Light"],
    icons: [FaUserFriends, FaCameraRetro],
    demo: "#",
    code: "#",
  },
  {
    title: "Portrait Photography",
    description: "Expressive portraits highlighting personality and emotion.",
    image: projectImg3,
    tech: ["Studio Setup", "Expressions", "Lighting"],
    icons: [FaCameraRetro],
    demo: "#",
    code: "#",
  },
  {
    title: "Street Photography",
    description: "Raw and real moments captured from everyday street life.",
    image: projectImg4,
    tech: ["Candid Shots", "Urban Life", "Black & White"],
    icons: [FaStreetView, FaCameraRetro],
    demo: "#",
    code: "#",
  },
  {
    title: "Travel Photography",
    description: "Stories of places, cultures, and landscapes from different locations.",
    image: projectImg5,
    tech: ["Landscape", "Golden Hour", "Composition"],
    icons: [FaPlane, FaCameraRetro],
    demo: "#",
    code: "#",
  },
  {
    title: "Events & Celebrations",
    description: "Memorable moments from events, parties, and special occasions.",
    image: projectImg6,
    tech: ["Live Moments", "Low Light", "Candid Frames"],
    icons: [FaCalendarAlt, FaCameraRetro],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Professional Photographer",
    company: "Freelance",
    duration: "2022 - Present",
    description:
      "Working with clients to capture weddings, portraits, and events, focusing on candid moments, natural light, and emotional storytelling.",
    color: "purple"
  },
  {
    role: "Photography Enthusiast",
    company: "Personal Projects",
    duration: "2020 - 2022",
    description:
      "Developed photography skills through personal shoots, street photography, and creative experiments with composition, lighting, and editing.",
    color: "pink"
  },
  {
    role: "Beginner Photographer",
    company: "Self Learning",
    duration: "2018 - 2020",
    description:
      "Started photography as a hobby, learning camera basics, framing techniques, and post-processing while building a strong foundation in visual storytelling.",
    color: "blue"
  }
];

