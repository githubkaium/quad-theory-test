import { Items } from '@/components/show-item';

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="mt-10 py-2 min-h-screen">
      <div className="py-2">
        <div className="flex justify-between items-center mx-20 p-1">
          <div>
            <h2>Popular</h2>
          </div>
          <div className="text-orange-600">
            <button>AddMore</button>
          </div>
        </div>
        <Items />
      </div>
      <div className="py-2">
        <div className="flex justify-between items-center mr-20 ml-12 p-1">
          <div>
            <h2>Recommended</h2>
          </div>
          <div>
            <button>AddMore</button>
          </div>
        </div>
        <Items />
      </div>
    </main>
  );
}
