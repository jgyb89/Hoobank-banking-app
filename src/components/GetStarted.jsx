import styles from '../style'; 
// Importing the custom styles from the 'style' file.

import { arrowUp } from '../assets'; 
// Importing the 'arrowUp' image asset.

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    {/* Main container for the "Get Started" button with a circular shape, gradient background, and centered content */}
    
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      {/* Inner container that fills the button and has a primary background color and circular shape */}
      
      <div className={`${styles.flexStart} flex-row`}>
        {/* Flexbox container to horizontally align "Get" text and arrow icon */}
        
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          {/* Text element styled with the Poppins font, medium weight, and appropriate font size */}
          <span className="text-gradient">Get</span>
          {/* "Get" text with a gradient color */}
        </p>

        <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain' />
        {/* Arrow image icon next to the "Get" text, sized to fit the button */}
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        {/* Second text element for the "Started" part of the button */}
        <span className="text-gradient">Started</span>
        {/* "Started" text with a gradient color */}
      </p>
    </div>
  </div>
)

export default GetStarted; 
// Exporting the 'GetStarted' component to be used in other parts of the application.
