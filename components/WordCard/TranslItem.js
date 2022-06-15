import useStore from '../../hooks/useStore';

export default function TranslItem({ translation }) {
  const ponsData = useStore(state => state.ponsData);
  const chooseTranslation = useStore(state => state.chooseTranslation);

  return (
    <>
      <h4
        dangerouslySetInnerHTML={{
          __html: translation,
        }}
      />
    </>
  );
}
