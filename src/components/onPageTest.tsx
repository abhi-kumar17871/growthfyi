const OnPage = (props: { onPage: any }) => {
  
  const { onPage } = props;

  const onPageParameter = [
    {
      propKey: "onPageScore",
      displayName: "OnPage Result",
    },
    { propKey: "internalLinks", displayName: "Internal Links" },
    { propKey: "externalLinks", displayName: "External Links" },
    { propKey: "numberOfImages", displayName: "Number of Images" },
    { propKey: "imagesSizes", displayName: "Images Size" },
    {
      propKey: "scripts",
      displayName: "Scripts",
    },
    {
      propKey: "scriptsSize",
      displayName: "Scripts Size",
    },
    { propKey: "plainTextSize", displayName: "Plain Text Size" },
    { propKey: "plainTextRate", displayName: "Plain Text Rate" },
    { propKey: "plainTextWordCount", displayName: "Plain Text Word Count" },
    {
      propKey: "automatedReadabilityIndex",
      displayName: "Automated Readability Index",
    },
    {
      propKey: "colemanLiauReadabilityIndex",
      displayName: "Coleman Liau Readability Index",
    },
    {
      propKey: "daleChallReadabilityIndex",
      displayName: "Dale Chall Readability Index",
    },
    {
      propKey: "fleschKincaidReadabilityIndex",
      displayName: "Flesch Kincaid Readability Index",
    },
    { propKey: "smogReadabilityIndex", displayName: "Smog Readability Index" },
    {
      propKey: "descriptionToContentConsistency",
      displayName: "Description to Content Consistency",
    },
    {
      propKey: "titleToContentConsistency",
      displayName: "Title to Content Consistency",
    },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg space-y-4">
      <h2 className="text-2xl font-bold text-center">OnPage Results</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {onPageParameter.map((parameter) => (
          <div
            key={parameter.displayName}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <h3 className="text-xl font-semibold flex items-center text-center justify-center">
              {parameter.displayName}
            </h3>
            <p className="text-gray-600 flex items-center justify-center">
              {onPage[parameter.propKey].toFixed(0)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnPage;
