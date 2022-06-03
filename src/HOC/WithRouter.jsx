import { useMatch } from "react-router-dom";

export const WithRouter = (Component) => {
  let RouterComponent = (props) => {
    const match = useMatch("/profile/:userId/");
    return <Component {...props} match={match} />;
  };
  return RouterComponent;
};
