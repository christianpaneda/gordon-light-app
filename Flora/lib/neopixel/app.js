var particle = new Particle();
var token;
var deviceId = "E1"; //change this to match your photon name - case sensitive!
//var token = "e1af4f6439213a8610db5df2750c557ac475703c";

particle.login({username: "slbrento@umich.edu", password: "PIxD_SI612"}).then(
    function(data) {
        token = data.body.access_token;
    },
    function(err) {
        console.log('Failed to login to Particle', err);
    }
)

/*****************************************************
 *   Cloud Functions
 * ***************************************************
 *  When you click the happy button, trigger a function
 *  that asks your robot to change its face.
 *  Use name: 'showImage' to load a .bmp file *
 *  Use name: 'face' to draw a pre-defined face or text screen *
 */

 /*  *******************************************************
     EXAMPLE1 of how to draw 2 faces, before and after speaking
     ******************************************************* */

$("#green").click( function() {
particle.callFunction({
    deviceId: deviceId,
    name: 'color', //specify we want to write text to TFT
    argument: "label-green", //text to write to the TFT
    auth: token
});
});

$("#blue").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'color', //specify we want to write text to TFT
        argument: "label-blue", //text to write to the TFT
        auth: token
    });
    });

$("#red").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'color', //specify we want to write text to TFT
        argument: "label-red", //text to write to the TFT
        auth: token
    });
    });

$("#rainbow").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'color', //specify we want to write text to TFT
        argument: "label-rainbow", //text to write to the TFT
        auth: token
    });
    });
            
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //         
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //     
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //         
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //  
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //         
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //  
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //         
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //  
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //         
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //  
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //         
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //  
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW //  // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //         
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //      
// STOP AND DO NOT LOOK BELOW // // STOP AND DO NOT LOOK BELOW //  


$("#joke").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'face',  //specify that we want to draw a face
        argument: "misch", //which face we want to draw
        auth: token
    });

    speak("How do you catch a unique rabbit?"); //what should be spoken by app


//below is optional...after timeout of 3000 finish speaking
    setTimeout(function(){speak("Unique up on it.");
    	particle.callFunction({
        	deviceId: deviceId,
        	name: 'face',  //specify that we want to draw a face
        	argument: "happy", //which face we want to draw
        	auth: token
    	});
    }, 3000);
});


/*  *******************************************************
    EXAMPLE2 of how to write text to the screen while speaking
    ******************************************************* */

$("#Help").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'writeMessage', //specify we want to write text to TFT
        argument: "How can I help you?", //text to write to the TFT
        auth: token
    });
});


/*  *******************************************************************
    EXAMPLE3 of how to display an image from the micro sd card
    To get custom images you can convert them to BMP format - True Color 24
    at this website https://online-converting.com/image/convert2bmp/
    File names must be 8 characters or fewer and end in .bmp
    ********************************************************************  */
$("#Darth").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'showImage', //specify we want to draw a BMP imgae
        argument: "/popcorn.bmp", //the specific BMP image to show...saved on micro SD card
        auth: token
    });
    speak("Luke, I am your father.");
});

$("#Error").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'showImage', //specify we want to draw a BMP imgae
        argument: "/popcorn.bmp", //the specific BMP image to show...saved on micro SD card
        auth: token
    });
    speak("Sorry, I don't understand.");
});


/*************************************************************
   Code for Scenarios 
 ************************************************************* */

/* SCENARIO A */

$("#welcome").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'writeMessage', //specify we want to write text to TFT
        argument: "Welcome", //text to write to the TFT
        auth: token
    });
    speak("Welcome to Cineplex TV. How many tickets do you want?"); //what the app should speak
});

// $("#see-movie").click( function() {
//     particle.callFunction({
//         deviceId: deviceId,
//         name: 'showImage', //specify we want to draw a BMP imgae
//         argument: "/popcorn.bmp", //the specific BMP image to show...saved on micro SD card
//         auth: token
//     });
//     speak("You want to see a movie. How many tickets do you need?");
// });

$("#number-of-tickets").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'showImage', //specify we want to draw a BMP imgae
        argument: "/popcorn.bmp", //the specific BMP image to show...saved on micro SD card
        auth: token
    });
    speak("You want two tickets. Is that correct?");
});

/* SCENARIO B */

$("#available-showing").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'writeMessage', //specify we want to write text to TFT
        argument: "4:00PM, 9:00PM", //text to write to the TFT
        auth: token
    });
    speak("Cool! When do you want to watch it? There is a time at 4:00 pm and 9:00 pm"); //what the app should speak
});

$("#confirm-movie").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'showImage', //specify we want to draw a BMP imgae
        argument: "/popcorn.bmp", //the specific BMP image to show...saved on micro SD card
        auth: token
    });
    speak("No problem. Let me confirm your order.");
});


/* SCENARIO C */

$("#what-movie").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'showImage', //specify we want to draw a BMP imgae
        argument: "/popcorn.bmp", //the specific BMP image to show...saved on micro SD card
        auth: token
    });
    speak("Which movie would you like to watch? We have Indiana Jones, Shrek, and Star Wars");
});

$("#indiana-jones").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'showImage', //specify we want to draw a BMP imgae
        argument: "/popcorn.bmp", //the specific BMP image to show...saved on micro SD card
        auth: token
    });
    speak("You've selected Indiana Jones, is that correct?");
});

$("#sold-movie").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'showImage', //specify we want to draw a BMP imgae
        argument: "/popcorn.bmp", //the specific BMP image to show...saved on micro SD card
        auth: token
    });
    speak("That movie is sold out. Which movie would you like to watch? We have Indiana Jones, Shrek, and Star Wars");
});

/* SCENARIO D */

$("#confirm-final").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'showImage', //specify we want to draw a BMP imgae
        argument: "/popcorn.bmp", //the specific BMP image to show...saved on micro SD card
        auth: token
    });
    speak("You want two tickets for the 9:00 pm showing for the Indiana Jones movie. Is that correct?");
});

$("#select-payment").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'showImage', //specify we want to draw a BMP imgae
        argument: "/popcorn.bmp", //the specific BMP image to show...saved on micro SD card
        auth: token
    });
    speak("Would you like to use your credit card on file?");
});

$("#price").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'showImage', //specify we want to draw a BMP imgae
        argument: "/popcorn.bmp", //the specific BMP image to show...saved on micro SD card
        auth: token
    });
    speak("Great. Since you're testing out this new product. The price is 1 dollar. Is that okay?");
});

$("#processing").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'face',  //specify that we want to draw a face
        argument: "misch", //which face we want to draw
        auth: token
    });

    speak("Processing your order..."); //what should be spoken by app


//below is optional...after timeout of 3000 finish speaking
    setTimeout(function(){speak("You're all set! Enjoy your movie! Next time, you should watch the All Too Well short film written and directed by Taylor Swift");
    	particle.callFunction({
        	deviceId: deviceId,
        	name: 'face',  //specify that we want to draw a face
        	argument: "happy", //which face we want to draw
        	auth: token
    	});
    }, 3000);
});

$("#box-office").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'face',  //specify that we want to draw a face
        argument: "misch", //which face we want to draw
        auth: token
    });

    speak("Okay, to pay for your ticket, please see the box office."); //what should be spoken by app


//below is optional...after timeout of 3000 finish speaking
    setTimeout(function(){speak("Your tickets will be available at the box office. Bring your payment. Enjoy your movie! Next time, you should watch the All Too Well short film written and directed by Taylor Swift");
    	particle.callFunction({
        	deviceId: deviceId,
        	name: 'face',  //specify that we want to draw a face
        	argument: "happy", //which face we want to draw
        	auth: token
    	});
    }, 3000);
});

$("#one-second-please").click( function() {
    particle.callFunction({
        deviceId: deviceId,
        name: 'face',  //specify that we want to draw a face
        argument: "misch", //which face we want to draw
        auth: token
    });

    speak("Ah okay, one moment please... Poor connection...you must be driving in a dead zone..."); //what should be spoken by app


//below is optional...after timeout of 3000 finish speaking
    setTimeout(function(){speak("recalibrating...");
    	particle.callFunction({
        	deviceId: deviceId,
        	name: 'face',  //specify that we want to draw a face
        	argument: "happy", //which face we want to draw
        	auth: token
    	});
    }, 3000);
});








/*************************************************************
   LEAVE THIS CODE AS IS - Advanced Speech Synthesis
 ************************************************************* */

//speak button
$("#speak").click(function() {
    var text = $("#speech").val();
    speak(text);
});

//speak and write to screen button
$("#speakAndWrite").click(function() {
    var text = $("#speech").val();
    speak(text);
    particle.callFunction({
        deviceId: deviceId,
        name: 'writeMessage', //specify we want to write text to TFT
        argument: text, //text to write to the TFT
        auth: token
    });
});

function speak(text) {
    // Create an utterance to be spoken by the Web Speech API
    var msgConfig = new SpeechSynthesisUtterance();

    // Get all the possible voices
    var voices = window.speechSynthesis.getVoices();

    // Set the voice to be Victoria
    msgConfig.voice = voices.filter(function(voice) {return voice.name === "Victoria"})[0]; //Kyoko or Victoria

    // Reduce the pitch so the voice sounds more robotic. Values are between 0 and 2
    msgConfig.pitch = "1.0";

    // Speed up the voice so it sounds more robotic. Values can be between 0.1 and 10
    msgConfig.rate = "1.0";

    // Set the text we are going to say.
    msgConfig.text = text;

    // Ask Web Speech API to say our utterance, in the voice we configured.
    window.speechSynthesis.speak(msgConfig);
}
