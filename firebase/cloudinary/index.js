
const uploadImg = async ()=>{
    const file = document.getElementById("image");
    const selectedImg = file.files[0];
    
    const cloudName = "duo0iqvpr"
    const presetName = "firebaseXcloudinary"


    const formData = new FormData()
    formData.append("file", selectedImg)
    formData.append("upload_preset", presetName)
    formData.append("cloud_name", cloudName)


    try {
       const response =  await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,{
            method:"POST",
            body:formData
        })


           const data = await response.json()
           console.log(">>>>>>>>>>>>> " , data);
//   document.getElementById("img").src = data.secure_url


    } catch (error) {
        console.log(error);
        
    }

}

document.querySelector("#uploadBtn").addEventListener("click", uploadImg)