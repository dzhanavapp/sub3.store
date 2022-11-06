import { useParams } from "react-router-dom";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import { services } from "../../mocks/services";
import classes from "./Service.module.css";

const SeviceHeader = () => {
  return <header className={classes.header}></header>;
};

const CONTRACT_ADDRESS =
  "0xd217ca36bfa72fe5c21e515664317ca20eddba3d15e416e43014a152d3a31491";

const Service = () => {
  const { id } = useParams();

  console.log(id, "id");

  const service = services[0];

  const address = service.address;

  return (
    <>
      <ButtonBack />
      <div>my service 2</div>
    </>
  );
};

export default Service;
