interface IElementProps {
    icon: JSX.Element;
}

const Element = (props: IElementProps) => {
    return (
        <div className="grid place-items-center min-w-fit min-h-fit w-8 h-8 text-dark-gray11 hover:bg-dark-gray4 rounded-md transition-all duration-100">
            {props.icon}
        </div>
    );
};

export default Element;
