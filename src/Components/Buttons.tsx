interface ButtonProps {
   click: () => void;
   task: string;
}

export const Buttons = ({ click, task }: ButtonProps) => {
   return <button onClick={click}>{task}</button>;
};
