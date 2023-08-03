[
    // Math mode
    {trigger: "mk", replacement: "$$0$", options: "tA"},
    {trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw"},
    {trigger: "beg", replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "mA"},


    // Dashes
    // {trigger: "--", replacement: "–", options: "tA"},
    // {trigger: "–-", replacement: "—", options: "tA"},
    // {trigger: "—-", replacement: "---", options: "tA"},


    // Custom commands
    {trigger: "a  ", replacement: "{\\color{$(rubineRed)}{a}}", options: "mA" },
    {trigger: "A  ", replacement: "{\\color{#58D68D}{A}}", options: "mA" },
    {trigger: "Am  ", replacement: "{\\color{red}{A}}", options: "mA" },
    {trigger: "B  ", replacement: "{\\color{#3498DB}{B}}", options: "mA" },
    {trigger: "e  ", replacement: "{\\color{#F1948A}{e}}", options: "mA" },
    {trigger: "F  ", replacement: "{\\color{#280004}{F}}", options: "mA" },
    {trigger: "i  ", replacement: "{\\color{SeaGreen}{i}}", options: "mA" },
    {trigger: "J  ", replacement: "{\\color{#9280ff}{J}}", options: "mA" },
    {trigger: "k  ", replacement: "{\\color{yellow}{k}}", options: "mA" },
    {trigger: "K  ", replacement: "{\\color{skyblue}{K}}", options: "mA" },
    {trigger: "P  ", replacement: "{\\color{#34495E}{P}}", options: "mA" },
    {trigger: "Q  ", replacement: "{\\color{#B7950B}{Q}}", options: "mA" },
    {trigger: "s  ", replacement: "{\\color{orange}{s}}", options: "mA" },
    {trigger: "S  ", replacement: "{\\color{#ff80bf}{S}}", options: "mA" },
    {trigger: "t  ", replacement: "{\\color{limegreen}{t}}", options: "mA" },
    {trigger: "V  ", replacement: "{\\color{#69b4ff}{V}}", options: "mA" },
    {trigger: "W  ", replacement: "{\\color{#08A04B}{W}}", options: "mA" },
    {trigger: "X  ", replacement: "{\\color{#EB984E}{X}}", options: "mA" },
    {trigger: "Z  ", replacement: "{\\color{BlueViolet}{Z}}", options: "mA" },

    // Automatically convert numbers to math
    {trigger: "ff", replacement: "f($0)", options: "mA"},

    // Set Theory
    {trigger: "empty", replacement: "\\emptyset", options: "m"},
    {trigger: "set", replacement: "\\{ $0 \\}$1", options: "m"},
    {trigger: "oo", replacement: "\\infty ", options: "m"},
    {trigger: "fa", replacement: "\\forall ", options: "m"},
    {trigger: "ex", replacement: "\\exists ", options: "m"},
    {trigger: "sub;", replacement: "\\subset ", options: "mA"},
    {trigger: "sube;", replacement: "\\subseteq ", options: "mA"},
    {trigger: "sup", replacement: "\\supset ", options: "m"},
    {trigger: "\\", replacement: "\\setminus ", options: "m"},
    {trigger: "sq", replacement: "\\square", options: "m"},


    // Greek letters
    {trigger: "a;", replacement: "{\\color{#6495ED}{\\alpha}}", options: "mA"},
    {trigger: "A;", replacement: "{\\color{#6495ED}{\\Alpha}}", options: "mA"},
    {trigger: "alpha", replacement: "{\\color{#6495ED}{\\alpha}}", options: "mA" },
    {trigger: "aalpha", replacement: "{\\color{#6495ED}{\\Alpha}}", options: "mA" },
    {trigger: "b;", replacement: "{\\color{skyblue}{\\beta}}", options: "mA"},
    {trigger: "B;", replacement: "{\\color{skyblue}{\\Beta}}", options: "mA"},
    {trigger: "beta", replacement: "{\\color{skyblue}{\\beta}}", options: "mA" },
    {trigger: "bbeta", replacement: "{\\color{skyblue}{\\Beta}}", options: "mA" },
    {trigger: "c;", replacement: "{\\color{darkblue}{\\chi}}", options: "mA"},
    {trigger: "C;", replacement: "{\\color{darkblue}{\\Chi}}", options: "mA"},
    {trigger: "g;", replacement: "{\\color{violet}{\\gamma}}", options: "mA"},
    {trigger: "G;", replacement: "{\\Gamma}", options: "mA"},
    {trigger: "d;", replacement: "{\\color{RubineRed}{\\delta}}", options: "mA"},
    {trigger: "D;", replacement: "{\\Delta}", options: "mA"},
    {trigger: "e;", replacement: "{\\color{orange}{\\epsilon}}", options: "mA"},
    {trigger: "E;", replacement: "{\\color{orange}{\\Epsilon}}", options: "mA"},
    {trigger: ":e", replacement: "{\\varepsilon}", options: "mA"},
    {trigger: ":E", replacement: "{\\varepsilon}", options: "mA"},
    {trigger: "th;", replacement: "{\\color{limegreen}{\\theta}}", options: "mA"},
    {trigger: "Th;", replacement: "{\\color{limegreen}{\\Theta}}", options: "mA"},
    {trigger: "theta", replacement: "{\\color{limegreen}{\\theta}}", options: "mA" },
    {trigger: "ttheta", replacement: "{\\color{limegreen}{\\Theta}}", options: "mA" },
    {trigger: "k;", replacement: "{\\kappa}", options: "mA"},
    {trigger: "K;", replacement: "{\\kappa}", options: "mA"},
    {trigger: "l;", replacement: "{\\color{#AA6C39}{\\lambda}}", options: "mA"},
    {trigger: "L;", replacement: "{\\color{#AA6C39}{\\Lambda}}", options: "mA"},
    {trigger: "pi", replacement: "{\\color{hotpink}{\\pi}}", options: "mA" },
    {trigger: "ppi", replacement: "{\\color{hotpink}{\\Pi}}", options: "mA" },
    {trigger: "m;", replacement: "{\\color{gold}{\\mu}}", options: "mA"},
    {trigger: "mm;", replacement: "{\\color{purple}{\\mu}}", options: "mA", priority: 2},
    {trigger: "M;", replacement: "{\\color{gold}{\\Mu}}", options: "mA"},
    {trigger: "mu", replacement: "{\\color{gold}{\\mu}}", options: "mA" },
    {trigger: "mmu", replacement: "{\\color{gold}{\\Mu}}", options: "mA" },
    {trigger: "n;", replacement: "{\\color{#7f50ff}{\\nu}}", options: "mA"},
    {trigger: "N;", replacement: "{\\color{#7f50ff}{\\Nu}}", options: "mA"},
    {trigger: "r;", replacement: "{\\color{#FF5033}{\\rho}}", options: "mA"},
    {trigger: "s;", replacement: "{\\color{skyblue}{\\sigma}}", options: "mA"},
    {trigger: "ss;", replacement: "{{\\color{skyblue}{\\sigma}}^2}", options: "mA", priority: 3},
    {trigger: "S;", replacement: "{\\color{skyblue}{\\Sigma}}", options: "mA"},
    {trigger: "sigma", replacement: "{\\color{skyblue}{\\sigma}}", options: "mA" },
    {trigger: "ssigma", replacement: "{\\color{skyblue}{\\Sigma}}", options: "mA" },
    {trigger: "t;", replacement: "{\\color{tan}{\\tau}}", options: "mA"},
    {trigger: "T;", replacement: "{\\color{tan}{\\Tau}}", options: "mA"},
    {trigger: "ome", replacement: "{\\omega}", options: "mA"},
    {trigger: "o;", replacement: "{\\omega}", options: "mA"},
    {trigger: "O;", replacement: "{\\Omega}", options: "mA"},
    {trigger: "x;", replacement: "{\\xi}", options: "mA"},
    {trigger: "X;", replacement: "{\\Xi}", options: "mA"},
    {trigger: "p;", replacement: "{\\phi}", options: "mA"},
    {trigger: "P;", replacement: "{\\Phi}", options: "mA"},
    {trigger: "phi", replacement: "{\\phi}", options: "mA" },
    {trigger: "pphi", replacement: "{\\Phi}", options: "mA" },
    {trigger: "psi", replacement: "{\\psi}", options: "mA" },
    {trigger: "Psi", replacement: "{\\Psi}", options: "mA" },
    {trigger: "z;", replacement: "{\\color{#ffd750}{\\zeta}}", options: "mA"},
    {trigger: "Z;", replacement: "{\\Zeta}", options: "mA"},


    {trigger: "([^\\\\])(${GREEK}|${SYMBOL})", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before greek letters and symbols"},


    // Insert space after greek letters and symbols, etc
    {trigger: "\\\\(${GREEK}|${SYMBOL}|${SHORT_SYMBOL})([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) sr", replacement: "\\[[0]]^{2}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) cb", replacement: "\\[[0]]^{3}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) rd", replacement: "\\[[0]]^{$0}$1", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) hat", replacement: "\\hat{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) dot", replacement: "\\dot{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) bar", replacement: "\\bar{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) vec", replacement: "\\vec{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) tilde", replacement: "\\tilde{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) und", replacement: "\\underline{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}),\\.", replacement: "\\boldsymbol{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK})\\.,", replacement: "\\boldsymbol{\\[[0]]}", options: "rmA"},


    // Operations
    {trigger: "te", replacement: "\\text{$0}", options: "m"},
    {trigger: "text", replacement: "\\text{$0}", options: "mA"},
    {trigger: "bf", replacement: "\\mathbf{$0}", options: "mA"},
    {trigger: "sr", replacement: "^{2}", options: "mA"},
    {trigger: "cb", replacement: "^{3}", options: "mA"},
    {trigger: "inv", replacement: "^{-1}", options: "mA"},
    {trigger: "rd", replacement: "^{$0}$1", options: "mA"},
    {trigger: "_", replacement: "_{$0}$1", options: "mA"},
    {trigger: "sts", replacement: "_\\text{$0}", options: "rmA"},
    {trigger: "sq", replacement: "\\sqrt{ $0 }$1", options: "mA"},
    {trigger: "//", replacement: "\\frac{$0}{$1}$2", options: "mA"},
    {trigger: "ee", replacement: "e^{ $0 }$1", options: "mA"},
    {trigger: "rm", replacement: "\\mathrm{$0}$1", options: "mA"},
    {trigger: "conj", replacement: "^{*}", options: "mA"},
    {trigger: "trace", replacement: "\\mathrm{Tr}", options: "mA"},
    {trigger: "det", replacement: "\\det", options: "mA"},
    {trigger: "re", replacement: "\\mathrm{Re}", options: "mA"},
    {trigger: "im", replacement: "\\mathrm{Im}", options: "mA"},

    {trigger: "([a-zA-Z]),\\.", replacement: "\\mathbf{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])\\.,", replacement: "\\mathbf{[[0]]}", options: "rmA"},
    {trigger: "([A-Za-z])(\\d)", replacement: "[[0]]_{[[1]]}", options: "rmA", description: "Auto letter subscript", priority: -1},
    {trigger: "([A-Za-z])_(\\d\\d)", replacement: "[[0]]_{[[1]]}", options: "rmA"},
    {trigger: "\\hat{([A-Za-z])}(\\d)", replacement: "hat{[[0]]}_{[[1]]}", options: "rmA"},
    {trigger: "\\\\mathbf{([A-Za-z])}(\\d)", replacement: "\\mathbf{[[0]]}_{[[1]]}", options: "rmA"},
    {trigger: "\\\\vec{([A-Za-z])}(\\d)", replacement: "\\vec{[[0]]}_{[[1]]}", options: "rmA"},
    {trigger: "([a-zA-Z])bar", replacement: "\\bar{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])hat", replacement: "\\hat{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])ddot", replacement: "\\ddot{[[0]]}", options: "rmA", priority: 3},
    {trigger: "([a-zA-Z])dot", replacement: "\\dot{[[0]]}", options: "rmA", priority: 1},
    {trigger: "([a-zA-Z])vec", replacement: "\\vec{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])tilde", replacement: "\\tilde{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])und", replacement: "\\underline{[[0]]}", options: "rmA"},
    {trigger: "bar", replacement: "\\bar{$0}$1", options: "mA"},
    {trigger: "hat", replacement: "\\hat{$0}$1", options: "mA"},
    {trigger: "dot", replacement: "\\dot{$0}$1", options: "mA"},
    {trigger: "ddot", replacement: "\\ddot{$0}$1", options: "mA", priority: 2},
    {trigger: "vec", replacement: "\\vec{$0}$1", options: "mA"},
    {trigger: "tilde", replacement: "\\tilde{$0}$1", options: "mA"},
    {trigger: "und", replacement: "\\underline{$0}$1", options: "mA"},

    {trigger: "([^\\\\])(arcsin|arccos|arctan|arccot|arccsc|arcsec|sin|cos|tan|cot|csc)", replacement: "[[0]]\\[[1]]", options: "rmA"},
    {trigger: "\\\\(arcsin|arccos|arctan|arccot|arccsc|arcsec|sin|cos|tan|cot|csc)([A-Za-gi-z])", replacement: "\\[[0]] [[1]]", options: "rmA"}, // Insert space after trig funcs. Skips letter "h" to allow sinh, cosh, etc.
    {trigger: "\\\\(arcsinh|arccosh|arctanh|arccoth|arcsch|arcsech|sinh|cosh|tanh|coth|csch)([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"}, // Insert space after trig funcs
    {trigger: "\\\\(neq|geq|leq|gg|ll|sim)([0-9]+)", replacement: "\\[[0]] [[1]]", options: "rmA"}, // Insert space after inequality symbols


    // Visual operations
    {trigger: "U", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }", options: "mA"},
    {trigger: "B", replacement: "\\underset{ $0 }{ ${VISUAL} }", options: "mA"},
    {trigger: "C", replacement: "\\cancel{ ${VISUAL} }", options: "mA"},
    {trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }", options: "mA"},
    {trigger: "S", replacement: "\\sqrt{ ${VISUAL} }", options: "mA"},
    { trigger: "udst", replacement: "\\underset{ $0 }{ $1 } $2", options: "mA" },
    { trigger: "ovst", replacement: "\\overset{ $0 }{ $1 } $2", options: "mA" },



    // Symbols
    {trigger: "ooo", replacement: "\\infty", options: "mA"},
    {trigger: "sum", replacement: "\\sum", options: "mA"},
    {trigger: "prod", replacement: "\\prod", options: "mA"},
    {trigger: "lim", replacement: "\\lim_{ ${0:n} \\to ${1:\\infty} } $2", options: "mA"},
    {trigger: "([^\\\\])pm", replacement: "[[0]]\\pm", options: "rm"},
    {trigger: "([^\\\\])mp", replacement: "[[0]]\\mp", options: "rm"},
    {trigger: "+-", replacement: "\\pm", options: "mA"},
    {trigger: "-+", replacement: "\\mp", options: "mA"},
    {trigger: "...", replacement: "\\dots", options: "mA"},
    {trigger: "<->", replacement: "\\leftrightarrow ", options: "mA"},
    {trigger: "->", replacement: "\\to", options: "mA"},  // maps to
    {trigger: "!>", replacement: "\\mapsto", options: "mA"},  // maps to
    {trigger: "invs", replacement: "^{-1}", options: "mA"},  // inverse
    {trigger: "\\\\\\", replacement: "\\setminus", options: "mA"},  // set difference
    {trigger: "||", replacement: "\\mid", options: "mA"},  // set such that
    {trigger: "and", replacement: "\\cap", options: "mA"}, // set intersection
    {trigger: "orr", replacement: "\\cup", options: "mA"}, // set union
    {trigger: "inn", replacement: "\\in", options: "mA"}, // set membership
    {trigger: "\\subset eq", replacement: "\\subseteq", options: "mA"},  // subset or equal
    {trigger: "set", replacement: "\\{ $0 \\}$1", options: "mA"},  // set
    {trigger: "=>", replacement: "\\implies", options: "mA"},  // implies
    {trigger: "=<", replacement: "\\impliedby", options: "mA"},  // implies
    {trigger: "iff", replacement: "\\iff", options: "mA"},  // if and only if
    {trigger: "e\\xi sts", replacement: "\\exists", options: "mA", priority: 1},  // exists
    {trigger: "===", replacement: "\\equiv", options: "mA"},  // equivalent
    {trigger: "Sq", replacement: "\\square", options: "mA"},  // square
    {trigger: "!=", replacement: "\\neq", options: "mA"},  // not equal
    {trigger: ">=", replacement: "\\geq", options: "mA"},
    {trigger: "<=", replacement: "\\leq", options: "mA"},
    {trigger: ">>", replacement: "\\gg", options: "mA"},
    {trigger: "<<", replacement: "\\ll", options: "mA"},
    {trigger: "~~", replacement: "\\sim", options: "mA"},
    {trigger: "\\sim ~", replacement: "\\approx", options: "mA"},  // approximately equal
    {trigger: "prop", replacement: "\\propto", options: "mA"},  // proportional to
    {trigger: "nabl", replacement: "\\nabla", options: "mA"},  // nabla (del)
    {trigger: "del", replacement: "\\nabla", options: "mA"},  // nabla (del)
    {trigger: "xx", replacement: "\\times", options: "mA"},  // times
    {trigger: "**", replacement: "\\cdot", options: "mA"},  // dot
    {trigger: "cdo", replacement: "\\cdot", options: "mA"},  // dot
    {trigger: "para", replacement: "\\parallel", options: "mA"},  // parallel


    {trigger: "xnn", replacement: "x_{n}", options: "mA"},
    {trigger: "xii", replacement: "x_{i}", options: "mA"},
    {trigger: "xjj", replacement: "x_{j}", options: "mA"},
    {trigger: "xp1", replacement: "x_{n+1}", options: "mA"},
    {trigger: "ynn", replacement: "y_{n}", options: "mA"},
    {trigger: "yii", replacement: "y_{i}", options: "mA"},
    {trigger: "yjj", replacement: "y_{j}", options: "mA"},


    // MathBB + Colors
    {trigger: "mbb", replacement: "\\mathbb{$0}$1", options: "mA"},
    {trigger: "ell", replacement: "\\ell", options: "mA"},
    {trigger: "lll", replacement: "\\ell", options: "mA"},
    {trigger: "lL", replacement: "{\\color{#A32525}{\\mathbb{L}}}", options: "mA"},
    {trigger: "rR", replacement: "{\\color{#A32525}{\\mathbb{R}}}", options: "mA"},
    {trigger: "hH", replacement: "\\mathbb{H}", options: "mA"},
    {trigger: "xX", replacement: "\\mathbf{E}", options: "mA"},
    {trigger: "cC", replacement: "\\mathbb{C}", options: "mA"},
    {trigger: "eE", replacement: "\\mathbb{E}", options: "mA"},
    {trigger: "zZ", replacement: "\\mathbb{Z}", options: "mA"},
    {trigger: "nN", replacement: "\\mathbb{N}", options: "mA"},
    {trigger: "iI", replacement: "\\mathbb{1}", options: "mA"},
    {trigger: "\\mathbb{1}I", replacement: "\\hat{\\mathbb{1}}", options: "mA"},
    {trigger: "bB", replacement: "\\mathbf{B}", options: "mA"},


    // mathcal{} + Colors
    {trigger: "mcal", replacement: "\\mathcal{$0}$1", options: "mA"},
    {trigger: "AA", replacement: "{\\color{red}{\\mathcal{A}}}", options: "mA"},
    {trigger: "BB", replacement: "{\\color{blue}{\\mathcal{B}}}", options: "mA"},
    {trigger: "EE", replacement: "{\\color{#E74C3C}{\\mathcal{E}}}", options: "mA"},
    {trigger: "HH", replacement: "{\\color{BrickRed}{\\mathcal{H}}}", options: "mA"},
    {trigger: "RR", replacement: "{\\mathcal{\\color{gold}{R}}}", options: "mA"},
    {trigger: "TT", replacement: "{\\mathcal{\\color{springgreen}{T}}}", options: "mA"},
    {trigger: "MM", replacement: "{\\mathcal{\\color{BrickRed}{M}}}", options: "mA"},


    // Statistics
    {trigger: "\\hat{{\\color{gold}{\\mu}}}", replacement: "{\\color{#ff7f50}{\\hat{\\mu}}}$0", options: "m", priority: 10},
    {trigger: "\\hat{{\\color{skyblue}{\\sigma}}}", replacement: "{\\color{#50d0ff}{\\hat{\\sigma}}}", options: "m", priority: 10},
    {trigger: "\\hat{{\\color{#ffd750}{\\zeta}}}", replacement: "{\\color{#ff5079}{\\hat{\\zeta}}}", options: "m", priority: 10},
    {trigger: "{\\color{#A32525}{\\mathbb{R}}}n", replacement: "{\\color{#A32525}{\\mathbb{R}}}^{n}", options: "m", priority: 10},


    // Portfolio Theory
    {trigger: "po;", replacement: "{\\color{#5FFB17}{\\mathbb{P}}}", options: "mA"}, // Portfolio
    {trigger: "er;", replacement: "{\\color{#FBE7A1}{\\mu}}", options: "mA", priority: 2}, // expected return
    {trigger: "erp;", replacement: "{\\color{#FBE7A1}{\\mu}}_{\\color{#5FFB17}{\\mathbb{P}}}", options: "mA", priority: 2}, // expected return of Portfolio
    {trigger: "vp;", replacement: "{{{\\color{skyblue}{\\sigma}}_{\\mathbb{\\color{#5FFB17}{P}}}}^{\\color{white}{2}}}", options: "mA", priority: 2}, // variance of Portfolio
    {trigger: "sdp;", replacement: "{{\\color{skyblue}{\\sigma}}_{\\mathbb{\\color{#5FFB17}{P}}}}", options: "mA", priority: 2}, // standard deviation of Portfolio
    {trigger: "covp;", replacement: "{{\\color{skyblue}{\\sigma}}_{\\mathbb{\\color{#5FFB17}{P}}}}^{\\color{white}{2}}", options: "mA", priority: 2}, // covariance of Portfolio
    {trigger: "kxn;", replacement: "{\\left({\\color{yellow}{k}} \\times {\\color{#50ff7f}{n}}\\right)}", options: "mA"},  // k x n matrix


    // Linear Algebra
    {trigger: "tra", replacement: "^{T}", options: "mA", priority: 2},  // trace
    {trigger: "yi;", replacement: "{y_{\\color{#50ff7f}{i}}", options: "mA", priority: 3},  // y_i
    {trigger: "yj;", replacement: "{y_{\\color{#50ff7f}{j}}", options: "mA", priority: 3},  // y_j
    {trigger: "y[0-1];", replacement: "{y_{\\color{#50ff7f}{1}}", options: "rmA", priority: 4},  // y_1


    // Time Series
    {trigger: "{t", replacement: "x_{t}", options: "mA"},



    // Unit vectors
    {trigger: ":i", replacement: "\\mathbf{i}", options: "mA"},
    {trigger: ":j", replacement: "\\mathbf{j}", options: "mA"},
    {trigger: ":k", replacement: "\\mathbf{k}", options: "mA"},
    {trigger: ":x", replacement: "\\hat{\\mathbf{x}}", options: "mA"},
    {trigger: ":y", replacement: "\\hat{\\mathbf{y}}", options: "mA"},
    {trigger: ":z", replacement: "\\hat{\\mathbf{z}}", options: "mA"},



    // Derivatives
    {trigger: "par", replacement: "\\frac{ \\partial ${0:y} }{ \\partial ${1:x} } $2", options: "m"},
    {trigger: "pa2", replacement: "\\frac{ \\partial^{2} ${0:y} }{ \\partial ${1:x}^{2} } $2", options: "mA"},
    {trigger: "pa3", replacement: "\\frac{ \\partial^{3} ${0:y} }{ \\partial ${1:x}^{3} } $2", options: "mA"},
    {trigger: "pa([A-Za-z])([A-Za-z])", replacement: "\\frac{ \\partial [[0]] }{ \\partial [[1]] } ", options: "rm"},
    {trigger: "pa([A-Za-z])([A-Za-z])([A-Za-z])", replacement: "\\frac{ \\partial^{2} [[0]] }{ \\partial [[1]] \\partial [[2]] } ", options: "rm"},
    {trigger: "pa([A-Za-z])([A-Za-z])2", replacement: "\\frac{ \\partial^{2} [[0]] }{ \\partial [[1]]^{2} } ", options: "rmA"},
    {trigger: "de([A-Za-z])([A-Za-z])", replacement: "\\frac{ d[[0]] }{ d[[1]] } ", options: "rm"},
    {trigger: "de([A-Za-z])([A-Za-z])2", replacement: "\\frac{ d^{2}[[0]] }{ d[[1]]^{2} } ", options: "rmA"},
    {trigger: "ddt", replacement: "\\frac{d}{dt} ", options: "mA"},



    // Integrals
    {trigger: "oinf", replacement: "\\int_{0}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},
    {trigger: "infi", replacement: "\\int_{-\\infty}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},
    {trigger: "dint", replacement: "\\int_{${0:0}}^{${1:\\infty}} $2 \\, d${3:x} $4", options: "mA"},
    {trigger: "oint", replacement: "\\oint", options: "mA"},
    {trigger: "iiint", replacement: "\\iiint", options: "mA"},
    {trigger: "iint", replacement: "\\iint", options: "mA"},
    {trigger: "int", replacement: "\\int $0 \\, d${1:x} $2", options: "mA"},



    // Physics
    {trigger: "kbt", replacement: "k_{B}T", options: "mA"},


    // Quantum mechanics
    {trigger: "hba", replacement: "\\hbar", options: "mA"},
    {trigger: "dag", replacement: "^{\\dagger}", options: "mA"},
    {trigger: "o+", replacement: "\\oplus ", options: "mA"},
    {trigger: "ox", replacement: "\\otimes ", options: "mA"},
    {trigger: "ot\\mathrm{Im}es", replacement: "\\otimes ", options: "mA"}, // Handle conflict with "im" snippet
    {trigger: "bra", replacement: "\\bra{$0} $1", options: "mA"},
    {trigger: "ket", replacement: "\\ket{$0} $1", options: "mA"},
    {trigger: "brk", replacement: "\\braket{ $0 | $1 } $2", options: "mA"},
    {trigger: "\\\\bra{([^|]+)\\|", replacement: "\\braket{ [[0]] | $0 ", options: "rmA", description: "Convert bra into braket"},
    {trigger: "\\\\bra{(.+)}([^ ]+)>", replacement: "\\braket{ [[0]] | $0 ", options: "rmA", description: "Convert bra into braket (alternate)"},
    {trigger: "outp", replacement: "\\ket{${0:\\psi}} \\bra{${0:\\psi}} $1", options: "mA"},



    // Chemistry
    {trigger: "pu", replacement: "\\pu{ $0 }", options: "mA"},
    {trigger: "msun", replacement: "M_{\\odot}", options: "mA"},
    {trigger: "solm", replacement: "M_{\\odot}", options: "mA"},
    {trigger: "ce", replacement: "\\ce{ $0 }", options: "mA"},
    {trigger: "iso", replacement: "{}^{${0:4}}_{${1:2}}${2:He}", options: "mA"},
    {trigger: "hel4", replacement: "{}^{4}_{2}He ", options: "mA"},
    {trigger: "hel3", replacement: "{}^{3}_{2}He ", options: "mA"},



    // Environments
    {trigger: "pmat", replacement: "\\begin{pmatrix}\n$0\n\\end{pmatrix}", options: "mA"},
    {trigger: "bmat", replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", options: "mA"},
    {trigger: "Bmat", replacement: "\\begin{Bmatrix}\n$0\n\\end{Bmatrix}", options: "mA"},
    {trigger: "vmat", replacement: "\\begin{vmatrix}\n$0\n\\end{vmatrix}", options: "mA"},
    {trigger: "Vmat", replacement: "\\begin{Vmatrix}\n$0\n\\end{Vmatrix}", options: "mA"},
    {trigger: "case", replacement: "\\begin{cases}\n$0\n\\end{cases}", options: "mA"},
    {trigger: "align", replacement: "\\begin{align}\n$0\n\\end{align}", options: "mA"},
    {trigger: "array", replacement: "\\begin{array}\n$0\n\\end{array}", options: "mA"},


    {trigger: "matrix", replacement: "\\begin{matrix}\n$0\n\\end{matrix}", options: "mA"},
    {trigger: "\\\\mathbf{([A-Za-z])}T", replacement: "\\mathbf{[[0]]}^{\\top}", options: "rmA", description: "Transpose"},



    // Brackets
    {trigger: "avg", replacement: "\\langle $0 \\rangle $1", options: "mA"},
    {trigger: "norm", replacement: "\\lvert $0 \\rvert $1", options: "mA", priority: 1},
    {trigger: "mod", replacement: "|$0|$1", options: "mA"},
    {trigger: "(", replacement: "(${VISUAL})", options: "mA"},
    {trigger: "[", replacement: "[${VISUAL}]", options: "mA"},
    {trigger: "{", replacement: "{${VISUAL}}", options: "mA"},
    {trigger: "(", replacement: "($0)$1", options: "mA"},
    {trigger: "{", replacement: "{$0}$1", options: "mA"},
    {trigger: "[", replacement: "[$0]$1", options: "mA"},
    {trigger: "lr(", replacement: "\\left( $0 \\right) $1", options: "mA"},
    {trigger: "lr|", replacement: "\\left| $0 \\right| $1", options: "mA"},
    {trigger: "lr{", replacement: "\\left\\{ $0 \\right\\} $1", options: "mA"},
    {trigger: "lr[", replacement: "\\left[ $0 \\right] $1", options: "mA"},
    {trigger: "lra", replacement: "\\left< $0 \\right> $1", options: "mA"},



    // Misc
    {trigger: "tayl", replacement: "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3", options: "mA"},
]