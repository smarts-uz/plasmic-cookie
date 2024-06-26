// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jmHNNnoWA4E72wFFsdNVMq
// Component: 65-899b64QTN
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Logout from "../../Logout"; // plasmic-import: 0uc7sNT1dPI0/component
import "@plasmicapp/react-web/lib/plasmic.css";
import sty from "./PlasmicLogoutbtn.module.css"; // plasmic-import: 65-899b64QTN/css

createPlasmicElementProxy;

export const PlasmicLogoutbtn__VariantProps = new Array();

export const PlasmicLogoutbtn__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLogoutbtn__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  return (
    <Logout
      data-plasmic-name={"lgbtn"}
      data-plasmic-override={overrides.lgbtn}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.lgbtn)}
    >
      {"LogOut"}
    </Logout>
  );
}

const PlasmicDescendants = {
  lgbtn: ["lgbtn"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLogoutbtn__ArgProps,
          internalVariantPropNames: PlasmicLogoutbtn__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLogoutbtn__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "lgbtn") {
    func.displayName = "PlasmicLogoutbtn";
  } else {
    func.displayName = `PlasmicLogoutbtn.${nodeName}`;
  }
  return func;
}

export const PlasmicLogoutbtn = Object.assign(
  // Top-level PlasmicLogoutbtn renders the root element
  makeNodeComponent("lgbtn"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicLogoutbtn
    internalVariantProps: PlasmicLogoutbtn__VariantProps,
    internalArgProps: PlasmicLogoutbtn__ArgProps
  }
);

export default PlasmicLogoutbtn;
/* prettier-ignore-end */
