import React from "react";
import Layout from "../components/layout";
import { HeadFC, graphql } from "gatsby";
import Seo from "../components/seo";

interface BlogData {
  allFile: {
    nodes: {
      name: string;
    }[];
  };
}

interface BlogPageProps {
  data: BlogData;
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="My Blog Posts" />;

export default BlogPage;

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;
