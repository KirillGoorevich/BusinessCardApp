import React, { Component } from "react";
import { getCard } from "../../services/cardService";
import PageHeader from "../common/pageHeader";

class ShowCard extends Component {
  state = {
    card: {},
    errors: {},
    isMounted: false,
  };

  async componentDidMount() {
    try {
      const { data } = await getCard(this.props.id);
      this.setState({ card: data, isMounted: true });
    } catch (error) {
      this.setState({ errors: error.message });
    }
  }

  render() {
    const { card, isMounted } = this.state;
    if (!isMounted) return null;
    const {
      title,
      description,
      image: { url, alt },
      address,
      phone,
      bizNumber,
      createdAt,
      //default cards don't have subtitle
      subtitle = "",
      likes,
    } = card;
    return (
      <React.Fragment>
        <PageHeader title={title} subTitle={subtitle} />
        <div className="container">
          <div>
            <img
              style={{ maxWidth: "400px" }}
              src={url}
              className="card-img"
              alt={alt}
            ></img>
            <p>
              <strong>Description: </strong>
              {description}
            </p>
            <p>
              <strong>Address: </strong>
              {address}
            </p>
            <p>
              <strong>Phone: </strong>
              {phone}
            </p>
            <p>
              <strong>Buisness Number: </strong>
              {bizNumber}
            </p>
            <p>
              <strong>Created At: </strong>
              {createdAt}
            </p>
            <p>
              <strong>Likes: </strong>
              {likes.length}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ShowCard;
