import { TiTick } from "react-icons/ti";
export default function Card(props) {
  const { title, bundle, price, bgColor, btnColor } = props;
  return (
    // card
    <div className={`text-white ${bgColor} rounded-xl`}>
      {/* uppaer part */}
      <div className="p-8 mt-3 mx-3 bg-slate-800 rounded-t-xl">
        <div className=" uppercase text-center">{title}</div>
        <h2 className=" font-serif mt-10 text-center text-5xl">{bundle}</h2>
        <div className="mt-2 text-center">${price}</div>
        <div className="flex justify-center">
          <a
            href=""
            className={`px-5 py-3 mt-5 border ${btnColor} border-violet-700 rounded-lg hover:bg-violet-700 duration-200`}
          >
            Purchase
          </a>
        </div>
      </div>
      <div className="border-t-2 border-slate-700"></div>
      {/* lower part */}
      <div className=" p-8 mx-3 mb-3 bg-slate-800 rounded-b-xl">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-center">
            <TiTick />
            <span className="text-sm ml-1">{bundle} of storage</span>
          </div>
          <div className="flex justify-center">
            <TiTick />
            <span className="text-sm ml-1">Options to add members</span>
          </div>
          <div className="flex justify-center">
            <TiTick />
            <span className="text-sm ml-1">extra member benefits</span>
          </div>
        </div>
      </div>
    </div>
  );
}
