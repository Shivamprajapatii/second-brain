import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface ContentItem {
  _id: string;
  title: string;
  link: string;
  type: string;
}

interface BrainData {
  username: string;
  content: ContentItem[];
}

const BrainShare = () => {
  const { id } = useParams<{ id: string }>();
  const [brainData, setBrainData] = useState<BrainData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid brain ID");
      setIsLoading(false);
      return;
    }

    axios.get(`${BACKEND_URL}/api/v1/brain/${id}`)
      .then(response => setBrainData(response.data))
      .catch(() => setError("Failed to fetch data"))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {brainData && (
        <>
          <h1 className="text-2xl font-bold text-center mb-4">{brainData.username}'s Shared Brain</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {brainData.content.map(item => (
              <div key={item._id} className="p-4 border rounded-lg shadow-lg bg-white">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Watch Video
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BrainShare;