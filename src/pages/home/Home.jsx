import Button from "../../components/button/Button";
import "./home.css";
import { assets } from "../../assets/assets";
import EventCard from "../../components/event-card/EventCard";
import VerticalCard from "../../components/vertical-card/VerticalCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BannerSection from "./components/banner-section/BannerSection";
import AboutSection from "./components/about-section/AboutSection";
import EventsSection from "./components/events-section/EventsSection";
import FeaturesSection from "./components/features-section/FeaturesSection";
import StandUpSection from "./components/stand-up-section/StandUpSection";
import { useEvents } from "../../hooks/useEvents";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import {
  convertDate,
  convertTo12HourFormat,
} from "../../components/DateTimeFormatter";
import SportsContent from "../../components/sports-content/SportsContent";

function Home() {
  const { events, loading, error } = useEvents();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  const upcomingEvent = events
    .filter((currEvent) => currEvent.type === "concert")
    .slice(0, 1)[0];

  return (
    <>
      <BannerSection>
        <div className="row justify-content-center">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>
                  <img src={assets.animate_icon} alt="" />
                  book your <br />
                  tickets for <span>event</span>
                </h1>
              </div>
              <p className="mt-3">
                Experience live entertainment with fast, easy, and secure ticket
                booking.
              </p>
              <div className="d-flex justify-content-center flex-wrap">
                <Button btnClass="mt-4">Grab Your Ticket</Button>
                <Button btnClass={"btn-white ms-3  mt-4"}>Join Now</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="upcoming-event">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="upcoming-event-item">
                <h3>{upcomingEvent.heading}</h3>
                <p>
                  {`${upcomingEvent.artist} - ${convertDate(
                    upcomingEvent.date
                  )}`}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="upcoming-event-item">
                <h3>
                  {convertTo12HourFormat(
                    `${upcomingEvent.timing.start} - ${upcomingEvent.timing.end}`
                  )}
                </h3>
                <p>{upcomingEvent.location.split(",")[0]}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="upcoming-event-item d-flex gap-3 align-items-center justify-content-between flex-wrap">
                <div>
                  <h3>353</h3>
                  <p>Attending</p>
                </div>
                <Button>
                  <assets.AddPersonIcon />
                  Interested
                </Button>
              </div>
            </div>
          </div>
        </div>
      </BannerSection>
      <AboutSection />
      <EventsSection>
        <div className="row gx-xl-5">
          <div className="col-xl-4 text-center text-xl-start mb-4 mb-xl-0">
            <div className="events-content">
              <div className="common-head">
                <span className="inner-head">Live Lineup</span>
                <h1>UPCOMING EVENTS YOU CAN'T MISS</h1>
              </div>
              <p className="mb-3">
                Experience unforgettable music with top artists performing live!
              </p>
              <Button>Grab Your Ticket</Button>
            </div>
          </div>
          <div className="col-xl-8 col-lg-9 col-lg-10 mx-auto">
            <div className="events-content">
              {events
                .filter((currEvent) => {
                  return currEvent.type === "concert";
                })
                .slice(0, 5)
                .map((currData) => {
                  return (
                    <EventCard
                      orientation="col-md-6"
                      currConcert={currData}
                      key={currData.id}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <SportsContent events={events} />
      </EventsSection>
      <FeaturesSection />
      <StandUpSection>
        <div className="common-head text-center">
          <span className="inner-head">Comedy Nights</span>
          <h1>Laugh Loud at Live Shows</h1>
          <p>
            Catch the funniest comedians live on stage for unforgettable,
            laugh-out-loud moments and great vibes.
          </p>
        </div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            580: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          }}
        >
          {events
            .filter((currEvent) => {
              return currEvent.type === "comedy";
            })
            .slice(0, 5)
            .map((currData) => {
              return (
                <SwiperSlide>
                  <VerticalCard currData={currData} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </StandUpSection>
    </>
  );
}

export default Home;
