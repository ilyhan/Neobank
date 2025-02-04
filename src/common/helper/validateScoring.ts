import { IScoring } from "@/common/interfaces/form"

export const validateScoring = (data: IScoring): IScoring => {
    data.employment.employerINN = data.employment.employerINN.toString();

    const datePassport = data.passportIssueDate.split('.');
    data.passportIssueDate = `${datePassport[2]}-${datePassport[1]}-${datePassport[0]}`;
    data.passportIssueBranch = data.passportIssueBranch.slice(0, 3) + '-' + data.passportIssueBranch.slice(3);
    data.account = "11223344556677889900";

    return data;
}