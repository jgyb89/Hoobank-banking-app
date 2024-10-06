import { stats } from '../constants'; 
// Importing the 'stats' data from a constants file, which likely contains an array of statistics to display.

import styles from '../style'; 
// Importing custom styles from the 'style' file.

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {/* Main container for the stats section with flexbox for horizontal alignment and wrapping. 
        Adds bottom margin for spacing, which varies based on screen size. */}
    
    {stats.map((stat) => (
      // Mapping through the 'stats' array to render each statistic item.
      <div key={stat.id} className={`flex flex-1 justify-start items-center flex-row m-3`}>
        {/* Each stat item is wrapped in a flexbox container to align the value and title horizontally. 
            Adds margin around each stat item for spacing. */}
        
        <h4 className="font-poppins font-semibold sx:text-[40px] text-[30px] xs:leading-[53px] leading0[43px] text-white">
          {/* Displaying the stat value with large, bold text. The font size and line height adjust for smaller screens. */}
          {stat.value}
        </h4>
        
        <p className="font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading0[21px] text-gradient uppercase ml-3">
          {/* Displaying the stat title with slightly smaller text, uppercase, and a gradient color effect. 
              Adds left margin to separate the title from the value. */}
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats; 
// Exporting the 'Stats' component for use in other parts of the application.
