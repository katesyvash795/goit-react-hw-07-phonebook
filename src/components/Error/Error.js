import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Error = () => {
    return (
      <div >
        <h1 margin="20px">Error</h1>
        <FontAwesomeIcon icon={faTimesCircle} size="3x" color="red" />
      </div>
    );
  };
  
  export default Error;