# YARA-Team1
Application : BookStore - 1

Team Members - 
1. Surya
2. Ramya
3. Deepika
4. Upasana

============INSTRUCTIONS============
1. If you yarn add anything, make sure to copy from package.json from the repo first. Then after adding your dependency, please update the package.json immediately.

2.  FOR FONTS -
    - Download fonts from google fonts 
    - Create a folder assets/fonts in your BookStoreApp and paste the .ttf files in it
    - Create a file named 'react-native.config.js' . Make sure it is in the main directory and not inside any folder
    - Paste the following line of code in react-native.config.js
          ->         module.exports = { assets: ['./assets/fonts'] }
    - In terminal (in BookStoreApp) , run the following command
         {react-native link} and then run 
         {react-native run-ios}
         
         
3. FOR ICONS -
   - yarn add react-native-vector-icons
   - Update key and values as array in "info.plist" file in current BookStore Xcode folder
   -  key : <key>UIAppFonts</key>
   -  array of Strings:
   -  <array>
   - <string>AntDesign.ttf</string>
   - <string>Entypo.ttf</string>
   - <string>EvilIcons.ttf</string>
   - <string>Feather.ttf</string>
   - <string>FontAwesome.ttf</string>
   - <string>FontAwesome5_Brands.ttf</string>
   - <string>FontAwesome5_Regular.ttf</string>
   - <string>FontAwesome5_Solid.ttf</string>
   - <string>Foundation.ttf</string>
   - <string>Ionicons.ttf</string>
   - <string>MaterialIcons.ttf</string>
    - <string>MaterialDesignIcons.ttf</string>
   - <string>MaterialCommunityIcons.ttf</string>
   - <string>SimpleLineIcons.ttf</string>
   - <string>Octicons.ttf</string>
   - <string>Zocial.ttf</string>
   - </array>
  - In terminal (in BookStoreApp) , run the following command
         {react-native run-ios}
         
