type Language = {
  [key: string]: string;
};
type Theme = {
  background: string;
  theme: string;
};
type Themes = {
  [key: string]: Theme;
};

type Font = {
  name: string;
  src: string;
};
type Fonts = {
  [key: string]: Font;
};
type CodeSnippets = {
  language: string;
  code: string;
};
type FontSize = {
  [key: string]: number;
};
export const languages: Language = {
  bash: "Bash",
  c: "C",
  "c++": "C++",
  "c#": "C#",
  clojure: "Clojure",
  crystal: "Crystal",
  css: "CSS",
  diff: "Diff",
  dockerfile: "Docker",
  elm: "Elm",
  elixir: "Elixir",
  erlang: "Erlang",
  graphql: "GraphQL",
  go: "Go",
  haskell: "Haskell",
  html: "HTML",
  java: "Java",
  javascript: "JavaScript",
  json: "JSON",
  kotlin: "Kotlin",
  lisp: "Lisp",
  lua: "Lua",
  markdown: "Markdown",
  matlab: "MATLAB",
  pascal: "Pascal",
  plaintext: "Plaintext",
  powershell: "Powershell",
  php: "PHP",
  python: "Python",
  ruby: "Ruby",
  rust: "Rust",
  scala: "Scala",
  scss: "SCSS",
  sql: "SQL",
  swift: "Swift",
  toml: "TOML",
  typescript: "TypeScript",
  xml: "XML",
  yaml: "YAML",
};

export const themes: Themes = {
  crimson: {
    background: "bg-gradient-to-br from-red-400 to-red-800",
    theme:
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/atom-one-dark.min.css",
  },
  raindrop: {
    background: "bg-gradient-to-br from-blue-300 to-blue-700",
    theme:
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/base16/material-darker.min.css",
  },
  candy: {
    background: "bg-gradient-to-br to-purple-400 from-pink-300",
    theme:
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/base16/chalk.min.css",
  },
  breeze: {
    background: "bg-gradient-to-br from-pink-500 to-indigo-600",
    theme:
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/github-dark.min.css",
  },
  sunset: {
    background: "bg-gradient-to-br from-amber-200 to-orange-500",
    theme:
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/monokai-sublime.min.css",
  },
  midnight: {
    background: "bg-gradient-to-br from-teal-400 to-slate-900",
    theme:
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/tokyo-night-dark.min.css",
  },
  sand: {
    background: "bg-gradient-to-br   from-[#eecbba] to-[#af8856]", // no preset class similar to this color in tailwind css
    theme:
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/base16/zenburn.min.css",
  },
  flamingo: {
    background: "bg-gradient-to-br from-pink-400 to-pink-600",
    theme:
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/panda-syntax-dark.min.css",
  },
  mono: {
    background: "bg-gradient-to-br from-neutral-700 to-neutral-900",

    theme:
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/base16/black-metal-dark-funeral.min.css",
  },
  ice: {
    background: "bg-gradient-to-br from-rose-100 to-teal-100",
    theme:
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/base16/ashes.min.css",
  },
  forest: {
    background: "bg-gradient-to-br  from-[#4c7153] to-[#213223]",
    theme:
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/base16/gruvbox-dark-medium.min.css",
  },
};

export const fonts: Fonts = {
  jetBrainsMono: {
    name: "JetBrains Mono",
    src: "https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap",
  },
  inconsolata: {
    name: "Inconsolata",
    src: "https://fonts.googleapis.com/css2?family=Inconsolata&display=swap",
  },
  firaCode: {
    name: "Fira Code",
    src: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
  },
  cascadiaCode: {
    name: "Cascadia Code",
    src: "https://cdn.jsdelivr.net/npm/@fontsource/cascadia-code@4.2.1/index.min.css",
  },
  victorMono: {
    name: "Victor Mono",
    src: "https://fonts.googleapis.com/css2?family=Victor+Mono&display=swap",
  },
  sourceCodePro: {
    name: "Source Code Pro",
    src: "https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap",
  },
  ibmPlexMono: {
    name: "IBM Plex Mono",
    src: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap",
  },
  robotoMono: {
    name: "Roboto Mono",
    src: "https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap",
  },
  ubuntuMono: {
    name: "Ubuntu Mono",
    src: "https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap",
  },
  spaceMono: {
    name: "Space Mono",
    src: "https://fonts.googleapis.com/css2?family=Space+Mono&display=swap",
  },
  courierPrime: {
    name: "Courier Prime",
    src: "https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap",
  },
  anonymousPro: {
    name: "Anonymous Pro",
    src: "https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap",
  },
  oxygenMono: {
    name: "Oxygen Mono",
    src: "https://fonts.googleapis.com/css2?family=Oxygen+Mono&display=swap",
  },
  redHatMono: {
    name: "Red Hat Mono",
    src: "https://fonts.googleapis.com/css2?family=Red+Hat+Mono&display=swap",
  },
  notoSansMono: {
    name: "Noto Sans Mono",
    src: "https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap",
  },
  dmMono: {
    name: "DM Mono",
    src: "https://fonts.googleapis.com/css2?family=DM+Mono&display=swap",
  },
  overpassMono: {
    name: "Overpass Mono",
    src: "https://fonts.googleapis.com/css2?family=Overpass+Mono&display=swap",
  },
  redditMono: {
    name: "Reddit Mono",
    src: "https://fonts.googleapis.com/css2?family=Reddit+Display&display=swap",
  },
  fargmentMono: {
    name: "Fargment Mono",
    src: "https://fonts.googleapis.com/css2?family=Fargment+Mono&display=swap",
  },
};

export const codeSnippets: CodeSnippets[] = [
  {
    language: "python",
    code: "def is_prime(n):\n  if n <= 1:\n    return False\n  for i in range(2, int(n ** 0.5) + 1):\n    if n % i == 0:\n      return False\n  return True",
  },
  {
    language: "javascript",
    code: "const fibonacci = (n) => {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n};\nconsole.log(fibonacci(10));",
  },
  {
    language: "java",
    code: "import java.util.stream.IntStream;\n\nclass StreamExample {\n  public static void main(String[] args) {\n    IntStream.rangeClosed(1, 5).forEach(System.out::println);\n  }\n}",
  },
  {
    language: "c",
    code: '#include <stdio.h>\n\nint main() {\n  for (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) {\n      printf("%d\\n", i);\n    }\n  }\n  return 0;\n}',
  },
  {
    language: "ruby",
    code: 'class Animal\n  attr_reader :name\n\n  def initialize(name)\n    @name = name\n  end\n\n  def speak\n    raise NotImplementedError, "Subclasses must implement this method"\n  end\nend',
  },
  {
    language: "swift",
    code: "enum Compass {\n  case north, south, east, west\n}\nlet currentDirection = Compass.east\nprint(currentDirection)",
  },
  {
    language: "c#",
    code: "using System;\nusing System.Linq;\n\nclass LINQExample {\n  static void Main() {\n    int[] numbers = { 3, 9, 2, 8, 6 };\n    var evenNumbers = numbers.Where(n => n % 2 == 0);\n    foreach (var num in evenNumbers) {\n      Console.WriteLine(num);\n    }\n  }\n}",
  },
  {
    language: "php",
    code: "<?php\n$fruits = ['apple', 'banana', 'cherry'];\n$uppercased = array_map('strtoupper', $fruits);\nprint_r($uppercased);\n?>",
  },
  {
    language: "go",
    code: 'package main\n\nimport (\n  "fmt"\n  "math"\n)\n\nfunc main() {\n  x := 4.0\n  y := math.Sqrt(x)\n  fmt.Printf("Square root of %.2f is %.2f\\n", x, y)\n}',
  },
  {
    language: "rust",
    code: 'fn main() {\n  let mut count = 0;\n  loop {\n    println!("Count: {}", count);\n    count += 1;\n    if count > 5 {\n      break;\n    }\n  }\n}',
  },
  {
    language: "html",
    code: '<div class="container">\n  <h1>Hello, World!</h1>\n  <p>Welcome to my website.</p>\n</div>',
  },

  {
    language: "ruby",
    code: '5.times do |i|\n  puts "Ruby iteration #{i + 1}"\nend',
  },

  {
    language: "scala",
    code: 'object HelloWorld {\n  def main(args: Array[String]): Unit = {\n    println("Hello, Scala!")\n  }\n}',
  },

  {
    language: "bash",
    code: '#!/bin/bash\nfor i in {1..5}; do\n  echo "Iteration $i"\ndone',
  },
];

export const fontSize: FontSize = {
  small: 12,
  medium: 14,
  large: 16,
  extraLarge: 18,
  huge: 20,
};
