import Button from "@/common/ui/button/Button";
import Input from "@/common/ui/input/Input"
import "@/common/components/form/scoring/style.scss";
import Select from "@/common/ui/select/Select";
import { useForm } from "react-hook-form";
import Loader from "@/common/components/loader/Loader";
import { IScoring } from "@/common/interfaces/form";
import {
    dependentsOptions,
    employmentStatusOptions,
    gendreOptions,
    maritalStatusOptions,
    positionOptions
} from "@/common/arrays/scoringLists";
import {
    datePattern,
    employerINN,
    passportNumberPattern
} from "@/common/helper/validationPatterns";
import { validateDate } from "@/common/helper/validateDate";
import { useParams } from "react-router-dom";
import { usePostScoring } from "@/api/hookApi";
import { validateScoring } from "@/common/helper/validateScoring";
import { useEffect } from "react";
import { useActions } from "@/store/actions";

const Scoring = () => {
    const {
        register,
        formState: { errors, dirtyFields, isSubmitted },
        handleSubmit,
        reset,
    } = useForm<IScoring>();
    const { setSentScroring } = useActions();
    const id = useParams().applicationId;
    const {
        mutate,
        isError,
        isLoading,
        isSuccess
    } = usePostScoring(Number(id));


    const submitForm = (data: IScoring) => {
        mutate(validateScoring(data));
        setSentScroring();
    };

    useEffect(() => {
        if (isSuccess) {
            reset();
        }
    }, [isSuccess]);

    return (
        <form className="scoring" onSubmit={handleSubmit(submitForm)}>
            <div className="scoring__header">
                <h2 className="scoring__title">Contact Information</h2>
                <p className="scoring__step">Step 2 of 5</p>
            </div>

            <div className="scoring__inputs-wrapper">
                <Select
                    {...register("gender", {
                        required: { value: true, message: "Select one of the options" }
                    })}
                    error={errors.gender}
                    label="What's your gender"
                    name="gender"
                    containerClass="scoring__input"
                    options={gendreOptions}
                    withEmptyPlacholder={true}
                />

                <Select
                    {...register("maritalStatus", {
                        required: { value: true, message: "Select one of the options" }
                    })}
                    error={errors.maritalStatus}
                    label="Your marital status"
                    name="maritalStatus"
                    containerClass="scoring__input"
                    options={maritalStatusOptions}
                    withEmptyPlacholder={true}
                />

                <Select
                    {...register("dependentAmount", {
                        required: { value: true, message: "Select one of the options" }
                    })}
                    error={errors.dependentAmount}
                    label="Your number of dependents"
                    name="dependentAmount"
                    containerClass="scoring__input"
                    options={dependentsOptions}
                    withEmptyPlacholder={true}
                />

                <Input
                    {...register("passportIssueDate", {
                        required: { value: true, message: "Incorrect date of passport issue date" },
                        validate: value => validateDate(value),
                        pattern: {
                            value: datePattern,
                            message: "Expected DD.MM.YYYY"
                        }
                    })}
                    error={errors.passportIssueDate}
                    dirty={isSubmitted && dirtyFields.passportIssueDate}
                    label="Date of issue of the passport"
                    placeholder="Select Date and Time"
                    name="passportIssueDate"
                    containerClass="scoring__input"
                />

                <Input
                    {...register("passportIssueBranch", {
                        required: { value: true, message: "The series must be 6 digits" },
                        pattern: {
                            value: passportNumberPattern,
                            message: "The series must be 6 digits"
                        }
                    })}
                    error={errors.passportIssueBranch}
                    dirty={isSubmitted && dirtyFields.passportIssueBranch}
                    type="number"
                    label="Division code"
                    placeholder="000000"
                    name="passportIssueBranch"
                    containerClass="scoring__input"
                />
            </div>

            <h3 className="scoring__subtitle">Employment</h3>
            <div className="scoring__inputs-wrapper">

                <Select
                    {...register("employment.employmentStatus", {
                        required: { value: true, message: "Select one of the options" }
                    })}
                    error={errors.employment?.employmentStatus}
                    label="Your employment status"
                    name="employment.employmentStatus"
                    containerClass="scoring__input"
                    options={employmentStatusOptions}
                    withEmptyPlacholder={true}
                />

                <Input
                    {...register("employment.employerINN", {
                        required: { value: true, message: "Department code must be 12 digits" },
                        pattern: {
                            value: employerINN,
                            message: "Department code must be 12 digits"
                        }
                    })}
                    error={errors.employment?.employerINN}
                    dirty={isSubmitted && dirtyFields.employment?.employerINN}
                    type="number"
                    label="Your employer INN"
                    placeholder="000000000000"
                    name="employment.employerINN"
                    containerClass="scoring__input"
                />

                <Input
                    {...register("employment.salary", {
                        required: { value: true, message: "Enter your salary" },
                    })}
                    error={errors.employment?.salary}
                    dirty={isSubmitted && dirtyFields.employment?.salary}
                    type="number"
                    label="Your salary"
                    placeholder="For example 100 000"
                    name="employment.salary"
                    containerClass="scoring__input"
                />

                <Select
                    {...register("employment.position", {
                        required: { value: true, message: "Select one of the options" }
                    })}
                    error={errors.employment?.position}
                    label="Your position"
                    name="employment.position"
                    containerClass="scoring__input"
                    options={positionOptions}
                    withEmptyPlacholder={true}
                />

                <Input
                    {...register("employment.workExperienceTotal", {
                        onChange(event) {
                            event.target.value = event.target.value.slice(0, 2)
                        },
                        required: { value: true, message: "Enter your work experience total" },
                    })}
                    error={errors.employment?.workExperienceTotal}
                    dirty={isSubmitted && dirtyFields.employment?.workExperienceTotal}
                    type="number"
                    label="Your work experience total"
                    placeholder="For example 10"
                    name="employment.workExperienceTotal"
                    containerClass="scoring__input"
                />

                <Input
                    {...register("employment.workExperienceCurrent", {
                        onChange(event) {
                            event.target.value = event.target.value.slice(0, 2)
                        },
                        required: { value: true, message: "Enter your work experience current" },
                    })}
                    error={errors.employment?.workExperienceCurrent}
                    dirty={isSubmitted && dirtyFields.employment?.workExperienceCurrent}
                    type="number"
                    label="Your work experience current"
                    placeholder="For example 2"
                    name="employment.workExperienceCurrent"
                    containerClass="scoring__input"
                />
            </div>

            {isError && <p className="scoring__error">Sorry, an error has occurred</p>}

            <Button type="submit" classes="scoring__button" disabled={isLoading}>
                {isLoading
                    ? <Loader style={{ width: "20px" }} />
                    : "Continue"
                }
            </Button>
        </form>
    )
};

export default Scoring;