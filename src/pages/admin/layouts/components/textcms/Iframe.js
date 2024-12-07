// import React, { useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

// const IframeComponent = ({ children }) => {
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     const iframeDocument = iframeRef.current.contentDocument;
//     const iframeRoot = iframeDocument.body;

//     // Clear any existing content in the iframe and render React components
//     ReactDOM.createRoot(iframeRoot).render(
//       <React.StrictMode>{children}</React.StrictMode>
//     );
//   }, [children]);

//   return (
//     <iframe
//       ref={iframeRef}
//       style={{ width: "100%", height: "540px", border: "none" }}
//     />
//   );
// };

// export default IframeComponent;

// import React from "react";
// import Add from "./components/Add";
// import Edit from "./components/Edit";
// import IframeComponent from "./Iframe";

// function TextCms() {
//   return (
//     <div className="cust-scroll">
//       <h1>Iframe with React Components</h1>
//       <IframeComponent>
//         <Add />
//       </IframeComponent>
//       <IframeComponent>
//         <Edit />
//       </IframeComponent>
//     </div>
//   );
// }

// export default TextCms;
