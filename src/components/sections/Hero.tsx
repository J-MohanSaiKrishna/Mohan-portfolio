import TextType from "@/components/ui/TextType";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const NAVBAR_HEIGHT = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="top"
      className="pt-20 px-4 md:px-6 lg:ml-60 lg:p-5 flex flex-col mt-20 md:mt-20 space-y-4 md:space-y-6 relative"
    >
      <p className="text-sm md:text-base lg:text-lg text-gray-400 font-mono">
        <span className="text-[#85c4b9]">const</span> developer ={" "}
        <span className="text-gray-300">&quot;Mohan Sai Krishna&quot;</span>;
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
        Cloud Architect & DevOps Engineer
      </h1>
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#8da399] leading-tight min-h-[3rem]">
        <TextType
          text={[
            "Designing resilient AWS & Cloud Architectures.",
            "Building automated CI/CD pipelines with Docker & Jenkins.",
            "Reduced latency by 25% on AWS (S3, EC2, CloudFront).",
            "Automating incident workflows with n8n (40% MTTA reduction).",
            "Deploying Infrastructure as Code & Cloud Automation.",
          ]}
          typingSpeed={60}
          pauseDuration={1500}
          deletingSpeed={40}
          loop={true}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
      <p className="text-[#8da399] text-base md:text-lg lg:text-xl mt-2 lg:mt-3 w-full lg:w-[65%] leading-relaxed">
        Cloud Architect and DevOps Engineer specializing in designing scalable AWS infrastructure, automating CI/CD pipelines (Jenkins, Docker), and configuring enterprise cloud automation (AWS, Linux, n8n). Reduced global page load latency by 25% and maintained 99.9% system uptime through robust infrastructure deployment.
      </p>
      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 mt-3">
        <button
          onClick={() => scrollToSection("projects")}
          className="bg-[#a1b56c] px-5 py-3 sm:px-7 sm:py-3 text-gray-900 font-semibold rounded-sm
      cursor-pointer hover:scale-105 transition-transform duration-200 w-full sm:w-auto text-center"
        >
          View Projects <span className="font-extrabold text-lg">→</span>
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="border border-gray-600 px-5 py-3 font-semibold cursor-pointer
      hover:bg-gray-900 transition-colors duration-200 w-full sm:w-auto text-center"
        >
          Get in Touch
        </button>
      </div>
      <div className="hidden lg:block absolute left-20 top-40 opacity-10 pointer-events-none">
        <div className="text-8xl font-mono text-gray-500">{`{ }`}</div>
      </div>
      <div className="hidden md:block absolute right-10 md:right-20 lg:right-40 bottom-20 md:bottom-32 lg:bottom-40 pointer-events-none">
        <div className="flex space-x-3 opacity-20">
          <div className="w-2 h-8 bg-[#85c4b9] rounded-full animate-pulse"></div>
          <div className="w-2 h-12 bg-[#a1b56c] rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-6 bg-[#8da399] rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
      <div className="hidden lg:block absolute right-[10%] bottom-1/2 w-52 bg-yellow-300/95 backdrop-blur-sm py-3 px-4 rounded-2xl shadow-xl float-animation border border-yellow-400/50 pointer-events-none text-left">
        <div className="flex justify-start mb-1">
          <div className="text-2xl text-yellow-600">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>
        <p className="text-black text-xs italic font-medium leading-relaxed">
          Design with intent. Optimize for latency. Deploy for scale.
        </p>
        <div className="mt-4 flex items-center">
          <div className="w-8 h-px bg-yellow-600 mr-3"></div>
          <span className="text-gray-800 text-xs font-semibold tracking-wide">
            CLOUD & FRONTEND
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
