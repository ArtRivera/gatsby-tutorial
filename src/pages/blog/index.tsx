import React from "react";
import Layout from "../../components/layout";
import { HeadFC, Link, graphql } from "gatsby";
import Seo from "../../components/seo";

interface BlogNode {
  frontmatter: {
    title: string;
    date: string;
    slug: string;
  };
  id: string;
  excerpt: string;
}
interface BlogData {
  allMdx: {
    nodes: BlogNode[];
  };
}

interface BlogPageProps {
  data: BlogData;
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => {
        return (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        );
      })}
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="My Blog Posts" />;

export default BlogPage;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;
