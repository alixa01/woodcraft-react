import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Navbar";
import Button from "../Elements/Button";

const CategoryLayout = (props) => {
  const { images, title, description, price } = props;
  return (
    <div>
      <Navbar />
      <div className="pt-12">
        <div className="m-auto pb-10 w-3/4 flex flex-row">
          {/* filter, price, size */}
          <div className="w-1/4">
            <h1 className="font-medium">Filter By</h1>
            <hr
              style={{
                border: "1px solid #D9D9D9",
                margin: "20px 0",
              }}
            />

            {/* Price filter */}
            <div className="space-y-2">
              <h1 className="font-medium">Price</h1>
              <div class="flex items-center ">
                <input
                  type="checkbox"
                  id="price1"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
                />
                <label
                  for="price1"
                  class="pl-3 text-sm font-medium text-gray-700">
                  $150 - $250
                </label>
                <p className="text-base text-gray-500 ml-auto"> (11) </p>
              </div>
              <div class="flex items-center ">
                <input
                  type="checkbox"
                  id="price2"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
                />
                <label
                  for="price2"
                  class="pl-3 text-sm font-medium text-gray-700">
                  $251 - $350
                </label>
                <p className="text-base text-gray-500 ml-auto"> (19) </p>
              </div>
              <div class="flex items-center ">
                <input
                  type="checkbox"
                  id="price3"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
                />
                <label
                  for="price3"
                  class="pl-3 text-sm font-medium text-gray-700">
                  $351 - $550
                </label>
                <p className="text-base text-gray-500 ml-auto"> (68) </p>
              </div>
              <div class="flex items-center ">
                <input
                  type="checkbox"
                  id="price4"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
                />
                <label
                  for="price4"
                  class="pl-3 text-sm font-medium text-gray-700">
                  $551 - $850
                </label>
                <p className="text-base text-gray-500 ml-auto"> (210) </p>
              </div>
              <div class="flex items-center ">
                <input
                  type="checkbox"
                  id="price5"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
                />
                <label
                  for="price5"
                  class="pl-3 text-sm font-medium text-gray-700">
                  $850 - $1000
                </label>
                <p className="text-base text-gray-500 ml-auto"> (89) </p>
              </div>
              <div class="flex items-center ">
                <input
                  type="checkbox"
                  id="price6"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
                />
                <label
                  for="price6"
                  class="pl-3 text-sm font-medium text-gray-700">
                  $1001 - $2000
                </label>
                <p className="text-base text-gray-500 ml-auto"> (46) </p>
              </div>
            </div>

            <hr
              style={{
                border: "1px solid #D9D9D9",
                margin: "20px 0",
              }}
            />

            {/* Size Filter */}
            <div className="space-y-2">
              <h1 className="font-medium">Size</h1>
              <div class="flex items-center ">
                <input
                  type="checkbox"
                  id="size1"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
                />
                <label
                  for="size1"
                  class="pl-3 text-sm font-medium text-gray-700">
                  2 Seater
                </label>
                <p className="text-base text-gray-500 ml-auto"> (84) </p>
              </div>
              <div class="flex items-center ">
                <input
                  type="checkbox"
                  id="size2"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
                />
                <label
                  for="size2"
                  class="pl-3 text-sm font-medium text-gray-700">
                  3 Seater
                </label>
                <p className="text-base text-gray-500 ml-auto"> (60) </p>
              </div>
              <div class="flex items-center ">
                <input
                  type="checkbox"
                  id="size3"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
                />
                <label
                  for="size3"
                  class="pl-3 text-sm font-medium text-gray-700">
                  4 Seater
                </label>
                <p className="text-base text-gray-500 ml-auto"> (58) </p>
              </div>
              <div class="flex items-center ">
                <input
                  type="checkbox"
                  id="size4"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
                />
                <label
                  for="size4"
                  class="pl-3 text-sm font-medium text-gray-700">
                  Corner
                </label>
                <p className="text-base text-gray-500 ml-auto"> (26) </p>
              </div>
              <div class="flex items-center ">
                <input
                  type="checkbox"
                  id="size5"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded hover:cursor-pointer"
                />
                <label
                  for="size5"
                  class="pl-3 text-sm font-medium text-gray-700">
                  Sofabeds
                </label>
                <p className="text-base text-gray-500 ml-auto"> (19) </p>
              </div>
            </div>

            <hr
              style={{
                border: "1px solid #D9D9D9",
                margin: "20px 0 0 0",
              }}
            />
          </div>

          {/* product */}
          <div className="w-3/4">
            <div className="grid grid-cols-2 gap-6 p-12">
              {images.map((item, index) => (
                <div
                  key={index}
                  className="space-y-3 flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover shadow-md"
                  />
                  <div className="w-full flex flex-row justify-between">
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="text-xl font-semibold text-red-600">
                      {item.price}
                    </p>
                  </div>
                  <div className="w-full">
                    {" "}
                    <p className="text-sm text-gray-600 text-left">
                      {item.description}
                    </p>
                  </div>

                  <Button classname="bg-secondary w-1/2 shadow-md">Buy</Button>
                  <hr className="w-full border-t-2 border-gray-300 my-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryLayout;
