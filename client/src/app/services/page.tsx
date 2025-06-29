// app/services/page.tsx

import React from "react";

const ServicesPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
        <li>Digital Marketing</li>
      </ul>
    </div>
  );
};

export default ServicesPage;
