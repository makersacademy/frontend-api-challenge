import { useEffect, useState } from "react";
import { CommentData } from "../../types/apiData";
import { openAiClient } from "../utils/openAiHelper";

export const useOpenAi = (content: string, id: number) => {
  const [commentData, setCommentData] = useState<CommentData[]>([]);
  const [isCommentLoading, setIsCommentLoading] = useState(false);
  const qty = Math.ceil(Math.random() * 4);

  useEffect(() => {
    const data = localStorage.getItem(`peep-${id}-content`);
    if (data) {
      setCommentData(JSON.parse(data));
    } else {
      generateFakeComments();
    }
  }, []);

  const generateFakeComments = async () => {
    setIsCommentLoading(true);
    const data = await openAiClient(content, qty);
    if (data) {
      setCommentData(data);
      localStorage.setItem(`peep-${id}-content`, JSON.stringify(data));
    } else {
      setCommentData([]);
    }
    setIsCommentLoading(false);
  };

  return [commentData, isCommentLoading] as const;
};
