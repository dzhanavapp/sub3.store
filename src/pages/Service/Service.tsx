import { useParams } from "react-router-dom";
import { services } from "../../mocks/services";

const Service = () => {
  const { id } = useParams();

  console.log(id, "id");

  const service = services[0];

  return (
    <>
      <div>my service 2</div>
    </>
  );
};

export default Service;
