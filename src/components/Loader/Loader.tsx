// Libs
import { Grid } from "react-loader-spinner";

const Loader = () => {
  return (
    <Grid
      height="80"
      width="80"
      color="#949494"
      ariaLabel="grid-loading"
      radius="12.5"
      visible={true}
      wrapperClass="m-auto absolute top-[50%] left-[calc(50%-40px)]"
    />
  )
}

export default Loader;