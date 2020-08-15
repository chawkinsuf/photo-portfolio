#! /bin/bash

rm -r assets/js/isotope
mkdir -p assets/js/isotope
cp -R node_modules/isotope-layout/dist/* assets/js/isotope/

rm -r assets/js/photoswipe
mkdir -p assets/js/photoswipe
cp -R node_modules/photoswipe/dist/* assets/js/photoswipe/

mkdir -p static/css
mv assets/js/photoswipe/default-skin/*.{png,svg,gif} static/css/
