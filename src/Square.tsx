type Props = {
  value?: string;
  onSquareClick: () => void;
};

export default function Square({ value, onSquareClick }: Props) {
  return (
    <button className={`${value === "cross" || value === "circle" ? "remove-bg" : ""} square`} onClick={onSquareClick}>
      <span className={value}></span>
    </button>
  );
}
