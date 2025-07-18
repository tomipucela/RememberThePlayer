library(readxl)

# Leer archivo Excel
datos <- read_excel("C:/Users/tomip/OneDrive/Documentos/pucelale/pucelale.local/laliga2/realvalladolid/realvalladolid.xlsx", sheet = 1)

# Función para reemplazar tildes y ñ
limpiar_texto <- function(x) {
  x <- iconv(x, from = "UTF-8", to = "ASCII//TRANSLIT")  # Elimina tildes
  return(x)
}

# Aplicar la función a todas las columnas de tipo texto
datos[] <- lapply(datos, function(col) {
  if (is.character(col)) {
    limpiar_texto(col)
  } else {
    col
  }
})


# Guardar como archivo .txt con tabulaciones
write.table(datos, file = "C:/Users/tomip/OneDrive/Documentos/pucelale/pucelale.txt", sep = "\t", row.names = FALSE, quote = FALSE)

# Ruta al archivo original
input_file <- "C:/Users/tomip/OneDrive/Documentos/pucelale/pucelale.txt"  # Cambia por tu ruta real
output_file <- "C:/Users/tomip/OneDrive/Documentos/pucelale/pucelale.local/laliga2/realvalladolid/realvalladolid.js"

# Leer el archivo con encabezados, separado por tabuladores
df <- read.delim(input_file, header = TRUE, stringsAsFactors = FALSE, encoding = "UTF-8")

# Renombrar columnas para que coincidan con tu JS
# Renombrar columnas, sin incluir "grupo" porque no existe en el archivo
names(df) <- c("nombre", "nacionalidad", "posicion", "dorsal", "temporadaPrim", "temporadaSeg")

# Crear la columna grupo asignando "A" y "B" alternadamente
df$grupo <- rep(c("A", "B"), length.out = nrow(df))

# Convertir las columnas numéricas a enteros
df$dorsal <- as.integer(df$dorsal)
df$temporadaPrim <- as.integer(df$temporadaPrim)
df$temporadaSeg <- as.integer(df$temporadaSeg)


# Crear la cadena JS
# Usamos jsonlite para convertir a JSON con indentación
library(jsonlite)
json_data <- toJSON(df, pretty = TRUE, auto_unbox = TRUE)

# Armar el contenido JS con variable jugadores
js_content <- paste0("const jugadores = ", json_data, ";")

# Escribir el archivo JS
write(js_content, file = output_file)


