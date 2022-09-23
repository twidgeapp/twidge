interface IElementProps {
  icon: JSX.Element;
  onClick: () => void;
  color?: string;
}

const Element = (props: IElementProps) => {
  return (
    <div
      onClick={props.onClick}
      style={{ color: props.color }}
      className="grid place-items-center min-w-fit min-h-fit w-8 h-8  hover:bg-dark-gray4 rounded-md transition-all duration-100"
    >
      {props.icon}
    </div>
  );
};

export default Element;
