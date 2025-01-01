import { useEffect, useState } from 'react';
import Env from '../../utils/env';
import { Anchor, Title } from '@mantine/core';

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
    <Title order={5}>
      Version:&nbsp;
      <Anchor href={`https://github.com/${Env.VITE_GITHUB_REPO}/releases/tag/v${version}`} target="_blank" size="sm">
        {version}
      </Anchor>
    </Title>
  );
};

export default Version;