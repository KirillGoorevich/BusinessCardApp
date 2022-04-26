import PropTypes from "prop-types";

const TableColumn = ({ cards }) => {
  return (
    <table className="vertical-table">
      <thead>
        <tr>
          <th>num.</th>
          <th>title</th>
          <th>description</th>
          <th>phone</th>
          <th>address</th>
          <th>number</th>
        </tr>
      </thead>
      <tbody>
        {cards.map((card, i) => {
          const { title, description, phone, address, bizNumber } = card;
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{title}</td>
              <td>{description}</td>
              <td>{phone}</td>
              <td>{address}</td>
              <td>{bizNumber}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TableColumn.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default TableColumn;
