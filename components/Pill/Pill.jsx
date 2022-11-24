const Pill = (props) => {
  return (
    <div {...props}>
      <p className="text-xs">{props.name}</p>
    </div>
  );
};

export default Pill;
