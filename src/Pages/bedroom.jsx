import CategoryLayout from "../components/Layout/CategoryLayout";

const BedroomPage = () => {
  const headerImage = "/images/bedroom1.png";
  const title = "BED ROOM";
  const images = [
    { image: "/images/bedroom2.jpeg", title: "Beds" },
    { image: "/images/bedroom3.jpeg", title: "Wardrobe" },
    { image: "/images/bedroom4.jpeg", title: "Dressing Table" },
    { image: "/images/bedroom5.jpeg", title: "Small Chair Or Stool" },
    { image: "/images/bedroom6.jpeg", title: "Bookshelf" },
    { image: "/images/bedroom7.jpeg", title: "Storage Box" },
    { image: "/images/bedroom8.jpeg", title: "Room Divider" },
    { image: "/images/bedroom9.jpeg", title: "Headboard Multifunction" },
    { image: "/images/bedroom10.jpeg", title: "Side Table" },
  ];
  return (
    <CategoryLayout
      headerImage={headerImage}
      title={title}
      images={images}></CategoryLayout>
  );
};

export default BedroomPage;
