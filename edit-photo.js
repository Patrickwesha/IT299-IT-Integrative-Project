let image = document.getElementById('editable-image');
let cropper;

window.addEventListener('load', () => {
  cropper = new Cropper(image, {
    aspectRatio: NaN, // Free aspect ratio
    viewMode: 1,
    background: false,
  });
});

document.querySelector('.submit-btn').addEventListener('click', () => {
  const croppedCanvas = cropper.getCroppedCanvas();
  const croppedImageURL = croppedCanvas.toDataURL('image/jpeg');

  // Optional: download the cropped image
  const link = document.createElement('a');
  link.download = 'edited-image.jpg';
  link.href = croppedImageURL;
  link.click();

  // You could also send it to a server here using fetch/AJAX
});