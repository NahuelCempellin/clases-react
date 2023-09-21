import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../features/themeSlice/themeSlice";

const Button = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const handlerTheme = () => {
    dispatch(changeTheme(!theme));
  };

  return (
    <button onClick={() => handlerTheme()}>
      {theme === true ? "Light" : "Dark"}
    </button>
  );
};

export default Button;
