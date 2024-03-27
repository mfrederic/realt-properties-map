import packageJson from '../../../package.json';

const Version = () => {
  return (
    <h2>Version: {packageJson.version}</h2>
  );
};

export default Version;