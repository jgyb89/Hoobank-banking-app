import { card } from "../assets"; 
// Importing the card image from the assets folder.

import styles, { layout } from "../style"; 
// Importing custom styles and layout configurations for consistent design.

import Button from "./Button"; 
// Importing the reusable Button component.

const CardDeal = () => (
  <section className={layout.section}>
    {/* Main section container with layout styling for padding and alignment */}
    
    <div className={layout.sectionInfo}>
      {/* Container for the text content of the section */}
      
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
        {/* Heading with a responsive line break, visible only on small screens */}
      </h2>
      
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {/* Paragraph explaining the card deal, with a maximum width for readability */}
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
        {/* Placeholder text for the section description */}
      </p>

      <Button styles={`mt-10`} />
      {/* Button component with a top margin to create spacing below the paragraph */}
    </div>

    <div className={layout.sectionImg}>
      {/* Container for the image, aligned as per the layout styles */}
      
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      {/* Card image taking up the full width and height of the container */}
    </div>
  </section>
);

export default CardDeal;
// Exporting the CardDeal component for use in other parts of the application.
