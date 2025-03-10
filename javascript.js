function filepath(folder){
    
}


const complexFolderStructure = {
    src: {
      components: {
        Button: {
          "index.js": "file",
          "style.css": "file",
          tests: {
            "button.test.js": "file"
          }
        },
        Header: {
          "header.js": "file",
          "header.css": "file",
          assets: {
            images: {
              "logo.png": "file",
              "banner.jpg": "file"
            }
          }
        }
      },
      utils: {
        "helpers.js": "file",
        "constants.js": "file",
        deepUtils: {
          moreUtils: {
            "deepHelper.js": "file"
          }
        }
      },
      emptyFolder: {} // This is an empty folder and will be skipped
    },
    public: {
      "index.html": "file",
      assets: {
        images: {
          "favicon.ico": "file",
          backgrounds: {
            "background1.png": "file",
            "background2.png": "file"
          }
        }
      }
    }
  };