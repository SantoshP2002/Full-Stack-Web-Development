// write a factory function iPhone1 to create iPhone objects in bulk quantiy
// iPhone1 takes in ASIN, color, display, camera
// the object it creates has the following
// properties: ASIN, color, display, camera
// methods:
// dial - console logs "tring.. tring..."
// sendMessage - console logs "Sending message..."
// cameraClick - "Camera clicked"








// Factory Function 

function iPhoneGen1(ASIN, color, display, camera) {
    let obj = {}
  
    obj.ASIN = ASIN
    obj.color = color
    obj.display = display
    obj.camera = camera
  
    obj.dial = function () {
      console.log("tring.. tring...")
    }
  
    obj.sendMessage = function () {
      console.log("Sending message...")
    }
  
    obj.cameraClick = function () {
      console.log("Camera clicked")
    }
  
    return obj
  }
  
  let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP")
  iphone1.dial() // "tring.. tring..."
  iphone1.sendMessage() // "Sending message..."
  iphone1.cameraClick() // "Camera clicked"
  