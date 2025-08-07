import { Slide } from "react-slideshow-image";
import "../../../node_modules/react-slideshow-image/dist/styles.css";

export default function Sliderv2() {
  const slideImages = [
    {
      url: "/banner-1.webp",
      caption: "Banner 1",
    },
    {
      url: "/banner-2.webp",
      caption: "Banner 1",
    },
    {
      url: "/banner-1.webp",
      caption: "Banner 1",
    },
    {
      url: "/banner-2.webp",
      caption: "Banner 1",
    },
  ];

  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: true,
    infinite: true,
    easing: "ease",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    width: "100%",
    aspectRatio: "1312 / 412",
  };

  return (
    <div className="w-full flex justify-center items-center ">
      <div className="w-full mt-24 md:mt-28 max-w-7xl">
        <Slide {...properties}>
          {slideImages.map((slideImage, index) => (
            <div key={index} className="w-full overflow-hidden px-1">
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
                className="rounded-lg md:rounded-2xl"
              ></div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}
