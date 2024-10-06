import styles from "../style"; 
// Importing custom styles for consistent layout and design.

import Button from "./Button"; 
// Importing the reusable Button component.

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    {/* Main container for the Call-to-Action (CTA) section. 
        Uses flexbox for centering, applies margin and padding, and switches between row and column layout based on screen size. 
        The background has a gradient and the container has rounded corners and a box shadow. */}
    
    <div className="flex-1 flex flex-col">
      {/* Left side of the CTA, taking up full width (flex-1) and laid out in a column */}
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      {/* Main heading of the CTA section, styled with the heading2 class */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {/* Paragraph text describing the service, with a maximum width for readability and a top margin for spacing */}
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      {/* Right side of the CTA containing the Button component, centered using flexbox. 
          Adds left margin on larger screens (ml-10) and top margin on smaller screens (mt-10) for spacing */}
      <Button />
      {/* Reusable Button component that prompts users to take action */}
    </div>
  </section>
);

export default CTA;
// Exporting the CTA component for use in other parts of the application.
