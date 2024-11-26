import rootPackageJson from '../../../../package.json';

const Version = () => {
  return (
    <h2>Version: {rootPackageJson.version}</h2>
  );
};

export default Version;