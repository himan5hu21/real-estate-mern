import { categories } from "../assets/resources/data";
import "../assets/css/pages.css";

function Listings() {
  return (
    <section className="mx-10 py-12">
      {/* Title */}
      <div className="text-center pb-16">
        <h6 className="capitalize">From concept to reality</h6>
        <h2 className="text-3xl font-bold">Discover our newest listings</h2>
      </div>
      {/* Categories container */}
      <div className="hide-scrollbar flex gap-x-1 xl:justify-center bg-white ring-1 ring-slate-400/5 shadow-md rounded-full px-2 py-3">
        {categories.map((category) => (
          <div
            key={category.label}
            className="flex items-center flex-col gap-2 p-2 rounded-xl cursor-pointer min-w-24 xl:min-w-32"
            style={{ flexShrink: 0 }}
          >
            <div
              className="text-sky-600 rounded-full h-10 w-10 p-2 flex items-center justify-center text-lg"
              style={{ backgroundColor: `${category.color}` }}
            >
              {category.icon}
            </div>
            <p className="text-base">{category.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Listings;
