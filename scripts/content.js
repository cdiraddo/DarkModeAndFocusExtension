//Get URl
const site = window.location.hostname

// alert("Javascript injected into " + site)

//Custom CSS Func
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

//JS For Docs
if (site.includes("docs.google.com")) {
  alert("injecting css")
  // document.getElementById().style.property =
  Add_Custom_Style(`

    * {
      background_color: #0F79C6 !important;
    }

    .docs-grille-gm3.docs-gm .docs-material #docs-toolbar-wrapper {
      background-color: #202124;
    }
    .docs-grille-gm3 #docs-chrome:not(.docs-hub-chrome) {
      background: #202124;
    }

    .kix-appview-editor {
      background-color: #202124 !important;
    }

    .kix-canvas-tile-content {
      background: transparent !important;
    }





  `)



}

    // body,
    // .docs-gm #docs-editor,
    // .docs-gm #docs-editor-container,
    // .docs-gm:not(.docs-grille-gm3) .kix-appview-editor,
    // .apps-shortcutshelpcontentimpl-container,
    // .apps-shortcutshelppopup {
    //   background: #202124 !important;
    // }