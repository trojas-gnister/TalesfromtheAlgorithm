import { loadStripe } from '@stripe/stripe-js';
import { Elements, } from "@stripe/react-stripe-js";

//activate stripe by adding const with publishable api key
const stripe = loadStripe(pk_test_51MiQbWLUzojKOsKTrMqGD8DGNze2xxRWxakxEw5tM9SZRsOJlFJUbCxjEeiiyuP9ICHLn6A179d2ZrakrHJti1rg009ANLkVir);

//wrap with elements component
<Container maxWidth="md" className={classes.container}>
     <Paper elevation={5}>
		 <Elements stripe={stripe}>
               <Stepper />
		 </Elements>
     </Paper>
</Container>