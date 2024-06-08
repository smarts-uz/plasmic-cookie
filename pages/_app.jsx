import '@/styles/globals.css'
import {PlasmicRootProvider} from "@plasmicapp/react-web";
import Head from "next/head";
import {usePlasmicAuthData} from '../utils/usePlasmicAuth';

function PlasmicRootProviderWithUser(props) {
    const {isUserLoading, plasmicUser, plasmicUserToken} = usePlasmicAuthData();
    const {children} = props;
    console.log(children)
    return (
        <PlasmicRootProvider
            Head={Head}
            isUserLoading={isUserLoading}
            user={plasmicUser}
            userAuthToken={plasmicUserToken}
        >
            {props.children}
        </PlasmicRootProvider>
    );
}


export default function MyApp({Component, pageProps}) {
    if (pageProps.withoutUseAuth) {
        return (
            <PlasmicRootProvider Head={Head}>
                <Component {...pageProps} />
            </PlasmicRootProvider>
        );
    }
    return (
        <PlasmicRootProviderWithUser>
            <Component {...pageProps} />
        </PlasmicRootProviderWithUser>
    );


    // -----------------------------------
    //   return (
    //   <PlasmicRootProvider Head={Head}>
    //     <Component {...pageProps} />
    //   </PlasmicRootProvider>
    // );
}
