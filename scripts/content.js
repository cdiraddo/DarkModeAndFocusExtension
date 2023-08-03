//Get URl
const site = window.location.hostname


//Custom CSS Func
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

//SEPERATE OUT TO DEFINE CSS ELEMENTS FOR LATER EDITING
//Fix Rulers: covering up text
if (site.includes("docs.google.com")) {
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

        .docs-horizontal-ruler {
          background-color: #202124 !important;
        }

        .companion-guest-app-switcher {
          background-color: #202124 !important;
        }

        .companion-collapser-button {
          background-color: #202124 !important;
        }

        .docs-grille-gm3 .docs-material #docs-header .docs-titlebar-buttons {
          background-color: #202124 !important;
        }

        .docs-ruler-background, .docs-ruler-face-inner, .docs-ruler-mask {
          background-color: #202124 !important;
        }


  
  
  
  
  
    `)
}



