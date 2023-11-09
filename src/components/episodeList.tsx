"use client";
import React from "react";
import Link from "next/link";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import { EpisodeData } from "@/app/util/type";

const EpisodeList: React.FC<{ episodes: EpisodeData[] }> = ({ episodes }) => {
  const [selectedEpisode, setSelectedEpisode] = useState<string | null>(null);

  const handleEpisodeSelect = (episodeId: string) => {
    if (selectedEpisode === episodeId) {
      setSelectedEpisode(null);
      window.location.href = "/";
    } else {
      setSelectedEpisode(episodeId);
    }
  };
  return (
    <List
      dense
      sx={{
        marginTop: 5,
        width: "100%",
        maxWidth: "350",
        position: "relative",
        overflow: "auto",
        maxHeight: 500,
        background: "lightgreen",
      }}
    >
      {episodes.map((episode) => (
        <Link href={`/episode/${episode.id}`} key={episode.id}>
          <ListItemButton
            onClick={() => handleEpisodeSelect(episode.id)}
            sx={{
              "&:hover": {
                backgroundColor:
                  selectedEpisode === episode.id ? "lightgray" : "darkgray",
              },
              backgroundColor:
                selectedEpisode === episode.id ? "lightgray" : "transparent",
            }}
          >
            <ListItemText primary={episode.name} />
          </ListItemButton>
        </Link>
      ))}
    </List>
  );
};

export default EpisodeList;
