'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode, MdOutlineAttachMoney, MdOutlinePhoneIphone, MdOutlineEmail } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { FaHtml5, FaLaravel, FaCss3, FaBootstrap, FaReact, FaGithub, FaOpencart, FaLine, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiPhp, SiTailwindcss, SiJquery, SiInertia, SiVuedotjs, SiNextdotjs, SiMysql, SiGitlab } from "react-icons/si";
import { IoLogoJavascript, IoPeopleOutline, IoLocationOutline } from "react-icons/io5";
import { BsFiletypeScss } from "react-icons/bs";
import { motion, useScroll } from "framer-motion"
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Nunito } from "next/font/google";

const nunito = Nunito({
  style: ['normal'],
  subsets: ["latin"]
})

export default function Home() {
  const [theme, setTheme] = useState('')
  // const [welcomeMsg, setWelcomeMsg] = useState(true)
  const { scrollYProgress } = useScroll()
  
  const position = 'web developer'
  const exp = '3 years and 8 months'
  
  useEffect(() => {
    // setTimeout(() => {
    //   setWelcomeMsg(false)
    // }, 5000)
    AOS.init()
    mode(localStorage.theme)
  }, [])

  function scrollMsg() {
    const options = { passive: true };
    const scroll = (event) => {
      const endPosition = document.body.offsetHeight - (window.innerHeight + document.getElementById("footer").clientHeight)
    };
    document.addEventListener("scroll", scroll, options);
    // remove event on unmount to prevent a memory leak
    () => document.removeEventListener("scroll", scroll, options);
  }

  function mode(val) {
    new Audio('/click.mp3').play()
    setTheme(val)
    localStorage.setItem('theme', val)
    if (val == 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  function copyContact() {
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

  const Header = () => {
    return (
      <div className="flex flex-row justify-center py-3 items-center">
        <div className="relative mr-5">
          <Image src="/me.png" width={50} height={30} alt="Yan" className="rounded-full" />
          <Image src="/welcomeText.png" width={100} height={100} data-aos="fade-down-left" data-aos-duration="2000" alt="welcome" className="absolute max-w-none w-[150px] h-[90px] top-6 right-10" />
        </div>
        {theme == 'dark' ? 
          <button className="p-1 bg-gray-700 rounded-full" onClick={() => mode('light')}>
            <MdOutlineLightMode className="text-gray-200 text-xl cursor-pointer" />
          </button>
          : 
          <button className="p-1 bg-gray-200 rounded-full" onClick={() => mode('dark')}>
            <MdOutlineDarkMode className="text-black text-xl cursor-pointer" />
          </button>
        }
      </div>
    )
  }

  const Intro = () => {
    return (
      <>
        <div className="relative flex justify-center items-center h-56">
          <div className="text-lg text-center">
            I am <span className={nunito.className+" font-semibold text-2xl text-purple-500"}>Yankyaw Thu</span>
            <div className={nunito.className+" big-text uppercase font-bold py-3"}>{position}</div>
            <div className="bg hidden lg:flex">
              <div className="glowing">
                <span style={{"--i":1}}></span>
                <span style={{"--i":2}}></span>
                <span style={{"--i":3}}></span>  
              </div>
                
              <div className="glowing">
                <span style={{"--i":1}}></span>
                <span style={{"--i":2}}></span>
                <span style={{"--i":3}}></span>  
              </div>

              <div className="glowing">
                <span style={{"--i":1}}></span>
                <span style={{"--i":2}}></span>
                <span style={{"--i":3}}></span>  
              </div>

              <div className="glowing">
                <span style={{"--i":1}}></span>
                <span style={{"--i":2}}></span>
                <span style={{"--i":3}}></span>  
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  const Summary = () => {
    return (
      <div data-aos="fade-up" data-aos-duration="500">
        <div className="skew flex flex-col lg:flex-row justify-center items-center my-5 lg:my-[60px] mx-8 lg:mx-[100px]">
          <div className="inner grow">
            <div className="text-2xl pt-3 text-[#EC4899]">What I am..</div>
              <p className="text-gray-500 dark:text-gray-400 pt-2">I'm a passionate and results-driven {position} with <span className="text-black dark:text-white">{exp}</span> exp and a deep love for technology.A web developer with expertise in responsive web design and API development. Strong at developing and maintaining high-quality web applications and quickly understanding project architecture. Excellent problem solver known for delivering projects on time and staying up-to-date with web development trends.</p>
          </div>
          <div className="flex-none w-96 mt-8 lg:mt-0">
            <Image src="/coding.gif" width={80} height={80} alt="coding" unoptimized className="m-auto w-56 h-56 rounded-full" />
          </div>
        </div>
      </div>
    )
  }

  const Skills = () => {
    return (
      <div data-aos="fade-right" data-aos-duration="500">
        <div className="skew1 my-10 mx-5 lg:mx-0 lg:mt-0">
          <div className="inner">
            <div className="text-2xl text-[#EC4899]">What I can..</div>
            <div className="flex flex-col text-gray-500 pt-2">
              <div className="inline-flex items-center my-1">
                <span className="text-gray-500 dark:text-gray-400">Backend</span> -
                <SiPhp className="text-3xl mx-2 text-indigo-500" />
                <FaLaravel className="text-2xl mx-2 text-red-500" />
              </div>
              <div className="inline-flex items-start my-1">
                <span className="text-gray-500 dark:text-gray-400">Frontend</span> -
                <div className="flex flex-wrap flex-row">
                  <FaHtml5 className="text-2xl mx-2 my-2 text-orange-500" />
                  <FaCss3 className="text-2xl mx-2 my-2 text-blue-500" />
                  <IoLogoJavascript className="text-2xl mx-2 my-2 text-yellow-500" />
                  <BsFiletypeScss className="text-2xl mx-2 my-2 text-black dark:text-white" />
                  <FaBootstrap className="text-2xl mx-2 my-2 text-indigo-700" />
                  <SiTailwindcss className="text-2xl mx-2 my-2 text-cyan-500" />
                  <SiJquery className="text-2xl mx-2 my-2 text-blue-300" />
                  <SiInertia className="text-2xl mx-2 my-2 text-black dark:text-white" />
                  <SiVuedotjs className="text-2xl mx-2 my-2 text-green-600" />
                  <FaReact className="text-2xl mx-2 my-2 text-cyan-500" />
                  <SiNextdotjs className="text-2xl mx-2 my-2 text-black dark:text-white" />
                </div>
              </div>
              <div className="inline-flex items-center my-1">
                <span className="text-gray-500 dark:text-gray-400">Database</span> -
                <SiMysql className="text-[40px] mx-2 text-blue-800" />
              </div>
              <div className="inline-flex items-center my-1">
                <span className="text-gray-500 dark:text-gray-400">CI/CD</span> -
                <FaGithub className="text-2xl mx-2 text-black dark:text-white" />
                <SiGitlab className="text-2xl mx-2 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const RoadMap = () => {
    return (
      <div data-aos="fade-left" data-aos-duration="500">
        <div className="timeline flex-none w-auto lg:w-[550px] self-center my-14 lg:my-0">
          <div className="text-2xl text-[#EC4899] text-center mb-10">How I'v been growing..</div>
          <ul>
            <li className="left">
              <div className="content mt-10" data-aos="zoom-in" data-aos-duration="1000">
                <div className="inline-flex text-gray-500 dark:text-gray-400 items-center"><Image src="/tamron.png" width={28} height={28} alt="tamron" />Tamron Technology</div>
                <div className="text-xs">Web Developer</div>
              </div>
              <div className="time">
                <div>Now 2024</div>
              </div>
            </li>

            <li className="right">
              <div className="content mt-10" data-aos="zoom-in" data-aos-duration="1500">
                <div className="inline-flex text-gray-500 dark:text-gray-400 items-center"><BsBuildings className="mr-1" />Freelance</div>
                <div className="text-xs">Backend Developer</div>
              </div>
              <div className="time">
                <div>Apr 2024</div>
              </div>
            </li>

            <li className="right">
              <div className="content text-gray-500 mt-10">
              </div>
              <div className="time">
                <div>Jan 2024</div>
              </div>
            </li>

            <li className="left">
              <div className="content mt-10" data-aos="zoom-in" data-aos-duration="2000">
                <div className="flex flex-inline text-gray-500 dark:text-gray-400 items-center"><BsBuildings className="mr-1" />Freelance</div>
                <div className="text-xs">Web Developer</div>
              </div>
              <div className="time">
                <div>Nov 2023</div>
              </div>
            </li>

            <li className="left">
              <div className="content text-gray-500 mt-10">
              </div>
              <div className="time">
                <div>Aug 2023</div>
              </div>
            </li>
            
            <li className="left">
              <div className="time">
                <div>Sep 2020</div>
              </div>
            </li>

            <li className="right">
              <div className="content mt-10" data-aos="zoom-in" data-aos-duration="2500">
                <div className="inline-flex text-gray-500 dark:text-gray-400 items-center"><Image src="/sh.png" width={25} height={25} alt="sh" className="mr-1" />SweetyHome Industry</div>
                <div className="text-xs">IT Programmer</div>
              </div>
              <div className="time">
                <div>Aug 2020</div>
              </div>
            </li>
            
            <li className="right">
              <div className="time">
                <div>Oct 2019</div>
              </div>
            </li>
            <div style={{clear:'both'}}></div>
          </ul>
        </div>
      </div>
    )
  }

  const Language = () => {
    return (
      <div data-aos="fade-right" data-aos-duration="500">
        <div className="skew2 lg:w-full mt-5 mx-3 lg:mx-0 lg:mt-10">
          <div className="inner">
            <div className="text-2xl pt-3 text-[#EC4899]">How I speak..</div>
            <div className="flex flex-col justify-center items-center mt-2">
              <Image src="/communication.png" width={200} height={200} alt="talk" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const School = () => {
    return (
      <div data-aos="fade-up" data-aos-duration="500">
        <div className="skew3 flex flex-col m-10 lg:my-0 lg:mx-[100px]">
          <div className="text-2xl text-[#EC4899]">What I have..</div>
          <div className="flex flex-row">
            <div className="inner flex-none mt-2 w-auto lg:w-60">
              <div className="hidden lg:block relative w-56 h-56">
                <Image src="/uni.jpeg" width={100} height={100} className="card card04" alt="photo" />
                <Image src="/uni2.png" width={100} height={100} className="card card06" alt="photo" />
                <Image src="/uni4.jpeg" width={100} height={100} className="card card07" alt="photo" />
              </div>
            </div>
            <div className="sch grow flex flex-col items-center">
                <div className="sch-name inline-flex items-center pt-5 lg:pt-14">
                  <Image src="/uni3.png" width={70} height={70} alt="uni" />
                  University of Computer Studies, Yangon, Myanmar
                </div>
                <div className="py-2 lg:py-10 text-lg text-gray-500 dark:text-gray-400">Bachelor Degree of Computer Science (2020)</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const Projects = () => {
    return (
      <div className="projects my-14 lg:my-[100px]">
        <div className="text-2xl text-[#EC4899] text-center mb-5">What I did..</div>
        <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-y-8 lg:gap-x-8 mx-5 justify-items-center">
          <div className="proj-card shadow-lg shadow-cyan-500/50" data-aos="fade-right" data-aos-duration="500">
            <span className="icon">
              <IoPeopleOutline className="text-[12px] text-gray-500 dark:text-gray-400" />
            </span>
            <div className="proj-name text-black dark:text-white">Customer Relationship Management</div>
            <p className="text-gray-500 dark:text-gray-400">
              In this project, Frontend is using VueJs version 2 and Backend is using Laravel and being connected with MetaTrader 5 platform. We developed a CRM web app using MetaTrader 5 API for the one of Forex Exchange Trading Company. Also we made our own package and analyzed the MeteTrader 5 API documentation.
            </p>
            <div className="shine"></div>
            <div className="background">
              <div className="tiles">
                <div className="tile tile-1"></div>
                <div className="tile tile-2"></div>
                <div className="tile tile-3"></div>
                <div className="tile tile-4"></div>

                <div className="tile tile-5"></div>
                <div className="tile tile-6"></div>
                <div className="tile tile-7"></div>
                <div className="tile tile-8"></div>

                <div className="tile tile-9"></div>
                <div className="tile tile-10"></div>
              </div>

              <div className="line line-1 before:bg-[#e2e2e2] after:bg-[#e2e2e2] dark:before:bg-[#2a2b2c] dark:after:bg-[#2a2b2c]"></div>
              <div className="line line-2 before:bg-[#e2e2e2] after:bg-[#e2e2e2] dark:before:bg-[#2a2b2c] dark:after:bg-[#2a2b2c]"></div>
              <div className="line line-3 before:bg-[#e2e2e2] after:bg-[#e2e2e2] dark:before:bg-[#2a2b2c] dark:after:bg-[#2a2b2c]"></div>
            </div>
          </div>
          <div className="proj-card shadow-lg shadow-cyan-500/50" data-aos="fade-up" data-aos-duration="500">
            <span className="icon">
              <MdOutlineAttachMoney className="text-[12px] text-gray-500 dark:text-gray-400" />
            </span>
            <div className="proj-name text-black dark:text-white">Ecommerce</div>
            <p className="text-gray-500 dark:text-gray-400">
              In this project, Website is using a full stack framework, Laravel. Anyone can sell easily by just uploading a post. Buyers are able to give reviews and ratings. Sellers can sell to anyone. It also has real time notification and using Facebook and Google authentications.            </p>
            <div className="shine"></div>
            <div className="background">
              <div className="tiles">
                <div className="tile tile-1"></div>
                <div className="tile tile-2"></div>
                <div className="tile tile-3"></div>
                <div className="tile tile-4"></div>

                <div className="tile tile-5"></div>
                <div className="tile tile-6"></div>
                <div className="tile tile-7"></div>
                <div className="tile tile-8"></div>

                <div className="tile tile-9"></div>
                <div className="tile tile-10"></div>
              </div>

              <div className="line line-1 before:bg-[#e2e2e2] after:bg-[#e2e2e2] dark:before:bg-[#2a2b2c] dark:after:bg-[#2a2b2c]"></div>
              <div className="line line-2 before:bg-[#e2e2e2] after:bg-[#e2e2e2] dark:before:bg-[#2a2b2c] dark:after:bg-[#2a2b2c]"></div>
              <div className="line line-3 before:bg-[#e2e2e2] after:bg-[#e2e2e2] dark:before:bg-[#2a2b2c] dark:after:bg-[#2a2b2c]"></div>
            </div>
          </div>
          <div className="proj-card shadow-lg shadow-cyan-500/50" data-aos="fade-left" data-aos-duration="500">
            <span className="icon">
              <FaOpencart className="text-[12px] text-gray-500 dark:text-gray-400" />
            </span>
            <div className="proj-name text-black dark:text-white">HoHoDiDi</div>
            <p className="text-gray-500 dark:text-gray-400">
              In this project, Backend is using Laravel and also made a web app for mobile with VueJs but that was not deployed yet. Developed new features and maintained the admin panel and released the RESTApis for mobile developers. App has this feature, customers can order food, make payments, reviews, search restaurants or other entertainments, nearby map and also can be searched with nearby locations.            </p>
            <div className="shine"></div>
            <div className="background">
              <div className="tiles">
                <div className="tile tile-1"></div>
                <div className="tile tile-2"></div>
                <div className="tile tile-3"></div>
                <div className="tile tile-4"></div>

                <div className="tile tile-5"></div>
                <div className="tile tile-6"></div>
                <div className="tile tile-7"></div>
                <div className="tile tile-8"></div>

                <div className="tile tile-9"></div>
                <div className="tile tile-10"></div>
              </div>

              <div className="line line-1 before:bg-[#e2e2e2] after:bg-[#e2e2e2] dark:before:bg-[#2a2b2c] dark:after:bg-[#2a2b2c]"></div>
              <div className="line line-2 before:bg-[#e2e2e2] after:bg-[#e2e2e2] dark:before:bg-[#2a2b2c] dark:after:bg-[#2a2b2c]"></div>
              <div className="line line-3 before:bg-[#e2e2e2] after:bg-[#e2e2e2] dark:before:bg-[#2a2b2c] dark:after:bg-[#2a2b2c]"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const Footer = () => {
    return (
      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-y-8 lg:gap-y-0 my-10 lg:my-[100px]">
        <div className="place-self-center text-center">
          <div className="mb-10 text-xl">Feel freely to look my resume</div>
          <Link href="https://docs.google.com/document/d/1uPRTJA04eT3_SjaT7IJ-ajVDpnKU1Y21QKUXLKTsms8/edit?usp=sharing" target="_blank" className="down-btn border-[1px] border-black dark:border-white">Resume</Link>
        </div>
        <div className="flex flex-row border-l-[1px] border-black dark:border-white py-[20px]">
          <div className="flex-none w-10 flex flex-col self-center lg:mr-10 border-[1px] border-l-0 border-black dark:border-white rounded-tr rounded-br">
            <FaLine title="Line" className="text-lg cursor-pointer text-green-400 w-full h-10 p-2 border-b-[1px] border-black dark:border-white" />
            <FaWhatsapp title="WhatsApp" className="text-lg cursor-pointer text-green-400 w-full h-10 p-2 border-b-[1px] border-black dark:border-white" />
            <Link href="https://github.com/YankyawThu" target="_blank">
              <FaGithub title="GitHub" className="text-lg cursor-pointer text-black dark:text-white w-full h-10 p-2 border-b-[1px] border-black dark:border-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/yankyawthu" target="_blank">
              <FaLinkedin title="LinkedIn" className="text-lg cursor-pointer text-cyan-600 w-full h-10 p-2" />
            </Link>
          </div>
          <div className="grow flex justify-center lg:justify-start items-center text-gray-500 dark:text-gray-400">
            <div className="flex flex-col mr-10 lg:mr-0">
              <div className="inline-flex items-center"><IoLocationOutline className="mr-1" />Bangkok City, Thailand</div>
              <div className="inline-flex items-center"><MdOutlinePhoneIphone className="mr-1" />+66 0611077375</div>
              <div className="inline-flex items-center pt-2"><MdOutlineEmail className="mr-1" /><span className="text-[10px] text-[#EC4899]">YANKYAWTHUDEV97@GMAIL.COM</span></div>
            </div>
          </div>
          <div>
            <div className="flex-none relative slider-thumb hidden lg:flex justify-center items-center lg:mr-20">
              <Image src="/me2.png" width={70} height={70} alt="Yan" className="absolute" />
              {/* {footerMsg == true ? <Image src="/textbox.png" width={100} height={100} alt="alert" className="absolute" /> : <></>} */}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <Header />
      <Intro />
      <Summary />
      <div className="flex flex-col lg:flex-row m-5 lg:m-[100px]">
        <div className="flex flex-col grow lg:mr-10">
          <Skills />
          <Language />
        </div>
        <RoadMap />
      </div>
      <School />
      <Projects />
      <Footer />
    </>
  );
}
