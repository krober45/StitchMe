import React, { useEffect } from "react";
 
export default function CloudinaryUploadWidget (props){
 
    useEffect(() =>{
 
        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dh0g8qizo",
                uploadPreset: "project-pic-cloud",
                multiple: false,
                api_key: process.env.REACT_APP_API_KEY,
                api_secret: process.env.REACT_APP_API_SECRET
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info);
                        props.setImageData(result.info.secure_url)
                        props.imageFormSubmit(result.info.secure_url)
                }
            }
        );
        document.getElementById("upload_widget").addEventListener(
            "click",
            function () {
                myWidget.open();
            },
            false
        );
       
        }, []);
 
        return (
            <div>
                <button id="upload_widget" className="cloudinary-button">
                    Upload
                </button>
            </div>
        );
    }
 
 
