import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import type { FormProps as Props, InputProps } from './types'


export const Form = ({ }: Props): JSX.Element => {
    const { register, handleSubmit, formState: { errors } } = useForm<InputProps>();
    const onSubmit: SubmitHandler<InputProps> = data => console.log(data);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>Credit Card Number</div>
            <input {...register("ccNumber", { required: true })} />
            {errors.ccNumber && <span>This field is required</span>}

            <div>CVC</div>
            <input {...register("cvc", { required: true })} />
            {errors.cvc && <span>This field is required</span>}

            <div>Expiry</div>
            <input {...register("expiry", { required: true })} />
            {errors.expiry && <span>This field is required</span>}
            <br />
            <input type="submit" />
        </form>
    )
}