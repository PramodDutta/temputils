function FindProxyForURL(url, host) {

   if (shExpMatch(host,"*.techcrunch.com")) {
       return "PROXY 10.20.2.93:8888";   // techcrunch.com via remote Charles
   }
   if (shExpMatch(host,"*.browserstack.com")) {
       return "PROXY localhost:8888";   // browserstack.com via remote Charles
   }
   if (shExpMatch(host,"*.apple.com")) {
       return "PROXY 127.0.0.1:8888";    // apple.com via local Charles
   }
   if (shExpMatch(host,"*.giphy.com")) {
       return "PROXY 127.0.0.1:8118";   // giphy.com via local Privoxy
   }

   // Everything else directly!
   return "DIRECT";
}

