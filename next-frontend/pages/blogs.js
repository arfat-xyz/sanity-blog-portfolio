import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import Script from "next/script";
import Head from "next/head";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
const Blogs = ({ blogs }) => {
  const client = createClient({
    projectId: "w3pjopko",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  return (
    <div className="bg-grey-50" id="blog">
      <div className="container m-auto py-16 md:py-20">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          I also like to write
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Check out my latest posts!
        </h4>
        <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
          {blogs.map((item, i) => (
            <Link
              key={item.slug.current}
              href={`blog/${item.slug.current}`}
              className="shadow  overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div
                style={{
                  backgroundImage: `url(${
                    builder.image(item.blogimage).url() ||
                    "/assets/img/post-01.png"
                  })`,
                }}
                className="hover:scale-105 bg-cover bg-center transition-all duration-300 group relative h-72  bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
              >
                <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 bg-[#402f8a] border-[#4f3ca2] px-6 py-2 text-center font-body text-sm font-bold uppercase text-[#fff] md:text-base">
                  Read More
                </span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black">
                  {item.title}
                </span>
                <span className="block pt-2 font-body text-grey-20">
                  {item.metadesc}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

export async function getServerSideProps() {
  const client = createClient({
    projectId: "w3pjopko",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });
  const blogs = await client.fetch(`*[_type == "blog"]`);
  return {
    props: {
      blogs,
    },
  };
}
