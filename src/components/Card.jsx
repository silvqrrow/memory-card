export default function Card({ name, image }) {
  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
