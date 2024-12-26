import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Username"
        type="text"
        placeholder="Jhon Doe"
        name="username"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="username"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="********"
        name="username"
      />
      <Button type="submit" classname="bg-secondary">
        Sign In
      </Button>
    </form>
  );
};

export default FormLogin;
