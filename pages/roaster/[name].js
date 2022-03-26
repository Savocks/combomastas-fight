import { getAllRoasterNames, getRoasterData } from '../../lib/roaster';

export default function Roaster({ roasterData }) {
  return <div>ciao</div>;
}

export async function getStaticPaths() {
  const paths = getAllRoasterNames();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const roasterData = getRoasterData(params.name);
  return {
    props: {
      roasterData,
    },
  };
}
