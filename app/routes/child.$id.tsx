import { useLoaderData } from "@remix-run/react";
import { tw } from "twind";

export async function loader() {
  return [{ id: 5 }, { id: 7 }, { id: 2 }, { id: 52 }, { id: 9 }, { id: 15 }];
}

function Child() {
  const id = useLoaderData();
  console.log(id);
  return (
    <div className={tw`font-bold text-[40px]`}>
      {id.map((el: { id: number }) => (
        <div key={el.id}>{el.id}</div>
      ))}
    </div>
  );
}

export default Child;
