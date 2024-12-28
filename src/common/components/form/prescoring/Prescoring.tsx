import Button from "@/common/ui/button/Button";
import Input from "@/common/ui/input/Input"
import "@/common/components/form/prescoring/style.scss";
import { useEffect } from "react";
import Select from "@/common/ui/select/Select";
import { useForm } from "react-hook-form";
import { IPrescoring } from "@/common/interfaces/form";
import { termOptions } from "@/common/arrays/termOptions";
import { validateAge } from "@/common/helper/validateAge";
import { usePostPrescoring } from "@/api/hookApi";
import Loader from "@/common/components/loader/Loader";
import PrescoringHeader from "@/common/components/form/prescoring/PrescoringHeader";
import {
    dateBirthPattern,
    emailPattern,
    passportNumberPattern,
    passportSeriesPattern,
} from "@/common/helper/validationPatterns";
import { validatePrescoring } from "@/common/helper/validatePrescoring";
import { validateEmpty } from "@/common/helper/validateEmpty";

const Prescoring = () => {
    const {
        register,
        formState: { errors, dirtyFields, isSubmitted },
        handleSubmit,
        reset,
    } = useForm<IPrescoring>();

    const {
        isLoading,
        isSuccess,
        mutate,
        isError
    } = usePostPrescoring();

    const submitForm = (data: IPrescoring) => {
        mutate(validatePrescoring(data));
    };

    useEffect(() => {
        if (isSuccess) {
            reset();
        }
    }, [isSuccess]);

    return (
        <form className="prescoring" onSubmit={handleSubmit(submitForm)}>
            <PrescoringHeader
                register={register}
                error={errors.amount}
                dirty={isSubmitted && dirtyFields.amount}
            />

            <h3 className="prescoring__subtitle">Contact Information</h3>
            <div className="prescoring__inputs-wrapper">
                <Input
                    {...register("lastName", {
                        validate: value => validateEmpty(value),
                        required: { value: true, message: "Enter your last name" },
                    })}
                    error={errors.lastName}
                    dirty={isSubmitted && dirtyFields.lastName}
                    label="Your last name"
                    placeholder="For Example Doe"
                    name="lastName"
                    containerClass="prescoring__input"
                />

                <Input
                    {...register("firstName", {
                        validate: value => validateEmpty(value),
                        required: { value: true, message: "Enter your first name" },
                    })}
                    error={errors.firstName}
                    dirty={isSubmitted && dirtyFields.firstName}
                    label="Your first name"
                    placeholder="For Example Jhon"
                    name="firstName"
                    containerClass="prescoring__input"
                />

                <Input
                    label="Your patronymic"
                    placeholder="For Example Victorovich"
                    name="patrontmic"
                    containerClass="prescoring__input"
                    isRequired={false}
                />

                <Select
                    {...register("term", {
                        required: true,
                    })}
                    label="Select term"
                    name="term"
                    containerClass="prescoring__input"
                    options={termOptions}
                />

                <Input
                    {...register("email", {
                        required: { value: true, message: "Enter your email" },
                        pattern: {
                            value: emailPattern,
                            message: "Incorrect email address"
                        }
                    })}
                    error={errors.email}
                    dirty={isSubmitted && dirtyFields.email}
                    label="Your email"
                    placeholder="test@gmail.com"
                    name="email"
                    containerClass="prescoring__input"
                />

                <Input
                    {...register("birthdate", {
                        required: { value: true, message: "Enter your birth date" },
                        validate: value => validateAge(value as string, 18),
                        pattern: {
                            value: dateBirthPattern,
                            message: "Expected DD.MM.YYYY"
                        }
                    })}
                    error={errors.birthdate}
                    dirty={isSubmitted && dirtyFields.birthdate}
                    label="Your date of birth"
                    placeholder="Select Date and Time"
                    name="birthdate"
                    containerClass="prescoring__input"
                />

                <Input
                    {...register("passportSeries", {
                        required: { value: true, message: "Enter your passport series" },
                        pattern: {
                            value: passportSeriesPattern,
                            message: "The series must be 4 digits"
                        }
                    })}
                    error={errors.passportSeries}
                    dirty={isSubmitted && dirtyFields.passportSeries}
                    type="number"
                    label="Your passport series"
                    name="passportSeries"
                    placeholder="0000"
                    containerClass="prescoring__input"
                />

                <Input
                    {...register("passportNumber", {
                        required: { value: true, message: "Enter your passport number" },
                        pattern: {
                            value: passportNumberPattern,
                            message: "The series must be 6 digits"
                        },
                    })}
                    error={errors.passportNumber}
                    dirty={isSubmitted && dirtyFields.passportNumber}
                    type="number"
                    label="Your passport number"
                    placeholder="000000"
                    name="passportNumber"
                    containerClass="prescoring__input"
                />
            </div>

            {isError && <p className="prescoring__error">Sorry, an error has occurred</p>}

            <Button type="submit" classes="prescoring__button" disabled={isLoading}>
                {isLoading
                    ? <Loader style={{ width: "20px" }} />
                    : "Continue"
                }
            </Button>
        </form>
    )
};

export default Prescoring;