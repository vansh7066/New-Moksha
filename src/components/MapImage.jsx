import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        style={{ border: 0, width: "100%", height: "270px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.780403563651!2d77.05857777456566!3d28.456035392075457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f75948c957%3A0x60fa352bb470dda8!2sUtsav%20Foundation!5e0!3m2!1sen!2sin!4v1709705076207!5m2!1sen!2sin"
        frameBorder="0"
        allowFullScreen=""
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
