import Sidebar from '../components/Sidebar';
import Editor from '../components/Editor';

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 p-8">
        <Editor />
      </main>
    </>
  );
}