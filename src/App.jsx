import Card from "./Components/Card";

const data = [
  {
    title: "Basic",
    bundle: "100GB",
    price: "1.99/Month",
    bgColor: "bg-slate-700",
    btnColor: "bg-slate-800",
  },
  {
    title: "Standard",
    bundle: "200GB",
    price: "3.99/Month",
    bgColor: "bg-violet-700",
    btnColor: "bg-violet-800",
  },
  {
    title: "Basic",
    bundle: "2TB",
    price: "12.99/Month",
    bgColor: "bg-slate-700",
    btnColor: "bg-slate-800",
  },
];
export default function App() {
  return (
    <div className="flex items-center justify-center bg-slate-800 min-h-screen">
      <div className="flex flex-col space-y-6 my-6 md:flex-row md:space-y-0 md:space-x-12">
        <Card
          title={data[0].title}
          bundle={data[0].bundle}
          price={data[0].price}
          bgColor={data[0].bgColor}
          btnColor={data[0].btnColor}
        />
        <Card
          title={data[1].title}
          bundle={data[1].bundle}
          price={data[1].price}
          bgColor={data[1].bgColor}
          btnColor={data[1].btnColor}
        />
        <Card
          title={data[2].title}
          bundle={data[2].bundle}
          price={data[2].price}
          bgColor={data[2].bgColor}
          btnColor={data[2].btnColor}
        />
      </div>
    </div>
  );
}
