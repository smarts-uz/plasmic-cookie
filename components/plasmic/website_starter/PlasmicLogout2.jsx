// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jmHNNnoWA4E72wFFsdNVMq
// Component: jVguBkIHOahd
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: jmHNNnoWA4E72wFFsdNVMq/projectcss
import sty from "./PlasmicLogout2.module.css"; // plasmic-import: jVguBkIHOahd/css

createPlasmicElementProxy;

export const PlasmicLogout2__VariantProps = new Array();

export const PlasmicLogout2__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLogout2__RenderFunc(props) {
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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <AntdButton
        data-plasmic-name={"lgButton"}
        data-plasmic-override={overrides.lgButton}
        className={classNames("__wab_instance", sty.lgButton)}
        danger={true}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Sign Out"}
        </div>
      </AntdButton>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "lgButton", "text"],
  lgButton: ["lgButton", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLogout2__ArgProps,
          internalVariantPropNames: PlasmicLogout2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLogout2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogout2";
  } else {
    func.displayName = `PlasmicLogout2.${nodeName}`;
  }
  return func;
}

export const PlasmicLogout2 = Object.assign(
  // Top-level PlasmicLogout2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    lgButton: makeNodeComponent("lgButton"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicLogout2
    internalVariantProps: PlasmicLogout2__VariantProps,
    internalArgProps: PlasmicLogout2__ArgProps
  }
);

export default PlasmicLogout2;
/* prettier-ignore-end */
