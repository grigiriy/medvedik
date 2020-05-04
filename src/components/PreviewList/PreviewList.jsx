import React from 'react';

import PreviewCard from '../PreviewCard';

import Content from '../../assets/db/productList.js';

import { graphql, StaticQuery } from 'gatsby';

const PreviewList = (props) => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: { dir: { regex: "/(works)/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
              name
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="container columns">
        {data.allFile.edges.map((edge) => (
          <>
            <PreviewCard
              content={Content[edge.node.name]}
              key={Content[edge.node.name].id}
              mobile={props.mobile}
              initLightBox={props.initLightBox}
              image={edge.node.childImageSharp.fluid}
            />
          </>
        ))}
      </div>
    )}
  />
);

export default PreviewList;
