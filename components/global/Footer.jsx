const Footer = () => {
  return (
    <>
      <footer aria-labelledby="footer-heading" className="border-t bg-black">
        <h2 id="footer-heading " className="sr-only">
          Footer
        </h2>
        <div className="px-8 py-12 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-20 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="text-white xl:col-span-3">
              <span className="text-lg font-semibold lg:text-2xl">
                Lexington
              </span>
              <p className="lg:w-1/4 mt-2 text-sm text-zinc-400">
                <span className="mt-6 text-sm font-normal text-zinc-500">
                  Free and Premium UI Kit's built with Astro and Tailwind CSS.
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12 lg:mt-24 xl:col-span-3">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-xl text-white">Navigation</h3>
                  <ul role="list" className="mt-4 space-y-2">
                    <li>
                      <a
                        href="/demo-pages"
                        className="text-sm text-zinc-400 hover:text-white"
                      >
                        Demo Pages
                      </a>
                    </li>

                    <li>
                      <a
                        href="/style-guide"
                        className="text-sm text-zinc-400 hover:text-white"
                      >
                        Style Guide
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-xl text-white">Other projects</h3>
                  <ul role="list" className="mt-4 space-y-2">
                    <li>
                      <a
                        href="https://www.monoqrom.unwrapped.design"
                        className="text-sm text-zinc-400 hover:text-white"
                      >
                        monoqrom.
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.acclivity.unwrapped.design"
                        className="text-sm text-zinc-400 hover:text-white"
                      >
                        acclivity.
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.unwrapped.design"
                        className="text-sm text-zinc-400 hover:text-white"
                      >
                        Unwrapped
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-xl text-white">Stay updated</h3>
                  <ul role="list" className="mt-4 space-y-2">
                    <li>
                      <a
                        href="https://www.lexingtonthemes.com/license"
                        className="text-sm text-zinc-400 hover:text-white"
                      >
                        License
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.lexingtonthemes.com/documentation"
                        className="text-sm text-zinc-400 hover:text-white"
                      >
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-xl text-white">Socials</h3>
                  <ul role="list" className="mt-4 space-y-2">
                    <li>
                      <a
                        href="https://twitter.com/unwrappedHQ"
                        className="text-sm text-zinc-400 hover:text-white"
                      >
                        @unwrappedHQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/Mike_Andreuzza"
                        className="text-sm text-zinc-400 hover:text-white"
                      >
                        @Mike_Andreuzza
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://dribbble.com/MichaelAndreuzza.html"
                        className="text-sm text-zinc-400 hover:text-white"
                      >
                        Dribbble
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-black border-t border-zinc-900">
        <div className="px-8 py-3 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-20">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <a
                href="https://twitter.com/unwrappedHQ"
                className="p-3 text-sm text-zinc-400 transition duration-500 ease-in-out transform hover:text-white"
              >
                <span className=""> @unwrappedHQ</span>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center">
                <span className="mx-auto mt-2 text-sm text-zinc-400">
                  © 2022 Unwrapped Design. All rights reserved
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
