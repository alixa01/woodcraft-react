import CategoryLayout from "../components/Layout/CategoryLayout";

const LivingroomPage = () => {
  const headerImage = "/images/lr1.jpeg";
  const title = "LIVING ROOM";
  const images = [
    { image: "/images/lr2.jpeg", title: "Sofas" },
    { image: "/images/lr3.jpeg", title: "Coffe Tables" },
    { image: "/images/lr4.jpeg", title: "Decor" },
    { image: "/images/lr5.jpeg", title: "Combo Sets" },
    { image: "/images/lr6.jpeg", title: "Rugs" },
    { image: "/images/lr7.jpeg", title: "Neck Tables" },
    { image: "/images/lr8.jpeg", title: "Armchair" },
    { image: "/images/lr9.jpeg", title: "Console Tables" },
    { image: "/images/lr10.jpeg", title: "Side Tables" },
  ];
  return (
    <CategoryLayout
      headerImage={headerImage}
      title={title}
      images={images}></CategoryLayout>
  );
};

export default LivingroomPage;
