const SpeedInsights = (props: { parameter: any }) => {
  const { parameter } = props;
  const parameterNames = [
    {
      propKey: "timeToSecureConnection",
      displayName: "Time to Secure Connection",
    },
    { propKey: "waitingTime", displayName: "Waiting Time" },
    { propKey: "downloadTime", displayName: "Download Time" },
    { propKey: "timeToInteractive", displayName: "Time To Interactive" },
    { propKey: "domComplete", displayName: "DOM Complete" },
    {
      propKey: "largestContentfulPaint",
      displayName: "Largest Contentful Paint",
    },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg space-y-4">
      <h2 className="text-2xl font-bold text-center">Performance Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {parameterNames.map((parameterName) => (
          <div
            key={parameterName.displayName}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <h3 className="text-xl font-semibold flex items-center justify-center">
              {parameterName.displayName}
            </h3>
            <p className="text-gray-600 flex items-center justify-center">
              {parameter[parameterName.propKey].toFixed(2)} ms
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeedInsights;
