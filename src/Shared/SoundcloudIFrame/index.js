function SoundCloudIFrame({ src }) {
  return (
    <>
      <iframe
        width="100%"
        height="130"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={src}
      ></iframe>
    </>
  );
}

export default SoundCloudIFrame;
