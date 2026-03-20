import logo from "./LocalinkLogo.png";
import profile_pic from "./profile_pic.png";
import dropdownIcon from "./dropdown_icon.svg";
import group_profiles from "./group_profiles.png";
import arrowIcon from "./arrow_icon.svg";
import headerImage from "./HeaderImage.png";
import headerImage2 from "./HeaderImage2.png";
import ElectricianSpec1 from "./ElectricianSpec1.svg";
import PainterSpec1 from "./PainterSpec1.svg";
import HouseCleanerSpec from "./HouseCleanerSpec.svg";
import TechnicianSpec1 from "./TechnicianSpec1.svg";
import CarpenterSpec1 from "./CarpenterSpec1.svg";
import PlumberSpec1 from "./PlumberSpec1.svg";
import Person from "./ServiceProviderImage/Person.png";
import Person1 from "./ServiceProviderImage/Person1.png";
import BannerImage from "./ServiceProviderImage/BannerImage1.png";
import MapClone from "./MapClone.jpg";
import Cleaning from "./Cleaning.jpeg";
import exampleImage from "./example.jpg";
import TechnicianService from "./ServiceProviderImage/TechnicianRepairing.png";
import TankCleaning from "./ServiceProviderImage/TankCleaning.png";
import CarpenterService from "./ServiceProviderImage/CarpenterService.png";
import ElectricianService from "./ServiceProviderImage/ElectricianService.png";
import ACRepairService from "./ServiceProviderImage/ACRepairServices.png";
import PlumbingService from "./ServiceProviderImage/PlumbingServices.png";
import HouseCleanService from "./ServiceProviderImage/HouseCleanServices.png";
import LaptopRepairService from "./ServiceProviderImage/LaptopRepairServices.png";
import PaintingService from "./ServiceProviderImage/PaintingService.png";
import KitchenHoodCleaning from "./ServiceProviderImage/KitchenHoodCleaning.png";
import verifiedIcon from "./Icons/verified_icon.svg";
import InfoIcon from "./Icons/info_icon.svg";
import LocationPinIcon from "./Icons/LocationPin.svg";
import AboutPage2 from "./ServiceProviderImage/AboutPage2.jpg";
import WorkerWomen from "./ServiceProviderImage/WorkerWomen.png"
import WorkerWomen2 from "./ServiceProviderImage/WorkerWomen2.png"
import WorkerMen from "./ServiceProviderImage/WorkerMen.png"
import WorkerMen2 from "./ServiceProviderImage/WorkerMen2.png"
import Email_icon from "./Icons/EmailC.svg";
import Phone_icon from "./Icons/PhoneC.svg";
import Home_icon from "./Icons/HomeC1.svg";
import ContactHero from "./ContactHero.jpg";
import MailIcon from './Icons/MailIcon.svg';
import PhoneIcon from './Icons/PhoneIcon.svg'
import BackArrow from './Icons/BackArrow.svg'
import EditIcon from './Icons/EditIcon.svg';
import SaveIcon from './Icons/SaveIcon.svg';
import TechnicianSub1 from "./ServiceProviderImage/TechnicianSub1.png";
import AdminIcon from "./Icons/AdminIcon.svg";
import ProviderIcon from "./Icons/ProviderIcon.svg";

export const assets = {
  logo,
  profile_pic,
  dropdownIcon,
  group_profiles,
  arrowIcon,
  headerImage,
  headerImage2,
  BannerImage,
  MapClone,
  Cleaning,
  exampleImage,
  TechnicianService,
  TankCleaning,
  CarpenterService,
  ElectricianService,
  ACRepairService,
  PlumbingService,
  HouseCleanService,
  LaptopRepairService,
  PaintingService,
  KitchenHoodCleaning,
  verifiedIcon,
  InfoIcon,
  LocationPinIcon,
  AboutPage2,
  Email_icon,
  Phone_icon,
  Home_icon,
  ContactHero,
  MailIcon,
  PhoneIcon,
  BackArrow,
  EditIcon,
  SaveIcon,
  AdminIcon,
  ProviderIcon,
};

export const specialityData = [
  {
    speciality: "Carpenter",
    image: CarpenterSpec1,
  },
  {
    speciality: "Electrician",
    image: ElectricianSpec1,
  },
  {
    speciality: "Plumber",
    image: PlumberSpec1,
  },
  {
    speciality: "Painter",
    image: PainterSpec1,
  },
  {
    speciality: "House Cleaner",
    image: HouseCleanerSpec,
  },
  {
    speciality: "Technician",
    image: TechnicianSpec1,
  },
];

export const serviceProviders = [
 
  // ── 1. Carpenter ──────────────────────────────────────────────────────────
  {
    _id: "sp1",
    name: "Ramesh Khadka",
    image: WorkerMen,
    speciality: "Carpenter",           // matches specialityData exactly
    yearsOfExperience: 5,
    experience: [
      {
        title: "Senior Carpenter",
        company: "WoodCraft Nepal",
        years: 5,
        desc: "Custom furniture and interior woodwork for residential and commercial clients.",
      },
    ],
    description:
      "Experienced carpenter known for high-quality furniture work, modular kitchen installations, and custom woodcraft projects. Specializes in both residential and commercial interiors.",
    fees: 1500,
    province: "Bagmati",
    city: "Kathmandu",
    municipality: "Pepsicola",
    wardNo: "7",
    rating: 4.8,
    totalReviews: 8,
    completedProjects: 120,
    skills: ["Custom Furniture", "Modular Kitchen Setup", "Door & Window Frames", "Office Interior Woodwork"],
    certifications: ["Certified Woodwork Technician"],
    phone: 9800000001,
    email: "ramesh.khadka@gmail.com",
    customerReviews: [
      { name: "Sita Gurung",     rating: 5,   comment: "Excellent finishing and very professional." },
      { name: "Mohan Shrestha",  rating: 4.6, comment: "Delivered on time, great quality work." },
      { name: "Anita Lama",      rating: 4.8, comment: "Highly skilled carpenter." },
      { name: "Bikash Rana",     rating: 4.7, comment: "Very neat and clean work." },
      { name: "Sunita Gurung",   rating: 5,   comment: "Loved the kitchen setup." },
      { name: "Kiran Shrestha",  rating: 4.5, comment: "Good communication and service." },
      { name: "Pooja Maharjan",  rating: 4.9, comment: "Strongly recommended." },
      { name: "Ramesh Adhikari", rating: 4.6, comment: "Worth the money." },
    ],
    slots_booked: {},
    agreedToTerms: true,
    agreedToPrivacy: true,
    agreedToConduct: true,
  },
 
  // ── 2. Electrician ────────────────────────────────────────────────────────
  {
    _id: "sp2",
    name: "Sita Sharma",
    image: WorkerWomen2,
    speciality: "Electrician",         // matches specialityData exactly
    yearsOfExperience: 8,
    experience: [
      {
        title: "Senior Electrician",
        company: "PowerFix Nepal",
        years: 8,
        desc: "Residential and commercial wiring, solar panel setup and maintenance.",
      },
    ],
    description:
      "Licensed electrician with expertise in wiring, circuit installations, and electrical safety inspections. Handles everything from basic repairs to full house rewiring.",
    fees: 1200,
    province: "Bagmati",
    city: "Lalitpur",
    municipality: "Pulchowk",
    wardNo: "3",
    rating: 4.6,
    totalReviews: 5,
    completedProjects: 95,
    skills: ["Wiring", "Circuit Installation", "Safety Inspection", "Solar Setup"],
    certifications: ["Licensed Electrician — Nepal Electricity Authority"],
    phone: 9800000002,
    email: "sita.sharma@gmail.com",
    customerReviews: [
      { name: "Deepak Thapa",  rating: 5,   comment: "Very professional and safe work." },
      { name: "Nisha Karki",   rating: 4.5, comment: "Fixed our wiring issue quickly." },
      { name: "Arun Bhandari", rating: 4.7, comment: "Reliable and knowledgeable." },
      { name: "Mina Tamang",   rating: 4.3, comment: "Good service, fair price." },
      { name: "Suresh Pandey", rating: 4.5, comment: "Would recommend to others." },
    ],
    slots_booked: {},
    agreedToTerms: true,
    agreedToPrivacy: true,
    agreedToConduct: true,
  },
 
  // ── 3. Plumber ────────────────────────────────────────────────────────────
  {
    _id: "sp3",
    name: "Bikram Thapa",
    image: WorkerMen,
    speciality: "Plumber",             // matches specialityData exactly
    yearsOfExperience: 6,
    experience: [
      {
        title: "Plumber",
        company: "AquaFix Nepal",
        years: 6,
        desc: "Pipe repair, leak detection, and bathroom fixture installations.",
      },
    ],
    description:
      "Skilled plumber specializing in residential pipe repair, leakage detection, and bathroom fixture installations. Available for both emergency and scheduled work.",
    fees: 1000,
    province: "Bagmati",
    city: "Bhaktapur",
    municipality: "Suryabinayak",
    wardNo: "5",
    rating: 4.5,
    totalReviews: 6,
    completedProjects: 80,
    skills: ["Pipe Repair", "Leak Detection", "Bathroom Installation", "Water Tank Setup"],
    certifications: ["Certified Plumbing Technician"],
    phone: 9800000003,
    email: "bikram.thapa@gmail.com",
    customerReviews: [
      { name: "Rajan Shrestha", rating: 4.5, comment: "Fixed the leak perfectly." },
      { name: "Kamala Poudel",  rating: 4.6, comment: "Quick and efficient service." },
      { name: "Hari Prasad",    rating: 4.4, comment: "Reasonable pricing." },
      { name: "Gita Rai",       rating: 4.7, comment: "Very thorough work." },
      { name: "Nabin KC",       rating: 4.3, comment: "Arrived on time." },
      { name: "Pratima Oli",    rating: 4.5, comment: "Will hire again." },
    ],
    slots_booked: {},
    agreedToTerms: true,
    agreedToPrivacy: true,
    agreedToConduct: true,
  },
 
  // ── 4. Painter ────────────────────────────────────────────────────────────
  {
    _id: "sp4",
    name: "Dipesh Maharjan",
    image: WorkerMen2,
    speciality: "Painter",             // matches specialityData exactly
    yearsOfExperience: 7,
    experience: [
      {
        title: "Lead Painter",
        company: "ColorPro Nepal",
        years: 4,
        desc: "Interior and exterior painting for residential buildings.",
      },
      {
        title: "Painter",
        company: "Bright Walls Pvt. Ltd.",
        years: 3,
        desc: "Decorative painting and texture work.",
      },
    ],
    description:
      "Professional painter with 7 years of experience in interior and exterior painting. Expert in texture finishes, waterproofing, and decorative wall art for homes and offices.",
    fees: 900,
    province: "Bagmati",
    city: "Kathmandu",
    municipality: "Kirtipur",
    wardNo: "2",
    rating: 4.7,
    totalReviews: 7,
    completedProjects: 145,
    skills: ["Interior Painting", "Exterior Painting", "Texture Finish", "Waterproof Coating", "Wall Art"],
    certifications: ["Asian Paints Certified Applicator"],
    phone: 9800000004,
    email: "dipesh.maharjan@gmail.com",
    customerReviews: [
      { name: "Sabina Shrestha",   rating: 5,   comment: "Flawless finish, very happy with the result." },
      { name: "Rohit Bajracharya", rating: 4.7, comment: "Clean work and finished on time." },
      { name: "Suman Panta",       rating: 4.6, comment: "Great texture work in our living room." },
      { name: "Nilu Tamang",       rating: 4.8, comment: "Very professional and tidy." },
      { name: "Prakash Karki",     rating: 4.5, comment: "Good quality paint job." },
      { name: "Manjula Rai",       rating: 4.9, comment: "Exceeded expectations." },
      { name: "Bikash Pandey",     rating: 4.6, comment: "Affordable and excellent quality." },
    ],
    slots_booked: {},
    agreedToTerms: true,
    agreedToPrivacy: true,
    agreedToConduct: true,
  },
 
  // ── 5. House Cleaner ──────────────────────────────────────────────────────
  {
    _id: "sp5",
    name: "Sunita Rai",
    image: WorkerWomen,
    speciality: "House Cleaner",       // matches specialityData exactly
    yearsOfExperience: 4,
    experience: [
      {
        title: "House Cleaning Specialist",
        company: "CleanHome Services",
        years: 4,
        desc: "Deep cleaning, post-construction cleaning, and regular maintenance cleaning.",
      },
    ],
    description:
      "Reliable and thorough house cleaning professional with 4 years of experience. Provides deep cleaning, regular maintenance, and post-renovation cleanup services for homes and offices.",
    fees: 700,
    province: "Bagmati",
    city: "Lalitpur",
    municipality: "Jawalakhel",
    wardNo: "4",
    rating: 4.9,
    totalReviews: 12,
    completedProjects: 200,
    skills: ["Deep Cleaning", "Kitchen Cleaning", "Bathroom Sanitization", "Post-Construction Cleanup", "Regular Maintenance"],
    certifications: ["Certified Hygiene & Sanitation Technician"],
    phone: 9800000005,
    email: "sunita.rai@gmail.com",
    customerReviews: [
      { name: "Priya Gurung",     rating: 5,   comment: "Spotless cleaning, highly recommend!" },
      { name: "Anil Shrestha",    rating: 4.9, comment: "Very thorough and reliable." },
      { name: "Mina Karmacharya", rating: 5,   comment: "Our home has never been this clean." },
      { name: "Saroj Bhattarai",  rating: 4.8, comment: "Punctual and professional." },
      { name: "Rita Hamal",       rating: 4.9, comment: "Amazing work, will book again." },
      { name: "Kamal Dhakal",     rating: 4.7, comment: "Good attention to detail." },
      { name: "Binita Subedi",    rating: 5,   comment: "Best cleaning service in the area." },
      { name: "Nirmala Pokhrel",  rating: 4.8, comment: "Very satisfied with the service." },
      { name: "Tulsi Bhandari",   rating: 4.9, comment: "Efficient and hardworking." },
      { name: "Govind Adhikari",  rating: 5,   comment: "Will definitely hire again." },
      { name: "Pushpa Neupane",   rating: 4.8, comment: "Great job on post-construction cleanup." },
      { name: "Hira Lama",        rating: 4.9, comment: "Excellent service at a fair price." },
    ],
    slots_booked: {},
    agreedToTerms: true,
    agreedToPrivacy: true,
    agreedToConduct: true,
  },
 
  // ── 6. Technician ─────────────────────────────────────────────────────────
  {
    _id: "sp6",
    name: "Sagar Poudel",
    image: WorkerMen2,
    speciality: "Technician",          // matches specialityData exactly
    yearsOfExperience: 9,
    experience: [
      {
        title: "IT Support Engineer",
        company: "TechNepal Pvt. Ltd.",
        years: 5,
        desc: "Hardware repair, networking, and software troubleshooting.",
      },
      {
        title: "Computer Technician",
        company: "DigiCare Services",
        years: 4,
        desc: "Laptop and desktop servicing, data recovery.",
      },
    ],
    description:
      "Experienced IT technician specializing in computer repair, network setup, CCTV installation, and software troubleshooting. Serves both home users and small businesses.",
    fees: 1100,
    province: "Bagmati",
    city: "Kathmandu",
    municipality: "New Baneshwor",
    wardNo: "10",
    rating: 4.7,
    totalReviews: 9,
    completedProjects: 310,
    skills: ["Computer Repair", "Network Setup", "CCTV Installation", "Data Recovery", "Software Troubleshooting", "Printer Setup"],
    certifications: ["CompTIA A+ Certified", "Cisco CCNA"],
    phone: 9800000006,
    email: "sagar.poudel@gmail.com",
    customerReviews: [
      { name: "Roshan Joshi",    rating: 5,   comment: "Fixed my laptop in no time, great service." },
      { name: "Anjali Thapa",    rating: 4.6, comment: "Set up our office network perfectly." },
      { name: "Manish Adhikari", rating: 4.7, comment: "Very knowledgeable and fast." },
      { name: "Kavita Tamang",   rating: 4.8, comment: "Recovered all my important data, lifesaver!" },
      { name: "Bijay Shrestha",  rating: 4.5, comment: "Good service at a fair price." },
      { name: "Samjhana Rai",    rating: 4.9, comment: "CCTV installation was clean and professional." },
      { name: "Dipak Karki",     rating: 4.7, comment: "Reliable and honest technician." },
      { name: "Sunita Basnet",   rating: 4.6, comment: "Solved issues others couldn't fix." },
      { name: "Niraj Bhusal",    rating: 4.8, comment: "Highly recommended for network setup." },
    ],
    slots_booked: {},
    agreedToTerms: true,
    agreedToPrivacy: true,
    agreedToConduct: true,
  },
 
];


export const featuredServices = [
  {
    id: "fs1",
    serviceTitle: "Hire a Technician",
    providerName: "Ramesh Khadka",
    povId: "sp1",
    description:
      "Experienced technician skilled in repairing home appliances with quick diagnostic service.",
    cost: 1800,
    review: 4.8,
    category: "Technician",
    image: TechnicianService,
    subImage1: TechnicianSub1,
    detailedDescription:{
      overview: "Ramesh Khadka is a seasoned technician with over 5 years of experience in repairing a wide range of home appliances. From refrigerators to washing machines, Ramesh has successfully serviced over 300 households in the Kathmandu Valley. His expertise lies in quick diagnostics, efficient repairs, and using genuine spare parts to ensure long-lasting solutions.",
      servicesOffered: [
        "Refrigerator Repair",
        "Washing Machine Servicing",
        "Microwave Oven Fixes",
        "Television Repairs",
      ],
      whyChooseRamesh: [
        "5+ Years of Experience",
        "300+ Satisfied Customers",
        "Quick Diagnostic Service",
        "Affordable Pricing",
      ],
      customerReviews: [
        {
          name: "Sita Gurung",    
          rating: 5,
          comment: "Ramesh fixed my refrigerator in no time! Very professional and affordable."
        },
        {
          name: "Mohan Shrestha",
          rating: 4.5,
          comment: "Great service! My washing machine works like new again."
        },
        {
          name: "Anita Lama",
          rating: 4.8,
          comment: "Highly recommend Ramesh for any home appliance repairs."
        }
      ]
    }
  },
  {
    id: "fs2",
    serviceTitle: "Water Tank Cleaning",
    providerName: "Sita Cleaning Services",
    povId: "sp2",
    description:
      "Professional tank cleaning using safe tools and hygienic methods for clean water.",
    cost: 1500,
    review: 4.6,
    category: "Cleaning",
    image: TankCleaning,
    subImage1: TankCleaning,
    subImage2: TankCleaning,
    subImage3: TankCleaning,
    detailedDescription:{
      overview: "Sita Cleaning Services specializes in professional water tank cleaning with over 4 years of experience. Our team ensures your water storage is thoroughly cleaned and sanitized using eco-friendly products and advanced cleaning equipment. We've served over 250 residential and commercial properties across Kathmandu.",
      servicesOffered: [
        "Underground Tank Cleaning",
        "Overhead Tank Cleaning",
        "Water Quality Testing",
        "Tank Sanitization",
      ],
      whyChooseRamesh: [
        "4+ Years of Experience",
        "Eco-Friendly Cleaning Products",
        "Trained Professionals",
        "Same-Day Service Available",
      ],
      customerReviews: [
        {
          name: "Prakash Adhikari",    
          rating: 5,
          comment: "Excellent service! My water tank is spotless and the water quality has improved."
        },
        {
          name: "Sunita Rai",
          rating: 4.5,
          comment: "Very professional team. They completed the work efficiently."
        },
        {
          name: "Krishna Karki",
          rating: 4.5,
          comment: "Affordable pricing and great results. Highly recommend!"
        }
      ]
    }
  },
  {
    id: "fs3",
    serviceTitle: "Carpenter On-Demand",
    providerName: "Bikash Shrestha",
    povId: "sp3",
    description:
      "Specialist in furniture repair, door adjustments, and custom wooden designs.",
    cost: 1200,
    review: 4.7,
    category: "Carpenter",
    image: CarpenterService,
    subImage1: CarpenterService,
    subImage2: CarpenterService,
    subImage3: CarpenterService,
    detailedDescription:{
      overview: "Bikash Shrestha is a skilled carpenter with 6 years of experience in furniture making, repair, and custom woodwork. From fixing broken chairs to creating beautiful custom cabinets, Bikash brings craftsmanship and attention to detail to every project. He has completed over 400 successful projects in the Kathmandu Valley.",
      servicesOffered: [
        "Furniture Repair",
        "Door & Window Installation",
        "Custom Wooden Designs",
        "Cabinet Making",
      ],
      whyChooseRamesh: [
        "6+ Years of Experience",
        "High-Quality Workmanship",
        "Custom Design Solutions",
        "Affordable Rates",
      ],
      customerReviews: [
        {
          name: "Rajesh Pandey",    
          rating: 5,
          comment: "Bikash did an amazing job repairing my old furniture. Looks brand new!"
        },
        {
          name: "Meena Shakya",
          rating: 4.5,
          comment: "Very skilled carpenter. Made custom shelves exactly as I wanted."
        },
        {
          name: "Anil Thapa",
          rating: 4.7,
          comment: "Professional service and reasonable pricing. Will hire again!"
        }
      ]
    }
  },
  {
    id: "fs4",
    serviceTitle: "Electricity Checkup",
    providerName: "Mina Thapa",
    povId: "sp4",
    description:
      "Licensed electrician for wiring inspection, light installation, and emergency fixes.",
    cost: 900,
    review: 4.9,
    category: "Electrician",
    image: ElectricianService,
    subImage1: ElectricianService,
    subImage2: ElectricianService,
    subImage3: ElectricianService,
    detailedDescription:{
      overview: "Mina Thapa is a certified electrician with 7 years of experience in residential and commercial electrical work. She specializes in safety inspections, wiring installations, and emergency repairs. With a perfect safety record and over 500 satisfied clients, Mina is known for her meticulous work and reliability.",
      servicesOffered: [
        "Electrical Wiring",
        "Light Installation",
        "Circuit Board Repair",
        "Emergency Electrical Fixes",
      ],
      whyChooseRamesh: [
        "Licensed & Certified",
        "7+ Years of Experience",
        "24/7 Emergency Service",
        "Perfect Safety Record",
      ],
      customerReviews: [
        {
          name: "Suresh Maharjan",    
          rating: 5,
          comment: "Mina is extremely professional and knowledgeable. Fixed my electrical issue quickly."
        },
        {
          name: "Gita Tamang",
          rating: 5,
          comment: "Very reliable and punctual. Highly recommend for any electrical work!"
        },
        {
          name: "Ramesh Kc",
          rating: 4.8,
          comment: "Excellent service! She explained everything clearly and worked efficiently."
        }
      ]
    }
  },
  {
    id: "fs5",
    serviceTitle: "House Deep Cleaning",
    providerName: "Hari Chaudhary",
    povId: "sp5",
    description:
      "Comprehensive cleaning including bathroom, kitchen, windows, and floor sanitizing.",
    cost: 3500,
    review: 4.5,
    category: "Cleaning",
    image: HouseCleanService,
    subImage1: HouseCleanService,
    subImage2: HouseCleanService,
    subImage3: HouseCleanService,
    detailedDescription:{
      overview: "Hari Chaudhary leads a professional cleaning team with 5 years of experience in deep house cleaning services. Using eco-friendly cleaning products and modern equipment, the team ensures every corner of your home is spotless. They have successfully cleaned over 350 homes in Kathmandu Valley.",
      servicesOffered: [
        "Bathroom Deep Cleaning",
        "Kitchen Sanitization",
        "Window & Glass Cleaning",
        "Floor Polishing",
      ],
      whyChooseRamesh: [
        "Eco-Friendly Products",
        "Professional Team",
        "5+ Years Experience",
        "Satisfaction Guaranteed",
      ],
      customerReviews: [
        {
          name: "Laxmi Shrestha",    
          rating: 5,
          comment: "My house has never been this clean! Very thorough and professional service."
        },
        {
          name: "Binod Acharya",
          rating: 4.5,
          comment: "Great team and excellent cleaning. Worth every rupee!"
        },
        {
          name: "Sabina Rana",
          rating: 4.3,
          comment: "Good service overall. They cleaned everything properly."
        }
      ]
    }
  },
  {
    id: "fs6",
    serviceTitle: "AC Maintenance",
    providerName: "Kamal Tamang",
    povId: "sp6",
    description:
      "AC servicing, cooling check, gas refill, and filter cleaning for better performance.",
    cost: 2500,
    review: 4.7,
    category: "Technician",
    image: ACRepairService,
    subImage1: ACRepairService,
    subImage2: ACRepairService,
    subImage3: ACRepairService,
    detailedDescription:{
      overview: "Kamal Tamang is a certified AC technician with 8 years of experience in servicing and repairing air conditioners of all brands. He specializes in preventive maintenance, gas refilling, and troubleshooting cooling issues. With over 600 successful repairs, Kamal ensures your AC runs efficiently all year round.",
      servicesOffered: [
        "AC Gas Refilling",
        "Filter Cleaning",
        "Cooling System Check",
        "AC Installation",
      ],
      whyChooseRamesh: [
        "8+ Years of Experience",
        "All Brands Supported",
        "Quick Service",
        "Genuine Spare Parts",
      ],
      customerReviews: [
        {
          name: "Deepak Poudel",    
          rating: 5,
          comment: "Kamal fixed my AC perfectly. It's cooling much better now!"
        },
        {
          name: "Nirmala Basnet",
          rating: 4.7,
          comment: "Very knowledgeable technician. Explained everything clearly."
        },
        {
          name: "Gopal Ghimire",
          rating: 4.5,
          comment: "Great service at a reasonable price. Highly recommended!"
        }
      ]
    }
  },
  {
    id: "fs7",
    serviceTitle: "Plumbing & Leakage Fix",
    providerName: "Nabin Lama",
    povId: "sp7",
    description:
      "Reliable solution for leakage problems, tap replacements, and pipe repairs.",
    cost: 1100,
    review: 4.6,
    category: "Plumbing",
    image: PlumbingService,
    subImage1: PlumbingService,
    subImage2: PlumbingService,
    subImage3: PlumbingService,
    detailedDescription:{
      overview: "Nabin Lama is an experienced plumber with 6 years of expertise in solving all types of plumbing issues. From minor leaks to complete pipe replacements, Nabin provides reliable and long-lasting solutions. He has successfully completed over 450 plumbing jobs across residential and commercial properties.",
      servicesOffered: [
        "Leakage Repair",
        "Tap Replacement",
        "Pipe Installation",
        "Drainage Cleaning",
      ],
      whyChooseRamesh: [
        "6+ Years of Experience",
        "Emergency Service Available",
        "Quality Materials Used",
        "Fair Pricing",
      ],
      customerReviews: [
        {
          name: "Bishnu Karki",    
          rating: 5,
          comment: "Nabin solved my leakage problem quickly. Very professional!"
        },
        {
          name: "Sushma Gurung",
          rating: 4.5,
          comment: "Excellent plumber! Fixed multiple issues in one visit."
        },
        {
          name: "Raju Dangol",
          rating: 4.5,
          comment: "Good service and reasonable rates. Recommended!"
        }
      ]
    }
  },
  {
    id: "fs8",
    serviceTitle: "Laptop Repair Service",
    providerName: "Aayush KC",
    povId: "sp8",
    description:
      "Laptop repair including part replacement, OS installation, and performance optimization.",
    cost: 2000,
    review: 4.8,
    category: "Electronics",
    image: LaptopRepairService,
    subImage1: LaptopRepairService,
    subImage2: LaptopRepairService,
    subImage3: LaptopRepairService,
    detailedDescription:{
      overview: "Aayush KC is a certified computer technician with 5 years of experience in laptop repair and maintenance. He specializes in hardware repairs, software troubleshooting, and performance optimization. With expertise in all major brands, Aayush has successfully repaired over 500 laptops with a high customer satisfaction rate.",
      servicesOffered: [
        "Hardware Repair",
        "OS Installation",
        "Data Recovery",
        "Performance Optimization",
      ],
      whyChooseRamesh: [
        "Certified Technician",
        "5+ Years Experience",
        "All Brands Supported",
        "Data Security Guaranteed",
      ],
      customerReviews: [
        {
          name: "Prajwal Shahi",    
          rating: 5,
          comment: "Aayush fixed my laptop screen quickly. Very skilled and professional!"
        },
        {
          name: "Nikita Thapa",
          rating: 4.8,
          comment: "Great service! My laptop is running smoothly now."
        },
        {
          name: "Sandip Rai",
          rating: 4.7,
          comment: "Honest pricing and quality work. Highly recommend!"
        }
      ]
    }
  },
  {
    id: "fs9",
    serviceTitle: "Painting & Wall Coating",
    providerName: "Sandhya Balami",
    povId: "sp9",
    description:
      "Interior and exterior wall painting with smooth finishing and premium paint quality.",
    cost: 5000,
    review: 4.5,
    category: "Painting",
    image: PaintingService,
    subImage1: PaintingService,
    subImage2: PaintingService,
    subImage3: PaintingService,
    detailedDescription:{
      overview: "Sandhya Balami leads a professional painting team with 7 years of experience in residential and commercial painting. Using premium quality paints and modern techniques, her team delivers flawless finishes for both interior and exterior surfaces. They have successfully completed over 200 painting projects.",
      servicesOffered: [
        "Interior Painting",
        "Exterior Wall Coating",
        "Texture Painting",
        "Color Consultation",
      ],
      whyChooseRamesh: [
        "7+ Years of Experience",
        "Premium Quality Paints",
        "Clean Work Process",
        "Free Color Consultation",
      ],
      customerReviews: [
        {
          name: "Kiran Tamang",    
          rating: 5,
          comment: "Beautiful paint job! Sandhya's team was very professional and clean."
        },
        {
          name: "Maya Pradhan",
          rating: 4.5,
          comment: "Excellent work quality. My house looks brand new!"
        },
        {
          name: "Ashok Magar",
          rating: 4.3,
          comment: "Good service overall. Happy with the results."
        }
      ]
    }
  },
  {
    id: "fs10",
    serviceTitle: "Kitchen Hood Cleaning",
    providerName: "Dipendra Shah",
    povId: "sp10",
    description:
      "Deep cleaning of chimney and kitchen hood to remove grease and improve ventilation.",
    cost: 1600,
    review: 4.7,
    category: "Cleaning",
    image: KitchenHoodCleaning,
    subImage1: KitchenHoodCleaning,
    subImage2: KitchenHoodCleaning,
    subImage3: KitchenHoodCleaning,
    detailedDescription:{
      overview: "Dipendra Shah specializes in kitchen hood and chimney cleaning with 4 years of professional experience. Using specialized degreasing agents and equipment, he ensures your kitchen ventilation system is thoroughly cleaned and functions optimally. He has serviced over 300 kitchens across Kathmandu Valley.",
      servicesOffered: [
        "Chimney Deep Cleaning",
        "Kitchen Hood Cleaning",
        "Grease Removal",
        "Filter Replacement",
      ],
      whyChooseRamesh: [
        "4+ Years of Experience",
        "Specialized Equipment",
        "Safe Cleaning Methods",
        "Improved Ventilation",
      ],
      customerReviews: [
        {
          name: "Samjhana Lama",    
          rating: 5,
          comment: "Dipendra did an amazing job! My kitchen hood is spotless now."
        },
        {
          name: "Roshan Basnet",
          rating: 4.7,
          comment: "Very thorough cleaning. The ventilation has improved significantly."
        },
        {
          name: "Anjali Joshi",
          rating: 4.5,
          comment: "Professional service at a fair price. Recommended!"
        }
      ]
    }
  },
];
