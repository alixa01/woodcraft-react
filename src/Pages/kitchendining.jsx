import CategoryLayout from "../components/Layout/CategoryLayout";

const KitchendiningPage = () => {
  const headerImage = "/images/kd1.jpeg";
  const title = "KITCHEN & DINING";
  const images = [
    { image: "/images/kd2.jpeg", title: "Dining Tables" },
    { image: "/images/kd3.jpeg", title: "Kitchen Tools" },
    { image: "/images/kd4.jpeg", title: "Cabinets" },
    { image: "/images/kd5.jpeg", title: "Pantries" },
    { image: "/images/kd6.jpeg", title: "Sink" },
    { image: "/images/kd7.jpeg", title: "Kitchen Island" },
    { image: "/images/kd8.jpeg", title: "Wooden Lamp" },
    { image: "/images/kd9.jpeg", title: "Buffet" },
    { image: "/images/kd10.jpeg", title: "Wall Racks" },
  ];
  return (
    <CategoryLayout
      headerImage={headerImage}
      title={title}
      images={images}></CategoryLayout>
  );
};

export default KitchendiningPage;
