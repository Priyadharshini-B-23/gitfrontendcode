

import React, { useState } from "react";
import axios from 'axios';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const PdfUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate=useNavigate()
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handleUpload = async () => {
        if (!selectedFile) {
            console.log("Please select a PDF file");
            return;
        }
        try {
            const formData = new FormData();
            formData.append('file', selectedFile);

            const response = await axios.post('https://localhost:44354/api/PdfDocument?id=' + 2,
                formData, {
                headers: {
                    'Content-Type': 'multipart/form',
                },
            });
              alert("File Uploaded Successfully")
              navigate("/SDashboard")
            console.log("File uploaded successfully:", response.data);
        }
        catch (error) {
            console.log('Error Uploadeing file', error);
        }
    };

    return (

        <div>
            <input type="file" accept=".pdf" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload PDF</button>
        </div>
    )
};
export default PdfUploader;




















