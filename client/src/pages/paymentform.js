import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from "@stripe/react-stripe-js";
import StripeInput from "../components/StripeInput";

<TextField
     label="Credit Card Number"
     name="ccnumber"
     variant="outlined"
     required
     fullWidth
     InputLabelProps={{ shrink: true }}
     InputProps={{ inputComponent: StripeInput,
     inputProps: {
        component: CardNumberElement
     },
    }}
/>