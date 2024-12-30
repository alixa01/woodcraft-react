import ProductLayout from "../components/Layout/ProductLayout";

const LivingroomPage = () => {
  const headerImage = "/images/lr1.jpeg";
  const title = "LIVING ROOM";
  const images = [
    { image: "/images/lr2.jpeg", title: "Sofas", link: "/livingroomcategory" },
    {
      image: "/images/lr3.jpeg",
      title: "Coffe Tables",
      link: "/livingroomcategory",
    },
    { image: "/images/lr4.jpeg", title: "Decor", link: "/livingroomcategory" },
    {
      image: "/images/lr5.jpeg",
      title: "Combo Sets",
      link: "/livingroomcategory",
    },
    { image: "/images/lr6.jpeg", title: "Rugs", link: "/livingroomcategory" },
    {
      image: "/images/lr7.jpeg",
      title: "Neck Tables",
      link: "/livingroomcategory",
    },
    {
      image: "/images/lr8.jpeg",
      title: "Armchair",
      link: "/livingroomcategory",
    },
    {
      image: "/images/lr9.jpeg",
      title: "Console Tables",
      link: "/livingroomcategory",
    },
    {
      image: "/images/lr10.jpeg",
      title: "Side Tables",
      link: "/livingroomcategory",
    },
  ];
  return (
    <ProductLayout
      headerImage={headerImage}
      title={title}
      images={images}></ProductLayout>
  );
};

export default LivingroomPage;
