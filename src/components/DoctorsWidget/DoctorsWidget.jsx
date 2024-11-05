import React, { useEffect } from "react";
import "./doctoreidget.css";

const DoctorsWidget = () => {
  useEffect(() => {
    if (window.jQuery) {
      loadDoctorsWidget();
    } else {
      const jQueryScript = document.createElement("script");
      jQueryScript.src =
        "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js";
      document.body.appendChild(jQueryScript);

      jQueryScript.onload = loadDoctorsWidget;

      return () => {
        document.body.removeChild(jQueryScript);
      };
    }

    function loadDoctorsWidget() {
      const script = document.createElement("script");
      script.src = "https://mocdoc.com/js/widget_loader.js";
      script.type = "text/javascript";
      script.id = "mocdoc";
      script.setAttribute("data-entity", "prasad-hospitals");

      document.body.appendChild(script);

      script.onload = () => {
        if (window.Mocdoc) {
          window.Mocdoc("#mocdoc-drs").initWidget();
        }
      };
    }
  }, []);

  return <div id="mocdoc-drs"></div>;
};

export default DoctorsWidget;
