import { useEffect, useState } from "react";

interface IAddress {
  street1: string;
  city: string;
  state: string;
  zipcode: string;
}
interface ILocation {
  address: IAddress;
  geo: IGeo;
}
interface IGeo {
  type: {
    type: string;
    enum: ["Point"];
    required: true;
  };
  coordinates: {
    type: [number, number];
    required: true;
  };
}

interface ITheater {
  theaterId: number;
  location: ILocation;
}

export default function Theaters(): JSX.Element {
  const FETCH_URL = "http://localhost:8080/theater/list";
  const [list, setList] = useState<ITheater[]>([]);
  async function getData(): Promise<void> {
    const FETCHED_DATA = await fetch(FETCH_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setList(FETCHED_JSON);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1> List</h1>

      {list.map((data, idx) => (
        <div key={idx}>
          <p>{data.theaterId}</p>
          <p>{data.location?.address.street1}</p>
        </div>
      ))}
    </div>
  );
}
