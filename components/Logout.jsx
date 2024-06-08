import * as React from "react";
import {PlasmicLogout} from "./plasmic/website_starter/PlasmicLogout";


function Logout_(props, ref) {

    return <PlasmicLogout root={{ref}} {...props}


    />;
}

const Logout = React.forwardRef(Logout_);

export default Object.assign(Logout, {__plumeType: "button"});
