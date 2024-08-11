import React from "react";

const OrderDetails = ({ params, searchParams }) => {
  // const id = params.id; -> 아래에서 destructuring
  const { id } = params;
  const { hello } = searchParams;

  return (
    <div>
      {id}
      <br />
      {hello}
    </div>
  );
};

export default OrderDetails;
