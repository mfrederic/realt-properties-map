import { useEffect, useState } from 'react';
import Env from '../../utils/env';
import { Anchor } from '@mantine/core';

const Version = () => {
  const [version, setVersion] = useState('1.0.0');

  useEffect(() => {
    fetch(`${Env.VITE_GITHUB_RAW_URL}/${Env.VITE_GITHUB_REPO}/refs/heads/main/package.json`)
      .then(res => res.json())
      .then(data => {
        setVersion(data.version);
      });
  }, []);


  return (
    <h2>
      Version:&nbsp;
      <Anchor href={`https://github.com/${Env.VITE_GITHUB_REPO}/releases/tag/v${version}`} target="_blank" size="sm">
        {version}
      </Anchor>
    </h2>
  );
};

export default Version;