import { useEffect, useState } from "react";


export default function FileUpload() {
    const SEC_URL = "http://localhost:8080/files"
    const URL = "http://localhost:8080/fileUpload"


    const [imagesUrl, setImageUrl] = useState([])

    const handleFileUpload = async (event) => {
        event.preventDefault();
        console.log(event.target.image.files[0]);
        const data = new FormData()
        const files = event.target.image.files[0];
        data.append("image", files);


        const options = {
            method: "POST",
            body: data,
        }



        const FETCHED_DATA = await fetch(URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();
        console.log(FETCHED_JSON);

        setImageUrl(FETCHED_JSON.data)
        console.log(imagesUrl)


    }



    return (
        <div>
            <form method="post" encType="multipart/form-data" onSubmit={handleFileUpload}>
                <input type="file" name="image" />
                <button type="submit">Submit</button>
            </form>
            {imagesUrl.map((img, idx) => (
                <img src={img} key={idx} alt="img" />
            ))}
        </div>
    )
}