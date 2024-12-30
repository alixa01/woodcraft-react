import CategoryLayout from "../components/Layout/CategoryLayout";

const BedroomCategoryPage = () => {
  const images = [
    {
      image: "/images/lvc1.jpeg",
      title: "Comfort Double Bed",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
    {
      image: "/images/bedroom4.jpeg",
      title: "Ancient",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
    {
      image: "/images/bedroom2.jpeg",
      title: "Ancient",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
    {
      image: "/images/blog2.jpeg",
      title: "Classy",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
    {
      image: "/images/bedroom6.jpeg",
      title: "Wood",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
    {
      image: "/images/lvc2.jpeg",
      title: "Special Bed",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
  ];
  return <CategoryLayout images={images} />;
};

export default BedroomCategoryPage;
