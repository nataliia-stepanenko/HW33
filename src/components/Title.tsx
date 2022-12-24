type TitleProps = {
    name: string;
    type: "normal" | "bold"
};

const Title = ({ name, type: fontWeight}: TitleProps) => {
    return <h2 style={{ fontWeight }}>{name}</h2>;
};

export default Title;