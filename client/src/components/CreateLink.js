import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      url
      description
    }
  }
`;

const CreateLink = props => {
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const [response, setResponse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [post, { data, loading, error }] = useMutation(POST_MUTATION);

  const handleChangeInput = event => {
    event.preventDefault();

    const { target: { name, value } } = event;

    switch (name) {
      case 'description-input':
        setDescription(value);
        return;
      case 'url-input':
        setUrl(value);
        return;
      default:
        return;
    }
  }

  const onSubmit = async () => {
    try {
      await post({
        variables: {
          description,
          url
        }
      })
    } catch (err) {
      setErrorMessage(err);
      return;
    }

    setResponse(data);
  };

  return (
    errorMessage ? (
      <div>
        Error: {JSON.stringify(errorMessage)}
      </div>
    ) : (
      <>
        <div className='flex flex-column mt3'>
          <input
            name='description-input'
            className='mb2'
            value={description}
            onChange={handleChangeInput}
            type='text'
            placeholder='Description'
          />
          <input
            name='url-input'
            className='mb2'
            value={url}
            onChange={handleChangeInput}
            type='text'
            placeholder='URL'
          />
          <button onClick={onSubmit}>Submit</button>
        </div>
        {response && (
          <div>
            <p>Response:</p>
            {response}
          </div>
        )}
      </>
    )
  );
};

export default CreateLink;
