import { assets } from "../assets/assets";

function Footer() {
    return ( 
        <div className="md:mx-6">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                {/* left Section */}
                <div>
                    <img className="w-25 mb-5" src={assets.logo} alt="" />
                    <p className="w-full md:2/3 text-gray-600 leading-6 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda sed aut eius ipsam quas corrupti cupiditate, beatae quia odio blanditiis eum dolores maxime fugiat porro voluptatum earum nemo tempore?</p>
                </div>

                {/* Center Section */}
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                    
                </div>

                {/* Right Section */}
                <div>
                    <p className="text-xl font-medium mb-5">Get in touch</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                    <li>+977-987456123</li>
                    <li>localinkinfoservice@gmail.com</li>
                    </ul>  
                </div>

                
            </div>
            {/* Copyright Text */}
                <div>
                    <hr className="rounded-full border-t border-gray-600 "/>
                    <p className="py-5 text-sm text-center">Copyright 2024@ Localink - All Right Reserved.</p>
                </div>
        </div>
     );
}

export default Footer;