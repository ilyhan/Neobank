import { EApplicationStatus, EApplicationStep } from "@/common/enums/application";
import { IOffer } from "@/common/interfaces/form";

export interface IApplicationInitial {
    applicationId: number | null;
    offers: IOffer[] | null;
    step: EApplicationStep | EApplicationStatus;
}