import React from "react";
import "../History/History.css";
import Carousal from "../../Carousal/Carousal";

const History = ({ data }) => {
  return (
    <>
      <div className="history-container">
        <div className="title-container">
          <td>
            <tr className="title-number">01.</tr>
          </td>
          <td className="title-context">
            <tr className="title-text">HISTORY</tr>
          </td>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante
          viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est.
          Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras
          scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis
          hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec
          congue.
        </div>
        <Carousal className="carousal-container" />
      </div>
    </>
  );
};

export default History;
