import CategoryLayout from "../components/Layout/CategoryLayout";

const KitchendiningCategoryPage = () => {
  const images = [
    {
      image: "/images/kd2.jpeg",
      title: "Comfort",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
    {
      image: "/images/kd5.jpeg",
      title: "Ancient",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
    {
      image: "/images/kd3.jpeg",
      title: "Ancient",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
    {
      image: "/images/kd1.jpeg",
      title: "Classy",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
    {
      image: "/images/kd9.jpeg",
      title: "Comfort",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
    {
      image: "/images/kd10.jpeg",
      title: "Special",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
  ];
  return <CategoryLayout images={images} />;
};

export default KitchendiningCategoryPage;
