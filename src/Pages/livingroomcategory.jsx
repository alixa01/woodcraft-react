import CategoryLayout from "../components/Layout/CategoryLayout";

const LivingroomCategoryPage = () => {
  const images = [
    {
      image: "/images/lr1.jpeg",
      title: "Comfort",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
    {
      image: "/images/lr2.jpeg",
      title: "Ancient",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
    {
      image: "/images/lr3.jpeg",
      title: "Ancient",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
    {
      image: "/images/lr4.jpeg",
      title: "Classy",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
    {
      image: "/images/lr5.jpeg",
      title: "Comfort",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
    {
      image: "/images/lr6.jpeg",
      title: "Special",
      description: "Green 2-Seater Velvet Sofa",
      price: "$299",
    },
  ];
  return <CategoryLayout images={images} />;
};

export default LivingroomCategoryPage;
