function Image({ src, credit }) {
  return (
    <div>
      <img src={src} alt="Alt" />
      <p className="credit">
        <i>{credit}</i>
      </p>
    </div>
  );
}

export default Image;
