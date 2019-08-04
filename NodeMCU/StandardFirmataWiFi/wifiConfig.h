/*==============================================================================
 * WIFI CONFIGURATION
 *
 * You must configure your particular hardware. Follow the steps below.
 *
 * By default, StandardFirmataWiFi is configured as a TCP server, to configure
 * as a TCP client, see STEP 2.
 *============================================================================*/

// STEP 1 [REQUIRED]
// Uncomment / comment the appropriate set of includes for your hardware (OPTION A, B or C)
// Arduino MKR1000 or ESP8266 are enabled by default if compiling for either of those boards.


/*
 * OPTION C: Configure for ESP8266
 *
 * This will configure StandardFirmataWiFi to use the ESP8266WiFi library for boards
 * with an ESP8266 chip. It is compatible with 802.11 B/G/N networks.
 *
 * The appropriate libraries are included automatically when compiling for the ESP8266 so
 * continue on to STEP 2.
 *
 * IMPORTANT: You must have the esp8266 board support installed. To easily install this board see
 * the instructions here: https://github.com/esp8266/Arduino#installing-with-boards-manager.
 */
//do not modify the following 14 lines
#ifdef ESP8266
// automatically include if compiling for ESP8266
#define ESP8266_WIFI
#endif
#ifdef ESP8266_WIFI
#include <ESP8266WiFi.h>
#include "utility/WiFiClientStream.h"
#include "utility/WiFiServerStream.h"
  #ifdef WIFI_LIB_INCLUDED
  #define MULTIPLE_WIFI_LIB_INCLUDES
  #else
  #define WIFI_LIB_INCLUDED
  #endif
#endif


// STEP 2 [OPTIONAL for all boards and shields]
// If you want to setup you board as a TCP client, uncomment the following define and replace
// the IP address with the IP address of your server.
//#define SERVER_IP 10, 0, 0, 15


// STEP 3 [REQUIRED for all boards and shields]
// replace this with your wireless network SSID
char ssid[] = "bivid_307C";


// STEP 4 [OPTIONAL for all boards and shields]
// If you want to use a static IP (v4) address, uncomment the line below. You can also change the IP.
// If the first line is commented out, the WiFi shield will attempt to get an IP from the DHCP server.
// If you are using a static IP with the ESP8266 then you must also uncomment the SUBNET and GATEWAY.
//#define STATIC_IP_ADDRESS  192,168,1,113
//#define SUBNET_MASK        255,255,255,0 // REQUIRED for ESP8266_WIFI, optional for others
//#define GATEWAY_IP_ADDRESS 0,0,0,0       // REQUIRED for ESP8266_WIFI, optional for others


// STEP 5 [REQUIRED for all boards and shields]
// define your port number here, you will need this to open a TCP connection to your Arduino
#define SERVER_PORT 4040


// STEP 6 [REQUIRED for all boards and shields]
// determine your network security type (OPTION A, B, or C). Option A is the most common, and the
// default.

/*
 * OPTION A: WPA / WPA2
 *
 * WPA is the most common network security type. A passphrase is required to connect to this type.
 *
 * To enable, leave #define WIFI_WPA_SECURITY uncommented below, set your wpa_passphrase value
 * appropriately, and do not uncomment the #define values under options B and C
 */
#define WIFI_WPA_SECURITY

#ifdef WIFI_WPA_SECURITY
char wpa_passphrase[] = "71AF092F875E";
#endif  //WIFI_WPA_SECURITY


/*==============================================================================
 * CONFIGURATION ERROR CHECK (don't change anything here)
 *============================================================================*/

#ifdef MULTIPLE_WIFI_LIB_INCLUDES
#error "you may not define more than one wifi device type in wifiConfig.h."
#endif

#ifndef WIFI_LIB_INCLUDED
#error "you must define a wifi device type in wifiConfig.h."
#endif

#if ((defined(WIFI_NO_SECURITY) && (defined(WIFI_WEP_SECURITY) || defined(WIFI_WPA_SECURITY))) || (defined(WIFI_WEP_SECURITY) && defined(WIFI_WPA_SECURITY)))
#error "you may not define more than one security type at the same time in wifiConfig.h."
#endif  //WIFI_* security define check

#if !(defined(WIFI_NO_SECURITY) || defined(WIFI_WEP_SECURITY) || defined(WIFI_WPA_SECURITY))
#error "you must define a wifi security type in wifiConfig.h."
#endif  //WIFI_* security define check

#if (defined(ESP8266_WIFI) && !(defined(WIFI_NO_SECURITY) || (defined(WIFI_WPA_SECURITY))))
#error "you must choose between WIFI_NO_SECURITY and WIFI_WPA_SECURITY"
#endif

/*==============================================================================
 * WIFI STREAM (don't change anything here)
 *============================================================================*/

#ifdef SERVER_IP
  WiFiClientStream stream(IPAddress(SERVER_IP), SERVER_PORT);
#else
  WiFiServerStream stream(SERVER_PORT);
#endif

/*==============================================================================
 * PIN IGNORE MACROS (don't change anything here)
 *============================================================================*/

#if defined(WIFI_101) && !defined(ARDUINO_SAMD_MKR1000)
// ignore SPI pins, pin 5 (reset WiFi101 shield), pin 7 (WiFi handshake) and pin 10 (WiFi SS)
// also don't ignore SS pin if it's not pin 10. Not needed for Arduino MKR1000.
#define IS_IGNORE_PIN(p)  ((p) == 10 || (IS_PIN_SPI(p) && (p) != SS) || (p) == 5 || (p) == 7)

#elif defined(ARDUINO_WIFI_SHIELD) && defined(__AVR_ATmega32U4__)
// ignore SPI pins, pin 4 (SS for SD-Card on WiFi-shield), pin 7 (WiFi handshake) and pin 10 (WiFi SS)
// On Leonardo, pin 24 maps to D4 and pin 28 maps to D10
#define IS_IGNORE_PIN(p)  ((IS_PIN_SPI(p) || (p) == 4) || (p) == 7 || (p) == 10 || (p) == 24 || (p) == 28)

#elif defined(ARDUINO_WIFI_SHIELD)
// ignore SPI pins, pin 4 (SS for SD-Card on WiFi-shield), pin 7 (WiFi handshake) and pin 10 (WiFi SS)
#define IS_IGNORE_PIN(p)  ((IS_PIN_SPI(p) || (p) == 4) || (p) == 7 || (p) == 10)

#elif defined(ESP8266_WIFI) && defined(SERIAL_DEBUG)
#define IS_IGNORE_PIN(p)  ((p) == 1)

#endif
