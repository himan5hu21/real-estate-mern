import { MdOutlineQuestionAnswer } from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";

function Features() {
  return (
    <section className="mx-10 py-12">
      {/* Title */}
      <div className="text-center pb-16">
        <h6 className="capitalize">Few Steps to your new home</h6>
        <h2 className="text-3xl font-bold capitalize">
          This is how easy it can be
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white p-4 rounded-3xl shadow-lg">
          <MdOutlineQuestionAnswer className="text-3xl font-bold mb-3 text-sky-600" />
          <h4 className="text-lg font-semibold">Answer Questions</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            repudiandae ad soluta vitae minima natus.
          </p>
        </div>
        <div className="bg-white p-4 rounded-3xl shadow-lg">
          <BiSelectMultiple className="text-3xl font-bold mb-3 text-yellow-500" />
          <h4 className="text-lg font-semibold">Select Property</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            in nam voluptatem ullam, alias culpa!
          </p>
        </div>
        <div className="bg-white p-4 rounded-3xl shadow-lg">
          <GrCertificate className="text-3xl font-bold mb-3 text-red-500" />
          <h4 className="text-lg font-semibold">Enjoy Living</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            similique consequuntur quam, nobis voluptatibus optio?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
