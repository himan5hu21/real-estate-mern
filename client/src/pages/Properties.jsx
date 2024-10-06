import { useState } from "react";
import PropertyCard from "../components/PropertyCard";

const Properties = () => {
  const [isRenting, setIsRenting] = useState(false);

  const properties = [
    {
      id: 1,
      title: "Luxury Apartment",
      location: "New York, NY",
      price: "$1,200,000",
      imageUrl: "https://example.com/property1.jpg",
      type: "buy",
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 2,
      title: "Cozy Cottage",
      location: "Lake Tahoe, CA",
      price: "$750,000",
      imageUrl: "https://example.com/property2.jpg",
      type: "buy",
      bedrooms: 2,
      bathrooms: 1,
    },
    {
      id: 3,
      title: "Modern Villa",
      location: "Miami, FL",
      price: "$2,000,000",
      imageUrl: "https://example.com/property3.jpg",
      type: "buy",
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 4,
      title: "Charming Apartment",
      location: "Los Angeles, CA",
      price: "$2,500/month",
      imageUrl: "https://example.com/rent1.jpg",
      type: "rent",
      bedrooms: 1,
      bathrooms: 1,
    },
    {
      id: 5,
      title: "Beach House",
      location: "San Diego, CA",
      price: "$3,000/month",
      imageUrl: "https://example.com/rent2.jpg",
      type: "rent",
      bedrooms: 2,
      bathrooms: 2,
    },
    // Add more properties as needed
  ];

  const filteredProperties = properties.filter((property) =>
    isRenting ? property.type === "rent" : property.type === "buy"
  );
  return (
    <div className="container mx-auto p-5">
      {/* Header Section */}
      <header className="mb-5 text-center">
        <h1 className="text-3xl font-bold">Find Your Dream Home</h1>
        <p className="text-gray-600">
          Browse through our listings of buy and rent properties
        </p>
      </header>

      {/* Filter Section */}
      <div className="flex justify-center mb-5">
        <button
          onClick={() => setIsRenting(false)}
          className={`px-4 py-2 rounded-md ${
            !isRenting ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Buy Properties
        </button>
        <button
          onClick={() => setIsRenting(true)}
          className={`ml-4 px-4 py-2 rounded-md ${
            isRenting ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Rent Properties
        </button>
      </div>

      {/* Search Section */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search properties..."
          className="w-full p-2 border rounded-md"
        />
        <button className="mt-2 bg-sky-700 text-white px-4 py-2 rounded-md">
          Search
        </button>
      </div>

      {/* Properties Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
