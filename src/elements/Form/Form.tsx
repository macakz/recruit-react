import React from "react";
import '../../App.css';
import { useForm, SubmitHandler } from "react-hook-form";
import type { FormProps as Props, InputProps } from './types'


export const Form = ({ }: Props): JSX.Element => {
    const { register, handleSubmit, formState: { errors } } = useForm<InputProps>();
    const onSubmit: SubmitHandler<InputProps> = data => console.log(data);

    const normalizeCardNumber = (value: any) => {
        return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>Credit Card Number</div>
            <input
                inputMode="numeric"
                placeholder="0000 0000 0000 0000"
                {...register("ccNumber", { required: true, minLength: 19, maxLength: 19 })}
                onChange={(event) => {
                    const { value } = event.target
                    event.target.value = normalizeCardNumber(value)
                }}
            />
            <div className="redText">
                {errors.ccNumber?.type === "required" && <span>This field is required</span>}
                {errors.ccNumber?.type === "minLength" && <span>Must be a valid credit card number</span>}
                {errors.ccNumber?.type === "maxLength" && <span>Must be a valid credit card number</span>}

            </div>
            <div>CVC</div>
            <input
                inputMode="numeric"
                placeholder="000"
                maxLength={3}
                {...register("cvc", { required: true, minLength: 3 })}
            />
            <div className="redText">
            {errors.cvc?.type === "required" && <span>This field is required</span>}
            {errors.cvc?.type === "minLength" && <span>Must be a valid CVC number</span>}
            </div>

            <div>Expiry</div>
            <input
                inputMode="numeric"
                placeholder="00/00"
                maxLength={4}
                {...register("expiry", { required: true, minLength: 4 })}
            />
            <div className="redText">
            {errors.expiry?.type === "required" && <span>This field is required</span>}
            {errors.expiry?.type === "maxLength" && <span>This field is required</span>}
            </div>
            <br />
            <input type="submit" />
        </form>
    )
}