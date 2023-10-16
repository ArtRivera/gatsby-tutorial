import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { HeadFC, graphql } from "gatsby";

interface BlogData {
  mdx: {
    id: string;
    frontmatter: {
      title: string;
      date: string;
    };
  };
}

interface BlogPageProps extends React.PropsWithChildren {
  data: BlogData;
}

const BlogPost: React.FC<BlogPageProps> = ({data, children}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const Head: HeadFC<BlogData> = ({data}) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;
