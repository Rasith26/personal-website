NOTES:

1.Don't try to fix vulnerabilities(if you did):
Solution: 
i.install latest node version
ii.delete node_modules and package-lock.json files and run "npm install"
iii.run "npm audit fix --force"

FIXES:

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
<!-- <BrowserRouter>
  <App />
</BrowserRouter> -->
*define routes for the pages
<!-- <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
</Routes> -->
*define "Link" / "NavLink" instead of "a" tag
<!-- <NavLink to="/about">ABOUT</NavLink> -->

6.Navigate Hooks:
*define Navigate using useNavigate() hook
const navigate = useNavigate();
*implement it in div onClick
onClick={() => {
  navigate("/NavigatePath");
}}

7.Zoom effect on Hover:
section div.card {
    transition: transform 2s;
}
section div.card:hover {
    transform: scale(1.01);
}

8.Disable Right Click(No Download):
*define 'oncontextmenu="return false;"' in body tag

9.Place div in bottom-right corner:
*set it's left and top margin to auto
section div div {
    margin-top: auto;
    margin-left: auto;
    border-radius: 10px;
}

10.center a div in bootstrap:
*difine "d-flex align-items-center justify-content-center" in the container

11.carousel(slideshow) fade effect:
*define "carousel-fade" in the top container's class

12.carousel(slideshow) auto slide:
*define "data-bs-ride="carousel"" in the top container(div tag)

13.message me logic:
*implement emailJS to sent mail to yourself
<!-- const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_de6wnx8', 'template_9dq66to', form.current, {
        publicKey: 'tmQsMcrvDl8wWqhZC',
    })
    .then(
        () => {
            console.log('SUCCESS!');
            console.log('Email sent successfully!');
            e.target.reset();
            toast.success('Message sent!');
        },
        (error) => {
            console.log('FAILED...', error.text);
            toast.error('Problem occured!');
        },
    );
}; -->


BUGS:

1.(.active) class in scrollspy not working:
Bug: didn't apply .active class based on scroll value
Reason: unknown

2.sub-route(sub-page) got broke on page reload(netlify):
Bug: didn't recognise the sub-page on reload on live website.
Reason: didn't implement sub-route on netlify
Solution: define redirect rules in netlify.toml file in root directory
<!-- [[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200 -->
2.1.page doesn't exist also renders
Bug: render pages that doesn't exist
Reason: redirecting every page after "/*" (defined single redirect rule)
Solution: define redirect rule for every available pages

3.didn't reset scroll position to top on component render:
Bug: scroll position remains the same on new page render
Reason: didn't reset scroll position to zero(Top)
Solution: define a function component to reset scroll position
<!-- const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
} -->

4.react toastify not closing automatically:
Bug: toast message got stuck on screen
Reason: <ToastContainer /> not defined properly
Solution: define <ToastContainer /> at the bottom of the page(index.js) and define toast properties in <ToastContainer />
<!-- <ToastContainer 
  position='top-right' 
  theme='dark' 
  autoClose={3000} 
  newestOnTop 
  draggable 
  closeOnClick 
  transition={Bounce}
/> -->