export default function Card({ name, image, handleClick }) {
  return (
    <div className="pokemon-card" onClick={handleClick}>
      <img src={image} alt={name} />
      <p className="pokemon-name">{name}</p>
    </div>
  );
}
