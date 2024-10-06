import styles from './style'; 
// Importing custom styles from the 'style' file for consistent layout and design.

import { Navbar, Hero, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, } from './components';
// Importing all the necessary components for the application from the 'components' directory.

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    {/* Main container for the app with a primary background color and overflow hidden to control content flow */}

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      {/* Wrapper for the Navbar, with padding along the X-axis and centered content */}
      <div className={`${styles.boxWidth}`}>
        {/* Restricting the maximum width for the Navbar */}
        <Navbar />
        {/* Navbar component rendered here */}
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      {/* Section for the Hero component with the primary background color and starting flex alignment */}
      <div className={`${styles.boxWidth}`}>
        {/* Restricting the maximum width for the Hero section */}
        <Hero />
        {/* Hero component rendered here */}
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      {/* Main content section with padding on the X-axis and flex-start alignment */}
      <div className={`${styles.boxWidth}`}>
        {/* Restricting the maximum width for the entire content area */}
        <Stats />
        {/* Stats component rendered here */}
        <Business />
        {/* Business component rendered here */}
        <Billing />
        {/* Billing component rendered here */}
        <CardDeal />
        {/* CardDeal component rendered here */}
        <Testimonials />
        {/* Testimonials component rendered here */}
        <Clients />
        {/* Clients component rendered here */}
        <CTA />
        {/* Call-to-Action (CTA) component rendered here */}
        <Footer />
        {/* Footer component rendered here */}
      </div>
    </div>
  </div>
);

export default App;
// Exporting the 'App' component as the default export to be rendered in other parts of the application.
