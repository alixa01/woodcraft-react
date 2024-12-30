import ProductLayout from "../components/Layout/ProductLayout";

const BedroomPage = () => {
  const headerImage = "/images/bedroom1.png";
  const title = "BED ROOM";
  const images = [
    { image: "/images/bedroom2.jpeg", title: "Beds", link: "/bedroomcategory" },
    {
      image: "/images/bedroom3.jpeg",
      title: "Wardrobe",
      link: "/bedroomcategory",
    },
    {
      image: "/images/bedroom4.jpeg",
      title: "Dressing Table",
      link: "/bedroomcategory",
    },
    {
      image: "/images/bedroom5.jpeg",
      title: "Small Chair Or Stool",
      link: "/bedroomcategory",
    },
    {
      image: "/images/bedroom6.jpeg",
      title: "Bookshelf",
      link: "/bedroomcategory",
    },
    {
      image: "/images/bedroom7.jpeg",
      title: "Storage Box",
      link: "/bedroomcategory",
    },
    {
      image: "/images/bedroom8.jpeg",
      title: "Room Divider",
      link: "/bedroomcategory",
    },
    {
      image: "/images/bedroom9.jpeg",
      title: "Headboard Multifunction",
      link: "/bedroomcategory",
    },
    {
      image: "/images/bedroom10.jpeg",
      title: "Side Table",
      link: "/bedroomcategory",
    },
  ];
  return (
    <ProductLayout
      headerImage={headerImage}
      title={title}
      images={images}></ProductLayout>
  );
};

export default BedroomPage;
