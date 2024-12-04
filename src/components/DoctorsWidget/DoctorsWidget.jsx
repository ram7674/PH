import {useLocation} from 'react-router-dom';
import React, { useEffect } from "react";
import "./doctoreidget.css";

const DoctorsWidget = () => {
 
  const location = useLocation();

  useEffect(() => {
    let node;

    if (window.jQuery) {
      loadDoctorsWidget();
    } else {
      const jQueryScript = document.createElement("script");
      jQueryScript.src =
        "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js";
      document.body.appendChild(jQueryScript);

      jQueryScript.onload = loadDoctorsWidget;


     
    }

    function loadDoctorsWidget() {

      const script = document.createElement("script");
      node = script;
      script.src = "https://mocdoc.com/js/widget_loader.js";
      script.type = "text/javascript";
      script.id = "mocdoc";
      script.setAttribute("data-entity", "prasad-hospitals");

      document.head.appendChild(script);

      script.onload = () => {
        if (window.Mocdoc) {
          window.Mocdoc("#mocdoc-drs").initWidget();
        }
      };
    }
    return () =>{
      if (!node)
        return;
      document.head.removeChild(node);
    }
  }, [location.pathname]);

  return <div id="mocdoc-drs" className="d-none" ></div>;
};

export default DoctorsWidget;
