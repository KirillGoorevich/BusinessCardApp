import PropTypes from "prop-types";
import Cards from "../Cards/cards";
import TableRow from "../Cards/TableRow.jsx";
import TableColumn from "../Cards/TableColumn";

const DisplayModes = ({ cards, display, changeLikeStatus, handleDelete }) => {
  if (!cards.length) return <div>No Cards In The Database...</div>;

  if (display === "cards")
    return (
      <Cards
        cards={cards}
        changeLikeStatus={changeLikeStatus}
        handleDelete={handleDelete}
      />
    );
  if (display === "table-row") return <TableRow cards={cards} />;
  if (display === "table-column") return <TableColumn cards={cards} />;
};

DisplayModes.propTypes = {
  cards: PropTypes.array.isRequired,
  display: PropTypes.string.isRequired,
  changeLikeStatus: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default DisplayModes;
