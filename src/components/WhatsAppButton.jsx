import { useState } from "react";
import "animate.css";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    // {
    //   name: "Sagar Kedari",
    //   image: "/Sagar_kedari.webp", // Update with the actual path
    //   whatsappLink:
    //     "https://api.whatsapp.com/send/?phone=%2B91 98231 23103&text=+Hi+there+%0A++++&type=phone_number&app_absent=0",
    // },
    {
      name: "Darshan Kadam",
      image: "/darshan-kadam.webp",
      whatsappLink: "https://api.whatsapp.com/send/?phone=+917219217899&text=Hi+there&type=phone_number&app_absent=0",
    },
    {
      name: "Simran Dhamdhere",
      image: "/simaran.jpg",
      whatsappLink: "https://api.whatsapp.com/send/?phone=+917498843839&text=Hi+there&type=phone_number&app_absent=0",
    },
    {
      name: "Asgar Khan",
      image: "/ali.jpg",
      whatsappLink: "https://api.whatsapp.com/send/?phone=+1918793947909&text=Hi+there&type=phone_number&app_absent=0",
    },
  ];

  return (
    <div className="fixed bottom-0 xl:right-4 lg:right-4 right-1 z-60 xl:bottom-10 lg:bottom-10 animate__pulse animate__animated">
      {isOpen && (
        <div className="absolute bottom-0 right-0 p-4 mb-2 bg-white rounded-lg shadow-lg w-72">
          <div className="flex items-center justify-between pb-2 border-b">
            <div className="flex items-center align-middle">
              <img
                src="/BUSINESS_WORLD.webp"
                alt="RBK Business World"
                className="h-10 mt-2 mb-2 align-center"
              />
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500">
              &times;
            </button>
          </div>
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center cursor-pointer hover:bg-gray-200"
              onClick={() => window.location.href = contact.whatsappLink} // Ensures it works on iPhone
            >
              <img
                src={contact.image}
                alt={contact.name}
                className="h-12 mr-3 w-12 rounded-full"
              />

              <div>
                <div className="font-bold font-rajdhani">{contact.name}</div>
                <div className="mt-0 text-sm text-green-500">
                  Business Consultant
                </div>
                <div className="text-sm text-gray-400">
                  online <span className="text-green-500">●</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center bg-green-500 rounded-full xl:w-12 xl:h-12 lg:w-12 lg:h-12 w-9 h-9 animate__animated animate__pulse animate__infinite"
      >
        <img
          src="/whatsapp-logo copy.png"
          alt="WhatsApp"
          className="xl:w-8 xl:h-8 lg:w-8 lg:h-8 w-7 h-7"
        />
      </button>
    </div>
  );
};

export default WhatsAppButton;
