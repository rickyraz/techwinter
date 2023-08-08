/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "ricky ra",
  // description: "This is my new blog.",
  // header: <header>Your custom header</header>,
  // section: (post: Post) => <section>Your custom section with access to Post props.</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "./ra.png",
  avatarClass: "rounded-full",
  author: "An author",
  links: [
    // seharusnya emailnya email work/domain
    { title: "Email", url: "mailto:rickyraihan83@gmail.com" },
    { title: "GitHub", url: "https://github.com/rickyraz" },
    { title: "Twitter", url: "https://twitter.com/ricky_ra_" },
  ],
  middlewares: [
    // If you want to set up Google Analytics, paste your GA key here.
    ga("G-F0KVTY705D"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),
  ],
});
