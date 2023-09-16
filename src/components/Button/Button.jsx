const Button = ({ dark, setDark }) => {
  const handlerState = () => {
    setDark(!dark);
  };

  return (
    <button onClick={() => handlerState()}>
      {dark === true ? "Light" : "Dark"}
    </button>
  );
};

export default Button;
