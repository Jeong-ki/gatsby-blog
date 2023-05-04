import styled from '@emotion/styled';
import React, { createRef, FunctionComponent, useEffect } from 'react';
import { useLocation } from '@gatsbyjs/reach-router';

const src = 'https://utteranc.es/client.js';
const repo = 'Jeong-Ki/Jeong-Ki.github.io';

type UtterancesAttributesType = {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
};

const UtterancesWrapper = styled.div`
  padding: 0 3.5rem;
`;

const CommentWidget: FunctionComponent = function () {
  const element = createRef<HTMLDivElement>();
  const location = useLocation();

  useEffect(() => {
    if (element.current === null) return;

    const utterances: HTMLScriptElement = document.createElement('script');

    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': location.pathname,
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current.appendChild(utterances);
  }, [location.pathname]);

  return <UtterancesWrapper ref={element} />;
};

export default CommentWidget;
