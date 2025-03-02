#!/bin/zsh

directory="$(pwd)"

for file in "$directory"/*.jpg; 
do
    if [[ -f "$file" ]];
        then
        new_file="${file%.jpg}.webp"
        magick convert "$file" "$new_file"
        echo "Converted: $file -> $new_file"
    fi
done
