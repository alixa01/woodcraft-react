import Blog from "../components/Fragments/Blog";
import Footer from "../components/Fragments/Footer";
import Hero from "../components/Fragments/Hero";
import Navbar from "../components/Fragments/Navbar";
import HomeLayout from "../components/Layout/HomeLayout";

const HomePage = () => {
  return (
    <HomeLayout>
      <Navbar></Navbar>
      <Hero></Hero>
      <br />
      <Blog></Blog>
      <br />
      <Footer></Footer>
    </HomeLayout>
  );
};

export default HomePage;
