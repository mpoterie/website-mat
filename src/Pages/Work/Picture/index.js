import SoundCloudIFrame from "../../../Shared/SoundcloudIFrame";
import { useLayoutEffect } from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { Link } from "react-router-dom";

function Picture() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className="body-picture-container">
        <div className="pd-6 work-title centered">Picture</div>
        <div className="pd-6 music-section-container">
          <div>
            <div className="title-2">Commercials</div>
            <div className="pd-4"></div>
            <div className="paragraph">
              Starting in early 2020, Mathieu embarked on a journey of composing
              music for short films and advertisements. Here is a showcase of
              some of the projects he has undertaken in collaboration with the
              Berlin-based agency, Audioforce, both in the comfort of his own
              space and within Audioforce'studios at Funkhaus Berlin, and with
              other various clients.
            </div>
            <div className="pd-4"></div>
          </div>

          <TECarousel
            showControls
            showIndicators
            crossfade
            ride="carousel"
            className="z-index-reset"
          >
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <TECarouselItem
                itemID={1}
                className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <div>
                  <div
                    style={{ padding: "56.25% 0 0 0", position: "relative" }}
                  >
                    <iframe
                      src="https://player.vimeo.com/video/432881139?h=6f919c38b2"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      frameborder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <script src="https://player.vimeo.com/api/player.js"></script>
                </div>
              </TECarouselItem>
              <TECarouselItem
                itemID={2}
                className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://www.youtube.com/embed/Jp7yo_tJVSI?si=q9UHyeeTJ7kxs5RP"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </TECarouselItem>
              <TECarouselItem
                itemID={3}
                className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://www.youtube.com/embed/JdKSiYSucL0?si=UP-VlfdPglSbtgc3"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </TECarouselItem>
              <TECarouselItem
                itemID={4}
                className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://www.youtube.com/embed/MdRAnZjQJbA?si=aonO9rvRPiC7gHTG"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </TECarouselItem>
              <TECarouselItem
                itemID={5}
                className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://www.youtube.com/embed/voMp5PCPAqU?si=JHjeOWjeIf72r0dZ"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </TECarouselItem>
            </div>
          </TECarousel>

          <div className="pd-6 title-2">Playlists</div>
          <div className="pd-2"></div>
          <div className="pd-2 paragraph">
            Here are a few tracks Mathieu composed in relation to picture
            scoring.
          </div>
          <div className="pd-2 soundcloud-flex-container">
            <iframe
              width="100%"
              height="400"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1691820936&color=%23363430&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <iframe
              width="100%"
              height="400"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1691820375&color=%23363430&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <iframe
              width="100%"
              height="400"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1691819241&color=%23363430&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </div>
        </div>
        <div className="pd-6"></div>
        <div className="title-2">Soundtracks</div>
        <div className="pd-2"></div>
        <div className="paragraph">
          In 2021, Mathieu has undertaken the task of composing diverse
          soundtracks for pre-existing movie scenes. He imposed a personal
          constraint, limiting himself to a maximum of an half working day per
          video.
        </div>
        <TECarousel
          className="pd-2 z-index-reset"
          showControls
          showIndicators
          crossfade
          ride="carousel"
        >
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <div>
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://www.youtube.com/embed/trz1Yj6I9UM?si=IwaR8f6Nl6cgyvcD"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/456698519?h=5b5db694a8"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>
            </TECarouselItem>
          </div>
        </TECarousel>
      </div>
      <div className="navigation-container">
        <div className="pd-6 navigation-flex">
          <div>
            <Link to={"/dance"} className="work-title">
              <i className="fa-solid fa-chevron-left"></i> Dance
            </Link>
          </div>
          <div>
            <Link to={"/music"} className="work-title">
              Music <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Picture;
