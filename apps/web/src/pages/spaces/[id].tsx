import Sidebar from "@twidge/components/sidebar";
import InfiniteScroll from 'react-infinite-scroller';

const Space = () => {
  return (
    <>
      <Sidebar /> 
      <div style={{height: '100%', overflow: 'auto'}}>      
          <InfiniteScroll
            pageStart={0}
            hasMore={true}
            loadMore={true}
          >
            <h1>AforApple</h1>
          </InfiniteScroll>
      </div>
    </>
  );
};

export default Space;
