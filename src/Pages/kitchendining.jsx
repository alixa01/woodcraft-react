import ProductLayout from "../components/Layout/ProductLayout";

const KitchendiningPage = () => {
  const headerImage = "/images/kd1.jpeg";
  const title = "KITCHEN & DINING";
  const images = [
    {
      image: "/images/kd2.jpeg",
      title: "Dining Tables",
      link: "/kitchendiningcategory",
    },
    {
      image: "/images/kd3.jpeg",
      title: "Kitchen Tools",
      link: "/kitchendiningcategory",
    },
    {
      image: "/images/kd4.jpeg",
      title: "Cabinets",
      link: "/kitchendiningcategory",
    },
    {
      image: "/images/kd5.jpeg",
      title: "Pantries",
      link: "/kitchendiningcategory",
    },
    {
      image: "/images/kd6.jpeg",
      title: "Sink",
      link: "/kitchendiningcategory",
    },
    {
      image: "/images/kd7.jpeg",
      title: "Kitchen Island",
      link: "/kitchendiningcategory",
    },
    {
      image: "/images/kd8.jpeg",
      title: "Wooden Lamp",
      link: "/kitchendiningcategory",
    },
    {
      image: "/images/kd9.jpeg",
      title: "Buffet",
      link: "/kitchendiningcategory",
    },
    {
      image: "/images/kd10.jpeg",
      title: "Wall Racks",
      link: "/kitchendiningcategory",
    },
  ];
  return (
    <ProductLayout
      headerImage={headerImage}
      title={title}
      images={images}></ProductLayout>
  );
};

export default KitchendiningPage;
