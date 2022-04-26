import React from "react";
import PageHeader from "../common/pageHeader";
import { getCards } from "../../services/cardService";
import CardExtends from "../common/Cards/CardExtends";
import SearchBar from "../common/SearchBar";
import DisplayControllers from "../common/DisplayModes/DisplayControllers";
import DisplayModes from "../common/DisplayModes/DisplayMode";

//depricated
// import Cards from "../common/Cards/cards";

class HomePage extends CardExtends {
  state = {
    data: [],
    cards: [],
    isMount: false,
    display: "cards",
  };

  async componentDidMount() {
    try {
      const { data } = await getCards();
      this.setState({ data, cards: data, isMount: true });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const cards = [...this.state.cards];
    const { isMount, display } = this.state;
    if (!isMount) return null;

    return (
      <React.Fragment>
        <PageHeader
          title="Business Card App"
          subTitle="Here you will find business cards"
        />
        <div className="container">
          <SearchBar
            placeholder="Enter business name or number"
            handleChange={this.handleChange}
          />
          <DisplayControllers
            display={display}
            handeDisplay={this.handleDisplay}
          />
          <DisplayModes
            cards={cards}
            handleDelete={this.handleDelete}
            changeLikeStatus={this.changeLikeStatus}
            display={display}
          />
          {/* depricated */}
          {/* <Cards
            cards={cards}
            handleDelete={this.handleDelete}
            changeLikeStatus={this.changeLikeStatus}
          /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
