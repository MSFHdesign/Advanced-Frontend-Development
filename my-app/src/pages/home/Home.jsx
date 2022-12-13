import TopNav from "../../components/top-nav/topnav";
import StoryDisplay from "../../pages/Story/Story_Display";
// eslint-disable-next-line no-unused-vars
import ArticleDisplay from "../Story/Article_Display";

export default function Home() {
  return (
    <>
      <TopNav />
      {/* <h2> Home </h2> */}
      <StoryDisplay />
    </>
  );
}
