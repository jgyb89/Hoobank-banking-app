import { features } from '../constants'; 
// Importing the 'features' array from a constants file, which contains the data for each feature.

import styles, {layout} from '../style'; 
// Importing custom styles and layout configurations.

import Button from './Button'; 
// Importing the custom Button component.

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    {/* Each feature card container with padding and rounded corners. 
        If it's not the last card, add a margin-bottom for spacing. */}
    
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      {/* Icon container with a circular shape, centered content, and background color. */}
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
      {/* Icon image, resized to 50% of the container's width and height. */}
    </div>

    <div className="flex flex-1 flex-col ml-3">
      {/* Text container for the title and content, with margin-left to separate from the icon. */}
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {/* Feature title with bold white text. */}
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {/* Feature content/description with dimmed white text. */}
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      {/* Section container for the business features. Uses layout styling for spacing and alignment. */}
      <div className={layout.sectionInfo}>
        {/* Container for the section's main heading and description */}
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we'll handle the money.
          {/* Main heading with a line break visible only on small screens */}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {/* Paragraph describing the benefits of using the product. */}
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
        {/* Button to encourage the user to take action, with a top margin for spacing. */}
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {/* Container for the feature cards, laid out vertically (column layout). */}
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
          // Looping through the features array to render each FeatureCard. 
          // {...feature} spreads the feature's properties into the component props.
        ))}
      </div>
    </section>
  );
}

export default Business; 
// Exporting the 'Business' component to be used in other parts of the application.
