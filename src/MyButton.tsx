interface IMyButtonProps {
    label: string;
    onClick: () => void;
}

export const MyButton: React.FC<IMyButtonProps> = ({ label, onClick }) => {
    return <button onClick={onClick}>{ label }</button>    
}