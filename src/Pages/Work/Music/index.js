import SoundCloudIFrame from "../../../Shared/SoundcloudIFrame";
import Image from "../../../Shared/Image";
import secondImage from "../../../img/2.png";
import thirdImage from "../../../img/3.png";
import fourthImage from "../../../img/4.png";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";

function Music() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className="body-container">
        <div className="pd-6 work-title centered">Music</div>

        <div className="pd-6 music-section-container">
          <div>
            <div className="title-2">Collaboration</div>
            <div className="pd-4"></div>
            <div className="title-3">Yael Naim & David Donatien</div>
            <div className="pd-2"></div>
            <SoundCloudIFrame src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/240635853&color=%23363430&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
            <div className="pd-2 paragraph">
              In 2015, Mathieu first crossed paths with Yael and David when he
              produced a remix of their song "Take Me Down" from their album
              "Older." They stayed in touch in the following years, and when
              Mathieu returned from Berlin in 2021, fate granted him the
              extraordinary opportunity to collaborate with Yael on an
              experimental music session in June 2022. Since then, they've
              embarked on an ongoing creative partnership! From helping set up
              David's studio to embarking on imaginative sound explorations
              alongside Yael, Mathieu spends 3 to 5 days with them every month.
              This collaboration with Yael and David has not only allowed him to
              surmount past adversities in the music industry but has also
              revealed them as wonderful, engaging, intelligent, and generous
              people.
            </div>
            <div className="pd-4"></div>
            <div className="title-3">Emel</div>
            <div className="pd-2 paragraph">
              Mathieu had the chance to work with Emel, a singer, songwriter and
              producer living between Tunis, Paris and NYC, for special
              occasions in 2022: a serie of three gigs, with an orchestra and
              lot of talented guests (Yazz Ahmed, Léonie Pernet, Awa Ly, Laura
              Cahen…), in the Theatre Antique of Arles, Toulouse and The
              Barbican in London.
            </div>
            <div className="pd-2 emel-img-container">
              <Image src={fourthImage} />
              <Image src={secondImage} />
              <Image src={thirdImage} />
            </div>
            <div className="pd-4"></div>
            <div className="title-3">Yamay</div>
            <div className="pd-2 paragraph">
              Mathieu is currently producing Yamay, very talented singer and
              composer for her upcoming EP, coming in 2024. More to come in the
              next weeks!
            </div>
          </div>
          <div className="pd-6"></div>
          <div className="title-2">Personnal Projects</div>
          <div className="pd-4"></div>
          <div className="title-3">Coming Soon</div>
          <div className="pd-2 paragraph">
            A new project, following and extending the path of Rag and Bones, is
            being currently developed. It needed time to ensure that this
            project will step up in every way, and this time is coming.
          </div>
          <div className="pd-4"></div>
          <div className="title-3">Rag And Bones</div>
          <div className="pd-2"></div>
          <SoundCloudIFrame
            height="400"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/184691474&color=%23363430&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
          <div className="pd-2 paragraph">
            <i>Where Can Your Glory Fade ?</i> is Mathieu's first solo album.
            Composed in collaboration with other musicians and friends. Recorded
            at home and at Madein France Creation (Jean Greco). Mixed by Samuel
            Navel (Paris). Mastered by Guy Davies (London).
          </div>
          <br />
          <div className="pd-1"></div>
          <b>Album release date:</b> 26 February 2016
          <div className="pd-2"></div>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/aHXVng1n5Vk?si=U7NxTLiSb7DVudZG"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="pd-4"></div>
          <div className="title-3">Improvisations</div>
          <div className="pd-2"></div>
          <SoundCloudIFrame
            height="400"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1125596614&color=%23363430&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
          <div className="pd-2 paragraph">
            In 2017 Mathieu recorded some improvisations during a home session,
            each time with a different set up of my gear (synths, piano,
            pedals…). This brings a more minimal, direct and sensible touch to
            the productions. Improvisations are a large part of his creative
            process. Unexpected sounds can be produced by creating accidents,
            which would not have been possible to exist otherwise.
          </div>
          <div className="pd-4"></div>
          <div className="title-3">Figures In Motion</div>
          <div className="pd-2"></div>
          <SoundCloudIFrame
            height="400"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/27080320&color=%23363430&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
          <div className="pd-2 paragraph">
            <i>Confusion Will Pass</i> is the second and last album of Figures
            in Motion, Mathieu's former band. It was entirely written, recorded,
            mixed and mastered at home.
            <br />
            <div className="pd-1"></div>
            <b>Album release date:</b> 18 March 2014
            <div className="pd-2"></div>
            <SoundCloudIFrame
              height="400"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/752500&color=%23363430&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
            <div className="pd-2 paragraph">
              <i>Cycle</i> is the first release of Mathieu's former band,
              Figures In Motion. It was entirely written, recorded, mixed and
              mastered at home.
              <br />
              <div className="pd-1"></div>
              <b>Album release date:</b> 1 May 2011
            </div>
            <div className="pd-2"></div>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/_-r6RM_uHK0?si=3EkKdhr0UshNyqY9"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="pd-2"></div>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/izVEQvLmQ6k?si=3UEulCGMZDR74UCj"
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
            <Link to={"/picture"} className="work-title">
              <i className="fa-solid fa-chevron-left"></i> Picture
            </Link>
          </div>
          <div>
            <Link to={"/dance"} className="work-title">
              Dance <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
