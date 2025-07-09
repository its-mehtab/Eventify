import { useParams } from "react-router-dom";
import Concert from "../concert/Concert";
import StandUp from "../stand-up/StandUp";
import Sports from "../sports/Sports";
// import NotFound from "../pages/NotFound"; // optional
import { useEventsByType } from "../../hooks/useEvents";
import BannerSection from "../home/components/banner-section/BannerSection";

const Category = () => {
  const { categoryName } = useParams();

  const { events, loading, error } = useEventsByType(categoryName);

  switch (categoryName.toLowerCase()) {
    case "concert":
      return <Concert eventData={events} />;
    case "comedy":
      return <StandUp eventData={events} />;
    case "sports":
      return <Sports eventData={events} />;
    default:
      return (
        <BannerSection className="sp-b">
          <div className="row justify-content-center pb-md-4">
            <div className="col-md-11 col-xxl-9">
              <div className="banner-content text-center">
                <div className="common-head">
                  <h1>No data found</h1>
                </div>
              </div>
            </div>
          </div>
        </BannerSection>
      );
  }
};

export default Category;
