import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const PopularDestination = ({ name, image }) => (
  <div className="relative rounded-lg overflow-hidden">
    <img src={image} alt={name} className="w-full h-32 object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
      <p className="text-white text-sm font-semibold">{name}</p>
    </div>
  </div>
);

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <p className="pb-4 text-gray-400">{answer}</p>}
    </div>
  );
};

const FlightInfoDashboard = ({ currentLocation }) => {
  const popularDestinations = [
    { name: "Masai Mara", image: "/maasaimara.jpg" },
    { name: "Mombasa", image: "/mombasa.jpg" },
    { name: "Zanzibar", image: "/zanzibar.jpg" },
    { name: "Lamu", image: "/lamu.jpg" },
    { name: "Serengeti", image: "/serengeti.jpg" },
    { name: "Naivasha", image: "/naivasha.jpg" },
    { name: "Amboseli", image: "/amboseli.jpg" },
  ];

  const faqs = [
    {
      question: "How can I find last-minute flight deals?",
      answer:
        "Check our last-minute deals section and be flexible with your travel dates. Often, airlines offer discounts on unsold seats close to the departure date.",
    },
    {
      question: "How can I find cheap flights for a weekend getaway?",
      answer:
        "Use our weekend getaway tool and compare prices across different weekends. Consider flying on less popular days like Tuesday or Wednesday for better deals.",
    },
    {
      question: "How can I find flight deals if my travel plans are flexible?",
      answer:
        "Use our flexible date search to find the cheapest days to fly. You can view prices for a whole month to identify the most affordable options.",
    },
    {
      question: "How can I find cheap flights to anywhere?",
      answer:
        "Use our 'Everywhere' search feature to discover the cheapest destinations from your location. This tool shows you a list of destinations sorted by price.",
    },
    {
      question: "How can I get flight alerts for my trip?",
      answer:
        "Set up price alerts for your desired route to get notified of price drops. You'll receive emails when prices change, helping you book at the right time.",
    },
  ];

  const popularRoutes = [
    `Flights from ${currentLocation} to Mombasa`,
    `Flights from ${currentLocation} to Zanzibar`,
    `Flights from ${currentLocation} to Dar es Salaam`,
    `Flights from ${currentLocation} to Entebbe`,
    `Flights from ${currentLocation} to Addis Ababa`,
    `Flights from ${currentLocation} to Johannesburg`,
    `Flights from ${currentLocation} to Dubai`,
    `Flights from ${currentLocation} to London`,
    `Flights from ${currentLocation} to Mumbai`,
    `Flights from ${currentLocation} to Amsterdam`,
    `Flights from ${currentLocation} to Paris`,
    `Flights from ${currentLocation} to New York`,
  ];

  return (
    <div className="bg-gray-900 text-white p-6  mx-auto w-full">
      <h2 className="text-2xl font-bold mb-4">
        Popular destinations from {currentLocation}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
        {popularDestinations.map((dest, index) => (
          <PopularDestination key={index} name={dest.name} image={dest.image} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
      <div className="mb-8">
        {faqs.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">
        Find cheap flights on popular routes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {popularRoutes.map((route, index) => (
          <a key={index} href="#" className="text-blue-400 hover:underline">
            {route}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FlightInfoDashboard;
