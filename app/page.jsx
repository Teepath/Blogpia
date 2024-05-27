import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Blog</span>
    </h1>
    <p className='desc text-center'>
      Blogpia is an open-source Blog-promptia tool for modern world to
      discover, create and share creative blogs
    </p>

    <Feed />
  </section>
);

export default Home;
