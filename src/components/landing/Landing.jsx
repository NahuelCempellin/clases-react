import logo from "../../assets/react.svg";
import Card from "./card/Card";

const Landing = () => {
  const array = [
    { nombre: "Nacho", descripcion: "lorem alsdkalsd", img: logo },
    { nombre: "Maxi", descripcion: "lorem alsdkalsd", img: logo },
  ];

  return (
    <div className="containter">
      {array.map((el, index) => {
        return (
          <Card
            key={index}
            nombre={el.nombre}
            img={el.logo}
            descripcion={el.descripcion}
            id={index}
          />
        );
      })}
    </div>
  );
};

export default Landing;
