import { createClient } from "next-sanity";
import PortableText from "react-portable-text";

export default function Home({ blogs }) {
  // console.log(blogs);
  return (
    <>
      <h1 className="text-3xl font-bold underline">{blogs[0].title}</h1>
      {/* <p> {blogs[0].content} </p> */}
      <PortableText
        // Pass in block content straight from Sanity.io
        content={blogs[0].content}
        projectId="w3pjopko"
        dataset="production"
        // Optionally override marks, decorators, blocks, etc. in a flat
        // structure without doing any gymnastics
        serializers={{
          h1: (props) => <h1 style={{ color: "red" }} {...props} />,
          li: ({ children }) => (
            <li className="special-list-item">{children}</li>
          ),
        }}
      />
    </>
  );
}
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
