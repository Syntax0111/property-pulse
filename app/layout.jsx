import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse | Find the Perfect Rental Property",
  description:
    "Discover your ideal rental property with Property Pulse. Explore a wide range of listings, from cozy apartments to spacious homes, and find the perfect place to call home. Start your search today and experience the convenience of finding your next rental property with ease.",
  keywords:
    "rental properties, property listings, apartments for rent, houses for rent, rental homes, property search, find a rental property, real estate rentals, rental market, property management",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
