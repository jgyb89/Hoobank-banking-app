import { apple, bill, google } from "../assets"; 
// Importing the assets (images) for apple, bill, and google from the assets folder.

import styles, { layout } from "../style"; 
// Importing custom styles and layout configurations.

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    {/* Main section container with an ID of "product" and layout styles for a reverse flexbox layout */}

    <div className={layout.sectionImgReverse}>
      {/* Container for the billing image, styled to align with the reverse layout */}
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      {/* Billing image, taking up full width and height with relative positioning and a z-index for layering */}

      {/* Gradient background elements for decorative purposes */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      {/* White gradient circle positioned at the top left of the image */}
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* Pink gradient circle positioned at the bottom left of the image */}
    </div>

    <div className={layout.sectionInfo}>
      {/* Text and info container for the billing section */}
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
        {/* Heading with a line break visible only on small screens */}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {/* Paragraph describing the billing features, with a maximum width for readability */}
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {/* Container for the download buttons for Apple and Google Play, with spacing adjustments */}
        <img 
          src={apple} 
          alt="apple_store" 
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" 
        />
        {/* Apple store download button image with cursor pointer on hover and margin-right for spacing */}
        <img 
          src={google} 
          alt="google_play" 
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" 
        />
        {/* Google Play download button image with cursor pointer on hover */}
      </div>
    </div>
  </section>
);

export default Billing;
// Exporting the Billing component for use in other parts of the application.
