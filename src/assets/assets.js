import logo from './LocalinkLogo.png'
import profile_pic from './profile_pic.png'
import dropdownIcon from './dropdown_icon.svg'
import group_profiles from './group_profiles.png'
import arrowIcon from './arrow_icon.svg'
import headerImage from './HeaderImage.png'
import headerImage2 from './HeaderImage2.png'
import ElectricianSpec1 from './ElectricianSpec1.svg'
import PainterSpec1 from './PainterSpec1.svg'
import HouseCleanerSpec from './HouseCleanerSpec.svg'
import TechnicianSpec1 from './TechnicianSpec1.svg'
import CarpenterSpec1 from './CarpenterSpec1.svg'
import PlumberSpec1 from './PlumberSpec1.svg'
import Person from './ServiceProviderImage/Person.png'
import Person1 from './ServiceProviderImage/Person1.png'
import BannerImage from './ServiceProviderImage/BannerImage1.png'
import MapClone from './MapClone.jpg'
import Cleaning from './Cleaning.jpeg'
import exampleImage from './example.jpg'
import TechnicianService from './ServiceProviderImage/TechnicianRepairing.png'
import TankCleaning from './ServiceProviderImage/TankCleaning.png'
import CarpenterService from './ServiceProviderImage/CarpenterService.png'
import ElectricianService from './ServiceProviderImage/ElectricianService.png'
import ACRepairService from './ServiceProviderImage/ACRepairServices.png'
import PlumbingService from './ServiceProviderImage/PlumbingServices.png'
import HouseCleanService from './ServiceProviderImage/HouseCleanServices.png'
import LaptopRepairService from './ServiceProviderImage/LaptopRepairServices.png'
import PaintingService from './ServiceProviderImage/PaintingService.png'
import KitchenHoodCleaning from './ServiceProviderImage/KitchenHoodCleaning.png'
import verifiedIcon from './Icons/verified_icon.svg'
import InfoIcon from './Icons/info_icon.svg'
import LocationPinIcon from './Icons/LocationPin.svg'

export const assets={
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
    LocationPinIcon
}


export const specialityData = [
    {
        speciality: 'Carpenter',
        image: CarpenterSpec1
    },
    {
        speciality: 'Electrician',
        image: ElectricianSpec1
    },
    {
        speciality: 'Plumber',
        image: PlumberSpec1
    },
    {
        speciality: 'Painter',
        image: PainterSpec1
    },
    {
        speciality: 'House Cleaner',
        image: HouseCleanerSpec
    },
    {
        speciality: 'Technician',
        image: TechnicianSpec1
    },
]

export const serviceProviders = [
    {
        _id: 'sp1',
        name: 'Ramesh Khadka',
        image: Person1,
        speciality: 'Carpenter',
        experience: '5 Years',
        description:
            'Experienced carpenter known for high-quality furniture work, modular kitchen installations, and custom woodcraft projects. Has completed more than 120+ residential and office projects in Kathmandu Valley. Clients appreciate his precision, fast delivery, and clean finishing.',
        fees: 1500,
        address: {
            line1: 'Pepsicola, Kathmandu',
            line2: 'Near Town Planning Chowk'
        }
    },
    {
        _id: 'sp2',
        name: 'Suman Shrestha',
        image: Person1,
        speciality: 'Electrician',
        experience: '3 Years',
        description:
            'Certified electrician specializing in home wiring, inverter setup, MCB panel repair, and lighting solutions. Completed multiple apartment wiring projects in Bhaktapur and Lalitpur. Known for safe service, fast troubleshooting, and professional behavior.',
        fees: 1000,
        address: {
            line1: 'Suryabinayak, Bhaktapur',
            line2: 'Near CDO Office'
        }
    },
    {
        _id: 'sp3',
        name: 'Prakash Gurung',
        image:Person1,
        speciality: 'Plumber',
        experience: '6 Years',
        description:
            'Reliable plumber experienced in pipeline installation, bathroom fittings, water tank cleaning, and leakage repair. Has serviced 200+ households in Pokhara. Known for long-term fixes, quick inspections, and using quality materials.',
        fees: 800,
        address: {
            line1: 'Lakeside, Pokhara',
            line2: 'Near Phewa Marga'
        }
    },
    {
        _id: 'sp4',
        name: 'Nirmala Lama',
        image:Person1,
        speciality: 'House Cleaner',
        masterIn: 'Bathroom Sanitization',
        experience: '4 Years',
        description:
            'Professional house cleaner specializing in deep cleaning, bathroom sanitization, and kitchen grease removal. Has worked with multiple apartments and homestays in Lalitpur. Clients appreciate her punctuality, honesty, and thorough work. lorem ipsum dolor sit amet, consectetur adipiscing elit lore lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorrem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
        fees: 1200,
        address: {
            line1: 'Jawalakhel, Lalitpur',
            line2: 'Near Zoo Gate'
        }
    },
    {
        _id: 'sp5',
        name: 'Dipesh Sunar',
        image:Person1,
        speciality: 'Painter',
        experience: '7 Years',
        description:
            'Expert painter skilled in interior/exterior wall painting, texture design, and waterproofing. Completed over 50+ house painting projects in Kathmandu and Hetauda. Known for neat finishing, color guidance, and timely project completion.',
        fees: 1800,
        address: {
            line1: 'Koteshwor, Kathmandu',
            line2: 'Near Balkumari Bridge'
        }
    },
    {
        _id: 'sp6',
        name: 'Sujan KC',
        image:Person,
        speciality: 'Technician',
        experience: '5 Years',
        description:
            'Skilled technician specializing in home appliance repair including fridge, TV, washing machine, and microwave. Has completed service calls for 500+ customers in Butwal. Known for quick diagnosis, genuine spare parts, and fair pricing.',
        fees: 900,
        address: {
            line1: 'Kalikanagar, Butwal',
            line2: 'Near Red Cross Building'
        }
    },

    // Repeat similar pattern to reach 15 providers
    {
        _id: 'sp7',
        name: 'Kamal Adhikari',
        image:Person,
        speciality: 'Carpenter',
        experience: '4 Years',
        description:
            'Specializes in doors, windows, partition walls, and wooden flooring. Completed various renovation projects across Kathmandu. Clients praise his strong finishing and affordable pricing.',
        fees: 1400,
        address: {
            line1: 'Gongabu, Kathmandu',
            line2: 'Near Bus Park'
        }
    },
    {
        _id: 'sp8',
        name: 'Laxmi Thapa',
        image:Person,
        speciality: 'House Cleaner',
        experience: '2 Years',
        description:
            'Focused on apartment cleaning, carpet vacuuming, and sofa shampoo services. Has cleaned over 80+ rooms in Thamel lodges. Known for friendly service and attention to detail.',
        fees: 1000,
        address: {
            line1: 'Thamel, Kathmandu',
            line2: 'Near Garden of Dreams'
        }
    },
    {
        _id: 'sp9',
        name: 'Arjun Chaudhary',
        image:Person,
        speciality: 'Plumber',
        experience: '3 Years',
        description:
            'Handles leakage repair, geyser fitting, and bathroom pipeline installation. Has worked on multiple hotels in Dhangadhi. Customers appreciate his fast service and long-lasting repairs.',
        fees: 700,
        address: {
            line1: 'Hasanpur, Dhangadhi',
            line2: 'Near Park Area'
        }
    },
    {
        _id: 'sp10',
        name: 'Puja Maharjan',
        image: Person,
        speciality: 'Painter',
        experience: '5 Years',
        description:
            'Expert in wall shine finish, kids room art, and office painting. Completed large-scale painting work in Lalitpur offices. Known for creative color selection and high-quality paint materials.',
        fees: 1700,
        address: {
            line1: 'Pulchowk, Lalitpur',
            line2: 'Near Engineering Campus'
        }
    }
];

export const featuredServices = [
    {
        id: 'fs1',
        serviceTitle: "Hire a Technician",
        providerName: "Ramesh Khadka",
        description: "Experienced technician skilled in repairing home appliances with quick diagnostic service.",
        cost: 1800,
        review: 4.8,
        category: "Technician",
        image: TechnicianService
    },
    {
        id: 'fs2',
        serviceTitle: "Water Tank Cleaning",
        providerName: "Sita Cleaning Services",
        description: "Professional tank cleaning using safe tools and hygienic methods for clean water.",
        cost: 1500,
        review: 4.6,
        category: "Cleaning",
        image: TankCleaning
    },
    {
        id: 'fs3',
        serviceTitle: "Carpenter On-Demand",
        providerName: "Bikash Shrestha",
        description: "Specialist in furniture repair, door adjustments, and custom wooden designs.",
        cost: 1200,
        review: 4.7,
        category: "Carpenter",
        image: CarpenterService
    },
    {
        id: 'fs4',
        serviceTitle: "Electricity Checkup",
        providerName: "Mina Thapa",
        description: "Licensed electrician for wiring inspection, light installation, and emergency fixes.",
        cost: 900,
        review: 4.9,
        category: "Electrician",
        image: ElectricianService
    },
    {
        id: 'fs5',
        serviceTitle: "House Deep Cleaning",
        providerName: "Hari Chaudhary",
        description: "Comprehensive cleaning including bathroom, kitchen, windows, and floor sanitizing.",
        cost: 3500,
        review: 4.5,
        category: "Cleaning",
        image: HouseCleanService
    },
    {
        id: 'fs6',
        serviceTitle: "AC Maintenance",
        providerName: "Kamal Tamang",
        description: "AC servicing, cooling check, gas refill, and filter cleaning for better performance.",
        cost: 2500,
        review: 4.7,
        category: "Technician",
        image: ACRepairService
    },
    {
        id: 'fs7',
        serviceTitle: "Plumbing & Leakage Fix",
        providerName: "Nabin Lama",
        description: "Reliable solution for leakage problems, tap replacements, and pipe repairs.",
        cost: 1100,
        review: 4.6,
        category: "Plumbing",
        image: PlumbingService
    },
    {
        id: 'fs8',
        serviceTitle: "Laptop Repair Service",
        providerName: "Aayush KC",
        description: "Laptop repair including part replacement, OS installation, and performance optimization.",
        cost: 2000,
        review: 4.8,
        category: "Electronics",
        image: LaptopRepairService
    },
    {
        id: 'fs9',
        serviceTitle: "Painting & Wall Coating",
        providerName: "Sandhya Balami",
        description: "Interior and exterior wall painting with smooth finishing and premium paint quality.",
        cost: 5000,
        review: 4.5,
        category: "Painting",
        image: PaintingService
    },
    {
        id: 'fs10',
        serviceTitle: "Kitchen Hood Cleaning",
        providerName: "Dipendra Shah",
        description: "Deep cleaning of chimney and kitchen hood to remove grease and improve ventilation.",
        cost: 1600,
        review: 4.7,
        category: "Cleaning",
        image: KitchenHoodCleaning
    }
];

