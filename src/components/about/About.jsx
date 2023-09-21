import { useParams } from "react-router-dom";

const About = () => {
  const { id } = useParams();

  return <div>About</div>;
};

export default About;
