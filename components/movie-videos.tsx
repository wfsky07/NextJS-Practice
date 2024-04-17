import { API_URL } from "../app/(home)/page";

// 예고편/티저 fetch하는 함수
async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 로딩시간 3초
  throw new Error("something broke..");
  //   const response = await fetch(`${API_URL}/${id}/videos`);
  //   return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
