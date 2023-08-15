import { useState, useEffect } from "react";
import { getTopArtists } from "../spotify";
import { catchErrors } from "../utils";
import {
  ArtistsGrid,
  SectionWrapper,
  TimeRangeButtons,
  Loader,
} from "../components";

export default function TopArtists() {
  const [topArtists, setTopArtists] = useState(null);
  const [activeRange, setActiveRange] = useState("short");

  useEffect(() => {
    async function fetchData() {
      const { data } = await getTopArtists(`${activeRange}_term`);
      setTopArtists(data);
    }

    catchErrors(fetchData());
  }, [activeRange]);

  return (
    <main>
      <SectionWrapper title="Top Artists" breadcrumb={true}>
        <TimeRangeButtons
          activeRange={activeRange}
          setActiveRange={setActiveRange}
        />

        {topArtists && topArtists.items ? (
          <ArtistsGrid artists={topArtists.items} />
        ) : (
          <Loader />
        )}
      </SectionWrapper>
    </main>
  );
}
