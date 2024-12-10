import { useDispatch } from "react-redux";
import Select from "react-select";

export const CategoryDropDown = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  },[dispatch]);

  return (
    <>
      <Select id="category" />
    </>
  );
};
