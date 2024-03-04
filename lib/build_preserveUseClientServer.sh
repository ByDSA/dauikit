#!/bin/bash
set -e

echo "Script: $0"

this_folder=$(dirname "$0")
baseFolder=$(realpath "$this_folder/../src/")
targetFolder=$(realpath "$this_folder/../build/")

find "$baseFolder" -type f -name "*.tsx" | while IFS= read -r file; do
  # Busca la primera línea que no esté vacía ni comience por //
  first_line=$(grep -vE "^\s*//|^$" "$file" | head -n 1)

  # Verifica si la línea contiene 'use client' o 'use server'
  if [[ $first_line =~ (use\ (client|server))\;? ]]; then
    # Extrae la estructura de carpetas relativa dentro de baseFolder
    relative_path=${file#"$baseFolder"}

    # Construye el nombre del archivo de destino con extensión .js
    target_file="$targetFolder${relative_path%.tsx}.js"

    # Añade 'use client'; como primera línea al archivo de destino
    echo "'use client';" | cat - "$target_file" >"$target_file.tmp" && mv "$target_file.tmp" "$target_file"

    echo "Añadido 'use client'; a $target_file"
  fi
done
