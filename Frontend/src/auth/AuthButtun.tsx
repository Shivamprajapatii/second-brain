import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

const AuthButton = () => {
  const navigate = useNavigate();

  return (
    <>
      {localStorage.getItem("token") ? (
        <Button
          title="Logout"
          variant="dangour"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
        />

      ) : (
        <Button
          title="Signup"
          variant="primary"
          onClick={() => {
            navigate("/signup");
          }}
        />
      )}
    </>
  );
};

export default AuthButton;
