import { ITitleProps } from "./Title.props";
import "./Title.css";

export const Title: React.FC<ITitleProps> = ({ title }) => {
    return (
        <h2>{ title }</h2>
    )
}