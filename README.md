# xmlsummerschool2017

Slides for the XML Summer School 2017


# Mathematics on the web


We will discuss current trends for handling mathematical content in XML workflows, with a primary focus on web production.

In particular, we will cover in the next 90 minutes

* an overview of source formats for authoring/storing math content
  * 15 min
    * TeX/LaTeX
      * what it is: history, example code
      * strengths: canonical rendering, stable subsets (texvc, mathjax, jats4Reuse), made for human authoring, accessible for proficient users
      * weaknesses: TeX vs LaTeX, layout language, no semantics & not generally accessible, baroque syntax, print-focus, Chomsky Type 0, incompatible half-breeds for the web
    * (Presentation) MathML
      * strengths: W3C and ISO standard, XML language
      * weaknesses: does not specify layout (only abstraction thereof), not supported by browser vendors, not made for humans, no semantics / Content MathML is  mess, not accessible
        * state of MathML Editors - a mess
        * vendors quality - a mess
    * OMML / unicodeMath
      * strengths: part of Microsoft Office XML, canonical rendering, isomorphic XML and plain text format, can be converted to MathML
      * weaknesses: no semantics, limited to Office, poorly documented, licensing issues for tools
    * asciiMath
      * strengths: made for tiny humans, easy to convert to MathML or TeX, limited expressivity makes it somewhat accessible
      * weakness: limited expressivity, not well established, not standardized
    * programming language syntaxes
      * CAS (maple, mathematica), scientific computing (sciPy, R, Julia), general purpose languages (java)
      * strengths: computational ability, perfectly semantic, made for programmers, easily converted to other formats
      * weaknesses: limited expressivity (only procedural, not conceptual), barebones syntax, not made for humans, not actually leveraged for accessibility
* math in XML workflows
  * 10min
  * MathML dominates, mostly from print
  * LaTeX subsets (e.g. MathJax) are common
  * Use the Source, Luke! (at least: keep it!)
  * Common Problems and Challenges
    * mathvariants vs (non-BMP) Unicode
    * markup vs font engines (combining characters, accents)
    * the equation label conundrum
    * storing alternative formats: XML (eg. JATS alternatives) vs MathML annotations
      * source formats
        * e.g., LaTeX full documents vs subsets
      * alttext and altimages
    * integrating rendering information in XML workflows
    * limitations of both MathML and Unicode (mathcal, non-standard glyphs, PUA-heavy fonts, TeX legacy)
    * limitations of MathML (commutative diagrams, graphs etc)
* MathML and the role it plays in today's web
  * 10 min
  * MathML is effectively dead
    * Math WG dead
    * browser development (read: volunteer development) dead
    * standard frozen
    * used in the wild restricted to combination with JS rendering engines
  * MathML nevertheless a good basis for rendering for the web
    * much like print: choose an engine and go
    * HTML+CSS, SVG, Canvas
    * XML structure allows for passing data along
* tools and techniques for rendering mathematics in a web context
  * 15 min
  * MathML rendering tools
    * MathJax, jqmath, fmath
  * other rendering tools
    * MathQuill, mathlive, KaTeX
  * more and more proprietary solutions
  * client vs server-side
  * a word on print (Antenna House, Prince, Vivliostyle)
* making math content accessible for the web
  * 10 min
  * MathML and accessibility
    * understanding MathML's role
    * state of assistive technology for "plain" MathML
    * interoperability with other standards (HTML, ARIA etc)
  * tools for making math content accessible
    * manual (ARIA)
    * automated (speech-rule-engine)
* future directions for math on the web
  * 10 min
  * future of MathML
  * future of equation rendering
  * future of accessibile rendering

Prior experience with MathML or other formats is not necessary but helpful.
