// for test changed body css
document.body.style.backgroundColor = '#333';
document.body.style.color = '#fff';

//creating a new div and h1 inside it.
const newdiv = document.createElement('div');
newdiv.className = 'container';
const h1Element = document.createElement('h1');
h1Element.textContent = 'Update Profile Picture';
newdiv.appendChild(h1Element);

//creating a input file inside div
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'image/*';
fileInput.name = 'Choose file';
newdiv.appendChild(fileInput);

//creating h3 element inside div
const h3Element = document.createElement('h3');
h3Element.textContent = 'Your profile picture here....';
newdiv.appendChild(h3Element);
h3Element.style.marginTop = '60px';

//creating preview window inside div
const Preview = document.createElement('div')
newdiv.appendChild(Preview);
Preview.style.marginTop = '20px';
document.body.appendChild(newdiv);

fileInput.addEventListener('change', function handleFileChange(event) {
    const file = event.target.files[0];
    const imgElement = document.createElement('img')

    //create URL for img
    const url = URL.createObjectURL(file);

    //set the src of the img element to the url
    imgElement.src = url;

    //display the image element.
    Preview.appendChild(imgElement);

     // Remove the event listener after the first time the event is triggered.
    fileInput.removeEventListener('change', handleFileChange);

});