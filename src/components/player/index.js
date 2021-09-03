import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';
import { Container, Button, Overlay, Inner, Close } from './styles/player';

export const PlayerContext = createContext();

export default function Player({ children, ...props }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...props}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ trailerUrl, ...props }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  console.log(trailerUrl);
  const opts = {
    height: '480',
    width: '100%',
    playerVars: { autoplay: 1 }
  };

  return showPlayer
    ? ReactDOM.createPortal(
      <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
        <Inner>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} className="youtube" />}
          <Close />
        </Inner>
      </Overlay>,
      document.body
    )
    : null;
};

Player.Button = function PlayerButton({ ...props }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button
      onClick={() => {
        setShowPlayer(() => !showPlayer);
      }}
      {...props}
    >
      Play
    </Button>
  );
};
