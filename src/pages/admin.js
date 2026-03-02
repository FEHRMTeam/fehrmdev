import React, { useEffect } from "react";

const AdminPage = () => {
  useEffect(() => {
    // Only load and initialize CMS in the browser
    if (typeof window !== "undefined") {
      // Dynamic import to ensure CMS only loads on client-side
      import("decap-cms-app").then((CMS) => {
        // Initialize the CMS object
        CMS.default.init();

        // Import and register the uuid widget
        import("../../src/cms/uuid-widget.js").then(({ Widget: IdWidget }) => {
          CMS.default.registerWidget(IdWidget);
        });
      });
    }
  }, []);

  // The CMS will automatically render when this component is mounted
  return <div id="nc-root"></div>; 
};

export default AdminPage;