1.Background - image fix:
.background{
  background-size: auto;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
}

2.Sticky Top:
*assign "sticky-top" at the top level of the cotainer you want.

3.Bottom page footer:
*make the container which contains footer to flex-column by assigning "d-flex flex-column min-vh-100"
*make footer top margin auto "mt-auto"

4.ScrollSpy:
*activate scrollspy in the body tag "data-bs-spy="scroll" data-bs-target="#navbar-ID" data-bs-offset="0" tabindex="0""
*enable scrollspy script
<script>
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar-ID'
    })
</script>
*enable scrollable page in body tag
.scrollspy-example {
  position: relative;
  height: 300px;
  overflow: auto;
}
*map(href) the sections to the navbar by IDs

5.Page Router(React-Router):
*use react-router for multi-page webpage
*install react-router-dom "npm i react-router-dom"
*implement BrowserRouter above <App> element
<BrowserRouter>
  <App />
</BrowserRouter>
*define routes for the pages
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
*define <Link> / <NavLink> instead of <a> tag
<NavLink to="/about">ABOUT</NavLink>