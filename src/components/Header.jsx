import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Logo from "./logo";
import { connect } from "react-redux";
import { mapStateToProps } from "./Cart";
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";

function Header(props) {
  const history = useHistory();
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px"
    }
  }))(Badge);
  let quantity = 0;

  props.state.forEach((element) => {
    quantity += element.quantity;
  });

  return (
    <div className="header">
      <div id="logo">
        <Logo></Logo>
        <h2 id="heading" className="left-margin">
          Happay
        </h2>
      </div>
      <div className="flex">
        <IconButton aria-label="cart">
          <StyledBadge
            onClick={() => history.push("/summery")}
            badgeContent={quantity}
            color="secondary"
          >
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <span className="left-margin pointer right-margin top-margin">
          <Avatar src="/broken-image.jpg" />
        </span>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Header);
