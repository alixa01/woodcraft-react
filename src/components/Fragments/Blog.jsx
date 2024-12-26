const Blog = () => {
  return (
    <div className="container m-auto w-11/12 ">
      <div className="flex justify-start flex-col pb-12">
        <div className="pb-4">
          <h1 className="text-2xl font-bold">
            Get Some Inspiration From Our Refreshing Ideas
          </h1>
        </div>
        <div className="flex flex-row gap-20">
          <div className="space-y-3 w-1/3">
            <img
              src="images/sunny.jpeg"
              alt=""
              className="w-full object-cover h-64 shadow-md"
            />
            <h2 className="text-xl font-medium">Sunny Days</h2>
            <a href="" className="text-sm font-medium underline">
              Shop Now
            </a>
          </div>
          <div className="space-y-3 w-1/3">
            <img
              src="images/sofa.jpeg"
              alt=""
              className="w-full object-cover h-64 shadow-md"
            />
            <h2 className="text-xl font-medium">Sunny Days</h2>
            <a href="" className="text-sm font-medium underline">
              Shop Now
            </a>
          </div>
          <div className="space-y-3 w-1/3">
            <img
              src="images/bedcover.jpeg"
              alt=""
              className="w-full object-cover h-64 shadow-md"
            />
            <h2 className="text-xl font-medium">Sunny Days</h2>
            <a href="" className="text-sm font-medium underline">
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-start flex-col ">
        <div className="pb-4">
          <h1 className="text-2xl font-bold pb-4">
            Looking for What’s New in Store?
          </h1>
          <div className="flex flex-row gap-20 overflow-x-auto">
            <div className="space-y-3 w-1/3">
              <img
                src="images/blog1.jpeg"
                alt=""
                className="w-full object-cover h-64 shadow-md"
              />
              <h2 className="text-xl font-medium">
                Home for Designer Sectionals
              </h2>
              <p>
                Looking for the perfect sectional to elevate your living space?
                Explore our exclusive collection of designer sectionals, crafted
                with comfort and sophistication in mind. From sleek modern
                styles to plush, family-friendly options, we have sectionals
                that fit every aesthetic and lifestyle.
              </p>
              <a href="" className="text-sm font-medium underline">
                Take A Look
              </a>
            </div>
            <div className="space-y-3 w-1/3">
              <img
                src="images/blog2.jpeg"
                alt=""
                className="w-full object-cover h-64 shadow-md"
              />
              <h2 className="text-xl font-medium">Bring in Bright Dressers</h2>
              <p>
                Add a touch of brightness and functionality to your bedroom with
                our curated collection of vibrant dressers. Designed to
                complement any decor, our dressers blend stylish aesthetics with
                practical storage solutions, ensuring your space stays organized
                without compromising on style.
              </p>
              <a href="" className="text-sm font-medium underline">
                Take A Look
              </a>
            </div>
            <div className="space-y-3 w-1/3">
              <img
                src="images/blog3.png"
                alt=""
                className="w-full object-cover h-64 shadow-md"
              />
              <h2 className="text-xl font-medium">Update your table</h2>
              <p>
                Your table is more than just a surface; it’s where memories are
                made, ideas are shared, and meals are enjoyed. Upgrade your
                space with our stunning range of tables, designed to bring style
                and functionality to every corner of your home.
              </p>
              <a href="" className="text-sm font-medium underline">
                Take A Look
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
