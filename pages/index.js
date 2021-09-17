import Link from "next/link";
import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaPython,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import {SiJavascript,SiAdobephotoshop, SiNextDotJs, SiTailwindcss} from "react-icons/si";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="py-44">
        <div className="container lg:px-32 px-6">
          <h3 className="text-4xl  mb-2">Sumaiya Tasmeem</h3>

          <h3 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl  mb-8 text-black-200">
            I am Sumaiya Tasmeem. I have a passion for front-end web development
            and love to design websites for various devices.
          </h3>

          <Link href="https://github.com/stmeem">
          <a target="_blank">
            <button className="border-2 border-white text-white py-2 px-4 tracking-wider hover:bg-white hover:text-black">
              Github
            </button></a>
          </Link>
          <Link href="https://www.linkedin.com/in/sumaiyatasmeem/">
          <a target="_blank">
            <button className="border-2 border-white text-white py-2 px-4 tracking-wider hover:bg-white hover:text-black ml-4">
              LinkedIn
            </button></a>
          </Link>
          <Link href="https://dribbble.com/sumaiyatasmeem">
          <a target="_blank">
            <button className="border-2 border-white text-white py-2 px-4 tracking-wider hover:bg-white hover:text-black ml-4">
              Dribble
            </button></a>
          </Link>
        </div>
      </div>

      <div className="lg:ml-20 lg:mr-20" id="project">
        <div className="w-48 mx-auto pt-6 border-b-2 border-white text-center text-2xl text-black-700">
          Projects
        </div>
        <div class="p-10 lg:pb-28  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <div class="border-2 border-white shadow-lg rounded overflow-hidden pb-8">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Recipe</div>
              <p class="text-gray-400 text-base">
                A simple React web application that uses the Edamam API to
                search and display different kind of recipes.
              </p>
              <Link href="https://github.com/stmeem/recipe">
                <a target="_blank">
                  <button className="border-2 border-white text-white py-2 px-4 my-4 hover:bg-white hover:text-black">
                    Source Code
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div class="border-2 border-white shadow-lg rounded overflow-hidden pb-8">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Covid-19 Webmap</div>
              <p class="text-gray-400 text-base">
                COVID19 map visualization using python libraries based on Johns
                Hopkins live data set.
              </p>
              <Link href="https://github.com/stmeem/covid19-map">
                <a target="_blank">
                  <button className="border-2 border-white text-white py-2 px-4 my-4 hover:bg-white hover:text-black">
                    Source Code
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div class="border-2 border-white shadow-lg rounded overflow-hidden pb-8">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Book Finder</div>
              <p class="text-gray-400 text-base">
                Book Finder is a React web application that uses the Google Book
                API to search and display the list of the books.
              </p>
              <Link href="https://github.com/stmeem/book-finder">
                <a target="_blank">
                  <button className="border-2 border-white text-white py-2 px-4 my-4 hover:bg-white hover:text-black">
                    Source Code
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:ml-20 lg:mr-20" id='skills'>
        <div className="w-48 mx-auto pt-6 border-b-2 border-white text-center text-2xl text-black-700">
          Skills
        </div>

        <div className="p-10 lg:pb-28  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-5">
          <h4 className="text-3xl xl:text-4xl lg:text-4xl md:text-3xl mb-10">
            <FaHtml5 />
            <h2 className="mt-4 text-xl xl:text-2xl lg:text-2xl md:text-xl"> HTML</h2>
          </h4>
          <h4 className="text-3xl xl:text-4xl lg:text-4xl md:text-3xl mb-10">
            <FaCss3 />
            <h2 className="mt-4 text-xl xl:text-2xl lg:text-2xl md:text-xl"> CSS</h2>
          </h4>
          <h4 className="text-3xl xl:text-4xl lg:text-4xl md:text-3xl mb-10">
            <FaSass />
            <h2 className="mt-4 text-xl xl:text-2xl lg:text-2xl md:text-xl">Sass</h2>
          </h4>
          <h4 className="text-3xl xl:text-4xl lg:text-4xl md:text-3xl mb-10">
            <FaBootstrap />
            <h2 className="mt-4 text-xl xl:text-2xl lg:text-2xl md:text-xl">Bootstrap</h2>
          </h4>
          <h4 className="text-3xl xl:text-4xl lg:text-4xl md:text-3xl mb-10">
            <SiTailwindcss />
            <h2 className="mt-4 text-xl xl:text-2xl lg:text-2xl md:text-xl">Tailwind CSS</h2>
          </h4>
          <h4 className="text-3xl xl:text-4xl lg:text-4xl md:text-3xl mb-10">
            <SiJavascript />
            <h2 className="mt-4 text-xl xl:text-2xl lg:text-2xl md:text-xl">JavaScript</h2>
          </h4>
          <h4 className="text-3xl xl:text-4xl lg:text-4xl md:text-3xl mb-10">
            <FaReact />
            <h2 className="mt-4 text-xl xl:text-2xl lg:text-2xl md:text-xl"> ReactJS</h2>
          </h4>
          <h4 className="text-3xl xl:text-4xl lg:text-4xl md:text-3xl mb-10">
            <SiNextDotJs/>
            <h2 className="mt-4 text-xl xl:text-2xl lg:text-2xl md:text-xl"> Next.js</h2>
          </h4>
          <h4 className="text-3xl xl:text-4xl lg:text-4xl md:text-3xl mb-10">
            <FaPython />
            <h2 className="mt-4 text-xl xl:text-2xl lg:text-2xl md:text-xl"> Python</h2>
          </h4>
          <h4 className="text-3xl xl:text-4xl lg:text-4xl md:text-3xl mb-10">
            <SiAdobephotoshop />
            <h2 className="mt-4 text-xl xl:text-2xl lg:text-2xl md:text-xl">Photoshop</h2>
          </h4>
          <div />
        </div>
      </div>
      <div className="lg:ml-20 lg:mr-20" id="certificates">
        <div className="w-48 mx-auto pt-6 border-b-2 border-white text-center text-2xl text-black-700">
          Certificates
        </div>
        <div class="p-10 lg:pb-28  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <div class="border-2 border-white shadow-lg rounded overflow-hidden pb-8">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2"> JavaScript, Bootstrap and PHP - Certification for Beginners</div>
              <p class="text-gray-400 text-base">
              This course offers an excellent introduction into three of the most widely used programming languages available for both front-end and back-end development.
              </p>
              <Link href="https://www.udemy.com/certificate/UC-4d37a055-6198-4f5b-a93e-01dfc32cff58/">
                <a target="_blank">
                  <button className="border-2 border-white text-white py-2 px-4 my-4 hover:bg-white hover:text-black">
                    View Certificate
                  </button>
                </a>
              </Link>
            </div>
          </div>

          <div class="border-2 border-white shadow-lg rounded overflow-hidden pb-8">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Responsive Web Design</div>
              <p class="text-gray-400 text-base">
              Responsive web design is all about creating the best user experience regardless of whether a user is accessing your site from a desktop computer, a mobile phone, or a tablet. This course is offered by University of London. </p>
              <Link href="https://www.coursera.org/account/accomplishments/certificate/GEQGVATAW8DF">
                <a target="_blank">
                  <button className="border-2 border-white text-white py-2 px-4 my-4 hover:bg-white hover:text-black">
                  View Certificate
                  </button>
                </a>
              </Link>
            </div>
          </div>
          </div></div>
      
    </div>
  );
}
