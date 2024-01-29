import { useRouteError } from "react-router-dom";
import PropTypes from "prop-types";

const ErrorPage = ({ error }) => {
  error;
  const routeError = useRouteError();
  if (error) console.log(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{routeError ? routeError.statusText || routeError.message : null}</i>
      </p>
    </div>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.string,
};

ErrorPage.defaultProps = {
  error: null,
};

export default ErrorPage;
