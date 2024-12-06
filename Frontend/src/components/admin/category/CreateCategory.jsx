import { Caption, PrimaryButton, Title } from "../../../routes";
import { commonClassNameOfInput } from "../../common/Design";
import { UseRedirectLoggedOutUser } from "../../../hooks/useRedirectLoggedOutUser";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const CreateCategory = () => {

  UseRedirectLoggedOutUser("/login");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  //eslint-disable-next-line
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      setError("");  
      await dispatch(createCategory(title)).unwrap();
      navigate("/dashboard");
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className=" font-normal mb-5">
          Create Category
        </Title>
        <form onSubmit={handleSubmit}>
          <div className="w-full my-8">
            <Caption className="mb-2">Title *</Caption>
            <input value={title} onChange={handleInputChange} type="text" className={`${commonClassNameOfInput}`} placeholder="Title" required />
          </div>

          <PrimaryButton type="submit" className="rounded-none my-5">
            CREATE
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};