import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const actions = {};

export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
