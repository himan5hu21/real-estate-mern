import { BsCheck2Circle } from "react-icons/bs";
import aboutImg from "../assets/images/aboutimage1.jpg";

function About() {
  return (
    <section className="mx-10 py-12">
      <div className="flex flex-col xl:flex-row items-center gap-10">
        {/* left */}
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="aboutimage"
            className="md:h-[511px] rounded-xl"
          />
        </div>

        {/* right */}
        <div className="flex-1 flex flex-col justify-center">
          {/* title */}
          <div className="pb-2">
            <h6 className="capitalize">Few Steps to your new home</h6>
            <h2 className="text-3xl font-bold capitalize">
              This is how easy it can be
            </h2>
          </div>

          <ul>
            <li className="flex itmes-center gap-x-3 py-2">
              <BsCheck2Circle /> Access exclusive property listings
            </li>
            <li className="flex itmes-center gap-x-3 py-2">
              <BsCheck2Circle /> Expert advice from local real estate
              professionals
            </li>
            <li className="flex itmes-center gap-x-3 py-2">
              <BsCheck2Circle /> Find your dream home in prime locations
            </li>
            <li className="flex itmes-center gap-x-3 py-2">
              <BsCheck2Circle /> Seamless online property search exprerience
            </li>
            <li className="flex itmes-center gap-x-3 py-2">
              <BsCheck2Circle /> Get personalized property recommandation
            </li>
            <li className="flex itmes-center gap-x-3 py-2">
              <BsCheck2Circle /> Transparent and hassle-free transactions
            </li>
            <li className="flex itmes-center gap-x-3 py-2">
              <BsCheck2Circle /> 24/7 customer support for all your inquiries
            </li>
            <li className="flex itmes-center gap-x-3 py-2">
              <BsCheck2Circle /> Comprehensive market analysis and reports
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
