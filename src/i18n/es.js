// Copy en español (latinoamericano neutro, tuteo). Tono: un profesor paciente.
export default {
  htmlLang: 'es-PE',
  skipToContent: 'Saltar al contenido',
  langLabel: 'Idioma',
  themeLabel: 'Cambiar entre tema claro y oscuro',
  menuLabel: 'Abrir o cerrar el menú',
  navLabel: 'Navegación principal',
  nav: { features: 'Qué puedes hacer', download: 'Descargar', manual: 'Manual', source: 'Código' },
  headerCta: 'Descargar',
  parentLink: 'Codeplai',

  meta: {
    "title": "VizcachaIDE: un IDE para aprender a programar en Go, Python, C++ y Rust",
    "description": "Escribe, ejecuta, entiende tus errores y depura paso a paso en Go, Python, C++ y Rust, en español o en inglés. Gratis, de código abierto y hecho en Perú.",
    "manualTitle": "Manual de VizcachaIDE: instalar, ejecutar y depurar",
    "manualDescription": "Guía breve para instalar VizcachaIDE, crear un proyecto en Go, Python, C++ o Rust, ejecutar, entender los errores, depurar, usar paquetes y la terminal, atajos y solución de problemas."
  },

  hero: {
    "badge": "Versión 2.6.0 · Gratis y de código abierto",
    "h1": "Un IDE para aprender a programar en Go, Python, C++ y Rust",
    "sub": "Escribe tu programa, ejecútalo con un botón, entiende por qué falla y míralo funcionar paso a paso.",
    "ctaPrimary": "Descargar",
    "ctaSecondary": "Ver el código",
    "note": "Inspirado en Thonny, el IDE con el que miles de personas aprenden Python.",
    "logoAlt": "Logo de VizcachaIDE by Codeplai: una vizcacha con audífonos y lentes con código",
    "shotAlt": "VizcachaIDE ejecutando un programa en Go: el editor arriba y la salida del programa abajo",
    "shotCaption": "Pulsa Ejecutar (F5) y mira la salida de tu programa al instante. Funciona igual en los cuatro lenguajes."
  },

  audience: {
    "eyebrow": "Para quién es",
    "title": "Para quien quiere aprender a programar sin pelearse con la configuración",
    "items": [
      {
        "t": "Estudiantes",
        "d": "Que dan sus primeros pasos en programación con Go, Python, C++ o Rust."
      },
      {
        "t": "Docentes",
        "d": "Que necesitan una herramienta sencilla para el aula, que funcione en español y sin configuraciones complicadas."
      },
      {
        "t": "Cualquier persona",
        "d": "Que quiera aprender un lenguaje sin pelearse primero con terminales, variables de entorno y extensiones."
      }
    ]
  },

  langs: {
    "id": "lenguajes",
    "eyebrow": "Cuatro lenguajes",
    "title": "Go, Python, C++ y Rust, con la misma experiencia",
    "lead": "En todos pulsas **F5** para ejecutar, escribes en **Salida** cuando el programa te pide datos, y el **Asistente** te explica los errores comunes en español o en inglés. Tú eliges con cuáles trabajar la primera vez que abres el IDE.",
    "items": [
      {
        "name": "Go",
        "tools": "Delve · gopls · gofmt",
        "points": [
          "El Asistente explica **25** errores comunes.",
          "Depurador (Delve), autocompletado (gopls) y formato al guardar (gofmt).",
          "Consola interactiva para probar ideas sin crear un archivo.",
          "Paquetes con `go get`; los proyectos usan `go.mod`."
        ]
      },
      {
        "name": "Python",
        "tools": "debugpy · python-lsp-server · ruff",
        "points": [
          "El Asistente explica unos **30** errores comunes (NameError, IndentationError, TypeError…).",
          "Depurador (debugpy) con teclado en la Salida, autocompletado y formato al guardar (ruff).",
          "Consola Python (`>>>`) que recuerda tus variables.",
          "Paquetes con pip, con búsqueda por nombre en PyPI."
        ]
      },
      {
        "name": "C++",
        "tools": "clang · lldb-dap · clangd · clang-format",
        "points": [
          "El Asistente explica **27** errores comunes, con GCC y con Clang, y nombra los cierres inesperados («Segmentation fault»).",
          "Depurador (lldb-dap) con teclado en la Salida, autocompletado (clangd) y formato al guardar (clang-format).",
          "Los proyectos usan CMake y Ninja.",
          "Bibliotecas desde vcpkg, buscadas por nombre."
        ]
      },
      {
        "name": "Rust",
        "tools": "rustc · cargo · rust-analyzer · rustfmt",
        "points": [
          "El Asistente explica unos **45** errores, incluidos los de propiedad y préstamos (*ownership* y *borrowing*), y los *panics* en la línea de tu código.",
          "Depurador (lldb-dap) con teclado en la Salida, autocompletado (rust-analyzer) y formato al guardar (rustfmt).",
          "Consejos de clippy después de ejecutar.",
          "Paquetes con Cargo, buscados por nombre en crates.io."
        ]
      }
    ],
    "note": "Además: sugerencias en línea con los tipos que infiere el lenguaje (*inlay hints*) y una terminal integrada donde `go`, `python`, `clang++` y `cargo` funcionan igual que con F5.",
    "shotAlts": {
      "go": "VizcachaIDE ejecutando un programa en Go",
      "python": "VizcachaIDE ejecutando un programa en Python",
      "cpp": "VizcachaIDE ejecutando un programa en C++",
      "rust": "VizcachaIDE ejecutando un programa en Rust"
    }
  },

  features: {
    "eyebrow": "Qué puedes hacer",
    "title": "Todo lo que necesitas para aprender, en una sola ventana",
    "more": "Ver detalles",
    "alsoTitle": "Y además",
    "run": {
      "t": "Escribir y ejecutar",
      "s": "Pulsa Ejecutar (F5) y mira la salida al instante, con entrada por teclado, varios archivos y formato automático al guardar.",
      "items": [
        "Pulsa **Ejecutar (F5)** y mira la salida de tu programa al instante, en Go, Python, C++ o Rust.",
        "Escribe en **Salida** cuando tu programa te pida datos por teclado (`input()`, `std::cin`, `read_line`, `fmt.Scan`…).",
        "Pasa argumentos a tu programa y trabaja con proyectos de varios archivos (`go.mod`, CMake, Cargo).",
        "Tu código se ordena solo al guardar: gofmt, ruff, clang-format o rustfmt, según el lenguaje.",
        "**Detener** primero envía un Ctrl+C a tu programa, para que se ejecuten sus `defer` y manejadores de señales, y recién después lo termina.",
        "La salida entiende **colores ANSI** y las barras de progreso que se redibujan con `\r`.",
        "Clic derecho en **Salida**, **Problemas** y **Consola**: copiar, copiar todo, pegar, seleccionar todo y limpiar."
      ]
    },
    "errors": {
      "t": "Entender tus errores",
      "s": "Cuando algo falla, el Asistente te explica qué pasó y cómo arreglarlo, en tu idioma.",
      "items": [
        "Cuando algo falla, el **Asistente** te explica **qué pasó y cómo arreglarlo**, en tu idioma: unos 25 errores de Go, 30 de Python, 27 de C++ y 45 de Rust.",
        "En Rust explica la propiedad y los préstamos (un valor movido, dos préstamos mutables…) con un ejemplo pequeño.",
        "Nombra los cierres inesperados («Segmentation fault», desbordamiento de pila) y los *panics* en la línea de tu código.",
        "El mensaje original siempre está a la vista, con un botón para buscarlo en internet. Así aprendes a leer los errores reales.",
        "Los errores se subrayan **mientras escribes**, antes de ejecutar."
      ],
      "alt": "El Asistente de VizcachaIDE explicando un error de Go en español",
      "caption": "El Asistente explica qué pasó y cómo arreglarlo (aquí, un error de Go)."
    },
    "debug": {
      "t": "Ver tu programa paso a paso",
      "s": "Pon un punto de interrupción, avanza línea por línea y mira cómo cambian tus variables.",
      "items": [
        "Haz clic junto a un número de línea para poner un **punto de interrupción** y pulsa **Depurar (F6)**.",
        "Avanza con botones que hablan claro: **Siguiente línea**, **Entrar en la función**, **Salir de la función**.",
        "Mira el valor de tus variables en cada paso. La que acaba de cambiar se resalta, para que veas qué hizo la última línea.",
        "Descubre **cómo llegaste ahí** (la pila de llamadas) y qué hace cada goroutine o hilo.",
        "En Python, C++ y Rust puedes **escribir con el teclado mientras depuras**. Usa Delve, debugpy y lldb-dap."
      ],
      "caption": "Cada llamada es una caja dentro de la que la hizo. «Aquí estás» marca la llamada actual."
    },
    "project": {
      "t": "Empezar un proyecto en un minuto",
      "s": "Eliges nombre, lenguaje y carpeta, y el proyecto queda listo para ejecutar con F5.",
      "items": [
        "**Archivo → Nuevo proyecto…** (Ctrl+Shift+N): eliges un nombre, el lenguaje y la carpeta, y el IDE lo deja listo para F5.",
        "Cada proyecto empieza con un programa que te pregunta tu nombre y te saluda: Go (`go.mod`), Python, C++ con CMake y vcpkg, o Rust con Cargo.",
        "En el diálogo **Paquetes** instalas y quitas librerías de cada lenguaje (`go get`, pip, vcpkg, cargo) y las **buscas por nombre**."
      ]
    },
    "terminal": {
      "t": "Una terminal integrada",
      "s": "Una terminal de verdad en tu carpeta, con las mismas herramientas que usa F5.",
      "items": [
        "La pestaña **Terminal** abre una terminal de verdad en tu carpeta, y puedes tener varias a la vez.",
        "Las herramientas del IDE van primero en el `PATH`: `go`, `python`, `pip`, `clang++`, `cmake` y `cargo` funcionan igual que con F5.",
        "Copiar y pegar con Ctrl+Shift+C y Ctrl+Shift+V, y colores para el tema claro y el oscuro."
      ]
    },
    "console": {
      "t": "Probar ideas en la consola",
      "s": "Escribe una línea, pulsa Enter y mira el resultado, sin crear un archivo.",
      "items": [
        "Es el equivalente de la «Shell» de Thonny. En Go, escribe `x := 21`, luego `x * 2` y verás `42` al instante, sin crear un archivo (usa un intérprete, yaegi).",
        "En Python, la consola `>>>` recuerda tus variables de una línea a la otra.",
        "Los paquetes comunes, como `strings` o `fmt`, se importan solos en la consola de Go.",
        "Es ideal para despejar una duda pequeña sin tocar tu programa."
      ],
      "alt": "La consola interactiva de Go de VizcachaIDE: se escribe x := 21, luego x * 2 y aparece 42",
      "caption": "La consola de Go: escribe, pulsa Enter y mira el resultado."
    },
    "files": {
      "t": "Tus archivos y tu proyecto",
      "s": "Un menú Archivo como el de Thonny, con los atajos de siempre. Lo que eliminas va a la Papelera.",
      "items": [
        "Un **menú Archivo** y los botones Nuevo, Abrir y Guardar, como en Thonny: Nuevo (Ctrl+N), Abrir (Ctrl+O), Abrir carpeta, Abrir reciente, Guardar (Ctrl+S), Guardar como, Guardar todo, Cerrar (Ctrl+W) y Cerrar carpeta.",
        "En el panel **Archivos**, clic derecho: nuevo archivo aquí, nueva carpeta, renombrar (F2), mostrar en el Explorador y copiar la ruta.",
        "Al eliminar, el archivo **va a la Papelera de reciclaje**: nunca se borra para siempre.",
        "Oculta los paneles laterales con **Ctrl+B** para tener más espacio para el editor.",
        "Si un archivo abierto cambia fuera del IDE, se **recarga solo** (si tienes cambios sin guardar, primero te pregunta)."
      ],
      "alt": "El menú Archivo de VizcachaIDE con Nuevo, Abrir, Abrir carpeta, Abrir reciente, Guardar y Guardar como",
      "caption": "El menú Archivo, con los atajos de siempre."
    },
    "fast": {
      "t": "Escribir más rápido",
      "s": "Autocompletado con documentación, ayuda con los parámetros e ir a la definición con Ctrl+clic.",
      "items": [
        "Autocompletado inteligente con la documentación de cada función: gopls, python-lsp-server, clangd y rust-analyzer.",
        "Ayuda con los parámetros mientras escribes una llamada, y los tipos que infiere el lenguaje, en gris dentro del código.",
        "Ctrl+clic para ir a donde se define una función.",
        "Buscar y reemplazar, ir a una línea, zoom, tema claro u oscuro.",
        "**Actualizaciones automáticas**: VizcachaIDE avisa cuando hay una versión nueva y comprueba su descarga con SHA-256 antes de ofrecértela."
      ]
    }
  },

  learning: {
    "eyebrow": "Pensado para aprender",
    "title": "Menos botones, más claridad",
    "items": [
      {
        "t": "Español e inglés",
        "d": "En toda la interfaz y en las explicaciones de errores. Detecta el idioma de tu sistema y puedes cambiarlo cuando quieras."
      },
      {
        "t": "Un botón principal",
        "d": "Ejecutar es lo más visible de la ventana; lo demás aparece cuando lo necesitas."
      },
      {
        "t": "Letra muy legible",
        "d": "Usa Atkinson Hyperlegible, una tipografía diseñada para que caracteres como 0 y O, o 1, l e I, no se confundan."
      },
      {
        "t": "Todo incluido",
        "d": "La versión completa trae Go, Python, C++ y Rust con sus depuradores y ayudas de código: instalas VizcachaIDE y ya puedes programar."
      }
    ],
    "shotAlt": "VizcachaIDE con el tema oscuro: el editor, la salida y el Asistente",
    "shotCaption": "Tema claro u oscuro, el que te canse menos la vista."
  },

  download: {
    "eyebrow": "Descarga",
    "title": "Descarga VizcachaIDE",
    "lead": "Es gratis y de código abierto (licencia MIT). Elige la versión completa si quieres empezar sin instalar nada más.",
    "version": "Versión 2.6.0",
    "rows": [
      {
        "name": "Completa (full)",
        "tag": "Recomendada para empezar",
        "includes": "VizcachaIDE + Go + Python + C++ + Rust, con depuradores, ayudas de código y formateadores. El compilador de C++ viene incluido solo en Windows.",
        "who": "Si no tienes ningún lenguaje instalado, o quieres probarlos todos.",
        "files": [
          "Es la más grande: varios cientos de MB."
        ]
      },
      {
        "name": "Solo Go (full-go)",
        "tag": null,
        "includes": "VizcachaIDE + Go + Delve + gopls",
        "who": "Si solo vas a usar Go.",
        "files": [
          "Unos 61 MB (instalador de Windows)."
        ]
      },
      {
        "name": "Solo Python (full-python)",
        "tag": null,
        "includes": "VizcachaIDE + Python con sus herramientas",
        "who": "Si solo vas a usar Python.",
        "files": [
          "Unos 45 MB (instalador de Windows)."
        ]
      },
      {
        "name": "Solo C++ (full-cpp)",
        "tag": null,
        "includes": "VizcachaIDE + compilador, depurador y ayudas de C++ (clang)",
        "who": "Si solo vas a usar C++. Solo para Windows.",
        "files": [
          "Unos 200 MB (instalador de Windows)."
        ]
      },
      {
        "name": "Ligera (lite)",
        "tag": null,
        "includes": "Solo VizcachaIDE",
        "who": "Si ya tienes tus lenguajes instalados: usa los que encuentre en tu equipo.",
        "files": [
          "Unos 10 MB."
        ]
      }
    ],
    "systemsTitle": "Sistemas",
    "systems": [
      "**Windows 10 y 11 (x64):** instalador sin permisos de administrador y versión portable.",
      "**macOS** (Intel y Apple Silicon): imagen de disco `.dmg`.",
      "**Linux:** `.AppImage` o `.tar.gz`.",
      "Las versiones de macOS y Linux son **recientes**: se compilan y prueban automáticamente en los tres sistemas, pero tienen menos uso real que la de Windows. Si encuentras un problema, cuéntanoslo."
    ],
    "webview": "La versión portable de Windows no necesita instalar nada más, salvo WebView2, que ya viene en Windows 11 y en casi todos los Windows 10 actualizados.",
    "cardLink": "Descargar en GitHub",
    "button": "Ir a las descargas en GitHub",
    "buttonNote": "Se abre la página de versiones del proyecto. Descarga el archivo que corresponda a tu sistema y tu elección.",
    "manualLink": "Cómo instalarlo y usarlo: el manual"
  },

  safety: {
    id: 'un-proyecto-nuevo',
    eyebrow: 'Un proyecto nuevo',
    title: 'Por qué Windows puede avisarte y por qué es seguro',
    intro: [
      'VizcachaIDE es un **proyecto nuevo e independiente**, hecho en Perú por [Codeplai Games](https://codeplai.pe). Sus instaladores **todavía no tienen firma digital**, así que la primera vez que abras uno, SmartScreen de Windows puede mostrar *«Windows protegió tu PC»* y decir que el editor es desconocido.',
      'Este aviso aparece con todo programa nuevo que no está firmado; no significa que se haya encontrado un virus.',
    ],
    stepsTitle: 'Para continuar',
    steps: [
      'En el aviso «Windows protegió tu PC», haz clic en **Más información**.',
      'Haz clic en **Ejecutar de todas formas**.',
    ],
    macNote: 'En macOS la app aún no está notarizada: haz clic derecho sobre ella y elige **Abrir**. Cada versión incluye archivos `SHA256SUMS` para comprobar tu descarga.',
    proofTitle: 'No tienes que creernos sin más',
    proofs: [
      {
        t: 'El código fuente es público',
        d: 'Cada línea está en [github.com/codeplai/VizcachaIDE](https://github.com/codeplai/VizcachaIDE), con licencia MIT. Puedes leerlo y también compilarlo tú mismo.',
      },
      {
        t: 'Puedes verificar tu descarga',
        d: 'Cada versión publicada incluye un archivo `SHA256SUMS`. En PowerShell, `Get-FileHash .\\VizcachaIDE-…zip` debe mostrar el mismo valor que aparece en ese archivo.',
      },
      {
        t: 'Las herramientas incluidas son las oficiales',
        d: 'Go, Python, C++ (LLVM), Rust y sus herramientas se descargan de sus fuentes oficiales, y el script de empaquetado comprueba cada descarga con un SHA-256 fijo.',
      },
    ],
    signature:
      '**Sobre la firma:** planeamos adquirir un certificado de firma de código a medida que el proyecto crezca, para que Windows reconozca al editor y el aviso desaparezca. Mientras tanto, el código público y las sumas de verificación son la forma de comprobar lo que instalas.',
  },

  status: {
    "eyebrow": "Estado del proyecto",
    "title": "Versión 2.6.0: ya se puede usar",
    "lead": "VizcachaIDE ya es una herramienta completa para empezar en cuatro lenguajes, y sigue mejorando con cada versión.",
    "items": [
      {
        "t": "Cuatro lenguajes",
        "d": "Go, Python, C++ y Rust con la misma experiencia: ejecutar, entender errores, depurar, autocompletar y formatear."
      },
      {
        "t": "Se actualiza solo",
        "d": "Una vez al día busca una versión nueva y comprueba su descarga con SHA-256. Tú decides cuándo instalarla."
      }
    ]
  },

  peru: {
    eyebrow: 'Hecho en Perú',
    title: 'Un proyecto de Codeplai Games',
    p1: 'VizcachaIDE es un proyecto de [Codeplai Games](https://codeplai.pe), creado por Marks Calderon, CEO de Codeplai.',
    story: [
      'En Codeplai construimos con **Go**, un lenguaje sencillo, rápido y muy bien pensado, y empezamos por ahí. Hoy VizcachaIDE también acompaña a quien aprende **Python, C++ y Rust**: una herramienta amable para que nadie se rinda antes de escribir su primer programa por culpa de una terminal o de una instalación.',
      'El nombre viene de la **vizcacha**, el roedor andino del Perú que siempre se ve relajado, tomando el sol sobre las rocas. Ese es el espíritu: **aprender a programar con calma**, sin pelearte con terminales ni configuraciones.',
      'Nos inspiramos en **Thonny**, el IDE que ha hecho que miles de personas aprendan Python sin estrés: pocas cosas en pantalla, todo a la vista y errores que se explican.',
    ],
    contactTitle: 'Contacto',
    p2: '¿Tienes ideas, encontraste un error o quieres usarlo en tu clase? Escríbenos a [hola@codeplai.pe](mailto:hola@codeplai.pe) o abre un *issue* en GitHub.',
    issue: 'Abrir un issue',
    visit: 'Conoce Codeplai',
  },

  footer: {
    line: 'Un IDE para aprender a programar en Go, Python, C++ y Rust. Gratis y de código abierto (MIT).',
    navTitle: 'Proyecto',
    moreTitle: 'Contacto',
    parent: 'Un proyecto de Codeplai Games',
    license:
      'VizcachaIDE se distribuye bajo licencia MIT e incluye Go, Python, C++ (LLVM), Rust y sus herramientas, cada uno con su propia licencia de código abierto.',
  },

  manual: {
    "eyebrow": "Manual",
    "title": "Manual de VizcachaIDE",
    "lead": "Una guía breve para instalar, crear tu primer proyecto en Go, Python, C++ o Rust, entender los errores y depurar. Si algo no queda claro, escríbenos a hola@codeplai.pe.",
    "tocTitle": "En esta página",
    "sections": [
      {
        "id": "instalar",
        "t": "Instalar",
        "blocks": [
          {
            "p": "Descarga el instalador desde la [página de versiones](https://github.com/codeplai/VizcachaIDE/releases). Hay varias variantes:"
          },
          {
            "ul": [
              "**Completa (full):** VizcachaIDE + Go + Python + C++ + Rust, cada uno con su depurador, su ayuda de código y su formateador. Es la que debes elegir si no tienes nada instalado. El compilador de C++ viene incluido solo en Windows; en macOS y Linux se usa el del sistema.",
              "**Solo un lenguaje:** `full-go`, `full-python` y `full-cpp` (esta última solo para Windows) traen VizcachaIDE y las herramientas de un único lenguaje, y pesan mucho menos.",
              "**Ligera (lite):** solo VizcachaIDE (unos 10 MB). Usa los lenguajes que ya tengas instalados."
            ]
          },
          {
            "h": "Windows 10 y 11 (x64)"
          },
          {
            "ul": [
              "**Instalador (setup.exe):** se instala solo para tu usuario, sin permisos de administrador.",
              "**Portable (.zip):** descomprímelo en una carpeta y abre VizcachaIDE. No necesita instalación ni DLLs adicionales, solo WebView2 (ya viene en Windows 11 y en casi todos los Windows 10 actualizados)."
            ]
          },
          {
            "p": "Como el instalador todavía no tiene firma digital, Windows puede mostrar *«Windows protegió tu PC»*. Haz clic en **Más información → Ejecutar de todas formas**. [Aquí explicamos por qué es seguro](/#un-proyecto-nuevo)."
          },
          {
            "h": "macOS"
          },
          {
            "p": "Hay imágenes de disco `.dmg` para Intel y para Apple Silicon. Abre la imagen y arrastra VizcachaIDE a Aplicaciones. La app todavía no está notarizada: haz clic derecho sobre ella y elige **Abrir**."
          },
          {
            "h": "Linux"
          },
          {
            "p": "Descarga el `.AppImage`, dale permiso de ejecución (`chmod +x VizcachaIDE-*.AppImage`) y ejecútalo; también hay un `.tar.gz`."
          },
          {
            "p": "Las versiones de macOS y Linux son recientes: se compilan y prueban automáticamente, pero tienen menos uso real que la de Windows. Si algo falla, cuéntanoslo."
          },
          {
            "h": "Verificar la descarga"
          },
          {
            "p": "Cada versión incluye archivos `SHA256SUMS`. En PowerShell, ejecuta `Get-FileHash .\\VizcachaIDE-…exe`: el valor debe ser igual al del archivo."
          }
        ]
      },
      {
        "id": "primer-programa",
        "t": "Tu primera vez",
        "blocks": [
          {
            "p": "La primera vez que abres VizcachaIDE, un asistente te pregunta **qué lenguajes vas a usar** (Go, Python, C++, Rust). Solo esos aparecen en los menús; puedes cambiarlo después en Ajustes → General. La interfaz usa el idioma de tu sistema (español o inglés)."
          },
          {
            "h": "Crear un proyecto"
          },
          {
            "ol": [
              "Elige **Archivo → Nuevo proyecto…** (Ctrl+Shift+N).",
              "Escribe un nombre, elige el lenguaje y la carpeta donde se creará (siempre la eliges tú).",
              "VizcachaIDE escribe el proyecto y lo abre. Pulsa **F5**: el programa te pregunta tu nombre y te saluda."
            ]
          },
          {
            "p": "Qué crea cada lenguaje:"
          },
          {
            "ul": [
              "**Go:** `go.mod` y `main.go`.",
              "**Python:** `main.py`.",
              "**C++:** un proyecto de CMake (`CMakeLists.txt`, `CMakePresets.json`, `vcpkg.json`, `main.cpp` y `.clang-format`).",
              "**Rust:** un proyecto de Cargo (`Cargo.toml`, `src/main.rs` y `.gitignore`)."
            ]
          },
          {
            "p": "También puedes empezar con un archivo suelto: **Archivo → Nuevo** (Ctrl+N) crea un archivo del lenguaje en el que estás trabajando. Por ejemplo, en Go:"
          },
          {
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(\"¡Hola, VizcachaIDE!\")\n}"
          },
          {
            "p": "Escribe el programa, pulsa **F5** para ejecutarlo (la salida aparece en el panel inferior) y guarda con **Ctrl+S**."
          }
        ]
      },
      {
        "id": "lenguajes",
        "t": "Los cuatro lenguajes y sus paquetes",
        "blocks": [
          {
            "p": "Los cuatro lenguajes se usan igual: F5 ejecuta, F6 depura y el Asistente explica los errores. Lo que cambia son las herramientas que hay detrás:"
          },
          {
            "table": [
              [
                "Go",
                "Delve · gopls · gofmt"
              ],
              [
                "Python",
                "debugpy · python-lsp-server · ruff"
              ],
              [
                "C++",
                "clang · lldb-dap · clangd · clang-format"
              ],
              [
                "Rust",
                "rustc y cargo · lldb-dap · rust-analyzer · rustfmt"
              ]
            ],
            "head": [
              "Lenguaje",
              "Depurar · Ayuda de código · Formato"
            ]
          },
          {
            "h": "Paquetes"
          },
          {
            "p": "En el diálogo **Paquetes** (menú **Más**) instalas, quitas y listas las librerías del lenguaje que tienes abierto. Mientras escribes un nombre aparece una lista de coincidencias con su versión y su descripción, y eliges la que quieres instalar. Sin conexión a internet, el diálogo lo avisa y aun así instala un nombre exacto."
          },
          {
            "ul": [
              "**Go:** `go mod init`, `go get` y `go mod tidy`; la búsqueda usa pkg.go.dev.",
              "**Python:** pip; la búsqueda usa PyPI.",
              "**C++:** vcpkg. VizcachaIDE edita `vcpkg.json` y el bloque marcado de `CMakeLists.txt`, así que solo escribes el `#include`. La primera instalación de una biblioteca la compila y tarda unos minutos; las siguientes salen de una caché.",
              "**Rust:** Cargo (`cargo add` y `cargo remove`); la búsqueda usa crates.io."
            ]
          },
          {
            "h": "C++ con CMake"
          },
          {
            "p": "Cada `.cpp` de la carpeta forma parte del programa, así que para añadir un archivo basta con crearlo. Si abres una carpeta sin `CMakeLists.txt`, VizcachaIDE crea uno la primera vez que ejecutas, compilas o depuras. F5, Compilar, Depurar y Problemas usan CMake y Ninja."
          },
          {
            "h": "Qué herramientas se usan"
          },
          {
            "p": "Ajustes → Herramientas muestra, por lenguaje, qué encontró y su versión; si falta algo, te dice qué instalar y te da el comando para copiar. Python debe ser 3.10 o más nuevo. En Rust, el IDE puede indicarte cómo instalarlo con rustup si no lo tienes (la versión completa ya lo incluye)."
          }
        ]
      },
      {
        "id": "archivos",
        "t": "Archivos y proyectos",
        "blocks": [
          {
            "ul": [
              "**Menú Archivo:** Nuevo (Ctrl+N), Nuevo proyecto (Ctrl+Shift+N), Abrir archivo (Ctrl+O), Abrir carpeta, Abrir reciente, Guardar (Ctrl+S), Guardar como (Ctrl+Shift+S), Guardar todo, Cerrar (Ctrl+W) y Cerrar carpeta.",
              "**Guardar como** sirve también para un archivo nuevo que todavía no se guardó.",
              "**Cerrar carpeta** (la ✕ junto a Actualizar en el panel Archivos, clic derecho sobre la carpeta, o el menú Archivo) cierra sus pestañas (preguntando por los cambios sin guardar) y no se vuelve a abrir en el próximo inicio."
            ]
          },
          {
            "h": "El panel Archivos"
          },
          {
            "p": "Haz clic derecho sobre un archivo o una carpeta para crear un archivo o una carpeta ahí, renombrar (F2), eliminar, mostrar en el Explorador o copiar la ruta. **Eliminar envía el elemento a la Papelera de reciclaje**: nunca se borra de forma permanente. Las carpetas que generan las herramientas (`build/`, `target/`) se ven atenuadas."
          },
          {
            "h": "Más espacio para el editor"
          },
          {
            "p": "Oculta el panel lateral y el Asistente con **Ctrl+B** y **Ctrl+Alt+B**, con los dos botones de la barra de título o haciendo clic en el icono activo de la barra lateral. El Asistente vuelve a abrirse cuando empiezas a depurar, y mientras está oculto su botón muestra el número de problemas."
          },
          {
            "h": "Cambios fuera del IDE"
          },
          {
            "p": "Si un archivo abierto cambia fuera de VizcachaIDE, se recarga automáticamente. Si tenías cambios sin guardar, primero te pregunta qué hacer. La ventana recuerda su tamaño y su posición."
          }
        ]
      },
      {
        "id": "consola",
        "t": "Consolas",
        "blocks": [
          {
            "p": "Para Go y Python hay una pestaña **Consola**, como la «Shell» de Thonny: sirve para probar ideas sin crear un archivo."
          },
          {
            "ul": [
              "**Go:** usa un intérprete (yaegi), así que el resultado aparece al instante. Los paquetes comunes, como `strings`, se importan automáticamente.",
              "**Python:** una consola `>>>` que recuerda las variables entre una entrada y otra."
            ]
          },
          {
            "code": "// Consola de Go\nx := 21\nx * 2\n// 42\nstrings.ToUpper(\"hola\")\n// \"HOLA\""
          },
          {
            "p": "Clic derecho en la consola para copiar, pegar o limpiar."
          }
        ]
      },
      {
        "id": "terminal",
        "t": "Terminal integrada",
        "blocks": [
          {
            "p": "La pestaña **Terminal** del panel inferior abre una terminal real (PowerShell en Windows, tu intérprete de comandos en los demás sistemas) dentro de la carpeta abierta. Se abre con **Ctrl + la tecla a la izquierda del 1** (sea cual sea su símbolo) o con **Ctrl+Ñ** si tu teclado tiene Ñ."
          },
          {
            "ul": [
              "Las herramientas del IDE van primero en el `PATH`: `go`, `python`, `pip`, `clang++`, `cmake`, `ninja` y `cargo` funcionan igual que con F5. En C++, `cmake --preset debug` también.",
              "Puedes abrir varias terminales (*Nueva terminal*) y cerrar una con *Terminar terminal*.",
              "Copiar: **Ctrl+Shift+C**. Pegar: **Ctrl+Shift+V** (también con clic derecho)."
            ]
          }
        ]
      },
      {
        "id": "ejecutar",
        "t": "Ejecutar tu programa",
        "blocks": [
          {
            "ul": [
              "**Ejecutar (F5):** compila y ejecuta tu programa. **Detener (Shift+F5)** lo termina cuando quieras. **Más → Compilar** compila sin ejecutar.",
              "Si tu programa pide datos por teclado (`input()`, `std::cin`, `read_line`, `fmt.Scan`…), escribe en **Salida** y pulsa Enter.",
              "Puedes pasar argumentos a tu programa y abrir proyectos de varios archivos (`go.mod`, CMake, Cargo; en un espacio de trabajo de Cargo, se ejecuta el miembro del archivo abierto).",
              "Al guardar, tu código se ordena con el formateador del lenguaje: gofmt, ruff, clang-format (con 4 espacios; si hay un `.clang-format` del docente, manda ese) o rustfmt.",
              "Si un programa de C++ se cierra por un error grave, VizcachaIDE lo nombra («Segmentation fault», «Stack overflow»…) y te sugiere depurarlo con F6 para ver la línea.",
              "**Detener** envía primero una interrupción (como Ctrl+C) para que se ejecuten los `defer` y los manejadores de señales de tu programa; si no responde, lo termina.",
              "La salida muestra colores ANSI y las barras de progreso que se redibujan con `\\r`. Clic derecho en Salida, Problemas o Consola: copiar, copiar todo, pegar, seleccionar todo y limpiar."
            ]
          }
        ]
      },
      {
        "id": "errores",
        "t": "Entender los errores",
        "blocks": [
          {
            "p": "Cuando algo falla, el **Asistente** (panel de la derecha) te explica qué pasó y cómo arreglarlo, en español o en inglés. Reconoce los errores más comunes de quien empieza:"
          },
          {
            "ul": [
              "**Go (25):** una variable declarada y no usada, un import de más, tipos que no encajan, un índice fuera de rango, un mapa sin inicializar…",
              "**Python (unos 30):** `NameError`, `IndentationError`, `TypeError`, falta de dos puntos, un paréntesis sin cerrar, `ZeroDivisionError`…",
              "**C++ (27):** nombres sin declarar (también `cout` sin `#include <iostream>` o sin `std::`), falta de `;` o `}`, argumentos incorrectos, errores del enlazador (`undefined reference`), cierres inesperados y excepciones; con GCC y con Clang.",
              "**Rust (unos 45):** propiedad y préstamos (un valor movido, dos préstamos mutables, una referencia que no vive lo suficiente…) con un ejemplo pequeño, tipos que no coinciden, nombres e imports desconocidos, falta de `;` o `}`, *panics* (índice fuera de rango, `unwrap` sobre `None` o `Err`, desbordamiento, división entre cero…) en la línea de tu código, y consejos de clippy."
            ]
          },
          {
            "ul": [
              "Los errores se subrayan mientras escribes, antes de ejecutar.",
              "El mensaje original siempre se muestra, con un botón para buscarlo en internet. Así aprendes a leer los errores reales.",
              "En Go, si tu programa compila pero `go vet` encuentra algo sospechoso (por ejemplo, un `Printf` cuyo formato no coincide con sus valores), el Asistente lo explica después de ejecutar."
            ]
          },
          {
            "p": "Un buen ejercicio: comete un error a propósito, pulsa F5 y lee la explicación del Asistente."
          }
        ]
      },
      {
        "id": "depurar",
        "t": "Depurar paso a paso",
        "blocks": [
          {
            "ol": [
              "Guarda tu archivo (la depuración necesita un archivo guardado).",
              "Haz clic junto a un número de línea para poner un **punto de interrupción**. Puedes ponerlos en cualquier archivo del proyecto.",
              "Pulsa **Depurar (F6)**. El programa se detiene en esa línea.",
              "Avanza con **Siguiente línea (F7)**, **Entrar en la función (F8)** o **Salir de la función (F9)**.",
              "Mira tus variables en cada paso: la que acaba de cambiar se resalta. El panel de llamadas muestra cada función como una caja dentro de la que la llamó, con sus argumentos (por ejemplo `factorial(n=3)`): así la recursión se ve. «Aquí estás» marca la llamada actual.",
              "**Continuar (Shift+F6)** sigue hasta el próximo punto de interrupción; **Terminar depuración (Shift+F5)** termina la sesión."
            ]
          },
          {
            "p": "Con **Ejecutar hasta aquí (Ctrl+F10)** el programa avanza hasta la línea donde está el cursor."
          },
          {
            "p": "El depurador es Delve para Go, debugpy para Python y lldb-dap para C++ y Rust. En Python, C++ y Rust puedes **escribir con el teclado en Salida mientras depuras**. Si un programa se cierra por un error grave o un *panic*, la depuración se detiene en la línea correcta. Lo que imprimió el programa se conserva después de terminar la sesión."
          }
        ]
      },
      {
        "id": "actualizaciones",
        "t": "Actualizaciones",
        "blocks": [
          {
            "p": "Una vez al día, al abrirse, VizcachaIDE busca una versión nueva en sus [versiones de GitHub](https://github.com/codeplai/VizcachaIDE/releases). Si hay una, descarga en segundo plano el archivo que corresponde a tu instalación (misma variante y mismo sistema) y comprueba su **SHA-256** contra el archivo de sumas de esa versión."
          },
          {
            "ul": [
              "Un aviso te ofrece **Instalar y reiniciar** (copia instalada de Windows) o **Mostrar el archivo** (portable, macOS y Linux).",
              "En **Ajustes → Actualizaciones** ves la versión, el progreso y la última comprobación; también puedes pulsar **Buscar ahora** o desactivar la comprobación automática. El menú **Más** tiene **Buscar actualizaciones…**."
            ]
          }
        ]
      },
      {
        "id": "atajos",
        "t": "Atajos de teclado",
        "blocks": [
          {
            "table": [
              [
                "Ejecutar / Detener",
                "F5 / Shift+F5"
              ],
              [
                "Depurar / Continuar",
                "F6 / Shift+F6"
              ],
              [
                "Siguiente línea / Entrar / Salir",
                "F7 / F8 / F9"
              ],
              [
                "Ejecutar hasta aquí",
                "Ctrl+F10"
              ],
              [
                "Nuevo archivo / Abrir",
                "Ctrl+N / Ctrl+O"
              ],
              [
                "Nuevo proyecto",
                "Ctrl+Shift+N"
              ],
              [
                "Guardar / Guardar como",
                "Ctrl+S / Ctrl+Shift+S"
              ],
              [
                "Cerrar pestaña",
                "Ctrl+W"
              ],
              [
                "Ocultar / mostrar el panel lateral",
                "Ctrl+B"
              ],
              [
                "Ocultar / mostrar el Asistente",
                "Ctrl+Alt+B"
              ],
              [
                "Terminal",
                "Ctrl + la tecla a la izquierda del 1 (o Ctrl+Ñ)"
              ],
              [
                "Copiar / pegar en la terminal",
                "Ctrl+Shift+C / Ctrl+Shift+V"
              ],
              [
                "Formatear el código",
                "Ctrl+Shift+F"
              ],
              [
                "Buscar",
                "Ctrl+F"
              ],
              [
                "Ir a una línea",
                "Ctrl+G"
              ],
              [
                "Ir a la definición",
                "F12 o Ctrl+clic"
              ],
              [
                "Autocompletar",
                "Ctrl+Space"
              ],
              [
                "Zoom: acercar / alejar / restablecer",
                "Ctrl + / Ctrl − / Ctrl 0"
              ]
            ],
            "head": [
              "Acción",
              "Atajo"
            ],
            "note": "En macOS, usa ⌘ en lugar de Ctrl."
          }
        ]
      },
      {
        "id": "problemas",
        "t": "Solución de problemas",
        "blocks": [
          {
            "h": "Windows muestra «Windows protegió tu PC»"
          },
          {
            "p": "Es normal con programas nuevos sin firma digital. Haz clic en **Más información → Ejecutar de todas formas**. Puedes comprobar tu descarga con `SHA256SUMS` y revisar el [código fuente](https://github.com/codeplai/VizcachaIDE)."
          },
          {
            "h": "La ventana no abre o aparece en blanco (WebView2)"
          },
          {
            "p": "VizcachaIDE usa WebView2, que viene incluido en Windows 11 y en casi todos los Windows 10 actualizados. Si tu equipo no lo tiene, instala el «WebView2 Runtime» desde la página de Microsoft y vuelve a abrir VizcachaIDE. Actualizar Windows también suele resolverlo."
          },
          {
            "h": "Dice que falta una herramienta (Go, Python, un compilador de C++ o Rust)"
          },
          {
            "p": "Con la versión **ligera** o con una variante de otro lenguaje, necesitas tener instalado el lenguaje que quieres usar. El aviso te dice cuál falta, con un botón para **Instalar** o **Copiar el comando**, y **Elegir en Ajustes** si ya lo tienes en otra ruta. La versión **completa** ya trae todo (el compilador de C++ solo en Windows: en macOS usa `xcode-select --install` y en Linux instálalo con `apt`)."
          },
          {
            "h": "El depurador o el autocompletado no funcionan"
          },
          {
            "p": "Revisa Ajustes → Herramientas: ahí aparece qué falta para ese lenguaje. En la versión ligera, para Go necesitas Delve y gopls:"
          },
          {
            "code": "go install github.com/go-delve/delve/cmd/dlv@latest\ngo install golang.org/x/tools/gopls@latest"
          },
          {
            "h": "Encontraste un error o tienes una idea"
          },
          {
            "p": "Abre un [issue en GitHub](https://github.com/codeplai/VizcachaIDE/issues) o escríbenos a [hola@codeplai.pe](mailto:hola@codeplai.pe)."
          }
        ]
      }
    ]
  },
};
