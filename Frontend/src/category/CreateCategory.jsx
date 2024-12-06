import { Caption, PrimaryButton, Title } from "../routes";
import { commonClassNameOfInput } from "../components/common/Design";
import { UseRedirectLoggedOutUser } from "../hooks/useRedirectLoggedOutUser";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CreateCategory = () => {

  UseRedirectLoggedOutUser("/login");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [console, setError] = useState("");

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      setError("");  
      await dispatch(createCategory(title));
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
        <form>
          <div className="w-full my-8">
            <Caption className="mb-2">Title *</Caption>
            <input type="text" className={`${commonClassNameOfInput}`} placeholder="Title" required />
          </div>

          <PrimaryButton type="submit" className="rounded-none my-5">
            CREATE
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};
