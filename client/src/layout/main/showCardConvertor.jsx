import { useParams } from "react-router-dom";
import ShowCard from "./showCard";

const ShowCardConvertor = ({ user }) => {
  const { id } = useParams();
  return <ShowCard id={id} />;
};

export default ShowCardConvertor;
