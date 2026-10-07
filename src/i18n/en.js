// English copy. Tone: a patient teacher.
export default {
  htmlLang: 'en',
  skipToContent: 'Skip to content',
  langLabel: 'Language',
  themeLabel: 'Switch between light and dark theme',
  menuLabel: 'Open or close the menu',
  navLabel: 'Main navigation',
  nav: { features: 'What you can do', download: 'Download', manual: 'Manual', source: 'Source' },
  headerCta: 'Download',
  parentLink: 'Codeplai',

  meta: {
    "title": "VizcachaIDE: an IDE to learn to program in Go, Python, C++ and Rust",
    "description": "Write, run, understand your errors and debug step by step in Go, Python, C++ and Rust, in English or Spanish. Free, open source and made in Peru.",
    "manualTitle": "VizcachaIDE manual: install, run and debug",
    "manualDescription": "A short guide to install VizcachaIDE, create a Go, Python, C++ or Rust project, run, understand errors, debug, use packages and the terminal, keyboard shortcuts and troubleshooting."
  },

  hero: {
    "badge": "Version 2.6.0 · Free and open source",
    "h1": "An IDE to learn to program in Go, Python, C++ and Rust",
    "sub": "Write your program, run it with one button, understand why it fails and watch it work step by step.",
    "ctaPrimary": "Download",
    "ctaSecondary": "View the source",
    "note": "Inspired by Thonny, the IDE thousands of people use to learn Python.",
    "logoAlt": "VizcachaIDE by Codeplai logo: a vizcacha wearing headphones and code-display goggles",
    "shotAlt": "VizcachaIDE running a Go program: the editor on top and the program output below",
    "shotCaption": "Press Run (F5) and see your program output right away. It works the same in all four languages."
  },

  audience: {
    "eyebrow": "Who it is for",
    "title": "For anyone who wants to learn to program without fighting the setup",
    "items": [
      {
        "t": "Students",
        "d": "Taking their first steps in programming with Go, Python, C++ or Rust."
      },
      {
        "t": "Teachers",
        "d": "Who need a simple tool for the classroom, available in Spanish and English and with no complicated setup."
      },
      {
        "t": "Anyone",
        "d": "Who wants to learn a language without first fighting terminals, environment variables and extensions."
      }
    ]
  },

  langs: {
    "id": "languages",
    "eyebrow": "Four languages",
    "title": "Go, Python, C++ and Rust, with the same experience",
    "lead": "In all of them you press **F5** to run, type in **Output** when the program asks for input, and the **Assistant** explains common errors in English or Spanish. You choose which ones to work with the first time you open the IDE.",
    "items": [
      {
        "name": "Go",
        "tools": "Delve · gopls · gofmt",
        "points": [
          "The Assistant explains **25** common errors.",
          "Debugger (Delve), code completion (gopls) and format on save (gofmt).",
          "An interactive console to try ideas without creating a file.",
          "Packages with `go get`; projects use `go.mod`."
        ]
      },
      {
        "name": "Python",
        "tools": "debugpy · python-lsp-server · ruff",
        "points": [
          "The Assistant explains about **30** common errors (NameError, IndentationError, TypeError…).",
          "Debugger (debugpy) with keyboard input in Output, code completion and format on save (ruff).",
          "A Python console (`>>>`) that remembers your variables.",
          "Packages with pip, searchable by name on PyPI."
        ]
      },
      {
        "name": "C++",
        "tools": "clang · lldb-dap · clangd · clang-format",
        "points": [
          "The Assistant explains **27** common errors, with GCC and Clang, and names crashes (\"Segmentation fault\").",
          "Debugger (lldb-dap) with keyboard input in Output, code completion (clangd) and format on save (clang-format).",
          "Projects use CMake and Ninja.",
          "Libraries from vcpkg, searchable by name."
        ]
      },
      {
        "name": "Rust",
        "tools": "rustc · cargo · rust-analyzer · rustfmt",
        "points": [
          "The Assistant explains about **45** errors, including ownership and borrowing ones, and panics at the line of your code.",
          "Debugger (lldb-dap) with keyboard input in Output, code completion (rust-analyzer) and format on save (rustfmt).",
          "clippy advice after a run.",
          "Packages with Cargo, searchable by name on crates.io."
        ]
      }
    ],
    "note": "Also: inline hints with the types the language infers (inlay hints) and an integrated terminal where `go`, `python`, `clang++` and `cargo` work exactly as with F5.",
    "shotAlts": {
      "go": "VizcachaIDE running a Go program",
      "python": "VizcachaIDE running a Python program",
      "cpp": "VizcachaIDE running a C++ program",
      "rust": "VizcachaIDE running a Rust program"
    }
  },

  features: {
    "eyebrow": "What you can do",
    "title": "Everything you need to learn, in a single window",
    "more": "See details",
    "alsoTitle": "And also",
    "run": {
      "t": "Write and run",
      "s": "Press Run (F5) and see the output right away, with keyboard input, multi-file projects and formatting on save.",
      "items": [
        "Press **Run (F5)** and see your program output right away, in Go, Python, C++ or Rust.",
        "Type in **Output** when your program asks for keyboard input (`input()`, `std::cin`, `read_line`, `fmt.Scan`…).",
        "Pass arguments to your program and work with multi-file projects (`go.mod`, CMake, Cargo).",
        "Your code is tidied up when you save: gofmt, ruff, clang-format or rustfmt, depending on the language.",
        "**Stop** first sends your program a Ctrl+C, so its `defer`s and signal handlers run, and only then ends it.",
        "The output understands **ANSI colors** and progress bars redrawn with `\\r`.",
        "Right-click **Output**, **Problems** and **Console**: copy, copy all, paste, select all and clear."
      ]
    },
    "errors": {
      "t": "Understand your errors",
      "s": "When something fails, the Assistant explains what happened and how to fix it, in your language.",
      "items": [
        "When something fails, the **Assistant** explains **what happened and how to fix it**, in your language: about 25 Go errors, 30 Python, 27 C++ and 45 Rust.",
        "For Rust it explains ownership and borrowing (a moved value, two mutable borrows…) with a tiny example.",
        "It names crashes (\"Segmentation fault\", stack overflow) and panics at the line of your code.",
        "The original message is always in sight, with a button to search it online. That way you learn to read real errors.",
        "Errors are underlined **as you type**, before you run."
      ],
      "alt": "The VizcachaIDE Assistant explaining a Go error in English",
      "caption": "The Assistant explains what happened and how to fix it (here, a Go error)."
    },
    "debug": {
      "t": "Watch your program step by step",
      "s": "Set a breakpoint, step line by line and watch your variables change.",
      "items": [
        "Click next to a line number to set a **breakpoint** and press **Debug (F6)**.",
        "Move on with plainly named buttons: **Step over**, **Step into**, **Step out**.",
        "See the value of your variables at each step. The one that just changed is highlighted, so you see what the last line did.",
        "Find out **how you got there** (the call stack) and what each goroutine or thread is doing.",
        "In Python, C++ and Rust you can **type on the keyboard while debugging**. It uses Delve, debugpy and lldb-dap."
      ],
      "alt": "The VizcachaIDE debugger showing calls as nested boxes, each with its arguments, for example factorial(n=3)",
      "caption": "Each call is a box inside the one that made it. \"You are here\" marks the current call."
    },
    "project": {
      "t": "Start a project in a minute",
      "s": "Pick a name, a language and a folder, and the project is ready to run with F5.",
      "items": [
        "**File → New project…** (Ctrl+Shift+N): pick a name, the language and the folder, and the IDE leaves it ready for F5.",
        "Every project starts with a program that asks your name and greets you: Go (`go.mod`), Python, C++ with CMake and vcpkg, or Rust with Cargo.",
        "In the **Packages** dialog you install and remove libraries for each language (`go get`, pip, vcpkg, cargo) and **search them by name**."
      ]
    },
    "terminal": {
      "t": "An integrated terminal",
      "s": "A real terminal in your folder, with the same tools F5 uses.",
      "items": [
        "The **Terminal** tab opens a real terminal in your folder, and you can have several at once.",
        "The IDE's own tools come first in `PATH`: `go`, `python`, `pip`, `clang++`, `cmake` and `cargo` work exactly as with F5.",
        "Copy and paste with Ctrl+Shift+C and Ctrl+Shift+V, and colors for the light and dark themes."
      ]
    },
    "console": {
      "t": "Try ideas in the console",
      "s": "Type a line, press Enter and see the result, without creating a file.",
      "items": [
        "It is the equivalent of Thonny's \"Shell\". In Go, type `x := 21`, then `x * 2` and you will see `42` right away, without creating a file (it uses an interpreter, yaegi).",
        "In Python, the `>>>` console remembers your variables from one line to the next.",
        "Common packages, like `strings` or `fmt`, are imported automatically in the Go console.",
        "Perfect for clearing up a small doubt without touching your program."
      ],
      "alt": "The VizcachaIDE interactive Go console: x := 21 is typed, then x * 2, and 42 appears",
      "caption": "The Go console: type, press Enter and see the result."
    },
    "files": {
      "t": "Your files and your project",
      "s": "A File menu like Thonny's, with the usual shortcuts. Anything you delete goes to the Recycle Bin.",
      "items": [
        "A **File menu** and New, Open and Save buttons, like in Thonny: New (Ctrl+N), Open (Ctrl+O), Open Folder, Open Recent, Save (Ctrl+S), Save As, Save All, Close (Ctrl+W) and Close Folder.",
        "In the **Files** panel, right-click: new file here, new folder, rename (F2), show in Explorer and copy the path.",
        "When you delete, the file **goes to the Recycle Bin**: it is never erased for good.",
        "Hide the side panels with **Ctrl+B** for more room for the editor.",
        "If an open file changes outside the IDE, it **reloads by itself** (if you have unsaved changes, it asks first)."
      ],
      "alt": "The VizcachaIDE File menu with New, Open, Open Folder, Open Recent, Save and Save As",
      "caption": "The File menu, with the usual shortcuts."
    },
    "fast": {
      "t": "Write faster",
      "s": "Autocomplete with documentation, parameter hints and go to definition with Ctrl+click.",
      "items": [
        "Smart code completion with the documentation of each function: gopls, python-lsp-server, clangd and rust-analyzer.",
        "Parameter help while you write a call, and the types the language infers, in grey inside the code.",
        "Ctrl+click to jump to where a function is defined.",
        "Find and replace, go to line, zoom, light or dark theme.",
        "**Automatic updates**: VizcachaIDE tells you when there is a new version and checks its download with SHA-256 before offering it."
      ]
    }
  },

  learning: {
    "eyebrow": "Designed for learning",
    "title": "Fewer buttons, more clarity",
    "items": [
      {
        "t": "English and Spanish",
        "d": "Across the whole interface and in the error explanations. It detects your system language and you can change it any time."
      },
      {
        "t": "One main button",
        "d": "Run is the most visible thing in the window; everything else shows up when you need it."
      },
      {
        "t": "Very readable type",
        "d": "It uses Atkinson Hyperlegible, a typeface designed so characters like 0 and O, or 1, l and I, are not confused."
      },
      {
        "t": "Everything included",
        "d": "The full version ships Go, Python, C++ and Rust with their debuggers and code helpers: install VizcachaIDE and you can start coding."
      }
    ],
    "shotAlt": "VizcachaIDE in the dark theme: the editor, the output and the Assistant",
    "shotCaption": "Light or dark theme, whichever is easier on your eyes."
  },

  download: {
    "eyebrow": "Download",
    "title": "Download VizcachaIDE",
    "lead": "It is free and open source (MIT license). Choose the full version if you want to start without installing anything else.",
    "version": "Version 2.6.0",
    "rows": [
      {
        "name": "Full",
        "tag": "Recommended to start",
        "includes": "VizcachaIDE + Go + Python + C++ + Rust, with debuggers, code helpers and formatters. The C++ compiler is bundled on Windows only.",
        "who": "If you have no language installed, or want to try them all.",
        "files": [
          "The largest one: several hundred MB."
        ]
      },
      {
        "name": "Go only (full-go)",
        "tag": null,
        "includes": "VizcachaIDE + Go + Delve + gopls",
        "who": "If you will only use Go.",
        "files": [
          "About 61 MB (Windows installer)."
        ]
      },
      {
        "name": "Python only (full-python)",
        "tag": null,
        "includes": "VizcachaIDE + Python with its tools",
        "who": "If you will only use Python.",
        "files": [
          "About 45 MB (Windows installer)."
        ]
      },
      {
        "name": "C++ only (full-cpp)",
        "tag": null,
        "includes": "VizcachaIDE + C++ compiler, debugger and code helpers (clang)",
        "who": "If you will only use C++. Windows only.",
        "files": [
          "About 200 MB (Windows installer)."
        ]
      },
      {
        "name": "Lite",
        "tag": null,
        "includes": "VizcachaIDE only",
        "who": "If you already have your languages installed: it uses what it finds on your computer.",
        "files": [
          "About 10 MB."
        ]
      }
    ],
    "systemsTitle": "Systems",
    "systems": [
      "**Windows 10 and 11 (x64):** installer with no administrator rights, and a portable version.",
      "**macOS** (Intel and Apple Silicon): `.dmg` disk image.",
      "**Linux:** `.AppImage` or `.tar.gz`.",
      "The macOS and Linux builds are **new**: they are built and tested automatically on all three systems, but have had less real-world use than Windows. If you hit a problem, tell us."
    ],
    "webview": "The Windows portable version needs nothing else installed except WebView2, which comes with Windows 11 and almost every updated Windows 10.",
    "cardLink": "Download on GitHub",
    "button": "Go to the downloads on GitHub",
    "buttonNote": "This opens the project's releases page. Download the file that matches your system and your choice.",
    "manualLink": "How to install and use it: the manual"
  },

  safety: {
    id: 'a-new-project',
    eyebrow: 'A new project',
    title: 'Why Windows may warn you, and why it is safe',
    intro: [
      'VizcachaIDE is a **new, independent project**, made in Peru by [Codeplai Games](https://codeplai.pe). Its installers are **not digitally signed yet**, so the first time you open one, Windows SmartScreen may show *"Windows protected your PC"* and say the publisher is unknown.',
      'This warning appears for every new program without a signature. It does not mean that a virus was found.',
    ],
    stepsTitle: 'To continue',
    steps: [
      'On the "Windows protected your PC" warning, click **More info**.',
      'Click **Run anyway**.',
    ],
    macNote: 'On macOS the app is not notarized yet: right-click it and choose **Open**. Each release includes `SHA256SUMS` files to check your download.',
    proofTitle: "You don't have to take our word for it",
    proofs: [
      {
        t: 'The source code is public',
        d: 'Every line is at [github.com/codeplai/VizcachaIDE](https://github.com/codeplai/VizcachaIDE), under the MIT license. You can read it, and you can build it yourself.',
      },
      {
        t: 'You can check your download',
        d: 'Each release includes a `SHA256SUMS` file. In PowerShell, `Get-FileHash .\\VizcachaIDE-…zip` must print the same value that is in that file.',
      },
      {
        t: 'The bundled tools are the official ones',
        d: 'Go, Python, C++ (LLVM), Rust and their tools are downloaded from their official sources, and the packaging script checks each download against a fixed SHA-256.',
      },
    ],
    signature:
      '**About the signature:** we plan to acquire a code-signing certificate as the project grows, so that Windows recognizes the publisher and the warning goes away. Until then, the public code and the checksums are how you can verify what you install.',
  },

  status: {
    "eyebrow": "Project status",
    "title": "Version 2.6.0: ready to use",
    "lead": "VizcachaIDE is already a complete tool to get started in four languages, and it keeps improving with every version.",
    "items": [
      {
        "t": "Four languages",
        "d": "Go, Python, C++ and Rust with the same experience: run, understand errors, debug, complete and format."
      },
      {
        "t": "Updates itself",
        "d": "Once a day it looks for a new version and checks its download with SHA-256. You decide when to install it."
      }
    ]
  },

  peru: {
    eyebrow: 'Made in Peru',
    title: 'A Codeplai Games project',
    p1: 'VizcachaIDE is a project by [Codeplai Games](https://codeplai.pe), created by Marks Calderon, CEO of Codeplai.',
    story: [
      'At Codeplai we build with **Go**, a simple, fast and well-designed language, and that is where we started. Today VizcachaIDE also keeps company with people learning **Python, C++ and Rust**: a friendly tool so nobody gives up before writing a first program because of a terminal or an installation.',
      'The name comes from the **vizcacha**, the Andean rodent from Peru that always looks relaxed, sunning itself on the rocks. That is the spirit: **learn to program calmly**, without fighting terminals and configuration.',
      'We were inspired by **Thonny**, the IDE that lets thousands of people learn Python without stress: few things on screen, everything in sight and errors that explain themselves.',
    ],
    contactTitle: 'Contact',
    p2: 'Have ideas, found a bug, or want to use it in your class? Write to us at [hola@codeplai.pe](mailto:hola@codeplai.pe) or open an issue on GitHub.',
    issue: 'Open an issue',
    visit: 'Visit Codeplai',
  },

  footer: {
    line: 'An IDE to learn to program in Go, Python, C++ and Rust. Free and open source (MIT).',
    navTitle: 'Project',
    moreTitle: 'Contact',
    parent: 'A Codeplai Games project',
    license:
      'VizcachaIDE is distributed under the MIT license and includes Go, Python, C++ (LLVM), Rust and their tools, each with its own open source license.',
  },

  manual: {
    "eyebrow": "Manual",
    "title": "VizcachaIDE manual",
    "lead": "A short guide to install, create your first Go, Python, C++ or Rust project, understand errors and debug. If something is unclear, write to hola@codeplai.pe.",
    "tocTitle": "On this page",
    "sections": [
      {
        "id": "install",
        "t": "Install",
        "blocks": [
          {
            "p": "Download the installer from the [releases page](https://github.com/codeplai/VizcachaIDE/releases). There are several variants:"
          },
          {
            "ul": [
              "**Full:** VizcachaIDE + Go + Python + C++ + Rust, each with its debugger, code helper and formatter. Choose it if you have nothing installed. The C++ compiler is bundled on Windows only; on macOS and Linux the system one is used.",
              "**One language:** `full-go`, `full-python` and `full-cpp` (the last one for Windows only) ship VizcachaIDE with the tools of a single language, and are much smaller.",
              "**Lite:** VizcachaIDE only (about 10 MB). It uses the languages you already have installed."
            ]
          },
          {
            "h": "Windows 10 and 11 (x64)"
          },
          {
            "ul": [
              "**Installer (setup.exe):** installs for your user only, with no administrator rights.",
              "**Portable (.zip):** unzip it into a folder and open VizcachaIDE. It needs no installation or extra DLLs, only WebView2 (already part of Windows 11 and almost every updated Windows 10)."
            ]
          },
          {
            "p": "Because the installer is not digitally signed yet, Windows may show *\"Windows protected your PC\"*. Click **More info → Run anyway**. [Here is why it is safe](/en#a-new-project)."
          },
          {
            "h": "macOS"
          },
          {
            "p": "There are `.dmg` disk images for Intel and for Apple Silicon. Open the image and drag VizcachaIDE to Applications. The app is not notarized yet: right-click it and choose **Open**."
          },
          {
            "h": "Linux"
          },
          {
            "p": "Download the `.AppImage`, make it executable (`chmod +x VizcachaIDE-*.AppImage`) and run it; there is also a `.tar.gz`."
          },
          {
            "p": "The macOS and Linux builds are new: they are built and tested automatically, but have had less real-world use than Windows. If something fails, tell us."
          },
          {
            "h": "Check your download"
          },
          {
            "p": "Each release includes `SHA256SUMS` files. In PowerShell, run `Get-FileHash .\\VizcachaIDE-…exe`: the value must match the one in the file."
          }
        ]
      },
      {
        "id": "first-program",
        "t": "Your first time",
        "blocks": [
          {
            "p": "The first time you open VizcachaIDE, a wizard asks **which languages you will use** (Go, Python, C++, Rust). Only those show up in the menus; you can change it later in Settings → General. The interface uses your system language (English or Spanish)."
          },
          {
            "h": "Create a project"
          },
          {
            "ol": [
              "Choose **File → New project…** (Ctrl+Shift+N).",
              "Type a name, choose the language and the folder where it will be created (you always choose it).",
              "VizcachaIDE writes the project and opens it. Press **F5**: the program asks your name and greets you."
            ]
          },
          {
            "p": "What each language creates:"
          },
          {
            "ul": [
              "**Go:** `go.mod` and `main.go`.",
              "**Python:** `main.py`.",
              "**C++:** a CMake project (`CMakeLists.txt`, `CMakePresets.json`, `vcpkg.json`, `main.cpp` and `.clang-format`).",
              "**Rust:** a Cargo project (`Cargo.toml`, `src/main.rs` and `.gitignore`)."
            ]
          },
          {
            "p": "You can also start with a loose file: **File → New** (Ctrl+N) creates a file in the language you are working in. For example, in Go:"
          },
          {
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(\"Hello, VizcachaIDE!\")\n}"
          },
          {
            "p": "Write the program, press **F5** to run it (the output shows in the bottom panel) and save with **Ctrl+S**."
          }
        ]
      },
      {
        "id": "languages",
        "t": "The four languages and their packages",
        "blocks": [
          {
            "p": "The four languages work the same way: F5 runs, F6 debugs and the Assistant explains errors. What changes are the tools behind them:"
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
                "rustc and cargo · lldb-dap · rust-analyzer · rustfmt"
              ]
            ],
            "head": [
              "Language",
              "Debug · Code help · Format"
            ]
          },
          {
            "h": "Packages"
          },
          {
            "p": "In the **Packages** dialog (**More** menu) you install, remove and list the libraries of the language you have open. While you type a name, a list of matches shows with their version and description, and you choose the one to install. Without an internet connection the dialog says so and still installs an exact name."
          },
          {
            "ul": [
              "**Go:** `go mod init`, `go get` and `go mod tidy`; search uses pkg.go.dev.",
              "**Python:** pip; search uses PyPI.",
              "**C++:** vcpkg. VizcachaIDE edits `vcpkg.json` and the marked block of `CMakeLists.txt`, so you only write the `#include`. The first install of a library compiles it and takes a few minutes; later ones come from a cache.",
              "**Rust:** Cargo (`cargo add` and `cargo remove`); search uses crates.io."
            ]
          },
          {
            "h": "C++ with CMake"
          },
          {
            "p": "Every `.cpp` in the folder is part of the program, so to add a file you just create it. If you open a folder without a `CMakeLists.txt`, VizcachaIDE creates one the first time you run, build or debug. F5, Build, Debug and Problems use CMake and Ninja."
          },
          {
            "h": "Which tools are used"
          },
          {
            "p": "Settings → Tools shows, per language, what it found and its version; if something is missing, it tells you what to install and gives you the command to copy. Python must be 3.10 or newer. For Rust, the IDE can show you how to install it with rustup if you do not have it (the full version already includes it)."
          }
        ]
      },
      {
        "id": "files",
        "t": "Files and projects",
        "blocks": [
          {
            "ul": [
              "**File menu:** New (Ctrl+N), New project (Ctrl+Shift+N), Open file (Ctrl+O), Open Folder, Open Recent, Save (Ctrl+S), Save As (Ctrl+Shift+S), Save All, Close (Ctrl+W) and Close Folder.",
              "**Save As** also works for a new file that has not been saved yet.",
              "**Close Folder** (the ✕ next to Refresh in the Files panel, a right-click on the folder, or the File menu) closes its tabs (asking about unsaved changes) and is not reopened at the next start."
            ]
          },
          {
            "h": "The Files panel"
          },
          {
            "p": "Right-click a file or folder to create a file or folder there, rename (F2), delete, show in Explorer or copy the path. **Delete sends the item to the Recycle Bin**: it is never erased permanently. The folders that build tools generate (`build/`, `target/`) are shown dimmed."
          },
          {
            "h": "More room for the editor"
          },
          {
            "p": "Hide the side panel and the Assistant with **Ctrl+B** and **Ctrl+Alt+B**, with the two buttons in the title bar, or by clicking the active icon on the side rail. The Assistant opens again when you start debugging, and while it is hidden its button shows the number of problems."
          },
          {
            "h": "Changes outside the IDE"
          },
          {
            "p": "If an open file changes outside VizcachaIDE, it reloads automatically. If you had unsaved changes, it asks you first. The window remembers its size and position."
          }
        ]
      },
      {
        "id": "console",
        "t": "Consoles",
        "blocks": [
          {
            "p": "For Go and Python there is a **Console** tab, like the \"Shell\" in Thonny: it lets you try ideas without creating a file."
          },
          {
            "ul": [
              "**Go:** it uses an interpreter (yaegi), so the result shows up right away. Common packages, like `strings`, are imported automatically.",
              "**Python:** a `>>>` console that remembers variables from one entry to the next."
            ]
          },
          {
            "code": "// Go console\nx := 21\nx * 2\n// 42\nstrings.ToUpper(\"hello\")\n// \"HELLO\""
          },
          {
            "p": "Right-click the console to copy, paste or clear."
          }
        ]
      },
      {
        "id": "terminal",
        "t": "Integrated terminal",
        "blocks": [
          {
            "p": "The **Terminal** tab of the bottom panel opens a real terminal (PowerShell on Windows, your shell elsewhere) inside the open folder. Open it with **Ctrl + the key left of 1** (whatever it prints) or **Ctrl+Ñ** if your keyboard has an Ñ."
          },
          {
            "ul": [
              "The IDE's own tools come first in `PATH`: `go`, `python`, `pip`, `clang++`, `cmake`, `ninja` and `cargo` work exactly as with F5. In C++, `cmake --preset debug` works too.",
              "You can open several terminals (*New terminal*) and close one with *Kill terminal*.",
              "Copy: **Ctrl+Shift+C**. Paste: **Ctrl+Shift+V** (or right-click)."
            ]
          }
        ]
      },
      {
        "id": "run",
        "t": "Run your program",
        "blocks": [
          {
            "ul": [
              "**Run (F5):** builds and runs your program. **Stop (Shift+F5)** ends it whenever you want. **More → Build** compiles without running.",
              "If your program asks for keyboard input (`input()`, `std::cin`, `read_line`, `fmt.Scan`…), type in **Output** and press Enter.",
              "You can pass arguments to your program and open multi-file projects (`go.mod`, CMake, Cargo; in a Cargo workspace, the member of the open file runs).",
              "On save, your code is tidied with the language formatter: gofmt, ruff, clang-format (4 spaces; a teacher's `.clang-format` wins) or rustfmt.",
              "If a C++ program dies from a serious error, VizcachaIDE names it (\"Segmentation fault\", \"Stack overflow\"…) and suggests debugging with F6 to see the line.",
              "**Stop** first sends an interrupt (like Ctrl+C) so your program's `defer`s and signal handlers run; if it does not respond, it ends it.",
              "The output shows ANSI colors and progress bars redrawn with `\\r`. Right-click Output, Problems or Console: copy, copy all, paste, select all and clear."
            ]
          }
        ]
      },
      {
        "id": "errors",
        "t": "Understand errors",
        "blocks": [
          {
            "p": "When something fails, the **Assistant** (right-hand panel) explains what happened and how to fix it, in English or Spanish. It recognizes the most common beginner errors:"
          },
          {
            "ul": [
              "**Go (25):** a declared and unused variable, an extra import, mismatched types, an index out of range, an uninitialized map…",
              "**Python (about 30):** `NameError`, `IndentationError`, `TypeError`, a missing colon, an unclosed bracket, `ZeroDivisionError`…",
              "**C++ (27):** undeclared names (also `cout` without `#include <iostream>` or `std::`), a missing `;` or `}`, wrong arguments, linker errors (`undefined reference`), crashes and exceptions; with GCC and with Clang.",
              "**Rust (about 45):** ownership and borrowing (a moved value, two mutable borrows, a reference that does not live long enough…) with a tiny example, mismatched types, unknown names and imports, a missing `;` or `}`, panics (index out of bounds, `unwrap` on `None` or `Err`, overflow, division by zero…) at the line of your code, and clippy advice."
            ]
          },
          {
            "ul": [
              "Errors are underlined as you type, before you run.",
              "The original message is always shown, with a button to search it online. That way you learn to read real errors.",
              "In Go, if your program compiles but `go vet` finds something suspicious (for example, a `Printf` whose format does not match its values), the Assistant explains it after you run."
            ]
          },
          {
            "p": "A good exercise: make a mistake on purpose, press F5 and read the Assistant's explanation."
          }
        ]
      },
      {
        "id": "debug",
        "t": "Debug step by step",
        "blocks": [
          {
            "ol": [
              "Save your file (debugging needs a saved file).",
              "Click next to a line number to set a **breakpoint**. You can set them in any file of the project.",
              "Press **Debug (F6)**. The program stops on that line.",
              "Move on with **Step over (F7)**, **Step into (F8)** or **Step out (F9)**.",
              "Watch your variables at each step: the one that just changed is highlighted. The calls panel shows each function as a box inside the one that called it, with its arguments (for example `factorial(n=3)`): that way recursion is visible. \"You are here\" marks the current call.",
              "**Continue (Shift+F6)** runs to the next breakpoint; **Stop debugging (Shift+F5)** ends the session."
            ]
          },
          {
            "p": "With **Run to cursor (Ctrl+F10)** the program runs up to the line where the cursor is."
          },
          {
            "p": "The debugger is Delve for Go, debugpy for Python and lldb-dap for C++ and Rust. In Python, C++ and Rust you can **type on the keyboard in Output while debugging**. If a program dies from a serious error or a panic, debugging stops on the right line. What the program printed is kept after the session ends."
          }
        ]
      },
      {
        "id": "updates",
        "t": "Updates",
        "blocks": [
          {
            "p": "Once a day, when it opens, VizcachaIDE looks for a new version on its [GitHub releases](https://github.com/codeplai/VizcachaIDE/releases). If there is one, it downloads in the background the file that matches your installation (same variant and system) and checks its **SHA-256** against that release's checksum file."
          },
          {
            "ul": [
              "A notice offers **Install and restart** (installed Windows copy) or **Show the file** (portable, macOS and Linux).",
              "In **Settings → Updates** you see the version, the progress and the last check; you can also press **Check now** or turn the automatic check off. The **More** menu has **Check for updates…**."
            ]
          }
        ]
      },
      {
        "id": "shortcuts",
        "t": "Keyboard shortcuts",
        "blocks": [
          {
            "table": [
              [
                "Run / Stop",
                "F5 / Shift+F5"
              ],
              [
                "Debug / Continue",
                "F6 / Shift+F6"
              ],
              [
                "Step over / into / out",
                "F7 / F8 / F9"
              ],
              [
                "Run to cursor",
                "Ctrl+F10"
              ],
              [
                "New file / Open",
                "Ctrl+N / Ctrl+O"
              ],
              [
                "New project",
                "Ctrl+Shift+N"
              ],
              [
                "Save / Save As",
                "Ctrl+S / Ctrl+Shift+S"
              ],
              [
                "Close tab",
                "Ctrl+W"
              ],
              [
                "Hide / show the side panel",
                "Ctrl+B"
              ],
              [
                "Hide / show the Assistant",
                "Ctrl+Alt+B"
              ],
              [
                "Terminal",
                "Ctrl + the key left of 1 (or Ctrl+Ñ)"
              ],
              [
                "Copy / paste in the terminal",
                "Ctrl+Shift+C / Ctrl+Shift+V"
              ],
              [
                "Format code",
                "Ctrl+Shift+F"
              ],
              [
                "Find",
                "Ctrl+F"
              ],
              [
                "Go to line",
                "Ctrl+G"
              ],
              [
                "Go to definition",
                "F12 or Ctrl+click"
              ],
              [
                "Autocomplete",
                "Ctrl+Space"
              ],
              [
                "Zoom: in / out / reset",
                "Ctrl + / Ctrl − / Ctrl 0"
              ]
            ],
            "head": [
              "Action",
              "Shortcut"
            ],
            "note": "On macOS, use ⌘ instead of Ctrl."
          }
        ]
      },
      {
        "id": "troubleshooting",
        "t": "Troubleshooting",
        "blocks": [
          {
            "h": "Windows shows \"Windows protected your PC\""
          },
          {
            "p": "It is normal with new programs that have no digital signature. Click **More info → Run anyway**. You can check your download with `SHA256SUMS` and review the [source code](https://github.com/codeplai/VizcachaIDE)."
          },
          {
            "h": "The window does not open or is blank (WebView2)"
          },
          {
            "p": "VizcachaIDE uses WebView2, which comes with Windows 11 and almost every updated Windows 10. If your computer does not have it, install the \"WebView2 Runtime\" from Microsoft's site and open VizcachaIDE again. Updating Windows usually fixes it too."
          },
          {
            "h": "It says a tool is missing (Go, Python, a C++ compiler or Rust)"
          },
          {
            "p": "With the **lite** version or a one-language variant, you need the language you want to use installed. The notice tells you which one is missing, with a button to **Install** or **Copy the command**, and **Choose in Settings** if you already have it elsewhere. The **full** version already includes everything (the C++ compiler on Windows only: on macOS use `xcode-select --install` and on Linux install it with `apt`)."
          },
          {
            "h": "The debugger or autocomplete do not work"
          },
          {
            "p": "Check Settings → Tools: it shows what is missing for that language. With the lite version, for Go you need Delve and gopls:"
          },
          {
            "code": "go install github.com/go-delve/delve/cmd/dlv@latest\ngo install golang.org/x/tools/gopls@latest"
          },
          {
            "h": "You found a bug or have an idea"
          },
          {
            "p": "Open an [issue on GitHub](https://github.com/codeplai/VizcachaIDE/issues) or write to [hola@codeplai.pe](mailto:hola@codeplai.pe)."
          }
        ]
      }
    ]
  },
};
