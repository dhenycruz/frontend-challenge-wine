import { Navbar } from '../components/Navbar/NavBar';
import { Asidebar } from '../components/Asidebar/Asidebar';
import { Section } from '../components/Section/Section';

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
