#include "neopixel.h"

#define PIXEL_PIN D2
#define PIXEL_COUNT 12
#define PIXEL_TYPE WS2812

// same as Adafruit NeoPixel_ring(PIXEL_COUNT, PIXEL_PIN, PIXEL_TYPE);
Adafruit_NeoPixel ring = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, PIXEL_TYPE); 

// OFF

void setup()
{
    ring.begin();

    for(int i=0; i< ring.numPixels(); i++){
        ring.setPixelColor(i, 255, 255, 255);
        ring.setBrightness(100);
    }

    ring.show(); 

    // Particle.function("green", green);
    // Particle.function("blue", blue);
    // Particle.function("red", red);
    // Particle.function("rainbow", rainbow);

    Particle.function("color", setColor);
}

void loop(){
    // no loop
}

int setColor(String color) {
  if(color == "label-green") {
    setGreen();
    } else if (color == "label-blue"){
    yellow();
}
    else if (color == "label-red"){
    red();
    }
    else if(color == "label-rainbow"){
    rainbow();
  } 

  return 0;
}

//   } else if (color == "label-red"){
//     red();

//   } else if(color == "label-rainbow"){
//     rainbow();
//   } 

void setGreen(){
    ring.begin();

    for(int i=0; i< ring.numPixels(); i++){
        ring.setPixelColor(i, 0, 255, 0);
        ring.setBrightness(100);
    }

    ring.show();
}

void yellow(){
        ring.begin();

    for(int i=0; i< ring.numPixels(); i++){
        ring.setPixelColor(i, 255, 50, 0);
        ring.setBrightness(100);
    }

    ring.show(); 
    
}

void red(){
        ring.begin();

    for(int i=0; i< ring.numPixels(); i++){
        ring.setPixelColor(i, 255, 0, 0);
        ring.setBrightness(200);
    }

    ring.show(); 
    
}

void rainbow(){
    ring.begin();

    for(int i=0; i< ring.numPixels(); i++){
        ring.setPixelColor(i, 0, 0, 0);
        ring.setBrightness(0);
    }

    ring.show(); 

    ring.begin();

    for(int i=0; i< ring.numPixels(); i+=2){
        ring.setPixelColor(i, 0, 0, 255);
        ring.setBrightness(50);
    }

    ring.show(); 

}

// white 

// void rainbow(uint8_t wait) {
//   uint16_t i, j;

//   for(j=0; j<256; j++) {
//     for(i=0; i<ring.numPixels(); i++) {
//       ring.setPixelColor(i, Wheel((i*1+j) & 255));
//     }
//     ring.show();
//     delay(wait);
//   }

//   rainbow(2); //extra for rainbow
//   delay(5); //extra for rainbow

// }




// GREEN

// void setup()
// {
//     ring.begin();

//     for(int i=0; i< ring.numPixels(); i++){
//         ring.setPixelColor(i, 0, 255, 0);
//         ring.setBrightness(100);
//     }

//     ring.show(); 
// }

// void loop(){
// 
// }

// BLUE

// void setup()
// {
//     ring.begin();

//     for(int i=0; i< ring.numPixels(); i++){
//         ring.setPixelColor(i, 0, 0, 255);
//         ring.setBrightness(50);
//     }

//     ring.show(); 
// }

// void loop(){
    
// }

// RED

// void setup()
// {
//     ring.begin();

//     for(int i=0; i< ring.numPixels(); i++){
//         ring.setPixelColor(i, 255, 0, 0);
//         ring.setBrightness(200);
//     }

//     ring.show(); 
// }

// void loop(){

// }

// LISTENING STATE 

// set up just happens once 

// void setup() {
//   ring.begin();

//   for(int i=0; i < ring.numPixels(); i++) {
//     ring.setPixelColor(i, 255, 0, 255);
//   }
//   ring.show();
// }

// void loop() {
//   rainbow(2); //extra for rainbow
//   delay(5); //extra for rainbow

// }

// loop is for something to happen no matter what 

//extra for rainbow
// void rainbow(uint8_t wait) {
//   uint16_t i, j;

//   for(j=0; j<256; j++) {
//     for(i=0; i<ring.numPixels(); i++) {
//       ring.setPixelColor(i, Wheel((i*1+j) & 255));
//     }
//     ring.show();
//     delay(wait);
//   }

//   rainbow(2); //extra for rainbow
//   delay(5); //extra for rainbow

// }


// Input a value 0 to 255 to get a color value.
// The colours are a transition r - g - b - back to r.
// uint32_t Wheel(byte WheelPos) {
//   if(WheelPos < 85) {
//     return ring.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
//   }
//   else if(WheelPos < 170) {
//     WheelPos -= 85;
//     return ring.Color(255 - WheelPos * 3, 0, WheelPos * 3);
//   }
//   else {
//     WheelPos -= 170;
//     return ring.Color(0, WheelPos * 3, 255 - WheelPos * 3);
//   }
// }

