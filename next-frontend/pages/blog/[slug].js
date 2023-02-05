import { createClient } from "next-sanity";
import Head from "next/head";
import { useRouter } from "next/router";
import imageUrlBuilder from "@sanity/image-url";
import PortableText from "react-portable-text";
import moment from "moment/moment";
import Link from "next/link";
import Image from "next/image";
// import "/public/assets/styles/main.min.css";
const Post = ({ blog, author }) => {
  const client = createClient({
    projectId: "w3pjopko",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  // console.log("blog", blog);
  // console.log("author", author);
  return (
    <>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>{blog.title}</title>

        <meta property="og:title" content={`"${blog.title}"`} />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//post" />

        <meta property="og:url" content="//post" />

        <meta name="description" content={`"${blog.desc}"`} />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />
        {/* 
        <link
          crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        /> */}
        {/* 
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        /> */}

        {/* <link
          crossorigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        /> */}

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
        />
      </Head>
      <div>
        {/* <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden">
          <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
            <button className="absolute top-0 right-0 mt-4 mr-4">
              
            </button>

            <ul className="mt-8 flex flex-col">
              <li className="py-2">
                <Link
                  href="/#about"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  About
                </Link>
              </li>

              <li className="py-2">
                <Link
                  href="/#services"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Services
                </Link>
              </li>

              <li className="py-2">
                <Link
                  href="/#portfolio"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Portfolio
                </Link>
              </li>

              <li className="py-2">
                <Link
                  href="/#clients"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Clients
                </Link>
              </li>

              <li className="py-2">
                <Link
                  href="/#work"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Work
                </Link>
              </li>

              <li className="py-2">
                <Link
                  href="/#statistics"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Statistics
                </Link>
              </li>

              <li className="py-2">
                <Link
                  href="/#blog"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Blog
                </Link>
              </li>

              <li className="py-2">
                <Link
                  href="/#contact"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div> */}

        <div>
          <div className="container py-6 md:py-10">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                  {blog.title}
                </h1>
                <div className="flex items-center pt-5 md:pt-10">
                  <div>
                    <Image
                      // src="/assets/img/blog-author.jpg"
                      src={builder
                        .image(author.authorimage)
                        .width(200)
                        .height(200)
                        .fit("fillmax")
                        .url()}
                      width={200}
                      height={200}
                      className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                      alt="author image"
                    />
                  </div>
                  <div className="pl-5">
                    <span className="block font-body text-xl font-bold text-grey-10">
                      By {author.name}
                    </span>
                    <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                      {moment(blog._createdAt).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="prose max-w-none pt-8">
                <PortableText
                  // Pass in block content straight from Sanity.io
                  content={blog.content}
                  projectId="iytovi01"
                  dataset="production"
                  // Optionally override marks, decorators, blocks, etc. in a flat
                  // structure without doing any gymnastics
                  serializers={{
                    image: (props) => (
                      <>
                        <div className="text-center">
                          <Image
                            src={builder.image(props.asset).fit("fill").url()}
                            // fill="auto"

                            width={2000}
                            height={3000}
                            className="max-h-96"
                            alt={props.alt}
                          />
                        </div>
                        {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
                      </>
                    ),
                    li: ({ children }) => (
                      <li className="special-list-item">{children}</li>
                    ),
                  }}
                />
              </div>
              <div className="flex flex-col  text-white bg-[#5540af] items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                  <Image
                    src={builder
                      .image(author.authorimage)
                      .width(200)
                      .height(200)
                      .fit("fillmax")
                      .url()}
                    width={200}
                    height={200}
                    className="rounded-full shadow"
                    alt="author image"
                  />
                </div>
                <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                  <span className="bg-gray-400 px-5 py-1 rounded-md mb-3">
                    Author
                  </span>
                  <h3 className="pt-10 font-body text-2xl font-bold md:pt-0">
                    {author.name}
                  </h3>
                  <p className="pt-5 font-body text-lg leading-8 sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                    {author.desc}
                  </p>
                  <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                    <Link href="https://www.facebook.com/arfat.xyz">
                      <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/arfatxyz/"
                      className="pl-4"
                    >
                      <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              © Copyright 2022. All right reserved, Arfat.xyz.
            </p>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <Link href="https://www.facebook.com/arfat.xyz">
                <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/in/arfatxyz/"
                className="pl-4"
              >
                <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Temorary /> */}
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "w3pjopko",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });
  const { slug } = context.query;

  const query = `*[_type == "blog" && slug.current == '${slug}'] `;
  const blogs = await client.fetch(query);
  const authors = await client.fetch(
    `*[_type == "author" && _id == '${blogs[0].author.author._ref}' ]`
  );
  // console.log("authon", author);
  return {
    props: {
      blog: blogs[0],
      author: authors[0],
    },
  };
}
