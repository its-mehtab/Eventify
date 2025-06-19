import { useParams } from "react-router-dom";
import Concert from "../concert/Concert";
import StandUp from "../stand-up/StandUp";
import Sports from "../sports/Sports";
// import NotFound from "../pages/NotFound"; // optional
import { useEventsByType } from "../../hooks/useEvents";

const Category = () => {
  const { categoryName } = useParams();

  const { events, loading, error } = useEventsByType(categoryName);

  // if (loading) return <LoadingSpinner />;
  // if (error) return <ErrorMessage message={error} />;
  // console.log(events);

  switch (categoryName.toLowerCase()) {
    case "concert":
      return <Concert eventData={events} />;
    case "comedy":
      return <StandUp eventData={events} />;
    case "sports":
      return <Sports eventData={events} />;
    // default:
    //   return <NotFound />; // fallback if category doesn't match
  }
};

export default Category;
