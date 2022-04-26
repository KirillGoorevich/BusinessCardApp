import React from "react";
import NavRouteLink from "../../common/Navigation/NavRouteLink";
import { ROUTES } from "../../../model/routes";

const LeftNavigation = ({ user }) => {
  return (
    <ul className="navbar-nav">
      <NavRouteLink route={ROUTES.ABOUT} />
      {user && user.biz && <NavRouteLink route={ROUTES.MY_CARDS} />}
      {user && <NavRouteLink route={ROUTES.MY_FAV_CARDS} />}
      {user && user.biz && <NavRouteLink route={ROUTES.Create_CARD} />}
    </ul>
  );
};

export default LeftNavigation;
