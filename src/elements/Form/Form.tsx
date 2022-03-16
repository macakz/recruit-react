import '../../App.css';
import { useForm, SubmitHandler } from "react-hook-form";
import type { FormProps as Props, InputProps } from './types'


export const Form = ({ }: Props): JSX.Element => {
    const normalizeCardNumber = (value: any) => {
        return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
    }
    const dateFormat = (value: any) => {
        return value.replace(/\//g, "").substring(0, 2) +
            (value.length > 3 ? '/' : '') +
            value.replace(/\//g, "").substring(2, 4);
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm<InputProps>();
    
    const onSubmit: SubmitHandler<InputProps> = data => {
        console.log(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div >Credit Card Number</div>
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
            <div className="label">CVC</div>
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

            <div className="label">Expiry</div>
            <input
                inputMode="numeric"
                placeholder="00/00"
                maxLength={4}
                {...register("expiry", { required: true, minLength: 5 })}
                onChange={(event) => {
                    const { value } = event.target
                    event.target.value = dateFormat(value)
                }}
            />
            <div className="redText">
                {errors.expiry?.type === "required" && <span>This field is required</span>}
                {errors.expiry?.type === "minLength" && <span>Must be a valid expiry date</span>}
            </div>
            <br />
            <input className="btn" type="submit" />
        </form>
    )
}