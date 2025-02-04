import { EApplicationStatus, EApplicationStep } from "@/common/enums/application";
import { IOffer } from "@/common/interfaces/form";

export interface IApplicationInitial {
    statementId: number | null | string;
    offers: IOffer[] | null;
    step: EApplicationStep | EApplicationStatus;
}