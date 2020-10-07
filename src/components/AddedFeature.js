import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../store/actions/actions";

export const AddedFeature = (props) => {
  return (
    <li>
      <button
        className="button"
        onClick={() => props.removeFeature(props.feature)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export const mapStateToProps = () => {};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
