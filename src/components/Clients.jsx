import { clients } from "../constants"; 
// Importing the 'clients' array from the constants file, which contains information about the clients and their logos.

import styles from "../style"; 
// Importing custom styles for consistent layout and design.

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    {/* Main container for the Clients section, using flexCenter for alignment and spacing on the Y-axis (my-4) */}
    
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {/* Flexbox container that wraps the content (logos) and centers them horizontally */}
      
      {clients.map((client) => (
        // Mapping through the 'clients' array to render each client's logo.
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          {/* Each client's logo container is flex-1 to take equal space, with a minimum width for small and larger screens */}
          
          <img 
            src={client.logo} 
            alt="client_logo" 
            className="sm:w-[192px] w-[100px] object-contain" 
            // Client logo image, with different widths for small and large screens. Object-contain ensures the logo maintains its aspect ratio.
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
// Exporting the Clients component for use in other parts of the application.
