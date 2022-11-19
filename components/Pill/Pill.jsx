const Pill = (props) => {
  return (
    <div {...props}>
      <p>{props.name}</p>
    </div>
  );
};

export default Pill;
