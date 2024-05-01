import {
  useState,
  useEffect
} from 'react';

export default function Coins() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
        .then(response => response.json())
        .then(json => {
          setCoins(json);
          setLoading(false);
        });
  }, []);
  return (
    <article>
      <h2>The Coins! ({coins.length})</h2>
      {
        loading ? (
          <strong>Loading...</strong> : null
        ) : (
          <select>
            {coins.map(coin => (
              <option key={coin.id} value={coin.id}>
                {coin.name} ({coin.symbol})
              </option>
            ))}
          </select>
        )
      }
    </article>
  );
}
