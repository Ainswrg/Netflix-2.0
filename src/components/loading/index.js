import { Spinner, LockBody, Picture, ReleaseBody } from './styles/loading';

export default function Loading({ src, ...props }) {
  return (
    <Spinner props={props}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
