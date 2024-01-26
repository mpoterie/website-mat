import SoundCloudIFrame from "../../../Shared/SoundcloudIFrame";
import Image from "../../../Shared/Image";
import fifthImage from "../../../img/5.png";
import sixthImage from "../../../img/6.jpg";
import seventhImage from "../../../img/7.jpg";
import eightImage from "../../../img/8.jpg";
import ninthImage from "../../../img/9.jpg";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

function Dance() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className="body-container">
        <div className="pd-6 work-title centered">Dance</div>
        <div className="pd-6"></div>
        <div className="music-section-container">
          <div>
            <div className="paragraph">
              Mathieu brings extensive experience as a skilled pianist
              specializing in classical and contemporary dance. From 2011 to
              2018, he had the privilege of collaborating with renowned
              institutions such as the National Ballet of Marseille, Preljocaj,
              and the Dance Conservatories of Paris, Aix-en-Provence, and
              Nanterre. Additionally, he had the remarkable opportunity to play
              during a summer course for Nicolas Le Riche and Clairemarie Osta's
              classes, where he collaborated with talented students from the
              Opera de Paris and Aix-en-Provence.
            </div>
            <div className="pd-4 dance-img-container">
              <Image src={fifthImage} />
              <Image src={sixthImage} />
              <Image src={seventhImage} />
              <Image src={eightImage} />
              <Image src={ninthImage} />
            </div>

            <div className="pd-4"></div>
            <div className="title-3">Collaborating with Nir de Volff</div>
            <div className="pd-2 paragraph">
              Here's a handpicked trio of tracks, each weaving together snippets
              from Mathieu's past compositions, reimagined and fine-tuned
              expressly for dance.
            </div>
            <div className="pd-2"></div>
            <SoundCloudIFrame src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1627322430&color=%23363430&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />

            <div className="pd-2 paragraph">
              In 2021, the Berlin performance 'Come as you are #2' took place at
              Dock11, marking the continuation of a previous production by Nir
              de Volff that depicted the journey of Syrian dancers and refugees
              as they assimilated into the vibrant Berlin art scene. During the
              same year, Mathieu had the privilege of collaborating with the
              FORWARD DANCE COMPANY in Leipzig, where people with normative and
              non-normative bodies were valued equally in their creative work.
              In 2023, he worked on another creation for a groundbreaking
              original production by Nir de Volff at the Opera of Macao, China,
              called ‘Club Loneliness‘.
            </div>
            <div className="pd-2"></div>

            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/FGVSURa7f4A?si=7p1GJ67j4PhUCPYa"
                title="YouTube video player"
                frameorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="pd-2"></div>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/FTOvy1MsXyQ?si=o4lBdupcWRHiJ3vo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="pd-2"></div>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/EWlCzYOqaBk?si=_jhPleiRnP87PmNb"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-container">
        <div className="pd-6 navigation-flex">
          <div>
            <Link to={"/music"} className="work-title">
              <i className="fa-solid fa-chevron-left"></i> Music
            </Link>
          </div>
          <div>
            <Link to={"/picture"} className="work-title">
              Picture <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dance;
