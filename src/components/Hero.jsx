import styles from "../style"; 
// Importing custom styles from the "style" file.

import { discount, robot } from "../assets"; 
// Importing assets: discount icon and robot image.

import GetStarted from "./GetStarted"; 
// Importing the 'GetStarted' component for use within this section.

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* Main container for the Hero section. Uses flexbox for responsive layout, switching between row and column layout based on screen size. */}

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Left-side container with flex-grow (flex-1) and padding. This part holds the text and discount banner. */}
        
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          {/* Discount banner with a gradient background, rounded corners, and padding */}
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          {/* Discount icon */}
          <p className={`${styles.paragraph} ml-2`}>
            {/* Paragraph text for the discount offer */}
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
            {/* Highlighted text inside the discount banner */}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          {/* Flexbox container for the main heading and the "Get Started" button */}
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            {/* Main heading text with responsive font size and line height */}
            The Next <br className="sm:block hidden" />{" "}
            {/* Line break hidden on small screens */}
            <span className="text-gradient">Generation</span>{" "}
            {/* Gradient text effect applied to the word "Generation" */}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/* "Get Started" button visible only on larger screens */}
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
          {/* Secondary heading text */}
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {/* Paragraph explaining the service with a maximum width for better readability */}
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* Right-side container with flex-grow, centering the image. Adds margin for smaller screens. */}
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        {/* Robot image taking up full width and height, with a z-index for stacking order */}

        {/* Gradient background decorations */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* Three gradient elements positioned at different locations in the background */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {/* "Get Started" button, visible only on small screens */}
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero; 
// Exporting the 'Hero' component to be used in other parts of the application.
