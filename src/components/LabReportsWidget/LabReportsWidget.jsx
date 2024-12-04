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
                
                

                if (window.MocdocLab) {
                    window.MocdocLab('#labreports').initWidget();
                    
        
                }
            };
        }

    }, []);

    return <div id="labreports" className='d-none'></div>;
};

export default LabReportsWidget;