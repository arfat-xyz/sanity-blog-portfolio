import { createClient } from "next-sanity";

export default function Home({ blogs }) {
  console.log(blogs);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
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
