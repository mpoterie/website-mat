import { Link } from "react-router-dom";
import portrait from "../../img/image-asset.jpg";
import Image from "../../Shared/Image";

function About() {
  return (
    <div className="body-container container-short">
      <div className="pd-6"></div>
      <div className="main-title">
        Mathieu Poterie is a <br /> music producer, pianist and composer. <br />
        He lives in Britanny, France
      </div>
      <div className="pd-4"></div>
      <div className="image-container">
        <Image src={portrait} credit="Photo by Capucine Poterie" />
      </div>

      <div className="pd-4"></div>
      <div className="paragraph-container">
        <p className="paragraph">
          His musical compositions seamlessly blend analog, digital, and
          acoustic instruments, traversing a diverse spectrum of genres, from
          electronic to orchestral scoring. His creative inspiration draws from
          an eclectic array of influences, including Thom Yorke, Clark, Aphex
          Twin, Steve Reich, Krzysztof Penderecki, Jóhann Jóhannsson, and Hildur
          Guðnadóttir. His talents extend to composing and producing music for
          an illustrious roster of artists, such as{" "}
          <span className="link">
            <Link to="https://www.instagram.com/yael_naim_/" target="_blank">
              Yael Naim
            </Link>
          </span>
          ,{" "}
          <span className="link">
            <Link to="https://www.instagram.com/yamay_off/" target="_blank">
              Yamay
            </Link>
          </span>{" "}
          and collaborating as a stage musician with{" "}
          <span className="link">
            <Link
              to="https://www.instagram.com/emelmathlouthi/"
              target="_blank"
            >
              Emel
            </Link>
          </span>{" "}
          and{" "}
          <span className="link">
            <Link to="https://www.daviddonatien.com/" target="_blank">
              David Donatien
            </Link>
          </span>{" "}
          . His creative palette allows him to craft captivating compositions
          for singers, musicians and visual artists to crafting evocative
          soundscapes for dance ballets, theatrical productions, documentaries,
          and cinematic works.
        </p>
      </div>
      <div className="pd-4"></div>
      <div>
        <div className="contact-section-container">
          <div>
            <div className="title-2">Contact</div>
            <p className="paragraph">
              <i>mathieupoterie@gmail.com</i>
            </p>
          </div>
          <div>
            <div className="title-2">Follow Mathieu</div>
            <Link to="https://www.instagram.com/mathieupoterie/">
              <p className="paragraph">
                <i>Instagram</i>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
