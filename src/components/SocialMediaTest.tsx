const SocialMediaTags = (props: { socialMedia: any }) => {

  const { socialMedia } = props;
  
  const tagNames = [
    { propKey: "ogtitle", displayName: "og:title" },
    { propKey: "ogdesc", displayName: "og:description" },
    { propKey: "ogimage", displayName: "og:image" },
    { propKey: "ogtype", displayName: "og:type" },
    { propKey: "twittercard", displayName: "twitter:card" },
    { propKey: "twittercreator", displayName: "twitter:creator" },
    { propKey: "twittersite", displayName: "twitter:site" },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg space-y-4">
      <h2 className="text-2xl font-bold text-center">Social Media Tags</h2>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full overflow-x-auto">
          <table className="w-full ">
            <thead>
              <tr>
                <th className="px-4 py-2">Key</th>
                <th className="px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {tagNames.map((tagName) => (
                <tr key={tagName.displayName}>
                  <td className="border px-4 py-2">{tagName.displayName}</td>
                  <td className="border px-4 py-2">
                    <div>{socialMedia[tagName.propKey]}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="lg:m-4 my-4 flex items-center justify-center lg:w-1/2 w-full">
          <img
            src={socialMedia["ogimage"]}
            alt=""
            className="h-auto w-2/3 flex items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaTags;
