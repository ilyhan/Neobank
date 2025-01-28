import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { applicationActions } from "@/store/reducers/application/application";

const actions = {
    ...applicationActions
};

export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
