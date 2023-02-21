import { useEffect, useState } from "react";

const PREFIX_URL_CAT_IMAGE = "https://cataas.com/";

function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const twoFirstWords = fact.split(" ", 2).join(" ");

    fetch(`https://cataas.com/cat/cute/says/${twoFirstWords}?json=true`)
      .then((res) => res.json())
      .then((data) => {
        const { url } = data;
        setImageUrl(url);
      });
  }, [fact]);

  return { imageUrl: `${PREFIX_URL_CAT_IMAGE}${imageUrl}` };
}

export default useCatImage;
