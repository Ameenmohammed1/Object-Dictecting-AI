let uploadButton = document.getElementById('uploadButton')

let chooseImage = document.getElementById('chooseImage')

uploadButton.onchange = () =>{
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    console.log(uploadButton.files[0]);
    if(uploadButton.files[0]){
        reader.onload = () =>{
          
            chooseImage.setAttribute("src",reader.result)
        }

        const classifier =  ml5.imageClassifier('MobileNet');
classifier.classify(document.getElementById("chooseImage"), gotResult);

// Function to run when results arrive
function gotResult(error, results) {
  const name = document.getElementById("result");
  const accu = document.getElementById('accu')
  if (error) {
    element.innerHTML = error;
  } else {
    let num = results[0].confidence * 100;
    name.innerHTML = `Name : ${results[0].label} `
    accu.innerHTML = `Confidence : ${num.toFixed(2)}%`
    //+ "<br>Confidence: " + num.toFixed(2) + "%";
  }
}
    }
   
}




//location.reload();

