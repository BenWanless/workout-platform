import { Suspense } from "react";

import Loader from "./Loader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Loadable = (Component: React.FC) => (props: any) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
