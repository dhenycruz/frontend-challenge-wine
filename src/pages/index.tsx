import { Navbar } from '../components/Navbar/NavBar';
import { Asidebar } from '../components/PageCatalog/Asidebar/Asidebar';
import { Section } from '../components/PageCatalog/Section/Section';

const Home = () => (
  <>
    <Navbar />
    <main>
      <Asidebar />
      <Section />
    </main>
  </>
);

export default Home;
