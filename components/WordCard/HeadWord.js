import useStore from '../../hooks/useStore';

export default function HeadWord() {
  const ponsData = useStore(state => state.ponsData);
  return (
    <>
      {/* Outputs German word */}
      <h3
        dangerouslySetInnerHTML={{
          __html: ponsData.headwordPlus,
        }}
      />
    </>
  );
}
