import { Helmet } from "react-helmet-async";
import ComingSoonView from "../../sections/coming-soon/coming-soon-view";

export default function ComingSoonPage() {
  return (
    <>
      <Helmet>
        <title>Coming Soon</title>
      </Helmet>
      <ComingSoonView />
    </>
  );
}
