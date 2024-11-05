# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#07305b footer-bg




<!-- appointment  const imgElements = document.getElementsByClassName("post-img");
        console.log("Image Elements:", imgElements);

        if (imgElements.length > 0) {
          // Check if there are any elements
          const imgElement = imgElements[0]; // Access the first element
          imgElement.src = "/assets/homepage-slider-images/appointment-btn.png"; // Ensure the path is correct
          imgElement.alt = "New Image Description"; // Optionally update the alt text
        } else {
          console.log("No image elements found.");
} -->



<!-- script.onload = () => {
                
               /*  const imgElement = document.getElementById('viewreports');
                console.log("imageelement,",imgElement);
                if (imgElement) {
                  imgElement.src="https://cdn.textstudio.com/output/sample/normal/0/3/6/4/appointment-logo-182-14630.png";
                
                } */

                if (window.MocdocLab) {
                    window.MocdocLab('#labreports').initWidget();
                    
        
                }
            };
 -->


<!-- 
import React, { useEffect } from "react";
import './doctoreidget.css';

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
                // Change this line to use getElementsByClassName
                const imgElements = document.getElementsByClassName('post-img');
                console.log("Image Elements:", imgElements);

                if (imgElements.length > 0) {
                    const imgElement = imgElements[0]; // Access the first element
                    imgElement.src = "/assets/homepage-slider-images/appointment-btn.png"; // Ensure the path is correct
                    imgElement.alt = 'New Image Description'; // Optionally update the alt text
                } else {
                    console.log("No image elements found.");
                }

                if (window.Mocdoc) {
                    window.Mocdoc("#mocdoc-drs").initWidget();
                }
            };
        }

    }, []);

    return <div id="mocdoc-drs"></div>;
};

export default DoctorsWidget;


 -->

import LabReportsWidget from "../../../src/components/LabReportsWidget/LabReportsWidget"; // Make sure to import the LabReportsWidget






//this is original code render parfectly 
<!-- 
import React, { useEffect } from 'react';
import './labreports.css';

const LabReportsWidget = () => {
    useEffect(() => {
        // Check if jQuery is already loaded
        if (window.jQuery) {
            loadLabWidget();
        } else {
            const jQueryScript = document.createElement('script');
            jQueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';
            document.body.appendChild(jQueryScript);

            jQueryScript.onload = loadLabWidget;

            return () => {
                document.body.removeChild(jQueryScript);
            };
        }

        function loadLabWidget() {
            const script = document.createElement('script');
            script.src = 'https://mocdoc.com/js/lab_widget_loader.js';
            script.type = 'text/javascript';
            script.id = 'mocdoclab';
            script.setAttribute('data-entity', 'prasad-hospitals'); 

            document.body.appendChild(script);

            script.onload = () => {
                
               /*  const imgElement = document.getElementById('viewreports');
                console.log("imageelement,",imgElement);
                if (imgElement) {
                  imgElement.src="https://cdn.textstudio.com/output/sample/normal/0/3/6/4/appointment-logo-182-14630.png";
                
                } */

                if (window.MocdocLab) {
                    window.MocdocLab('#labreports').initWidget();
                    
        
                }
            };
        }

    }, []);

    return <div id="labreports"></div>;
};

export default LabReportsWidget;
 -->