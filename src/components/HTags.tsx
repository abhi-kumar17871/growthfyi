const Htags = (props: { htags: any }) => {
  const { htags } = props;

  const HTag = [
    {
      propKey: "h1",
      displayName: "h1",
    },
    { propKey: "h2", displayName: "h2" },
    { propKey: "h3", displayName: "h3" },
    { propKey: "h4", displayName: "h4" },
    { propKey: "h5", displayName: "h5" },
    {
      propKey: "h6",
      displayName: "h6",
    },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg space-y-4">
      <h2 className="text-2xl font-bold text-center">Heading Tags</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {HTag.map((tagName) => (
          <div
            key={tagName.displayName}
            className={`bg-white p-4 rounded-lg shadow-md border border-gray-200 ${
              htags.htags[tagName.displayName] ? "" : "hidden"
            }`}
          >
            {htags.htags[tagName.displayName] ? (
              <div>
                <h3 className="text-xl font-semibold">
                  We found #{htags.htags[tagName.propKey].length}{" "}
                  {tagName.displayName} tags on this page
                </h3>
                <div className="text-gray-600">
                  {htags.htags[tagName.propKey].map(
                    (item: string, index: number) => (
                      <div key={index}>
                        {index + 1}. {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            ) : (
              "hidden"
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Htags;
