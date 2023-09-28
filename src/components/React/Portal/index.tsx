import { useEffect } from "react";
import type { ReactNode } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children, customRootId }: propsType) => {
  let portalRoot: Element | DocumentFragment;
  const rootId = customRootId || "portal-root";
  if (!document.getElementById(rootId)) {
    portalRoot = document.createElement("div"); //create portal-root
    portalRoot.setAttribute("id", rootId); //add id to portal-root
    document.body.appendChild(portalRoot); //add portal-root to body
  } else {
    portalRoot = document.getElementById(rootId) as HTMLElement; //if rootId exsit , get portal-root
  }
  useEffect(
    () => () => {
      portalRoot?.parentElement?.removeChild(portalRoot); //clean up
    },
    [portalRoot], //if portalRoot change , clean up
  );
  return ReactDOM.createPortal(children, portalRoot);
};
type propsType = {
  children: JSX.Element | ReactNode;
  customRootId?: string;
};
export default Portal;
