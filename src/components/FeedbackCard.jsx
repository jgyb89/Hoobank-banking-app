import { quotes } from "../assets"; 
// Importing the 'quotes' image asset for the double quotes graphic.

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    {/* Main container for the feedback card with padding and rounded corners. 
        It has a maximum width and adjusts margins for different screen sizes. */}
    
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    {/* Double quotes image at the top of the feedback card, with specified width and height */}

    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
      {/* Feedback content paragraph, styled with Poppins font and white text */}
    </p>

    <div className="flex flex-row">
      {/* Container for the person's image and details, laid out horizontally (flex row) */}
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      {/* Image of the person giving feedback, styled as a circular avatar */}

      <div className="flex flex-col ml-4">
        {/* Container for the person's name and title, with left margin for spacing */}
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
          {/* Name of the person, displayed in bold white text */}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
          {/* Title or role of the person, styled with dimmed white text */}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard; 
// Exporting the FeedbackCard component for use in other parts of the application.
