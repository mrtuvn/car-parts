"use client";

import { useGetUsersQuery } from "@/redux/services/userApi";
import { decrement, increment, reset } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
interface User {
  id: number;
  name: string;
}

export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  return (
    <main className="max-w-[1200px] p-[20px] ms-[auto] me-[auto]">
      <div className="mb-5 text-center">
        <h4 className="mb-5">{count}</h4>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button
          onClick={() => dispatch(decrement())}
          className="ms-2 me-2"
        >
          decrement
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>

      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div className="grid gap-2 grid-cols-4">
          {data.map((user: User) => (
            <div
              key={user.id}
              className="text-center border-[1px solid #ccc]"
            >
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                className="object-fit text-center inline-block"
                width={180}
                height={180}
              />
              <h3 className="mt-4">{user.name}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}
