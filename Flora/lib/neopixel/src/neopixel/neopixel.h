#include "../neopixel.h"

#define PIXEL_PIN D0
#define PIXEL_COUNT 12
#define PIXEL_TYPE WS2818

// same as Adafruit NeoPixel_ring(PIXEL_COUNT, PIXEL_PIN, PIXEL_TYPE);
Adafruit_NeoPixel ring = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, PIXEL_TYPE); 

void void setup()
{
    ring.begin();

    for(int i=0; i< ring.numPixels(); i++){
        ring.setPixelColor(i, 255, 0, 255);
    }

    ring.show(); 
}

void loop(){
    
}
 