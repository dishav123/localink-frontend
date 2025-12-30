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
  {
    _id: "sp1",
    name: "Ramesh Khadka",
    image: Person1,
    speciality: "Carpenter",
    experience: "5 Years",
    description:
      "Experienced carpenter known for high-quality furniture work, modular kitchen installations, and custom woodcraft projects.",
    fees: 1500,
    address: {
      line1: "Pepsicola, Kathmandu",
      line2: "Near Town Planning Chowk",
    },
    rating: 4.8,
    totalReviews: 8,
    completedProjects: 120,
    skills: [
      "Custom Furniture",
      "Modular Kitchen Setup",
      "Door & Window Frames",
      "Office Interior Woodwork",
    ],
    emergencyAvailable: true,
    emergencyFees: 2200,
    contact: {
      phone: "98XXXXXXXX",
      email: "******@gmail.com",
    },
    customerReviews: [
      { name: "Sita Gurung", rating: 5, comment: "Excellent finishing and very professional." },
      { name: "Mohan Shrestha", rating: 4.6, comment: "Delivered on time, great quality work." },
      { name: "Anita Lama", rating: 4.8, comment: "Highly skilled carpenter." },
      { name: "Bikash Rana", rating: 4.7, comment: "Very neat and clean work." },
      { name: "Sunita Gurung", rating: 5, comment: "Loved the kitchen setup." },
      { name: "Kiran Shrestha", rating: 4.5, comment: "Good communication and service." },
      { name: "Pooja Maharjan", rating: 4.9, comment: "Strongly recommended." },
      { name: "Ramesh Adhikari", rating: 4.6, comment: "Worth the money." },
    ],
    detailedDescription: {
      overview:
        "Ramesh Khadka is a seasoned carpenter with over 5 years of experience delivering premium woodwork solutions across Kathmandu Valley.",
    },
  },

  {
    _id: "sp2",
    name: "Suman Shrestha",
    image: Person1,
    speciality: "Electrician",
    experience: "3 Years",
    description:
      "Certified electrician specializing in home wiring, inverter setup, and electrical safety.",
    fees: 1000,
    address: {
      line1: "Suryabinayak, Bhaktapur",
      line2: "Near CDO Office",
    },
    rating: 4.6,
    totalReviews: 8,
    completedProjects: 80,
    skills: ["Home Wiring", "Inverter Setup", "MCB Repair", "Lighting Installation"],
    emergencyAvailable: true,
    emergencyFees: 1800,
    contact: {
      phone: "98XXXXXXXX",
      email: "******@gmail.com",
    },
    customerReviews: [
      { name: "Anil Karki", rating: 4.6, comment: "Wiring issue solved safely." },
      { name: "Rina Thapa", rating: 4.7, comment: "Very polite and professional." },
      { name: "Suresh BK", rating: 4.5, comment: "Quick troubleshooting." },
      { name: "Manisha Rai", rating: 4.8, comment: "Highly knowledgeable electrician." },
      { name: "Prakash Shah", rating: 4.4, comment: "Affordable and reliable." },
      { name: "Nabin Gurung", rating: 4.6, comment: "Good safety practices." },
      { name: "Bina Lama", rating: 4.7, comment: "Solved inverter problem easily." },
      { name: "Kamal Thapa", rating: 4.5, comment: "Satisfied with service." },
    ],
    detailedDescription: {
      overview:
        "Suman Shrestha provides reliable and safe electrical solutions for residential buildings.",
    },
  },

  {
    _id: "sp3",
    name: "Prakash Gurung",
    image: Person1,
    speciality: "Plumber",
    experience: "6 Years",
    description:
      "Reliable plumber experienced in pipeline installation and leakage repair.",
    fees: 800,
    address: {
      line1: "Lakeside, Pokhara",
      line2: "Near Phewa Marga",
    },
    rating: 4.7,
    totalReviews: 8,
    completedProjects: 200,
    skills: ["Pipeline Installation", "Leakage Repair", "Bathroom Fittings", "Water Tank Cleaning"],
    emergencyAvailable: true,
    emergencyFees: 1500,
    contact: {
      phone: "98XXXXXXXX",
      email: "******@gmail.com",
    },
    customerReviews: [
      { name: "Bikash Rana", rating: 4.8, comment: "Leakage fixed permanently." },
      { name: "Sunita Gurung", rating: 4.6, comment: "Very fast service." },
      { name: "Ramesh KC", rating: 4.7, comment: "Good plumbing knowledge." },
      { name: "Nisha Thapa", rating: 4.8, comment: "Clean and durable fix." },
      { name: "Arjun Lama", rating: 4.6, comment: "No more water issues." },
      { name: "Dipesh Rai", rating: 4.7, comment: "Highly recommended plumber." },
      { name: "Sanjay Shah", rating: 4.5, comment: "Affordable pricing." },
      { name: "Puja Shrestha", rating: 4.8, comment: "Professional behavior." },
    ],
    detailedDescription: {
      overview:
        "Prakash Gurung has over 6 years of experience delivering long-term plumbing solutions.",
    },
  },

  {
    _id: "sp4",
    name: "Nirmala Lama",
    image: Person1,
    speciality: "House Cleaner",
    experience: "4 Years",
    description:
      "Professional house cleaner specializing in deep cleaning and sanitization.",
    fees: 1200,
    address: {
      line1: "Jawalakhel, Lalitpur",
      line2: "Near Zoo Gate",
    },
    rating: 4.6,
    totalReviews: 8,
    completedProjects: 110,
    skills: ["Deep Cleaning", "Bathroom Sanitization", "Kitchen Cleaning"],
    emergencyAvailable: false,
    emergencyFees: null,
    contact: {
      phone: "98XXXXXXXX",
      email: "******@gmail.com",
    },
    customerReviews: [
      { name: "Pooja Maharjan", rating: 4.7, comment: "House was spotless." },
      { name: "Kiran Shrestha", rating: 4.5, comment: "Very punctual." },
      { name: "Manita Rai", rating: 4.6, comment: "Hygienic cleaning." },
      { name: "Rupesh Thapa", rating: 4.7, comment: "Good attention to detail." },
    ],
    detailedDescription: {
      overview:
        "Nirmala Lama delivers thorough and hygienic house cleaning services.",
    },
  },

  {
    _id: "sp5",
    name: "Dipesh Sunar",
    image: Person1,
    speciality: "Painter",
    experience: "7 Years",
    description:
      "Expert painter skilled in interior and exterior wall painting.",
    fees: 1800,
    address: {
      line1: "Koteshwor, Kathmandu",
      line2: "Near Balkumari Bridge",
    },
    rating: 4.9,
    totalReviews: 8,
    completedProjects: 50,
    skills: ["Interior Painting", "Exterior Painting", "Waterproofing", "Texture Design"],
    emergencyAvailable: false,
    emergencyFees: null,
    contact: {
      phone: "98XXXXXXXX",
      email: "******@gmail.com",
    },
    customerReviews: [
      { name: "Ramesh Adhikari", rating: 5, comment: "Perfect finish." },
      { name: "Sujata Lama", rating: 4.8, comment: "Neat and clean work." },
      { name: "Nabin Rai", rating: 4.9, comment: "Great color suggestions." },
      { name: "Puja Thapa", rating: 4.7, comment: "On-time completion." },
    ],
    detailedDescription: {
      overview:
        "Dipesh Sunar has completed premium painting projects across Kathmandu Valley.",
    },
  },

  {
    _id: "sp6",
    name: "Sujan KC",
    image: Person,
    speciality: "Technician",
    experience: "5 Years",
    description:
      "Skilled technician specializing in home appliance repair.",
    fees: 900,
    address: {
      line1: "Kalikanagar, Butwal",
      line2: "Near Red Cross Building",
    },
    rating: 4.6,
    totalReviews: 8,
    completedProjects: 500,
    skills: ["Fridge Repair", "TV Repair", "Washing Machine", "Microwave Repair"],
    emergencyAvailable: true,
    emergencyFees: 1600,
    contact: {
      phone: "98XXXXXXXX",
      email: "******@gmail.com",
    },
    customerReviews: [
      { name: "Anita Sharma", rating: 4.7, comment: "Fridge repaired quickly." },
      { name: "Bimal Thapa", rating: 4.6, comment: "Genuine spare parts." },
      { name: "Suman Rai", rating: 4.5, comment: "Affordable pricing." },
      { name: "Nisha KC", rating: 4.8, comment: "Very skilled technician." },
    ],
    detailedDescription: {
      overview:
        "Sujan KC has handled over 500 appliance repair cases with reliable outcomes.",
    },
  },

  {
    _id: "sp7",
    name: "Kamal Adhikari",
    image: Person,
    speciality: "Carpenter",
    experience: "4 Years",
    description:
      "Specializes in doors, windows, and wooden partitions.",
    fees: 1400,
    address: {
      line1: "Gongabu, Kathmandu",
      line2: "Near Bus Park",
    },
    rating: 4.5,
    totalReviews: 8,
    completedProjects: 90,
    skills: ["Door Installation", "Window Frames", "Wooden Flooring"],
    emergencyAvailable: false,
    emergencyFees: null,
    contact: {
      phone: "98XXXXXXXX",
      email: "******@gmail.com",
    },
    customerReviews: [
      { name: "Nabin Thapa", rating: 4.6, comment: "Strong finishing." },
      { name: "Rita Lama", rating: 4.5, comment: "Affordable carpenter." },
      { name: "Bishal Rai", rating: 4.7, comment: "Good craftsmanship." },
      { name: "Sita Gurung", rating: 4.4, comment: "Satisfied." },
      { name: "Anil KC", rating: 4.5, comment: "On time delivery." },
      { name: "Kiran Lama", rating: 4.6, comment: "Good quality." },
      { name: "Puja Shah", rating: 4.5, comment: "Professional work." },
      { name: "Dipesh Gurung", rating: 4.6, comment: "Recommended." },
    ],
    detailedDescription: {
      overview:
        "Kamal Adhikari focuses on affordable and durable carpentry solutions.",
    },
  },

  {
    _id: "sp8",
    name: "Laxmi Thapa",
    image: Person,
    speciality: "House Cleaner",
    experience: "2 Years",
    description:
      "Focused on apartment cleaning and sofa shampoo services.",
    fees: 1000,
    address: {
      line1: "Thamel, Kathmandu",
      line2: "Near Garden of Dreams",
    },
    rating: 4.4,
    totalReviews: 8,
    completedProjects: 80,
    skills: ["Apartment Cleaning", "Carpet Vacuuming", "Sofa Shampoo"],
    emergencyAvailable: false,
    emergencyFees: null,
    contact: {
      phone: "98XXXXXXXX",
      email: "******@gmail.com",
    },
    customerReviews: [
      { name: "Ramesh Shah", rating: 4.5, comment: "Friendly service." },
      { name: "Anju Lama", rating: 4.4, comment: "Very detailed cleaning." },
      { name: "Kiran Rai", rating: 4.3, comment: "Satisfied." },
      { name: "Puja KC", rating: 4.6, comment: "Nice work." },
      { name: "Suman Gurung", rating: 4.5, comment: "Good effort." },
      { name: "Dipika Thapa", rating: 4.4, comment: "Will call again." },
      { name: "Bishal Lama", rating: 4.5, comment: "Affordable." },
      { name: "Rita Rai", rating: 4.3, comment: "Good service." },
    ],
    detailedDescription: {
      overview:
        "Laxmi Thapa provides affordable and friendly cleaning services.",
    },
  },

  {
    _id: "sp9",
    name: "Arjun Chaudhary",
    image: Person,
    speciality: "Plumber",
    experience: "3 Years",
    description:
      "Handles leakage repair and geyser fitting.",
    fees: 700,
    address: {
      line1: "Hasanpur, Dhangadhi",
      line2: "Near Park Area",
    },
    rating: 4.4,
    totalReviews: 8,
    completedProjects: 70,
    skills: ["Leakage Repair", "Geyser Fitting", "Bathroom Pipeline"],
    emergencyAvailable: true,
    emergencyFees: 1300,
    contact: {
      phone: "98XXXXXXXX",
      email: "******@gmail.com",
    },
    customerReviews: [
      { name: "Suresh Yadav", rating: 4.4, comment: "Quick fix." },
      { name: "Anita Chaudhary", rating: 4.5, comment: "Polite behavior." },
      { name: "Ramesh Sah", rating: 4.3, comment: "Good plumber." },
      { name: "Sunil Shah", rating: 4.4, comment: "Affordable." },
      { name: "Bina Devi", rating: 4.5, comment: "Satisfied." },
      { name: "Kamal Yadav", rating: 4.4, comment: "Professional." },
      { name: "Sita Sah", rating: 4.5, comment: "Recommended." },
      { name: "Nabin Sah", rating: 4.3, comment: "Good work." },
    ],
    detailedDescription: {
      overview:
        "Arjun Chaudhary provides reliable plumbing services in Dhangadhi.",
    },
  },

  {
    _id: "sp10",
    name: "Puja Maharjan",
    image: Person,
    speciality: "Painter",
    experience: "5 Years",
    description:
      "Expert in wall shine finish and creative room painting.",
    fees: 1700,
    address: {
      line1: "Pulchowk, Lalitpur",
      line2: "Near Engineering Campus",
    },
    rating: 4.8,
    totalReviews: 8,
    completedProjects: 65,
    skills: ["Wall Shine Finish", "Kids Room Art", "Office Painting"],
    emergencyAvailable: false,
    emergencyFees: null,
    contact: {
      phone: "98XXXXXXXX",
      email: "******@gmail.com",
    },
    customerReviews: [
      { name: "Nisha Rai", rating: 4.9, comment: "Creative designs." },
      { name: "Bishal Thapa", rating: 4.8, comment: "Loved the colors." },
      { name: "Suman KC", rating: 4.7, comment: "Professional painter." },
      { name: "Anju Lama", rating: 4.8, comment: "Very neat." },
      { name: "Ramesh Shah", rating: 4.9, comment: "Excellent finish." },
      { name: "Kiran Gurung", rating: 4.8, comment: "Worth it." },
      { name: "Puja Rai", rating: 4.7, comment: "Good service." },
      { name: "Dipesh Lama", rating: 4.8, comment: "Highly recommended." },
    ],
    detailedDescription: {
      overview:
        "Puja Maharjan specializes in creative and professional painting services.",
    },
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
