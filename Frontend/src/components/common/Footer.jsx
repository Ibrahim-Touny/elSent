import { Container, PrimaryButton, ProfileCard, Title } from "./Design";
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className="relative bg-primary py-16 mt-16">
        {isHomePage && (
          <div className="bg-white w-full py-20 -mt-10 rounded-b-[40px] z-10 absolute top-0"></div>
        )}

        <Container className={`${isHomePage ? "mt-32" : "mt-0"} flex flex-col md:flex-row justify-between gap-12`}>
          <div className="w-full md:w-1/3">
            <img src="../images/common/header-logo.png" alt="" />
            <br />
            <p className="text-gray-300">Created with the collaboration of over 60 of the worlds best Nuron Artists.</p>
            <div className="bg-gray-300 h-[1px] my-8"></div>
            <Title className="font-normal text-gray-100">Get The Latest Nuron Updates</Title>
            <div className="flex items-center justify-between mt-5">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full h-full p-3.5 py-[15px] text-sm border-none outline-none rounded-l-md"
              />
              <PrimaryButton className="rounded-none py-3.5 px-8 text-sm hover:bg-indigo-800 rounded-r-md">
                Submit
              </PrimaryButton>
            </div>
            <p className="text-gray-300 text-sm mt-3">Email is safe. We don't spam.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-2/3">
            <div>
              <Title level={5} className="text-white font-normal">
                Auction Categories
              </Title>
              <ul className="flex flex-col gap-5 mt-8 text-gray-200">
                <p className="hover:text-secondary">Ending Now</p>
                <p className="hover:text-secondary">Vehicles</p>
                <p className="hover:text-secondary">Watches</p>
                <p className="hover:text-secondary">Electronics</p>
                <p className="hover:text-secondary">Real Estate</p>
                <p className="hover:text-secondary">Jewelry</p>
                <p className="hover:text-secondary">Art</p>
                <p className="hover:text-secondary">Sports & Outdoor</p>
              </ul>
            </div>

            <div>
              <Title level={5} className="text-white font-normal">
                About Us
              </Title>
              <ul className="flex flex-col gap-5 mt-8 text-gray-200">
                <p className="hover:text-secondary">About Sbidu</p>
                <p className="hover:text-secondary">Help</p>
                <p className="hover:text-secondary">Affiliates</p>
                <p className="hover:text-secondary">Jobs</p>
                <p className="hover:text-secondary">Press</p>
                <p className="hover:text-secondary">Our blog</p>
                <p className="hover:text-secondary">Collectors portal</p>
              </ul>
            </div>

            <div>
              <Title level={5} className="text-white font-normal">
                We are Here to Help
              </Title>
              <ul className="flex flex-col gap-5 mt-8 text-gray-200">
                <p className="hover:text-secondary">Your Account</p>
                <p className="hover:text-secondary">Safe and Secure</p>
                <p className="hover:text-secondary">Shipping Information</p>
                <p className="hover:text-secondary">Contact Us</p>
                <p className="hover:text-secondary">Help & FAQ</p>
              </ul>
            </div>

            <div>
              <Title level={5} className="text-white font-normal">
                Follow Us
              </Title>
              <ul className="flex flex-col gap-5 mt-8 text-gray-200">
                <div className="flex items-center gap-2">
                  <FiPhoneOutgoing size={19} />
                  <span className="hover:text-secondary">(646) 968-0608</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineAttachEmail size={22} />
                  <span className="hover:text-secondary">help@engotheme.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoLocationOutline size={22} />
                  <span className="hover:text-secondary">1201 Broadway Suite</span>
                </div>
              </ul>
              <div className="flex items-center mt-5 justify-between">
                <ProfileCard className="bg-white">
                  <AiOutlineYoutube size={22} />
                </ProfileCard>
                <ProfileCard className="bg-white">
                  <FaInstagram size={22} />
                </ProfileCard>
                <ProfileCard className="bg-white">
                  <CiTwitter size={22} />
                </ProfileCard>
                <ProfileCard className="bg-white">
                  <CiLinkedin size={22} />
                </ProfileCard>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
