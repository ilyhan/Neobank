import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IApplicationInitial } from "@/store/reducers/application/interface";
import { IOffer } from "@/common/interfaces/form";
import { EApplicationStep } from "@/common/enums/application";

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
                isSentScoring: false,
            };
        }
    }
    return {
        applicationId: null,
        offers: null,
        step: EApplicationStep.PRESCORING,
        isSentScoring: false,
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
            state.step = EApplicationStep.OFFERS;

            localStorage.setItem('application', JSON.stringify(state));
        },

        setStepScoring(state) {
            state.step = EApplicationStep.SCORING;
            localStorage.setItem('application', JSON.stringify(state));
        },

        setSentScroring(state) {
            state.isSentScoring = true;
            localStorage.setItem('application', JSON.stringify(state));
        }
    }
});

export const applicationReducer = applicationSlice.reducer;
export const applicationActions = applicationSlice.actions;