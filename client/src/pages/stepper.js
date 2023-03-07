const Stepper = require('@material-ui/core').Stepper;
const Step = require('@material-ui/core').Step;
const StepLabel = require('@material-ui/core').StepLabel;
const Button = require('@material-ui/core').Button;
const materialCoreBox = require('@material-ui/core').Box;
const Grid = require('@material-ui/core').Grid;
const CircularProgress = require('@material-ui/core').CircularProgress;
const materialUi = require('@material-ui/core');
const React = require('react');
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
const Typography = require('@mui/material/Typography');
const materialBox = require('@mui/material/Box');

 const [loading, setLoading] = useState(false);

 <Button variant="contained"
   color="primary"
   className={classes.button}
   type="submit"
   disabled={loading}
 >
 {
   loading
   ?
   <CircularProgress size={24} />
   :
   activeStep === 2 ? 'Pay' : 'Next'
 }
 </Button>



function CircularProgressWithLabel(
  props: CircularProgressProps && { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}