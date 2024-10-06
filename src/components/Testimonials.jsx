import { feedback } from "../constants"; 
// Importing the 'feedback' array from the constants file, which contains feedback data.

import styles from "../style"; 
// Importing custom styles for consistent design.

import FeedbackCard from "./FeedbackCard"; 
// Importing the FeedbackCard component, which will display individual feedback.

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    {/* Main container for the Testimonials section, with padding and centered content */}
    
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    {/* Decorative blue gradient circle positioned in the background */}

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      {/* Header container with a responsive flex layout - row on larger screens and column on smaller screens */}
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
        {/* Heading text with a line break visible only on small screens */}
      </h2>

      <div className="w-full md:mt-0 mt-6">
        {/* Paragraph container for the section description */}
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
          {/* Short paragraph explaining the testimonial section */}
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {/* Container for the feedback cards, with a flex layout that wraps content. It adjusts the alignment based on screen size. */}
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
      {/* Mapping through the 'feedback' array and rendering a FeedbackCard component for each item. 
          Using the spread operator {...card} to pass all properties of each feedback item to FeedbackCard. */}
    </div>
  </section>
);

export default Testimonials; 
// Exporting the Testimonials component for use in other parts of the application.
