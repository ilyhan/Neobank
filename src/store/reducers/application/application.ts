import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IApplicationInitial } from "@/store/reducers/application/interface";
import { IOffer } from "@/common/interfaces/form";
import { EApplicationStatus, EApplicationStep } from "@/common/enums/application";

const getApplicationData = (): IApplicationInitial => {
    const storedData = localStorage.getItem('application');
    if (storedData) {
        try {
            return JSON.parse(storedData);
        } catch (error) {
            return {
                applicationId: null,
                offers: null,
                step: EApplicationStep.PRESCORING,
            };
        }
    }
    return {
        applicationId: null,
        offers: null,
        step: EApplicationStep.PRESCORING,
    };
};

const initialState: IApplicationInitial = getApplicationData();

const applicationSlice = createSlice({
    name: 'applicationSlice',
    initialState,
    reducers: {
        setApplicationData(state, action: PayloadAction<IOffer[]>) {
            state.applicationId = action.payload[0].applicationId;
            state.offers = action.payload;
            state.step = EApplicationStatus.PREAPPROVAL;

            localStorage.setItem('application', JSON.stringify(state));
        },

        setStepScoring(state) {
            state.step = EApplicationStatus.APPROVED;
            localStorage.setItem('application', JSON.stringify(state));
        },

        setNextStep(state, action: PayloadAction<EApplicationStep | EApplicationStatus>) {
            state.step = action.payload;
            localStorage.setItem('application', JSON.stringify(state));
        },

        resetApplication(state) {
            state.applicationId = null;
            state.offers = null;
            state.step = EApplicationStep.PRESCORING;

            localStorage.removeItem('application');
        }
    }
});

export const applicationReducer = applicationSlice.reducer;
export const applicationActions = applicationSlice.actions;