import React from "react";

import classes from "./Order.css";

const order = props => {
  return (
    <div class={classes.Order}>
      <p>Ingredients: Salad (1)</p>
      <p>
        Price:<strong>$ 5.45</strong> Price (1)
      </p>
    </div>
  );
};

export default order;
