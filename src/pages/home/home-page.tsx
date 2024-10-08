import { Helmet } from "react-helmet-async";
import HomeView from "../../sections/home/home-view";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeView />
    </>
  );
}
