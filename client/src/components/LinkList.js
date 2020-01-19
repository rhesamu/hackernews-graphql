import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Link from './Link';

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        url
        description
      }
    }
  }
`;

const LinkList = props => {
  const { loading, error, data } = useQuery(FEED_QUERY);

  if (loading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  const linksToRender = data.feed.links;

  return (
    <>
      {linksToRender.map(link => (
        <Link key={link.id} link={link} />
      ))}
    </>
  );
};

export default LinkList;
