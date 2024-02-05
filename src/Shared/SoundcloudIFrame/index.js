function SoundCloudIFrame({ src, height }) {
  return (
    <>
      <iframe
        width="100%"
        height={height ?? 130}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={src}
      ></iframe>
    </>
  );
}

export default SoundCloudIFrame;
