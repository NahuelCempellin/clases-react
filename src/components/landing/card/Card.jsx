import { Link } from "react-router-dom";

const Card = ({ nombre, descripcion, img, id }) => {
  return (
    <li className="card-container">
      <div className="img-cont">
        <img src={img} />
      </div>
      <Link to={`/about/${id}`}>{nombre}</Link>
      <p>{descripcion}</p>
    </li>
  );
};

export default Card;
