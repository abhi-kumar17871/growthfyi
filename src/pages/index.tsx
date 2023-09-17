import React, { useState, useEffect } from "react";
import { fetchTaskData } from "./api/taskApi";
import { fetchPageData } from "./api/pageApi";
import { PageData, PostData } from "../components/types";
import { handleChange } from "../components/formUtils";
import {
  HTags,
  SocialMedia,
  calculatePageMetrics,
  onPageResults,
} from "../components/paramUtils";
import SocialMediaTags from "../components/SocialMediaTest";
import SpeedInsights from "../components/SpeedInsights";
import Htags from "../components/HTags";
import OnPage from "../components/onPageTest";
import Loading from "../components/Loading";

const initialFormData: PostData = {
  target: "",
  max_crawl_pages: 10,
  load_resources: true,
  enable_javascript: true,
  custom_js: "meta = {}; meta.url = document.URL; meta;",
  tag: "some_string_123",
  pingback_url: "https://your-server.com/pingscript?id=$id&tag=$tag",
  enable_browser_rendering: true,
};

const initialPageData: PageData = {
  id: "",
};

const App: React.FC = () => {
  const [formData, setFormData] = useState<PostData>(initialFormData);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [pageResult, setPageResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (taskId) {
      setIsLoading(true);
      initialPageData.id = taskId;
      const intervalId = setInterval(function () {
        fetchPageData(initialPageData)
          .then((result) => {
            if (
              result["data"]["tasks"][0].result[0].crawl_progress === "finished"
            ) {
              setPageResult(result["data"]["tasks"]);
              clearInterval(intervalId);
              setIsLoading(false);
              return () => {};
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }, 5000);
    }
  }, [taskId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetchTaskData(formData);
      const result = response.data.tasks;
      if (result && result.length > 0) {
        const firstTask = result[0];
        console.log(firstTask);
        setTaskId(firstTask.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-3 bg-gray-100">
      <div className="text-center font-bold text-3xl">
        DataForSEO API Example
      </div>
      <form
        onSubmit={handleSubmit}
        className="text-center flex justify-center items-center my-3"
      >
        <label className="text-xl font-bold mx-2">
          Target URL:
          <input
            type="text"
            name="target"
            className="rounded-md text-base font-normal h-9 border-2 border-gray-300"
            value={formData.target}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
        </label>
        <button
          type="submit"
          className="border-2 border-gray-300 px-3 py-1 rounded-lg bg-zinc-500 text-white hover:bg-gray-300 hover:text-zinc-500 hover:border-zinc-500"
        >
          Submit
        </button>
      </form>
      {isLoading ? (
        <Loading />
      ) : (
        pageResult && (
          <div>
            <div className="text-center text-3xl font-bold">
              {" "}
              Result for{" "}
              <a
                href={formData.target}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                {formData.target}
              </a>{" "}
            </div>
            <OnPage onPage={onPageResults(pageResult)} />
            <SpeedInsights parameter={calculatePageMetrics(pageResult)} />
            {HTags(pageResult) && <Htags htags={HTags(pageResult)} />}
            {SocialMedia(pageResult) && (
              <SocialMediaTags socialMedia={SocialMedia(pageResult)} />
            )}
          </div>
        )
      )}
    </div>
  );
};

export default App;
