import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getallCategory } from "../../redux/features/categorySlice";

export const CategoryDropDown = (props) => {
  const dispatch = useDispatch();
  const { categorys, loading } = useSelector((state) => state.category);


  useEffect(() => {
    dispatch(getallCategory());
  },[dispatch]);

  const AllCategory = categorys?.map((category) => ({
    label: category?.title,
    value: category?._id
  }
));

const handleChange = selectedOption => {
  props.onChange(selectedOption);
};

  return <>{loading ? <Loader /> : <Select id="category" options={AllCategory} onChange={handleChange} value={props.value} />}</>;
  ; 
};
