/* =====================================================================
   data.js  —  EDIT THIS FILE to update your whole website.
   Add blog posts, PDFs, photos, and personal info here. No other file
   needs changing for routine updates.
   ===================================================================== */

window.SITE = {
  name: "Debendu Dutta",
  tagline: "Pure Mathematics · IIT Bombay",
  roles: [
    "M.Sc. Pure Mathematics at IIT Bombay",
    "Lover of proofs & structure",
    "Real Analysis & Measure Theory",
    "Web & Design Secretary, Math Association",
    "Patient, honest, curious"
  ],
  location: "Mumbai, Maharashtra, India  ·  Home: Egra, West Bengal",
  email: "debendu003@gmail.com",
  linkedin: "https://www.linkedin.com/in/debendudutta-0b9a21238",
  github: "",            // e.g. "https://github.com/yourusername"
  instagram: "",         // optional
  photo: "profile.jpg",   // replace with your own photo (same name, or change path)
  cv: "CV_Debendu_Dutta.pdf", // put your CV PDF here (see README)

  about: [
    "I am an M.Sc. student in Pure Mathematics at IIT Bombay, deeply interested in understanding basic mathematical ideas and structures. My studies focus on proof-based learning, logical thinking, and clear reasoning.",
    "Outside academics, I like thoughtful discussions with people who care about deep ideas and original thinking. I believe good research takes patience, honesty, hard work, and true teamwork over a long time."
  ],

  stats: [
    { num: 47,  label: "AIR · IIT JAM Mathematics 2025" },
    { num: 100, label: "/100 · Maths, Higher Secondary 2022" },
    { num: 2,   label: "Scholarships (SVMCM, MCM)" },
    { num: 50,  label: "Students helped as doubt faculty", suffix: "+" }
  ],

  education: [
    { when: "2025 – 2027", title: "M.Sc. Mathematics", where: "Indian Institute of Technology Bombay", note: "Pure Mathematics. Merit-cum-Means Scholarship (2025–26)." },
    { when: "2022 – 2025", title: "B.Sc. Mathematics (Computer Science & Physics)", where: "Midnapore College (Autonomous), Vidyasagar University", note: "76.70%. SVMCM Scholarship, Govt. of West Bengal (2022–25)." },
    { when: "2020 – 2022", title: "Higher Secondary (Class 11 & 12)", where: "Egra J.L. High School", note: "88.60% · 100/100 in Mathematics (WBCHSE)." },
    { when: "2014 – 2020", title: "Class 5 – 10", where: "Nilda High School", note: "87.57% · 97/100 in Mathematics (Madhyamik, WBBSE)." }
  ],

  experience: [
    { when: "2026 – Present", title: "Real Analysis & Measure Theory Intern", where: "Dept. of Mathematics, IIT Patna",
      points: ["Developing lecture content on Jordan measure, Lebesgue outer measure, the Cantor set and measurability.", "Designing LaTeX Beamer slides with custom TikZ diagrams."] },
    { when: "2026 – Present", title: "Web & Design Secretary", where: "Mathematics Association, IIT Bombay",
      points: ["Managing the association's website, Instagram and LinkedIn; designing posters, certificates and merchandise.", "Creating large-screen visuals for major departmental events."] },
    { when: "2026 – Present", title: "Design Nominee, Core Team", where: "Institute Student Companion Programme (ISCP), IIT Bombay",
      points: ["Managing ISCP's Instagram and designing creatives for institute-wide activities.", "Contributing to Core Council decisions; leading T-shirt and merchandise design."] },
    { when: "May – Jul 2026", title: "Mathematics Doubt Faculty", where: "Egra Science Institute",
      points: ["Resolved doubts for ~50 students of Classes XI–XII (WBJEE, JEE Main/Advanced, WB Board) online and offline."] },
    { when: "Jan 2026 – Present", title: "Mathematics Tutor / Subject Matter Expert", where: "PhotoStudy",
      points: ["Step-by-step solutions and conceptual explanations for academic and competitive-exam problems."] },
    { when: "Sep – Oct 2025", title: "Student Volunteer", where: "PGcult / PG Night, IIT Bombay", points: [] }
  ],

  achievements: [
    "AIR 47 in IIT JAM Mathematics (conducted by IIT Delhi), 2025",
    "Shortlisted for Integrated PhD interview at IISc Bangalore, 2025",
    "SVMCM Scholarship, Government of West Bengal (2022–25)",
    "Merit-cum-Means Scholarship, IIT Bombay (2025–26)",
    "97/100 in Mathematics, Madhyamik (2020); 100/100, Higher Secondary (2022)"
  ],

  courses: ["Real Analysis","Functional Analysis","Topology","Group Theory","Ring Theory","Linear Algebra","Complex Analysis","Measure Theory","Riemann Integration","Sequences & Series of Functions","Differential Equations","PDE","Numerical Analysis","Number Theory","Probability & Statistics","Linear Programming & Game Theory","Calculus / MVC"],

  skills: ["Python","C / C++","LaTeX & TikZ","MATLAB","Scilab","Desmos","Canva Pro","CapCut / VN Editor","MS Office"],

  languages: ["Bengali (native)","English (working)","Hindi (speaking & reading)","Odia (speaking)"],

  /* ---------------- BLOG POSTS ----------------
     Add a new object at the TOP of the list for each new post.
     body = HTML. Maths: inline \( ... \)  and display \[ ... \]  (KaTeX).   */
  posts: [
    {
      id: "density-sqrt2",
      title: "Density of {m + n√2} in ℝ",
      date: "2026-11-23",
      tags: ["analysis", "number theory"],
      excerpt: "Why every interval of the real line contains a number \\(m+n\\sqrt2\\): a pigeonhole proof, explained step by step.",
      body: `
<p>A set \\(E\\subset\\mathbb R\\) is called <em>dense</em> if every open interval \\((a,b)\\) contains at least one point of \\(E\\). Equivalently: no matter where you stand on the real line, and no matter how small a window you look through, a point of \\(E\\) is hiding inside it.</p>
<p>The set of all numbers \\(m+n\\sqrt2\\) with \\(m,n\\) integers looks very thin — it is <em>countable</em>, a speck inside \\(\\mathbb R\\). Yet it is dense. Here is the proof, with every step unpacked.</p>

<div class="thm"><b class="lbl">Theorem</b>
<p>The set \\(S=\\{\\,m+n\\sqrt2 \\;:\\; m,n\\in\\mathbb Z\\,\\}\\) is dense in \\(\\mathbb R\\).</p></div>

<h3>The plan</h3>
<p>The proof has two stages:</p>
<ol>
<li><b>Build a tiny element.</b> For every \\(\\varepsilon\\gt0\\), find some \\(\\beta\\in S\\) with \\(0\\lt\\beta\\lt\\varepsilon\\). The pigeonhole principle does this.</li>
<li><b>Use it as a ruler.</b> The multiples \\(\\dots,-\\beta,0,\\beta,2\\beta,\\dots\\) all lie in \\(S\\), and they are spaced only \\(\\beta\\) apart. If \\(\\beta\\) is smaller than the length of \\((a,b)\\), they cannot jump over it.</li>
</ol>

<h3>Stage 0 &mdash; what we know about \\(S\\)</h3>
<p>\\(S\\) is closed under addition, subtraction and multiplication by integers: if \\(x=m+n\\sqrt2\\) and \\(y=m'+n'\\sqrt2\\), then \\(x\\pm y=(m\\pm m')+(n\\pm n')\\sqrt2\\in S\\), and \\(kx\\in S\\) for every \\(k\\in\\mathbb Z\\). (In algebra language, \\(S\\) is a <em>subgroup</em> of \\((\\mathbb R,+)\\).) We use this closure over and over.</p>
<p>Now put
\\[ \\alpha=\\sqrt2-1 . \\]</p>
<ul>
<li>\\(\\alpha\\in S\\), taking \\(m=-1,\\ n=1\\).</li>
<li>\\(0\\lt\\alpha\\lt1\\), because \\(1\\lt\\sqrt2\\lt2\\).</li>
<li>\\(\\alpha\\) is <b>irrational</b>, because \\(\\sqrt2\\notin\\mathbb Q\\). This is the only place the special nature of \\(\\sqrt2\\) is used.</li>
</ul>

<h3>Stage 1 &mdash; a tiny positive element of \\(S\\)</h3>
<p>Fix \\(\\varepsilon\\gt0\\) and choose an integer \\(N\\gt 1/\\varepsilon\\), so that \\(1/N\\lt\\varepsilon\\).</p>

<h4>Step 1. Fractional parts</h4>
<p>For a real \\(x\\), write \\(\\lfloor x\\rfloor\\) for the greatest integer \\(\\le x\\) and \\(\\{x\\}=x-\\lfloor x\\rfloor\\in[0,1)\\) for its fractional part. Look at the \\(N+1\\) numbers
\\[ \\{0\\},\\ \\{\\alpha\\},\\ \\{2\\alpha\\},\\ \\dots,\\ \\{N\\alpha\\}\\ \\in[0,1). \\]</p>

<h4>Step 2. Pigeonhole</h4>
<p>Cut \\([0,1)\\) into \\(N\\) boxes of equal width:
\\[ \\Big[\\tfrac kN,\\tfrac{k+1}N\\Big),\\qquad k=0,1,\\dots,N-1 . \\]
We have \\(N+1\\) numbers and only \\(N\\) boxes, so two of the numbers share a box. That is, there are indices \\(0\\le p\\lt q\\le N\\) with \\(\\{p\\alpha\\}\\) and \\(\\{q\\alpha\\}\\) in the same box. Two points in a box of width \\(1/N\\) are closer than \\(1/N\\):
\\[ \\big|\\{q\\alpha\\}-\\{p\\alpha\\}\\big|\\lt\\frac1N . \\]</p>

<h4>Step 3. Define \\(\\beta\\)</h4>
<p>Set
\\[ \\beta=(q-p)\\,\\alpha-\\big(\\lfloor q\\alpha\\rfloor-\\lfloor p\\alpha\\rfloor\\big). \\]
Expanding \\(q\\alpha=\\lfloor q\\alpha\\rfloor+\\{q\\alpha\\}\\) and \\(p\\alpha=\\lfloor p\\alpha\\rfloor+\\{p\\alpha\\}\\) and subtracting, the floors cancel and
\\[ \\beta=\\{q\\alpha\\}-\\{p\\alpha\\}, \\qquad\\text{so}\\qquad |\\beta|\\lt\\frac1N\\lt\\varepsilon . \\]</p>

<h4>Step 4. Three things to check about \\(\\beta\\)</h4>
<ul>
<li><b>\\(\\beta\\in S\\).</b> \\((q-p)\\alpha\\) is an integer multiple of \\(\\alpha\\in S\\), and \\(\\lfloor q\\alpha\\rfloor-\\lfloor p\\alpha\\rfloor\\) is an integer, hence in \\(S\\). Their difference stays in \\(S\\).</li>
<li><b>\\(\\beta\\ne0\\).</b> If \\(\\beta=0\\), then \\((q-p)\\alpha\\) would equal an integer, so \\(\\alpha=\\frac{\\text{integer}}{q-p}\\) would be rational, because \\(q-p\\ge1\\). That contradicts irrationality. So \\(0\\lt|\\beta|\\lt\\varepsilon\\).</li>
<li><b>Positive.</b> If \\(\\beta\\lt0\\), replace it by \\(-\\beta\\), which is still in \\(S\\). Now \\(0\\lt\\beta\\lt\\varepsilon\\).</li>
</ul>
<p>Since \\(\\varepsilon\\) was arbitrary, <b>\\(S\\) contains arbitrarily small positive numbers.</b></p>

<div class="eg"><b class="lbl">A concrete run</b>
<p>Take \\(\\varepsilon=0.2\\) and \\(N=5\\). The six fractional parts, and the five boxes of width \\(0.2\\) they fall into:</p>
<table class="t">
<tr><th>\\(k\\)</th><th>\\(k\\alpha\\)</th><th>\\(\\{k\\alpha\\}\\)</th><th>box</th></tr>
<tr><td>0</td><td>0</td><td>0.0000</td><td>[0, 0.2)</td></tr>
<tr><td>1</td><td>0.4142</td><td>0.4142</td><td>[0.4, 0.6)</td></tr>
<tr><td>2</td><td>0.8284</td><td>0.8284</td><td>[0.8, 1)</td></tr>
<tr><td>3</td><td>1.2426</td><td>0.2426</td><td>[0.2, 0.4)</td></tr>
<tr><td>4</td><td>1.6569</td><td>0.6569</td><td>[0.6, 0.8)</td></tr>
<tr><td>5</td><td>2.0711</td><td>0.0711</td><td>[0, 0.2)</td></tr>
</table>
<p>Indices \\(p=0\\) and \\(q=5\\) collide. Then
\\[ \\beta=5\\alpha-2=5\\sqrt2-7\\approx0.0711\\in S,\\]
which is indeed between \\(0\\) and \\(0.2\\).</p></div>

<h3>Stage 2 &mdash; landing inside \\((a,b)\\)</h3>
<p>Now let \\(a\\lt b\\) be arbitrary. By Stage 1 choose \\(\\beta\\in S\\) with
\\[ 0\\lt\\beta\\lt b-a . \\]
Every multiple \\(n\\beta\\) (\\(n\\in\\mathbb Z\\)) lies in \\(S\\). We want the <em>first</em> multiple of \\(\\beta\\) that lies strictly to the right of \\(a\\).</p>
<p>Let
\\[ A=\\{\\,n\\in\\mathbb Z : n\\beta\\gt a\\,\\}. \\]</p>
<ul>
<li>\\(A\\ne\\varnothing\\): since \\(\\beta\\gt0\\), \\(n\\beta\\to\\infty\\) as \\(n\\to\\infty\\), so large \\(n\\) work.</li>
<li>\\(A\\) is bounded below: \\(n\\beta\\gt a\\) forces \\(n\\gt a/\\beta\\).</li>
</ul>
<p>A non-empty set of integers that is bounded below has a smallest element; call it \\(m=\\min A\\), and put \\(s=m\\beta\\in S\\).</p>
<ul>
<li>\\(m\\in A\\), so \\(s\\gt a\\).</li>
<li>\\(m-1\\notin A\\) (by minimality), so \\((m-1)\\beta\\le a\\).</li>
</ul>
<p>Combining,
\\[ s=(m-1)\\beta+\\beta\\;\\le\\;a+\\beta\\;\\lt\\;a+(b-a)=b . \\]
Hence \\(a\\lt s\\lt b\\) with \\(s\\in S\\). &#10003;</p>

<figure>
<svg viewBox="0 0 640 170" role="img" aria-label="Multiples of beta stepping across the interval (a,b)" style="width:100%;height:auto;max-width:640px;display:block;margin:0 auto">
  <rect x="175" y="40" width="115" height="50" rx="4" style="fill:var(--gold);opacity:.18"/>
  <line x1="175" y1="40" x2="175" y2="90" style="stroke:var(--gold);stroke-width:1.5;stroke-dasharray:4 3"/>
  <line x1="290" y1="40" x2="290" y2="90" style="stroke:var(--gold);stroke-width:1.5;stroke-dasharray:4 3"/>
  <text x="175" y="32" text-anchor="middle" style="fill:var(--gold);font:italic 17px Georgia,serif">a</text>
  <text x="290" y="32" text-anchor="middle" style="fill:var(--gold);font:italic 17px Georgia,serif">b</text>
  <line x1="20" y1="90" x2="620" y2="90" style="stroke:var(--muted);stroke-width:1.5"/>
  <g style="stroke:var(--cyan);stroke-width:2">
    <line x1="60" y1="82" x2="60" y2="98"/><line x1="150" y1="82" x2="150" y2="98"/>
    <line x1="330" y1="82" x2="330" y2="98"/><line x1="420" y1="82" x2="420" y2="98"/>
    <line x1="510" y1="82" x2="510" y2="98"/>
  </g>
  <circle cx="240" cy="90" r="6" style="fill:var(--gold)"/>
  <g style="fill:var(--text);font:italic 14px Georgia,serif;text-anchor:middle">
    <text x="60" y="118">(m−2)β</text><text x="150" y="118">(m−1)β</text>
    <text x="240" y="118" style="fill:var(--gold)">mβ = s</text>
    <text x="330" y="118">(m+1)β</text><text x="420" y="118">(m+2)β</text><text x="510" y="118">(m+3)β</text>
  </g>
  <path d="M150 134 L150 140 L240 140 L240 134" style="fill:none;stroke:var(--muted);stroke-width:1.2"/>
  <text x="195" y="158" text-anchor="middle" style="fill:var(--muted);font:italic 14px Georgia,serif">step β &lt; b − a</text>
</svg>
<figcaption style="text-align:center;font-style:italic;color:var(--muted);font-size:.95rem">The last multiple at or before <i>a</i> is (m−1)β. One more step of size β lands on <i>s</i>, which cannot overshoot <i>b</i>, because the step is shorter than the interval.</figcaption>
</figure>

<div class="eg"><b class="lbl">A concrete run</b>
<p>Take \\((a,b)=(1,\\,1.1)\\) and \\(\\beta=5\\sqrt2-7\\approx0.07107\\), which is less than \\(b-a=0.1\\). Then \\(n\\beta\\gt1\\) means \\(n\\gt14.07\\), so \\(m=15\\) and
\\[ s=15\\beta=75\\sqrt2-105\\approx1.0660\\in(1,1.1). \\]
As promised, the previous multiple \\(14\\beta\\approx0.9950\\) is \\(\\le1\\).</p></div>

<p>Since \\(a\\lt b\\) were arbitrary, \\(S\\) is dense in \\(\\mathbb R\\).</p>
<p class="qed">&#8718;</p>

<h3>Remarks</h3>
<ul>
<li><b>Where irrationality was used.</b> Only in showing \\(\\beta\\ne0\\). If \\(\\alpha\\) were rational, say \\(\\alpha=u/v\\), then \\(S\\) would be the grid \\(\\frac1v\\mathbb Z\\) and would <em>not</em> be dense, because it has gaps of fixed size.</li>
<li><b>It works for every irrational.</b> Nothing about \\(\\sqrt2\\) was special: for any irrational \\(\\theta\\), the set \\(\\{m+n\\theta\\}\\) is dense. The same argument shows the fractional parts \\(\\{n\\theta\\}\\) are dense in \\([0,1)\\).</li>
<li><b>The moral.</b> A countable set can still touch every open interval. Density is about <em>where</em> points are, not <em>how many</em>.</li>
</ul>
`
    },
    {
      id: "welcome",
      title: "Welcome: why I'm writing this blog",
      date: "2026-11-22",
      tags: ["personal", "thoughts"],
      excerpt: "A place for slow thinking: proofs I enjoyed, ideas I'm stuck on, and notes from my journey in pure mathematics.",
      body: `
        <p>Mathematics rewards patience. This blog is where I will slow down and write what I understand — and, just as honestly, what I don't.</p>
        <p>Expect notes from courses at IIT Bombay, ideas from my analysis work, and the occasional reflection on how to learn deeply.</p>
        <blockquote>Good research takes patience, honesty, hard work, and true teamwork over a long time.</blockquote>
        <p><em>(This is a sample post — edit or delete it in <code>data.js</code>.)</em></p>`
    },
    {
      id: "cantor-set",
      title: "The Cantor set: nothing and everything",
      date: "2026-11-15",
      tags: ["analysis", "measure theory"],
      excerpt: "Uncountable, yet of measure zero. A short tour of the most famous 'small but big' set.",
      body: `
        <p>Start with \\([0,1]\\), remove the open middle third, then repeat on each remaining interval. What survives is the Cantor set \\(C\\).</p>
        <p>At step \\(n\\) we have removed intervals of total length
        \\[ \\sum_{k=1}^{n} \\frac{2^{k-1}}{3^{k}} \\;\\longrightarrow\\; 1, \\]
        so \\(\\lambda(C)=0\\). Yet \\(C\\) consists of exactly those numbers in \\([0,1]\\) having a ternary expansion using only the digits 0 and 2, giving a bijection with \\(\\{0,1\\}^{\\mathbb N}\\) — hence \\(C\\) is uncountable.</p>
        <p><strong>Take-away:</strong> measure and cardinality measure very different things.</p>
        <p><em>(Sample post — replace with your own writing.)</em></p>`
    }
  ],

  /* ---------------- PDF LIBRARY ----------------
     1) Copy the PDF into the  pdfs/  folder.  2) Add a line below.          */
 pdfs: [
  { title: "Sample: Cantor set picture", desc: "Placeholder PDF — replace with your own notes, slides or papers.", file: "sample-notes.pdf", tag: "sample" },
  { title: "MA 105: Introduction to Real Numbers", desc: "Lecture slides on the algebraic, order, completeness, Archimedean and density properties of R, with proofs and a look at floating-point arithmetic.", file: "Introduction_to_Real_Number.pdf", tag: "slides" },
  { title: "Review of Sequence and Series of Functions", desc: "Slides on pointwise and uniform convergence, Cauchy criterion, M-test, Abel's and Dirichlet's tests, and term-by-term limits, integration and differentiation, with counterexamples throughout.", file: "Sequence_Of_FUnctions_And_Series_Of_functions.pdf", tag: "slides" },
],

  

  /* ---------------- GALLERY ----------------
     Drop your photos in assets/ (or a new folder) and add them here.        */
  gallery: [
    { src: "mandelbrot.jpg", caption: "Mandelbrot set — complexity from z² + c" },
    { src: "cantor.jpg", caption: "Cantor set — the first 8 stages" },
    { src: "torus.jpg", caption: "A torus — the shape of topology" },
    { src: "complex.jpg", caption: "Domain colouring of a rational function" },
    { src: "lissajous.jpg", caption: "Lissajous curves" }
  ]
};
